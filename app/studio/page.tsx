'use client'

import { useEffect } from 'react'
import { Shield } from 'lucide-react'

// Allowed hostnames for studio redirect. Prevents open redirect abuse.
const ALLOWED_STUDIO_HOSTS = ['sanity.io', 'sanity.studio']

function getSafeStudioUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || 'https://sanity.io/manage'
  try {
    const url = new URL(raw)
    const hostname = url.hostname.toLowerCase()
    if (ALLOWED_STUDIO_HOSTS.some((h) => hostname === h || hostname.endsWith(`.${h}`))) {
      return url.href
    }
  } catch {
    // invalid URL, fall through to default
  }
  return 'https://sanity.io/manage'
}

export default function StudioRedirectPage() {
  useEffect(() => {
    window.location.replace(getSafeStudioUrl())
  }, [])

  return (
    <div className="min-h-screen bg-stealth-dark flex items-center justify-center">
      <div className="text-center">
        <Shield className="w-10 h-10 text-stealth-cyan mx-auto mb-4 animate-pulse" />
        <p className="text-stealth-gray text-sm">Redirecting to Stealth Cyber Studio…</p>
      </div>
    </div>
  )
}
