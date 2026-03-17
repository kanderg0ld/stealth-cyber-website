import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Shield, Eye, AlertTriangle, ClipboardCheck, Server, Lock, ArrowRight, Users, Clock, Award, Cpu, FileCheck, BookOpen, Brain } from 'lucide-react'
import HeroSection from '@/components/HeroSection'
import ServiceCard from '@/components/ServiceCard'
import FaqJsonLd from '@/components/structured-data/FaqJsonLd'
import HowToJsonLd from '@/components/structured-data/HowToJsonLd'
import LocalBusinessJsonLd from '@/components/structured-data/LocalBusinessJsonLd'

export const metadata: Metadata = {
  title: 'Stealth Cyber | Global Managed Cybersecurity Services',
  description: 'Enterprise-grade cybersecurity without the enterprise price tag. 24/7 MDR, incident response, CMMC, ISO 27001, Essential Eight, AI security, and GRC — from offices in Gold Coast, São Paulo, and Texas.',
  keywords: [
    'managed cybersecurity services', 'managed detection and response Australia',
    'incident response Gold Coast', 'Essential Eight compliance', 'CMMC assessment',
    'ISO 27001 consultant', 'AI security services', 'penetration testing Australia',
    'cybersecurity consultancy',
  ],
  openGraph: {
    title: 'Stealth Cyber | Global Managed Cybersecurity Services',
    description: 'Enterprise-grade cybersecurity without the enterprise price tag. 24/7 MDR, incident response, CMMC, ISO 27001, Essential Eight, AI security — offices in AU, BR, US.',
    url: 'https://stealthcyber.io',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Stealth Cyber — Global Managed Cybersecurity' }],
  },
  alternates: { canonical: 'https://stealthcyber.io' },
}

const services = [
  {
    title: 'Managed Detection & Response',
    description: '24/7 threat monitoring and rapid response from our global SOC. We detect, investigate, and contain threats before they become breaches.',
    icon: <Eye className="w-5 h-5" />,
    href: '/services#mdr',
  },
  {
    title: 'Incident Response',
    description: 'When seconds count, our DFIR team mobilises fast. Contain, eradicate, and recover from security incidents with minimal business disruption.',
    icon: <AlertTriangle className="w-5 h-5" />,
    href: '/services#incident-response',
  },
  {
    title: 'Essential Eight Compliance',
    description: 'Align with the ACSC Essential Eight mitigation strategies. We assess your current maturity level and build a roadmap to full compliance.',
    icon: <ClipboardCheck className="w-5 h-5" />,
    href: '/services#essential-eight',
  },
  {
    title: 'GRC & Compliance',
    description: 'Navigate complex governance, risk, and compliance requirements. From the Australian Privacy Act to global frameworks, we guide you every step of the way.',
    icon: <Award className="w-5 h-5" />,
    href: '/services#grc',
  },
  {
    title: 'CMMC Assessment',
    description: 'Achieve Cybersecurity Maturity Model Certification for US DoD supply chain requirements. Gap assessments, remediation guidance, and audit readiness support.',
    icon: <FileCheck className="w-5 h-5" />,
    href: '/services#cmmc',
  },
  {
    title: 'ISO 27001',
    description: 'End-to-end ISO/IEC 27001 certification support — from gap assessment and ISMS design through to audit readiness and ongoing surveillance.',
    icon: <BookOpen className="w-5 h-5" />,
    href: '/services#iso27001',
  },
  {
    title: 'AI Security',
    description: 'Secure AI/ML systems against adversarial attacks, data poisoning, model theft, and prompt injection. Purpose-built assessments for LLM and ML workloads.',
    icon: <Brain className="w-5 h-5" />,
    href: '/services#ai-security',
  },
  {
    title: 'AI Management Systems',
    description: 'Implement ISO 42001-aligned AI management frameworks. Govern AI risk, bias, transparency, and accountability across your organisation.',
    icon: <Cpu className="w-5 h-5" />,
    href: '/services#ai-management',
  },
  {
    title: 'Managed Security Services',
    description: 'A fully managed security operations capability — SIEM, vulnerability management, and security awareness training in one comprehensive package.',
    icon: <Server className="w-5 h-5" />,
    href: '/services#mss',
  },
  {
    title: 'Penetration Testing',
    description: 'Authorised ethical hacking to identify weaknesses before attackers do. Network, web application, and social engineering assessments available.',
    icon: <Lock className="w-5 h-5" />,
    href: '/services#pentest',
  },
]

const stats = [
  { value: '24/7', label: 'SOC Monitoring' },
  { value: '<15min', label: 'Mean Time to Detect' },
  { value: '3', label: 'Continents' },
  { value: 'E8', label: 'ACSC Aligned' },
]

