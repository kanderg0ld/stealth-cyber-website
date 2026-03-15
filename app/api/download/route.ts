import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// ---------------------------------------------------------------------------
// SSRF protection — only these hostnames may appear in a fileUrl.
// Sanity CDN is the only legitimate source of downloadable assets.
// ---------------------------------------------------------------------------
const ALLOWED_FILE_HOSTS = ['cdn.sanity.io']

function isSafeFileUrl(raw: string): boolean {
  try {
    const url = new URL(raw)
    if (url.protocol !== 'https:') return false
    return ALLOWED_FILE_HOSTS.some(
      (h) => url.hostname === h || url.hostname.endsWith(`.${h}`)
    )
  } catch {
    return false
  }
}

// ---------------------------------------------------------------------------
// Rate limiter — same pattern as /api/contact
// ---------------------------------------------------------------------------
const RATE_LIMIT_MAX = 10
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000

const rateLimitStore = new Map<string, { count: number; windowStart: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitStore.get(ip)
  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitStore.set(ip, { count: 1, windowStart: now })
    return false
  }
  if (entry.count >= RATE_LIMIT_MAX) return true
  entry.count++
  return false
}

// ---------------------------------------------------------------------------
// Input schema
// ---------------------------------------------------------------------------
const downloadSchema = z.object({
  resourceId:    z.string().max(50).regex(/^[a-zA-Z0-9\-_]+$/, 'Invalid resource ID'),
  resourceTitle: z.string().max(200),
  fileUrl:       z.string().url().max(500),
  name:          z.string().min(1).max(100),
  email:         z.string().email().max(254),
  company:       z.string().max(200).optional().or(z.literal('')),
})

// ---------------------------------------------------------------------------
// CSRF
// ---------------------------------------------------------------------------
const ALLOWED_ORIGINS = [
  'https://stealthcyber.io',
  'https://www.stealthcyber.io',
  'https://blue-sand-0ab06dc00.6.azurestaticapps.net',
]

if (process.env.NODE_ENV === 'development') {
  ALLOWED_ORIGINS.push('http://localhost:3000')
}

function isTrustedOrigin(request: NextRequest): boolean {
  const origin = request.headers.get('origin')
  const referer = request.headers.get('referer')
  if (origin) return ALLOWED_ORIGINS.includes(origin)
  if (referer) {
    try { return ALLOWED_ORIGINS.some((o) => referer.startsWith(o)) }
    catch { return false }
  }
  return false
}

function sanitise(value: string): string {
  return value.trim().replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '').replace(/<[^>]*>/g, '')
}

// ---------------------------------------------------------------------------
// Route handler
// ---------------------------------------------------------------------------
export async function POST(request: NextRequest) {
  if (!isTrustedOrigin(request)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const ip =
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    'unknown'

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429, headers: { 'Retry-After': '3600' } }
    )
  }

  let raw: Record<string, unknown>
  const contentType = request.headers.get('content-type') || ''

  if (contentType.includes('application/json')) {
    try { raw = await request.json() }
    catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }) }
  } else if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
    const form = await request.formData()
    raw = Object.fromEntries(form.entries())
  } else {
    return NextResponse.json({ error: 'Unsupported content type' }, { status: 415 })
  }

  const parsed = downloadSchema.safeParse(raw)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', issues: parsed.error.flatten().fieldErrors },
      { status: 422 }
    )
  }

  // SSRF guard — validate fileUrl against the Sanity CDN allowlist AFTER Zod validation.
  // This is the critical check: prevents an attacker-controlled Sanity entry from
  // redirecting our server to fetch internal Azure metadata, localhost, or private IPs.
  if (!isSafeFileUrl(parsed.data.fileUrl)) {
    console.warn('[download] Blocked unsafe fileUrl', { resourceId: parsed.data.resourceId })
    return NextResponse.json({ error: 'Invalid file URL' }, { status: 422 })
  }

  const data = {
    resourceId:    parsed.data.resourceId,
    resourceTitle: sanitise(parsed.data.resourceTitle),
    fileUrl:       parsed.data.fileUrl,
    name:          sanitise(parsed.data.name),
    email:         sanitise(parsed.data.email).toLowerCase(),
    company:       sanitise(parsed.data.company || ''),
  }

  // Email injection guard
  if (/[\r\n]/.test(data.email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 422 })
  }

  // TODO: Record the download lead (CRM / email / database).
  // Return the validated, allowlisted fileUrl for the client to redirect to.
  // The client performs the download directly from cdn.sanity.io — we never proxy the file,
  // which prevents us from being used as an open proxy and eliminates server-side file-fetch SSRF.
  console.info('[download] Resource access granted', {
    resourceId: data.resourceId,
    timestamp: new Date().toISOString(),
  })

  return NextResponse.json({ success: true, fileUrl: data.fileUrl }, { status: 200 })
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
