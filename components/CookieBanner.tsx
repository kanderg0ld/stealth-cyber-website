'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      // Was a hard-coded z-50, the same layer as the navbar. Now on the
      // semantic scale, above the nav where a consent prompt belongs.
      className="fixed right-0 bottom-0 left-0 border-t border-stealth-navy-light bg-stealth-navy"
      style={{ zIndex: 'var(--z-banner)' }}
    >
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-sm leading-relaxed text-stealth-gray">
            We use cookies for analytics and site functionality.{' '}
            <Link
              href="/privacy"
              className="text-stealth-cyan underline decoration-stealth-cyan/40 underline-offset-4 transition-colors hover:decoration-stealth-cyan"
            >
              Learn more
            </Link>
          </p>
          {/*
            Equal visual weight for both choices. Accept was previously a filled
            cyan button against an outlined Reject — a second competing primary
            next to the cobalt CTAs, and a nudge that consent prompts should
            avoid.
          */}
          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={handleReject}
              className="btn-secondary min-h-11 px-4 py-2 text-sm"
            >
              Reject Non-Essential
            </button>
            <button
              type="button"
              onClick={handleAccept}
              className="btn-secondary min-h-11 px-4 py-2 text-sm"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
