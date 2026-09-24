import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const trustPoints = [
  { label: 'Offices', value: 'Gold Coast · São Paulo · Texas' },
  { label: 'Coverage', value: '24/7 SOC monitoring' },
  { label: 'Frameworks', value: 'ACSC Essential Eight · CMMC · ISO 27001' },
]

export default function HeroSection() {
  return (
    // The 4rem offset is the fixed navbar (main has pt-16). Without it the
    // section is a full viewport tall *below* the nav, which pushed the trust
    // band just off screen.
    <section className="relative flex min-h-[min(100svh_-_4rem,50rem)] flex-col justify-center overflow-hidden bg-stealth-dark">
      {/*
        One atmosphere, not three. The previous hero stacked a full-bleed grid,
        a gradient wash and three independently pulsing blur orbs; the grid is
        now masked so it never reaches an edge and nothing animates on a loop.
      */}
      <div className="grid-veil pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="bg-hero-atmosphere pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl flex-1 content-center px-4 py-[clamp(4rem,12vh,9rem)] sm:px-6 lg:px-8">
        {/*
          Weighted left at 5/8 of the grid. The empty right is deliberate
          negative space against the atmosphere, not a column that ran out of
          content the way `max-w-3xl` inside `max-w-7xl` used to read.
        */}
        <div className="lg:grid lg:grid-cols-8">
          <div className="lg:col-span-5">
            {/*
              No kicker above the H1. A trust badge over the headline is the
              saturated landing-page tell, and the same three facts are stated
              plainly in the ruled band at the base of this hero — as record
              rather than boast. The headline opens the page.
            */}
            <h1 className="animate-rise mb-7 text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white">
              One Breach Can{' '}
              {/*
                Neon pink gradient, Chris's call (2026-08-20). The kit assigns
                magenta to threat and cyan to defence, and this clause is the
                threat, so the loudest moment on the page also carries meaning.

                Only legitimate at this size: the kit forbids its gradients on
                body copy and anything under 24px, and this clamps 40px–72px.
                Solid-magenta fallback is in `.text-gradient-neon`.
              */}
              <span className="text-gradient-neon">Change Everything.</span>{' '}
              Don&apos;t Let It.
            </h1>

            <p
              className="animate-rise mb-9 max-w-[62ch] text-lg leading-relaxed text-stealth-gray"
              style={{ animationDelay: '120ms' }}
            >
              Stealth Cyber delivers 24/7 protection for your data, keeping you safe from
              cyber threats, protecting your business&apos;s reputation, and helping you
              stay ahead of regulatory requirements, so you can focus on running your
              business with confidence.
            </p>

            <div
              className="animate-rise flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: '180ms' }}
            >
              <Link href="/contact" className="btn-primary group">
                Speak With Our Team
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 ease-out-quart group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/*
        The trust facts used to be three bordered pills floating mid-column.
        As a ruled band pinned to the base of the hero they anchor the
        composition, use the full width, and read as a record rather than chrome.

        Flat hairlines, like every other divider on the corporate page. Gradient
        rules are reserved for the edges of the Nerv zone.
      */}
      <div className="relative z-10 bg-stealth-dark/60 backdrop-blur-sm">
        <div className="h-px bg-stealth-navy-light" />
        <dl className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-stealth-navy-light px-4 sm:px-6 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-8">
          {trustPoints.map((point) => (
            <div key={point.label} className="py-5 md:px-6 md:first:pl-0 md:last:pr-0">
              <dt className="mb-1 text-[0.6875rem] font-medium tracking-[0.16em] text-stealth-dim uppercase">
                {point.label}
              </dt>
              <dd className="text-sm text-stealth-ink">{point.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
