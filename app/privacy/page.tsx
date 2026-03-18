import type { Metadata } from 'next'
import Link from 'next/link'
import BreadcrumbJsonLd from '@/components/structured-data/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Stealth Cyber privacy policy covering Australian Privacy Act 1988, CCPA/CPRA, and international data handling. Learn how we collect, use, store, and protect your personal information.',
  alternates: { canonical: 'https://stealthcyber.io/privacy' },
  openGraph: {
    title: 'Privacy Policy | Stealth Cyber',
    description: 'How Stealth Cyber collects, uses, stores, and protects your personal information under Australian and US privacy law.',
    url: 'https://stealthcyber.io/privacy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', url: 'https://stealthcyber.io' }, { name: 'Privacy Policy', url: 'https://stealthcyber.io/privacy' }]} />

      {/* Hero */}
      <section className="bg-stealth-dark py-20 border-b border-stealth-cyan/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-stealth-cyan text-xs font-medium uppercase tracking-widest mb-4">Legal</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-stealth-gray text-lg leading-relaxed">
              Stealth Cyber Pty Ltd (ABN 72 675 840 632) is committed to protecting your personal information
              in accordance with the Australian Privacy Act 1988 (Cth), the Australian Privacy Principles (APPs),
              and applicable United States privacy legislation including the California Consumer Privacy Act (CCPA)
              and the California Privacy Rights Act (CPRA).
            </p>
            <p className="text-stealth-gray text-sm mt-4">Last updated: 18 March 2026</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-stealth-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">

            {/* 1. Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p className="text-stealth-gray leading-relaxed mb-4">
                We may collect the following categories of personal information:
              </p>
              <ul className="list-disc list-inside text-stealth-gray space-y-2 ml-2">
                <li><span className="text-white font-medium">Identity and contact information:</span> your name, email address, phone number, and company name.</li>
                <li><span className="text-white font-medium">Assessment data:</span> your answers, scores, and results from our online self-assessment quizzes and tools.</li>
                <li><span className="text-white font-medium">Technical information:</span> your IP address, browser type, operating system, device identifiers, and referring URLs.</li>
                <li><span className="text-white font-medium">Usage data:</span> pages visited, time spent on site, click patterns, and other analytics data.</li>
                <li><span className="text-white font-medium">Cookies and tracking data:</span> information collected through cookies, pixels, and similar technologies as described in Section 7 below.</li>
              </ul>
            </div>

            {/* 2. How We Collect Information */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Collect Information</h2>
              <p className="text-stealth-gray leading-relaxed mb-4">
                We collect personal information through the following means:
              </p>
              <ul className="list-disc list-inside text-stealth-gray space-y-2 ml-2">
                <li><span className="text-white font-medium">Contact and enquiry forms:</span> when you submit a form on our website requesting information or a consultation.</li>
                <li><span className="text-white font-medium">Assessment quizzes:</span> when you complete a cybersecurity self-assessment, AI readiness assessment, or similar tool on our website.</li>
                <li><span className="text-white font-medium">Cookies and analytics:</span> automatically through cookies, Cloudflare analytics, and other tracking technologies when you visit our website.</li>
                <li><span className="text-white font-medium">Email communications:</span> when you correspond with us via email or subscribe to communications.</li>
                <li><span className="text-white font-medium">Third-party sources:</span> we may receive limited information from business intelligence platforms in the course of B2B outreach.</li>
              </ul>
            </div>

            {/* 3. Why We Collect Information */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3. Why We Collect Information</h2>
              <p className="text-stealth-gray leading-relaxed mb-4">
                We collect and use your personal information for the following purposes:
              </p>
              <ul className="list-disc list-inside text-stealth-gray space-y-2 ml-2">
                <li>To respond to your enquiries and provide the information or services you have requested.</li>
                <li>To deliver assessment results and personalised recommendations based on your quiz responses.</li>
                <li>To improve our website, services, and user experience through analytics and aggregated data.</li>
                <li>To send you marketing communications where you have provided consent or where we have a legitimate interest (you may opt out at any time).</li>
                <li>To comply with our legal and regulatory obligations.</li>
                <li>To protect the security of our website and systems.</li>
              </ul>
            </div>

            {/* 4. How We Store and Protect Your Information */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. How We Store and Protect Your Information</h2>
              <p className="text-stealth-gray leading-relaxed mb-4">
                We take reasonable steps to protect your personal information from misuse, interference, loss,
                unauthorised access, modification, or disclosure. Our security measures include:
              </p>
              <ul className="list-disc list-inside text-stealth-gray space-y-2 ml-2">
                <li><span className="text-white font-medium">Cloud infrastructure:</span> data is stored on Microsoft Azure cloud infrastructure with encryption at rest and in transit.</li>
                <li><span className="text-white font-medium">Access controls:</span> strict role-based access controls limit who can access personal information within our organisation.</li>
                <li><span className="text-white font-medium">Encryption:</span> all data transmitted between your browser and our servers is encrypted using TLS (Transport Layer Security).</li>
                <li><span className="text-white font-medium">Regular review:</span> we periodically review our security practices and update them as necessary to address evolving threats.</li>
              </ul>
            </div>

            {/* 5. Third Parties */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">5. Third Parties We Share Data With</h2>
              <p className="text-stealth-gray leading-relaxed mb-4">
                We may share your personal information with the following categories of third-party service providers, solely for the purposes described in this policy:
              </p>
              <ul className="list-disc list-inside text-stealth-gray space-y-2 ml-2">
                <li><span className="text-white font-medium">SendGrid (Twilio):</span> for email delivery when you submit a contact form or receive assessment results.</li>
                <li><span className="text-white font-medium">Cloudflare:</span> for content delivery, website performance, security protection, and web analytics.</li>
                <li><span className="text-white font-medium">Apollo:</span> for business development and outreach analytics.</li>
              </ul>
              <p className="text-stealth-gray leading-relaxed mt-4">
                We do not sell your personal information to third parties. We require all third-party service providers to handle personal information in accordance with applicable privacy laws and our contractual obligations.
              </p>
            </div>

            {/* 6. Data Retention */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
              <p className="text-stealth-gray leading-relaxed mb-4">
                We retain personal information only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. As a general guide:
              </p>
              <ul className="list-disc list-inside text-stealth-gray space-y-2 ml-2">
                <li><span className="text-white font-medium">Contact form submissions:</span> retained for up to 24 months after your last interaction, unless you request earlier deletion.</li>
                <li><span className="text-white font-medium">Assessment data:</span> retained for up to 12 months to allow you to revisit your results, unless you request earlier deletion.</li>
                <li><span className="text-white font-medium">Analytics data:</span> aggregated and anonymised analytics data may be retained indefinitely. Identifiable analytics data is retained for no more than 12 months.</li>
                <li><span className="text-white font-medium">Client engagement records:</span> retained for up to 7 years in accordance with Australian tax and corporate record-keeping obligations.</li>
              </ul>
            </div>

            {/* 7. Cookies and Tracking */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="text-stealth-gray leading-relaxed mb-4">
                Our website uses cookies and similar tracking technologies to improve your experience and analyse site usage. The types of cookies we use include:
              </p>
              <ul className="list-disc list-inside text-stealth-gray space-y-2 ml-2">
                <li><span className="text-white font-medium">Essential cookies:</span> necessary for the website to function correctly, including security and session management.</li>
                <li><span className="text-white font-medium">Analytics cookies:</span> Cloudflare Web Analytics is used to collect anonymised usage statistics. This service is privacy-focused and does not use client-side state (such as cookies or localStorage) for analytics purposes.</li>
                <li><span className="text-white font-medium">Marketing and tracking:</span> Apollo tracking may be used to understand engagement with our business outreach efforts.</li>
              </ul>
              <p className="text-stealth-gray leading-relaxed mt-4">
                You can manage your cookie preferences using the cookie consent banner displayed on your first visit, or by adjusting your browser settings. Rejecting non-essential cookies will disable analytics and marketing tracking.
              </p>
            </div>

            {/* 8. Your Rights: Australian Privacy Act */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">8. Your Rights Under the Australian Privacy Act</h2>
              <p className="text-stealth-gray leading-relaxed mb-4">
                If you are located in Australia, the Australian Privacy Principles (APPs) give you the following rights:
              </p>
              <ul className="list-disc list-inside text-stealth-gray space-y-2 ml-2">
                <li><span className="text-white font-medium">Access:</span> you have the right to request access to the personal information we hold about you.</li>
                <li><span className="text-white font-medium">Correction:</span> you have the right to request correction of any personal information that is inaccurate, out of date, incomplete, irrelevant, or misleading.</li>
                <li><span className="text-white font-medium">Complaints:</span> if you believe we have breached the APPs, you may lodge a complaint with us. If you are not satisfied with our response, you may escalate your complaint to the Office of the Australian Information Commissioner (OAIC) at <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-stealth-cyan hover:text-white transition-colors">www.oaic.gov.au</a>.</li>
              </ul>
              <p className="text-stealth-gray leading-relaxed mt-4">
                To exercise any of these rights, please contact us using the details in Section 12 below. We will respond to your request within 30 days.
              </p>
            </div>

            {/* 9. Your Rights: CCPA / CPRA */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">9. Your Rights Under CCPA / CPRA (California, USA)</h2>
              <p className="text-stealth-gray leading-relaxed mb-4">
                If you are a California resident, the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA) provides you with the following rights:
              </p>
              <ul className="list-disc list-inside text-stealth-gray space-y-2 ml-2">
                <li><span className="text-white font-medium">Right to know:</span> you may request that we disclose the categories and specific pieces of personal information we have collected about you, the sources of that information, the purposes for collection, and the categories of third parties with whom we share it.</li>
                <li><span className="text-white font-medium">Right to delete:</span> you may request that we delete personal information we have collected from you, subject to certain legal exceptions.</li>
                <li><span className="text-white font-medium">Right to correct:</span> you may request that we correct inaccurate personal information.</li>
                <li><span className="text-white font-medium">Right to opt out of sale or sharing:</span> we do not sell your personal information. If this practice changes, we will provide a clear opt-out mechanism.</li>
                <li><span className="text-white font-medium">Right to non-discrimination:</span> we will not discriminate against you for exercising any of your CCPA/CPRA rights.</li>
              </ul>
              <p className="text-stealth-gray leading-relaxed mt-4">
                To exercise your rights, please contact us using the details in Section 12. We will verify your identity before processing your request and respond within 45 days.
              </p>
            </div>

            {/* 10. International Data Transfers */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">10. International Data Transfers</h2>
              <p className="text-stealth-gray leading-relaxed mb-4">
                Stealth Cyber operates across Australia, the United States, and Brazil. Your personal information may be transferred to, stored in, or processed in any of these countries. When we transfer personal information internationally, we take reasonable steps to ensure it is protected in accordance with the Australian Privacy Act and any other applicable privacy legislation.
              </p>
              <p className="text-stealth-gray leading-relaxed">
                Our third-party service providers may also store or process data in jurisdictions outside of Australia. We require these providers to maintain appropriate safeguards and comply with applicable data protection laws.
              </p>
            </div>

            {/* 11. Changes to This Policy */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">11. Changes to This Policy</h2>
              <p className="text-stealth-gray leading-relaxed">
                We may update this privacy policy from time to time to reflect changes in our practices, services, or legal requirements. When we make material changes, we will update the "Last updated" date at the top of this page. We encourage you to review this policy periodically. Your continued use of our website after any changes constitutes your acceptance of the updated policy.
              </p>
            </div>

            {/* 12. Contact Us */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">12. Contact Us</h2>
              <p className="text-stealth-gray leading-relaxed mb-4">
                If you have any questions about this privacy policy, wish to exercise your rights, or would like to make a complaint, please contact us:
              </p>
              <div className="bg-stealth-dark rounded-lg border border-stealth-cyan/10 p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-stealth-gray text-sm w-24 shrink-0">Entity:</span>
                  <span className="text-white text-sm">Stealth Cyber Pty Ltd (ABN 72 675 840 632)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-stealth-gray text-sm w-24 shrink-0">Email:</span>
                  <a href="mailto:contact@stealthcyber.io" className="text-stealth-cyan text-sm hover:text-white transition-colors">contact@stealthcyber.io</a>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-stealth-gray text-sm w-24 shrink-0">Phone (AU):</span>
                  <a href="tel:+61752308381" className="text-stealth-cyan text-sm hover:text-white transition-colors">+61 7 5230 8381</a>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-stealth-gray text-sm w-24 shrink-0">Phone (US):</span>
                  <a href="tel:+18557742595" className="text-stealth-cyan text-sm hover:text-white transition-colors">+1 (855) 774-2595</a>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-stealth-gray text-sm w-24 shrink-0">Website:</span>
                  <a href="https://stealthcyber.io" className="text-stealth-cyan text-sm hover:text-white transition-colors">stealthcyber.io</a>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-stealth-gray text-sm w-24 shrink-0">Offices:</span>
                  <span className="text-white text-sm">Gold Coast QLD, Australia / Sao Paulo, Brazil / Texas, USA</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stealth-dark border-t border-stealth-cyan/10">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Have a Question?</h2>
          <p className="text-stealth-gray mb-8">If you have any concerns about how we handle your data, get in touch with our team.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-stealth-cyan text-stealth-dark font-semibold rounded hover:bg-white transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
