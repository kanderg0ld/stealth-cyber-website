import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Cpu, ClipboardCheck, Brain, CheckCircle, ArrowRight } from 'lucide-react'
import BreadcrumbJsonLd from '@/components/structured-data/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'AI Security Services | AI Red Teaming, Governance & Training',
  description: 'Stealth Cyber\'s AI security practice: AI Red Teaming, AI Management Systems (ISO 42001), AI Readiness Assessments, and AI Red Team Training. Protect, govern, and test your AI systems.',
  alternates: { canonical: 'https://stealthcyber.io/services/ai' },
  openGraph: {
    title: 'AI Security Services | AI Red Teaming, Governance & Training',
    description: 'Stealth Cyber\'s AI security practice: AI Red Teaming, AI Management Systems (ISO 42001), AI Readiness Assessments, and AI Red Team Training. Protect, govern, and test your AI systems.',
    url: 'https://stealthcyber.io/services/ai',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Stealth Cyber AI Security Services' }],
  },
}

const stats = [
  { value: '50+', label: 'AI Systems Assessed' },
  { value: '20', label: 'AI Red Team Engagements' },
  { value: '10', label: 'Organisations AI-Ready Certified' },
  { value: '30+', label: 'AI Red Team Engineers Trained' },
  { value: 'ISO 42001', label: 'Lead Auditors on Staff' },
]

const services = [
  {
    id: 'ai-red-teaming',
    title: 'AI Red Teaming',
    shortTitle: 'AI Red Team',
    icon: <Shield className="w-8 h-8" />,
    tagline: 'Adversarial testing purpose-built for AI systems, aligned to AIUC-1',
    description: 'Traditional penetration testing doesn\'t cover AI. Our AI Red Team conducts purpose-built adversarial assessments against your AI and LLM systems, simulating the techniques real-world attackers use to manipulate, extract from, and compromise AI. Our testing methodology aligns to the AIUC-1 standard, the world\'s first AI agent security framework, covering security, safety, reliability, accountability, and data privacy across your AI estate.',
    features: [
      'Prompt injection & jailbreak testing',
      'Data extraction and privacy leakage assessment',
      'Model manipulation and adversarial input testing',
      'Training data poisoning risk assessment',
      'AI agent security assessment aligned to AIUC-1',
      'AI supply chain and dependency analysis',
      'OWASP Top 10 for LLM Applications coverage',
      'Detailed risk-rated report with remediation guidance',
    ],
    benefits: [
      'Discover AI vulnerabilities before attackers do',
      'Protect sensitive data processed by AI systems',
      'Testing aligned to AIUC-1, the global AI agent security standard',
    ],
  },
  {
    id: 'ai-management-systems',
    title: 'AI Management Systems',
    shortTitle: 'AI MS',
    icon: <Cpu className="w-8 h-8" />,
    tagline: 'ISO 42001-aligned AI governance frameworks',
    description: 'As AI regulation accelerates globally, organisations need structured governance. Stealth Cyber helps you design and implement an AI Management System (AIMS) aligned to ISO/IEC 42001, the international standard for responsible AI. We build the policies, processes, and controls needed to govern AI risk, address bias, ensure transparency, and demonstrate accountability.',
    features: [
      'ISO/IEC 42001 AIMS gap assessment and implementation',
      'AI risk register and impact assessment framework',
      'AI policy and ethics documentation',
      'Bias, fairness, and explainability controls',
      'Data governance integration for AI workloads',
      'AI lifecycle monitoring and incident management',
      'Board-level AI risk reporting',
    ],
    benefits: [
      'Demonstrate responsible AI use to regulators and clients',
      'Reduce liability from biased or opaque AI decisions',
      'Build a repeatable governance framework for all AI deployments',
    ],
  },
  {
    id: 'ai-readiness',
    title: 'AI Readiness Assessments',
    shortTitle: 'AI Readiness',
    icon: <ClipboardCheck className="w-8 h-8" />,
    tagline: 'Adopt AI with confidence, not risk',
    description: 'Before you deploy AI, you need to know if your organisation is ready. Our AI Readiness Assessment evaluates your data governance maturity, security controls, regulatory obligations, risk appetite, and organisational capability, giving you a clear roadmap to adopt AI safely and strategically.',
    features: [
      'Data governance and quality assessment',
      'Security control evaluation for AI workloads',
      'Regulatory and compliance landscape mapping',
      'Organisational AI capability and skills gap analysis',
      'AI use case risk classification',
      'Third-party AI vendor risk assessment',
      'Executive-ready AI readiness roadmap',
    ],
    benefits: [
      'Avoid costly AI failures and security incidents',
      'Understand your AI risk posture before you invest',
      'Align AI adoption with business strategy and compliance',
    ],
  },
  {
    id: 'ai-red-team-training',
    title: 'AI Red Team Training',
    shortTitle: 'AI Training',
    icon: <Brain className="w-8 h-8" />,
    tagline: 'Train your team to think like an AI attacker',
    description: 'Stealth Cyber trains the next generation of AI Red Team Engineers. Our hands-on training programmes equip security professionals with the skills to adversarially test LLMs, ML models, and generative AI systems. Delivered in-person or remotely, our courses combine theory with real-world labs and scenarios.',
    features: [
      'Hands-on adversarial AI testing techniques',
      'Prompt injection and jailbreak methodologies',
      'LLM and generative AI attack simulation',
      'ML model evasion and manipulation techniques',
      'AI-specific threat modelling aligned to AIUC-1',
      'Real-world lab environments and scenarios',
      'Certificate of completion for all participants',
    ],
    benefits: [
      'Build internal AI red team capability',
      'Upskill your security team for the AI era',
      'Reduce reliance on external AI security testing',
    ],
  },
]

