import type { Metadata } from 'next'
import { Phone, MapPin, Linkedin, Clock } from 'lucide-react'
import BreadcrumbJsonLd from '@/components/structured-data/BreadcrumbJsonLd'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Stealth Cyber for a free security assessment. Offices in Gold Coast (AU), São Paulo (BR), and Texas (US). Available 24/7 for incident response.',
  alternates: { canonical: 'https://stealthcyber.io/contact' },
  openGraph: {
    title: 'Contact Stealth Cyber | Free Security Assessment',
    description: 'Book a free cybersecurity assessment or reach our 24/7 incident response team. Offices in Gold Coast, São Paulo, and Texas.',
    url: 'https://stealthcyber.io/contact',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Contact Stealth Cyber' }],
  },
}

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', url: 'https://stealthcyber.io' }, { name: 'Contact', url: 'https://stealthcyber.io/contact' }]} />

      <section className="bg-stealth-dark py-20 border-b border-stealth-cyan/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-stealth-cyan text-xs font-medium uppercase tracking-widest mb-4">Contact Us</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-stealth-gray text-lg">
              Ready to protect your business? Book a free security assessment or speak with
              our team about how Stealth Cyber can help your organisation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-stealth-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />

            {/* Contact details */}
            <div className="space-y-6">
              <div>
                <h2 className="text-white font-bold text-xl mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <a href="tel:+61752308381" className="flex items-start gap-3 group">
                    <div className="p-2.5 rounded-lg bg-stealth-cyan/10 text-stealth-cyan shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-white font-medium group-hover:text-stealth-cyan transition-colors">+61 7 5230 8381</div>
                      <div className="text-stealth-gray text-sm">General enquiries and sales</div>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-lg bg-stealth-cyan/10 text-stealth-cyan shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-white font-medium">Gold Coast, AU · São Paulo, BR · Texas, US</div>
                      <div className="text-stealth-gray text-sm">Global offices across 3 continents</div>
                    </div>
                  </div>
                  <a href="https://linkedin.com/company/stealthcyber" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                    <div className="p-2.5 rounded-lg bg-stealth-cyan/10 text-stealth-cyan shrink-0">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-white font-medium group-hover:text-stealth-cyan transition-colors">LinkedIn</div>
                      <div className="text-stealth-gray text-sm">linkedin.com/company/stealthcyber</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-stealth-navy rounded-xl border border-stealth-cyan/10 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-stealth-cyan" />
                  <h3 className="text-white font-semibold">Emergency Incident Response</h3>
                </div>
                <p className="text-stealth-gray text-sm leading-relaxed mb-4">
                  Experiencing an active security incident? Our DFIR team is available
                  24/7/365. Call our main number and follow the prompts for emergency response.
                </p>
                <a
                  href="tel:+61752308381"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/40 text-red-400 text-sm font-semibold rounded hover:bg-red-500/30 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Emergency Line
                </a>
              </div>

              <div className="bg-stealth-navy rounded-xl border border-stealth-cyan/10 p-6">
                <h3 className="text-white font-semibold mb-2">Free Security Assessment</h3>
                <p className="text-stealth-gray text-sm leading-relaxed">
                  Not sure where to start? Our free security assessment gives you a clear picture
                  of your current security posture, risks, and recommended next steps — with no
                  obligation to engage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
