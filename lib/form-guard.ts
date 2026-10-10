import type { NextRequest } from 'next/server'

/*
 * Shared protections for the public form endpoints (contact, assessment leads,
 * downloads). These endpoints send email from noreply@stealthcyber.io, which
 * passes SPF/DKIM/DMARC, so anything that lets a stranger choose the recipient
 * or the content is a phishing relay. Every check here exists for that reason.
 */

// ---------------------------------------------------------------------------
// Origin check. Stops cross-site browser submissions (CSRF). It does NOT stop
// scripts, which can send any Origin header; the rate limits below do that.
// ---------------------------------------------------------------------------
const ALLOWED_ORIGINS = [
  'https://stealthcyber.io',
  'https://www.stealthcyber.io',
  'https://blue-sand-0ab06dc00.6.azurestaticapps.net',
]
if (process.env.NODE_ENV === 'development') ALLOWED_ORIGINS.push('http://localhost:3000')

export function isTrustedOrigin(request: NextRequest): boolean {
  const origin = request.headers.get('origin')
  if (origin) return ALLOWED_ORIGINS.includes(origin)
  const referer = request.headers.get('referer')
  if (!referer) return false
  try {
    return ALLOWED_ORIGINS.includes(new URL(referer).origin)
  } catch {
    return false
  }
}

// ---------------------------------------------------------------------------
// Client IP. Only headers the Azure edge sets itself are trusted. The previous
// code read `cf-connecting-ip` first, but the site is not behind Cloudflare,
// so that header was whatever the caller sent and the rate limit could be
// bypassed by changing it on every request. `x-forwarded-for` is not used for
// the same reason: a caller can put any value in it.
// ---------------------------------------------------------------------------
export function clientIp(request: NextRequest): string {
  const raw =
    request.headers.get('x-azure-clientip') ||
    request.headers.get('x-client-ip') ||
    'unknown'
  // Azure may append a port ("1.2.3.4:5678"); IPv6 arrives bracketed.
  return raw.trim().replace(/^\[([^\]]+)\](:\d+)?$/, '$1').replace(/^(\d+\.\d+\.\d+\.\d+):\d+$/, '$1')
}

// ---------------------------------------------------------------------------
// Fixed-window limiter, in memory. Per-instance and reset on cold start, so it
// is a brake, not a guarantee; the per-recipient and global caps make abuse
// pointless even if a caller gets round the per-IP one.
// ---------------------------------------------------------------------------
export class RateLimiter {
  private store = new Map<string, { count: number; start: number }>()
  constructor(private max: number, private windowMs: number) {}

  /** Records a hit; returns true if the key is over its limit. */
  hit(key: string): boolean {
    const now = Date.now()
    if (this.store.size > 5000) {
      this.store.forEach((v, k) => {
        if (now - v.start > this.windowMs) this.store.delete(k)
      })
    }
    const entry = this.store.get(key)
    if (!entry || now - entry.start > this.windowMs) {
      this.store.set(key, { count: 1, start: now })
      return false
    }
    entry.count++
    return entry.count > this.max
  }
}

const HOUR = 60 * 60 * 1000

/**
 * The checks every email-sending endpoint runs: per IP before parsing, then
 * per recipient address and a global cap per server instance before sending.
 * Each returns true when the request should be refused.
 */
export function makeSendGuard(opts: { perIp: number; perRecipient: number; global: number }) {
  const byIp = new RateLimiter(opts.perIp, HOUR)
  const byRecipient = new RateLimiter(opts.perRecipient, HOUR)
  const overall = new RateLimiter(opts.global, HOUR)
  return {
    checkIp(request: NextRequest): boolean {
      const ip = clientIp(request)
      // With no platform IP, every caller would share one key and the forms
      // would lock for everyone; the recipient and global caps still apply.
      if (ip === 'unknown') return false
      return byIp.hit(ip)
    },
    checkSend(recipient: string): boolean {
      return byRecipient.hit(recipient.toLowerCase()) || overall.hit('all')
    },
  }
}

// ---------------------------------------------------------------------------
// Output encoding for HTML email. Stripping tags (the previous approach) left
// unclosed tags, attribute quotes and entities through.
// ---------------------------------------------------------------------------
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/** Removes control characters (including CR/LF) for subjects and headers. */
export function singleLine(value: string): string {
  return value.replace(/[\x00-\x1F\x7F]+/g, ' ').trim()
}

/**
 * Names that go into emails sent to arbitrary recipients are letters, spaces,
 * apostrophes and hyphens only. No digits, dots, slashes or colons, so a
 * "name" can't carry a URL or domain that a mail client would auto-link.
 * (Built with the constructor: the tsconfig target predates the `u` flag.)
 */
export const PERSON_NAME = new RegExp("^[\\p{L}\\p{M}' -]+$", 'u')
const NOT_NAME_CHARS = new RegExp("[^\\p{L}\\p{M}' -]+", 'gu')

/**
 * For greetings in emails to the address a visitor typed in. Rather than
 * rejecting "Dr. Jane" (the quiz shows results even if the save fails, so a
 * rejection would silently lose the lead), drop anything that isn't part of a
 * plain name. The sales copy keeps the original, escaped.
 */
export function greetingName(name: string): string {
  const cleaned = name.replace(NOT_NAME_CHARS, ' ').replace(/\s+/g, ' ').trim().slice(0, 60)
  return cleaned || 'there'
}
