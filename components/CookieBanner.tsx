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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-stealth-navy border-t border-stealth-cyan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-stealth-gray text-sm leading-relaxed">
            We use cookies for analytics and site functionality.{' '}
            <Link href="/privacy" className="text-stealth-cyan hover:text-white transition-colors underline">
              Learn more
            </Link>
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleReject}
              className="px-4 py-2 text-sm font-medium text-white border border-stealth-cyan/40 rounded hover:border-stealth-cyan/60 hover:bg-stealth-navy-light transition-colors"
            >
              Reject Non-Essential
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm font-semibold text-stealth-dark bg-stealth-cyan rounded hover:bg-white transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
