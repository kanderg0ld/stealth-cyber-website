import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// ---------------------------------------------------------------------------
// Rate limiter — in-memory, per IP. Resets on cold-start.
// For production at scale, replace with Upstash Redis or Azure Cache.
// ---------------------------------------------------------------------------
const RATE_LIMIT_MAX = 5          // max submissions
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000  // per hour

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
// Input schema — Zod validates types AND enforces length/format limits.
// ---------------------------------------------------------------------------
const ALLOWED_SERVICES = [
  'mdr', 'incident-response', 'essential-eight', 'cmmc', 'iso27001',
  'ai-security', 'ai-management', 'grc', 'mss', 'pentest', 'other', '',
] as const

const contactSchema = z.object({
  firstName:    z.string().min(1).max(100).regex(/^[\p{L}\p{M}'\-\s]+$/u, 'Invalid characters in name'),
  lastName:     z.string().min(1).max(100).regex(/^[\p{L}\p{M}'\-\s]+$/u, 'Invalid characters in name'),
  email:        z.string().email().max(254),
  phone:        z.string().max(30).regex(/^[\d\s\+\-\(\)]*$/, 'Invalid phone number').optional().or(z.literal('')),
  organisation: z.string().max(200).optional().or(z.literal('')),
  service:      z.enum(ALLOWED_SERVICES).optional().or(z.literal('')),
  message:      z.string().min(10).max(5000),
})

// ---------------------------------------------------------------------------
// Sanitise — strip leading/trailing whitespace; remove control characters
// and any HTML tags from free-text fields to prevent stored XSS / injection.
// ---------------------------------------------------------------------------
function sanitise(value: string): string {
  return value
    .trim()
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')  // strip control chars
    .replace(/<[^>]*>/g, '')                               // strip HTML tags
}

// ---------------------------------------------------------------------------
// CSRF — verify the request originates from our own domain.
// We check both Origin and Referer headers.
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
    try {
      return ALLOWED_ORIGINS.some((o) => referer.startsWith(o))
    } catch { return false }
  }
  // Requests with neither header (e.g., direct server-to-server) are rejected.
  return false
}

// ---------------------------------------------------------------------------
// Route handler
// ---------------------------------------------------------------------------
export async function POST(request: NextRequest) {
  // CSRF check
  if (!isTrustedOrigin(request)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  // Rate limiting — use CF-Connecting-IP (Azure/CDN), fall back to x-forwarded-for
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

  // Parse body — reject if not JSON or form-encoded
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

  // Validate with Zod
  const parsed = contactSchema.safeParse(raw)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', issues: parsed.error.flatten().fieldErrors },
      { status: 422 }
    )
  }

  // Sanitise all string fields
  const data = {
    firstName:    sanitise(parsed.data.firstName),
    lastName:     sanitise(parsed.data.lastName),
    email:        sanitise(parsed.data.email).toLowerCase(),
    phone:        sanitise(parsed.data.phone || ''),
    organisation: sanitise(parsed.data.organisation || ''),
    service:      parsed.data.service || '',
    message:      sanitise(parsed.data.message),
  }

  // Additional email injection guard — reject if newlines appear in email after sanitisation
  if (/[\r\n]/.test(data.email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 422 })
  }

  // TODO: Send email via configured transactional email provider (e.g., SendGrid, Resend, Azure Communication Services).
  // Example:
  //   await sendEmail({ to: process.env.CONTACT_EMAIL, subject: `New enquiry from ${data.firstName}`, body: ... })
  //
  // For now, log to server (never exposes data to client) and return success.
  console.info('[contact] Submission received', {
    service: data.service,
    hasPhone: !!data.phone,
    timestamp: new Date().toISOString(),
    // Do NOT log email, name, or message in production — consider a proper logging service.
  })

  return NextResponse.json({ success: true }, { status: 200 })
}

// Reject all other HTTP methods
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
