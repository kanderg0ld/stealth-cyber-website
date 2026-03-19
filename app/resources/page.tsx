import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import BreadcrumbJsonLd from '@/components/structured-data/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'Free Cybersecurity Resources',
  description: 'Downloadable cybersecurity guides, checklists, and cheat sheets for Australian businesses. Practical resources written by the Stealth Cyber team.',
}

const resources = [
  {
    title: 'AI Security Cheat Sheet',
    slug: 'ai-security-cheat-sheet',
    description: 'What every Australian business needs to know about securing AI tools in the workplace.',
    tags: ['AI Security', 'Cheat Sheet'],
  },
  {
    title: 'AI Readiness Checklist',
    slug: 'ai-readiness-checklist',
    description: 'Before your organisation deploys AI tools at scale, work through this checklist to identify gaps.',
    tags: ['AI Governance', 'Checklist'],
  },
  {
    title: '10 Questions to Ask Your IT Provider',
    slug: '10-questions-it-provider',
    description: 'A capable IT provider should be able to answer every one of these clearly. Vague answers are data.',
    tags: ['IT Provider', 'Guide'],
  },
  {
    title: 'Cyber Insurance Checklist',
    slug: 'cyber-insurance-checklist',
    description: 'Understand what your cyber insurance actually covers and what gaps to close before renewal.',
    tags: ['Cyber Insurance', 'Checklist'],
  },
  {
    title: 'Account Security Checklist',
    slug: 'account-security-checklist',
    description: 'Most breaches start with a compromised account. The controls that matter most.',
    tags: ['Account Security', 'Checklist'],
  },
  {
    title: 'Incident Response Checklist: The First 24 Hours',
    slug: 'incident-response-checklist',
    description: 'What you do in the first 24 hours determines how bad the outcome is. Use this in the moment.',
    tags: ['Incident Response', 'Checklist'],
  },
  {
    title: 'Microsoft 365 Security Hardening Checklist',
    slug: 'm365-security-checklist',
    description: 'Default M365 settings are not secure settings. The configurations that matter most.',
    tags: ['Microsoft 365', 'Checklist'],
  },
  {
    title: 'Business Email Compromise Prevention Guide',
    slug: 'bec-prevention-guide',
    description: 'The highest-return, lowest-effort attack targeting professional services firms. How to stop it.',
    tags: ['BEC', 'Email Security', 'Guide'],
  },
  {
    title: 'End of Financial Year Cyber Threat Guide',
    slug: 'eofy-cyber-threat-guide',
    description: 'EOFY is the highest-risk period for Australian firms. What attackers do differently.',
    tags: ['EOFY', 'Threat Intelligence', 'Guide'],
  },
  {
    title: 'New Employee Onboarding Checklist',
    slug: 'employee-onboarding-checklist',
    description: 'Every new employee is a potential entry point until properly briefed and set up.',
    tags: ['Onboarding', 'Checklist'],
  },
]

export default function ResourcesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', url: 'https://stealthcyber.io' }, { name: 'Resources', url: 'https://stealthcyber.io/resources' }]} />

      <section className="bg-stealth-dark py-20 border-b border-stealth-cyan/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-stealth-cyan text-xs font-medium uppercase tracking-widest mb-4">Resources</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Free Cybersecurity Resources</h1>
            <p className="text-stealth-gray text-lg">
              Downloadable guides, checklists, and cheat sheets to help Australian
              businesses strengthen their cybersecurity posture.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-stealth-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <Link key={resource.slug} href={`/resources/${resource.slug}`} className="group bg-stealth-navy rounded-xl border border-stealth-cyan/10 overflow-hidden hover:border-stealth-cyan/30 transition-colors">
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {resource.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-xs font-medium bg-stealth-cyan/10 text-stealth-cyan rounded-full border border-stealth-cyan/20">{tag}</span>
                    ))}
                  </div>
                  <h2 className="text-white font-bold text-lg mb-2 group-hover:text-stealth-cyan transition-colors">{resource.title}</h2>
                  <p className="text-stealth-gray text-sm leading-relaxed mb-4">{resource.description}</p>
                  <div className="flex items-center justify-end border-t border-stealth-cyan/10 pt-4">
                    <span className="inline-flex items-center gap-1 text-stealth-cyan text-xs font-medium group-hover:gap-2 transition-all">
                      View &amp; Download <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
