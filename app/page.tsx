import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Eye, AlertTriangle, ClipboardCheck, Server, Lock, ArrowRight, Users, Clock, Award, Cpu, FileCheck, BookOpen, Brain, Star, Quote } from 'lucide-react'
import HeroSection from '@/components/HeroSection'
import ServiceCard from '@/components/ServiceCard'
import FaqJsonLd from '@/components/structured-data/FaqJsonLd'
import HowToJsonLd from '@/components/structured-data/HowToJsonLd'
import LocalBusinessJsonLd from '@/components/structured-data/LocalBusinessJsonLd'

export const metadata: Metadata = {
  title: 'Stealth Cyber | Global Managed Cybersecurity Services',
  description: 'Enterprise-level cyber defence — because your business deserves the highest protection. 24/7 threat monitoring, incident response, CMMC, ISO 27001, Essential Eight, AI security, and GRC from offices in Gold Coast, São Paulo, and Texas.',
  keywords: [
    'managed cybersecurity services', 'managed detection and response Australia',
    'incident response Gold Coast', 'Essential Eight compliance', 'CMMC assessment',
    'ISO 27001 consultant', 'AI security services', 'penetration testing Australia',
    'cybersecurity consultancy',
  ],
  openGraph: {
    title: 'Stealth Cyber | Global Managed Cybersecurity Services',
    description: 'Enterprise-level cyber defence — because your business deserves the highest protection. 24/7 threat monitoring, incident response, CMMC, ISO 27001, Essential Eight, AI security — offices in AU, BR, US.',
    url: 'https://stealthcyber.io',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Stealth Cyber — Global Managed Cybersecurity' }],
  },
  alternates: { canonical: 'https://stealthcyber.io' },
}

const services = [
  {
    title: 'Managed Detection & Response',
    description: 'Sleep easier knowing your business is monitored 24/7. We detect and shut down threats before they become breaches — so you never have to.',
    icon: <Eye className="w-5 h-5" />,
    href: '/services#mdr',
  },
  {
    title: 'Incident Response',
    description: 'Already under attack? Our team mobilises fast to contain the damage, get you back online, and make sure it doesn\'t happen again.',
    icon: <AlertTriangle className="w-5 h-5" />,
    href: '/services#incident-response',
  },
  {
    title: 'Essential Eight Compliance',
    description: 'Meet the ACSC Essential Eight requirements your insurers and clients are asking for. We assess where you are and get you where you need to be.',
    icon: <ClipboardCheck className="w-5 h-5" />,
    href: '/services#essential-eight',
  },
  {
    title: 'GRC & Compliance',
    description: 'Cut through the complexity of cyber regulations. We make compliance straightforward — from the Privacy Act to global frameworks.',
    icon: <Award className="w-5 h-5" />,
    href: '/services#grc',
  },
  {
    title: 'CMMC Assessment',
    description: 'Need CMMC certification for US defence contracts? We guide you from gap assessment to audit-ready — so you can win and keep those contracts.',
    icon: <FileCheck className="w-5 h-5" />,
    href: '/services#cmmc',
  },
  {
    title: 'ISO 27001',
    description: 'Show your clients and partners you take security seriously. We handle your ISO 27001 journey from start to certification.',
    icon: <BookOpen className="w-5 h-5" />,
    href: '/services#iso27001',
  },
  {
    title: 'AI Security',
    description: 'Using AI in your business? We make sure it doesn\'t become your biggest vulnerability — from LLMs to ML pipelines.',
    icon: <Brain className="w-5 h-5" />,
    href: '/services#ai-security',
  },
  {
    title: 'AI Management Systems',
    description: 'Govern your AI responsibly. We help you build frameworks for AI risk, transparency, and accountability that regulators expect.',
    icon: <Cpu className="w-5 h-5" />,
    href: '/services#ai-management',
  },
  {
    title: 'Managed Security Services',
    description: 'Get a full security operations capability without building one yourself. Monitoring, vulnerability management, and training — all managed.',
    icon: <Server className="w-5 h-5" />,
    href: '/services#mss',
  },
  {
    title: 'Penetration Testing',
    description: 'Find out where your weaknesses are before attackers do. Real-world testing with clear, actionable results.',
    icon: <Lock className="w-5 h-5" />,
    href: '/services#pentest',
  },
]

const stats = [
  { value: '43%', label: 'of attacks target SMBs' },
  { value: '$4.45M', label: 'average cost of a breach' },
  { value: '<15min', label: 'our mean time to detect' },
  { value: '24/7', label: 'around-the-clock protection' },
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
              How We Protect Your Business
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every service is designed around one goal — keeping your business safe, compliant, and confident.
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
                Our Story
              </h2>
              <p className="text-stealth-gray leading-relaxed mb-4">
                Led by experienced, global, and industry award-winning leadership, Stealth Cyber
                was created because we believe every business — regardless of size — deserves
                the highest level of cyber protection.
              </p>
              <p className="text-stealth-gray leading-relaxed mb-4">
                With over 25 years of combined experience across government, retail, aviation,
                space technology, and financial services, we bring a wealth of knowledge to support
                and guide you through your cybersecurity journey.
              </p>
              <p className="text-stealth-gray leading-relaxed mb-6">
                We have a passion for the industry and a desire to help businesses secure their
                digital assets, providing confidence to your customers, partners, and employees
                that their data is secure.
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

      {/* Testimonials section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stealth-blue/30 text-stealth-blue text-xs font-medium mb-4 bg-stealth-blue/5">
              <Star className="w-3 h-3" /> Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by businesses across Australia, the Americas, and beyond.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: 'Stealth Cyber transformed our security posture. Their MDR service detected a critical threat within minutes that our previous provider missed entirely.',
                name: 'Client Name',
                role: 'CTO, Company Name',
              },
              {
                quote: 'The Essential Eight assessment was thorough, clear, and actionable. We went from maturity level 1 to level 3 in under six months with their guidance.',
                name: 'Client Name',
                role: 'IT Director, Company Name',
              },
              {
                quote: 'Professional, responsive, and genuinely invested in our success. Their incident response team had us back online in hours, not days.',
                name: 'Client Name',
                role: 'CEO, Company Name',
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-stealth-blue/10 mb-2" />
                <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-4">
                  {testimonial.quote}
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            ))}
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
            Find Out Where You&apos;re Exposed
          </h2>
          <p className="text-stealth-gray mb-8 text-lg">
            Take our free 5-minute security assessment and get a clear picture of your risk — no obligation, no jargon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/assessment"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 btn-gradient text-white font-semibold rounded hover:opacity-90 transition-opacity"
              style={{ boxShadow: '0 4px 24px rgba(0,56,255,0.35)' }}
            >
              Take the Free Self-Assessment <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+61752308381"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-stealth-cyan/40 text-white font-semibold rounded hover:border-stealth-cyan/60 hover:bg-stealth-navy-light transition-colors"
            >
              Call +61 7 5230 8381
            </a>
          </div>
          <p className="text-stealth-gray text-sm mt-6">
            Or book a call with our team for a personalised review.
          </p>
        </div>
      </section>
    </>
  )
}
