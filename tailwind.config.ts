import type { Config } from 'tailwindcss'

/**
 * Stealth Cyber — Brand Identity Kit supplement 01, v2.0 (August 2026).
 *
 * BRIDGE TIER. Cobalt Blue #0038FF remains the company primary and owns the
 * logo, nav and primary actions. Nerv Magenta is admitted as a highlight, which
 * puts this site in the kit's Bridge tier ("where Stealth Cyber and Nerv appear
 * together") rather than Corporate.
 *
 * Magenta is deliberately limited to dark grounds. Per the kit's own contrast
 * table it is 5.13:1 on Near Black but only 3.85:1 on white, so it cannot carry
 * body text on the light sections. Only the two magenta values actually used are
 * defined; the rest of the product tier (Nerv Cyan, Purple, Violet, Signal Blue)
 * stays undefined so it can't drift in undecided.
 *
 * Note: the cyan family here is corporate Vivid Sky #4DCCFF, NOT Nerv Cyan
 * #00D2DD. That is intentional — the kit bans placing Electric Blue #3CE4F5
 * next to Nerv Cyan, and keeping the corporate cyan makes that unreachable.
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

        // ── Product tier, admitted as Bridge highlights ─────────────────────
        // Dark grounds only: 5.13:1 on Near Black, 3.85:1 on white.
        'stealth-magenta':      '#F303B0', // Nerv Magenta — threat / offensive
        'stealth-magenta-mist': '#FFC9FE', // Magenta Mist — glow cores, hover

        /* ── Nerv product tier ──────────────────────────────────────────────
         * The kit puts Nerv product surfaces in the Product tier, so these are
         * for /nerv only — not for corporate pages. Ratios vs Void Black:
         *   nerv-cyan   10.6:1  body text ok
         *   nerv-violet  3.7:1  LARGE TEXT / icons only
         *   nerv-purple  3.5:1  gradient mid, rarely flat — never body copy
         *   nerv-signal  4.7:1  body text ok
         * Nerv Purple and Violet must never carry small text.
         */
        'nerv-cyan':       '#00D2DD', // defence, healthy, resolved
        'nerv-cyan-mist':  '#C4FDFE', // glow cores, small text on dark
        'nerv-purple':     '#873EDC', // core-gradient midpoint
        'nerv-violet':     '#6953E0', // identity — decorative / icons only
        /*
         * Kit Nerv Violet is 3.91:1 on Void Black, so it cannot carry body or
         * label text. This is the same hue (249°) and saturation, lightened to
         * 5.24:1 on Void Black and 4.93:1 on Near Black. Use it wherever violet
         * appears as TEXT; keep #6953E0 for icons and decoration.
         */
        'nerv-violet-text': '#806DE5',
        'nerv-signal':     '#3C79E2', // informational
        // Kit --hair / --panel, so surfaces on Void Black stay neutral.
        'nerv-hair':       'rgba(255,255,255,0.10)',
        'nerv-panel':      'rgba(255,255,255,0.028)',

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
        /*
         * Reads left-to-right as the Bridge arc: cobalt through indigo into
         * magenta. The magenta bloom is pinned to the far right, well clear of
         * the text column on the left 5/8 of the grid.
         */
        'hero-atmosphere':
          'radial-gradient(58% 52% at 97% 72%, rgba(243,3,176,0.30) 0%, transparent 64%), radial-gradient(62% 56% at 84% 40%, rgba(98,49,245,0.30) 0%, transparent 66%), radial-gradient(70% 58% at 66% 26%, rgba(0,56,255,0.28) 0%, transparent 68%), radial-gradient(90% 70% at 6% 14%, rgba(0,56,255,0.12) 0%, transparent 60%)',
        // Kit corporate gradient. Section dividers and cover surfaces only —
        // never behind body text, never as a button fill.
        'corp-gradient':
          'linear-gradient(135deg, #0038FF 0%, #00A2FF 60%, #3CE4F5 100%)',
        /*
         * Kit Bridge gradient, verbatim. Sanctioned for surfaces where Stealth
         * Cyber and Nerv appear together. Dividers and atmosphere only: white
         * body text over the magenta end is 3.85:1, so it must never sit behind
         * copy.
         */
        'bridge-gradient':
          'linear-gradient(135deg, #0038FF 0%, #6231F5 45%, #F303B0 100%)',
        /*
         * Kit Nerv Core gradient, verbatim — the platform signature. Product
         * surfaces only. Same rule as the others: edges, atmosphere and display
         * type at 24px+, never behind body copy.
         */
        'nerv-core':
          'linear-gradient(135deg, #F303B0 0%, #873EDC 50%, #00D2DD 100%)',
        /*
         * Kit Void Bloom. Magenta and cyan blooms on Void Black, kept under the
         * kit's 60% ceiling so type stays legible over it.
         */
        'void-bloom':
          'radial-gradient(120% 140% at 22% 12%, rgba(243,3,176,0.34) 0%, rgba(0,0,0,0) 56%), radial-gradient(110% 130% at 82% 82%, rgba(0,210,221,0.28) 0%, rgba(0,0,0,0) 56%), radial-gradient(90% 90% at 60% 45%, rgba(135,62,220,0.20) 0%, rgba(0,0,0,0) 60%)',
        /*
         * Closing-CTA wash: cobalt base with the indigo/magenta end pushed into
         * the bottom-right corner, away from the centred text column. Contrast
         * behind the copy is pixel-verified, not assumed.
         */
        'cta-bridge':
          'radial-gradient(70% 120% at 100% 108%, rgba(243,3,176,0.85) 0%, rgba(243,3,176,0) 62%), radial-gradient(60% 110% at 88% 96%, rgba(98,49,245,0.75) 0%, rgba(98,49,245,0) 66%), linear-gradient(135deg, #0038FF 0%, #0034EE 100%)',
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
