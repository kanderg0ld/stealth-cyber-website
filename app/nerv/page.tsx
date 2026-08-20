import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Disclosure from '@/components/Disclosure'
import BreadcrumbJsonLd from '@/components/structured-data/BreadcrumbJsonLd'
import SoftwareProductJsonLd from '@/components/structured-data/SoftwareProductJsonLd'
import {
  modules,
  killChain,
  socAgents,
  deployment,
  tiers,
  fit,
  blindSpots,
  costs,
  credibility,
  toneText,
} from './nerv-data'

export const metadata: Metadata = {
  title: 'Nerv Platform | Seven Modules, One Security Platform',
  description:
    'Nerv is a seven-module security platform covering endpoint, identity, browser, machine identity, coding agents and AI systems, correlated by an AI security operations centre. From 10 seats. Built by Stealth Cyber.',
  keywords: [
    'AI security platform', 'endpoint detection and response', 'AI data leakage prevention',
    'identity threat detection', 'prompt injection detection', 'machine identity security',
    'non-human identity', 'coding agent security', 'AI SOC', 'MDR platform Australia',
    'AI security awareness training',
  ],
  openGraph: {
    title: 'Nerv Platform | Seven Modules, One Security Platform',
    description:
      'Seven modules. One platform. Zero blind spots. Endpoint, identity, browser, machine identity, coding agents and AI systems, correlated into one incident timeline.',
    url: 'https://stealthcyber.io/nerv',
  },
  alternates: { canonical: 'https://stealthcyber.io/nerv' },
}

const coreModules = modules.filter((m) => m.group === 'core')
const aiModules = modules.filter((m) => m.group === 'ai')

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-[0.6875rem] font-medium tracking-[0.18em] text-stealth-dim uppercase">
      {children}
    </p>
  )
}

/**
 * Each module is a whole-card link to its own page. The detail that used to
 * live inline here — coverage lists, differentiators, comparison tables — now
 * sits on /nerv/<slug>, which is what took this page from ~21,000px to a
 * length someone will actually scroll.
 */
function ModuleCard({ m }: { m: (typeof modules)[number] }) {
  return (
    <Link
      href={`/nerv/${m.slug}`}
      className="group relative flex flex-col border-t border-nerv-hair py-5 transition-colors hover:border-white/25"
    >
      <span className="mb-1.5 flex flex-wrap items-baseline gap-x-3">
        <span className={`text-sm font-semibold ${toneText[m.tone]}`}>{m.code}</span>
        <span className="text-xs text-stealth-dim">{m.surface}</span>
      </span>
      <span className="mb-4 max-w-[46ch] flex-1 text-sm leading-relaxed text-stealth-gray">
        {m.tagline}
      </span>
      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white">
        {m.title}
        <ArrowRight
          className="h-3.5 w-3.5 transition-transform duration-200 ease-out-quart group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </Link>
  )
}

