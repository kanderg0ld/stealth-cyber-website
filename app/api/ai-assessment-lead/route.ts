import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

const FROM_EMAIL = 'noreply@stealthcyber.io'
const SALES_EMAIL = 'sales@stealthcyber.io'
const CONTACT_EMAIL = 'contact@stealthcyber.io'

// ---------------------------------------------------------------------------
// CSRF
// ---------------------------------------------------------------------------
const ALLOWED_ORIGINS = [
  'https://stealthcyber.io',
  'https://www.stealthcyber.io',
  'https://blue-sand-0ab06dc00.6.azurestaticapps.net',
]
if (process.env.NODE_ENV === 'development') ALLOWED_ORIGINS.push('http://localhost:3000')

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

// ---------------------------------------------------------------------------
// Rate limiter
// ---------------------------------------------------------------------------
const rateLimitStore = new Map<string, { count: number; windowStart: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitStore.get(ip)
  if (!entry || now - entry.windowStart > 3600000) {
    rateLimitStore.set(ip, { count: 1, windowStart: now })
    return false
  }
  if (entry.count >= 5) return true
  entry.count++
  return false
}

// ---------------------------------------------------------------------------
// Risk level
// ---------------------------------------------------------------------------
function getReadinessLevel(score: number) {
  if (score <= 25) return { level: 'Not Ready', color: '#f87171' }
  if (score <= 50) return { level: 'Early Stage', color: '#fb923c' }
  if (score <= 75) return { level: 'Progressing', color: '#facc15' }
  return { level: 'AI Ready', color: '#4ade80' }
}

// ---------------------------------------------------------------------------
// Area recommendations
// ---------------------------------------------------------------------------
const areaGroups = [
  { group: 'AI Strategy & Governance', questionIds: [1, 2, 3], recommendations: { 1: 'Develop a documented AI strategy and policy that covers acceptable use, risk appetite, and governance responsibilities.', 2: 'Assign clear ownership for AI decisions — including a responsible executive and cross-functional oversight committee.', 3: 'Implement a formal approval process for new AI deployments that includes security, legal, and risk review.' } as Record<number, string> },
  { group: 'Data Governance & Privacy', questionIds: [4, 5, 6], recommendations: { 4: 'Map all data sources your AI systems access or train on. Understand what data flows in and out of every AI tool.', 5: 'Implement technical controls to prevent AI systems from exposing PII or sensitive business data in outputs.', 6: 'Extend your data classification policies to cover AI training data, prompts, and outputs.' } as Record<number, string> },
  { group: 'AI Security', questionIds: [7, 8, 9], recommendations: { 7: 'Conduct adversarial testing (AI red teaming) against your AI systems to identify prompt injection, jailbreak, and data extraction vulnerabilities.', 8: 'Implement strict access controls on AI models, configurations, and training pipelines. Audit access regularly.', 9: 'Deploy monitoring on AI system outputs and behaviour to detect anomalies, misuse, or compromise in real time.' } as Record<number, string> },
  { group: 'AI Safety & Reliability', questionIds: [10, 11, 12], recommendations: { 10: 'Implement output filtering and guardrails to prevent AI from generating harmful, misleading, or non-compliant content.', 11: 'Establish processes to detect, flag, and correct AI hallucinations — especially in business-critical workflows.', 12: 'Implement human-in-the-loop review for all high-stakes AI decisions before they are actioned.' } as Record<number, string> },
  { group: 'AI Risk Management', questionIds: [13, 14, 15], recommendations: { 13: 'Conduct a dedicated AI risk assessment covering security, privacy, bias, reliability, and regulatory risks for each deployment.', 14: 'Update your incident response plan to include AI-specific scenarios such as model compromise, data poisoning, and adversarial attacks.', 15: 'Assess the security and governance practices of all third-party AI vendors before granting them access to your data.' } as Record<number, string> },
  { group: 'AI Ethics & Transparency', questionIds: [16, 17], recommendations: { 16: 'Ensure AI decision-making processes are explainable and documentable for stakeholders, regulators, and affected individuals.', 17: 'Implement bias testing and fairness audits for AI systems, particularly those making decisions that impact people.' } as Record<number, string> },
  { group: 'AI Skills & Training', questionIds: [18, 19], recommendations: { 18: 'Invest in AI security training for your technical team — or engage a partner to fill the skills gap.', 19: 'Provide AI security awareness training to all staff who interact with AI tools, covering risks like data leakage and over-reliance.' } as Record<number, string> },
  { group: 'AI Infrastructure Readiness', questionIds: [20], recommendations: { 20: 'Assess whether your current IT infrastructure can securely support AI workloads — including compute, storage, networking, and access controls.' } as Record<number, string> },
]

