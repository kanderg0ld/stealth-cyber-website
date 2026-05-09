import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Download } from 'lucide-react'
import BreadcrumbJsonLd from '@/components/structured-data/BreadcrumbJsonLd'
import ArticleJsonLd from '@/components/structured-data/ArticleJsonLd'

export const metadata: Metadata = {
  title: 'ShinyHunters vs Instructure: 3.65 TB, 275 Million Users, and the Five Questions Every School Should Be Asking',
  description: '275 million Canvas users. 3.65 TB exfiltrated. Login pages defaced during finals week. Here\'s what happened, why ShinyHunters\' playbook keeps working, and the five questions every school should put to its security provider this week.',
  alternates: { canonical: 'https://stealthcyber.io/blog/instructure-canvas-shinyhunters' },
  openGraph: {
    title: 'ShinyHunters vs Instructure: 3.65 TB, 275M Users, and 5 Questions Every School Should Ask | Stealth Cyber',
    description: '275 million Canvas users. 3.65 TB exfiltrated. Login pages defaced during finals week. Here\'s what happened and the five questions every school should put to its security provider this week.',
    url: 'https://stealthcyber.io/blog/instructure-canvas-shinyhunters',
    type: 'article',
    publishedTime: '2026-05-09',
  },
}

export default function InstructureCanvasShinyHuntersPost() {
  return (
    <>
      <ArticleJsonLd
        title="ShinyHunters vs Instructure: 3.65 TB, 275 Million Users, and the Five Questions Every School Should Be Asking"
        description="275 million Canvas users. 3.65 TB exfiltrated. Login pages defaced during finals week. Here's what happened, why ShinyHunters' playbook keeps working, and the five questions every school should put to its security provider this week."
        url="https://stealthcyber.io/blog/instructure-canvas-shinyhunters"
        publishedAt="2026-05-09"
        authorName="Alessandra Melo"
        imageUrl={undefined}
      />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://stealthcyber.io' },
        { name: 'Blog', url: 'https://stealthcyber.io/blog' },
        { name: 'Instructure Canvas ShinyHunters Breach', url: 'https://stealthcyber.io/blog/instructure-canvas-shinyhunters' },
      ]} />

      <article className="bg-stealth-dark py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <div className="mb-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-stealth-gray text-sm hover:text-stealth-cyan transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['Threat Intelligence', 'ShinyHunters', 'Education Sector', 'SaaS Security', 'Identity'].map((tag) => (
              <span key={tag} className="px-2.5 py-1 text-xs font-medium bg-stealth-cyan/10 text-stealth-cyan rounded-full border border-stealth-cyan/20">{tag}</span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            ShinyHunters vs Instructure: 3.65 TB, 275 Million Users, and the Five Questions Every School Should Be Asking
          </h1>

          {/* Author and date */}
          <div className="flex items-center gap-3 text-sm mb-10 pb-8 border-b border-stealth-cyan/10">
            <div className="w-10 h-10 rounded-full bg-stealth-cyan/10 flex items-center justify-center text-stealth-cyan font-bold text-sm">AM</div>
            <div>
              <p className="text-white font-medium">Alessandra Melo</p>
              <p className="text-stealth-gray text-xs">Global Senior Cybersecurity Engineer, Stealth Cyber &middot; 9 May 2026</p>
            </div>
          </div>

          {/* Article body */}
          <div className="prose prose-lg prose-invert prose-cyan max-w-none prose-headings:text-white prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3 prose-p:text-stealth-gray prose-p:leading-relaxed prose-p:mb-6 prose-li:text-stealth-gray prose-strong:text-white prose-ul:my-6 prose-li:my-2">

            <p>
              On 7 May 2026, during finals week at thousands of universities, the Canvas login page stopped looking like a login page. Instead, students and faculty were greeted with a message from a criminal extortion group: <em>&ldquo;ShinyHunters has breached Instructure (again). Instead of contacting us to resolve it they ignored us and did some &lsquo;security patches&rsquo;.&rdquo;</em>
            </p>

            <p>
              The defacement was visible on roughly 330 institutional portals for about 30 minutes before Instructure took Canvas, Canvas Beta, and Canvas Test offline. By then the message had done its job &mdash; not against Instructure&apos;s engineers, but against Instructure&apos;s customers. Schools were going to start asking questions, and the questions were going to be loud.
            </p>

            <p>
              This wasn&apos;t the start of the attack. It was an escalation. Four days earlier, ShinyHunters had quietly listed Instructure on their dark-web leak site under a &ldquo;PAY OR LEAK&rdquo; banner, claiming 3.65 TB of exfiltrated data covering approximately 275 million users across 9,000 schools and 15,000 institutions. When Instructure refused to negotiate and rolled out patches, the group switched tactics &mdash; from quiet extortion to loud public pressure, using Instructure&apos;s own customers as leverage.
            </p>

            {/* Stats callout */}
            <div className="not-prose my-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-stealth-navy rounded-xl border border-stealth-cyan/10 p-6 text-center">
                <p className="text-stealth-cyan text-3xl font-bold mb-1">3.65 TB</p>
                <p className="text-stealth-gray text-xs uppercase tracking-wider">Data Exfiltrated</p>
              </div>
              <div className="bg-stealth-navy rounded-xl border border-stealth-cyan/10 p-6 text-center">
                <p className="text-stealth-cyan text-3xl font-bold mb-1">275M</p>
                <p className="text-stealth-gray text-xs uppercase tracking-wider">Individuals Affected</p>
              </div>
              <div className="bg-stealth-navy rounded-xl border border-stealth-cyan/10 p-6 text-center">
                <p className="text-stealth-cyan text-3xl font-bold mb-1">~9k / ~15k</p>
                <p className="text-stealth-gray text-xs uppercase tracking-wider">Schools / Institutions</p>
              </div>
              <div className="bg-stealth-navy rounded-xl border border-stealth-cyan/10 p-6 text-center">
                <p className="text-stealth-cyan text-3xl font-bold mb-1">2nd</p>
                <p className="text-stealth-gray text-xs uppercase tracking-wider">Breach in 2026</p>
              </div>
            </div>

            <h2>What Happened, in Order</h2>

            <p>
              <strong>30 April:</strong> Instructure detected disruption in API-dependent tools across the Canvas ecosystem.
            </p>

            <p>
              <strong>1 May:</strong> Instructure officially confirmed a cybersecurity incident and engaged forensic experts.
            </p>

            <p>
              <strong>3 May:</strong> ShinyHunters added Instructure to their &ldquo;Scattered LAPSUS$ Hunters&rdquo; data leak site under a &ldquo;PAY OR LEAK&rdquo; headline, posting 3.65 TB of data as proof. They threatened to release billions of student-teacher messages if Instructure didn&apos;t pay by 6 May.
            </p>

            <p>
              <strong>7 May:</strong> After Instructure refused to negotiate, ShinyHunters defaced approximately 330 institutional Canvas login portals via HTML injection, extending the deadline to end of day on 12 May. They also reached out directly to journalists at TechCrunch.
            </p>

            <p>
              The exposed dataset, per the group&apos;s own claims and Instructure&apos;s disclosures, includes names, institutional <code>.edu</code> email addresses, student identification numbers, and private messages between students and faculty. Instructure has stated that passwords, dates of birth, government ID, and financial information were not in scope.
            </p>

            <h2>How They Got In (and Why It Keeps Working)</h2>

            <p>
              Instructure has not yet published a forensic report, so parts of what follows are inferred from ShinyHunters&apos; documented operations against Cisco, Allianz Life, Odido, Wynn Resorts, and a long list of other SaaS-heavy victims through 2025 and 2026. The pattern is consistent enough that it&apos;s worth treating as the working theory.
            </p>

            <p>
              <strong>Initial access.</strong> Attackers likely combined misconfigured &ldquo;Free-For-Teacher&rdquo; accounts, API key weaknesses, and vishing &mdash; voice phishing &mdash; against internal administrative staff. Once an admin was on a phishing site, the attackers captured SSO credentials and real-time MFA codes, then registered their own MFA devices for persistent access. This is the same playbook that worked at Cisco and Wynn.
            </p>

            <p>
              <strong>Lateral movement.</strong> From there, the actors pivoted to Instructure&apos;s Salesforce instance. They used a tool called AuraInspector (which the group internally calls &ldquo;RapeForce&rdquo;) to identify misconfigured Salesforce Experience Cloud guest profiles and pulled data via SOQL queries. Salesforce was the access point, not the target &mdash; the target was customer records and metadata.
            </p>

            <p>
              <strong>Extortion.</strong> When Instructure declined to negotiate, the group exploited a separate vulnerability to inject HTML into Canvas login pages, turning every customer&apos;s front door into a billboard for the ransom demand. The timing &mdash; spring finals week &mdash; was deliberate. It maximised institutional pressure on the vendor.
            </p>

            <p>
              The reason this playbook keeps working is that none of the controls most organisations rely on (MFA, EDR, perimeter defences) actually <em>break</em> here. They get bypassed. The user authorises the attacker. The OAuth token gets issued legitimately. The API key works exactly as designed. The defence has to live further upstream &mdash; at the identity layer and the helpdesk &mdash; or it doesn&apos;t exist.
            </p>

            {/* Risk breakdown table */}
            <div className="not-prose my-10 overflow-hidden rounded-xl border border-stealth-cyan/10">
              <div className="bg-stealth-navy px-6 py-3 border-b border-stealth-cyan/10">
                <p className="text-white font-bold text-sm uppercase tracking-wider">ShinyHunters Attack Chain &mdash; Where Standard Controls Fail</p>
              </div>
              <div className="divide-y divide-stealth-cyan/10">
                {[
                  ['Vishing against admin staff', 'MFA approved by the user, not bypassed'],
                  ['Long-lived API keys & OAuth tokens', 'Survive password resets'],
                  ['OAuth Device Code Flow abuse', 'No phishing site needed at all'],
                  ['Misconfigured SaaS guest profiles', 'Programmatic data access via SOQL'],
                  ['HTML injection on login portals', 'Customer-facing pressure, vendor reputational damage'],
                ].map(([vector, impact]) => (
                  <div key={vector} className="flex items-center justify-between px-6 py-3 bg-stealth-dark/50">
                    <span className="text-stealth-gray text-sm">{vector}</span>
                    <span className="text-red-400 text-sm font-medium whitespace-nowrap ml-4">{impact}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2>Why This Hits Schools Harder Than Most Breaches</h2>

            <p>
              The exposed dataset &mdash; names, emails, student IDs, and Canvas messages &mdash; reads as low-severity until you think about what Canvas messaging has actually been used for. Grade disputes. Accommodation requests. Mental health check-ins. Counselling-adjacent conversations. Safeguarding matters. For most institutions, none of this had a retention policy. Whatever has accumulated for years is now potentially in the leaked dataset.
            </p>

            <p>
              The next wave of phishing won&apos;t be generic. Attackers now have real student names, real teacher names, real course titles, and real internal messages to build lures from. Expect emails that reference the assignment your student actually submitted, calls that mention the teacher they actually have, and texts that quote private messages that actually happened. Email security tuned for generic phishing won&apos;t catch this.
            </p>

            <p>
              On the operational side, every Canvas integration &mdash; gradebooks, plagiarism detectors, library systems, video tools &mdash; needs to be re-authorised against Instructure&apos;s new timestamped API keys. That&apos;s days of cleanup at minimum, on top of compliance reporting under FERPA, GDPR, and any local student data protection regime that applies. Institutions that used Canvas messaging for safeguarding may have additional obligations under child protection laws.
            </p>

            <h2>The Five Questions Every School Should Put to Its Security Provider This Week</h2>

            <p>
              If your institution uses Canvas &mdash; or any SaaS platform that ShinyHunters might pivot through next &mdash; these are the five questions to ask, today, of whoever owns your security posture. The answers tell you whether they&apos;re actually equipped for this threat or just following a generic incident-response checklist.
            </p>

            <h3>1. Have you revoked and re-issued every API key, OAuth token, and connected app tied to our Canvas environment &mdash; including legacy &ldquo;Free-For-Teacher&rdquo; accounts and integrations we may have forgotten about?</h3>

            <p>
              <strong>Why it matters.</strong> ShinyHunters&apos; playbook abuses long-lived API tokens and OAuth grants, not passwords. If your provider can&apos;t produce a current inventory of every key and what it&apos;s authorised to do, they can&apos;t tell you whether the attackers still have access. Instructure has issued new timestamped keys &mdash; every integration needs to be re-authorised against those.
            </p>

            <h3>2. What is our defence against vishing &mdash; specifically, a caller pretending to be from IT and asking a staff member to enter a code at <code>microsoft.com/devicelogin</code> or approve an MFA prompt?</h3>

            <p>
              <strong>Why it matters.</strong> This is the technique ShinyHunters used against Cisco, Allianz Life, and Wynn Resorts. Standard MFA doesn&apos;t stop it because the user authorises the attacker themselves. The defences are phishing-resistant MFA (FIDO2 keys or passkeys), Conditional Access policies that block OAuth Device Code Flow on user devices, and a helpdesk script that requires out-of-band verification before any password or MFA reset.
            </p>

            <h3>3. How will we detect, triage, and warn staff and students about phishing emails and calls that reference real course names, real teachers, and real Canvas message content?</h3>

            <p>
              <strong>Why it matters.</strong> Your existing email security is tuned to catch generic phishing. The next wave will be tailored using leaked data &mdash; sender names your staff recognise, subject lines about assignments that actually exist, references to private conversations that did happen. Your provider should be running a fresh awareness campaign this week and tightening detection rules for impersonation of internal contacts.
            </p>

            <h3>4. What sensitive content lives in Canvas messages, what is our retention policy, and can you help us purge or archive what we no longer need?</h3>

            <p>
              <strong>Why it matters.</strong> Canvas messaging has historically been used for grade disputes, accommodation requests, counseling-adjacent conversations, and safeguarding matters &mdash; often with no retention policy at all. Whatever has accumulated for years is now potentially in the leaked dataset. Going forward, the smallest message archive is the safest one. Your provider should help you set defensible retention windows and audit any free-text fields holding sensitive information.
            </p>

            <h3>5. If we discover staff or student credentials are being actively abused this week, who do we call, what&apos;s our containment playbook, and how fast can you isolate a compromised account?</h3>

            <p>
              <strong>Why it matters.</strong> The breach itself is contained at Instructure&apos;s end, but the follow-on credential abuse is just starting. You need a named contact, a documented response time, and confirmation that your provider can revoke sessions, force password resets, and pull a user off the network within minutes &mdash; not hours. If they need to &ldquo;get back to you&rdquo; on this, that&apos;s your answer.
            </p>

            <h2>Do Not Pay the Ransom</h2>

            <p>
              One last point that deserves to stand on its own. Paying does not guarantee the data is deleted, does not prevent it from being resold to other criminal groups, and directly funds the next attack. Law enforcement agencies in the US, UK, EU, and Australia consistently advise against payment, and in some jurisdictions payment may itself violate sanctions law. The decision Instructure has already made &mdash; to refuse and harden &mdash; is the right one. The decision your institution may face in the next twelve months is the same one. Make it before you&apos;re under deadline pressure, not during.
            </p>

            <h2>The Full Report</h2>

            <p>
              Stealth Cyber&apos;s threat intelligence team has published a full CTI report covering the timeline, attack methodology with mapped MITRE ATT&amp;CK techniques, a profile of ShinyHunters as a threat actor, impact assessment for institutions and individuals, and a complete set of recommendations for both schools and parents/students. It&apos;s the document you can hand to your IT provider or board this week.
            </p>
          </div>

          {/* Report download CTA */}
          <div className="mt-10 bg-gradient-to-br from-stealth-navy to-stealth-dark rounded-2xl border border-stealth-cyan/20 p-8 md:p-10">
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex w-12 h-12 rounded-lg bg-stealth-cyan/10 border border-stealth-cyan/20 items-center justify-center text-stealth-cyan flex-shrink-0">
                <Download className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-stealth-cyan text-xs font-semibold uppercase tracking-widest mb-2">CTI Report</p>
                <h3 className="text-white font-bold text-xl mb-3">Instructure (Canvas LMS) Cyberattack &mdash; Full Threat Intelligence Report</h3>
                <p className="text-stealth-gray leading-relaxed mb-6">
                  Timeline, attack methodology with MITRE ATT&amp;CK mapping, ShinyHunters threat actor profile, impact assessment, and a complete recommendations set for impacted schools, institutions, parents, and students. Prepared by Alessandra Melo, Global Senior Cybersecurity Engineer.
                </p>
                <a
                  href="/instructure-canvas-breach-report.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-stealth-cyan text-stealth-dark font-semibold text-sm rounded-lg hover:bg-white transition-colors"
                >
                  Download the Report (PDF) <Download className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 bg-stealth-navy rounded-2xl border border-stealth-cyan/10 p-8 md:p-10">
            <h3 className="text-white font-bold text-xl mb-3">Need Answers to Those Five Questions &mdash; Today?</h3>
            <p className="text-stealth-gray leading-relaxed mb-6">
              Stealth Cyber works with universities, schools, and education-sector institutions to run identity-layer assessments, lock down SaaS integrations, and stand up the response capability that ShinyHunters-style attacks demand. If your IT provider can&apos;t answer the five questions above with confidence, we can.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-stealth-cyan text-stealth-dark font-semibold text-sm rounded-lg hover:bg-white transition-colors"
              >
                Talk to Our Team <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Back to blog */}
          <div className="mt-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-stealth-gray text-sm hover:text-stealth-cyan transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
