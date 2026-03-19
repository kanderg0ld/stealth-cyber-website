import type { Metadata } from 'next'
import PDFDownloadButton from '../ai-security-cheat-sheet/PDFDownloadButton'

export const metadata: Metadata = {
  title: 'Cyber Insurance Checklist | Free Download',
  description: 'Understand what your cyber insurance actually covers, what controls you need in place, and what gaps to close before your next renewal.',
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 py-1">
      <span className="shrink-0 w-4 h-4 mt-0.5 border-2 border-gray-300 rounded" />
      <span className="text-gray-700 text-sm leading-relaxed">{text}</span>
    </div>
  )
}

function SectionBar({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 mb-3 mt-6 first:mt-0">
      <div className="h-6 w-1 rounded-full" style={{ background: 'linear-gradient(180deg, #0038FF, #6231F5)' }} />
      <h2 className="text-lg font-bold text-gray-900">{title}</h2>
    </div>
  )
}

function SubHeading({ text }: { text: string }) {
  return <h3 className="text-sm font-bold text-gray-900 mt-4 mb-1">{text}</h3>
}

export default function CyberInsuranceChecklist() {
  return (
    <div className="bg-stealth-dark min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Cyber Insurance Checklist</h1>
          <p className="text-stealth-gray mb-6">Understand what your cyber insurance actually covers, what controls you need in place, and what gaps to close before your next renewal.</p>
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
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">Cyber Insurance<br />Checklist</h1>
              <div className="h-1 w-24 mb-8" style={{ background: 'linear-gradient(90deg, #0038FF, #6231F5)' }} />
              <p className="text-[#94A3B8] text-xl max-w-md leading-relaxed">Cyber insurance is not a substitute for security controls. It is a financial backstop for when controls fail. This checklist helps you understand what you actually have, what you actually need, and what gaps to close before your next renewal.</p>
            </div>
            <div>
              <p className="text-[#94A3B8] text-sm">stealthcyber.io</p>
              <div className="h-1 w-full mt-8" style={{ background: 'linear-gradient(90deg, #0038FF, #6231F5)' }} />
            </div>
          </div>

          {/* Page 2 - Before You Buy + Coverage Part 1 */}
          <div className="page-break px-12 py-10">
            <SectionBar title="Before You Buy or Renew" />
            <CheckItem text="You have read the policy, not just the summary. Specifically the exclusions section." />
            <CheckItem text="You understand the difference between first-party coverage (your own losses) and third-party coverage (claims made against you by others)" />
            <CheckItem text="Your broker has cybersecurity specialist expertise, not just general business insurance knowledge" />
            <CheckItem text="You have disclosed your actual security posture accurately on the application. Misrepresentation is the most common reason claims are denied." />
            <CheckItem text="You know your policy's retroactive date (the earliest date from which a claim can arise)" />

            <SectionBar title="Coverage: What to Confirm Is Included" />

            <SubHeading text="Incident Response Costs" />
            <CheckItem text="Forensic investigation costs are covered" />
            <CheckItem text="Incident response firm engagement is covered" />
            <CheckItem text="The policy specifies which IR firms you are permitted to engage, and you have checked whether your preferred provider is on the panel" />

            <SubHeading text="Business Interruption" />
            <CheckItem text="Business interruption losses from a cyber incident are covered" />
            <CheckItem text="The waiting period (time before BI coverage kicks in) is defined and acceptable" />
            <CheckItem text="Coverage applies to dependent system failures (e.g. a cloud provider outage affecting your operations)" />

            <SubHeading text="Data Breach Costs" />
            <CheckItem text="Notification costs to affected individuals are covered" />
            <CheckItem text="Regulatory investigation costs and fines are covered (note: some policies exclude regulatory fines)" />
            <CheckItem text="Credit monitoring and identity protection services for affected individuals are covered" />
            <CheckItem text="Legal costs associated with a breach are covered" />
          </div>

          {/* Page 3 - Coverage Part 2 + Policy Conditions */}
          <div className="page-break px-12 py-10">
            <SubHeading text="Ransomware and Extortion" />
            <CheckItem text="Ransomware response and recovery costs are covered" />
            <CheckItem text="Ransom payments are covered (confirm this explicitly if it is a concern)" />
            <CheckItem text="Data recovery costs are covered" />
            <CheckItem text="The policy does not exclude ransomware attacks originating from nation-state actors or acts of war (this exclusion has been applied in disputed cases)" />

            <SubHeading text="Third-Party Liability" />
            <CheckItem text="Claims from clients whose data was compromised in your environment are covered" />
            <CheckItem text="Coverage applies to claims arising from failure to protect third-party data" />
            <CheckItem text="Media liability (e.g. defamation arising from digital content) is included if relevant" />

            <SubHeading text="Social Engineering and Funds Transfer Fraud" />
            <CheckItem text="Business email compromise and funds transfer fraud are covered" />
            <CheckItem text="The coverage limit for social engineering events is adequate for the transaction sizes in your business" />
            <CheckItem text="Coverage applies even when an employee authorised the transfer (most BEC losses involve authorised payments)" />

            <SectionBar title="Policy Conditions: What You Need in Place" />
            <p className="text-gray-500 text-xs mb-3">Most cyber policies require certain security controls as a condition of coverage. Failure to maintain them can void a claim.</p>
            <CheckItem text="Multi-factor authentication is enforced on all remote access and email (near-universal policy condition)" />
            <CheckItem text="MFA is enforced on all privileged accounts" />
            <CheckItem text="Endpoint detection and response (EDR) software is deployed across all endpoints" />
            <CheckItem text="Systems are patched within defined timeframes" />
            <CheckItem text="Offsite or immutable backups are maintained" />
            <CheckItem text="Staff receive regular security awareness training" />
            <CheckItem text="You have a documented incident response plan" />
            <CheckItem text="End-of-life or unsupported software is identified (some policies exclude incidents from unsupported systems)" />
          </div>

          {/* Page 4 - Limits + At Time of Incident + Honest Reality */}
          <div className="page-break px-12 py-10">
            <SectionBar title="Limits and Sub-Limits: Things to Check" />
            <CheckItem text="The aggregate policy limit is sufficient to cover a realistic worst-case scenario for your business" />
            <CheckItem text="Sub-limits for ransomware payments, social engineering, and regulatory fines are adequate (these are often significantly lower than the main policy limit)" />
            <CheckItem text="The policy has a clear definition of a &quot;cyber event&quot; and you understand what falls inside and outside it" />
            <CheckItem text="The deductible (excess) is a number your business can absorb without material impact" />
            <CheckItem text="Coverage limits have been reviewed against your current revenue and data exposure, not just carried over from the previous year" />

            <SectionBar title="At the Time of an Incident" />
            <CheckItem text="You know your insurer's 24/7 incident notification number" />
            <CheckItem text="Your broker's emergency contact is saved somewhere accessible outside your primary systems (which may be offline during an incident)" />
            <CheckItem text="Your IR and legal team know to loop in the insurer before making public statements or paying a ransom" />
            <CheckItem text="You understand the documentation requirements for a claim and have a process for capturing evidence from the start of an incident" />
            <CheckItem text="You know your policy's notification timeframe (many policies require notification within 24 to 72 hours of discovering an incident)" />

            <div className="mt-6 bg-gray-50 border-l-4 border-[#0038FF] p-4 rounded-r-lg">
              <p className="font-bold text-gray-900 text-sm mb-2">The Honest Reality About Cyber Insurance</p>
              <p className="text-gray-700 text-xs leading-relaxed mb-2">
                Cyber insurance is valuable and you should have it. It is also frequently misunderstood as a solution to cyber risk rather than a financial instrument for managing residual risk.
              </p>
              <p className="text-gray-700 text-xs leading-relaxed mb-2">
                Policies with weak security controls in place are increasingly being declined at renewal, written with significant exclusions, or subjected to much higher premiums.
              </p>
              <p className="text-gray-900 text-xs leading-relaxed font-bold">
                A current Essential Eight assessment and a managed detection and response service are the two most effective things you can do to improve your insurability and keep your premiums in check.
              </p>
            </div>
          </div>

          {/* Back Page */}
          <div className="page-break px-12 py-16 print-full-page flex flex-col justify-between" style={{ background: 'linear-gradient(135deg, #04050F 0%, #07091A 100%)' }}>
            <div>
              <div className="h-1 w-full mb-16" style={{ background: 'linear-gradient(90deg, #0038FF, #6231F5)' }} />
              <img src="/Primary-Reversed-Dark.png" alt="Stealth Cyber" className="h-10 mb-12" />
              <h2 className="text-3xl font-bold text-white mb-6">Preparing for your next renewal?</h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed max-w-md mb-12">
                Stealth Cyber works with Australian professional services firms on security posture assessments and managed protection. For independent advice on your cyber security position before your next insurance renewal, get in touch.
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
