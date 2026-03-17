import Link from 'next/link'
import { ArrowRight, Shield, CheckCircle } from 'lucide-react'

const trustPoints = [
  'Offices in AU · BR · US',
  '24/7 SOC monitoring',
  'ACSC E8 · CMMC · ISO 27001',
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-stealth-dark overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100" />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 rounded-full blur-3xl animate-pulse-slow" style={{ background: 'radial-gradient(circle, rgba(98,49,245,0.18) 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 rounded-full blur-3xl animate-pulse-slow" style={{ background: 'radial-gradient(circle, rgba(0,56,255,0.18) 0%, transparent 70%)' }} />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 rounded-full blur-3xl animate-pulse-slow" style={{ background: 'radial-gradient(circle, rgba(60,228,245,0.12) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-stealth-indigo/40 bg-stealth-indigo/10 text-stealth-cyan text-xs font-medium mb-6">
            <Shield className="w-3.5 h-3.5" />
            <span>Trusted Across 3 Continents</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-white">Don&apos;t Let a Breach</span>{' '}
            <span className="bg-gradient-to-br from-white via-stealth-cyan to-stealth-teal bg-clip-text text-transparent">Undo Everything</span>{' '}
            <span className="text-white">You&apos;ve Built.</span>
          </h1>

          <p className="text-lg text-stealth-gray leading-relaxed mb-8 max-w-2xl">
            Stealth Cyber delivers 24/7 protection for your data, keeping you safe from
            cyber threats, protecting your business&apos;s reputation, and helping you stay
            ahead of regulatory requirements — so you can focus on running your business
            with confidence.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {trustPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-1.5 text-sm text-gray-300 bg-stealth-navy border border-stealth-cyan/20 rounded-full px-3 py-1"
              >
                <CheckCircle className="w-4 h-4 text-stealth-cyan shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 btn-gradient text-white font-semibold rounded shadow-lg group"
              style={{ boxShadow: '0 4px 24px rgba(0,56,255,0.35)' }}
            >
              Get a Free Security Assessment
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-stealth-cyan/40 text-white font-semibold rounded hover:border-stealth-cyan/60 hover:bg-stealth-navy-light transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stealth-dark to-transparent" />
    </section>
  )
}
