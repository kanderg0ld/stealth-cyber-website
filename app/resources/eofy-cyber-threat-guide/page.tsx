import type { Metadata } from 'next'
import PDFDownloadButton from '../ai-security-cheat-sheet/PDFDownloadButton'

export const metadata: Metadata = {
  title: 'End of Financial Year Cyber Threat Guide | Free Download',
  description: 'EOFY is the highest-risk period for Australian professional services firms. What attackers do differently during this period and what to do about it.',
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 py-1">
      <span className="shrink-0 w-4 h-4 mt-0.5 border-2 border-gray-300 rounded" />
      <span className="text-gray-700 text-sm leading-relaxed">{text}</span>
    </div>
  )
}

export default function EOFYCyberThreatGuide() {
  return (
    <div className="bg-stealth-dark min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">End of Financial Year Cyber Threat Guide</h1>
          <p className="text-stealth-gray mb-6">EOFY is the highest-risk period of the year for Australian professional services firms. What attackers do differently and what to do about it.</p>
          <PDFDownloadButton />
        </div>

        <div id="pdf-content" className="bg-white rounded-xl overflow-hidden shadow-lg">
          <style dangerouslySetInnerHTML={{ __html: `
            @media print {
              body { margin: 0; padding: 0; }
              body * { visibility: hidden; }
              #pdf-content, #pdf-content * { visibility: visible; }
              #pdf-content {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
              }
              .no-print { display: none !important; }
              .page-break { page-break-before: always; }
              .print-full-page {
                height: 296.5mm;
                max-height: 296.5mm;
                overflow: hidden;
                box-sizing: border-box;
              }
              @page { margin: 0; size: A4; }
              * {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
            }
          `}} />

          {/* Cover */}
          <div className="px-12 py-16 print-full-page flex flex-col justify-between" style={{ background: 'linear-gradient(135deg, #04050F 0%, #07091A 100%)' }}>
            <div>
              <div className="h-1 w-full mb-12" style={{ background: 'linear-gradient(90deg, #0038FF, #6231F5)' }} />
              <img src="/Primary-Reversed-Dark.png" alt="Stealth Cyber" className="h-10 mb-16" />
              <h1 className="text-4xl font-bold text-white mb-6 leading-tight">End of Financial Year<br />Cyber Threat Guide</h1>
              <div className="h-1 w-24 mb-8" style={{ background: 'linear-gradient(90deg, #0038FF, #6231F5)' }} />
              <p className="text-[#94A3B8] text-xl max-w-md leading-relaxed">EOFY is the highest-risk period of the year for Australian professional services firms and their clients. This guide covers what attackers do differently during this period and what to do about it.</p>
            </div>
            <div>
              <p className="text-[#94A3B8] text-sm">stealthcyber.io</p>
              <div className="h-1 w-full mt-8" style={{ background: 'linear-gradient(90deg, #0038FF, #6231F5)' }} />
            </div>
          </div>

          {/* Page 2 - Why EOFY Is Different + Threat Landscape */}
          <div className="page-break px-12 py-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-6 w-1 rounded-full" style={{ background: 'linear-gradient(180deg, #0038FF, #6231F5)' }} />
              <h2 className="text-lg font-bold text-gray-900">Why EOFY Is Different</h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              The end of financial year creates a specific set of conditions that attackers actively exploit. Staff are under genuine time pressure. The volume of legitimate urgent requests is at its peak. Finance teams are processing a higher-than-normal volume of transactions. Decisions that would normally receive careful scrutiny get made faster because deadlines are real.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              Attackers understand this. EOFY phishing campaigns, business email compromise attempts, and credential harvesting operations targeting Australian accounting, legal, and financial advisory firms spike consistently in the lead-up to 30 June. These are not opportunistic attacks. They are planned campaigns timed to exploit a known window of reduced vigilance.
            </p>

            <div className="flex items-center gap-3 mb-4">
              <div className="h-6 w-1 rounded-full" style={{ background: 'linear-gradient(180deg, #0038FF, #6231F5)' }} />
              <h2 className="text-lg font-bold text-gray-900">The Threat Landscape at EOFY</h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: 'ATO-Themed Phishing',
                  desc: 'The ATO is one of the most impersonated brands in Australian phishing campaigns. During EOFY, phishing emails impersonating the ATO spike significantly. They claim returns have been lodged, refunds are pending, debts require urgent payment, or TFNs have been flagged. The emails are increasingly convincing with correct branding and plausible subject lines.',
                },
                {
                  title: 'Accounting Software Credential Harvesting',
                  desc: 'Xero, MYOB, and QuickBooks credentials are directly valuable. An attacker with access to a firm\'s practice management software has access to client financial data, bank account details, and payroll records. EOFY sees a surge in fake login pages, urgent account notifications, and credential stuffing attacks.',
                },
                {
                  title: 'Payment Redirection and BEC',
                  desc: 'The volume of large transactions peaks at EOFY. Settlement payments, tax payments, superfund contributions, trust account disbursements. A fraudulent payment redirection request inserted into a busy EOFY transaction stream has a higher chance of success because the volume and urgency make careful verification less likely.',
                },
                {
                  title: 'Ransomware Targeting Deadline Pressure',
                  desc: 'A firm that cannot access client files three days before tax lodgement deadlines is under maximum pressure to pay a ransom quickly. Ransomware groups are aware of these deadlines and time deployments accordingly.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-900 text-xs mb-1">{item.title}</p>
                  <p className="text-gray-700 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Page 3 - Controls for Your Firm + For Your Clients */}
          <div className="page-break px-12 py-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-6 w-1 rounded-full" style={{ background: 'linear-gradient(180deg, #0038FF, #6231F5)' }} />
              <h2 className="text-lg font-bold text-gray-900">EOFY Controls: For Your Firm</h2>
            </div>
            <CheckItem text="Brief all staff on EOFY-specific phishing themes before the peak period. ATO impersonation, accounting software credential requests, and urgent payment requests should be specifically named." />
            <CheckItem text="Confirm that your payment verification process is in place and being followed. No payment detail changes based solely on an email instruction." />
            <CheckItem text="Review who has access to your accounting and practice management platforms. Remove or suspend accounts for staff who no longer need access." />
            <CheckItem text="Confirm MFA is enforced on your accounting software, not just your email." />
            <CheckItem text="Review your backup status. Verify that recent backups are completing successfully and that at least one copy is stored offline or immutably." />
            <CheckItem text="Confirm your incident response contact details are current and accessible to key staff." />
            <CheckItem text="Remind staff that urgency is a manipulation tactic. A genuine ATO or software vendor communication will not collapse if it takes 10 minutes to verify." />

            <div className="flex items-center gap-3 mb-3 mt-6">
              <div className="h-6 w-1 rounded-full" style={{ background: 'linear-gradient(180deg, #0038FF, #6231F5)' }} />
              <h2 className="text-lg font-bold text-gray-900">EOFY Controls: For Your Clients</h2>
            </div>
            <CheckItem text="Brief clients who handle their own finances on ATO impersonation scams and how the ATO actually communicates." />
            <CheckItem text="Remind clients that bank account details should never be changed based solely on an email instruction, even if it appears to come from your firm." />
            <CheckItem text="Advise clients to verify any unusual communication purportedly from your firm by calling your office on a number they already have." />
            <CheckItem text="If your firm sends large invoices or payment requests at EOFY, consider establishing a verbal confirmation protocol with high-value clients." />

            <div className="flex items-center gap-3 mb-3 mt-6">
              <div className="h-6 w-1 rounded-full bg-red-400" />
              <h2 className="text-lg font-bold text-gray-900">Recognising an ATO Impersonation Email</h2>
            </div>
            <p className="text-gray-700 text-xs leading-relaxed mb-2">Legitimate ATO communications will not:</p>
            <div className="space-y-1">
              {[
                'Ask you to confirm bank account details via email or a link',
                'Demand immediate payment via gift card, cryptocurrency, or wire transfer',
                'Threaten arrest, legal action, or account suspension in an email',
                'Ask for your myGov credentials via a link in an email',
                'Send an attachment requiring you to enable macros to view it',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="shrink-0 w-4 h-4 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  </span>
                  <span className="text-gray-700 text-xs">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 border-l-4 border-[#0038FF] p-3 rounded-r-lg mt-3">
              <p className="text-gray-700 text-xs leading-relaxed">If an email claims to be urgent and from the ATO, log in to myGov directly through the browser. If the communication does not exist there, the email is fraudulent.</p>
            </div>
          </div>

          {/* Page 4 - If Someone Clicked + Reporting + Broader Point */}
          <div className="page-break px-12 py-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-6 w-1 rounded-full bg-orange-400" />
              <h2 className="text-lg font-bold text-gray-900">If a Staff Member or Client Has Already Clicked</h2>
            </div>
            <p className="text-gray-500 text-xs mb-3">Acting quickly limits the damage.</p>
            <div className="space-y-2 mb-6">
              {[
                { num: '1', text: 'Do not panic. Gather the facts before escalating.' },
                { num: '2', text: 'Determine what was clicked and what information was entered. A link clicked with no credentials entered is a different risk profile to credentials being submitted.' },
                { num: '3', text: 'If credentials were entered, treat those accounts as compromised immediately. Change passwords and revoke active sessions from a different, clean device.' },
                { num: '4', text: 'Contact your security provider with the details. Preserve the email and any screenshots.' },
                { num: '5', text: 'If client data may have been exposed, contact legal counsel to assess notification obligations.' },
                { num: '6', text: 'Do not send a mass internal email about the incident using systems that may be affected.' },
              ].map((item) => (
                <div key={item.num} className="flex gap-3 items-start">
                  <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-xs bg-orange-400">{item.num}</span>
                  <p className="text-gray-700 text-xs leading-relaxed pt-0.5">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="h-6 w-1 rounded-full" style={{ background: 'linear-gradient(180deg, #0038FF, #6231F5)' }} />
              <h2 className="text-lg font-bold text-gray-900">Tax Time Scam Reporting</h2>
            </div>
            <p className="text-gray-700 text-xs leading-relaxed mb-2">If you or your clients receive ATO impersonation emails, report them:</p>
            <div className="space-y-1 mb-6">
              {[
                'ATO: forward to reportemailfraud@ato.gov.au',
                'ACCC Scamwatch: scamwatch.gov.au',
                'ACSC ReportCyber: cyber.gov.au/report',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#0038FF] mt-1.5" />
                  <span className="text-gray-700 text-xs">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="h-6 w-1 rounded-full" style={{ background: 'linear-gradient(180deg, #0038FF, #6231F5)' }} />
              <h2 className="text-lg font-bold text-gray-900">The Broader Point</h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              EOFY is a predictable risk period. The threats are not new and the defences are not complicated. The firms that come through this period without incident are the ones that brief their people, verify their controls, and treat the elevated risk as an operational reality to manage rather than a background concern to note and move on from.
            </p>
            <div className="bg-gray-50 border-l-4 border-[#0038FF] p-4 rounded-r-lg">
              <p className="text-gray-900 text-sm font-bold">A 15-minute briefing to your team before the peak period is one of the highest-return security investments you can make. Do it every year.</p>
            </div>
          </div>

          {/* Back Page */}
          <div className="page-break px-12 py-16 print-full-page flex flex-col justify-between" style={{ background: 'linear-gradient(135deg, #04050F 0%, #07091A 100%)' }}>
            <div>
              <div className="h-1 w-full mb-16" style={{ background: 'linear-gradient(90deg, #0038FF, #6231F5)' }} />
              <img src="/Primary-Reversed-Dark.png" alt="Stealth Cyber" className="h-10 mb-12" />
              <h2 className="text-3xl font-bold text-white mb-6">Need a pre-EOFY security review?</h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed max-w-md mb-12">
                Stealth Cyber provides managed cybersecurity for Australian professional services firms. For a pre-EOFY security review or to discuss your firm&apos;s risk posture, get in touch.
              </p>
              <div className="space-y-6">
                <div>
                  <p className="text-[#4DCCFF] text-xs font-semibold uppercase tracking-wider mb-2">Website</p>
                  <p className="text-white text-lg">stealthcyber.io</p>
                </div>
                <div>
                  <p className="text-[#4DCCFF] text-xs font-semibold uppercase tracking-wider mb-2">Email</p>
                  <p className="text-white text-lg">contact@stealthcyber.io</p>
                </div>
                <div>
                  <p className="text-[#4DCCFF] text-xs font-semibold uppercase tracking-wider mb-2">Phone</p>
                  <p className="text-white text-lg">AU: +61 7 5230 8381</p>
                  <p className="text-white text-lg">US: +1 (855) 774-2595</p>
                </div>
                <div>
                  <p className="text-[#4DCCFF] text-xs font-semibold uppercase tracking-wider mb-2">Offices</p>
                  <p className="text-white">Gold Coast, Australia</p>
                  <p className="text-white">S&atilde;o Paulo, Brazil</p>
                  <p className="text-white">Texas, United States</p>
                </div>
              </div>
            </div>
            <div>
              <div className="h-1 w-full mb-6" style={{ background: 'linear-gradient(90deg, #0038FF, #6231F5)' }} />
              <p className="text-[#94A3B8] text-xs">&copy; 2026 Stealth Cyber Pty Ltd. ABN 72 675 840 632. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
