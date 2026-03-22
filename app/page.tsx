import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Eye, AlertTriangle, ClipboardCheck, Server, Lock, ArrowRight, Users, Clock, Award, Cpu, FileCheck, BookOpen, Brain, Star, Quote, ChevronDown } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'
import HeroSection from '@/components/HeroSection'
import ServiceCard from '@/components/ServiceCard'
import FaqJsonLd from '@/components/structured-data/FaqJsonLd'
import HowToJsonLd from '@/components/structured-data/HowToJsonLd'

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
  { value: '20+', label: 'Businesses Uplifted to E8 ML3' },
  { value: '100%', label: 'Client Retention' },
  { value: '<15min', label: 'Mean Time to Detect' },
  { value: '24/7', label: 'Around-the-Clock Protection' },
]

const faqs = [
  {
    question: 'What is proactive cybersecurity and how is it different from reactive?',
    answer: 'Proactive cybersecurity focuses on preventing attacks before they happen, using continuous monitoring, vulnerability management, threat hunting, and security awareness training. Reactive cybersecurity responds after a breach has occurred, focusing on containment and recovery. Proactive security reduces the likelihood and impact of attacks, while reactive security manages the fallout. Most modern businesses need both, but investing in proactive measures significantly reduces overall risk and cost. Stealth Cyber delivers proactive 24/7 managed detection and response alongside reactive incident response services.',
  },
  {
    question: 'How do I know if my business has been compromised?',
    answer: 'Common signs of a business compromise include unusual network traffic, unexpected system slowdowns, unexplained account lockouts, employees receiving phishing emails from internal accounts, unfamiliar software or processes running on devices, and unexpected data transfers. Many breaches go undetected for months because businesses lack continuous monitoring. The average dwell time for an undetected breach is over 200 days. A managed detection and response (MDR) service monitors your environment 24/7 and detects threats in minutes, not months.',
  },
  {
    question: 'What does a managed detection and response service actually include?',
    answer: 'A managed detection and response (MDR) service includes 24/7 monitoring of your endpoints, network, cloud, and email by trained security analysts in a Security Operations Centre (SOC). It covers real-time threat detection, alert investigation and triage, threat intelligence enrichment, automated and manual containment of active threats, incident escalation, and regular reporting. Unlike basic antivirus or SIEM tools, MDR analysts actively investigate every alert and take action on your behalf. Stealth Cyber\'s MDR service also includes monthly threat briefings and risk reports.',
  },
  {
    question: 'How much does managed cybersecurity cost for a small business in Australia?',
    answer: 'Managed cybersecurity for a small business in Australia typically ranges from $1,500 to $10,000 per month depending on the number of users, devices, and services included. Basic managed security (endpoint protection, monitoring, and patching) sits at the lower end, while comprehensive MDR with 24/7 SOC monitoring, vulnerability management, and compliance support is at the higher end. For context, the average cost of a data breach for an Australian SMB exceeds $200,000. Stealth Cyber offers tailored packages based on your business size and risk profile.',
  },
  {
    question: 'What is the Essential Eight and does my business need to comply?',
    answer: 'The Essential Eight is a set of eight cybersecurity mitigation strategies developed by the Australian Cyber Security Centre (ACSC) to protect organisations against the most common cyber threats. It covers application control, patching applications, patching operating systems, multi-factor authentication, restricting admin privileges, restricting Office macros, user application hardening, and regular backups. Compliance is mandatory for Australian government entities and increasingly required by enterprise clients, insurers, and government contractors. Organisations are assessed at maturity levels 0 to 3. Even if not legally required, the Essential Eight is the most practical cybersecurity baseline for any Australian business.',
  },
  {
    question: 'How long does it take to set up managed cyber protection?',
    answer: 'Most businesses can be fully onboarded to a managed cybersecurity service within 2 to 4 weeks. The first week typically covers scoping, agent deployment on endpoints, and integration with your existing tools (email, cloud, network). Week two focuses on baseline tuning to reduce false positives and align alerting to your environment. By week three or four, 24/7 monitoring is fully operational. Stealth Cyber assigns a dedicated onboarding team to ensure a smooth transition with minimal disruption to your day-to-day operations.',
  },
  {
    question: 'What happens when a threat is detected?',
    answer: 'When a threat is detected, our SOC analysts immediately investigate to confirm whether it is a genuine threat or a false positive. If confirmed, the threat is contained automatically or manually depending on severity. This may include isolating an affected device, blocking a malicious IP, disabling a compromised account, or killing a malicious process. You are notified with a clear, jargon-free summary of what happened, what was done, and what you need to know. For critical incidents, our team escalates directly to your nominated contact by phone. Post-incident, we provide a full report with root cause analysis and hardening recommendations.',
  },
  {
    question: 'Is cyber insurance enough without a managed security service?',
    answer: 'No. Cyber insurance covers financial losses after a breach, but it does not prevent breaches or reduce their severity. Most cyber insurance policies also require businesses to meet minimum security standards before a claim will be paid. Common requirements include multi-factor authentication, regular patching, endpoint protection, and backup testing. If these controls are not in place, insurers can deny claims. A managed security service ensures you meet these requirements and actively prevents incidents, reducing both the likelihood of a claim and your insurance premiums.',
  },
  {
    question: 'What cybersecurity does a 50-person accounting firm actually need?',
    answer: 'A 50-person accounting firm handling sensitive financial data needs, at minimum: multi-factor authentication on all accounts, endpoint protection on every device, email security to block phishing, regular patching of operating systems and applications, encrypted and tested backups, security awareness training for all staff, and a documented incident response plan. Recommended additions include 24/7 managed detection and response (MDR), vulnerability scanning, dark web monitoring for leaked credentials, and Essential Eight compliance if operating in Australia. Stealth Cyber provides tailored packages for professional services firms that cover all of these requirements.',
  },
  {
    question: 'How do I assess my current cyber risk?',
    answer: 'The best way to assess your current cyber risk is to start with a structured self-assessment that evaluates your security controls across key areas like access management, patching, backups, incident response, and data protection. Stealth Cyber offers a free online cybersecurity self-assessment at stealthcyber.io/assessment that scores your organisation out of 100 and provides personalised recommendations. For a deeper review, a professional security assessment from a qualified cybersecurity provider will identify specific vulnerabilities, compliance gaps, and prioritised remediation steps tailored to your business.',
  },
]

