import type { Metadata } from 'next'
import { Phone, MapPin, Linkedin, Clock } from 'lucide-react'
import BreadcrumbJsonLd from '@/components/structured-data/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Stealth Cyber for a free security assessment. Offices in Gold Coast (AU), São Paulo (BR), and Texas (US). Available 24/7 for incident response.',
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
            {/* Contact form */}
            <div className="bg-stealth-navy rounded-xl border border-stealth-cyan/10 p-8">
              <h2 className="text-white font-bold text-xl mb-6">Send Us a Message</h2>
              <form className="space-y-5" action="/api/contact" method="POST">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="w-full px-4 py-2.5 bg-stealth-dark border border-stealth-cyan/20 rounded text-white placeholder-stealth-gray focus:outline-none focus:border-stealth-cyan text-sm"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="w-full px-4 py-2.5 bg-stealth-dark border border-stealth-cyan/20 rounded text-white placeholder-stealth-gray focus:outline-none focus:border-stealth-cyan text-sm"
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-2.5 bg-stealth-dark border border-stealth-cyan/20 rounded text-white placeholder-stealth-gray focus:outline-none focus:border-stealth-cyan text-sm"
                    placeholder="jane@example.com.au"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-2.5 bg-stealth-dark border border-stealth-cyan/20 rounded text-white placeholder-stealth-gray focus:outline-none focus:border-stealth-cyan text-sm"
                    placeholder="+61 4XX XXX XXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Organisation</label>
                  <input
                    type="text"
                    name="organisation"
                    className="w-full px-4 py-2.5 bg-stealth-dark border border-stealth-cyan/20 rounded text-white placeholder-stealth-gray focus:outline-none focus:border-stealth-cyan text-sm"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Service of Interest</label>
                  <select
                    name="service"
                    className="w-full px-4 py-2.5 bg-stealth-dark border border-stealth-cyan/20 rounded text-white focus:outline-none focus:border-stealth-cyan text-sm"
                  >
                    <option value="">Select a service...</option>
                    <option value="mdr">Managed Detection &amp; Response</option>
                    <option value="incident-response">Incident Response</option>
                    <option value="essential-eight">Essential Eight Compliance</option>
                    <option value="cmmc">CMMC Assessment</option>
                    <option value="iso27001">ISO 27001 Certification</option>
                    <option value="ai-security">AI Security</option>
                    <option value="ai-management">AI Management Systems</option>
                    <option value="grc">GRC &amp; Compliance</option>
                    <option value="mss">Managed Security Services</option>
                    <option value="pentest">Penetration Testing</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2.5 bg-stealth-dark border border-stealth-cyan/20 rounded text-white placeholder-stealth-gray focus:outline-none focus:border-stealth-cyan text-sm resize-none"
                    placeholder="Tell us about your security needs or the incident you're dealing with..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-stealth-cyan text-stealth-dark font-semibold rounded hover:bg-white transition-colors text-sm"
                >
                  Send Message
                </button>
              </form>
            </div>

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
