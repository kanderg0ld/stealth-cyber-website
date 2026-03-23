import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import JsonLd from '@/components/JsonLd'
import BreadcrumbJsonLd from '@/components/structured-data/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'A Routine Domain Problem Turned Into a Serious Breach. Here\'s How We Uncovered It.',
  description: 'What started as a domain administration problem uncovered a compromised account, an unauthorised remote access tool with full system privileges, and credential exposure in criminal data leaks.',
  alternates: { canonical: 'https://stealthcyber.io/case-studies/domain-suspension-uncovers-cyber-breach' },
  openGraph: {
    title: 'A Routine Domain Problem Turned Into a Serious Breach | Stealth Cyber',
    description: 'What started as a domain administration problem uncovered a compromised account, an unauthorised remote access tool with full system privileges, and credential exposure in criminal data leaks.',
    url: 'https://stealthcyber.io/case-studies/domain-suspension-uncovers-cyber-breach',
    type: 'article',
  },
}

export default function CaseStudyDomainSuspension() {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'A Routine Domain Problem Turned Into a Serious Breach. Here\'s How We Uncovered It.',
        description: 'What started as a domain administration problem uncovered a compromised account, an unauthorised remote access tool with full system privileges, and credential exposure in criminal data leaks.',
        url: 'https://stealthcyber.io/case-studies/domain-suspension-uncovers-cyber-breach',
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
        { name: 'Domain Suspension Breach', url: 'https://stealthcyber.io/case-studies/domain-suspension-uncovers-cyber-breach' },
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
            {['Incident Response', 'Legacy IT', 'Forensics'].map((tag) => (
              <span key={tag} className="px-2.5 py-1 text-xs font-medium bg-stealth-cyan/10 text-stealth-cyan rounded-full border border-stealth-cyan/20">{tag}</span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            A Routine Domain Problem Turned Into a Serious Breach. Here&apos;s How We Uncovered It.
          </h1>

          {/* Meta info */}
          <div className="text-sm text-stealth-gray mb-10 pb-8 border-b border-stealth-cyan/10">
            Industry: Professional services &middot; Location: Australia
          </div>

          {/* Article body */}
          <div className="prose prose-lg prose-invert prose-cyan max-w-none prose-headings:text-white prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-stealth-gray prose-p:leading-relaxed prose-p:mb-6 prose-li:text-stealth-gray prose-strong:text-white prose-ul:my-6 prose-li:my-2">

            <h2>The short version</h2>

            <p>
              A professional services firm contacted Stealth Cyber after their domain was suspended by the registrar. They assumed it was an administrative issue. It was not. The investigation uncovered a compromised Microsoft 365 account, an unauthorised remote access tool installed with full system privileges, and multiple staff credentials exposed in criminal data leaks.
            </p>

            <h2>How it started</h2>

            <p>
              The firm noticed their domain had been suspended, which caused email delivery failures and website downtime. Their IT provider was unable to resolve the issue and could not explain why the suspension had occurred. Stealth Cyber was engaged to investigate.
            </p>

            <p>
              Within the first few hours, it became clear that the domain suspension was a symptom, not the cause. The registrar had flagged the domain due to suspicious activity associated with the account. That suspicious activity pointed to something much larger.
            </p>

            <h2>What we found when we looked</h2>

            <p>
              The investigation revealed three distinct but related problems.
            </p>

            <p>
              <strong>First, a compromised Microsoft 365 account.</strong> One staff member&apos;s account had been accessed by an unauthorised party. Mailbox rules had been created to redirect emails, and the account had been used to send phishing emails to contacts in the firm&apos;s address book. This is likely what triggered the domain suspension.
            </p>

            <p>
              <strong>Second, an unauthorised remote access tool.</strong> A remote administration tool had been installed on a workstation with SYSTEM-level privileges. This was not a tool the firm or their IT provider had deployed. It gave whoever installed it full control of the machine, including the ability to access files, capture keystrokes, and move laterally within the network.
            </p>

            <p>
              <strong>Third, credential exposure in criminal data leaks.</strong> A review of threat intelligence sources revealed that multiple staff email addresses and passwords had appeared in criminal data breach compilations. Some of these credentials were still in active use and had not been changed.
            </p>

            <h2>What Stealth Cyber did</h2>

            <p>
              <strong>Containment.</strong> We immediately revoked all active sessions, reset credentials for all affected accounts, and disabled the compromised account. The unauthorised remote access tool was removed from the affected workstation and all other systems were scanned to confirm no additional installations existed.
            </p>

            <p>
              <strong>Forensic investigation.</strong> We conducted a thorough review of Microsoft 365 audit logs, sign-in records, and mailbox configurations. We identified the scope of the compromise, the timeline of unauthorised access, and the data that may have been exposed.
            </p>

            <p>
              <strong>Threat intelligence.</strong> We ran all staff email addresses against known criminal data breach databases to identify exposed credentials. We provided a full report of which accounts were compromised and the source breaches where the credentials appeared.
            </p>

            <p>
              <strong>Documentation.</strong> We produced a formal incident report covering the timeline, scope, and impact of the breach. This included an assessment of notification obligations under the Notifiable Data Breaches scheme.
            </p>

            <p>
              <strong>Remediation roadmap.</strong> We delivered a prioritised list of actions to address the root causes, including MFA enforcement, conditional access policies, privileged access management, endpoint protection improvements, and an ongoing monitoring plan.
            </p>

            <h2>What this case illustrates</h2>

            <p>
              <strong>Legacy IT environments create blind spots.</strong> The firm&apos;s IT provider was managing day-to-day operations but had no visibility into security events. There was no monitoring, no alerting, and no audit log review. The compromise could have continued indefinitely if the domain had not been suspended.
            </p>

            <p>
              <strong>One compromised account can cascade quickly.</strong> A single account with standard permissions was enough to send phishing emails, access shared resources, and trigger a domain suspension. Broad access and a lack of segmentation amplified the impact.
            </p>

            <p>
              <strong>Exposed credentials are an ongoing liability.</strong> Staff credentials that appear in criminal data leaks do not expire. If those passwords are reused or if MFA is not enforced, they remain a viable entry point for attackers.
            </p>

            <h2>The outcome</h2>

            <p>
              The domain was restored after Stealth Cyber worked with the registrar to demonstrate that the underlying issue had been contained. The compromised account was secured, the remote access tool was removed, and all affected credentials were reset.
            </p>

            <p>
              The firm received a complete incident report and remediation roadmap. Stealth Cyber was retained to implement the recommended security controls and provide ongoing monitoring.
            </p>

            <h2>What this means for your business</h2>

            <p>
              If your IT provider manages your systems but does not actively monitor for security events, you may have similar blind spots. Compromised accounts, unauthorised tools, and leaked credentials are not hypothetical risks. They are common findings in environments where security has been assumed rather than verified.
            </p>

            <p>
              A domain suspension, a strange email, or an unexplained login may be the first visible sign of a much deeper problem. The question is whether anyone is watching closely enough to notice.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-stealth-navy rounded-2xl border border-stealth-cyan/10 p-8 md:p-10">
            <h3 className="text-white font-bold text-xl mb-3">Find Out Where You Stand</h3>
            <p className="text-stealth-gray leading-relaxed mb-6">
              Stealth Cyber conducts security assessments that uncover the risks your current IT provider may not be looking for. From compromised credentials to unauthorised access tools, we find what others miss.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-stealth-cyan text-stealth-dark font-semibold text-sm rounded-lg hover:bg-white transition-colors"
            >
              Talk to Stealth Cyber about a security assessment for your business <ArrowRight className="w-4 h-4" />
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
