import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { RateLimiter, clientIp, isTrustedOrigin } from '@/lib/form-guard'

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

// Per IP; see lib/form-guard.ts for why only Azure-set headers are trusted.
const limiter = new RateLimiter(10, 60 * 60 * 1000)

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

  const ip = clientIp(request)
  if (ip !== 'unknown' && limiter.hit(ip)) {
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
