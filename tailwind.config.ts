import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'stealth-dark':        '#04050F',
        'stealth-navy':        '#07091A',
        'stealth-navy-light':  '#0D1230',
        'stealth-cyan':        '#4DCCFF',
        'stealth-cyan-dark':   '#00A2FF',
        'stealth-blue':        '#0038FF',
        'stealth-sky':         '#00A2FF',
        'stealth-teal':        '#3CE4F5',
        'stealth-indigo':      '#6231F5',
        'stealth-gray':        '#94A3B8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(77,204,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(77,204,255,0.04) 1px, transparent 1px)",
        'hero-gradient': 'radial-gradient(ellipse at 15% 60%, rgba(98,49,245,0.12) 0%, transparent 60%), radial-gradient(ellipse at 85% 20%, rgba(0,56,255,0.10) 0%, transparent 60%), radial-gradient(ellipse at 50% 80%, rgba(60,228,245,0.06) 0%, transparent 60%)',
        'brand-gradient': 'linear-gradient(135deg, #0038FF 0%, #6231F5 100%)',
        'brand-gradient-hover': 'linear-gradient(135deg, #1a4fff 0%, #7a4aff 100%)',
        'glow-blue': 'radial-gradient(ellipse at center, rgba(0,56,255,0.2) 0%, transparent 70%)',
        'glow-indigo': 'radial-gradient(ellipse at center, rgba(98,49,245,0.25) 0%, transparent 70%)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
