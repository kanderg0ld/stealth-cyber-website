import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'
import { z } from 'zod'

// ---------------------------------------------------------------------------
// SendGrid setup
// ---------------------------------------------------------------------------
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

const FROM_EMAIL = 'noreply@stealthcyber.io'
const SALES_EMAIL = 'sales@stealthcyber.io'
const CONTACT_EMAIL = 'contact@stealthcyber.io'

// ---------------------------------------------------------------------------
// CSRF — verify the request originates from our own domain
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
  return false
}

// ---------------------------------------------------------------------------
// Rate limiter — in-memory, per IP
// ---------------------------------------------------------------------------
const RATE_LIMIT_MAX = 5
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
// Risk level helper
// ---------------------------------------------------------------------------
function getRiskLevel(score: number) {
  if (score <= 25) return { level: 'Critical', color: '#f87171' }
  if (score <= 50) return { level: 'High', color: '#fb923c' }
  if (score <= 75) return { level: 'Medium', color: '#facc15' }
  return { level: 'Low', color: '#4ade80' }
}

// ---------------------------------------------------------------------------
// Build email for the lead (their results)
// ---------------------------------------------------------------------------
function buildLeadEmail(data: {
  name: string
  score: number
  riskLevel: string
  recommendations: { group: string; items: string[] }[]
}) {
  const risk = getRiskLevel(data.score)

  const recsHtml = data.recommendations.length > 0
    ? data.recommendations
        .map(
          (g) =>
            `<tr><td style="padding:16px 0 8px;font-size:14px;font-weight:600;color:#4DCCFF;text-transform:uppercase;letter-spacing:1px;border-bottom:1px solid #1a1f3a;">${g.group}</td></tr>` +
            g.items
              .map(
                (item) =>
                  `<tr><td style="padding:12px 16px;font-size:14px;color:#94A3B8;line-height:1.6;background:#07091A;border-left:3px solid #4DCCFF;margin:4px 0;">${item}</td></tr>`
              )
              .join('')
        )
        .join('')
    : '<tr><td style="padding:16px;font-size:14px;color:#94A3B8;">Your organisation demonstrates strong cybersecurity fundamentals. Consider advanced measures like penetration testing and threat hunting to stay ahead.</td></tr>'

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#04050F;font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#04050F;">
<tr><td align="center" style="padding:40px 16px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

  <!-- Header -->
  <tr><td style="padding:24px 32px;background:#07091A;border-bottom:1px solid rgba(77,204,255,0.1);border-radius:12px 12px 0 0;">
    <img src="https://stealthcyber.io/Primary-Reversed-Dark.png" alt="Stealth Cyber" height="32" style="height:32px;" />
  </td></tr>

  <!-- Score Section -->
  <tr><td style="padding:40px 32px;background:#07091A;text-align:center;">
    <p style="color:#94A3B8;font-size:14px;margin:0 0 8px;">Hi ${data.name},</p>
    <h1 style="color:#ffffff;font-size:24px;margin:0 0 24px;">Your Cybersecurity Assessment Results</h1>
    <div style="display:inline-block;padding:32px 48px;background:#04050F;border-radius:16px;border:1px solid rgba(77,204,255,0.1);">
      <p style="color:${risk.color};font-size:56px;font-weight:700;margin:0;line-height:1;">${data.score}</p>
      <p style="color:#94A3B8;font-size:14px;margin:4px 0 16px;">out of 100</p>
      <div style="display:inline-block;padding:6px 16px;border-radius:20px;background:rgba(77,204,255,0.05);border:1px solid ${risk.color}33;">
        <span style="color:${risk.color};font-size:14px;font-weight:600;">${data.riskLevel} Risk</span>
      </div>
    </div>
  </td></tr>

  <!-- Recommendations -->
  <tr><td style="padding:0 32px 32px;background:#07091A;">
    <h2 style="color:#ffffff;font-size:18px;margin:0 0 16px;">Your Personalised Recommendations</h2>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${recsHtml}
    </table>
  </td></tr>

  <!-- CTA -->
  <tr><td style="padding:32px;background:#07091A;text-align:center;border-top:1px solid rgba(77,204,255,0.1);">
    <h2 style="color:#ffffff;font-size:20px;margin:0 0 8px;">Want to Close the Gaps?</h2>
    <p style="color:#94A3B8;font-size:14px;margin:0 0 24px;line-height:1.6;">
      This self-assessment gives you a high-level view. Our team can conduct a thorough security review and provide a detailed remediation roadmap tailored to your business.
    </p>
    <a href="https://stealthcyber.io/contact" style="display:inline-block;padding:14px 32px;background:linear-gradient(135deg,#0038FF,#6231F5);color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;border-radius:8px;">
      Speak With Our Team
    </a>
    <p style="color:#94A3B8;font-size:13px;margin:16px 0 0;">
      Or reach out directly at <a href="mailto:${CONTACT_EMAIL}" style="color:#4DCCFF;text-decoration:none;">${CONTACT_EMAIL}</a>
    </p>
  </td></tr>

  <!-- Footer -->
  <tr><td style="padding:24px 32px;background:#04050F;text-align:center;border-radius:0 0 12px 12px;">
    <p style="color:#94A3B8;font-size:12px;margin:0;">
      © ${new Date().getFullYear()} Stealth Cyber Pty Ltd · Gold Coast, AU · São Paulo, BR · Texas, US
    </p>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`
}

// ---------------------------------------------------------------------------
// Build email for sales team (lead notification)
// ---------------------------------------------------------------------------
function buildSalesEmail(data: {
  name: string
  email: string
  company: string
  score: number
  riskLevel: string
  answers: Record<string, number>
  recommendations: { group: string; items: string[] }[]
}) {
  const risk = getRiskLevel(data.score)

  const weakAreas = data.recommendations
    .map((g) => `<li style="color:#94A3B8;font-size:14px;padding:4px 0;">${g.group} (${g.items.length} issue${g.items.length > 1 ? 's' : ''})</li>`)
    .join('')

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#04050F;font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#04050F;">
<tr><td align="center" style="padding:40px 16px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

  <tr><td style="padding:24px 32px;background:#07091A;border-radius:12px 12px 0 0;border-bottom:1px solid rgba(77,204,255,0.1);">
    <h1 style="color:#ffffff;font-size:20px;margin:0;">New Assessment Lead</h1>
  </td></tr>

  <tr><td style="padding:32px;background:#07091A;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td style="padding:8px 0;color:#94A3B8;font-size:14px;width:120px;">Name</td>
        <td style="padding:8px 0;color:#ffffff;font-size:14px;font-weight:600;">${data.name}</td>
      </tr>
      <tr>
        <td style="padding:8px 0;color:#94A3B8;font-size:14px;">Email</td>
        <td style="padding:8px 0;"><a href="mailto:${data.email}" style="color:#4DCCFF;text-decoration:none;font-size:14px;">${data.email}</a></td>
      </tr>
      <tr>
        <td style="padding:8px 0;color:#94A3B8;font-size:14px;">Company</td>
        <td style="padding:8px 0;color:#ffffff;font-size:14px;font-weight:600;">${data.company}</td>
      </tr>
      <tr>
        <td style="padding:8px 0;color:#94A3B8;font-size:14px;">Score</td>
        <td style="padding:8px 0;color:${risk.color};font-size:14px;font-weight:600;">${data.score}/100 — ${data.riskLevel} Risk</td>
      </tr>
    </table>
  </td></tr>

  ${weakAreas ? `<tr><td style="padding:0 32px 32px;background:#07091A;">
    <h3 style="color:#ffffff;font-size:14px;margin:0 0 8px;">Weak Areas</h3>
    <ul style="margin:0;padding-left:20px;">${weakAreas}</ul>
  </td></tr>` : ''}

  <tr><td style="padding:24px 32px;background:#04050F;text-align:center;border-radius:0 0 12px 12px;">
    <p style="color:#94A3B8;font-size:12px;margin:0;">Stealth Cyber Assessment Lead Notification</p>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`
}

