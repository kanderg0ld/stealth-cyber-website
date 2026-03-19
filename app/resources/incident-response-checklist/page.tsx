import type { Metadata } from 'next'
import PDFDownloadButton from '../ai-security-cheat-sheet/PDFDownloadButton'

export const metadata: Metadata = {
  title: 'Incident Response Checklist: The First 24 Hours | Free Download',
  description: 'What you do in the first 24 hours of a cyber incident determines the outcome. A step-by-step checklist for immediate actions, assessment, escalation, and notification.',
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 py-1">
      <span className="shrink-0 w-4 h-4 mt-0.5 border-2 border-gray-300 rounded" />
      <span className="text-gray-700 text-sm leading-relaxed">{text}</span>
    </div>
  )
}

function SubCheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 py-0.5 ml-7">
      <span className="shrink-0 w-3.5 h-3.5 mt-0.5 border-2 border-gray-300 rounded" />
      <span className="text-gray-600 text-xs leading-relaxed">{text}</span>
    </div>
  )
}

function TimeBlock({ time, title }: { time: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-3 mt-6 first:mt-0">
      <span className="shrink-0 px-3 py-1.5 rounded-lg text-white font-bold text-xs" style={{ background: 'linear-gradient(135deg, #0038FF, #6231F5)' }}>{time}</span>
      <h2 className="text-base font-bold text-gray-900">{title}</h2>
    </div>
  )
}

