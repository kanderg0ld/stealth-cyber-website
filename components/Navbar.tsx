'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'
import Logo from '@/components/Logo'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: 'https://ai.stealthcyber.io', label: 'AI Training', external: true },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-stealth-dark/95 backdrop-blur-md border-b border-stealth-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" aria-label="Stealth Cyber home">
            <Logo size="sm" />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ) : (
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
              )
            )}
            <Link
              href="/contact"
              className="ml-2 px-4 py-2 bg-gradient-to-r from-stealth-blue to-stealth-indigo text-white font-semibold text-sm rounded hover:opacity-90 transition-opacity duration-200"
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
        <div className="md:hidden bg-stealth-navy border-t border-stealth-navy-light">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="block text-sm font-medium py-2 text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ) : (
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
              )
            )}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block mt-2 px-4 py-2 bg-gradient-to-r from-stealth-blue to-stealth-indigo text-white font-semibold text-sm rounded text-center hover:opacity-90 transition-opacity"
            >
              Get Protected
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
