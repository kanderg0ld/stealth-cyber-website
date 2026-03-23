import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import JsonLd from '@/components/JsonLd'
import BreadcrumbJsonLd from '@/components/structured-data/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'How Stealth Cyber Stopped a 109-Day Silent Attack on an Australian Accounting Firm',
  description: 'A Queensland accounting firm was silently compromised for 109 days. Attackers bypassed MFA using token theft, accessed client tax returns and financial data across nine business entities. This is how Stealth Cyber detected and stopped it.',
  alternates: { canonical: 'https://stealthcyber.io/case-studies/token-theft-mfa-bypass-accounting-firm' },
  openGraph: {
    title: 'How Stealth Cyber Stopped a 109-Day Silent Attack on an Australian Accounting Firm | Stealth Cyber',
    description: 'A Queensland accounting firm was silently compromised for 109 days. Attackers bypassed MFA using token theft, accessed client tax returns and financial data across nine business entities.',
    url: 'https://stealthcyber.io/case-studies/token-theft-mfa-bypass-accounting-firm',
    type: 'article',
  },
}

export default function CaseStudyTokenTheft() {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'How Stealth Cyber Stopped a 109-Day Silent Attack on an Australian Accounting Firm',
        description: 'A Queensland accounting firm was silently compromised for 109 days. Attackers bypassed MFA using token theft, accessed client tax returns and financial data across nine business entities.',
        url: 'https://stealthcyber.io/case-studies/token-theft-mfa-bypass-accounting-firm',
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
        { name: 'Token Theft MFA Bypass', url: 'https://stealthcyber.io/case-studies/token-theft-mfa-bypass-accounting-firm' },
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
            {['Incident Response', 'Accounting', 'Token Theft'].map((tag) => (
              <span key={tag} className="px-2.5 py-1 text-xs font-medium bg-stealth-cyan/10 text-stealth-cyan rounded-full border border-stealth-cyan/20">{tag}</span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            How Stealth Cyber Stopped a 109-Day Silent Attack on an Australian Accounting Firm
          </h1>

          {/* Meta info */}
          <div className="text-sm text-stealth-gray mb-10 pb-8 border-b border-stealth-cyan/10">
            Industry: Accounting and professional services &middot; Location: Australia &middot; ~30 Microsoft 365 users
          </div>

          {/* Article body */}
          <div className="prose prose-lg prose-invert prose-cyan max-w-none prose-headings:text-white prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-stealth-gray prose-p:leading-relaxed prose-p:mb-6 prose-li:text-stealth-gray prose-strong:text-white prose-ul:my-6 prose-li:my-2">

            <h2>The short version</h2>

            <p>
              A mid-sized accounting firm in Queensland had been compromised for 109 days before Stealth Cyber was engaged. The attacker bypassed multi-factor authentication using a stolen session token, then quietly accessed mailboxes, SharePoint, and OneDrive across nine separate business entities managed under the same Microsoft 365 tenancy.
            </p>

            <p>
              No ransomware was deployed. No obvious disruption occurred. The attacker was there to read, not to destroy. They accessed client tax returns, financial statements, bank details, and internal business correspondence. The breach was only discovered after unusual sign-in behaviour was flagged.
            </p>

            <h2>What happened</h2>

            <p>
              The firm used Microsoft 365 with MFA enabled. On the surface, everything looked correct. But the attacker had obtained a valid session token, likely through an adversary-in-the-middle phishing attack. This gave them authenticated access without ever needing to enter a password or complete an MFA challenge.
            </p>

            <p>
              Once inside, the attacker created inbox rules to redirect specific emails, accessed shared mailboxes, and browsed files across SharePoint and OneDrive. The compromised account had broad permissions, which gave the attacker lateral visibility across multiple client entities.
            </p>

            <p>
              <strong>Timeline:</strong>
            </p>

            <ul>
              <li><strong>Day 0:</strong> Session token stolen via suspected adversary-in-the-middle phishing attack.</li>
              <li><strong>Days 1 to 30:</strong> Attacker accessed primary mailbox and created forwarding rules. No alerts triggered.</li>
              <li><strong>Days 30 to 80:</strong> Access expanded to shared mailboxes and SharePoint sites across nine business entities.</li>
              <li><strong>Days 80 to 109:</strong> Continued access to OneDrive and email. Financial records, tax returns, and bank details were viewed.</li>
              <li><strong>Day 109:</strong> Unusual sign-in activity was identified. Stealth Cyber was engaged.</li>
            </ul>

            <h2>What Stealth Cyber did</h2>

            <ul>
              <li><strong>Revoked all active sessions</strong> and forced re-authentication across the tenancy.</li>
              <li><strong>Conducted a full audit</strong> of Microsoft 365 sign-in logs, unified audit logs, and mailbox rule configurations.</li>
              <li><strong>Identified the scope of the breach,</strong> confirming which mailboxes, SharePoint sites, and OneDrive accounts were accessed.</li>
              <li><strong>Mapped the data exposure</strong> across all nine business entities, identifying the types of records accessed including tax file numbers, financial statements, and banking information.</li>
              <li><strong>Removed malicious inbox rules</strong> created by the attacker to intercept and redirect email.</li>
              <li><strong>Produced a formal incident report</strong> for the client, suitable for regulatory notification under the Notifiable Data Breaches scheme.</li>
              <li><strong>Delivered a remediation roadmap</strong> covering conditional access policies, token protection, privilege review, and ongoing monitoring.</li>
            </ul>

            <h2>Why MFA didn&apos;t stop it</h2>

            <p>
              MFA is an important control, but it is not a complete defence. In this case, the attacker never needed to bypass MFA directly. They stole a session token after the user had already authenticated. The token acted as a valid pass, giving the attacker the same level of access as the legitimate user.
            </p>

            <p>
              This technique, known as token theft or session hijacking, is increasingly common. It is effective against organisations that rely on MFA alone without additional controls such as conditional access policies, token binding, or continuous session evaluation.
            </p>

            <h2>What made this case harder to catch</h2>

            <ul>
              <li><strong>No malware was deployed.</strong> There was nothing for endpoint protection to detect.</li>
              <li><strong>No ransomware, no encryption, no disruption.</strong> The business continued operating normally.</li>
              <li><strong>The attacker used legitimate Microsoft 365 services.</strong> All access occurred through standard interfaces.</li>
              <li><strong>Inbox rules were subtle.</strong> Forwarding rules targeted specific senders rather than bulk forwarding, which made them harder to spot.</li>
              <li><strong>The compromised account had broad access.</strong> A single account gave the attacker visibility across nine business entities.</li>
            </ul>

            <h2>The outcome</h2>

            <p>
              The attacker&apos;s access was terminated within hours of Stealth Cyber&apos;s engagement. The full forensic investigation was completed within one week. The firm received a detailed incident report and a prioritised remediation plan. Regulatory notification requirements were assessed and documented.
            </p>

            <p>
              Stealth Cyber subsequently deployed managed detection and response (MDR) monitoring across the tenancy to provide continuous visibility and rapid response capability.
            </p>

            <h2>What this means for your business</h2>

            <p>
              If your organisation uses Microsoft 365, this type of attack is relevant to you. Token theft does not require sophisticated tooling. It requires one successful phishing email and an environment that lacks post-authentication monitoring.
            </p>

            <p>
              MFA is necessary, but it is not sufficient on its own. Without conditional access policies, session controls, and ongoing monitoring, a single compromised session can give an attacker months of silent access.
            </p>

            <p>
              The question is not whether MFA is enabled. The question is what happens after authentication.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-stealth-navy rounded-2xl border border-stealth-cyan/10 p-8 md:p-10">
            <h3 className="text-white font-bold text-xl mb-3">Protect Your Business</h3>
            <p className="text-stealth-gray leading-relaxed mb-6">
              Stealth Cyber provides managed detection and response for Microsoft 365 environments. We monitor for token theft, compromised sessions, and lateral movement so you do not have to wait 109 days to find out.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-stealth-cyan text-stealth-dark font-semibold text-sm rounded-lg hover:bg-white transition-colors"
            >
              Talk to Stealth Cyber about MDR for your business <ArrowRight className="w-4 h-4" />
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
