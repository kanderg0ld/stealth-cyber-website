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
  description: 'Enterprise-level cyber defence for businesses that demand the highest protection. 24/7 threat monitoring, incident response, CMMC, ISO 27001, Essential Eight, AI security, and GRC from offices in Gold Coast, São Paulo, and Texas.',
  keywords: [
    'managed cybersecurity services', 'managed detection and response Australia',
    'incident response Gold Coast', 'Essential Eight compliance', 'CMMC assessment',
    'ISO 27001 consultant', 'AI security services', 'penetration testing Australia',
    'cybersecurity consultancy',
  ],
  openGraph: {
    title: 'Stealth Cyber | Global Managed Cybersecurity Services',
    description: 'Enterprise-level cyber defence for businesses that demand the highest protection. 24/7 threat monitoring, incident response, CMMC, ISO 27001, Essential Eight, AI security. Offices in AU, BR, US.',
    url: 'https://stealthcyber.io',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Stealth Cyber Global Managed Cybersecurity' }],
  },
  alternates: { canonical: 'https://stealthcyber.io' },
}

const services = [
  {
    title: 'Managed Detection & Response',
    description: 'Sleep easier knowing your business is monitored 24/7. We detect and shut down threats before they become breaches, so you never have to.',
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
    description: 'Cut through the complexity of cyber regulations. We make compliance straightforward, from the Privacy Act to global frameworks.',
    icon: <Award className="w-5 h-5" />,
    href: '/services#grc',
  },
  {
    title: 'CMMC Assessment',
    description: 'Need CMMC certification for US defence contracts? We guide you from gap assessment to audit-ready, so you can win and keep those contracts.',
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
    description: 'Using AI in your business? We make sure it doesn\'t become your biggest vulnerability, from LLMs to ML pipelines.',
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
    description: 'Get a full security operations capability without building one yourself. Monitoring, vulnerability management, and training, all managed.',
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
  { value: '10,000+', label: 'Threats Blocked' },
  { value: '30+', label: 'Businesses Protected' },
  { value: '20', label: 'Businesses Uplifted to E8 ML3' },
  { value: '100%', label: 'Client Retention' },
  { value: '<15min', label: 'Mean Time to Detect' },
  { value: '24/7', label: 'Around-the-Clock Protection' },
]

const faqs = [
  {
    question: 'What is managed detection and response (MDR)?',
    answer: 'Managed Detection and Response (MDR) is a 24/7 cybersecurity service combining advanced technology with human analysts in a Security Operations Centre (SOC). Unlike passive monitoring tools, MDR analysts actively investigate every alert, separate genuine threats from false positives, and contain incidents in real time, before they escalate into data breaches. Stealth Cyber\'s MDR covers endpoints, cloud, network, and email.',
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
    answer: 'ISO/IEC 27001 is the internationally recognised standard for Information Security Management Systems (ISMS). Certification demonstrates to clients, partners, regulators, and insurers that your organisation manages information security risks systematically. It is increasingly required by enterprise customers, government contracts, and cyber insurance policies. Stealth Cyber supports organisations through every stage, from gap assessment and ISMS design to internal audit readiness and the final certification audit.',
  },
  {
    question: 'What is AI security and why does it matter?',
    answer: 'AI security addresses risks unique to artificial intelligence and machine learning systems, including adversarial attacks, data poisoning, model theft, and prompt injection vulnerabilities. As organisations adopt large language models (LLMs) and ML-powered tools, these systems introduce attack surfaces not covered by traditional security frameworks. Stealth Cyber provides purpose-built AI security assessments and controls aligned to OWASP\'s LLM Top 10 and emerging AI governance standards.',
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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
              Every service is designed around one goal: keeping your business safe, compliant, and confident.
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

      {/* AI Security section */}
      <section className="py-20 bg-stealth-dark relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(60,228,245,0.06) 0%, rgba(98,49,245,0.04) 40%, transparent 70%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stealth-cyan/20 text-stealth-cyan text-xs font-medium mb-4 bg-stealth-cyan/5">
              <Brain className="w-3 h-3" /> AI Security Specialists
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Leading the Way in AI Security
            </h2>
            <p className="text-stealth-gray max-w-3xl mx-auto">
              As businesses race to adopt AI, the attack surface is expanding faster than most security teams can keep up. Stealth Cyber is at the forefront, protecting, governing, and red teaming AI systems for organisations worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
            {[
              {
                icon: <Shield className="w-6 h-6" />,
                title: 'AI Red Teaming',
                description: 'We simulate real-world adversarial attacks against your AI systems, aligned to the AIUC-1 standard. From prompt injection and jailbreaks to data poisoning and model manipulation. Find out how your AI holds up before an attacker does.',
              },
              {
                icon: <Cpu className="w-6 h-6" />,
                title: 'AI Management Systems',
                description: 'Build robust AI governance aligned to ISO 42001. We help you manage AI risk, bias, transparency, and accountability with frameworks that satisfy regulators and build stakeholder trust.',
              },
              {
                icon: <ClipboardCheck className="w-6 h-6" />,
                title: 'AI Readiness Assessments',
                description: 'Planning to adopt AI? We assess your organisation\u2019s readiness, covering data governance, security controls, risk appetite, and regulatory obligations, so you can move forward with confidence.',
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: 'AI Red Team Training',
                description: 'We train the next generation of AI Red Team Engineers. Our hands-on programmes cover adversarial testing techniques for LLMs, ML pipelines, and generative AI systems.',
              },
            ].map((card) => (
              <div key={card.title} className="p-6 bg-stealth-navy rounded-lg border border-stealth-cyan/10">
                <div className="inline-flex p-2 rounded-lg bg-gradient-to-br from-stealth-blue/10 to-stealth-indigo/10 border border-stealth-blue/20 text-stealth-cyan mb-4">
                  {card.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{card.title}</h3>
                <p className="text-stealth-gray text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { value: '50+', label: 'AI Systems Assessed' },
              { value: '20', label: 'AI Red Team Engagements' },
              { value: '10', label: 'Organisations AI-Ready Certified' },
              { value: '30+', label: 'AI Red Team Engineers Trained' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-stealth-sky to-stealth-cyan bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-stealth-gray text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* AI Assessment CTA card */}
          <div className="bg-stealth-navy-light rounded-2xl border border-stealth-cyan/20 p-8 md:p-10 mb-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-white font-bold text-xl mb-2">Is Your Business Ready for AI?</h3>
                <p className="text-stealth-gray text-sm leading-relaxed max-w-lg">
                  Take our free 5-minute AI Readiness Assessment. Get a personalised score with actionable recommendations, instantly.
                </p>
              </div>
              <Link
                href="/ai-assessment"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 btn-gradient text-white font-semibold text-sm rounded hover:opacity-90 transition-opacity"
                style={{ boxShadow: '0 4px 24px rgba(0,56,255,0.35)' }}
              >
                Take the AI Assessment <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/services/ai"
              className="inline-flex items-center gap-2 px-8 py-3.5 btn-gradient text-white font-semibold rounded hover:opacity-90 transition-opacity"
              style={{ boxShadow: '0 4px 24px rgba(0,56,255,0.35)' }}
            >
              Explore AI Security Services <ArrowRight className="w-4 h-4" />
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
                was created because we believe every business, regardless of size, deserves
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
                quote: 'Chris and the team at Stealth Cyber have played a critical role in improving the firm\u2019s cyber security processes and systems. I have been particularly impressed by their dedication to helping staff understand cyber security risks and teach proactive ways to both improve and measure security. The team is responsive and clearly incredibly knowledgeable. It has been a welcomed breath of fresh air to partner with Stealth Cyber to ensure better cyber and data protection for our firm and our valuable clients.',
                name: 'Nikolina Palasrinne',
                role: 'Founder & Principal, Rubix Legal',
              },
              {
                quote: 'When CertMate was looking for the right cyber security support to help grow in the SaaS market, we found far more than a vendor. We found a genuine partner. What stood out wasn\u2019t just their expertise, but how readily Chris and the team adapted to the way we work. Every question was met with a fast, practical answer. As a SaaS business, having a cyber security partner that understands our space and grows alongside us has made all the difference.',
                name: 'Carina Steinbakk',
                role: 'Founder, Aevi Tech',
              },
              {
                quote: 'As a law firm handling highly sensitive client data, our IT and cybersecurity requirements are non-negotiable. Stealth Cyber provides a sophisticated and proactive service that goes well beyond basic IT protection. Their layered strategy ensures our firm remains fully protected against evolving cyber risks while keeping every team member alert and informed. I have complete confidence in their ability to safeguard our systems.',
                name: 'Margherite Walsh',
                role: 'Managing Principal, Walsh Legal Group',
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
            Take our free 5-minute security assessment and get a clear picture of your risk. No obligation, no jargon.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
            <Link
              href="/assessment"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 btn-gradient text-white font-semibold text-sm rounded hover:opacity-90 transition-opacity"
              style={{ boxShadow: '0 4px 24px rgba(0,56,255,0.35)' }}
            >
              Free Self-Assessment <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+61752308381"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-stealth-cyan/40 text-white font-medium text-sm rounded hover:border-stealth-cyan/60 hover:bg-stealth-navy-light transition-colors"
            >
              AU: +61 7 5230 8381
            </a>
            <a
              href="tel:+18557742595"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-stealth-cyan/40 text-white font-medium text-sm rounded hover:border-stealth-cyan/60 hover:bg-stealth-navy-light transition-colors"
            >
              US: +1 (855) 774-2595
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
