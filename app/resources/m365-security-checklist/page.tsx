import type { Metadata } from 'next'
import PDFDownloadButton from '../ai-security-cheat-sheet/PDFDownloadButton'

export const metadata: Metadata = {
  title: 'Microsoft 365 Security Hardening Checklist | Free Download',
  description: 'Default Microsoft 365 settings are not secure settings. This checklist covers identity, email, SharePoint, Defender, endpoints, and monitoring configurations for Australian SMBs.',
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
        <h2 className="text-base font-bold text-gray-900">{title}</h2>
      </div>
      {subtitle && <p className="text-gray-500 text-xs ml-11 leading-relaxed">{subtitle}</p>}
    </div>
  )
}

export default function M365SecurityChecklist() {
  return (
    <div className="bg-stealth-dark min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Microsoft 365 Security Hardening Checklist</h1>
          <p className="text-stealth-gray mb-6">Default Microsoft 365 settings are not secure settings. Work through this checklist with your IT or security provider and confirm each item is verified, not just assumed.</p>
          <PDFDownloadButton href="/downloads/m365-security-checklist.pdf" />
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
              <h1 className="text-4xl font-bold text-white mb-6 leading-tight">Microsoft 365<br />Security Hardening<br />Checklist</h1>
              <div className="h-1 w-24 mb-8" style={{ background: 'linear-gradient(90deg, #0038FF, #6231F5)' }} />
              <p className="text-[#94A3B8] text-xl max-w-md leading-relaxed">Default Microsoft 365 settings are not secure settings. This checklist covers the configurations that matter most for Australian SMBs.</p>
            </div>
            <div>
              <p className="text-[#94A3B8] text-sm">stealthcyber.io</p>
              <div className="h-1 w-full mt-8" style={{ background: 'linear-gradient(90deg, #0038FF, #6231F5)' }} />
            </div>
          </div>

          {/* Page 2 - Section 1 + Section 2 */}
          <div className="page-break px-12 py-10">
            <SectionHeading number="1" title="Identity and Authentication" subtitle="Highest priority. An identity misconfiguration underpins the majority of M365 compromises we investigate." />
            <CheckItem text="Security Defaults or Conditional Access policies are enabled. Conditional Access is strongly preferred for business environments." />
            <CheckItem text="Legacy authentication protocols are blocked (basic auth, IMAP, POP3, SMTP AUTH) for all users without a documented technical requirement." />
            <CheckItem text="MFA is enforced for all users via Conditional Access, not just enabled via per-user MFA settings." />
            <CheckItem text="MFA is enforced for all Global Administrators and privileged roles." />
            <CheckItem text="Phishing-resistant MFA (FIDO2 or certificate-based) is deployed for the highest-privilege accounts." />
            <CheckItem text="Sign-in is restricted to compliant, managed devices via Conditional Access where possible." />
            <CheckItem text="Sign-ins from high-risk locations or anonymous IP addresses are blocked or require additional verification." />
            <CheckItem text="Sign-in risk policies are configured in Entra ID Identity Protection (P2 licence required)." />
            <CheckItem text="Self-service password reset is enabled and configured with appropriate verification methods." />
            <CheckItem text="Password hash synchronisation is enabled if using hybrid identity." />
            <CheckItem text="Emergency access (Break Glass) accounts exist, are excluded from Conditional Access, are monitored, and credentials are stored securely offline." />

            <SectionHeading number="2" title="Admin Role Management" />
            <CheckItem text="The number of Global Administrator accounts is five or fewer." />
            <CheckItem text="Global Administrator accounts are cloud-only, not synchronised from on-premises Active Directory." />
            <CheckItem text="Global Administrator accounts are not used for day-to-day tasks." />
            <CheckItem text="Role assignments follow least privilege: users hold only the roles they need." />
            <CheckItem text="Privileged Identity Management (PIM) is configured for just-in-time admin access where licencing permits." />
            <CheckItem text="Admin roles are reviewed and validated at least every 90 days." />
            <CheckItem text="Admin accounts do not have active mailboxes used for routine email." />
          </div>

          {/* Page 3 - Section 3 */}
          <div className="page-break px-12 py-10">
            <SectionHeading number="3" title="Exchange Online and Email Security" />
            <CheckItem text="SPF record is published and correctly configured for your domain." />
            <CheckItem text="DKIM signing is enabled for all sending domains." />
            <CheckItem text="DMARC is configured with at minimum a quarantine policy (p=quarantine). Reject (p=reject) is the target." />
            <CheckItem text="DMARC reports are being monitored." />
            <CheckItem text="External email tagging is enabled so staff can identify emails originating outside the organisation." />
            <CheckItem text="Anti-phishing policies are configured with impersonation protection for key personnel." />
            <CheckItem text="Safe Links is enabled and configured to scan URLs in email and Office documents." />
            <CheckItem text="Safe Attachments is enabled and configured to detonate suspicious attachments before delivery." />
            <CheckItem text="Automatic external email forwarding is disabled at the tenant level." />
            <CheckItem text="Transport rules are reviewed for unexpected or unauthorised configurations." />
            <CheckItem text="Mailbox auditing is enabled for all users (on by default for E3/E5 but should be verified)." />
            <CheckItem text="Unified audit log is enabled and retention period is configured appropriately." />
            <CheckItem text="Mail flow rules are reviewed and documented." />

            <SectionHeading number="4" title="SharePoint, OneDrive, and Teams" />
            <CheckItem text="External sharing in SharePoint is restricted to the minimum required. Anonymous sharing links are disabled or time-limited." />
            <CheckItem text="SharePoint site permissions are reviewed periodically. Overly permissive sites are a significant Copilot risk." />
            <CheckItem text="OneDrive external sharing is configured consistently with SharePoint policy." />
            <CheckItem text="Guest access in Teams is enabled only if required and is governed by a documented policy." />
            <CheckItem text="External access (federation) in Teams is restricted to known, trusted domains where possible." />
            <CheckItem text="Sensitivity labels are applied to SharePoint sites and Teams containing confidential content." />
            <CheckItem text="Data Loss Prevention (DLP) policies are configured to detect and control sensitive data sharing." />
          </div>

          {/* Page 4 - Section 5 + Section 6 */}
          <div className="page-break px-12 py-10">
            <SectionHeading number="5" title="Microsoft Defender for Office 365" />
            <CheckItem text="Defender for Office 365 Plan 1 or Plan 2 is licenced and configured (included in Business Premium)." />
            <CheckItem text="Anti-malware policies are configured with appropriate alert and quarantine settings." />
            <CheckItem text="Zero-hour auto purge (ZAP) is enabled to retroactively remove malicious messages post-delivery." />
            <CheckItem text="Attack simulation training is configured and running regular phishing simulations." />
            <CheckItem text="Threat Explorer or Real-time detections are being used to investigate suspicious activity." />
            <CheckItem text="Preset security policies (Standard or Strict) have been applied as a baseline." />

            <SectionHeading number="6" title="Endpoint Security (Defender for Endpoint / Intune)" />
            <CheckItem text="Microsoft Defender for Endpoint is deployed and active on all Windows endpoints." />
            <CheckItem text="Defender for Endpoint is integrated with the Microsoft 365 Defender portal." />
            <CheckItem text="Endpoint Detection and Response (EDR) is in Block mode, not just Audit mode." />
            <CheckItem text="Attack Surface Reduction (ASR) rules are configured and enforced." />
            <CheckItem text="Intune is managing all corporate devices with compliance policies enforced." />
            <CheckItem text="Device compliance policies require encryption, screen lock, and minimum OS version." />
            <CheckItem text="Non-compliant devices are blocked from accessing corporate resources via Conditional Access." />
            <CheckItem text="Mobile devices accessing corporate email are enrolled in Intune." />
            <CheckItem text="Windows Autopatch or a comparable patch management process is active and verified." />
          </div>

          {/* Page 5 - Section 7 + 8 + 9 + Scoring */}
          <div className="page-break px-12 py-10">
            <SectionHeading number="7" title="Microsoft Secure Score" />
            <CheckItem text="Microsoft Secure Score has been reviewed in the last 30 days." />
            <CheckItem text="A remediation plan exists for the highest-impact recommendations." />
            <CheckItem text="Secure Score is tracked over time and reviewed as part of regular security governance." />
            <CheckItem text="Recommendations have been assessed against your environment before being actioned." />

            <SectionHeading number="8" title="Monitoring and Alerting" />
            <CheckItem text="Microsoft Sentinel or an equivalent SIEM is ingesting M365 audit logs." />
            <CheckItem text="Alerts are configured for high-risk events: impossible travel logins, mass file deletion, privilege escalation, new inbox rules, legacy auth attempts." />
            <CheckItem text="Alerts are being reviewed by a human, not just landing in a queue." />
            <CheckItem text="Sign-in logs are being reviewed for anomalous activity." />
            <CheckItem text="A process exists for responding to Identity Protection risk events." />

            <SectionHeading number="9" title="Data Protection and Compliance" />
            <CheckItem text="Microsoft Purview Information Protection is configured with sensitivity labels appropriate to your data classifications." />
            <CheckItem text="Labels are applied to documents and emails containing confidential or restricted content." />
            <CheckItem text="Retention policies are configured to meet your legal and regulatory obligations." />
            <CheckItem text="eDiscovery and audit capabilities are understood and tested if required for your sector." />
            <CheckItem text="Personal data subject to the Privacy Act is identified and controls are appropriate." />

            <div className="mt-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-6 w-1 rounded-full" style={{ background: 'linear-gradient(180deg, #0038FF, #6231F5)' }} />
                <h2 className="text-base font-bold text-gray-900">Interpreting Your Results</h2>
              </div>
              <div className="space-y-2">
                {[
                  { range: 'Fewer than 15 ticked', color: 'bg-red-100 border-red-300 text-red-800', text: 'Significant security gaps. Prioritise Section 1 and Section 3 immediately.' },
                  { range: '15 to 35 ticked', color: 'bg-orange-100 border-orange-300 text-orange-800', text: 'Partial baseline. Focus on completing Sections 1 through 4.' },
                  { range: '36 to 50 ticked', color: 'bg-yellow-50 border-yellow-300 text-yellow-800', text: 'Solid baseline. Work through remaining items in a structured plan.' },
                  { range: '50 or more ticked', color: 'bg-green-100 border-green-300 text-green-800', text: 'Strong configuration. Maintain through regular review and Secure Score monitoring.' },
                ].map((score) => (
                  <div key={score.range} className={`border rounded-lg p-2.5 ${score.color}`}>
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
              <h2 className="text-3xl font-bold text-white mb-6">Need help hardening your M365 tenant?</h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed max-w-md mb-12">
                Stealth Cyber specialises in Microsoft 365 security hardening, Secure Score remediation, and managed detection and response for Australian professional services firms. Get in touch for a verified assessment of your M365 security posture.
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
