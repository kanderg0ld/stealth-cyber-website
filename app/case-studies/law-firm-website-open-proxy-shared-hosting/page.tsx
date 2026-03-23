import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import JsonLd from '@/components/JsonLd'
import BreadcrumbJsonLd from '@/components/structured-data/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'The Law Firm\'s Website Was Working Fine. It Was Also a Backdoor Into Dozens of Other Businesses.',
  description: 'A penetration test of a law firm\'s website uncovered that the shared hosting server could be used as a proxy to launch attacks and access every other business on the same infrastructure.',
  alternates: { canonical: 'https://stealthcyber.io/case-studies/law-firm-website-open-proxy-shared-hosting' },
  openGraph: {
    title: 'The Law Firm\'s Website Was Working Fine. It Was Also a Backdoor. | Stealth Cyber',
    description: 'A penetration test of a law firm\'s website uncovered that the shared hosting server could be used as a proxy to launch attacks and access every other business on the same infrastructure.',
    url: 'https://stealthcyber.io/case-studies/law-firm-website-open-proxy-shared-hosting',
    type: 'article',
  },
}

export default function CaseStudyLawFirmProxy() {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'The Law Firm\'s Website Was Working Fine. It Was Also a Backdoor Into Dozens of Other Businesses.',
        description: 'A penetration test of a law firm\'s website uncovered that the shared hosting server could be used as a proxy to launch attacks and access every other business on the same infrastructure.',
        url: 'https://stealthcyber.io/case-studies/law-firm-website-open-proxy-shared-hosting',
        author: {
          '@type': 'Organization',
          name: 'Stealth Cyber',
        },
        about: {
          '@id': 'https://stealthcyber.io/#organization',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Stealth Cyber',
          logo: {
            '@type': 'ImageObject',
            url: 'https://stealthcyber.io/Primary-Reversed-Dark.png',
          },
        },
      }} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://stealthcyber.io' },
        { name: 'Case Studies', url: 'https://stealthcyber.io/case-studies' },
        { name: 'Law Firm Open Proxy', url: 'https://stealthcyber.io/case-studies/law-firm-website-open-proxy-shared-hosting' },
      ]} />

      <article className="bg-stealth-dark py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <div className="mb-8">
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-stealth-gray text-sm hover:text-stealth-cyan transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Case Studies
            </Link>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['Penetration Testing', 'Legal', 'Web Security'].map((tag) => (
              <span key={tag} className="px-2.5 py-1 text-xs font-medium bg-stealth-cyan/10 text-stealth-cyan rounded-full border border-stealth-cyan/20">{tag}</span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            The Law Firm&apos;s Website Was Working Fine. It Was Also a Backdoor Into Dozens of Other Businesses.
          </h1>

          {/* Meta info */}
          <div className="text-sm text-stealth-gray mb-10 pb-8 border-b border-stealth-cyan/10">
            Industry: Legal services &middot; Location: Australia
          </div>

          {/* Article body */}
          <div className="prose prose-lg prose-invert prose-cyan max-w-none prose-headings:text-white prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-stealth-gray prose-p:leading-relaxed prose-p:mb-6 prose-li:text-stealth-gray prose-strong:text-white prose-ul:my-6 prose-li:my-2">

            <h2>The short version</h2>

            <p>
              A law firm engaged Stealth Cyber to conduct a penetration test of their website as part of a broader security review. The website was functional, up to date, and appeared well maintained. However, the underlying shared hosting server was misconfigured in a way that turned it into an open proxy. This meant anyone who could access the server could route traffic through it to reach other systems, including every other website hosted on the same server.
            </p>

            <p>
              The law firm&apos;s website was not just a potential target. It was a potential launchpad.
            </p>

            <h2>What we were asked to do</h2>

            <p>
              The firm had recently reviewed their cyber insurance requirements and identified the need for a technical assessment of their external-facing assets. Their website was the primary one. Stealth Cyber was engaged to perform a targeted penetration test against the site and its hosting environment.
            </p>

            <h2>What we found</h2>

            <p>
              The website itself was running a current CMS version with no critical vulnerabilities in the application layer. The hosting environment was a different story.
            </p>

            <p>
              The site was hosted on a shared server managed by a third-party web hosting provider. During testing, Stealth Cyber identified that the server was configured as an open proxy. This is a server-level misconfiguration that allows external requests to be relayed through the server to other destinations.
            </p>

            <p>
              <strong>First, the server could be used to proxy traffic to external targets.</strong> An attacker could route requests through the law firm&apos;s server to mask their origin. This means that if the attacker launched a phishing campaign, scanned other networks, or attempted to exploit other systems, the traffic would appear to originate from the law firm&apos;s IP address. The law firm would bear the reputational and potentially legal consequences.
            </p>

            <p>
              <strong>Second, the server could be used to access other sites hosted on the same infrastructure.</strong> Because this was a shared hosting environment, the open proxy configuration gave access to internal network paths that connected to other customer environments on the same server. This means an attacker could potentially reach databases, admin panels, and file systems belonging to completely unrelated businesses.
            </p>

            <p>
              The law firm had no visibility into this configuration. Their web developer had not flagged it. The hosting provider had not identified it. It had likely been in place since the server was provisioned.
            </p>

            <h2>Why this happens</h2>

            <p>
              Shared hosting is common for small and mid-sized businesses because it is inexpensive and simple to set up. The hosting provider manages the server, and the business focuses on their website content. The problem is that shared hosting places multiple unrelated businesses on the same server, and the security of that server depends entirely on the hosting provider&apos;s configuration.
            </p>

            <p>
              In this case, the hosting provider had not properly restricted proxy functionality at the server level. This is not an obscure or difficult attack to execute. Open proxy detection is a standard check in any competent penetration test. The fact that it had gone undetected suggests that no meaningful security testing had been performed on the hosting environment before Stealth Cyber&apos;s engagement.
            </p>

            <p>
              This is a systemic issue. Many businesses assume that their hosting provider is managing security on their behalf. In practice, most shared hosting agreements place the responsibility for application-level security on the customer, while server-level security depends on the provider&apos;s diligence. Neither party may be actively testing or monitoring.
            </p>

            <h2>What this means if you&apos;ve outsourced your website</h2>

            <p>
              If your website is hosted on a shared server, the security of your site depends on the security of every other site on that server, and on the hosting provider&apos;s server configuration. You may have a perfectly maintained website, but if the server it sits on is misconfigured, your business is exposed.
            </p>

            <p>
              A penetration test of your website should include the hosting environment, not just the application. Testing only the website itself is like checking the locks on your office door without checking whether the building&apos;s back entrance is propped open.
            </p>

            <p>
              If you do not know what type of hosting your website uses, who manages the server, or when it was last tested, those are the first questions to ask.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-stealth-navy rounded-2xl border border-stealth-cyan/10 p-8 md:p-10">
            <h3 className="text-white font-bold text-xl mb-3">Test Your External Attack Surface</h3>
            <p className="text-stealth-gray leading-relaxed mb-6">
              Stealth Cyber conducts penetration testing that goes beyond the application layer. We test your hosting environment, your configurations, and your exposure. Find out what an attacker would find before they do.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-stealth-cyan text-stealth-dark font-semibold text-sm rounded-lg hover:bg-white transition-colors"
            >
              Talk to Stealth Cyber about penetration testing for your business <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Back link */}
          <div className="mt-8">
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-stealth-gray text-sm hover:text-stealth-cyan transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Case Studies
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
