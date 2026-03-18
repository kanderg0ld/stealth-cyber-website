import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

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
  firstName:    z.string().min(1).max(100).regex(/^[A-Za-zÀ-ÖØ-öø-ÿ'\-\s]+$/, 'Invalid characters in name'),
  lastName:     z.string().min(1).max(100).regex(/^[A-Za-zÀ-ÖØ-öø-ÿ'\-\s]+$/, 'Invalid characters in name'),
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

  const serviceLabels: Record<string, string> = {
    mdr: 'Managed Detection & Response',
    'incident-response': 'Incident Response',
    'essential-eight': 'Essential Eight',
    cmmc: 'CMMC Assessment',
    iso27001: 'ISO 27001',
    'ai-security': 'AI Security',
    'ai-management': 'AI Management Systems',
    grc: 'GRC & Compliance',
    mss: 'Managed Security Services',
    pentest: 'Penetration Testing',
    other: 'Other',
  }

  const serviceDisplay = data.service ? (serviceLabels[data.service] || data.service) : 'Not specified'

  try {
    // Send notification to sales
    await sgMail.send({
      to: 'sales@stealthcyber.io',
      from: { email: 'noreply@stealthcyber.io', name: 'Stealth Cyber Website' },
      replyTo: { email: data.email, name: `${data.firstName} ${data.lastName}` },
      subject: `New Enquiry: ${data.firstName} ${data.lastName}${data.organisation ? ` (${data.organisation})` : ''}`,
      html: `<!DOCTYPE html><html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#04050F;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#04050F;">
<tr><td align="center" style="padding:40px 16px;">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
  <tr><td style="padding:24px 32px;background:#07091A;border-radius:12px 12px 0 0;border-bottom:1px solid rgba(77,204,255,0.1);">
    <h1 style="color:#fff;font-size:20px;margin:0;">New Contact Enquiry</h1>
  </td></tr>
  <tr><td style="padding:32px;background:#07091A;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr><td style="padding:8px 0;color:#94A3B8;font-size:14px;width:120px;">Name</td><td style="padding:8px 0;color:#fff;font-size:14px;font-weight:600;">${data.firstName} ${data.lastName}</td></tr>
      <tr><td style="padding:8px 0;color:#94A3B8;font-size:14px;">Email</td><td style="padding:8px 0;"><a href="mailto:${data.email}" style="color:#4DCCFF;text-decoration:none;">${data.email}</a></td></tr>
      ${data.phone ? `<tr><td style="padding:8px 0;color:#94A3B8;font-size:14px;">Phone</td><td style="padding:8px 0;color:#fff;font-size:14px;">${data.phone}</td></tr>` : ''}
      ${data.organisation ? `<tr><td style="padding:8px 0;color:#94A3B8;font-size:14px;">Organisation</td><td style="padding:8px 0;color:#fff;font-size:14px;font-weight:600;">${data.organisation}</td></tr>` : ''}
      <tr><td style="padding:8px 0;color:#94A3B8;font-size:14px;">Service</td><td style="padding:8px 0;color:#4DCCFF;font-size:14px;">${serviceDisplay}</td></tr>
    </table>
    <div style="margin-top:24px;padding-top:24px;border-top:1px solid rgba(77,204,255,0.1);">
      <p style="color:#94A3B8;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px;">Message</p>
      <p style="color:#fff;font-size:14px;line-height:1.6;margin:0;white-space:pre-wrap;">${data.message}</p>
    </div>
  </td></tr>
  <tr><td style="padding:24px 32px;background:#04050F;text-align:center;border-radius:0 0 12px 12px;">
    <p style="color:#94A3B8;font-size:12px;margin:0;">Stealth Cyber Website Contact Form</p>
  </td></tr>
</table></td></tr></table></body></html>`,
    })

    // Send confirmation to the enquirer
    await sgMail.send({
      to: data.email,
      from: { email: 'noreply@stealthcyber.io', name: 'Stealth Cyber' },
      subject: 'We received your enquiry',
      html: `<!DOCTYPE html><html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#04050F;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#04050F;">
<tr><td align="center" style="padding:40px 16px;">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
  <tr><td style="padding:24px 32px;background:#07091A;border-bottom:1px solid rgba(77,204,255,0.1);border-radius:12px 12px 0 0;">
    <img src="https://stealthcyber.io/Primary-Reversed-Dark.png" alt="Stealth Cyber" height="32" style="height:32px;" />
  </td></tr>
  <tr><td style="padding:40px 32px;background:#07091A;">
    <h1 style="color:#fff;font-size:24px;margin:0 0 16px;">Thanks for reaching out, ${data.firstName}.</h1>
    <p style="color:#94A3B8;font-size:14px;line-height:1.6;margin:0 0 16px;">We've received your enquiry and a member of our team will be in touch shortly.</p>
    <p style="color:#94A3B8;font-size:14px;line-height:1.6;margin:0 0 24px;">In the meantime, you can take our free cybersecurity self-assessment to get an instant view of your security posture:</p>
    <a href="https://stealthcyber.io/assessment" style="display:inline-block;padding:14px 32px;background:linear-gradient(135deg,#0038FF,#6231F5);color:#fff;font-size:14px;font-weight:600;text-decoration:none;border-radius:8px;">Take the Free Self-Assessment</a>
  </td></tr>
  <tr><td style="padding:24px 32px;background:#07091A;border-top:1px solid rgba(77,204,255,0.1);">
    <p style="color:#94A3B8;font-size:13px;margin:0;">Need to speak with us urgently? Call us on <a href="tel:+61752308381" style="color:#4DCCFF;text-decoration:none;">+61 7 5230 8381</a> (AU) or <a href="tel:+18557742595" style="color:#4DCCFF;text-decoration:none;">+1 (855) 774-2595</a> (US).</p>
  </td></tr>
  <tr><td style="padding:24px 32px;background:#04050F;text-align:center;border-radius:0 0 12px 12px;">
    <p style="color:#94A3B8;font-size:12px;margin:0;">&copy; ${new Date().getFullYear()} Stealth Cyber Pty Ltd</p>
  </td></tr>
</table></td></tr></table></body></html>`,
    })
  } catch (err) {
    console.error('[contact] SendGrid error:', err)
  }

  return NextResponse.json({ success: true }, { status: 200 })
}

// Reject all other HTTP methods
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