const faqs = [
  {
    question: 'What is managed detection and response (MDR)?',
    answer: 'Managed Detection and Response (MDR) is a 24/7 cybersecurity service combining advanced technology with human analysts in a Security Operations Centre (SOC). Unlike passive monitoring tools, MDR analysts actively investigate every alert, separate genuine threats from false positives, and contain incidents in real time — before they escalate into data breaches. Stealth Cyber\'s MDR covers endpoints, cloud, network, and email.',
  },
  {
    question: 'What is the Essential Eight and who needs it?',
    answer: 'The Essential Eight is a prioritised set of eight cybersecurity mitigation strategies developed by the Australian Cyber Security Centre (ACSC). Designed to protect organisations against the most common cyber threats, it covers application control, patch management, multi-factor authentication, regular backups, and more. Organisations are assessed at maturity levels 0–3. While mandatory for Australian government entities, it is strongly recommended for all Australian businesses and increasingly required by enterprise clients and insurers.',
  },
  {
    question: 'What is CMMC and does my organisation need it?',
    answer: 'The Cybersecurity Maturity Model Certification (CMMC) is a mandatory framework for organisations in the US Department of Defense (DoD) supply chain. If your organisation contracts directly with the DoD, or works as a subcontractor handling Federal Contract Information (FCI) or Controlled Unclassified Information (CUI), CMMC compliance is required to win or maintain those contracts. Stealth Cyber provides gap assessments, remediation guidance, and audit readiness support for CMMC Level 1 and Level 2.',
  },
  {
    question: 'How quickly can Stealth Cyber respond to a cyber incident?',
    answer: 'Stealth Cyber\'s incident response team is available 24/7/365. For clients on our MDR service, initial triage typically begins within 15 minutes of alert escalation. For emergency incident response engagements, our DFIR team can mobilise remotely within the hour, or deploy on-site to Gold Coast, São Paulo, or Texas locations. Call our main line and select the emergency option for immediate escalation.',
  },
  {
    question: 'What is ISO 27001 and why should my organisation get certified?',
    answer: 'ISO/IEC 27001 is the internationally recognised standard for Information Security Management Systems (ISMS). Certification demonstrates to clients, partners, regulators, and insurers that your organisation manages information security risks systematically. It is increasingly required by enterprise customers, government contracts, and cyber insurance policies. Stealth Cyber supports organisations through every stage — from gap assessment and ISMS design to internal audit readiness and the final certification audit.',
  },
  {
    question: 'What is AI security and why does it matter?',
    answer: 'AI security addresses risks unique to artificial intelligence and machine learning systems — including adversarial attacks, data poisoning, model theft, and prompt injection vulnerabilities. As organisations adopt large language models (LLMs) and ML-powered tools, these systems introduce attack surfaces not covered by traditional security frameworks. Stealth Cyber provides purpose-built AI security assessments and controls aligned to OWASP\'s LLM Top 10 and emerging AI governance standards.',
  },
  {
    question: 'Where does Stealth Cyber operate?',
    answer: 'Stealth Cyber is headquartered in Gold Coast, Queensland, Australia, with offices in São Paulo, Brazil, and Texas, USA. We serve clients across Australia, the Americas, Asia-Pacific, and globally through both remote and on-site engagements. Our 24/7 SOC operates continuously across time zones, ensuring consistent protection regardless of where your business operates.',
  },
]

