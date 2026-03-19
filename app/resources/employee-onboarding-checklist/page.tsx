import type { Metadata } from 'next'
import PDFDownloadButton from '../ai-security-cheat-sheet/PDFDownloadButton'

export const metadata: Metadata = {
  title: 'New Employee Cyber Security Onboarding Checklist | Free Download',
  description: 'Every new employee is a potential entry point until properly briefed and set up. IT setup, access verification, security briefing, and employee acknowledgement checklist.',
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 py-1">
      <span className="shrink-0 w-4 h-4 mt-0.5 border-2 border-gray-300 rounded" />
      <span className="text-gray-700 text-sm leading-relaxed">{text}</span>
    </div>
  )
}

function SectionHeading({ letter, title, subtitle }: { letter: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-3 mt-6 first:mt-0">
      <div className="flex items-center gap-3 mb-1">
        <span className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs" style={{ background: 'linear-gradient(135deg, #0038FF, #6231F5)' }}>{letter}</span>
        <h2 className="text-base font-bold text-gray-900">{title}</h2>
      </div>
      {subtitle && <p className="text-gray-500 text-xs ml-11 leading-relaxed">{subtitle}</p>}
    </div>
  )
}

function SubHeading({ text }: { text: string }) {
  return <h3 className="text-sm font-bold text-gray-900 mt-4 mb-1">{text}</h3>
}

