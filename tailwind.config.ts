import type { Config } from 'tailwindcss'

/**
 * Stealth Cyber — Brand Identity Kit supplement 01, v2.0 (August 2026).
 * Corporate tier only. Cobalt Blue #0038FF is the company primary.
 *
 * The Nerv product tier (magenta / cyan / purple / violet) is deliberately
 * absent from this config. Per the kit, product-tier colour must not appear on
 * corporate surfaces, and stealthcyber.io is a corporate surface. Leaving those
 * values undefined here makes that rule enforceable rather than advisory.
 */
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Grounds and surfaces ────────────────────────────────────────────
        // Near Black is the kit's dark ground. The two elevated surfaces are
        // derived from it with a low-chroma lean toward cobalt's hue, so the
        // neutrals belong to the palette instead of reading as generic slate.
        'stealth-dark':        '#0A0A0F', // Near Black (kit neutral)
        'stealth-void':        '#000000', // Void Black (kit neutral)
        'stealth-navy':        '#101320', // elevated surface 1
        'stealth-navy-light':  '#1A1E30', // elevated surface 2 / hairlines
        'stealth-surface':     '#F2F4F8', // Surface Grey (kit neutral)

        // ── Corporate tier — kit values, unchanged ──────────────────────────
        'stealth-blue':        '#0038FF', // Cobalt Blue — corporate primary
        'stealth-indigo':      '#6231F5', // Electric Indigo — corporate accent
        'stealth-sky':         '#00A2FF', // Celestial Blue — supporting
        'stealth-cyan-dark':   '#00A2FF', // alias of Celestial Blue
        'stealth-cyan':        '#4DCCFF', // Vivid Sky — supporting on dark
        'stealth-teal':        '#3CE4F5', // Electric Blue — highlight

        // ── Ink ramp ────────────────────────────────────────────────────────
        // Ratios measured against Near Black #0A0A0F.
        'stealth-ink':         '#E8E9F0', // headings on dark — 16.4:1
        'stealth-gray':        '#B4B7C6', // body copy on dark  —  9.9:1
        'stealth-dim':         '#8A8DA0', // labels, meta on dark — 6.0:1
        /*
         * Body Grey from the kit is #6B7280, but on the kit's own Surface Grey
         * #F2F4F8 that pairing measures 4.39:1 — just under AA for body text.
         * This is the same hue (220°) and saturation, 4% darker, which reads as
         * identical and measures 5.08:1 on Surface Grey / 5.59:1 on white.
         * Worth feeding back into the kit; the supplement's contrast table
         * covers the brand colours but never tested the two neutrals together.
         */
        'stealth-body':        '#626875', // Body Grey, AA-corrected

        // ── Severity — kit values, unchanged ────────────────────────────────
        // Severity is a separate scale from brand colour by design.
        'stealth-critical':    '#EF4444',
        'stealth-warning':     '#F59E0B',
        'stealth-success':     '#10B981',
      },
      fontFamily: {
        // Supplied by next/font in app/layout.tsx.
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        // Celestial-tinted hairline grid. Far quieter than the previous
        // treatment; intended to be masked so it never reaches a page edge.
        'grid-pattern':
          'linear-gradient(rgba(0,162,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,162,255,0.035) 1px, transparent 1px)',
        /*
         * One restrained atmosphere, used at most once per viewport. Weighted
         * to the right so the hero's empty right column reads as depth rather
         * than as a column that ran out of content.
         */
        'hero-atmosphere':
          'radial-gradient(75% 60% at 78% 32%, rgba(0,56,255,0.30) 0%, transparent 68%), radial-gradient(65% 55% at 96% 78%, rgba(98,49,245,0.24) 0%, transparent 62%), radial-gradient(90% 70% at 8% 12%, rgba(0,56,255,0.12) 0%, transparent 60%)',
        // Kit corporate gradient. Section dividers and cover surfaces only —
        // never behind body text, never as a button fill.
        'corp-gradient':
          'linear-gradient(135deg, #0038FF 0%, #00A2FF 60%, #3CE4F5 100%)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      transitionTimingFunction: {
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        // `backwards` fill only: the resting state stays visible, so if the
        // animation never runs (headless render, reduced motion) nothing is
        // hidden. See the reduced-motion guard in globals.css.
        rise: 'rise 700ms cubic-bezier(0.25, 1, 0.5, 1) backwards',
      },
      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translateY(14px)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
