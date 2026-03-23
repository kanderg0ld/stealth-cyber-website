import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import BreadcrumbJsonLd from '@/components/structured-data/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Real incident response and security engagement case studies from Stealth Cyber. See how we help Australian businesses detect, respond to, and recover from cyber threats.',
}

const caseStudies = [
  {
    slug: 'token-theft-mfa-bypass-accounting-firm',
    title: 'How Stealth Cyber Stopped a 109-Day Silent Attack on an Australian Accounting Firm',
    summary: 'A Queensland accounting firm was silently compromised for 109 days. Attackers bypassed MFA, accessed client tax returns and financial data on nine business entities.',
    tags: ['Incident Response', 'Accounting', 'Token Theft'],
    industry: 'Accounting',
    location: 'Australia',
  },
  {
    slug: 'domain-suspension-uncovers-cyber-breach',
    title: 'A Routine Domain Problem Turned Into a Serious Breach',
    summary: 'What started as a domain administration problem uncovered a compromised account, an unauthorised remote access tool with full system privileges, and credential exposure in criminal data leaks.',
    tags: ['Incident Response', 'Legacy IT', 'Forensics'],
    industry: 'Professional Services',
    location: 'Australia',
  },
  {
    slug: 'law-firm-website-open-proxy-shared-hosting',
    title: 'The Law Firm\'s Website Was Working Fine. It Was Also a Backdoor.',
    summary: 'A penetration test of a law firm\'s website uncovered that the shared hosting server could be used as a proxy to launch attacks and access every other business on the same infrastructure.',
    tags: ['Penetration Testing', 'Legal', 'Web Security'],
    industry: 'Legal Services',
    location: 'Australia',
  },
  {
    slug: 'cyber-tabletop-exercise-queensland-government-health',
    title: 'When the Ransom Note Arrived, Did Your Team Know What to Do?',
    summary: 'A large Queensland government hospital ran a full-day cyber disruption exercise. The scenario put senior leadership under pressure in a safe environment.',
    tags: ['Tabletop Exercise', 'Healthcare', 'Government'],
    industry: 'Government Health',
    location: 'Queensland, Australia',
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://stealthcyber.io' },
        { name: 'Case Studies', url: 'https://stealthcyber.io/case-studies' },
      ]} />

      <section className="bg-stealth-dark py-20 border-b border-stealth-cyan/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-stealth-cyan text-xs font-medium uppercase tracking-widest mb-4">Real Engagements</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Case Studies</h1>
            <p className="text-stealth-gray text-lg">
              Real incident response, penetration testing, and security advisory engagements
              from the Stealth Cyber team.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-stealth-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.slug} className="group bg-stealth-navy rounded-xl border border-stealth-cyan/10 overflow-hidden hover:border-stealth-cyan/30 transition-colors">
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {cs.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-xs font-medium bg-stealth-cyan/10 text-stealth-cyan rounded-full border border-stealth-cyan/20">{tag}</span>
                    ))}
                  </div>
                  <Link href={`/case-studies/${cs.slug}`}>
                    <h2 className="text-white font-bold text-lg mb-2 group-hover:text-stealth-cyan transition-colors">{cs.title}</h2>
                  </Link>
                  <p className="text-stealth-gray text-sm leading-relaxed mb-4">{cs.summary}</p>
                  <p className="text-stealth-gray text-xs mb-4">{cs.industry} &middot; {cs.location}</p>
                  <div className="border-t border-stealth-cyan/10 pt-4">
                    <Link href={`/case-studies/${cs.slug}`} className="inline-flex items-center gap-1 text-stealth-cyan text-xs font-medium group-hover:gap-2 transition-all">
                      Read Case Study <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
