import type { Metadata } from 'next'
import Link from 'next/link'
import { Award, MapPin, ArrowRight, CheckCircle } from 'lucide-react'
import BreadcrumbJsonLd from '@/components/structured-data/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Stealth Cyber — a global cybersecurity consultancy with offices in Gold Coast (Australia), São Paulo (Brazil), and Texas (USA), delivering enterprise-grade security expertise worldwide.',
}

const values = [
  { title: 'Integrity First', description: 'We provide honest, unbiased advice. Our recommendations are based on your best interests, not upselling opportunities.' },
  { title: 'Global Reach, Local Expertise', description: 'With offices in Australia, Brazil, and the USA, we bring local knowledge and regulatory expertise to every engagement — wherever you operate.' },
  { title: 'Practical Security', description: 'We translate complex cybersecurity concepts into practical, achievable actions that make a measurable difference.' },
  { title: 'Always Available', description: 'Threats don\'t keep business hours. Neither do we. Our team is available 24/7/365 for monitoring and incident response.' },
]

const certifications = [
  'CISSP — Certified Information Systems Security Professional',
  'CISM — Certified Information Security Manager',
  'OSCP — Offensive Security Certified Professional',
  'OSWP — Offensive Security Wireless Professional',
  'CEDP — Certified Exploit Development Professional',
  'ISO 27001 Lead Implementer / Lead Auditor',
  'ISO 42001 Lead Auditor — AI Management Systems',
  'CMMC Certified Assessor (CCA)',
  'ACSC Essential Eight Specialist',
  'Red Team & Blue Team Professionals',
]

const offices = [
  { city: 'Gold Coast', country: 'Australia', flag: '🇦🇺', detail: 'Asia-Pacific HQ' },
  { city: 'São Paulo', country: 'Brazil', flag: '🇧🇷', detail: 'Latin America HQ' },
  { city: 'Texas', country: 'USA', flag: '🇺🇸', detail: 'North America HQ' },
]

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', url: 'https://stealthcyber.io' }, { name: 'About', url: 'https://stealthcyber.io/about' }]} />

      {/* Hero */}
      <section className="bg-stealth-dark py-20 border-b border-stealth-cyan/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-stealth-cyan text-xs font-medium uppercase tracking-widest mb-4">About Us</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Global Cybersecurity Expertise, Without the Enterprise Price Tag
            </h1>
            <p className="text-stealth-gray text-lg leading-relaxed">
              Stealth Cyber was founded on a simple belief: organisations of every size
              deserve enterprise-grade cybersecurity protection — without the complexity
              or the price tag. With offices across three continents, we deliver it everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-stealth-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-stealth-gray leading-relaxed mb-4">
                Cyber threats are no longer confined to large corporations. Ransomware, business email
                compromise, supply chain attacks, and AI-driven threats are increasingly targeting
                organisations of all sizes — often with devastating consequences. A single incident
                can cost hundreds of thousands of dollars in recovery, lost productivity, and
                reputational damage.
              </p>
              <p className="text-stealth-gray leading-relaxed mb-4">
                Stealth Cyber exists to change this. We bring the tools, processes, and expertise
                previously available only to large enterprises and put them within reach of businesses
                of all sizes — from Australian SMBs to US defence contractors and Brazilian enterprises.
              </p>
              <p className="text-stealth-gray leading-relaxed">
                Headquartered in Gold Coast, Australia, with offices in São Paulo and Texas, we serve
                clients globally through both remote and on-site engagements. Our team of certified
                security professionals brings decades of experience across government, defence,
                financial services, and critical infrastructure — on every continent we operate in.
              </p>
            </div>
            <div className="space-y-4">
              {values.map((value) => (
                <div key={value.title} className="p-5 bg-stealth-dark rounded-lg border border-stealth-cyan/10">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-stealth-cyan mt-0.5 shrink-0" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">{value.title}</h3>
                      <p className="text-stealth-gray text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-stealth-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Credentials &amp; Certifications</h2>
              <p className="text-stealth-gray leading-relaxed mb-6">
                Our team holds industry-leading certifications across offensive security,
                governance, compliance, and AI disciplines. You can trust that your business
                is protected by qualified professionals who stay current with the evolving
                threat landscape.
              </p>
              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-center gap-2.5 text-sm text-stealth-gray">
                    <Award className="w-4 h-4 text-stealth-cyan shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-stealth-navy rounded-xl border border-stealth-cyan/10 p-8">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-5 h-5 text-stealth-cyan" />
                <h3 className="text-white font-semibold text-lg">Our Global Offices</h3>
              </div>
              <div className="space-y-4 mb-6">
                {offices.map((office) => (
                  <div key={office.city} className="flex items-center justify-between border-b border-stealth-cyan/10 pb-3 last:border-0 last:pb-0">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{office.flag}</span>
                      <div>
                        <div className="text-white font-medium text-sm">{office.city}, {office.country}</div>
                        <div className="text-stealth-gray text-xs">{office.detail}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-3 text-sm border-t border-stealth-cyan/10 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-stealth-gray">Legal Name</span>
                  <span className="text-white font-medium">Stealth Cyber Pty Ltd</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stealth-gray">ABN</span>
                  <span className="text-white font-medium">72 675 840 632</span>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/contact" className="inline-flex items-center gap-2 text-stealth-cyan text-sm font-medium hover:text-white transition-colors">
                  Get in touch <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stealth-navy border-t border-stealth-cyan/10">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Work With the Stealth Cyber Team</h2>
          <p className="text-stealth-gray mb-8">Ready to strengthen your security posture? Book a free assessment with our team today.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-stealth-cyan text-stealth-dark font-semibold rounded hover:bg-white transition-colors">
            Book a Free Assessment <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
