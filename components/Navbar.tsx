'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'
import Logo from '@/components/Logo'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/nerv', label: 'Nerv' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/resources', label: 'Resources' },
  { href: 'https://ai.stealthcyber.io', label: 'AI Training', external: true },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close the mobile menu on route change so it never survives a navigation.
  useEffect(() => setOpen(false), [pathname])

  // Escape closes the menu — expected of any disclosure, and it was missing.
  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <nav
      className="fixed top-0 right-0 left-0 border-b border-stealth-navy-light bg-stealth-dark/90 backdrop-blur-md"
      style={{ zIndex: 'var(--z-nav)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" aria-label="Stealth Cyber home">
            <Logo size="sm" />
          </Link>

          {/*
            `lg`, not `md`. Eight links plus the CTA do not fit beside the logo
            until ~1024px; at 768–1023px the logo collided with "Home" and the
            row wrapped onto two lines.
          */}
          {/*
            Nine links plus the CTA. The gap tightens at lg so the row clears
            the logo at 1024px, and relaxes again at xl where there is room.
          */}
          <div className="hidden items-center gap-4 lg:flex xl:gap-6">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-stealth-gray transition-colors duration-200 ease-out-quart hover:text-white"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? 'page' : undefined}
                  className={clsx(
                    // The active state carries an underline as well as colour,
                    // so it does not rely on hue alone to signal position.
                    'relative py-1 text-sm font-medium transition-colors duration-200 ease-out-quart after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:transition-colors',
                    pathname === link.href
                      ? 'text-white after:bg-stealth-cyan'
                      : 'text-stealth-gray after:bg-transparent hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="btn-primary ml-2 px-4 py-2 text-sm"
            >
              Get Protected
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md text-stealth-gray transition-colors hover:text-white lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-stealth-navy-light bg-stealth-navy lg:hidden"
        >
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  // 44px minimum touch target.
                  className="flex min-h-11 items-center rounded-md text-sm font-medium text-stealth-gray transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === link.href ? 'page' : undefined}
                  className={clsx(
                    'flex min-h-11 items-center rounded-md text-sm font-medium transition-colors',
                    // Colour and weight, so position is not signalled by hue alone.
                    pathname === link.href
                      ? 'font-semibold text-stealth-cyan'
                      : 'text-stealth-gray hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3 w-full px-4 py-2.5 text-sm"
            >
              Get Protected
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
