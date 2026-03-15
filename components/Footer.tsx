import Link from 'next/link'
import { Shield, Linkedin, Phone, MapPin } from 'lucide-react'

const services = [
  { label: 'Managed Detection & Response', href: '/services#mdr' },
  { label: 'Incident Response', href: '/services#incident-response' },
  { label: 'Essential Eight', href: '/services#essential-eight' },
  { label: 'CMMC Assessment', href: '/services#cmmc' },
  { label: 'ISO 27001', href: '/services#iso27001' },
  { label: 'AI Security', href: '/services#ai-security' },
  { label: 'AI Management Systems', href: '/services#ai-management' },
  { label: 'GRC & Compliance', href: '/services#grc' },
  { label: 'Managed Security Services', href: '/services#mss' },
  { label: 'Penetration Testing', href: '/services#pentest' },
]

export default function Footer() {
  return (
    <footer className="bg-stealth-navy">
      {/* Gradient top border strip */}
      <div className="h-px bg-brand-gradient" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Shield className="w-7 h-7 text-stealth-cyan" />
              <span className="font-bold text-lg">
                <span className="text-white">Stealth</span><span className="bg-gradient-to-r from-stealth-sky to-stealth-indigo bg-clip-text text-transparent">Cyber</span>
              </span>
            </Link>
            <p className="text-stealth-gray text-sm leading-relaxed max-w-sm">
              Global cybersecurity consultancy delivering 24/7 managed detection, incident
              response, AI security, and compliance services. Offices in Gold Coast,
              São Paulo, and Texas.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://linkedin.com/company/stealthcyber"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stealth-gray hover:text-stealth-indigo transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-stealth-gray hover:text-stealth-cyan text-sm transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-stealth-gray">
                <Phone className="w-4 h-4 mt-0.5 text-stealth-cyan shrink-0" />
                <a href="tel:+61752308381" className="hover:text-white transition-colors">+61 7 5230 8381</a>
              </li>
              <li className="flex items-start gap-2 text-sm text-stealth-gray">
                <MapPin className="w-4 h-4 mt-0.5 text-stealth-cyan shrink-0" />
                <span>Gold Coast, AU · São Paulo, BR · Texas, US</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block px-4 py-2 bg-gradient-to-r from-stealth-blue to-stealth-indigo text-white text-sm font-semibold rounded hover:opacity-90 transition-opacity"
              >
                Get Protected
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-stealth-navy-light flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stealth-gray">
          <p>© {new Date().getFullYear()} Stealth Cyber Pty Ltd. ABN 72 675 840 632. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
