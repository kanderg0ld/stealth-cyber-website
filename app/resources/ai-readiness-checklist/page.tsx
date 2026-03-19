import type { Metadata } from 'next'
import PDFDownloadButton from '../ai-security-cheat-sheet/PDFDownloadButton'

export const metadata: Metadata = {
  title: 'AI Readiness Checklist | Free Download',
  description: 'A practical checklist for Australian businesses preparing to deploy AI tools. Covers data governance, identity security, AI policy, Microsoft Copilot, and compliance readiness.',
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 py-1.5">
      <span className="shrink-0 w-4 h-4 mt-0.5 border-2 border-gray-300 rounded" />
      <span className="text-gray-700 text-sm leading-relaxed">{text}</span>
    </div>
  )
}

function SectionHeading({ number, title, subtitle }: { number: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-4 mt-8 first:mt-0">
      <div className="flex items-center gap-3 mb-1">
        <span className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs" style={{ background: 'linear-gradient(135deg, #0038FF, #6231F5)' }}>{number}</span>
        <h2 className="text-lg font-bold text-gray-900">{title}</h2>
      </div>
      {subtitle && <p className="text-gray-500 text-xs ml-11 leading-relaxed">{subtitle}</p>}
    </div>
  )
}

export default function AIReadinessChecklist() {
  return (
    <div className="bg-stealth-dark min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">AI Readiness Checklist</h1>
          <p className="text-stealth-gray mb-6">Before your organisation deploys AI tools at scale, work through this checklist. Each item represents a gap that creates real risk if left unaddressed.</p>
          <PDFDownloadButton href="/downloads/ai-readiness-checklist.pdf" />
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
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">AI Readiness<br />Checklist</h1>
              <div className="h-1 w-24 mb-8" style={{ background: 'linear-gradient(90deg, #0038FF, #6231F5)' }} />
              <p className="text-[#94A3B8] text-xl max-w-md leading-relaxed">Before your organisation deploys AI tools at scale, work through this checklist. Each item represents a gap that creates real risk if left unaddressed.</p>
            </div>
            <div>
              <p className="text-[#94A3B8] text-sm">stealthcyber.io</p>
              <div className="h-1 w-full mt-8" style={{ background: 'linear-gradient(90deg, #0038FF, #6231F5)' }} />
            </div>
          </div>

          {/* Page 2 - How to Use + Section 1 + Section 2 */}
          <div className="page-break px-12 py-10">
            <div className="bg-gray-50 border-l-4 border-[#0038FF] p-4 rounded-r-lg mb-6">
              <p className="font-bold text-gray-900 text-sm mb-1">How to Use This Checklist</p>
              <p className="text-gray-700 text-xs leading-relaxed">
                Work through each section with your IT provider or security partner. A tick means the item is in place and verified, not just assumed. Items left blank are gaps. Prioritise the gaps in Section 1 and Section 2 before expanding AI tool use further.
              </p>
            </div>

            <SectionHeading number="1" title="Data Governance Foundations" subtitle="These need to be in place before AI touches your data." />
            <CheckItem text="You have a current data register that identifies what sensitive data you hold and where it lives" />
            <CheckItem text="Data is classified by sensitivity (e.g. public, internal, confidential, restricted)" />
            <CheckItem text="Sensitivity labels are applied to documents and emails in Microsoft 365 (if applicable)" />
            <CheckItem text="You know which staff have access to which data and why" />
            <CheckItem text="Access permissions have been reviewed in the last 12 months" />
            <CheckItem text="There is a documented process for off-boarding staff that includes revoking data access" />
            <CheckItem text="Your Privacy Act obligations are understood and documented" />
            <CheckItem text="You have a data breach response plan" />

            <SectionHeading number="2" title="Identity and Access Security" subtitle="AI tools inherit the permissions of the users running them. Weak identity security becomes an AI security problem." />
            <CheckItem text="Multi-factor authentication is enforced on all accounts, not just offered" />
            <CheckItem text="Phishing-resistant MFA (hardware keys or certificate-based) is in use for privileged accounts" />
            <CheckItem text="Legacy authentication protocols are blocked in Microsoft 365" />
            <CheckItem text="Conditional access policies restrict sign-in to managed, compliant devices" />
            <CheckItem text="Admin accounts are separate from day-to-day user accounts" />
            <CheckItem text="Privileged access is reviewed and validated regularly" />
            <CheckItem text="Single sign-on is used where available to centralise authentication control" />
            <CheckItem text="Shared or generic accounts have been eliminated or formally justified" />
          </div>

          {/* Page 3 - Section 3 + Section 4 + Section 5 */}
          <div className="page-break px-12 py-10">
            <SectionHeading number="3" title="AI Tool Inventory and Policy" />
            <CheckItem text="You have a complete list of AI tools currently in use across the organisation, including browser extensions and personal accounts used for work" />
            <CheckItem text="There is a written policy that defines approved AI tools and acceptable use" />
            <CheckItem text="Staff have been briefed on what data cannot be processed through public AI tools" />
            <CheckItem text="There is a process for staff to request approval of new AI tools before using them" />
            <CheckItem text="Your AI policy has been reviewed by legal or compliance in the context of your professional obligations" />
            <CheckItem text="Vendor agreements for AI tools have been reviewed for data handling and training clauses" />
            <CheckItem text="You know whether your AI vendor uses your data to train its models" />

            <SectionHeading number="4" title="Microsoft Copilot Specific" subtitle="If applicable to your environment." />
            <CheckItem text="SharePoint and OneDrive permissions have been audited and tightened before Copilot deployment" />
            <CheckItem text="Sensitivity labels are applied to content Copilot can access" />
            <CheckItem text="You understand what Copilot can surface on behalf of each user role" />
            <CheckItem text="Copilot interactions are logged and reviewable" />
            <CheckItem text="Staff have been briefed on Copilot's data scope and appropriate use" />
            <CheckItem text="A Copilot usage policy is in place" />

            <SectionHeading number="5" title="Output Quality and Accountability" />
            <CheckItem text="Staff understand that AI outputs require review before being sent to clients or acted on" />
            <CheckItem text="There is a defined review requirement for AI-assisted work based on consequence" />
            <CheckItem text="Staff know they remain professionally accountable for AI-assisted work they sign off on" />
            <CheckItem text="There is a process for reporting AI errors or unexpected outputs" />
            <CheckItem text="AI-generated content used in client deliverables is disclosed where required by professional standards" />
          </div>

          {/* Page 4 - Section 6 + Section 7 + Scoring */}
          <div className="page-break px-12 py-10">
            <SectionHeading number="6" title="Vendor and Third-Party Risk" />
            <CheckItem text="You have reviewed the data handling terms for every AI tool in use" />
            <CheckItem text="You know where your data is stored geographically for each tool" />
            <CheckItem text="You know whether your AI vendors are subject to foreign government access requests that could affect your data" />
            <CheckItem text="AI vendors with access to sensitive data have been assessed against your supplier risk framework" />
            <CheckItem text="You have a process for reviewing vendor AI terms when they are updated" />

            <SectionHeading number="7" title="Incident and Compliance Readiness" />
            <CheckItem text="You have defined what constitutes an AI-related security incident" />
            <CheckItem text="Reporting obligations for AI incidents are understood (Privacy Act notifiable data breaches, professional body obligations)" />
            <CheckItem text="Your cyber liability insurance covers AI-related incidents (confirm with your broker)" />
            <CheckItem text="You are monitoring regulatory developments on AI governance in your sector" />
            <CheckItem text="Someone in the organisation has clear ownership of AI governance" />

            <div className="mt-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-6 w-1 rounded-full" style={{ background: 'linear-gradient(180deg, #0038FF, #6231F5)' }} />
                <h2 className="text-lg font-bold text-gray-900">Score Your Readiness</h2>
              </div>
              <div className="space-y-3">
                {[
                  { range: '0 to 10 ticked', color: 'bg-red-100 border-red-300 text-red-800', text: 'AI deployment is running ahead of governance. Stop and address Section 1 and Section 2 before expanding use.' },
                  { range: '11 to 25 ticked', color: 'bg-orange-100 border-orange-300 text-orange-800', text: 'Foundational gaps exist. Prioritise the blanks in Sections 1 through 3 and engage your security provider on a remediation plan.' },
                  { range: '26 to 40 ticked', color: 'bg-yellow-50 border-yellow-300 text-yellow-800', text: 'Reasonable baseline. Focus on the remaining gaps and establish a review cycle.' },
                  { range: '41 or more ticked', color: 'bg-green-100 border-green-300 text-green-800', text: 'Strong foundation. Maintain through regular review and stay current on regulatory developments.' },
                ].map((score) => (
                  <div key={score.range} className={`border rounded-lg p-3 ${score.color}`}>
                    <p className="text-xs"><span className="font-bold">{score.range}:</span> {score.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Back Page */}
          <div className="page-break px-12 py-16 print-full-page flex flex-col justify-between" style={{ background: 'linear-gradient(135deg, #04050F 0%, #07091A 100%)' }}>
            <div>
              <div className="h-1 w-full mb-16" style={{ background: 'linear-gradient(90deg, #0038FF, #6231F5)' }} />
              <img src="/Primary-Reversed-Dark.png" alt="Stealth Cyber" className="h-10 mb-12" />
              <h2 className="text-3xl font-bold text-white mb-6">Need help getting AI ready?</h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed max-w-md mb-12">
                Stealth Cyber helps Australian professional services firms build AI governance frameworks that are practical, not just compliant. Get in touch for a straight conversation about your AI readiness.
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
