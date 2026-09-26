import Link from 'next/link'
import { Linkedin, Phone, MapPin } from 'lucide-react'
import Logo from '@/components/Logo'

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

// Every top-level page, so each one is reachable from the footer of every
// page, not only from the header menu.
const explore = [
  { label: 'Nerv Platform', href: '/nerv' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
  { label: 'Free Security Assessment', href: '/assessment' },
  { label: 'Free AI Readiness Assessment', href: '/ai-assessment' },
  { label: 'AI Training', href: 'https://ai.stealthcyber.io' },
]

export default function Footer() {
  return (
    // Nerv palette, matching the homepage and /nerv: Void Black, a Nerv Core
    // rule as the top edge, kit hairlines, Nerv Cyan for icons and hovers.
    <footer className="surface-void">
      <div className="rule-nerv" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4" aria-label="Stealth Cyber home">
              <Logo size="md" />
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
                className="inline-flex h-11 w-11 -ml-2.5 items-center justify-center rounded-md text-stealth-gray transition-colors hover:text-nerv-cyan"
                aria-label="Stealth Cyber on LinkedIn"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-[0.6875rem] font-medium tracking-[0.16em] text-stealth-dim uppercase">Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className="text-stealth-gray hover:text-nerv-cyan text-sm transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[0.6875rem] font-medium tracking-[0.16em] text-stealth-dim uppercase">Explore</h3>
            <ul className="space-y-2">
              {explore.map((e) => (
                <li key={e.href}>
                  <a href={e.href} className="text-stealth-gray hover:text-nerv-cyan text-sm transition-colors">
                    {e.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[0.6875rem] font-medium tracking-[0.16em] text-stealth-dim uppercase">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-stealth-gray">
                <Phone className="w-4 h-4 mt-0.5 text-nerv-cyan shrink-0" />
                <span>
                  <a href="tel:+61752308381" className="hover:text-white transition-colors">AU: +61 7 5230 8381</a>
                  <br />
                  <a href="tel:+18557742595" className="hover:text-white transition-colors">US: +1 (855) 774-2595</a>
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm text-stealth-gray">
                <MapPin className="w-4 h-4 mt-0.5 text-nerv-cyan shrink-0" />
                <span>Gold Coast, AU · São Paulo, BR · Texas, US</span>
              </li>
            </ul>
            <div className="mt-6">
              {/* Dark label on magenta: white on #F303B0 is 3.85:1. */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-stealth-magenta px-4 py-2.5 text-sm font-semibold text-black transition-colors duration-200 ease-out-quart hover:bg-[#ff3cc6]"
              >
                Get Protected
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-nerv-hair flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stealth-gray">
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