// ---------------------------------------------------------------------------
// Build grouped recommendations from answers (mirrors client-side logic)
// ---------------------------------------------------------------------------
const areaGroups = [
  { group: 'Application & Access Control', questionIds: [1, 2, 3], recommendations: { 1: 'Implement application whitelisting to control which software can run on your business devices.', 2: 'Tighten privileged access by assigning individual admin accounts and conducting quarterly access reviews.', 3: 'Block Microsoft Office macros by default. Only allow digitally signed macros from trusted publishers.' } as Record<number, string> },
  { group: 'Patching & Updates', questionIds: [4, 5, 6], recommendations: { 4: 'Establish automated patch management for operating systems. Apply critical patches within 48 hours.', 5: 'Create an inventory of all business applications and keep them updated. Prioritise internet-facing apps.', 6: 'Audit your environment for end-of-life software and create a replacement plan with deadlines.' } as Record<number, string> },
  { group: 'Authentication', questionIds: [7, 8], recommendations: { 7: 'Enable multi-factor authentication on all user accounts and business systems immediately.', 8: 'Roll out a company-wide password manager and enforce unique, strong passwords for every account.' } as Record<number, string> },
  { group: 'Backups & Recovery', questionIds: [9, 10], recommendations: { 9: 'Implement automated daily backups of all critical data, stored offsite or in an immutable format.', 10: 'Schedule quarterly backup restore tests and document the results.' } as Record<number, string> },
  { group: 'Application Hardening', questionIds: [11, 12], recommendations: { 11: 'Harden web browsers by blocking unnecessary plugins and enabling ad-blocking across all devices.', 12: 'Restrict browser extensions to an approved list and remove unapproved extensions.' } as Record<number, string> },
  { group: 'Incident Response', questionIds: [13, 14], recommendations: { 13: 'Develop a documented incident response plan with clear roles, escalation paths, and communication templates.', 14: 'Run tabletop exercises or incident simulations at least annually.' } as Record<number, string> },
  { group: 'Security Awareness', questionIds: [15, 16], recommendations: { 15: 'Implement ongoing cybersecurity awareness training for all staff, updated regularly.', 16: 'Start running regular phishing simulations and provide targeted follow-up training.' } as Record<number, string> },
  { group: 'Data Protection', questionIds: [17, 18], recommendations: { 17: 'Ensure all sensitive data is encrypted at rest and in transit. Enable full-disk encryption on all laptops.', 18: 'Conduct a data discovery exercise to map where all sensitive information is stored.' } as Record<number, string> },
  { group: 'Third-Party & Supply Chain', questionIds: [19], recommendations: { 19: 'Establish a vendor risk assessment process for any supplier with access to your data or systems.' } as Record<number, string> },
  { group: 'Security Policies & Governance', questionIds: [20], recommendations: { 20: 'Develop comprehensive cybersecurity policies covering acceptable use, data handling, and access management.' } as Record<number, string> },
]

