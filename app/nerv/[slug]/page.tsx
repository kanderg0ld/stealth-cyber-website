import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import Disclosure from '@/components/Disclosure'
import BreadcrumbJsonLd from '@/components/structured-data/BreadcrumbJsonLd'
import { modules, toneText, redTeamProbes } from '../nerv-data'

/** One static page per module, generated from the shared data file. */
export function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const m = modules.find((x) => x.slug === params.slug)
  if (!m) return {}
  const url = `https://stealthcyber.io/nerv/${m.slug}`
  return {
    title: `${m.code} — ${m.title} | Nerv Platform`,
    description: `${m.tagline} ${m.body}`.slice(0, 300),
    openGraph: { title: `${m.code} — ${m.title}`, description: m.tagline, url },
    alternates: { canonical: url },
  }
}

export default function NervModulePage({ params }: { params: { slug: string } }) {
  const index = modules.findIndex((m) => m.slug === params.slug)
  if (index === -1) notFound()

  const m = modules[index]
  const prev = index > 0 ? modules[index - 1] : null
  const next = index < modules.length - 1 ? modules[index + 1] : null

  return (
    <div className="surface-void">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://stealthcyber.io' },
          { name: 'Nerv Platform', url: 'https://stealthcyber.io/nerv' },
          { name: m.code, url: `https://stealthcyber.io/nerv/${m.slug}` },
        ]}
      />

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="bg-void-bloom pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-[clamp(2.5rem,6vh,4rem)] pb-[clamp(2.5rem,5vw,4rem)] sm:px-6 lg:px-8">
          <Link
            href="/nerv"
            className="group mb-8 inline-flex items-center gap-2 text-xs font-medium text-stealth-dim transition-colors hover:text-white"
          >
            <ArrowLeft
              className="h-3.5 w-3.5 transition-transform duration-200 ease-out-quart group-hover:-translate-x-1"
              aria-hidden="true"
            />
            All seven modules
          </Link>

          <p className="mb-4 text-[0.6875rem] font-medium tracking-[0.18em] uppercase">
            <span className="text-stealth-dim">Module {m.num} · </span>
            <span className={toneText[m.tone]}>{m.code}</span>
            <span className="text-stealth-dim"> · {m.surface}</span>
          </p>
          <h1 className="mb-5 max-w-[22ch] text-[clamp(2.25rem,5vw,3.5rem)] font-bold text-white">
            {m.title}
          </h1>
          <p className={`mb-5 max-w-[58ch] text-lg leading-relaxed ${toneText[m.tone]}`}>
            {m.tagline}
          </p>
          <p className="max-w-[68ch] leading-relaxed text-stealth-gray">{m.body}</p>

          {m.stats && (
            <dl className="band-nerv mt-10 grid max-w-3xl grid-cols-1 sm:grid-cols-3">
              {m.stats.map((s) => (
                <div key={s.label} className="py-5 sm:px-6 sm:first:pl-0 sm:last:pr-0">
                  <dd className="text-[2rem] leading-none font-bold text-white">{s.value}</dd>
                  <dt className="mt-2 text-xs leading-snug text-stealth-dim">{s.label}</dt>
                </div>
              ))}
            </dl>
          )}
        </div>
      </section>

      {/* ── Detail ─────────────────────────────────────────────────────────── */}
      <section className="border-t border-nerv-hair py-[clamp(3rem,7vw,5rem)]">
        <div className="mx-auto grid max-w-7xl gap-x-16 gap-y-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="min-w-0 lg:col-span-5">
            {/* Sticky: the coverage list is short and the right column is long,
                so without this the left third is mostly dead space. */}
            <div className="lg:sticky lg:top-24">
              <p className="mb-5 text-[0.6875rem] font-medium tracking-[0.16em] text-stealth-dim uppercase">
                {m.coversLabel}
              </p>
              <ul className="space-y-2.5">
                {m.covers.map((c) => (
                  <li key={c} className="flex gap-2.5 text-sm text-stealth-gray">
                    <Check
                      className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${toneText[m.tone]}`}
                      aria-hidden="true"
                    />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-7">
            {/* Nerv-WEB: the redaction example is the clearest demonstration. */}
            {m.slug === 'web' && (
              <div className="mb-12 space-y-4">
                <p className="text-[0.6875rem] font-medium tracking-[0.16em] text-stealth-dim uppercase">
                  How it works
                </p>
                <div className="border-t border-stealth-magenta/45 bg-nerv-panel p-5">
                  <p className="mb-2 text-[0.625rem] font-medium tracking-[0.16em] text-stealth-dim uppercase">
                    Staff member types
                  </p>
                  <p className="font-mono text-sm leading-relaxed break-words text-stealth-ink">
                    Fix the firewall for Acme Corp at 10.0.1.50, the API key is
                    AKIA1234567890ABCDEF
                  </p>
                </div>
                <div className="border-t border-nerv-cyan/45 bg-nerv-panel p-5">
                  <p className="mb-2 text-[0.625rem] font-medium tracking-[0.16em] text-stealth-dim uppercase">
                    The AI receives
                  </p>
                  <p className="font-mono text-sm leading-relaxed break-words text-stealth-ink">
                    Fix the firewall for <span className="text-nerv-cyan">[REDACTED]</span> at{' '}
                    <span className="text-nerv-cyan">[REDACTED]</span>, the API key is{' '}
                    <span className="text-nerv-cyan">[REDACTED]</span>
                  </p>
                </div>
                <p className="text-sm text-stealth-gray">
                  They get their answer. The data never leaves.
                </p>
              </div>
            )}

            {/* Nerv-ID: the correlated chain is the product story. */}
            {m.slug === 'id' && (
              <div className="mb-12">
                <p className="mb-5 text-[0.6875rem] font-medium tracking-[0.16em] text-stealth-dim uppercase">
                  The attack chain Nerv-ID correlates
                </p>
                <ol>
                  {[
                    'Password spray from a single hosting IP across 40 mailboxes',
                    'One successful authentication, no MFA prompt, legacy protocol',
                    'Inbox rule created on the CFO mailbox to auto-delete replies',
                    'Payment redirection email sent to a supplier from a real account',
                  ].map((s, i) => (
                    <li key={s} className="hair-nerv-t flex gap-4 py-3.5">
                      <span className="text-xs font-medium text-nerv-violet-text tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm text-stealth-gray">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Nerv-AI: the automated red team probe set. */}
            {m.slug === 'ai' && (
              <div className="mb-12">
                <p className="mb-2 text-[0.6875rem] font-medium tracking-[0.16em] text-stealth-dim uppercase">
                  Test the AI before someone else does
                </p>
                <p className="mb-5 max-w-[62ch] text-sm leading-relaxed text-stealth-gray">
                  Nerv-AI includes automated adversarial testing of your AI systems, run by
                  the same team that does our human red team engagements. You get a posture
                  score, the failing test cases and the remediation, on a repeating
                  schedule. The output is a report you can hand to a board, an auditor or a
                  client, not a JSON dump for an engineer to interpret.
                </p>
                <dl className="grid gap-x-8 sm:grid-cols-2">
                  {redTeamProbes.map((p) => (
                    <div key={p.question} className="hair-nerv-t py-4">
                      <dt className="mb-1 text-sm font-semibold text-white">{p.question}</dt>
                      <dd className="text-xs text-stealth-dim">{p.detail}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            <p className="mb-5 text-[0.6875rem] font-medium tracking-[0.16em] text-stealth-dim uppercase">
              Where it separates
            </p>
            <dl className="mb-10">
              {m.separates.map((s, i) => (
                <div key={s.title} className="hair-nerv-t py-5">
                  <dt className="mb-1.5 flex gap-3 text-sm font-semibold text-white">
                    <span className="text-stealth-dim tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {s.title}
                  </dt>
                  <dd className="max-w-[64ch] pl-8 text-sm leading-relaxed text-stealth-gray">
                    {s.body}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Collapsed by default — supporting evidence, not the argument. */}
            {m.comparison && (
              <Disclosure
                summary="Capability comparison"
                hint={`${m.comparison.rows.length} capabilities`}
              >
                <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
                  <table className="w-full min-w-[34rem] border-collapse text-left">
                    <thead>
                      <tr>
                        <th className="hair-nerv-t w-[46%] py-3 pr-4 text-[0.625rem] font-medium tracking-[0.16em] text-stealth-dim uppercase">
                          Capability
                        </th>
                        <th className="hair-nerv-t py-3 pr-4 text-[0.625rem] font-medium tracking-[0.16em] text-stealth-dim uppercase">
                          {m.comparison.typicalLabel}
                        </th>
                        <th
                          className={`hair-nerv-t py-3 text-[0.625rem] font-medium tracking-[0.16em] uppercase ${toneText[m.tone]}`}
                        >
                          {m.code}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {m.comparison.rows.map((r) => (
                        <tr key={r.capability}>
                          <td className="hair-nerv-t py-3 pr-4 text-sm text-stealth-ink">
                            {r.capability}
                          </td>
                          <td className="hair-nerv-t py-3 pr-4 text-sm text-stealth-dim">
                            {r.typical}
                          </td>
                          <td
                            className={`hair-nerv-t py-3 text-sm font-medium ${toneText[m.tone]}`}
                          >
                            {r.nerv}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-6 max-w-[86ch] text-xs leading-relaxed text-stealth-dim">
                  {m.comparison.note}
                </p>
              </Disclosure>
            )}

            {m.footnote && (
              <p className="mt-8 max-w-[86ch] text-xs leading-relaxed text-stealth-dim">
                {m.footnote}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ── Prev / next + CTA ──────────────────────────────────────────────── */}
      <section className="border-t border-nerv-hair py-[clamp(3rem,6vw,4.5rem)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary group">
              Book A Technical Walkthrough
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 ease-out-quart group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <Link href="/nerv#pricing" className="btn-secondary">
              See Pricing
            </Link>
          </div>

          <nav
            aria-label="Modules"
            className="grid gap-x-8 border-t border-nerv-hair pt-6 sm:grid-cols-2"
          >
            {prev ? (
              <Link href={`/nerv/${prev.slug}`} className="group py-3">
                <span className="mb-1 block text-[0.625rem] font-medium tracking-[0.16em] text-stealth-dim uppercase">
                  Previous module
                </span>
                <span className="flex items-center gap-2">
                  <ArrowLeft
                    className="h-3.5 w-3.5 shrink-0 text-stealth-dim transition-transform duration-200 ease-out-quart group-hover:-translate-x-1"
                    aria-hidden="true"
                  />
                  <span className={`text-sm font-semibold ${toneText[prev.tone]}`}>
                    {prev.code}
                  </span>
                  <span className="text-xs text-stealth-dim">{prev.surface}</span>
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link href={`/nerv/${next.slug}`} className="group py-3 sm:text-right">
                <span className="mb-1 block text-[0.625rem] font-medium tracking-[0.16em] text-stealth-dim uppercase">
                  Next module
                </span>
                <span className="flex items-center gap-2 sm:justify-end">
                  <span className={`text-sm font-semibold ${toneText[next.tone]}`}>
                    {next.code}
                  </span>
                  <span className="text-xs text-stealth-dim">{next.surface}</span>
                  <ArrowRight
                    className="h-3.5 w-3.5 shrink-0 text-stealth-dim transition-transform duration-200 ease-out-quart group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            )}
          </nav>
        </div>
      </section>
    </div>
  )
}