export default function AIServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', url: 'https://stealthcyber.io' }, { name: 'Services', url: 'https://stealthcyber.io/services' }, { name: 'AI Security', url: 'https://stealthcyber.io/services/ai' }]} />

      {/* Hero */}
      <section className="bg-stealth-dark py-20 border-b border-stealth-cyan/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-stealth-cyan text-xs font-medium uppercase tracking-widest mb-4">AI Security</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Security, Red Teaming &amp; Governance
            </h1>
            <p className="text-stealth-gray text-lg leading-relaxed">
              AI is transforming business, but it&apos;s also creating an entirely new attack surface.
              Stealth Cyber&apos;s specialist AI security practice helps you adopt AI safely, govern it
              responsibly, and test it relentlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof Stats Bar */}
      <section className="bg-stealth-navy border-y border-stealth-cyan/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-stealth-sky to-stealth-cyan bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-stealth-gray text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-stealth-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-stealth-navy rounded-xl border border-stealth-cyan/10 p-8 scroll-mt-24"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-stealth-cyan/10 text-stealth-cyan">{service.icon}</div>
                  <div>
                    <div className="text-stealth-cyan text-xs font-medium uppercase tracking-wider">{service.shortTitle}</div>
                    <h2 className="text-white font-bold text-xl">{service.title}</h2>
                  </div>
                </div>
                <p className="text-stealth-cyan text-sm font-medium italic mb-3">{service.tagline}</p>
                <p className="text-stealth-gray leading-relaxed mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.benefits.map((b) => (
                    <div key={b} className="flex items-start gap-2 text-sm text-gray-300">
                      <ArrowRight className="w-4 h-4 text-stealth-cyan mt-0.5 shrink-0" />
                      {b}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">What&apos;s Included</h3>
                <ul className="space-y-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-stealth-gray">
                      <CheckCircle className="w-4 h-4 text-stealth-cyan mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-stealth-cyan text-stealth-dark font-semibold text-sm rounded hover:bg-white transition-colors"
                  >
                    Enquire About This Service <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Readiness Quiz CTA */}
      <section className="bg-stealth-dark py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-stealth-navy rounded-2xl border border-stealth-cyan/10 p-8 md:p-12 text-center">
            <div className="inline-flex items-center justify-center p-3 rounded-xl bg-stealth-cyan/10 mb-6">
              <ClipboardCheck className="w-8 h-8 text-stealth-cyan" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Is Your Business Ready for AI?
            </h2>
            <p className="text-stealth-gray max-w-2xl mx-auto mb-8 leading-relaxed">
              Take our free 5-minute AI Readiness Assessment and find out where your organisation
              stands. Get a personalised score with actionable recommendations, instantly.
            </p>
            <Link
              href="/ai-assessment"
              className="inline-flex items-center gap-2 px-8 py-3.5 btn-gradient text-white font-semibold rounded hover:opacity-90 transition-opacity"
              style={{ boxShadow: '0 4px 24px rgba(0,56,255,0.35)' }}
            >
              Take the AI Readiness Assessment <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stealth-navy border-t border-stealth-cyan/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Secure Your AI?</h2>
          <p className="text-stealth-gray text-lg max-w-2xl mx-auto mb-8">
            Whether you&apos;re deploying your first LLM or governing AI at scale, our team can help.
            Talk to us about your AI security needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-stealth-cyan text-stealth-dark font-semibold rounded hover:bg-white transition-colors"
          >
            Speak With Our Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
