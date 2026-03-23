import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import JsonLd from '@/components/JsonLd'
import BreadcrumbJsonLd from '@/components/structured-data/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'When the Ransom Note Arrived, Did Your Team Know What to Do Next?',
  description: 'A large Queensland government hospital ran a full-day cyber disruption exercise designed and facilitated by Stealth Cyber. The scenario tested senior leadership decision-making under realistic pressure.',
  alternates: { canonical: 'https://stealthcyber.io/case-studies/cyber-tabletop-exercise-queensland-government-health' },
  openGraph: {
    title: 'When the Ransom Note Arrived, Did Your Team Know What to Do Next? | Stealth Cyber',
    description: 'A large Queensland government hospital ran a full-day cyber disruption exercise designed and facilitated by Stealth Cyber. The scenario tested senior leadership decision-making under realistic pressure.',
    url: 'https://stealthcyber.io/case-studies/cyber-tabletop-exercise-queensland-government-health',
    type: 'article',
  },
}

export default function CaseStudyTabletopExercise() {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'When the Ransom Note Arrived, Did Your Team Know What to Do Next?',
        description: 'A large Queensland government hospital ran a full-day cyber disruption exercise designed and facilitated by Stealth Cyber. The scenario tested senior leadership decision-making under realistic pressure.',
        url: 'https://stealthcyber.io/case-studies/cyber-tabletop-exercise-queensland-government-health',
        author: {
          '@type': 'Organization',
          name: 'Stealth Cyber',
        },
        about: {
          '@id': 'https://stealthcyber.io/#organization',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Stealth Cyber',
          logo: {
            '@type': 'ImageObject',
            url: 'https://stealthcyber.io/Primary-Reversed-Dark.png',
          },
        },
      }} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://stealthcyber.io' },
        { name: 'Case Studies', url: 'https://stealthcyber.io/case-studies' },
        { name: 'Cyber Tabletop Exercise', url: 'https://stealthcyber.io/case-studies/cyber-tabletop-exercise-queensland-government-health' },
      ]} />

      <article className="bg-stealth-dark py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <div className="mb-8">
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-stealth-gray text-sm hover:text-stealth-cyan transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Case Studies
            </Link>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['Tabletop Exercise', 'Healthcare', 'Government'].map((tag) => (
              <span key={tag} className="px-2.5 py-1 text-xs font-medium bg-stealth-cyan/10 text-stealth-cyan rounded-full border border-stealth-cyan/20">{tag}</span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            When the Ransom Note Arrived, Did Your Team Know What to Do Next?
          </h1>

          {/* Meta info */}
          <div className="text-sm text-stealth-gray mb-10 pb-8 border-b border-stealth-cyan/10">
            Industry: Government health &middot; Location: Queensland, Australia &middot; Large state government hospital and health service &middot; Delivered: December 2024
          </div>

          {/* Article body */}
          <div className="prose prose-lg prose-invert prose-cyan max-w-none prose-headings:text-white prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-stealth-gray prose-p:leading-relaxed prose-p:mb-6 prose-li:text-stealth-gray prose-strong:text-white prose-ul:my-6 prose-li:my-2">

            <h2>The short version</h2>

            <p>
              A large Queensland government hospital and health service engaged Stealth Cyber to design and facilitate a full-day cyber disruption exercise. The exercise simulated a ransomware attack that disrupted clinical systems, compromised patient data, and forced the leadership team to make real-time decisions about containment, communication, and continuity of care.
            </p>

            <p>
              The goal was not to test technology. It was to test people, processes, and decision-making under pressure.
            </p>

            <h2>Why healthcare organisations run exercises like this</h2>

            <p>
              Healthcare is one of the most targeted sectors globally. In Australia, the health sector reported the highest number of data breaches to the OAIC in the second half of 2024, accounting for 12% of all notifications. Ransomware attacks against hospitals have disrupted clinical operations, delayed patient care, and exposed sensitive health records.
            </p>

            <p>
              The consequences of a cyber incident in healthcare are not limited to data loss or financial cost. Disruption to clinical systems can directly affect patient safety. When electronic medical records go offline, when pathology results cannot be delivered, when medication management systems are unavailable, the impact is measured in clinical risk, not just downtime.
            </p>

            <p>
              Most healthcare organisations have incident response plans. Fewer have tested those plans under realistic conditions. A tabletop exercise bridges that gap. It puts the plan in front of the people who will need to execute it and tests whether it works when the pressure is real.
            </p>

            <h2>What Stealth Cyber designed and delivered</h2>

            <p>
              Stealth Cyber designed a bespoke exercise scenario called <strong>Operation Silent Pulse</strong>. The scenario was built specifically for the hospital and health service, incorporating their systems, their organisational structure, their regulatory obligations, and their real-world threat landscape.
            </p>

            <p>
              The exercise was structured in four phases, delivered across a full day.
            </p>

            <p>
              <strong>Phase 1: Initial detection.</strong> The scenario began with early indicators of compromise. Unusual network activity, a handful of failed logins, and a single workstation behaving unexpectedly. The leadership team had to assess the situation with incomplete information and decide how to respond.
            </p>

            <p>
              <strong>Phase 2: Escalation.</strong> The scenario escalated. Ransomware had encrypted file servers and clinical application databases. Electronic medical records were inaccessible. Pathology systems were offline. The team had to activate their incident response plan, coordinate across departments, and begin assessing the impact on patient care.
            </p>

            <p>
              <strong>Phase 3: External pressure.</strong> Media enquiries began. The attacker published a sample of stolen patient records on a leak site. Regulatory notification obligations were triggered. The team had to manage communications with patients, media, government stakeholders, and the OAIC while simultaneously managing the technical response.
            </p>

            <p>
              <strong>Phase 4: Recovery and review.</strong> The scenario shifted to recovery. Systems needed to be restored in priority order. Clinical operations needed to resume safely. The team had to make decisions about what to bring back online first, how to verify system integrity, and how to communicate the recovery timeline to staff and patients.
            </p>

            <p>
              Each phase included facilitated discussion, real-time decision points, and injects designed to test specific aspects of the organisation&apos;s preparedness.
            </p>

            <h2>What the deliverables covered</h2>

            <p>
              Following the exercise, Stealth Cyber delivered a comprehensive package of documentation and recommendations.
            </p>

            <p>
              <strong>Incident response plan review.</strong> We assessed the existing incident response plan against the decisions and gaps that emerged during the exercise. Where the plan was unclear, incomplete, or untested, we provided specific recommendations for improvement.
            </p>

            <p>
              <strong>Communications plan.</strong> We delivered a crisis communications framework covering internal staff communications, patient notifications, media responses, and regulatory reporting. This included template language and escalation criteria for different severity levels.
            </p>

            <p>
              <strong>Operational playbooks.</strong> We produced role-specific playbooks for key functions including IT, clinical operations, executive leadership, communications, and legal. Each playbook outlined the specific actions, decisions, and escalation points relevant to that role during a cyber incident.
            </p>

            <h2>What exercises like this reveal</h2>

            <p>
              Every organisation believes their incident response plan will work until they test it. Exercises consistently reveal gaps that are invisible on paper.
            </p>

            <p>
              Common findings include unclear escalation paths, assumptions about who is responsible for specific decisions, communication breakdowns between technical and non-technical teams, and a lack of pre-prepared communications for external stakeholders.
            </p>

            <p>
              In healthcare specifically, exercises often reveal tension between the clinical imperative to maintain patient care and the security imperative to isolate compromised systems. These are not decisions that should be made for the first time during a real incident.
            </p>

            <p>
              The value of an exercise is not in proving that the plan works. It is in finding out where it does not, while the consequences are still hypothetical.
            </p>

            <h2>Who this is for</h2>

            <p>
              Stealth Cyber designs and delivers cyber disruption exercises for organisations across all sectors, with particular experience in healthcare, government, professional services, and critical infrastructure.
            </p>

            <p>
              Our exercises are built for your organisation, not adapted from a generic template. We incorporate your systems, your people, your regulatory environment, and your real threat landscape. We facilitate the exercise, manage the scenario, and deliver actionable documentation that your team can use immediately.
            </p>

            <p>
              If your organisation has an incident response plan that has never been tested, or if your last exercise was more than 12 months ago, it is time to find out whether your plan holds up under pressure.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-stealth-navy rounded-2xl border border-stealth-cyan/10 p-8 md:p-10">
            <h3 className="text-white font-bold text-xl mb-3">Test Your Incident Response</h3>
            <p className="text-stealth-gray leading-relaxed mb-6">
              Stealth Cyber designs and facilitates cyber disruption exercises tailored to your organisation. Find out whether your team, your plan, and your communications hold up when the pressure is real.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-stealth-cyan text-stealth-dark font-semibold text-sm rounded-lg hover:bg-white transition-colors"
            >
              Talk to Stealth Cyber about designing a cyber exercise for your organisation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Back link */}
          <div className="mt-8">
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-stealth-gray text-sm hover:text-stealth-cyan transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Case Studies
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
