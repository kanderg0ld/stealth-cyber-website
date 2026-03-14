import type { Metadata } from 'next'
import Link from 'next/link'
import { Eye, AlertTriangle, ClipboardCheck, Server, Lock, Award, CheckCircle, ArrowRight } from 'lucide-react'
import BreadcrumbJsonLd from '@/components/structured-data/BreadcrumbJsonLd'
import ServiceJsonLd from '@/components/structured-data/ServiceJsonLd'

export const metadata: Metadata = {
  title: 'Cybersecurity Services',
  description: 'Explore Stealth Cyber\'s full suite of cybersecurity services for Australian SMBs: MDR, Incident Response, Essential Eight compliance, GRC, and more.',
}

const services = [
  {
    id: 'mdr',
    title: 'Managed Detection & Response (MDR)',
    shortTitle: 'MDR',
    icon: <Eye className="w-8 h-8" />,
    tagline: '24/7 threat detection and rapid containment',
    description: 'Our Managed Detection and Response service provides continuous monitoring of your entire IT environment — endpoints, network, cloud, and email. Our Australian SOC analysts investigate every alert in real time, separating genuine threats from false positives and containing incidents before they escalate.',
    features: [
      '24/7/365 security operations centre monitoring',
      'Endpoint Detection and Response (EDR) integration',
      'Cloud security monitoring (Azure, AWS, Microsoft 365)',
      'Threat intelligence-enriched alert triage',
      'Automated containment and manual response playbooks',
      'Monthly threat reports and risk briefings',
    ],
    benefits: [
      'Detect threats in minutes, not days',
      'Reduce dwell time and limit breach impact',
      'No need to hire a full in-house SOC team',
    ],
  },
  {
    id: 'incident-response',
    title: 'Incident Response',
    shortTitle: 'IR',
    icon: <AlertTriangle className="w-8 h-8" />,
    tagline: 'Rapid mobilisation when every second counts',
    description: 'A cyberattack demands an immediate, coordinated response. Stealth Cyber\'s Digital Forensics and Incident Response (DFIR) team is on call 24/7 to help you contain the damage, eradicate the threat, and recover operations with minimal disruption. We handle ransomware, business email compromise, data breaches, and more.',
    features: [
      '24/7 emergency incident response hotline',
      'Rapid remote or on-site deployment (QLD and nationally)',
      'Malware analysis and threat attribution',
      'Evidence preservation and chain-of-custody forensics',
      'Ransomware negotiation advisory support',
      'Post-incident review and hardening recommendations',
    ],
    benefits: [
      'Minimise operational downtime',
      'Reduce regulatory and legal exposure',
      'Prevent recurrence with root-cause analysis',
    ],
  },
  {
    id: 'essential-eight',
    title: 'Essential Eight Compliance',
    shortTitle: 'E8',
    icon: <ClipboardCheck className="w-8 h-8" />,
    tagline: 'ACSC Essential Eight maturity uplift for Australian businesses',
    description: 'The Australian Cyber Security Centre\'s Essential Eight framework defines eight core mitigation strategies that significantly reduce cyber risk. Stealth Cyber assesses your current maturity level against the Essential Eight, identifies gaps, and implements the controls needed to achieve your target maturity level — from Level 0 to Level 3.',
    features: [
      'Essential Eight gap assessment and maturity scoring',
      'Application control implementation',
      'Patching for applications and operating systems',
      'Multi-factor authentication deployment',
      'Restrict Microsoft Office macros',
      'User application hardening',
      'Regular backups and recovery testing',
    ],
    benefits: [
      'Meet Australian government and insurance requirements',
      'Systematically reduce your attack surface',
      'Clear, measurable progress toward compliance targets',
    ],
  },
  {
    id: 'grc',
    title: 'GRC & Compliance',
    shortTitle: 'GRC',
    icon: <Award className="w-8 h-8" />,
    tagline: 'Governance, risk management, and compliance made practical',
    description: 'Navigating cybersecurity frameworks, regulations, and standards is complex. Stealth Cyber provides end-to-end Governance, Risk and Compliance advisory services to help you build a resilient security programme that satisfies auditors, insurers, customers, and regulators — without burying your team in paperwork.',
    features: [
      'ISO/IEC 27001 readiness and certification support',
      'Australian Privacy Act and Notifiable Data Breaches compliance',
      'NIST Cybersecurity Framework alignment',
      'Cyber insurance preparation and evidence packages',
      'Information security policy and procedure development',
      'Board-level risk reporting and advisory',
    ],
    benefits: [
      'Avoid regulatory penalties and reputational damage',
      'Strengthen customer and partner trust',
      'Make informed, evidence-based security investments',
    ],
  },
  {
    id: 'mss',
    title: 'Managed Security Services',
    shortTitle: 'MSS',
    icon: <Server className="w-8 h-8" />,
    tagline: 'A complete security operations capability — fully managed',
    description: 'Our Managed Security Services package combines SIEM-as-a-service, vulnerability management, and security awareness training into a single, cost-effective subscription. Ideal for SMBs that want comprehensive visibility and proactive risk reduction without managing multiple vendors.',
    features: [
      'Cloud-native SIEM deployment and management',
      'Log aggregation from all key data sources',
      'Continuous vulnerability scanning and prioritisation',
      'Phishing simulation and security awareness training',
      'Dark web monitoring for leaked credentials',
      'Quarterly security health check reports',
    ],
    benefits: [
      'Consolidated security visibility in a single dashboard',
      'Identify and remediate vulnerabilities before attackers exploit them',
      'Build a security-aware culture across your workforce',
    ],
  },
  {
    id: 'pentest',
    title: 'Penetration Testing',
    shortTitle: 'Pentest',
    icon: <Lock className="w-8 h-8" />,
    tagline: 'Find weaknesses before attackers do',
    description: 'Our certified penetration testers conduct authorised, controlled attacks on your systems to uncover exploitable vulnerabilities. Every engagement delivers a detailed report with risk-rated findings and practical remediation guidance — so you can prioritise fixes that matter most.',
    features: [
      'Network infrastructure penetration testing',
      'Web application and API security testing',
      'Social engineering and phishing simulations',
      'Cloud configuration review (Azure, AWS, M365)',
      'Wireless network security assessment',
      'Executive summary and technical report delivery',
    ],
    benefits: [
      'Understand your real-world attack exposure',
      'Satisfy compliance and contractual requirements',
      'Prioritise security investment with evidence-based findings',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', url: 'https://stealthcyber.io' }, { name: 'Services', url: 'https://stealthcyber.io/services' }]} />
      {services.map((s) => (
        <ServiceJsonLd key={s.id} name={s.title} description={s.description} url={`https://stealthcyber.io/services#${s.id}`} />
      ))}

      {/* Hero */}
      <section className="bg-stealth-dark py-20 border-b border-stealth-cyan/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-stealth-cyan text-xs font-medium uppercase tracking-widest mb-4">Our Services</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cybersecurity Services Built for Australian Business
            </h1>
            <p className="text-stealth-gray text-lg leading-relaxed">
              From round-the-clock threat monitoring to regulatory compliance, Stealth Cyber
              delivers the full spectrum of cybersecurity services your organisation needs
              to operate securely and confidently.
            </p>
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
    </>
  )
}
