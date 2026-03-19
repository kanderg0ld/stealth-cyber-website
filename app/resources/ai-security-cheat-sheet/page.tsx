import type { Metadata } from 'next'
import PDFDownloadButton from './PDFDownloadButton'

export const metadata: Metadata = {
  title: 'AI Security Cheat Sheet | Free Download',
  description: 'What every Australian business needs to know about securing AI tools in the workplace. Free downloadable PDF from Stealth Cyber.',
}

export default function AISecurityCheatSheet() {
  return (
    <div className="bg-stealth-dark min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">AI Security Cheat Sheet</h1>
          <p className="text-stealth-gray mb-6">What every Australian business needs to know about securing AI tools in the workplace.</p>
          <PDFDownloadButton href="/downloads/ai-security-cheat-sheet.pdf" />
        </div>

        {/* PDF Content - hidden on screen, visible in print */}
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

          {/* Page 1 - Cover */}
          <div className="px-12 py-16 bg-[#04050F] text-white print-full-page flex flex-col justify-between" style={{ background: 'linear-gradient(135deg, #04050F 0%, #07091A 100%)' }}>
            <div>
              <div className="h-1 w-full mb-8" style={{ background: 'linear-gradient(90deg, #0038FF, #6231F5)' }} />
              <img src="/Primary-Reversed-Dark.png" alt="Stealth Cyber" className="h-10 mb-16" />
              <h1 className="text-5xl font-bold mb-6 leading-tight">AI Security<br />Cheat Sheet</h1>
              <div className="h-1 w-24 mb-8" style={{ background: 'linear-gradient(90deg, #0038FF, #6231F5)' }} />
              <p className="text-[#94A3B8] text-xl max-w-md leading-relaxed">What every Australian business needs to know about securing AI tools in the workplace.</p>
            </div>
            <div>
              <p className="text-[#94A3B8] text-sm">stealthcyber.io</p>
              <div className="h-1 w-full mt-8" style={{ background: 'linear-gradient(90deg, #0038FF, #6231F5)' }} />
            </div>
          </div>

          {/* Page 2 - The Core Problem + What to Lock Down */}
          <div className="page-break px-12 py-10 print-content-page">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-6 w-1 rounded-full" style={{ background: 'linear-gradient(180deg, #0038FF, #6231F5)' }} />
              <h2 className="text-2xl font-bold text-gray-900">The Core Problem</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6 text-base">
              AI tools move faster than security policies. Most organisations are using AI in some capacity before anyone has defined the rules around it. This cheat sheet covers the essentials so your team is not making security decisions by default.
            </p>

            <div className="flex items-center gap-3 mb-8">
              <div className="h-6 w-1 rounded-full" style={{ background: 'linear-gradient(180deg, #0038FF, #6231F5)' }} />
              <h2 className="text-2xl font-bold text-gray-900">What to Lock Down First</h2>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-4">Data you should never put into a public AI tool</h3>
            <ul className="space-y-2 mb-8">
              {[
                'Client personal information (names, TFNs, contact details)',
                'Financial records, bank account details, transaction data',
                'Legally privileged communications',
                'Staff payroll and HR records',
                'Commercially sensitive contracts or strategy documents',
                'Login credentials, API keys, or any authentication material',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#0038FF] mt-2" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="bg-gray-50 border-l-4 border-[#0038FF] p-4 rounded-r-lg mb-6">
              <p className="text-gray-700 text-sm leading-relaxed">
                If it would cause a problem under the Privacy Act or your professional obligations if it leaked, it does not go into a public AI tool.
              </p>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-4">The difference between safe and unsafe AI tools</h3>
            <div className="overflow-hidden rounded-lg border border-gray-200 mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#04050F] text-white">
                    <th className="text-left px-4 py-3 font-semibold">Safe (generally)</th>
                    <th className="text-left px-4 py-3 font-semibold">Use with caution</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Microsoft Copilot within your M365 tenancy', 'ChatGPT free/personal accounts'],
                    ['Azure OpenAI with your own data controls', 'Google Gemini personal accounts'],
                    ['Copilot for Microsoft 365 (licensed, configured)', 'Browser-based AI tools with no enterprise agreement'],
                    ['Approved internal AI deployments', 'Free tiers of any AI platform'],
                  ].map(([safe, caution], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 text-gray-700">{safe}</td>
                      <td className="px-4 py-3 text-gray-700">{caution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              The key distinction: does your data stay within your environment, or does it leave to a third-party server? Enterprise licensing agreements typically include data protection commitments. Free personal accounts typically do not.
            </p>
          </div>

          {/* Page 3 - Five Rules + M365 */}
          <div className="page-break px-12 py-10 print-content-page">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-6 w-1 rounded-full" style={{ background: 'linear-gradient(180deg, #0038FF, #6231F5)' }} />
              <h2 className="text-2xl font-bold text-gray-900">Five Rules for Staff Using AI Tools</h2>
            </div>
            <div className="space-y-4 mb-8">
              {[
                { num: '01', title: 'Only use tools the business has approved.', desc: 'If it is not on the approved list, raise it before using it for work tasks.' },
                { num: '02', title: 'Never paste client data into a public AI tool.', desc: 'Not even to "just check something quickly."' },
                { num: '03', title: 'Treat AI outputs as a first draft, not a final answer.', desc: 'Review everything before it goes to a client or gets acted on.' },
                { num: '04', title: 'Report anything that looks wrong.', desc: 'If an AI tool behaves unexpectedly, accesses something it should not, or produces output that references information it should not have, report it.' },
                { num: '05', title: 'Your professional obligations apply to AI-assisted work.', desc: 'If you sign off on it, you are accountable for it, regardless of how it was produced.' },
              ].map((rule) => (
                <div key={rule.num} className="flex gap-4 items-start">
                  <span className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm" style={{ background: 'linear-gradient(135deg, #0038FF, #6231F5)' }}>{rule.num}</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{rule.title}</p>
                    <p className="text-gray-600 text-sm">{rule.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 mb-8">
              <div className="h-6 w-1 rounded-full" style={{ background: 'linear-gradient(180deg, #0038FF, #6231F5)' }} />
              <h2 className="text-2xl font-bold text-gray-900">Microsoft 365 and Copilot Risks</h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              Copilot for Microsoft 365 draws from everything the user can access. If your permissions model is loose, Copilot will surface files and data beyond what any individual user should be seeing.
            </p>
            <h3 className="font-bold text-gray-900 text-sm mb-3">Before deploying Copilot:</h3>
            <ul className="space-y-2 mb-6">
              {[
                'Review and tighten SharePoint permissions',
                'Apply Microsoft Purview sensitivity labels to confidential content',
                'Audit who has access to what across your tenancy',
                'Understand what Copilot can see on behalf of each user role',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#0038FF] mt-2" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
              <p className="text-gray-700 text-sm leading-relaxed">
                Deploying Copilot without a permissions review is a reliable way to expose sensitive information to people who should not have it.
              </p>
            </div>
          </div>

          {/* Page 4 - Shadow AI + Incidents + Actions */}
          <div className="page-break px-12 py-10 print-content-page">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-6 w-1 rounded-full" style={{ background: 'linear-gradient(180deg, #0038FF, #6231F5)' }} />
              <h2 className="text-2xl font-bold text-gray-900">Shadow AI</h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Shadow AI is any AI tool being used by staff that the business has not formally sanctioned. It is the work equivalent of staff using personal Dropbox accounts to share client files.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              Most organisations have more shadow AI use than they realise. Staff find tools useful and start using them. Nobody asked for permission because nobody thought to ask. The data leaves the environment and nobody knows.
            </p>
            <div className="bg-gray-50 border-l-4 border-[#0038FF] p-4 rounded-r-lg mb-8">
              <p className="font-bold text-gray-900 text-sm mb-1">How to find it:</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Ask your IT or security provider to audit browser extensions, SaaS application usage, and network traffic for known AI service domains. What you find will likely be more than you expected.
              </p>
            </div>

            <div className="flex items-center gap-3 mb-8">
              <div className="h-6 w-1 rounded-full" style={{ background: 'linear-gradient(180deg, #0038FF, #6231F5)' }} />
              <h2 className="text-2xl font-bold text-gray-900">AI Incident Types to Report</h2>
            </div>
            <ul className="space-y-2 mb-8">
              {[
                'Accidental submission of confidential data to a public AI tool',
                'AI output that references client or business information it should not have access to',
                'An AI tool behaving unexpectedly or requesting unusual permissions',
                'Staff using an unsanctioned AI tool with work-related data',
                'A vendor disclosing that their AI features have been updated to include data sharing',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 mb-8">
              <div className="h-6 w-1 rounded-full" style={{ background: 'linear-gradient(180deg, #0038FF, #6231F5)' }} />
              <h2 className="text-2xl font-bold text-gray-900">Three Things to Do This Week</h2>
            </div>
            <div className="space-y-4">
              {[
                { num: '1', text: 'Audit what AI tools your staff are currently using. Ask directly and check with your IT provider.' },
                { num: '2', text: 'Establish a simple approved tools list. Even an email to staff is better than no policy.' },
                { num: '3', text: 'Brief your team on what data cannot go into public AI tools. One conversation prevents most incidents.' },
              ].map((item) => (
                <div key={item.num} className="flex gap-4 items-start">
                  <span className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ background: 'linear-gradient(135deg, #0038FF, #6231F5)' }}>{item.num}</span>
                  <p className="text-gray-700 text-sm leading-relaxed pt-1">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Page 5 - Back Page / Contact */}
          <div className="page-break px-12 py-16 print-full-page flex flex-col justify-between" style={{ background: 'linear-gradient(135deg, #04050F 0%, #07091A 100%)' }}>
            <div>
              <div className="h-1 w-full mb-16" style={{ background: 'linear-gradient(90deg, #0038FF, #6231F5)' }} />
              <img src="/Primary-Reversed-Dark.png" alt="Stealth Cyber" className="h-10 mb-8" />
              <h2 className="text-3xl font-bold text-white mb-6">Need help securing your AI tools?</h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed max-w-md mb-8">
                Stealth Cyber provides managed cybersecurity and AI governance support for Australian professional services firms. Get in touch for a straight conversation about your AI security posture.
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