function getGroupedRecommendations(answers: Record<string, number>) {
  const results: { group: string; items: string[] }[] = []
  for (const ag of areaGroups) {
    const items: string[] = []
    for (const qId of ag.questionIds) {
      const score = answers[String(qId)]
      if (score !== undefined && score < 2) items.push(ag.recommendations[qId])
    }
    if (items.length > 0) results.push({ group: ag.group, items })
  }
  return results
}

// ---------------------------------------------------------------------------
// Lead email
// ---------------------------------------------------------------------------
function buildLeadEmail(data: { name: string; score: number; readinessLevel: string; recommendations: { group: string; items: string[] }[] }) {
  const readiness = getReadinessLevel(data.score)
  const recsHtml = data.recommendations.length > 0
    ? data.recommendations.map((g) =>
        `<tr><td style="padding:16px 0 8px;font-size:14px;font-weight:600;color:#4DCCFF;text-transform:uppercase;letter-spacing:1px;border-bottom:1px solid #1a1f3a;">${g.group}</td></tr>` +
        g.items.map((item) => `<tr><td style="padding:12px 16px;font-size:14px;color:#94A3B8;line-height:1.6;background:#07091A;border-left:3px solid #4DCCFF;">${item}</td></tr>`).join('')
      ).join('')
    : '<tr><td style="padding:16px;font-size:14px;color:#94A3B8;">Your organisation demonstrates strong AI readiness. Consider advanced measures like AI red teaming and formal ISO 42001 certification.</td></tr>'

  return `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#04050F;font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#04050F;">
<tr><td align="center" style="padding:40px 16px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
  <tr><td style="padding:24px 32px;background:#07091A;border-bottom:1px solid rgba(77,204,255,0.1);border-radius:12px 12px 0 0;">
    <img src="https://stealthcyber.io/Primary-Reversed-Dark.png" alt="Stealth Cyber" height="32" style="height:32px;" />
  </td></tr>
  <tr><td style="padding:40px 32px;background:#07091A;text-align:center;">
    <p style="color:#94A3B8;font-size:14px;margin:0 0 8px;">Hi ${data.name},</p>
    <h1 style="color:#ffffff;font-size:24px;margin:0 0 24px;">Your AI Readiness Assessment Results</h1>
    <div style="display:inline-block;padding:32px 48px;background:#04050F;border-radius:16px;border:1px solid rgba(77,204,255,0.1);">
      <p style="color:${readiness.color};font-size:56px;font-weight:700;margin:0;line-height:1;">${data.score}</p>
      <p style="color:#94A3B8;font-size:14px;margin:4px 0 16px;">out of 100</p>
      <div style="display:inline-block;padding:6px 16px;border-radius:20px;background:rgba(77,204,255,0.05);border:1px solid ${readiness.color}33;">
        <span style="color:${readiness.color};font-size:14px;font-weight:600;">${data.readinessLevel}</span>
      </div>
    </div>
  </td></tr>
  <tr><td style="padding:0 32px 32px;background:#07091A;">
    <h2 style="color:#ffffff;font-size:18px;margin:0 0 16px;">Your Personalised Recommendations</h2>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${recsHtml}</table>
  </td></tr>
  <tr><td style="padding:32px;background:#07091A;text-align:center;border-top:1px solid rgba(77,204,255,0.1);">
    <h2 style="color:#ffffff;font-size:20px;margin:0 0 8px;">Want Help Getting AI Ready?</h2>
    <p style="color:#94A3B8;font-size:14px;margin:0 0 24px;line-height:1.6;">Our AI security specialists can conduct a thorough AI readiness review and build a roadmap tailored to your business.</p>
    <a href="https://stealthcyber.io/contact" style="display:inline-block;padding:14px 32px;background:linear-gradient(135deg,#0038FF,#6231F5);color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;border-radius:8px;">Speak With Our Team</a>
    <p style="color:#94A3B8;font-size:13px;margin:16px 0 0;">Or reach out directly at <a href="mailto:${CONTACT_EMAIL}" style="color:#4DCCFF;text-decoration:none;">${CONTACT_EMAIL}</a></p>
  </td></tr>
  <tr><td style="padding:24px 32px;background:#04050F;text-align:center;border-radius:0 0 12px 12px;">
    <p style="color:#94A3B8;font-size:12px;margin:0;">&copy; ${new Date().getFullYear()} Stealth Cyber Pty Ltd &middot; Gold Coast, AU &middot; S&atilde;o Paulo, BR &middot; Texas, US</p>
  </td></tr>
</table></td></tr></table></body></html>`
}