export default function HomePage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <HowToJsonLd />
      <LocalBusinessJsonLd />
      <HeroSection />

      {/* Stats bar */}
      <section className="bg-stealth-navy border-y border-stealth-cyan/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-stealth-sky to-stealth-cyan bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-stealth-gray text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stealth-blue/30 text-stealth-blue text-xs font-medium mb-4 bg-stealth-blue/5">
              <Shield className="w-3 h-3" /> Our Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Cyber Protection
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From 24/7 monitoring to AI governance, Stealth Cyber delivers the full
              spectrum of cybersecurity services your business needs to stay secure and resilient.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border border-stealth-blue/40 text-stealth-blue font-semibold rounded hover:border-stealth-blue hover:bg-stealth-blue/5 transition-colors"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="py-20 bg-stealth-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stealth-cyan/20 text-stealth-cyan text-xs font-medium mb-4">
                <Users className="w-3 h-3" /> Who We Are
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Global Cybersecurity Expertise, Local Understanding
              </h2>
              <p className="text-stealth-gray leading-relaxed mb-4">
                Stealth Cyber is a cybersecurity consultancy with offices in Gold Coast (Australia),
                São Paulo (Brazil), and Texas (USA). We protect businesses of all sizes from
                sophisticated cyber threats — delivering enterprise-grade security without the
                enterprise price tag.
              </p>
              <p className="text-stealth-gray leading-relaxed mb-6">
                Our team of certified security professionals brings decades of combined experience
                across defence, government, and private sector environments. We don&apos;t just respond
                to threats — we work proactively to eliminate risk before it becomes a crisis.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-stealth-cyan font-medium hover:text-white transition-colors"
              >
                Learn more about us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Clock className="w-6 h-6" />, title: '24/7 Protection', desc: 'Round-the-clock SOC monitoring with zero gaps in coverage.' },
                { icon: <Shield className="w-6 h-6" />, title: 'Multi-Framework', desc: 'Essential Eight, CMMC, ISO 27001, NIST, and AI governance.' },
                { icon: <Users className="w-6 h-6" />, title: '3 Continents', desc: 'Offices in Gold Coast, São Paulo, and Texas for global coverage.' },
                { icon: <Award className="w-6 h-6" />, title: 'Certified Experts', desc: 'CISSP, CISM, OSCP, ISO 27001, ISO 42001, and CMMC certified professionals.' },
              ].map((item) => (
                <div key={item.title} className="p-5 bg-stealth-dark rounded-lg border border-stealth-navy-light">
                  <div className="inline-flex p-2 rounded-lg bg-gradient-to-br from-stealth-blue/10 to-stealth-indigo/10 border border-stealth-blue/20 text-stealth-cyan mb-3">{item.icon}</div>
                  <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-stealth-gray text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team photo banner */}
      <section className="relative h-[400px] md:h-[500px] bg-stealth-navy overflow-hidden">
        {/* Replace with your team photo */}
        <div className="absolute inset-0 flex items-center justify-center text-stealth-gray/20">
          <Users className="w-32 h-32" />
        </div>
        {/* Uncomment when you have the photo:
        <Image
          src="/team-photo.jpg"
          alt="The Stealth Cyber team"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        /> */}
        <div className="absolute inset-0 bg-gradient-to-t from-stealth-dark via-stealth-dark/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Our Team</h2>
            <p className="text-stealth-gray text-sm md:text-base max-w-xl">
              Certified security professionals across three continents, united by a single mission — keeping your business safe.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stealth-blue/30 text-stealth-blue text-xs font-medium mb-4 bg-stealth-blue/5">
              <Users className="w-3 h-3" /> Leadership
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experienced cybersecurity leaders driving Stealth Cyber&apos;s mission to make
              enterprise-grade protection accessible to every organisation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* CEO */}
            <div className="group text-center">
              <div className="relative w-64 h-80 mx-auto mb-6 rounded-2xl overflow-hidden bg-stealth-navy border border-stealth-navy-light shadow-lg">
                {/* Replace src with actual headshot path, e.g. /ceo-headshot.jpg */}
                <div className="absolute inset-0 flex items-center justify-center text-stealth-gray/40">
                  <Users className="w-20 h-20" />
                </div>
                {/* Uncomment and update when you have the photo:
                <Image
                  src="/ceo-headshot.jpg"
                  alt="CEO Name — Chief Executive Officer at Stealth Cyber"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 80vw, 256px"
                /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-stealth-dark/80 via-transparent to-transparent" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">CEO Name</h3>
              <p className="text-stealth-blue font-medium text-sm mb-3">Chief Executive Officer</p>
              <p className="text-gray-600 text-sm max-w-xs mx-auto leading-relaxed">
                Brief bio here — background, experience, and vision for Stealth Cyber.
              </p>
            </div>
            {/* CTO */}
            <div className="group text-center">
              <div className="relative w-64 h-80 mx-auto mb-6 rounded-2xl overflow-hidden bg-stealth-navy border border-stealth-navy-light shadow-lg">
                {/* Replace src with actual headshot path, e.g. /cto-headshot.jpg */}
                <div className="absolute inset-0 flex items-center justify-center text-stealth-gray/40">
                  <Users className="w-20 h-20" />
                </div>
                {/* Uncomment and update when you have the photo:
                <Image
                  src="/cto-headshot.jpg"
                  alt="CTO Name — Chief Technology Officer at Stealth Cyber"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 80vw, 256px"
                /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-stealth-dark/80 via-transparent to-transparent" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">CTO Name</h3>
              <p className="text-stealth-blue font-medium text-sm mb-3">Chief Technology Officer</p>
              <p className="text-gray-600 text-sm max-w-xs mx-auto leading-relaxed">
                Brief bio here — background, experience, and technical leadership at Stealth Cyber.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-stealth-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50" />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(98,49,245,0.10) 0%, rgba(0,56,255,0.08) 50%, transparent 70%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Secure Your Business?
          </h2>
          <p className="text-stealth-gray mb-8 text-lg">
            Book a free security assessment and discover where your business stands —
            no obligation, no jargon, just clear guidance from our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 btn-gradient text-white font-semibold rounded hover:opacity-90 transition-opacity"
              style={{ boxShadow: '0 4px 24px rgba(0,56,255,0.35)' }}
            >
              Book Free Assessment <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+61752308381"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-stealth-cyan/40 text-white font-semibold rounded hover:border-stealth-cyan/60 hover:bg-stealth-navy-light transition-colors"
            >
              Call +61 7 5230 8381
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
