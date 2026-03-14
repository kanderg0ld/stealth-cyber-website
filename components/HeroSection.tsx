import Link from 'next/link'
import { ArrowRight, Shield, CheckCircle } from 'lucide-react'

const trustPoints = [
  'Australian-owned & operated',
  '24/7 SOC monitoring',
  'ACSC Essential Eight specialists',
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-stealth-dark overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100" />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-hero-gradient" />
      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-stealth-cyan/5 rounded-full blur-3xl animate-pulse-slow" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-stealth-cyan/30 bg-stealth-cyan/10 text-stealth-cyan text-xs font-medium mb-6">
            <Shield className="w-3.5 h-3.5" />
            <span>Trusted by Australian SMBs</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Enterprise Cyber Defence{' '}
            <span className="text-stealth-cyan">Without the Enterprise</span>{' '}
            Price Tag
          </h1>

          <p className="text-lg text-stealth-gray leading-relaxed mb-8 max-w-2xl">
            Stealth Cyber delivers 24/7 managed detection and response, incident response,
            Essential Eight compliance, and GRC services built for Australian small and
            medium businesses. Stay protected around the clock without the overhead of
            an in-house security team.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-1.5 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-stealth-cyan shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-stealth-cyan text-stealth-dark font-semibold rounded hover:bg-white transition-colors group"
            >
              Get a Free Security Assessment
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-stealth-cyan/40 text-white font-semibold rounded hover:border-stealth-cyan hover:bg-stealth-cyan/10 transition-colors"
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
