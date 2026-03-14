'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Shield } from 'lucide-react'
import clsx from 'clsx'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-stealth-dark/90 backdrop-blur-md border-b border-stealth-cyan/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <Shield className="w-7 h-7 text-stealth-cyan group-hover:scale-110 transition-transform" />
            <span className="text-white font-bold text-lg tracking-tight">
              Stealth<span className="text-stealth-cyan">Cyber</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'text-sm font-medium transition-colors duration-200',
                  pathname === link.href
                    ? 'text-stealth-cyan'
                    : 'text-gray-300 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 px-4 py-2 bg-stealth-cyan text-stealth-dark font-semibold text-sm rounded hover:bg-white transition-colors duration-200"
            >
              Get Protected
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-stealth-navy border-t border-stealth-cyan/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  'block text-sm font-medium py-2 transition-colors',
                  pathname === link.href ? 'text-stealth-cyan' : 'text-gray-300 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block mt-2 px-4 py-2 bg-stealth-cyan text-stealth-dark font-semibold text-sm rounded text-center hover:bg-white transition-colors"
            >
              Get Protected
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