export default function IncidentResponseChecklist() {
  return (
    <div className="bg-stealth-dark min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Incident Response Checklist: The First 24 Hours</h1>
          <p className="text-stealth-gray mb-6">What you do in the first 24 hours of a suspected cyber incident determines how bad the outcome is. Print this. Save it somewhere you can access if your systems are down.</p>
          <PDFDownloadButton href="incident-response-checklist.pdf" />
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
              <h1 className="text-4xl font-bold text-white mb-6 leading-tight">Incident Response<br />Checklist:<br />The First 24 Hours</h1>
              <div className="h-1 w-24 mb-8" style={{ background: 'linear-gradient(90deg, #0038FF, #6231F5)' }} />
              <p className="text-[#94A3B8] text-xl max-w-md leading-relaxed">What you do in the first 24 hours determines how bad the outcome is. This checklist is designed to be used in the moment.</p>
            </div>
            <div>
              <div className="bg-red-500/20 border border-red-500/40 rounded-lg p-4 mb-8">
                <p className="text-red-400 text-sm font-bold">Print this checklist. Save it somewhere you can access if your systems are down.</p>
              </div>
              <p className="text-[#94A3B8] text-sm">stealthcyber.io</p>
              <div className="h-1 w-full mt-8" style={{ background: 'linear-gradient(90deg, #0038FF, #6231F5)' }} />
            </div>
          </div>

          {/* Page 2 - Before Anything Else + Hour 0-1 */}
          <div className="page-break px-12 py-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-6 w-1 rounded-full" style={{ background: 'linear-gradient(180deg, #0038FF, #6231F5)' }} />
              <h2 className="text-lg font-bold text-gray-900">Before Anything Else</h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              The instinct when something goes wrong is to start clicking around to understand what happened. Resist it. Uncoordinated activity in a live incident destroys forensic evidence, can trigger further malicious activity, and makes the investigation significantly harder.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-red-800 text-xs font-bold mb-2">DO NOT:</p>
                <ul className="space-y-1">
                  {[
                    'Restart or shut down affected systems without direction',
                    'Delete files, emails, or logs that look suspicious',
                    'Run antivirus scans without guidance',
                    'Log into affected accounts from those same systems',
                    'Discuss the incident over potentially compromised systems',
                    'Post anything publicly or notify clients before legal advice',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-red-700 text-xs">
                      <span className="shrink-0 mt-1">&#10005;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-green-800 text-xs font-bold mb-2">DO:</p>
                <p className="text-green-700 text-xs">Stay calm, work the checklist, and get your security provider on the phone.</p>
              </div>
            </div>

            <TimeBlock time="0-1h" title="Immediate Actions: Contain First, Investigate Second" />
            <CheckItem text="Identify and document the systems, accounts, or services that appear to be affected" />
            <CheckItem text="Photograph or screenshot anything unusual before touching it" />
            <CheckItem text="Do not power off affected systems unless ransomware is actively encrypting files. If active encryption is occurring, isolate from the network immediately." />
            <CheckItem text="Isolate affected systems from the network if directed by your security provider" />
            <CheckItem text="Contact your managed security provider or IR team immediately with: what you noticed, when, what systems are involved, and what actions have been taken" />
            <CheckItem text="Contact your cyber insurance provider. Most policies require notification within 24 to 72 hours." />
            <CheckItem text="Identify who in leadership needs to know right now. Brief them verbally, not over potentially compromised systems." />
          </div>

          {/* Page 3 - Hour 1-4 + Hour 4-24 */}
          <div className="page-break px-12 py-10">
            <TimeBlock time="1-4h" title="Assessment and Escalation" />
            <p className="text-gray-500 text-xs mb-2 ml-1">Work with your security provider on these items. Do not attempt forensic investigation independently.</p>
            <CheckItem text="Determine the nature of the incident: ransomware, account compromise, data exfiltration, BEC, or unknown" />
            <CheckItem text="Identify the scope: how many systems, accounts, and users are affected" />
            <CheckItem text="Identify the likely entry point: phishing, compromised credentials, unpatched vulnerability, malicious insider" />
            <CheckItem text="Determine whether the attacker may still have active access to your environment" />
            <CheckItem text="Identify what data may have been accessed or exfiltrated" />
            <CheckItem text="Preserve logs: capture and preserve system logs, email logs, and authentication logs before they are overwritten" />
            <CheckItem text="Change credentials for all potentially affected accounts from a clean, unaffected device" />
            <CheckItem text="Revoke active sessions for affected Microsoft 365 accounts" />
            <CheckItem text="Engage legal counsel if client data may have been compromised or if regulatory notification may be required" />

            <TimeBlock time="4-24h" title="Notification Assessment and Stabilisation" />
            <CheckItem text="Assess whether the incident triggers mandatory notification obligations:" />
            <SubCheckItem text="Privacy Act: notifiable data breach if serious harm to individuals is likely" />
            <SubCheckItem text="APRA regulated entities: notify APRA within 72 hours of becoming aware of a material cyber incident" />
            <SubCheckItem text="ASX listed entities: continuous disclosure obligations may apply" />
            <SubCheckItem text="Professional body obligations (legal, accounting): check your relevant body's requirements" />
            <CheckItem text="Draft a communication plan for clients if their data may be involved. Do not send anything before legal review." />
            <CheckItem text="Document a timeline of the incident as understood so far (required for insurance, regulatory, and legal purposes)" />
            <CheckItem text="Identify third parties who may need to be notified: payment processors, cloud providers, key clients, PI insurer" />
            <CheckItem text="Begin evidence preservation for any systems that need forensic imaging before remediation" />
            <CheckItem text="Do not begin rebuilding or restoring systems until the investigation scope is defined" />
            <CheckItem text="Establish an out-of-band communication channel (personal mobiles, personal email) for your response team" />
          </div>

          {/* Page 4 - Key Contacts + After 24h + Signs */}
          <div className="page-break px-12 py-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-6 w-1 rounded-full" style={{ background: 'linear-gradient(180deg, #0038FF, #6231F5)' }} />
              <h2 className="text-lg font-bold text-gray-900">Key Contacts: Fill This In Now</h2>
            </div>
            <div className="overflow-hidden rounded-lg border border-gray-200 mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#04050F] text-white">
                    <th className="text-left px-3 py-2 font-semibold text-xs">Role</th>
                    <th className="text-left px-3 py-2 font-semibold text-xs">Name</th>
                    <th className="text-left px-3 py-2 font-semibold text-xs">Phone</th>
                    <th className="text-left px-3 py-2 font-semibold text-xs">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    'Security Provider / IR Team',
                    'Cyber Insurance Claims Line',
                    'Legal Counsel',
                    'CEO / Managing Principal',
                    'IT Provider',
                    'PR / Communications',
                  ].map((role, i) => (
                    <tr key={role} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-3 py-3 text-gray-700 text-xs font-medium">{role}</td>
                      <td className="px-3 py-3 text-gray-300 text-xs border-l border-gray-200">&nbsp;</td>
                      <td className="px-3 py-3 text-gray-300 text-xs border-l border-gray-200">&nbsp;</td>
                      <td className="px-3 py-3 text-gray-300 text-xs border-l border-gray-200">&nbsp;</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="h-6 w-1 rounded-full" style={{ background: 'linear-gradient(180deg, #0038FF, #6231F5)' }} />
              <h2 className="text-lg font-bold text-gray-900">After the First 24 Hours</h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              The immediate response phase is about containment and preservation. Once achieved, the work shifts to:
            </p>
            <ul className="space-y-1 mb-6">
              {[
                'Full forensic investigation to determine the complete scope',
                'Eradication of attacker presence from the environment',
                'Remediation of the vulnerability or control failure that enabled the incident',
                'Regulated notifications where required',
                'Rebuilding affected systems from known-clean baselines',
                'Post-incident review and control uplift',
                'Client and stakeholder communications',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#0038FF] mt-2" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-700 text-sm font-bold">This is a weeks-long process, not a 24-hour one. The first 24 hours determines whether it is manageable or catastrophic.</p>

            <div className="mt-6 flex items-center gap-3 mb-3">
              <div className="h-6 w-1 rounded-full bg-red-400" />
              <h2 className="text-lg font-bold text-gray-900">Signs You May Have an Active Incident Right Now</h2>
            </div>
            <div className="space-y-1">
              {[
                'Unexpected account lockouts across multiple users',
                'MFA prompts nobody initiated',
                'Files being renamed with unfamiliar extensions',
                'Systems becoming slow or unresponsive without explanation',
                'Unusual outbound network traffic or connections to unfamiliar addresses',
                'Emails sent from staff accounts that staff did not write',
                'Contacts reporting suspicious communications from your business',
                'Ransom note appearing on a screen',
                'Sudden inability to access files, systems, or backups',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                  </span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded-r-lg mt-3">
              <p className="text-gray-900 text-xs font-bold">If any of these are occurring, call your security provider immediately. Do not wait to be certain.</p>
            </div>
          </div>

          {/* Back Page */}
          <div className="page-break px-12 py-16 print-full-page flex flex-col justify-between" style={{ background: 'linear-gradient(135deg, #04050F 0%, #07091A 100%)' }}>
            <div>
              <div className="h-1 w-full mb-16" style={{ background: 'linear-gradient(90deg, #0038FF, #6231F5)' }} />
              <img src="/Primary-Reversed-Dark.png" alt="Stealth Cyber" className="h-10 mb-12" />
              <h2 className="text-3xl font-bold text-white mb-6">Experiencing an incident?</h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed max-w-md mb-4">
                Stealth Cyber provides 24/7 managed detection and response and incident response services for Australian professional services firms.
              </p>
              <p className="text-white text-lg font-bold mb-12">
                If you are experiencing an incident right now, call us.
              </p>
              <div className="space-y-6">
                <div>
                  <p className="text-[#4DCCFF] text-xs font-semibold uppercase tracking-wider mb-2">Emergency Line</p>
                  <p className="text-white text-2xl font-bold">AU: +61 7 5230 8381</p>
                  <p className="text-white text-2xl font-bold">US: +1 (855) 774-2595</p>
                </div>
                <div>
                  <p className="text-[#4DCCFF] text-xs font-semibold uppercase tracking-wider mb-2">Website</p>
                  <p className="text-white text-lg">stealthcyber.io</p>
                </div>
                <div>
                  <p className="text-[#4DCCFF] text-xs font-semibold uppercase tracking-wider mb-2">Email</p>
                  <p className="text-white text-lg">contact@stealthcyber.io</p>
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
