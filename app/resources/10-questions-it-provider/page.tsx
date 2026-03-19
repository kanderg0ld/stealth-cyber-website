import type { Metadata } from 'next'
import PDFDownloadButton from '../ai-security-cheat-sheet/PDFDownloadButton'

export const metadata: Metadata = {
  title: '10 Questions to Ask Your IT Provider About Cybersecurity | Free Download',
  description: 'A practical guide with 10 questions every Australian SMB should ask their IT provider about cybersecurity. Includes follow-up questions and what to listen for.',
}

function QuestionCard({ num, question, detail, followUp }: { num: string; question: string; detail: string; followUp: string }) {
  return (
    <div className="mb-6">
      <div className="flex gap-3 items-start mb-2">
        <span className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs" style={{ background: 'linear-gradient(135deg, #0038FF, #6231F5)' }}>{num}</span>
        <h3 className="text-base font-bold text-gray-900 leading-snug pt-1">{question}</h3>
      </div>
      <div className="ml-11">
        <p className="text-gray-700 text-sm leading-relaxed mb-2">{detail}</p>
        <div className="bg-gray-50 border-l-4 border-[#0038FF] p-3 rounded-r-lg">
          <p className="text-gray-700 text-xs leading-relaxed"><span className="font-bold">Follow-up:</span> {followUp}</p>
        </div>
      </div>
    </div>
  )
}