// ---------------------------------------------------------------------------
// Sales email
// ---------------------------------------------------------------------------
function buildSalesEmail(data: { name: string; email: string; company: string; score: number; readinessLevel: string; recommendations: { group: string; items: string[] }[] }) {
  const readiness = getReadinessLevel(data.score)
  const weakAreas = data.recommendations.map((g) => `<li style="color:#94A3B8;font-size:14px;padding:4px 0;">${g.group} (${g.items.length} issue${g.items.length > 1 ? 's' : ''})</li>`).join('')

  return `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#04050F;font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#04050F;">
<tr><td align="center" style="padding:40px 16px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
  <tr><td style="padding:24px 32px;background:#07091A;border-radius:12px 12px 0 0;border-bottom:1px solid rgba(77,204,255,0.1);">
    <h1 style="color:#ffffff;font-size:20px;margin:0;">New AI Readiness Assessment Lead</h1>
  </td></tr>
  <tr><td style="padding:32px;background:#07091A;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr><td style="padding:8px 0;color:#94A3B8;font-size:14px;width:120px;">Name</td><td style="padding:8px 0;color:#ffffff;font-size:14px;font-weight:600;">${data.name}</td></tr>
      <tr><td style="padding:8px 0;color:#94A3B8;font-size:14px;">Email</td><td style="padding:8px 0;"><a href="mailto:${data.email}" style="color:#4DCCFF;text-decoration:none;font-size:14px;">${data.email}</a></td></tr>
      <tr><td style="padding:8px 0;color:#94A3B8;font-size:14px;">Company</td><td style="padding:8px 0;color:#ffffff;font-size:14px;font-weight:600;">${data.company}</td></tr>
      <tr><td style="padding:8px 0;color:#94A3B8;font-size:14px;">Score</td><td style="padding:8px 0;color:${readiness.color};font-size:14px;font-weight:600;">${data.score}/100 — ${data.readinessLevel}</td></tr>
    </table>
  </td></tr>
  ${weakAreas ? `<tr><td style="padding:0 32px 32px;background:#07091A;"><h3 style="color:#ffffff;font-size:14px;margin:0 0 8px;">Weak Areas</h3><ul style="margin:0;padding-left:20px;">${weakAreas}</ul></td></tr>` : ''}
  <tr><td style="padding:24px 32px;background:#04050F;text-align:center;border-radius:0 0 12px 12px;">
    <p style="color:#94A3B8;font-size:12px;margin:0;">Stealth Cyber AI Readiness Assessment Lead Notification</p>
  </td></tr>
</table></td></tr></table></body></html>`
}

// ---------------------------------------------------------------------------
// Route handler
// ---------------------------------------------------------------------------
export async function POST(request: NextRequest) {
  if (!isTrustedOrigin(request)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const ip = request.headers.get('cf-connecting-ip') || request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown'
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests.' }, { status: 429, headers: { 'Retry-After': '3600' } })
  }

  let body: { name: string; email: string; company: string; score: number; readinessLevel: string; answers: Record<string, number>; completedAt: string }
  try { body = await request.json() }
  catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }) }

  if (!body.name || !body.email || !body.company || body.score === undefined) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 422 })
  }

  const name = body.name.trim().replace(/<[^>]*>/g, '').slice(0, 200)
  const email = body.email.trim().toLowerCase().slice(0, 254)
  const company = body.company.trim().replace(/<[^>]*>/g, '').slice(0, 200)
  const score = Math.max(0, Math.min(100, Math.round(body.score)))
  const readinessLevel = body.readinessLevel || getReadinessLevel(score).level

  if (/[\r\n]/.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 422 })
  }

  const recommendations = getGroupedRecommendations(body.answers || {})

  try {
    await sgMail.send({
      to: email,
      from: { email: FROM_EMAIL, name: 'Stealth Cyber' },
      subject: `Your AI Readiness Assessment Results — ${score}/100 (${readinessLevel})`,
      html: buildLeadEmail({ name, score, readinessLevel, recommendations }),
    })
    await sgMail.send({
      to: SALES_EMAIL,
      from: { email: FROM_EMAIL, name: 'Stealth Cyber AI Assessment' },
      subject: `New AI Assessment Lead: ${name} (${company}) — ${score}/100 ${readinessLevel}`,
      html: buildSalesEmail({ name, email, company, score, readinessLevel, recommendations }),
    })
  } catch (err) {
    console.error('[ai-assessment-lead] SendGrid error:', err)
  }

  return NextResponse.json({ success: true }, { status: 200 })
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
