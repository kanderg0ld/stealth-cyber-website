import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import BreadcrumbJsonLd from '@/components/structured-data/BreadcrumbJsonLd'
import ArticleJsonLd from '@/components/structured-data/ArticleJsonLd'

export const metadata: Metadata = {
  title: 'Is Your IT Provider Really Providing Optimal Cyber Protection? 10 Things to Consider',
  description: 'Most Australian SMBs trust their IT provider to handle cybersecurity. Here are 10 questions to ask to find out if that trust is justified.',
  alternates: { canonical: 'https://stealthcyber.io/blog/is-your-it-provider-protecting-you' },
  openGraph: {
    title: 'Is Your IT Provider Really Providing Optimal Cyber Protection? | Stealth Cyber',
    description: 'Most Australian SMBs trust their IT provider to handle cybersecurity. Here are 10 questions to ask to find out if that trust is justified.',
    url: 'https://stealthcyber.io/blog/is-your-it-provider-protecting-you',
    type: 'article',
    publishedTime: '2026-03-18',
  },
}

export default function ITProviderPost() {
  return (
    <>
      <ArticleJsonLd
        title="Is Your IT Provider Really Providing Optimal Cyber Protection? 10 Things to Consider"
        description="Most Australian SMBs trust their IT provider to handle cybersecurity. Here are 10 questions to ask to find out if that trust is justified."
        url="https://stealthcyber.io/blog/is-your-it-provider-protecting-you"
        publishedAt="2026-03-18"
        authorName="Chris McDonald"
        imageUrl={undefined}
      />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://stealthcyber.io' },
        { name: 'Blog', url: 'https://stealthcyber.io/blog' },
        { name: 'Is Your IT Provider Protecting You?', url: 'https://stealthcyber.io/blog/is-your-it-provider-protecting-you' },
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
            {['SMB Security', 'IT Provider', 'Managed Security', 'Essential Eight'].map((tag) => (
              <span key={tag} className="px-2.5 py-1 text-xs font-medium bg-stealth-cyan/10 text-stealth-cyan rounded-full border border-stealth-cyan/20">{tag}</span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Is Your IT Provider Really Providing Optimal Cyber Protection? 10 Things to Consider
          </h1>

          {/* Author and date */}
          <div className="flex items-center gap-3 text-sm mb-10 pb-8 border-b border-stealth-cyan/10">
            <div className="w-10 h-10 rounded-full bg-stealth-cyan/10 flex items-center justify-center text-stealth-cyan font-bold text-sm">CM</div>
            <div>
              <p className="text-white font-medium">Chris McDonald</p>
              <p className="text-stealth-gray text-xs">Stealth Cyber &middot; 18 March 2026</p>
            </div>
          </div>

          {/* Article body */}
          <div className="prose prose-lg prose-invert prose-cyan max-w-none prose-headings:text-white prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3 prose-p:text-stealth-gray prose-p:leading-relaxed prose-p:mb-6 prose-li:text-stealth-gray prose-strong:text-white prose-ul:my-6 prose-li:my-2">
            <p>
              Most Australian SMBs trust their IT provider to handle cybersecurity. That trust is often misplaced, and I say that without malice toward IT providers, because the problem is structural more than it is about individual competence.
            </p>

            <p>
              IT management and cybersecurity are different disciplines. An IT provider&apos;s job is to keep your systems running, provision users, manage licensing, and respond to helpdesk tickets. A cybersecurity firm&apos;s job is to assume that someone is actively trying to break into your environment and make that as difficult as possible. These objectives do not conflict, but they are not the same thing, and the skill sets, tooling, and mindset required are genuinely different.
            </p>

            <p>
              The question is not whether your IT provider is doing their job well. It is whether their job covers what you actually need.
            </p>

            <p>
              Here are ten questions worth asking.
            </p>

            <h2>1. Do They Have 24/7 Threat Monitoring Across Your Endpoints?</h2>

            <p>
              Attackers do not work business hours. The most destructive phases of a breach, lateral movement and ransomware deployment, frequently happen on weekends and public holidays specifically because that is when detection is slowest.
            </p>

            <p>
              Ask your IT provider directly: who is watching your environment at 2am on a Saturday? What tool generates the alert, and who receives it? How quickly is a human reviewing it?
            </p>

            <p>
              If the answer is &quot;we have antivirus and it sends alerts to our ticketing system,&quot; that is not 24/7 monitoring. That is scheduled antivirus scanning with a notification queue.
            </p>

            <h2>2. What Is Their Mean Time to Detect and Respond?</h2>

            <p>
              This is a measurable metric. Mean time to detect (MTTD) is how long it takes to identify that something malicious is happening. Mean time to respond (MTTR) is how long it takes to contain it.
            </p>

            <p>
              The industry average MTTD for organisations without a dedicated security operations function sits around 200 days. That is not a typo. Attackers frequently live inside environments for months before being detected, often discovered only when they deploy ransomware or a third party notifies the victim.
            </p>

            <p>
              Ask your provider what their MTTD and MTTR benchmarks are. If they cannot answer this question with a number, they are not measuring it, and if they are not measuring it, they do not know how quickly threats are being identified in your environment.
            </p>

            <h2>3. Are They Doing Proactive Threat Hunting or Just Responding to Alerts?</h2>

            <p>
              Alert response and threat hunting are not the same activity. Alert response means: a tool generates a notification and a technician investigates it. Threat hunting means: an analyst actively goes looking for indicators of compromise that have not yet triggered an alert.
            </p>

            <p>
              Most managed IT providers do the former. Very few do the latter, because threat hunting requires dedicated security analysts and purpose-built tooling. It is also where you find the threats that bypassed your detection stack.
            </p>

            <p>
              If your provider&apos;s security process starts when an alert fires, they are not catching the things that were designed to avoid your alerts.
            </p>

            <h2>4. Have They Conducted an Essential Eight Assessment of Your Environment?</h2>

            <p>
              If your IT provider has not done a formal ASD Essential Eight assessment of your environment, you do not have a baseline. You do not know which controls are in place, which are partially implemented, and which are missing entirely. You are managing risk you cannot see.
            </p>

            <p>
              A proper Essential Eight assessment is not a questionnaire. It involves reviewing actual configurations, testing whether controls are enforced rather than just enabled, and verifying that the maturity level claimed reflects what is actually happening in the environment. Ask for the assessment report. If there is not one, ask when it will be done.
            </p>

            <h2>5. What Happens When a Threat Is Detected? Walk Me Through the Process.</h2>

            <p>
              This question reveals more than almost anything else. A provider with a real incident response capability will be able to describe their process specifically: who is notified, in what order, what the containment steps look like, how long isolation takes, and what the communication protocol to your leadership team is.
            </p>

            <p>
              A provider without that capability will give you a vague answer about escalating to their team and following up with you. Vague answers in this context are meaningful data.
            </p>

            <p>
              Incident response is not something you want to be designing for the first time during an active incident.
            </p>

            <h2>6. Are They Patching Applications and Operating Systems to ASD-Recommended Timeframes?</h2>

            <p>
              The ASD&apos;s guidance for internet-facing applications is 48 hours for critical vulnerabilities. For operating systems, it is 48 hours for extreme risk. Two weeks for everything else.
            </p>

            <p>
              Most managed IT environments patch monthly, sometimes quarterly. The gap between &quot;we patch regularly&quot; and &quot;we patch to ASD-recommended timeframes&quot; is the gap that attackers operate in. Ask for the patch compliance report for your environment. Look at how long critical vulnerabilities are sitting unpatched.
            </p>

            <p>
              If your provider is patching on a monthly cycle and calling it current, that is not current. That is a 30-day open window for known exploits, every month.
            </p>

            <h2>7. Is Multi-Factor Authentication Enforced Across All Remote Access and Privileged Accounts?</h2>

            <p>
              MFA being &quot;available&quot; is not the same as MFA being enforced. Ask whether MFA is mandatory for all remote access to your environment, all administrative accounts, and all cloud service access including Microsoft 365, email, and any line-of-business applications.
            </p>

            <p>
              Then ask whether legacy authentication protocols are blocked. Legacy authentication bypasses MFA entirely. If your environment still allows basic authentication, IMAP, or POP3 connections to Microsoft 365, MFA is protecting significantly less than you think it is.
            </p>

            <p>
              This is one of the most common gaps we find in assessments, and it is one of the easiest to close.
            </p>

            <h2>8. How Are Administrative Privileges Managed in Your Environment?</h2>

            <p>
              Admin credentials are the target in almost every intrusion that escalates beyond initial access. If attackers get administrative credentials, they can move laterally, exfiltrate data, deploy ransomware, and establish persistence at will.
            </p>

            <p>
              Ask how many accounts in your environment have domain admin or local admin rights. Ask how that list is reviewed and validated. Ask whether your day-to-day IT provider staff are working from admin accounts routinely. Ask whether privileged access workstations are used for high-privilege tasks.
            </p>

            <p>
              Environments where admin rights are distributed liberally and managed informally are environments where a single compromised credential has catastrophic potential.
            </p>

            <h2>9. Do They Have Cyber Liability Insurance and a Formal Incident Response Retainer?</h2>

            <p>
              This question matters for reasons beyond the obvious. A provider with cyber liability insurance and a formal incident response capability has made an active investment in being prepared for security incidents. One without it has not.
            </p>

            <p>
              It also matters for your own insurance. Your cyber liability policy may have specific requirements around how incidents are detected, documented, and reported. If your provider does not have a formal IR process, there is a real risk that a claim gets complicated.
            </p>

            <p>
              Ask what their incident response procedure is and whether they have a retainer with a specialist IR firm or handle it in-house. Ask what their obligations are to notify you and what the documentation process looks like.
            </p>

            <h2>10. When Did They Last Recommend Something You Did Not Ask For?</h2>

            <p>
              This is the qualitative question, and in some ways the most important one.
            </p>

            <p>
              A provider who is genuinely on top of your security posture will proactively bring things to your attention. New threat intelligence relevant to your industry. A configuration gap they found during routine work. A change in the threat landscape that affects how you should be thinking about a specific control.
            </p>

            <p>
              If every security recommendation your IT provider has made in the last 12 months came in response to something you asked about, or as a line item on a renewal invoice, they are not running a proactive security function. They are waiting for you to define the scope.
            </p>

            <p>
              Proactive protection means someone is thinking about your exposure before you are. If that is not happening, you are not getting what you are paying for.
            </p>

            <h2>The Honest Summary</h2>

            <p>
              None of these questions are tricks. They are baseline expectations for any provider positioning themselves as responsible for your cyber security outcomes. A capable provider should be able to answer all of them clearly, with specifics.
            </p>

            <p>
              If you work through this list and find significant gaps, that is useful information. It does not necessarily mean you need to change providers. It does mean you need an honest conversation about what your current arrangement covers and what it does not, so you can make an informed decision about your actual risk exposure.
            </p>

            <p>
              If you want an independent view of where your environment sits, Stealth Cyber offers cyber risk assessments for Australian SMBs. No sales pitch. Just a straight read on what you have and what you are missing.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-stealth-navy rounded-2xl border border-stealth-cyan/10 p-8 md:p-10">
            <h3 className="text-white font-bold text-xl mb-3">Want an Independent View?</h3>
            <p className="text-stealth-gray leading-relaxed mb-6">
              Take our free self-assessment for an instant score, or speak with our team about a full review of your environment. No obligation, no jargon.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/assessment"
                className="inline-flex items-center gap-2 px-6 py-3 bg-stealth-cyan text-stealth-dark font-semibold text-sm rounded-lg hover:bg-white transition-colors"
              >
                Free Self-Assessment <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-stealth-cyan/40 text-white font-semibold text-sm rounded-lg hover:border-stealth-cyan/60 transition-colors"
              >
                Speak With Our Team
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
