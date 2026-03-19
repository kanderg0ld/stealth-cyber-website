import type { Metadata } from 'next'
import PDFDownloadButton from '../ai-security-cheat-sheet/PDFDownloadButton'

export const metadata: Metadata = {
  title: 'Account Security Checklist | Free Download',
  description: 'Most breaches start with a compromised account. This checklist covers MFA, password security, privileged accounts, Microsoft 365, email security, device security, and offboarding.',
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 py-1">
      <span className="shrink-0 w-4 h-4 mt-0.5 border-2 border-gray-300 rounded" />
      <span className="text-gray-700 text-sm leading-relaxed">{text}</span>
    </div>
  )
}

function SectionHeading({ number, title, subtitle }: { number: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-3 mt-6 first:mt-0">
      <div className="flex items-center gap-3 mb-1">
        <span className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs" style={{ background: 'linear-gradient(135deg, #0038FF, #6231F5)' }}>{number}</span>
        <h2 className="text-lg font-bold text-gray-900">{title}</h2>
      </div>
      {subtitle && <p className="text-gray-500 text-xs ml-11 leading-relaxed">{subtitle}</p>}
    </div>
  )
}

export default function AccountSecurityChecklist() {
  return (
    <div className="bg-stealth-dark min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Account Security Checklist</h1>
          <p className="text-stealth-gray mb-6">Most breaches start with a compromised account. This checklist covers the controls that matter most for protecting the accounts your business depends on.</p>
          <PDFDownloadButton />
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
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">Account Security<br />Checklist</h1>
              <div className="h-1 w-24 mb-8" style={{ background: 'linear-gradient(90deg, #0038FF, #6231F5)' }} />
              <p className="text-[#94A3B8] text-xl max-w-md leading-relaxed">Most breaches start with a compromised account. This checklist covers the controls that matter most for protecting the accounts your business depends on.</p>
            </div>
            <div>
              <p className="text-[#94A3B8] text-sm">stealthcyber.io</p>
              <div className="h-1 w-full mt-8" style={{ background: 'linear-gradient(90deg, #0038FF, #6231F5)' }} />
            </div>
          </div>

          {/* Page 2 - How to Use + Section 1 + Section 2 */}
          <div className="page-break px-12 py-10">
            <div className="bg-gray-50 border-l-4 border-[#0038FF] p-4 rounded-r-lg mb-5">
              <p className="font-bold text-gray-900 text-sm mb-1">How to Use This Checklist</p>
              <p className="text-gray-700 text-xs leading-relaxed">
                Work through each section with your IT provider or security team. Tick items that are confirmed in place and verified, not just assumed. Anything unticked is a gap. Prioritise gaps in Section 1 first.
              </p>
            </div>

            <SectionHeading number="1" title="Multi-Factor Authentication" subtitle="MFA is the single most effective control for preventing unauthorised account access. Every unticked item in this section is a meaningful gap." />
            <CheckItem text="MFA is enforced on Microsoft 365 for all users, with no exceptions" />
            <CheckItem text="MFA is enforced on all email access, including mobile devices" />
            <CheckItem text="MFA is enforced on all remote access to business systems (VPN, remote desktop, RMM tools)" />
            <CheckItem text="MFA is enforced on all cloud services (accounting software, practice management, document storage)" />
            <CheckItem text="MFA is enforced on all privileged and admin accounts" />
            <CheckItem text="Legacy authentication protocols are blocked in Microsoft 365 (basic auth, IMAP, POP3)" />
            <CheckItem text="Phishing-resistant MFA (hardware security keys or certificate-based) is used for the highest-risk accounts" />
            <CheckItem text="MFA bypass or exclusion policies have been reviewed and minimised" />
            <CheckItem text="Staff have been briefed on MFA fatigue attacks (repeated push notifications to pressure approval)" />

            <SectionHeading number="2" title="Password Security" />
            <CheckItem text="A password manager is in use across the organisation for business accounts" />
            <CheckItem text="Unique passwords are required for every business account (no password reuse)" />
            <CheckItem text="Default passwords have been changed on all systems, devices, and applications" />
            <CheckItem text="There is a process for revoking credentials immediately when a staff member leaves" />
            <CheckItem text="Shared or generic account passwords are changed when any person with knowledge of them leaves" />
            <CheckItem text="Credentials are never stored in spreadsheets, sticky notes, browser saved passwords on shared devices, or unencrypted documents" />
            <CheckItem text="Staff know not to reuse business passwords for personal accounts" />
            <CheckItem text="Your organisation's email domain has been checked against known credential breach databases (e.g. Have I Been Pwned)" />
          </div>

          {/* Page 3 - Section 3 + Section 4 */}
          <div className="page-break px-12 py-10">
            <SectionHeading number="3" title="Privileged and Admin Accounts" />
            <CheckItem text="Admin accounts are separate from day-to-day user accounts" />
            <CheckItem text="The list of accounts with admin or privileged access has been reviewed in the last 6 months" />
            <CheckItem text="Staff are not operating with admin rights for routine daily tasks" />
            <CheckItem text="Domain admin accounts are used only for tasks that require domain admin access" />
            <CheckItem text="Service accounts have the minimum permissions required and are reviewed regularly" />
            <CheckItem text="Privileged account credentials are stored in a privileged access management (PAM) tool, not a shared spreadsheet" />
            <CheckItem text="There is a Break Glass account for emergency access that is separately secured and its use is logged and alerted" />

            <SectionHeading number="4" title="Microsoft 365 Specific" />
            <CheckItem text="Conditional access policies are in place and enforced" />
            <CheckItem text="Sign-in is restricted to managed, compliant devices where possible" />
            <CheckItem text="Sign-ins from unexpected geographic locations trigger alerts or are blocked" />
            <CheckItem text="Microsoft Secure Score has been reviewed and remediation is in progress" />
            <CheckItem text="Unified audit logging is enabled and retained for a minimum of 90 days" />
            <CheckItem text="Mailbox auditing is enabled for all users" />
            <CheckItem text="External email forwarding is disabled or restricted by policy" />
            <CheckItem text="Auto-forwarding rules are monitored for unexpected configurations" />
            <CheckItem text="The Global Administrator role has fewer than 5 accounts assigned and all are cloud-only accounts with MFA" />
            <CheckItem text="Emergency access (Break Glass) accounts exist and are tested at least annually" />
          </div>

          {/* Page 4 - Section 5 + Section 6 */}
          <div className="page-break px-12 py-10">
            <SectionHeading number="5" title="Email Security" subtitle="Email is the primary initial access vector for most attacks targeting Australian businesses." />
            <CheckItem text="SPF, DKIM, and DMARC records are configured correctly for your domain" />
            <CheckItem text="DMARC is set to at minimum quarantine policy (p=quarantine or p=reject)" />
            <CheckItem text="External email is tagged to indicate it did not originate inside your organisation" />
            <CheckItem text="Impersonation protection is configured for key personnel (CEO, finance, principals)" />
            <CheckItem text="Attachment scanning and safe links are enabled" />
            <CheckItem text="Staff are trained to verify payment redirection requests or changes to bank details via a separate communication channel, not by replying to the email" />

            <SectionHeading number="6" title="Device and Session Security" />
            <CheckItem text="All devices accessing business data have endpoint protection (EDR) installed and active" />
            <CheckItem text="Devices are encrypted (BitLocker for Windows, FileVault for Mac)" />
            <CheckItem text="Screen lock activates after a short idle period on all devices" />
            <CheckItem text="Lost or stolen devices can be remotely wiped" />
            <CheckItem text="Personal devices accessing business email or data are enrolled in mobile device management" />
            <CheckItem text="Session timeouts are configured for web-based business applications" />
            <CheckItem text="Staff know to sign out of business accounts on shared or personal devices after use" />
            <CheckItem text="Browser extensions are reviewed periodically. Malicious extensions are a common credential theft vector." />
          </div>

          {/* Page 5 - Section 7 + Quick Reference */}
          <div className="page-break px-12 py-10">
            <SectionHeading number="7" title="Offboarding and Access Review" />
            <CheckItem text="There is a documented offboarding process that includes immediate account suspension on departure" />
            <CheckItem text="All accounts (Microsoft 365, line-of-business applications, shared accounts) are included in the offboarding checklist" />
            <CheckItem text="Access rights are reviewed across all staff at least annually, not just at onboarding" />
            <CheckItem text="Contractor and third-party access is time-limited and revoked on completion of the engagement" />
            <CheckItem text="Service desk staff are trained to verify identity before making account changes (social engineering via helpdesk is a common attack vector)" />

            <div className="mt-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-6 w-1 rounded-full" style={{ background: 'linear-gradient(180deg, #0038FF, #6231F5)' }} />
                <h2 className="text-lg font-bold text-gray-900">Signs an Account May Be Compromised</h2>
              </div>
              <p className="text-gray-500 text-xs mb-3">Report any of the following to your IT or security provider immediately:</p>
              <div className="space-y-1.5">
                {[
                  'Login alerts from unexpected locations or devices',
                  'MFA prompts you did not initiate',
                  'Emails sent from your account that you did not write',
                  'Contacts reporting unusual communications from you',
                  'Password changed without your action',
                  'Files accessed or modified at unusual times',
                  'Unfamiliar inbox rules, forwarding rules, or calendar sharing',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-red-400" />
                    </span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg mt-4">
                <p className="text-gray-900 text-sm font-bold">When in doubt, report it. The cost of investigating a false alarm is zero compared to the cost of missing a real one.</p>
              </div>
            </div>
          </div>

          {/* Back Page */}
          <div className="page-break px-12 py-16 print-full-page flex flex-col justify-between" style={{ background: 'linear-gradient(135deg, #04050F 0%, #07091A 100%)' }}>
            <div>
              <div className="h-1 w-full mb-16" style={{ background: 'linear-gradient(90deg, #0038FF, #6231F5)' }} />
              <img src="/Primary-Reversed-Dark.png" alt="Stealth Cyber" className="h-10 mb-12" />
              <h2 className="text-3xl font-bold text-white mb-6">Need help locking down your accounts?</h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed max-w-md mb-12">
                Stealth Cyber provides managed detection and response and security assessments for Australian professional services firms. Get in touch for a straight conversation about your account security posture.
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