export default function HomePage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <HowToJsonLd />
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
              { value: '20+', label: 'AI Red Team Engagements' },
              { value: '10+', label: 'Organisations AI-Ready Certified' },
              { value: '30+', label: 'AI Red Team Engineers Trained' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-stealth-sky to-stealth-cyan bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-stealth-gray text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* AI Assessment CTA card */}
          <div className="bg-stealth-navy-light rounded-xl border border-stealth-cyan/20 px-6 py-4 mb-10 max-w-2xl mx-auto">
            <div className="flex items-center justify-between gap-4">
              <p className="text-stealth-gray text-sm">
                <span className="text-white font-semibold">Is your business ready for AI?</span> Take the free assessment.
              </p>
              <Link
                href="/ai-assessment"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 btn-gradient text-white font-semibold text-sm rounded hover:opacity-90 transition-opacity"
                style={{ boxShadow: '0 4px 24px rgba(0,56,255,0.35)' }}
              >
                AI Assessment <ArrowRight className="w-4 h-4" />
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
      <section className="py-20 bg-stealth-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50" />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-3xl pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(98,49,245,0.10) 0%, rgba(0,56,255,0.08) 50%, transparent 70%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* FAQ section */}
      <section className="py-20 bg-stealth-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stealth-cyan/20 text-stealth-cyan text-xs font-medium mb-4 bg-stealth-cyan/5">
              <Shield className="w-3 h-3" /> FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Common Questions
            </h2>
            <p className="text-stealth-gray max-w-2xl mx-auto">
              Answers to the questions business owners ask most about cybersecurity.
            </p>
          </div>
          <FaqAccordion faqs={faqs} />
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
