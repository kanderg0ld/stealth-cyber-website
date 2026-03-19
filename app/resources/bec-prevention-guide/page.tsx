import type { Metadata } from 'next'
import PDFDownloadButton from '../ai-security-cheat-sheet/PDFDownloadButton'

export const metadata: Metadata = {
  title: 'Business Email Compromise Prevention Guide | Free Download',
  description: 'BEC is the highest-return, lowest-effort attack targeting professional services firms. How it works, how to recognise it, and the controls that stop it.',
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 py-1">
      <span className="shrink-0 w-4 h-4 mt-0.5 border-2 border-gray-300 rounded" />
      <span className="text-gray-700 text-sm leading-relaxed">{text}</span>
    </div>
  )
}

export default function BECPreventionGuide() {
  return (
    <div className="bg-stealth-dark min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Business Email Compromise Prevention Guide</h1>
          <p className="text-stealth-gray mb-6">BEC is the highest-return, lowest-effort attack targeting Australian professional services firms. How it works, how to recognise it, and the controls that stop it.</p>
          <PDFDownloadButton href="/downloads/bec-prevention-guide.pdf" />
        </div>

        <div id="pdf-content" className="bg-white border border-gray-200">
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
              .print-full-page, .page-break {
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
              <h1 className="text-4xl font-bold text-white mb-6 leading-tight">Business Email<br />Compromise<br />Prevention Guide</h1>
              <div className="h-1 w-24 mb-8" style={{ background: 'linear-gradient(90deg, #0038FF, #6231F5)' }} />
              <p className="text-[#94A3B8] text-xl max-w-md leading-relaxed">The highest-return, lowest-effort attack targeting Australian professional services firms. How it works, how to recognise it, and the controls that actually stop it.</p>
            </div>
            <div>
              <p className="text-[#94A3B8] text-sm">stealthcyber.io</p>
              <div className="h-1 w-full mt-8" style={{ background: 'linear-gradient(90deg, #0038FF, #6231F5)' }} />
            </div>
          </div>

          {/* Page 2 - What BEC Is + How It Works */}
          <div className="page-break px-12 py-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-6 w-1 rounded-full" style={{ background: 'linear-gradient(180deg, #0038FF, #6231F5)' }} />
              <h2 className="text-lg font-bold text-gray-900">What Business Email Compromise Is</h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              Business email compromise (BEC) is a financially motivated attack where a criminal uses a legitimate or convincingly spoofed email account to deceive someone into transferring funds, changing payment details, or disclosing sensitive information.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              It does not require sophisticated malware. It does not need to bypass endpoint protection. It exploits trust, process gaps, and time pressure. A single successful BEC attack against a professional services firm can result in losses of tens to hundreds of thousands of dollars in a single transaction.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              The ACCC consistently reports BEC as one of the highest-loss scam categories for Australian businesses. The actual figure is higher than reported, because many losses go unreported due to professional embarrassment.
            </p>

            <div className="flex items-center gap-3 mb-4">
              <div className="h-6 w-1 rounded-full" style={{ background: 'linear-gradient(180deg, #0038FF, #6231F5)' }} />
              <h2 className="text-lg font-bold text-gray-900">How BEC Attacks Actually Work</h2>
            </div>
            <div className="space-y-4">
              {[
                { type: 'Type 1: Spoofed Domain', desc: 'The attacker sends email from a domain that closely resembles a legitimate one. yourfirm.com.au becomes yourfirm.co or y0urfirm.com.au. Visually similar at a glance, particularly on mobile where the full address is often truncated.' },
                { type: 'Type 2: Compromised Supplier/Client Account', desc: 'The attacker compromises a supplier or client email account and sends fraudulent payment instructions from a completely legitimate address. The email thread may reference real prior conversations. The only tell is the payment details.' },
                { type: 'Type 3: Compromised Internal Account', desc: 'An internal staff member\'s account is compromised. The attacker monitors the mailbox, identifies upcoming transactions, and inserts fraudulent instructions at the right moment. They may create inbox rules to hide replies from the legitimate user.' },
                { type: 'Type 4: Executive Impersonation', desc: 'The attacker impersonates a senior person, typically targeting finance staff with urgent payment requests. Often sent on a Friday afternoon or before a holiday. The urgency and authority combination overrides normal verification instincts.' },
              ].map((item) => (
                <div key={item.type} className="bg-gray-50 rounded-lg p-3">
                  <p className="font-bold text-gray-900 text-xs mb-1">{item.type}</p>
                  <p className="text-gray-700 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Page 3 - Red Flags + Prevention Controls */}
          <div className="page-break px-12 py-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-6 w-1 rounded-full bg-red-400" />
              <h2 className="text-lg font-bold text-gray-900">The Red Flags</h2>
            </div>
            <p className="text-gray-500 text-xs mb-3">Train every staff member who handles payments, invoices, or financial data to recognise these:</p>
            <div className="space-y-1.5 mb-4">
              {[
                'Payment instructions that arrive by email only, with no prior verbal discussion',
                'Requests to change bank account details, even from known contacts',
                'Urgent payment requests outside normal business hours or process',
                'Email addresses that are slightly different from what you expect on close inspection',
                'Requests to keep the transaction confidential or not discuss with others',
                'Unusual email formatting, signature changes, or slight differences in writing style',
                'A familiar contact asking for something they have never asked for before',
                'Payment requests that arrive just before a deadline, settlement, or close of business',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                  </span>
                  <span className="text-gray-700 text-xs">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 border-l-4 border-[#0038FF] p-3 rounded-r-lg mb-6">
              <p className="text-gray-700 text-xs leading-relaxed">A combination of these, particularly urgency plus a request to bypass normal process, should trigger a verification call to a known number before any action is taken.</p>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="h-6 w-1 rounded-full" style={{ background: 'linear-gradient(180deg, #0038FF, #6231F5)' }} />
              <h2 className="text-lg font-bold text-gray-900">Technical Controls</h2>
            </div>
            <p className="text-gray-500 text-xs mb-2">Implement these with your IT provider:</p>
            <CheckItem text="DMARC, DKIM, and SPF records are correctly configured and DMARC is set to quarantine or reject." />
            <CheckItem text="External email tagging is enabled in Microsoft 365." />
            <CheckItem text="Anti-impersonation policies are configured in Defender for Office 365 for all senior staff and finance personnel." />
            <CheckItem text="MFA is enforced on all email accounts." />
            <CheckItem text="Mailbox auditing and unified audit logging are enabled." />
            <CheckItem text="Inbox rules are monitored for unexpected configurations." />
            <CheckItem text="Automatic external forwarding is disabled at the tenant level." />
          </div>

          {/* Page 4 - Process Controls + If You Receive + If Attack Succeeded */}
          <div className="page-break px-12 py-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-6 w-1 rounded-full" style={{ background: 'linear-gradient(180deg, #0038FF, #6231F5)' }} />
              <h2 className="text-lg font-bold text-gray-900">Process Controls</h2>
            </div>
            <p className="text-gray-500 text-xs mb-2">Implement these in your operations:</p>
            <CheckItem text="A written policy exists that no payment details are changed based solely on an email instruction, regardless of who it appears to come from." />
            <CheckItem text="Any request to change bank account details requires verbal verification to a known phone number already on file." />
            <CheckItem text="Payment run authorisation requires two people to approve transactions above a defined threshold." />
            <CheckItem text="New payees above a defined threshold require verification via a second channel before the first payment is processed." />
            <CheckItem text="Finance and admin staff are briefed specifically on BEC tactics, not just general phishing awareness." />
            <CheckItem text="There is a clear escalation path for staff who receive a suspicious payment request. They should feel empowered to pause and verify." />

            <div className="flex items-center gap-3 mb-3 mt-6">
              <div className="h-6 w-1 rounded-full bg-orange-400" />
              <h2 className="text-lg font-bold text-gray-900">If You Receive a Suspicious Email Right Now</h2>
            </div>
            <div className="space-y-2 mb-6">
              {[
                { num: '1', text: 'Do not click any links or open any attachments in the email.' },
                { num: '2', text: 'Do not reply to the email.' },
                { num: '3', text: 'Do not call any phone number provided in the email.' },
                { num: '4', text: 'Contact the apparent sender using a phone number you already have on file.' },
                { num: '5', text: 'If the email requests a payment or account change, pause any related transaction until verification is complete.' },
                { num: '6', text: 'Forward the email to your IT or security provider for analysis.' },
                { num: '7', text: 'If you have already made a payment and suspect fraud, contact your bank immediately. Then contact your security provider and legal counsel.' },
              ].map((item) => (
                <div key={item.num} className="flex gap-3 items-start">
                  <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-xs bg-orange-400">{item.num}</span>
                  <p className="text-gray-700 text-xs leading-relaxed pt-0.5">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="h-6 w-1 rounded-full bg-red-400" />
              <h2 className="text-lg font-bold text-gray-900">If a BEC Attack Has Succeeded</h2>
            </div>
            <p className="text-red-700 text-xs font-bold mb-2">Speed is everything. The window for recovering transferred funds closes quickly.</p>
            <div className="space-y-1">
              {[
                'Contact your bank immediately and use the word "fraud." Request an urgent recall.',
                'Contact the recipient bank if known through your bank\'s fraud team.',
                'Contact your cyber insurance provider and notify them.',
                'Contact your legal counsel.',
                'Engage your security provider to investigate the scope of any underlying account compromise.',
                'Document everything: the email, the transaction, the timeline, and every action taken.',
                'Do not notify the fraudulent recipient that you are aware. This can cause them to move funds faster.',
                'Report to the ACSC via ReportCyber and to ACORN.',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 py-0.5">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5" />
                  <span className="text-gray-700 text-xs leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Page 5 - Uncomfortable Reality + Back Page */}
          <div className="page-break px-12 py-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-6 w-1 rounded-full" style={{ background: 'linear-gradient(180deg, #0038FF, #6231F5)' }} />
              <h2 className="text-lg font-bold text-gray-900">The Uncomfortable Reality</h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Most BEC losses are not recovered. Fund recovery is possible in some cases if the bank is contacted quickly, but it is not guaranteed and becomes less likely with every hour that passes.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              The controls above are not complicated or expensive. The verification process costs a two-minute phone call. The technical controls are configurations, not new platforms. The businesses that suffer significant BEC losses almost always had the information they needed to prevent it.
            </p>
            <div className="bg-gray-50 border-l-4 border-[#0038FF] p-4 rounded-r-lg">
              <p className="text-gray-900 text-sm font-bold">The difference is whether anyone acted on it before the event rather than after.</p>
            </div>
          </div>

          {/* Back Page */}
          <div className="page-break px-12 py-16 print-full-page flex flex-col justify-between" style={{ background: 'linear-gradient(135deg, #04050F 0%, #07091A 100%)' }}>
            <div>
              <div className="h-1 w-full mb-16" style={{ background: 'linear-gradient(90deg, #0038FF, #6231F5)' }} />
              <img src="/Primary-Reversed-Dark.png" alt="Stealth Cyber" className="h-10 mb-12" />
              <h2 className="text-3xl font-bold text-white mb-6">Concerned about BEC exposure?</h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed max-w-md mb-12">
                Stealth Cyber helps Australian professional services firms implement the technical and process controls that prevent BEC attacks. Get in touch for an independent assessment of your current exposure.
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