export default function NervPage() {
  return (
    // Product tier: Void Black ground, magenta and Nerv cyan poles. Electric
    // Blue #3CE4F5 is absent throughout — the kit bans it beside Nerv Cyan.
    <div className="surface-void">
      <SoftwareProductJsonLd
        name="Nerv"
        description="A seven-module security platform covering endpoint, browser, human identity, machine identity, coding agents and AI systems, correlated by an AI security operations centre."
        url="https://stealthcyber.io/nerv"
        offers={tiers.map((t) => ({
          name: t.name,
          price: t.price,
          description: t.includes,
        }))}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://stealthcyber.io' },
          { name: 'Nerv Platform', url: 'https://stealthcyber.io/nerv' },
        ]}
      />

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="bg-void-bloom pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-[clamp(3.5rem,9vh,6rem)] pb-[clamp(2.5rem,6vw,4rem)] sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="animate-rise mb-6 text-[0.6875rem] font-medium tracking-[0.22em] text-nerv-cyan uppercase">
              The Nerv platform
            </p>
            <h1
              className="animate-rise mb-7 text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white"
              style={{ animationDelay: '60ms' }}
            >
              Seven modules. One platform.{' '}
              <span className="text-gradient-nerv">Zero blind spots.</span>
            </h1>
            <p
              className="animate-rise mb-9 max-w-[64ch] text-lg leading-relaxed text-stealth-gray"
              style={{ animationDelay: '120ms' }}
            >
              Four modules cover the surfaces you already know you have. Three cover the
              ones AI created. All seven share one console, one agent estate and one AI
              security operations centre.
            </p>
            <div
              className="animate-rise flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: '180ms' }}
            >
              <Link href="/contact" className="btn-primary group">
                Book A Technical Walkthrough
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 ease-out-quart group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link href="#pricing" className="btn-secondary">
                See Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── The seven modules ──────────────────────────────────────────────── */}
      <section id="modules" className="scroll-mt-20">
        <div className="rule-nerv" />
        <div className="mx-auto max-w-7xl px-4 py-[clamp(3rem,7vw,5rem)] sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <Eyebrow>The platform</Eyebrow>
            <h2 className="mb-4 text-[clamp(1.875rem,3.4vw,2.5rem)] font-bold text-white">
              One platform. Seven modules.
            </h2>
            <p className="max-w-[62ch] leading-relaxed text-stealth-gray">
              Buying seven best-of-breed products from seven vendors gets you seven
              opinions about the same attacker. Nerv correlates across all of them.
              Pick any module for the detail.
            </p>
          </div>

          <div className="space-y-10">
            {[
              { label: 'Core coverage', list: coreModules },
              { label: 'The AI layer', list: aiModules },
            ].map((group) => (
              <div key={group.label}>
                <p className="mb-4 text-[0.6875rem] font-medium tracking-[0.16em] text-stealth-dim uppercase">
                  {group.label}
                </p>
                <div className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
                  {group.list.map((m) => (
                    <ModuleCard key={m.slug} m={m} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why it exists ──────────────────────────────────────────────────── */}
      <section className="border-t border-nerv-hair py-[clamp(3rem,7vw,5rem)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-x-16 gap-y-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Eyebrow>Why Nerv exists</Eyebrow>
              <h2 className="mb-5 text-[clamp(1.875rem,3.4vw,2.5rem)] font-bold text-white">
                Four attack surfaces. Four consoles. Nobody owns the AI one.
              </h2>
              <p className="mb-6 max-w-[56ch] leading-relaxed text-stealth-gray">
                Most small and mid-sized stacks are assembled from separate products
                bought at separate times. Each one sees its own slice of an attack. None
                of them see the attack — and none of them are watching the AI surface at
                all.
              </p>
              <p className="max-w-[56ch] leading-relaxed text-nerv-cyan">
                This is the surface Nerv was built for. The other three came with it.
              </p>
            </div>

            <div className="min-w-0 lg:col-span-7">
              <dl className="band-nerv mb-8 grid grid-cols-1 sm:grid-cols-3">
                {[
                  { value: '80%', label: 'of breaches involve compromised credentials' },
                  { value: '78%', label: 'of organisations have no AI data leakage controls' },
                  { value: '#1', label: 'prompt injection, OWASP Top 10 for LLM apps' },
                ].map((s) => (
                  <div key={s.value} className="py-5 sm:px-6 sm:first:pl-0 sm:last:pr-0">
                    <dd className="text-[2rem] leading-none font-bold text-white">
                      {s.value}
                    </dd>
                    <dt className="mt-2 text-xs leading-snug text-stealth-dim">{s.label}</dt>
                  </div>
                ))}
              </dl>
              <p className="mb-8 text-xs leading-relaxed text-stealth-dim">
                Sources: industry breach reporting and the OWASP Top 10 for LLM
                Applications. Figures are indicative of market conditions, not Stealth
                Cyber client outcomes.
              </p>

              {/* The supporting argument, available but not blocking the scroll. */}
              <Disclosure summary="What four consoles cost you" hint="4 failure modes">
                <dl>
                  {costs.map((c, i) => (
                    <div key={c.title} className="hair-nerv-t py-4">
                      <dt className="mb-1.5 flex gap-3 text-sm font-semibold text-white">
                        <span className="text-stealth-dim tabular-nums">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        {c.title}
                      </dt>
                      <dd className="max-w-[64ch] pl-8 text-sm leading-relaxed text-stealth-gray">
                        {c.body}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Disclosure>
              <Disclosure
                summary="Why your existing stack cannot see the AI surface"
                hint="4 reasons"
              >
                <dl>
                  {blindSpots.map((b) => (
                    <div key={b.title} className="hair-nerv-t py-4">
                      <dt className="mb-1 text-sm font-semibold text-white">{b.title}</dt>
                      <dd className="max-w-[64ch] text-sm leading-relaxed text-stealth-gray">
                        {b.body}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Disclosure>
            </div>
          </div>
        </div>
      </section>

      {/* ── One attacker, one timeline ─────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-nerv-hair py-[clamp(3rem,7vw,5rem)]">
        <div className="bg-void-bloom pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-x-16 gap-y-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-24">
                <Eyebrow>The difference</Eyebrow>
                <h2 className="mb-5 text-[clamp(1.875rem,3.4vw,2.5rem)] font-bold text-white">
                  One attacker. One timeline.
                </h2>
                <p className="mb-8 max-w-[54ch] leading-relaxed text-stealth-gray">
                  A single intrusion crossing endpoint, identity, machine identity,
                  browser and AI, correlated into one incident with one response, by the
                  platform rather than an analyst reading seven consoles.
                </p>
                <div className="hair-nerv-t pt-5">
                  <p className="text-[3rem] leading-none font-bold text-white">47</p>
                  <p className="mt-2 text-[0.6875rem] font-medium tracking-[0.16em] text-stealth-dim uppercase">
                    Seconds, end to end
                  </p>
                  <p className="mt-4 max-w-[46ch] text-xs leading-relaxed text-stealth-dim">
                    First detection to full containment in the scenario opposite, with no
                    human intervention. Measured in Stealth Cyber lab testing, not a
                    client service level.
                  </p>
                </div>
              </div>
            </div>
            <ol className="min-w-0 lg:col-span-7">
              {killChain.map((k) => (
                <li key={k.step} className="hair-nerv-t py-4">
                  <div className="mb-1.5 flex items-baseline gap-3">
                    <span className="text-xs text-stealth-dim tabular-nums">{k.step}</span>
                    <span
                      className={`text-[0.6875rem] font-semibold tracking-[0.14em] uppercase ${toneText[k.tone]}`}
                    >
                      {k.module}
                    </span>
                  </div>
                  <p className="max-w-[60ch] pl-8 text-sm leading-relaxed text-stealth-gray">
                    {k.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── AI SOC + deployment ────────────────────────────────────────────── */}
      <section className="border-t border-nerv-hair py-[clamp(3rem,7vw,5rem)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <Eyebrow>Operations</Eyebrow>
            <h2 className="mb-4 text-[clamp(1.875rem,3.4vw,2.5rem)] font-bold text-white">
              Every alert triaged. Not every alert queued.
            </h2>
            <p className="max-w-[64ch] leading-relaxed text-stealth-gray">
              Alerts from all seven modules are triaged, investigated and actioned by
              eight specialised AI agents, with Stealth Cyber analysts supervising and
              handling escalation. Automation does the volume. Practitioners do the
              judgement.
            </p>
          </div>

          <dl className="mb-4 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
            {socAgents.map((a) => (
              <div key={a.name} className="hair-nerv-t py-4">
                <dt className="mb-1 flex items-baseline gap-2.5">
                  <span className="text-sm font-bold text-nerv-cyan">{a.initial}</span>
                  <span className="text-sm font-semibold tracking-wide text-white uppercase">
                    {a.name}
                  </span>
                </dt>
                <dd className="text-xs leading-relaxed text-stealth-dim">{a.role}</dd>
              </div>
            ))}
          </dl>
          <p className="mb-10 text-xs leading-relaxed text-stealth-dim">
            Agent names describe automated functions within the Nerv platform. They are
            software, supervised by the Stealth Cyber SOC team.
          </p>

          <div className="max-w-3xl">
            <Disclosure summary="How it deploys" hint="7 surfaces, days not quarters">
              <p className="mb-4 max-w-[64ch] text-sm leading-relaxed text-stealth-gray">
                No appliances, no log shipping project, no professional services
                engagement to get to first value. One multi-tenant console across all
                seven modules, with per-client views for MSPs and a fleet view for you.
              </p>
              <dl>
                {deployment.map((d) => (
                  <div key={d.surface} className="hair-nerv-t py-4">
                    <dt className="mb-1 text-[0.6875rem] font-medium tracking-[0.16em] text-nerv-cyan uppercase">
                      {d.surface}
                    </dt>
                    <dd className="max-w-[64ch] text-sm leading-relaxed text-stealth-gray">
                      {d.detail}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 max-w-[64ch] text-sm leading-relaxed text-stealth-gray">
                <span className="font-semibold text-white">
                  And because we are also an MSSP:
                </span>{' '}
                you can run Nerv yourself, or hand the console to our SOC and receive
                outcomes instead of alerts. Same platform, your choice of who watches it.
              </p>
            </Disclosure>
          </div>
        </div>
      </section>

      {/* ── What this replaces ─────────────────────────────────────────────── */}
      <section className="border-t border-nerv-hair py-[clamp(3rem,7vw,5rem)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <Eyebrow>The real comparison</Eyebrow>
            <h2 className="mb-4 text-[clamp(1.875rem,3.4vw,2.5rem)] font-bold text-white">
              What this actually replaces
            </h2>
            <p className="max-w-[64ch] leading-relaxed text-stealth-gray">
              Nerv is not a line item on your antivirus renewal. At this size, the honest
              alternative is hiring the security function yourself, or continuing to have
              nobody own it. So compare it to that.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                label: 'Hire one security analyst',
                price: '$135K',
                unit: 'per year, fully loaded',
                highlight: false,
                points: [
                  'Security tooling still to be purchased',
                  'Available around 38 hours a week',
                  'One person, one set of skills',
                ],
              },
              {
                label: 'Nerv Enterprise, ten seats',
                price: '$19.8K',
                unit: 'per year, all seven modules',
                highlight: true,
                points: [
                  'Every module included, nothing to add',
                  'AI SOC triage around the clock',
                  'Live in days, not quarters',
                ],
              },
            ].map((col) => (
              <div
                key={col.label}
                className={`border-t pt-6 ${col.highlight ? 'border-nerv-cyan/50' : 'border-nerv-hair'}`}
              >
                <p className="mb-4 text-[0.6875rem] font-medium tracking-[0.16em] text-stealth-dim uppercase">
                  {col.label}
                </p>
                <p
                  className={`text-[clamp(2.25rem,4.5vw,3rem)] leading-none font-bold ${col.highlight ? 'text-nerv-cyan' : 'text-white'}`}
                >
                  {col.price}
                </p>
                <p className="mt-2 mb-5 text-sm text-stealth-dim">{col.unit}</p>
                <ul className="space-y-2">
                  {col.points.map((p) => (
                    <li key={p} className="text-sm leading-relaxed text-stealth-gray">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-3xl">
            <Disclosure summary="What the headcount number leaves out" hint="3 caveats">
              <dl>
                {[
                  {
                    title: 'You cannot hire your way to round the clock.',
                    body: 'Genuine 24/7 coverage is three to five people. One analyst is asleep for two thirds of the week, and attackers have always known which two thirds.',
                  },
                  {
                    title: 'The salary is the start, not the total.',
                    body: 'That analyst still needs an endpoint tool, an identity tool, a log platform and a training platform before they can do the job you hired them for.',
                  },
                  {
                    title: 'This is not an argument against hiring.',
                    body: 'When you do hire, that person starts with a platform already running and a year of correlated history behind them, rather than a purchase order and a six month rollout.',
                  },
                ].map((c) => (
                  <div key={c.title} className="hair-nerv-t py-4">
                    <dt className="mb-1.5 text-sm font-semibold text-white">{c.title}</dt>
                    <dd className="max-w-[64ch] text-sm leading-relaxed text-stealth-gray">
                      {c.body}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 max-w-[86ch] text-xs leading-relaxed text-stealth-dim">
                Salary range from published Australian market salary data for cyber
                security analysts, August 2026. The loaded figure adds superannuation at
                the 12% guarantee rate plus an allowance for recruitment, equipment and
                leave cover, and excludes payroll tax, which varies by state and
                threshold. The Nerv figure is Enterprise list pricing at the ten seat
                minimum.
              </p>
            </Disclosure>
          </div>
        </div>
      </section>

      {/* ── Commercials ────────────────────────────────────────────────────── */}
      <section
        id="pricing"
        className="scroll-mt-20 border-t border-nerv-hair py-[clamp(3rem,7vw,5rem)]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <Eyebrow>Commercials</Eyebrow>
            <h2 className="mb-4 text-[clamp(1.875rem,3.4vw,2.5rem)] font-bold text-white">
              Per user. Per month. From ten seats.
            </h2>
            <p className="mb-4 max-w-[64ch] leading-relaxed text-stealth-gray">
              One price covers every module in your tier, for every user, on every device
              they use. AI triage, multi-tenancy, hardening audits, training content and
              the SOC are inclusions, not upgrade paths.
            </p>
            <p className="text-[0.6875rem] font-medium tracking-[0.16em] text-stealth-dim uppercase">
              Ten seat minimum · No enterprise floor · Once off onboarding fee
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`flex flex-col border-t pt-6 ${t.featured ? 'border-nerv-cyan/60' : 'border-nerv-hair'}`}
              >
                <h3
                  className={`mb-1 text-base font-semibold ${t.featured ? 'text-nerv-cyan' : 'text-white'}`}
                >
                  {t.name}
                </h3>
                <p className="mb-4 text-xs text-stealth-dim">{t.includes}</p>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-stealth-gray">
                  {t.body}
                </p>
                <p className="text-[2rem] leading-none font-bold text-white">{t.price}</p>
                <p className="mt-1.5 text-xs text-stealth-dim">{t.unit}</p>
                <p className="mt-1 text-xs text-stealth-dim">{t.atTen}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-[86ch] text-xs leading-relaxed text-stealth-dim">
            Indicative list pricing in AUD per user per month, excluding GST, based on a
            ten seat minimum and an annual commitment. Volume tiers apply above fifty
            seats. Final pricing depends on seat count, term and managed service scope,
            and is confirmed in a written proposal.
          </p>
        </div>
      </section>

      {/* ── Fit, credibility and close ─────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-nerv-hair py-[clamp(3rem,7vw,5rem)]">
        <div className="bg-void-bloom pointer-events-none absolute inset-0 opacity-80" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-x-16 gap-y-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Eyebrow>Fit</Eyebrow>
              <h2 className="mb-5 text-[clamp(1.875rem,3.4vw,2.5rem)] font-bold text-white">
                Practitioner-led. Not vendor-led.
              </h2>
              <p className="mb-6 max-w-[54ch] leading-relaxed text-stealth-gray">
                Nerv was built by the team that runs the incident response engagements,
                the red team work and the Essential Eight uplifts. Every detection exists
                because we needed it on a real job. We are not a reseller with a
                dashboard.
              </p>
              <p className="max-w-[54ch] text-sm leading-relaxed text-stealth-dim">
                Not the right fit for teams under ten seats, or large enterprises with a
                mature SOC already running a platform they are happy with. We will tell
                you that in the first meeting rather than the fourth.
              </p>
            </div>

            <div className="min-w-0 lg:col-span-7">
              <Disclosure
                summary="Where Nerv is the obvious answer"
                hint="5 profiles"
                defaultOpen
              >
                <dl>
                  {fit.map((f, i) => (
                    <div key={f.title} className="hair-nerv-t py-4">
                      <dt className="mb-1.5 flex gap-3 text-sm font-semibold text-white">
                        <span className="text-stealth-dim tabular-nums">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        {f.title}
                      </dt>
                      <dd className="max-w-[60ch] pl-8 text-sm leading-relaxed text-stealth-gray">
                        {f.body}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Disclosure>
              <Disclosure summary="Why Stealth Cyber" hint="4 credentials">
                <dl>
                  {credibility.map((c) => (
                    <div key={c.title} className="hair-nerv-t py-4">
                      <dt className="mb-1.5 text-sm font-semibold text-white">{c.title}</dt>
                      <dd className="max-w-[60ch] text-sm leading-relaxed text-stealth-gray">
                        {c.body}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Disclosure>
            </div>
          </div>

          <div className="mt-14 max-w-3xl">
            <div className="rule-nerv-strong mb-8" />
            <h3 className="mb-4 text-[clamp(1.5rem,2.6vw,2rem)] font-bold text-white">
              Next step
            </h3>
            <p className="mb-8 max-w-[58ch] leading-relaxed text-stealth-gray">
              A 30 minute technical walkthrough of the console against your environment,
              or a scoped Nerv-AI red team assessment of one AI system.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary group">
                Book The Walkthrough
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 ease-out-quart group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link href="/services/ai" className="btn-secondary">
                AI Security Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
