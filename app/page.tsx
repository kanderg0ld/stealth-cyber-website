import Link from 'next/link'
import { Shield, Eye, AlertTriangle, ClipboardCheck, Server, Lock, ArrowRight, Users, Clock, Award, Cpu, FileCheck, BookOpen, Brain } from 'lucide-react'
import HeroSection from '@/components/HeroSection'
import ServiceCard from '@/components/ServiceCard'
import FaqJsonLd from '@/components/structured-data/FaqJsonLd'

const services = [
  {
    title: 'Managed Detection & Response',
    description: '24/7 threat monitoring and rapid response from our global SOC. We detect, investigate, and contain threats before they become breaches.',
    icon: <Eye className="w-5 h-5" />,
    href: '/services#mdr',
    featured: true,
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
  { question: 'What is the Essential Eight?', answer: 'The Essential Eight is a set of baseline cybersecurity strategies recommended by the Australian Cyber Security Centre (ACSC) to protect organisations from the most common cyber threats.' },
  { question: 'Where are you based and do you operate internationally?', answer: 'Yes — Stealth Cyber operates globally with offices in Gold Coast (Australia), São Paulo (Brazil), and Texas (USA), serving clients across all regions with both remote and on-site delivery.' },
  { question: 'How quickly can you respond to a security incident?', answer: 'Our incident response team is available 24/7 with initial triage typically beginning within 15 minutes of alert escalation.' },
  { question: 'What is CMMC and do I need it?', answer: 'The Cybersecurity Maturity Model Certification (CMMC) is mandatory for organisations in the US Department of Defense supply chain. If you contract with the DoD or work with a prime contractor, CMMC compliance is required.' },
]

export default function HomePage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
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
      <section className="py-20 bg-stealth-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stealth-cyan/20 text-stealth-cyan text-xs font-medium mb-4">
              <Shield className="w-3 h-3" /> Our Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Cyber Protection
            </h2>
            <p className="text-stealth-gray max-w-2xl mx-auto">
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
              className="inline-flex items-center gap-2 px-6 py-3 border border-stealth-cyan/40 text-white font-semibold rounded hover:border-stealth-cyan/60 hover:bg-stealth-navy-light transition-colors"
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
                { icon: <Award className="w-6 h-6" />, title: 'Certified Experts', desc: 'CISSP, CISM, CEH, and ISO 27001 Lead Auditor certified professionals.' },
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
