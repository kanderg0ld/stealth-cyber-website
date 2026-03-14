import type { Metadata } from 'next'
import Link from 'next/link'
import { Award, MapPin, ArrowRight, CheckCircle } from 'lucide-react'
import BreadcrumbJsonLd from '@/components/structured-data/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Stealth Cyber — a Queensland-based cybersecurity consultancy protecting Australian SMBs with enterprise-grade security expertise.',
}

const values = [
  { title: 'Integrity First', description: 'We provide honest, unbiased advice. Our recommendations are based on your best interests, not upselling opportunities.' },
  { title: 'Australian Focus', description: '100% Australian-owned and operated. Your data stays in Australia, handled by vetted local security professionals.' },
  { title: 'Practical Security', description: 'We translate complex cybersecurity concepts into practical, achievable actions that make a measurable difference.' },
  { title: 'Always Available', description: 'Threats don\'t keep business hours. Neither do we. Our team is available 24/7/365 for monitoring and incident response.' },
]

const certifications = [
  'CISSP — Certified Information Systems Security Professional',
  'CISM — Certified Information Security Manager',
  'CEH — Certified Ethical Hacker',
  'OSCP — Offensive Security Certified Professional',
  'ISO 27001 Lead Implementer / Lead Auditor',
  'ACSC Essential Eight Specialist',
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
              Protecting What Matters to Australian Business
            </h1>
            <p className="text-stealth-gray text-lg leading-relaxed">
              Stealth Cyber was founded on a simple belief: Australian small and medium businesses
              deserve the same level of cybersecurity protection as large enterprises — without
              the complexity or the price tag.
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
                compromise, and supply chain attacks are increasingly targeting Australian SMBs — often
                with devastating consequences. A single incident can cost hundreds of thousands of dollars
                in recovery costs, lost productivity, and reputational damage.
              </p>
              <p className="text-stealth-gray leading-relaxed mb-4">
                Stealth Cyber exists to change this. We bring the tools, processes, and expertise
                previously available only to large enterprises and put them within reach of businesses
                of all sizes across Australia.
              </p>
              <p className="text-stealth-gray leading-relaxed">
                Headquartered in Queensland, we serve organisations across all Australian states and
                territories, delivering our services remotely or on-site. Our team of certified
                security professionals brings decades of experience across government, defence,
                financial services, and critical infrastructure.
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
                governance, and compliance disciplines. You can trust that your business
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
                <h3 className="text-white font-semibold text-lg">Based in Queensland, Serving Australia</h3>
              </div>
              <p className="text-stealth-gray text-sm leading-relaxed mb-6">
                Stealth Cyber Pty Ltd is a proudly Australian-owned company. Our operations
                are based in Queensland, and we serve clients across all Australian states
                and territories through both remote and on-site engagements.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between border-b border-stealth-cyan/10 pb-2">
                  <span className="text-stealth-gray">Legal Name</span>
                  <span className="text-white font-medium">Stealth Cyber Pty Ltd</span>
                </div>
                <div className="flex items-center justify-between border-b border-stealth-cyan/10 pb-2">
                  <span className="text-stealth-gray">ABN</span>
                  <span className="text-white font-medium">72 675 840 632</span>
                </div>
                <div className="flex items-center justify-between border-b border-stealth-cyan/10 pb-2">
                  <span className="text-stealth-gray">Headquarters</span>
                  <span className="text-white font-medium">Queensland, Australia</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stealth-gray">Service Area</span>
                  <span className="text-white font-medium">All of Australia</span>
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