export default function TenQuestionsITProvider() {
  return (
    <div className="bg-stealth-dark min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">10 Questions to Ask Your IT Provider About Cybersecurity</h1>
          <p className="text-stealth-gray mb-6">A capable IT provider should be able to answer every one of these clearly and specifically. Vague answers are data.</p>
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
              <h1 className="text-4xl font-bold text-white mb-6 leading-tight">10 Questions to Ask<br />Your IT Provider About<br />Cybersecurity</h1>
              <div className="h-1 w-24 mb-8" style={{ background: 'linear-gradient(90deg, #0038FF, #6231F5)' }} />
              <p className="text-[#94A3B8] text-xl max-w-md leading-relaxed">A capable IT provider should be able to answer every one of these clearly and specifically. Vague answers are data.</p>
            </div>
            <div>
              <p className="text-[#94A3B8] text-sm">stealthcyber.io</p>
              <div className="h-1 w-full mt-8" style={{ background: 'linear-gradient(90deg, #0038FF, #6231F5)' }} />
            </div>
          </div>

          {/* Page 2 - How to Use + Questions 1-4 */}
          <div className="page-break px-12 py-10">
            <div className="bg-gray-50 border-l-4 border-[#0038FF] p-4 rounded-r-lg mb-8">
              <p className="font-bold text-gray-900 text-sm mb-1">How to Use This Resource</p>
              <p className="text-gray-700 text-xs leading-relaxed">
                Take these questions into your next review conversation with your IT provider. You are not looking for jargon. You are looking for specific, measurable answers. Where you get generalities, ask for the specific metric, report, or process behind the claim.
              </p>
            </div>

            <QuestionCard
              num="1"
              question="Who is monitoring our environment at 2am on a Saturday?"
              detail="What you are listening for: a named tool, a named team, and a defined escalation process. &quot;We have antivirus and alerting&quot; is not 24/7 monitoring. If the answer is that alerts go to a ticketing queue and get reviewed during business hours, your environment is unmonitored outside of business hours."
              followUp="What was the last alert generated in our environment, and when was it reviewed?"
            />
            <QuestionCard
              num="2"
              question="What are your mean time to detect and mean time to respond benchmarks?"
              detail="Mean time to detect (MTTD) is how long it takes to identify that a threat is present. Mean time to respond (MTTR) is how long it takes to contain it. These are measurable numbers. Industry average MTTD without a dedicated security function is around 200 days."
              followUp="Can you show us these metrics for our environment specifically over the last quarter?"
            />
            <QuestionCard
              num="3"
              question="Have you done an ASD Essential Eight assessment of our environment?"
              detail="A proper assessment tests whether controls are actually enforced, not just configured. If they have done one, ask for the report. If they have not, ask when it will be scheduled."
              followUp="What is our current maturity level for each of the eight controls?"
            />
            <QuestionCard
              num="4"
              question="How are we patching and how quickly?"
              detail="The ASD recommends patching internet-facing applications within 48 hours of a critical vulnerability being published. Operating systems within 48 hours for extreme risk, two weeks for everything else. Monthly patching cycles leave known vulnerabilities open for up to 30 days."
              followUp="Can you show us our current patch compliance report and the average age of unpatched critical vulnerabilities?"
            />
          </div>

          {/* Page 3 - Questions 5-8 */}
          <div className="page-break px-12 py-10">
            <QuestionCard
              num="5"
              question="Is MFA enforced across all accounts, and are legacy authentication protocols blocked?"
              detail="MFA being available is not the same as MFA being enforced. Legacy authentication protocols bypass MFA entirely. If basic authentication, IMAP, or POP3 are still permitted in your Microsoft 365 environment, MFA is protecting less than you think."
              followUp="Show us the conditional access policy that blocks legacy authentication and confirm there are no exceptions."
            />
            <QuestionCard
              num="6"
              question="How are administrative privileges managed?"
              detail="How many accounts have domain admin or local admin rights? How is that list reviewed? Are IT staff working day-to-day from admin accounts?"
              followUp="Can you pull the current list of accounts with admin privileges and walk us through the last time it was reviewed?"
            />
            <QuestionCard
              num="7"
              question="Walk us through what happens when a threat is detected."
              detail="You want a specific process: who gets the alert, who investigates, what the containment steps are, how quickly isolation happens, and how you as the business are notified. A provider with a real process will answer this without hesitation."
              followUp="Has this process been tested in a tabletop exercise or simulation in the last 12 months?"
            />
            <QuestionCard
              num="8"
              question="Are our backups tested and is at least one copy stored offline or immutably?"
              detail="Backups that have never been tested may not restore. Backups stored on the same network as the systems they protect can be encrypted by ransomware along with everything else."
              followUp="When was the last time a full restore was tested from our backups, and what was the result?"
            />
          </div>

          {/* Page 4 - Questions 9-10 + What to Do */}
          <div className="page-break px-12 py-10">
            <QuestionCard
              num="9"
              question="What have you proactively recommended in the last six months that we did not ask for?"
              detail="A security-aware IT provider brings things to your attention before you think to ask. New threat patterns relevant to your industry. Configuration gaps found during routine work. Emerging risks."
              followUp="If the answer is limited, ask what threat intelligence sources they are monitoring and how that informs their recommendations."
            />
            <QuestionCard
              num="10"
              question="What is outside your scope?"
              detail="This is the most important question. Most IT providers have genuine limits to their security capability and the honest ones will tell you where those limits are. Knowing what your current provider does not cover tells you where the gaps are, which is information you need to manage your risk properly."
              followUp="Who would you recommend engaging for the areas outside your scope, and are you willing to work alongside a specialist security partner?"
            />

            <div className="mt-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-6 w-1 rounded-full" style={{ background: 'linear-gradient(180deg, #0038FF, #6231F5)' }} />
                <h2 className="text-lg font-bold text-gray-900">What to Do With the Answers</h2>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                A provider who answers all ten questions clearly, specifically, and with evidence is a provider who is genuinely on top of your security. That is worth knowing.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                A provider who cannot answer several of these questions, or who gives vague responses without specifics, is a provider whose security capability may not match what you are paying for or what you need. That is also worth knowing.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                This is not about catching anyone out. It is about understanding what you actually have in place so you can make informed decisions about your risk.
              </p>
            </div>
          </div>

          {/* Back Page */}
          <div className="page-break px-12 py-16 print-full-page flex flex-col justify-between" style={{ background: 'linear-gradient(135deg, #04050F 0%, #07091A 100%)' }}>
            <div>
              <div className="h-1 w-full mb-16" style={{ background: 'linear-gradient(90deg, #0038FF, #6231F5)' }} />
              <img src="/Primary-Reversed-Dark.png" alt="Stealth Cyber" className="h-10 mb-12" />
              <h2 className="text-3xl font-bold text-white mb-6">Want an independent view?</h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed max-w-md mb-12">
                Stealth Cyber provides independent cybersecurity assessments and managed protection for Australian professional services firms. If you want a straight read on your current security posture, get in touch.
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
