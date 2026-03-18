import type { Metadata } from 'next'
import Link from 'next/link'
import BreadcrumbJsonLd from '@/components/structured-data/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Stealth Cyber website and services. Covers acceptable use, intellectual property, assessment disclaimers, liability limitations, and governing law.',
  alternates: { canonical: 'https://stealthcyber.io/terms' },
  openGraph: {
    title: 'Terms of Service | Stealth Cyber',
    description: 'Terms and conditions governing the use of the Stealth Cyber website and services.',
    url: 'https://stealthcyber.io/terms',
  },
}

export default function TermsOfServicePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', url: 'https://stealthcyber.io' }, { name: 'Terms of Service', url: 'https://stealthcyber.io/terms' }]} />

      {/* Hero */}
      <section className="bg-stealth-dark py-20 border-b border-stealth-cyan/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-stealth-cyan text-xs font-medium uppercase tracking-widest mb-4">Legal</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-stealth-gray text-lg leading-relaxed">
              These terms of service govern your use of the Stealth Cyber website and any services provided by
              Stealth Cyber Pty Ltd (ABN 72 675 840 632). By accessing or using our website, you agree to be
              bound by these terms.
            </p>
            <p className="text-stealth-gray text-sm mt-4">Last updated: 18 March 2026</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-stealth-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">

            {/* 1. Acceptance of Terms */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-stealth-gray leading-relaxed mb-4">
                By accessing or using the Stealth Cyber website (stealthcyber.io) or engaging our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our <Link href="/privacy" className="text-stealth-cyan hover:text-white transition-colors">Privacy Policy</Link>. If you do not agree to these terms, you must not use our website or services.
              </p>
              <p className="text-stealth-gray leading-relaxed">
                We reserve the right to update these terms at any time. Changes will be posted on this page with an updated "Last updated" date. Your continued use of the website after changes are posted constitutes acceptance of the revised terms.
              </p>
            </div>

            {/* 2. Description of Services */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">2. Description of Services</h2>
              <p className="text-stealth-gray leading-relaxed mb-4">
                Stealth Cyber Pty Ltd provides cybersecurity services including, but not limited to:
              </p>
              <ul className="list-disc list-inside text-stealth-gray space-y-2 ml-2">
                <li>Cybersecurity consulting and advisory services.</li>
                <li>Managed detection and response (MDR) and managed security services.</li>
                <li>Incident response and digital forensics.</li>
                <li>Governance, risk, and compliance (GRC) services, including Essential Eight, ISO 27001, and CMMC assessments.</li>
                <li>Penetration testing and vulnerability assessments.</li>
                <li>AI security assessments, AI red teaming, and AI management system implementation.</li>
                <li>Online self-assessment tools and quizzes.</li>
              </ul>
              <p className="text-stealth-gray leading-relaxed mt-4">
                The specific terms, scope, and pricing for any professional service engagement will be set out in a separate statement of work or service agreement between you and Stealth Cyber.
              </p>
            </div>

            {/* 3. Use of Website */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3. Use of Website</h2>
              <p className="text-stealth-gray leading-relaxed mb-4">
                You agree to use this website only for lawful purposes and in accordance with these terms. You must not:
              </p>
              <ul className="list-disc list-inside text-stealth-gray space-y-2 ml-2">
                <li>Use the website in any way that breaches any applicable local, national, or international law or regulation.</li>
                <li>Attempt to gain unauthorised access to any part of the website, the server on which the website is hosted, or any connected systems or databases.</li>
                <li>Use automated tools, bots, scrapers, or similar mechanisms to access, collect data from, or interact with the website without our prior written consent.</li>
                <li>Transmit any material that is defamatory, offensive, or otherwise objectionable.</li>
                <li>Interfere with or disrupt the integrity or performance of the website or its related systems.</li>
                <li>Impersonate any person or entity, or misrepresent your affiliation with any person or entity.</li>
              </ul>
            </div>

            {/* 4. Intellectual Property */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
              <p className="text-stealth-gray leading-relaxed mb-4">
                All content on this website, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, software, assessment tools, quiz content, and the overall design and layout, is the property of Stealth Cyber Pty Ltd or its content suppliers and is protected by Australian and international copyright, trademark, and intellectual property laws.
              </p>
              <p className="text-stealth-gray leading-relaxed">
                You may not reproduce, distribute, modify, create derivative works from, publicly display, or otherwise exploit any content from this website without our prior written permission. Limited personal, non-commercial use of assessment results generated for you is permitted.
              </p>
            </div>

            {/* 5. Assessment Tools Disclaimer */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">5. Assessment Tools and Quizzes Disclaimer</h2>
              <p className="text-stealth-gray leading-relaxed mb-4">
                Our website may include self-assessment tools, quizzes, and similar interactive features (including but not limited to the Cybersecurity Self-Assessment, AI Readiness Assessment, and Essential Eight Assessment). These tools are provided for informational and educational purposes only.
              </p>
              <div className="bg-stealth-dark rounded-lg border border-stealth-cyan/10 p-6 space-y-3">
                <p className="text-white font-semibold">Important:</p>
                <ul className="list-disc list-inside text-stealth-gray space-y-2 ml-2">
                  <li>Assessment results are based solely on your self-reported answers and do not constitute a professional security assessment, audit, or certification.</li>
                  <li>Results are indicative only and should not be relied upon as a definitive measure of your organisation's security posture.</li>
                  <li>Self-assessments are not a substitute for a professional cybersecurity assessment conducted by qualified personnel.</li>
                  <li>Stealth Cyber does not guarantee the accuracy, completeness, or reliability of any assessment results.</li>
                  <li>You should not make security decisions based solely on self-assessment results. We recommend engaging a qualified cybersecurity professional for a thorough evaluation.</li>
                </ul>
              </div>
            </div>

            {/* 6. Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
              <p className="text-stealth-gray leading-relaxed mb-4">
                To the maximum extent permitted by law, Stealth Cyber Pty Ltd, its directors, employees, agents, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or business opportunity arising out of or in connection with your use of the website or services, whether based on warranty, contract, tort (including negligence), or any other legal theory.
              </p>
              <p className="text-stealth-gray leading-relaxed mb-4">
                Where liability cannot be excluded under applicable law (including the Australian Consumer Law), our liability is limited to, at our election: (a) re-supplying the relevant services, or (b) paying the cost of having the relevant services re-supplied.
              </p>
              <p className="text-stealth-gray leading-relaxed">
                The information provided on this website is general in nature and is not intended as professional advice. You should seek independent professional advice before making any decisions based on the content of this website.
              </p>
            </div>

            {/* 7. Indemnification */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">7. Indemnification</h2>
              <p className="text-stealth-gray leading-relaxed">
                You agree to indemnify, defend, and hold harmless Stealth Cyber Pty Ltd, its directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or in connection with: (a) your use of the website or services, (b) your breach of these terms, (c) your violation of any applicable law or regulation, or (d) any content or data you submit through the website.
              </p>
            </div>

            {/* 8. Governing Law and Jurisdiction */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">8. Governing Law and Jurisdiction</h2>
              <p className="text-stealth-gray leading-relaxed mb-4">
                These terms are governed by and construed in accordance with the laws of Queensland, Australia. You irrevocably submit to the exclusive jurisdiction of the courts of Queensland, Australia, for the resolution of any disputes arising out of or in connection with these terms.
              </p>
              <p className="text-stealth-gray leading-relaxed">
                For clients based in the United States, we acknowledge that certain federal and state laws (including the CCPA/CPRA for California residents) may also apply to your use of our services. Where there is a conflict between Queensland law and mandatory provisions of US federal or state law applicable to US-based clients, the mandatory US provisions will prevail to the extent of the conflict. For contractual engagements with US-based clients, jurisdiction may be specified separately in the applicable service agreement.
              </p>
            </div>

            {/* 9. Dispute Resolution */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">9. Dispute Resolution</h2>
              <p className="text-stealth-gray leading-relaxed mb-4">
                In the event of a dispute arising out of or in connection with these terms, both parties agree to first attempt to resolve the dispute through good-faith negotiation. If the dispute cannot be resolved through negotiation within 30 days, either party may refer the dispute to mediation administered by the Resolution Institute (Australia) or an equivalent mediation body.
              </p>
              <p className="text-stealth-gray leading-relaxed">
                If mediation is unsuccessful, either party may pursue the matter through the courts as described in Section 8 above. Nothing in this clause prevents either party from seeking urgent interlocutory or injunctive relief from a court of competent jurisdiction.
              </p>
            </div>

            {/* 10. Termination */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">10. Termination</h2>
              <p className="text-stealth-gray leading-relaxed">
                We reserve the right to suspend or terminate your access to the website at any time, without notice, for any reason, including but not limited to a breach of these terms. Upon termination, your right to use the website ceases immediately. Any provisions of these terms that by their nature should survive termination will continue to apply, including but not limited to intellectual property rights, limitation of liability, indemnification, and governing law.
              </p>
            </div>

            {/* 11. Severability */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">11. Severability</h2>
              <p className="text-stealth-gray leading-relaxed">
                If any provision of these terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, that provision will be severed from these terms and the remaining provisions will continue in full force and effect. The invalid provision will be modified to the minimum extent necessary to make it valid and enforceable while preserving its original intent.
              </p>
            </div>

            {/* 12. Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">12. Contact Information</h2>
              <p className="text-stealth-gray leading-relaxed mb-4">
                If you have any questions about these terms, please contact us:
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
          <p className="text-stealth-gray mb-8">If you have any questions about our terms, we are happy to help.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-stealth-cyan text-stealth-dark font-semibold rounded hover:bg-white transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