export default function EmployeeOnboardingChecklist() {
  return (
    <div className="bg-stealth-dark min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">New Employee Cyber Security Onboarding Checklist</h1>
          <p className="text-stealth-gray mb-6">Every new employee is a potential entry point until they are properly briefed and set up correctly. For IT providers, practice managers, and the employee themselves.</p>
          <PDFDownloadButton href="/downloads/employee-onboarding-checklist.pdf" />
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
              <h1 className="text-4xl font-bold text-white mb-6 leading-tight">New Employee<br />Cyber Security<br />Onboarding Checklist</h1>
              <div className="h-1 w-24 mb-8" style={{ background: 'linear-gradient(90deg, #0038FF, #6231F5)' }} />
              <p className="text-[#94A3B8] text-xl max-w-md leading-relaxed">Every new employee is a potential entry point until they are properly briefed and set up correctly. This checklist is for IT providers, practice managers, and the employee themselves.</p>
            </div>
            <div>
              <p className="text-[#94A3B8] text-sm">stealthcyber.io</p>
              <div className="h-1 w-full mt-8" style={{ background: 'linear-gradient(90deg, #0038FF, #6231F5)' }} />
            </div>
          </div>

          {/* Page 2 - How to Use + Section A */}
          <div className="page-break px-12 py-10">
            <div className="bg-gray-50 border-l-4 border-[#0038FF] p-4 rounded-r-lg mb-5">
              <p className="font-bold text-gray-900 text-sm mb-1">How to Use This Checklist</p>
              <p className="text-gray-700 text-xs leading-relaxed">
                Complete Section A (IT Setup) before the employee&apos;s first day where possible. Complete Section B (Access and Permissions) on day one. Complete Section C (Security Briefing) within the first week. Have the employee sign off Section D once the briefing is done.
              </p>
            </div>

            <SectionHeading letter="A" title="IT Setup (Complete Before Day One)" />

            <SubHeading text="Account Provisioning" />
            <CheckItem text="Microsoft 365 account created with a role-appropriate licence" />
            <CheckItem text="Account added to relevant Microsoft 365 groups and distribution lists only" />
            <CheckItem text="Access granted to SharePoint sites and Teams channels appropriate to the role only. Default is no access unless the role requires it." />
            <CheckItem text="Email signature configured" />
            <CheckItem text="Shared mailboxes added only where the role requires them" />
            <CheckItem text="No admin rights assigned unless the role specifically requires them and this has been approved" />

            <SubHeading text="Authentication" />
            <CheckItem text="MFA is enforced on the account before first login" />
            <CheckItem text="MFA method configured: Microsoft Authenticator app minimum, hardware key for privileged roles" />
            <CheckItem text="A temporary password has been set and must be changed on first login" />
            <CheckItem text="The account is in the correct Conditional Access policy scope" />

            <SubHeading text="Device Setup" />
            <CheckItem text="Corporate device is enrolled in Intune before being handed to the employee" />
            <CheckItem text="Endpoint protection (Defender for Endpoint or equivalent) is deployed and active" />
            <CheckItem text="BitLocker or FileVault encryption is enabled and verified" />
            <CheckItem text="Device compliance policy is met before the device can access corporate resources" />
            <CheckItem text="Standard software load is applied. No admin rights on the device by default." />
            <CheckItem text="Screen lock configured to activate after 5 minutes of inactivity" />
            <CheckItem text="A password manager account is provisioned for the employee" />

            <SubHeading text="Access to Business Systems" />
            <CheckItem text="Accounting software access provisioned at the appropriate permission level" />
            <CheckItem text="Practice management software access provisioned" />
            <CheckItem text="Any additional line-of-business applications provisioned with least-privilege access" />
            <CheckItem text="Access to financial data restricted to what the role requires" />
          </div>

          {/* Page 3 - Section B + Section C (Phishing + Passwords + Data) */}
          <div className="page-break px-12 py-10">
            <SectionHeading letter="B" title="Day One Access Verification" />
            <CheckItem text="Employee has logged in successfully and changed their temporary password" />
            <CheckItem text="MFA is working correctly on the device and on the employee's personal phone" />
            <CheckItem text="Employee can access all systems required for their role" />
            <CheckItem text="Employee cannot access systems or data outside their role scope (spot check this)" />
            <CheckItem text="Password manager is set up and the employee has completed onboarding to it" />
            <CheckItem text="Corporate email is confirmed working on corporate device only, or on personal device enrolled in Intune if BYOD is permitted" />
            <CheckItem text="Employee has confirmed they understand that personal devices need to be enrolled before accessing corporate email or data" />

            <SectionHeading letter="C" title="Security Briefing (Complete Within First Week)" subtitle="Cover each topic verbally and confirm the employee understands it. This is a conversation, not a form." />

            <SubHeading text="Phishing and Social Engineering" />
            <CheckItem text="Employee understands what a phishing email looks like and the specific variants relevant to your industry" />
            <CheckItem text="Employee knows to report suspicious emails to IT or the security provider rather than just deleting them" />
            <CheckItem text="Employee understands that urgency in an email is a manipulation tactic, not a reason to skip verification" />
            <CheckItem text="Employee knows never to enter credentials on a page they reached by clicking a link in an email" />
            <CheckItem text="Employee understands what MFA fatigue is and knows to deny unexpected MFA prompts and report them" />

            <SubHeading text="Password and Account Security" />
            <CheckItem text="Employee understands the requirement for unique passwords for every account" />
            <CheckItem text="Employee understands that credentials must not be shared, written down, or stored in unencrypted documents" />
            <CheckItem text="Employee knows how to use the password manager and has created their master password securely" />
            <CheckItem text="Employee understands that their business credentials must not be used for personal accounts" />
          </div>

          {/* Page 4 - Section C continued (Data + Payment + Device + Incident) */}
          <div className="page-break px-12 py-10">
            <SubHeading text="Data Handling" />
            <CheckItem text="Employee understands the firm's data classification scheme and which categories apply to client data" />
            <CheckItem text="Employee knows which data cannot be shared externally without authorisation" />
            <CheckItem text="Employee understands the firm's policy on AI tools: which are approved, which are not, and what data cannot be processed through public AI platforms" />
            <CheckItem text="Employee understands their obligations under the Privacy Act in the context of their role" />
            <CheckItem text="Employee knows not to store client data on personal devices or personal cloud accounts" />

            <SubHeading text="Payment and Financial Processes" />
            <CheckItem text="Employee understands the firm's payment verification process" />
            <CheckItem text="Employee knows that bank account details are never changed based solely on an email instruction" />
            <CheckItem text="Employee knows the escalation process for any unusual financial request" />

            <SubHeading text="Device and Physical Security" />
            <CheckItem text="Employee knows not to leave devices unattended and unlocked" />
            <CheckItem text="Employee knows not to connect corporate devices to public Wi-Fi without using a VPN" />
            <CheckItem text="Employee knows not to use personal USB drives or external storage on corporate devices" />
            <CheckItem text="Employee knows the procedure for reporting a lost or stolen device immediately" />

            <SubHeading text="Incident Reporting" />
            <CheckItem text="Employee knows what to report: suspicious emails, unexpected MFA prompts, unusual system behaviour, accidental data exposure, lost or stolen devices" />
            <CheckItem text="Employee knows who to report to and how: IT provider contact details, security provider contact details, and the internal escalation path" />
            <CheckItem text="Employee understands that reporting quickly is always the right call, even if uncertain" />
          </div>

          {/* Page 5 - Section D (Acknowledgement) + Ongoing */}
          <div className="page-break px-12 py-10">
            <SectionHeading letter="D" title="Employee Acknowledgement" subtitle="To be signed by the employee after completing Sections A, B, and C." />

            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 mt-4 mb-8">
              <p className="text-gray-700 text-sm leading-relaxed mb-4">I confirm that I have:</p>
              <div className="space-y-2 mb-6">
                {[
                  'Received and reviewed the firm\'s cybersecurity policies',
                  'Had the security briefing in Section C explained to me',
                  'Set up my accounts, devices, and password manager as required',
                  'Asked questions about anything I did not understand',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="shrink-0 w-4 h-4 mt-0.5 border-2 border-gray-300 rounded" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-8">
                I understand that I am responsible for following the firm&apos;s security policies and that I should report anything suspicious to IT or the security provider without delay.
              </p>
              <div className="space-y-5">
                {[
                  'Employee name',
                  'Role',
                  'Date',
                  'Signature',
                  'Onboarding completed by',
                ].map((field) => (
                  <div key={field} className="flex items-end gap-3">
                    <span className="text-gray-700 text-sm font-medium shrink-0 w-48">{field}:</span>
                    <span className="flex-1 border-b border-gray-300 pb-1">&nbsp;</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="h-6 w-1 rounded-full" style={{ background: 'linear-gradient(180deg, #0038FF, #6231F5)' }} />
              <h2 className="text-base font-bold text-gray-900">Ongoing Requirements After Onboarding</h2>
            </div>
            <div className="space-y-1">
              {[
                'Security awareness training is required annually at minimum and will be assigned through the firm\'s training platform',
                'Phishing simulations are run periodically. Clicking on a simulation is a training moment, not a disciplinary one, but results are monitored.',
                'Security policies are reviewed and updated and employees are expected to stay current with them',
                'Any change in role that involves increased access to financial data or privileged systems requires a review by IT',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 py-1">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#0038FF] mt-2" />
                  <span className="text-gray-700 text-xs leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Back Page */}
          <div className="page-break px-12 py-16 print-full-page flex flex-col justify-between" style={{ background: 'linear-gradient(135deg, #04050F 0%, #07091A 100%)' }}>
            <div>
              <div className="h-1 w-full mb-16" style={{ background: 'linear-gradient(90deg, #0038FF, #6231F5)' }} />
              <img src="/Primary-Reversed-Dark.png" alt="Stealth Cyber" className="h-10 mb-12" />
              <h2 className="text-3xl font-bold text-white mb-6">Need help with your onboarding process?</h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed max-w-md mb-12">
                Stealth Cyber provides managed cybersecurity for Australian professional services firms, including security awareness training through Huntress SAT and managed endpoint protection.
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
