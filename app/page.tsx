import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Eye, AlertTriangle, ClipboardCheck, Server, Lock, ArrowRight, Users, Clock, Award, Cpu, FileCheck, BookOpen, Brain } from 'lucide-react'
import AttackExplorer from '@/components/AttackExplorer'
import FaqAccordion from '@/components/FaqAccordion'
import HeroSection from '@/components/HeroSection'
import ServiceCard from '@/components/ServiceCard'
import FaqJsonLd from '@/components/structured-data/FaqJsonLd'
import HowToJsonLd from '@/components/structured-data/HowToJsonLd'
import { modules as nervModules, toneText } from '@/app/nerv/nerv-data'

// Single source of truth for the module list — the homepage teaser and /nerv
// read the same data, so they cannot drift apart.
const nervCore = nervModules.filter((m) => m.group === 'core')
const nervAi = nervModules.filter((m) => m.group === 'ai')

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

      {/*
        Stats band. Was six centred tiles with gradient-clipped numerals — the
        SaaS hero-metric template. Now a quiet ruled record: solid ink, moderate
        scale, label first, so it reads as reference rather than as a boast.
      */}
      <section
        aria-label="Stealth Cyber by the numbers"
        className="bg-stealth-navy"
      >
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 px-4 sm:px-6 md:grid-cols-3 lg:grid-cols-6 lg:px-8">
          {stats.map((stat) => (
            // A top rule on every cell stays correct at 2, 3 and 6 columns
            // without per-breakpoint divider rules. Bridge-tinted to match.
            <div key={stat.label} className="hair-bridge-t py-6">
              <dt className="mb-1.5 text-[0.6875rem] leading-snug font-medium tracking-[0.14em] text-stealth-dim uppercase">
                {stat.label}
              </dt>
              <dd className="text-2xl font-semibold tracking-tight text-white">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/*
        Nerv. The only place on the homepage carrying product-tier colour, and
        the entry point to /nerv. Void Black rather than Near Black, so the
        platform reads as its own thing before you even click through.
      */}
      <section className="surface-void relative overflow-hidden">
        <div className="rule-nerv" />
        <div className="bg-void-bloom pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-[clamp(4rem,8vw,6rem)] sm:px-6 lg:px-8">
          <div className="grid gap-x-16 gap-y-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="mb-4 text-[0.6875rem] font-medium tracking-[0.22em] text-nerv-cyan uppercase">
                The Nerv platform
              </p>
              <h2 className="mb-5 text-[clamp(1.875rem,3.4vw,2.5rem)] font-bold text-white">
                Seven modules. One platform.{' '}
                <span className="text-gradient-nerv">Zero blind spots.</span>
              </h2>
              <p className="mb-8 max-w-[56ch] leading-relaxed text-stealth-gray">
                Endpoint, browser, identity, machine identity, coding agents and your own
                AI systems, correlated into one incident timeline by an AI security
                operations centre. Ten seats is the floor, not two hundred.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/nerv" className="btn-primary group">
                  Explore Nerv
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 ease-out-quart group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
                <Link href="/nerv#pricing" className="btn-secondary">
                  See Pricing
                </Link>
              </div>
            </div>

            {/* The seven modules, in the kit's two groups. */}
            <div className="lg:col-span-7">
              {[
                { label: 'Core coverage', list: nervCore },
                { label: 'The AI layer', list: nervAi },
              ].map((group) => (
                <div key={group.label} className="mb-8 last:mb-0">
                  <p className="mb-4 text-[0.6875rem] font-medium tracking-[0.16em] text-stealth-dim uppercase">
                    {group.label}
                  </p>
                  <dl className="grid gap-x-10 sm:grid-cols-2">
                    {group.list.map((m) => (
                      <div key={m.id} className="hair-nerv-t py-4">
                        <dt className="mb-1 flex flex-wrap items-baseline gap-x-2.5">
                          <Link
                            href={`/nerv/${m.slug}`}
                            className={`text-sm font-semibold transition-opacity hover:opacity-70 ${toneText[m.tone]}`}
                          >
                            {m.code}
                          </Link>
                          <span className="text-xs text-stealth-dim">{m.surface}</span>
                        </dt>
                        <dd className="max-w-[42ch] text-xs leading-relaxed text-stealth-gray">
                          {m.tagline}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Divides the platform from the walkthrough that demonstrates it. */}
        <div className="rule-nerv" />
      </section>

      {/*
        Attack explorer. Sits after the Nerv section on purpose: it names
        Nerv-ID, Nerv-EDR and Nerv-AI and links to their module pages, so the
        reader needs to know what Nerv is first. The order is platform, then
        proof. Self-contained — its own scoped stylesheet and its own
        prefers-reduced-motion listener, so it needs nothing from this page.
      */}
      <AttackExplorer />

      {/* Closing edge of the dark run, before the light Services section. */}
      <div className="rule-nerv" />

      {/*
        Services. Header is left-aligned and shares a row with the overflow
        link, so this section's cadence differs from the centred sections
        further down instead of every heading block being the same shape.
      */}
      <section className="surface-light py-[clamp(4rem,8vw,6rem)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="mb-4 max-w-[24ch] text-[clamp(1.875rem,3.4vw,2.5rem)] font-bold text-gray-900">
                How We Protect Your Business
              </h2>
              <p className="max-w-[58ch] text-stealth-body">
                Every service is designed around one goal: keeping your business safe,
                compliant, and confident.
              </p>
            </div>
            <Link
              href="/services"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-stealth-blue"
            >
              View All Services
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 ease-out-quart group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
          {/*
            Breakpoint-free: cards reflow on their own content width. 20rem, not
            17.5rem — the narrower floor produced four columns at desktop, which
            squeezed the measure to ~200px and broke most titles onto two lines.
            This lands on 3 / 2 / 1 columns with a ~410px measure at desktop.
          */}
          {/* `min(20rem,100%)`, not a bare 20rem: on a 320px viewport the
              container is narrower than 20rem, and a bare floor would push the
              card past the viewport edge. */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(20rem,100%),1fr))] gap-5">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/*
        AI Security. Asymmetric: the argument and both calls to action stay in a
        sticky left rail while the four capabilities run down the right as ruled
        rows. Previously this was a centred header over a 2x2 of identical
        cards, each with the same tinted gradient icon tile \u2014 the same shape as
        the About grid below it and the service grid above it.
      */}
      <section className="relative bg-stealth-dark py-[clamp(4rem,8vw,6rem)]">
        {/* Bridge arc as this section's top edge — full width, no type over it. */}
        <div className="rule-bridge-strong absolute inset-x-0 top-0" />
        <div className="mx-auto grid max-w-7xl gap-x-16 gap-y-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <h2 className="mb-5 text-[clamp(1.875rem,3.4vw,2.5rem)] font-bold text-white">
                Leading the Way in AI Security
              </h2>
              <p className="mb-8 max-w-[56ch] leading-relaxed text-stealth-gray">
                As businesses race to adopt AI, the attack surface is expanding faster
                than most security teams can keep up. Stealth Cyber is at the forefront,
                protecting, governing, and red teaming AI systems for organisations
                worldwide.
              </p>

              {/*
                Four AI figures. Deliberately smaller and quieter than the band
                at the top of the page, so the page has one stat treatment with
                a clear hierarchy rather than two competing metric rows.
              */}
              <dl className="mb-8 grid grid-cols-2 gap-x-6">
                {[
                  { value: '50+', label: 'AI systems assessed' },
                  { value: '20+', label: 'AI red team engagements' },
                  { value: '10+', label: 'Organisations AI-ready certified' },
                  { value: '30+', label: 'AI red team engineers trained' },
                ].map((stat) => (
                  // `dt` must precede `dd` in the markup; flex-col-reverse puts
                  // the figure above its label visually without breaking that.
                  <div
                    key={stat.label}
                    className="flex flex-col-reverse border-t border-stealth-navy-light py-4"
                  >
                    <dt className="text-xs leading-snug text-stealth-dim">{stat.label}</dt>
                    <dd className="text-xl font-semibold text-white">{stat.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/services/ai" className="btn-primary group px-5 py-2.5 text-sm">
                  Explore AI Security
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 ease-out-quart group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
                <Link href="/ai-assessment" className="btn-secondary px-5 py-2.5 text-sm">
                  Free AI Assessment
                </Link>
              </div>
            </div>
          </div>

          {/*
            `tone` follows the kit's semantics rather than being decorative:
            magenta for the offensive/adversarial work, cyan for governance and
            assurance. That splits 2/2 here, so the colour reads as a
            classification instead of as random highlighting.
          */}
          <dl className="lg:col-span-7">
            {[
              {
                icon: <Shield className="h-5 w-5" aria-hidden="true" />,
                title: 'AI Red Teaming',
                tone: 'offensive',
                description:
                  'We simulate real-world adversarial attacks against your AI systems, aligned to the AIUC-1 standard. From prompt injection and jailbreaks to data poisoning and model manipulation. Find out how your AI holds up before an attacker does.',
              },
              {
                icon: <Cpu className="h-5 w-5" aria-hidden="true" />,
                title: 'AI Management Systems',
                tone: 'governance',
                description:
                  'Build robust AI governance aligned to ISO 42001. We help you manage AI risk, bias, transparency, and accountability with frameworks that satisfy regulators and build stakeholder trust.',
              },
              {
                icon: <ClipboardCheck className="h-5 w-5" aria-hidden="true" />,
                title: 'AI Readiness Assessments',
                tone: 'governance',
                description:
                  'Planning to adopt AI? We assess your organisation\u2019s readiness, covering data governance, security controls, risk appetite, and regulatory obligations, so you can move forward with confidence.',
              },
              {
                icon: <Brain className="h-5 w-5" aria-hidden="true" />,
                title: 'AI Red Team Training',
                tone: 'offensive',
                description:
                  'We train the next generation of AI Red Team Engineers. Our hands-on programmes cover adversarial testing techniques for LLMs, ML pipelines, and generative AI systems.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border-t border-stealth-navy-light py-7 last:border-b"
              >
                <dt className="mb-2.5 flex items-center gap-3">
                  <span
                    className={
                      item.tone === 'offensive'
                        ? 'text-stealth-magenta'
                        : 'text-stealth-cyan'
                    }
                  >
                    {item.icon}
                  </span>
                  <span className="text-lg font-semibold text-white">{item.title}</span>
                </dt>
                <dd className="max-w-[64ch] text-sm leading-relaxed text-stealth-gray">
                  {item.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/*
        Our Story. The grid + gradient + blur-orb atmosphere that used to sit
        here was a verbatim repeat of the hero's, and it appeared a third time in
        the closing CTA. Kept on a plain Near Black ground so the hero stays the
        only place on the page carrying that treatment.
      */}
      <section className="border-t border-stealth-navy-light bg-stealth-dark py-[clamp(4rem,8vw,6rem)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-x-16 gap-y-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-[clamp(1.875rem,3.4vw,2.5rem)] font-bold text-white">
                Our Story
              </h2>
              <div className="max-w-[64ch] space-y-4 leading-relaxed text-stealth-gray">
                <p>
                  Led by experienced, global, and industry award-winning leadership,
                  Stealth Cyber was created because we believe every business, regardless
                  of size, deserves the highest level of cyber protection.
                </p>
                <p>
                  With over 25 years of combined experience across government, retail,
                  aviation, space technology, and financial services, we bring a wealth of
                  knowledge to support and guide you through your cybersecurity journey.
                </p>
                <p>
                  We have a passion for the industry and a desire to help businesses secure
                  their digital assets, providing confidence to your customers, partners,
                  and employees that their data is secure.
                </p>
              </div>
              <Link
                href="/about"
                className="group mt-7 inline-flex items-center gap-2 font-medium text-stealth-cyan transition-colors hover:text-white"
              >
                Learn more about us
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 ease-out-quart group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
            {/*
              Unboxed quadrant. These were four bordered cards with tinted
              gradient icon tiles, structurally identical to the AI grid above.
              Hairlines carry the grouping instead of card chrome.
            */}
            <dl className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
              {[
                { icon: <Clock className="h-5 w-5" aria-hidden="true" />, title: '24/7 Protection', desc: 'Round-the-clock SOC monitoring with zero gaps in coverage.' },
                { icon: <Shield className="h-5 w-5" aria-hidden="true" />, title: 'Multi-Framework', desc: 'Essential Eight, CMMC, ISO 27001, NIST, and AI governance.' },
                { icon: <Users className="h-5 w-5" aria-hidden="true" />, title: '3 Continents', desc: 'Offices in Gold Coast, São Paulo, and Texas for global coverage.' },
                { icon: <Award className="h-5 w-5" aria-hidden="true" />, title: 'Certified Experts', desc: 'CISSP, CISM, OSCP, ISO 27001, ISO 42001, and CMMC certified professionals.' },
              ].map((item) => (
                <div key={item.title} className="border-t border-stealth-navy-light py-6">
                  <dt className="mb-1.5 flex items-center gap-2.5 text-sm font-semibold text-white">
                    <span className="text-stealth-cyan">{item.icon}</span>
                    {item.title}
                  </dt>
                  <dd className="text-sm leading-relaxed text-stealth-gray">{item.desc}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="surface-light py-[clamp(4rem,8vw,6rem)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-[52ch]">
            <h2 className="mb-4 text-[clamp(1.875rem,3.4vw,2.5rem)] font-bold text-gray-900">
              What Our Clients Say
            </h2>
            <p className="text-stealth-body">
              Trusted by businesses across Australia, the Americas, and beyond.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
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
              {
                // Trimmed with an ellipsis to roughly match the length of the
                // other three, so the single-row layout reads. Wording is
                // verbatim; nothing has been reworded. Full quote is in git
                // history if you'd rather run it complete.
                quote: 'Working with Stealth Cyber has been an absolute blessing for the company. I genuinely didn’t know a single thing about cybersecurity but given my online presence (3m+ followers across socials), I know that I was at a pretty big risk. Chris and the team told me in simple terms that I could understand what my business needed and why. … Would recommend SC to ANY small business who wants to protect their livelihood.',
                name: 'Sarah Rav',
                role: 'Founder, Sarah Rav Strategy',
              },
            ].map((testimonial, i) => (
              // Five identical gold stars on every card carried no information,
              // and the watermark quote glyph was pure decoration. The quote
              // itself is the evidence.
              <figure
                key={i}
                className="flex flex-col border-t border-gray-300 pt-6"
              >
                <blockquote className="mb-5 flex-1 text-sm leading-relaxed text-gray-700">
                  {testimonial.quote}
                </blockquote>
                <figcaption>
                  <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-xs text-stealth-body">{testimonial.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-stealth-dark py-[clamp(4rem,8vw,6rem)]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="mb-4 text-[clamp(1.875rem,3.4vw,2.5rem)] font-bold text-white">
              Common Questions
            </h2>
            <p className="max-w-[58ch] text-stealth-gray">
              Answers to the questions business owners ask most about cybersecurity.
            </p>
          </div>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/*
        Closing CTA, drenched in the corporate primary. The kit permits a
        committed use of cobalt, and this is the one place on the page that
        should be unmissable — it replaces a third repeat of the hero
        atmosphere, which had made the page's last fold look like its first.

        White on #0038FF is 6.98:1 per the kit's own contrast table.

        The Bridge wash pushes indigo and magenta into the bottom-right corner
        while the text column stays over cobalt. White on magenta would be
        3.85:1, so the copy must never reach that end — the contrast behind the
        text is pixel-sampled from the rendered page, not assumed.
      */}
      <section className="bg-cta-bridge bg-stealth-blue py-[clamp(4rem,8vw,6rem)]">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-[clamp(1.875rem,3.4vw,2.5rem)] font-bold text-white">
            Find Out Where You&apos;re Exposed
          </h2>
          <p className="mx-auto mb-8 max-w-[54ch] text-lg leading-relaxed text-white/85">
            Take our free 5-minute security assessment and get a clear picture of your
            risk. No obligation, no jargon.
          </p>
          {/*
            One primary action. The two phone numbers used to sit here as
            equal-weight buttons, giving the fold three competing actions.
          */}
          <Link
            href="/assessment"
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-stealth-blue transition-colors duration-200 ease-out-quart hover:bg-stealth-surface"
          >
            Free Self-Assessment
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 ease-out-quart group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
          <p className="mt-8 text-sm text-white/80">
            Or speak to our team directly —{' '}
            <a
              href="tel:+61752308381"
              className="font-medium text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
            >
              AU +61 7 5230 8381
            </a>{' '}
            ·{' '}
            <a
              href="tel:+18557742595"
              className="font-medium text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
            >
              US +1 (855) 774-2595
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