function getGroupedRecommendations(answers: Record<string, number>) {
  const results: { group: string; items: string[] }[] = []
  for (const ag of areaGroups) {
    const items: string[] = []
    for (const qId of ag.questionIds) {
      const score = answers[String(qId)]
      if (score !== undefined && score < 2) {
        items.push(ag.recommendations[qId])
      }
    }
    if (items.length > 0) results.push({ group: ag.group, items })
  }
  return results
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

  const assessmentLeadSchema = z.object({
    name: z.string().min(1).max(200),
    email: z.string().email().max(254),
    company: z.string().min(1).max(200),
    score: z.number().min(0).max(100),
    riskLevel: z.string().max(50),
    answers: z.record(z.string(), z.number().min(0).max(3)),
    completedAt: z.string(),
  })

  let raw: unknown
  try {
    raw = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const parsed = assessmentLeadSchema.safeParse(raw)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation failed', details: parsed.error.flatten() }, { status: 422 })
  }

  const body = parsed.data

  // Sanitise inputs
  const name = body.name.trim().replace(/<[^>]*>/g, '')
  const email = body.email.trim().toLowerCase()
  const company = body.company.trim().replace(/<[^>]*>/g, '')
  const score = Math.max(0, Math.min(100, Math.round(body.score)))
  const riskLevel = body.riskLevel || getRiskLevel(score).level

  if (/[\r\n]/.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 422 })
  }

  const recommendations = getGroupedRecommendations(body.answers || {})

  try {
    // Send results to the lead
    await sgMail.send({
      to: email,
      from: { email: FROM_EMAIL, name: 'Stealth Cyber' },
      subject: `Your Cybersecurity Assessment Results — ${score}/100 (${riskLevel} Risk)`,
      html: buildLeadEmail({ name, score, riskLevel, recommendations }),
    })

    // Send lead notification to sales
    await sgMail.send({
      to: SALES_EMAIL,
      from: { email: FROM_EMAIL, name: 'Stealth Cyber Assessment' },
      subject: `New Assessment Lead: ${name} (${company}) — ${score}/100 ${riskLevel} Risk`,
      html: buildSalesEmail({ name, email, company, score, riskLevel, answers: body.answers, recommendations }),
    })
  } catch (err) {
    console.error('[assessment-lead] SendGrid error:', err)
    // Still return success so the user sees their results
  }

  return NextResponse.json({ success: true }, { status: 200 })
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
