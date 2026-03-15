'use client'

import { useEffect } from 'react'
import { Shield } from 'lucide-react'

// The Sanity Studio is hosted separately at https://<project-id>.sanity.studio
// Set NEXT_PUBLIC_SANITY_STUDIO_URL in your environment to point to your studio.
const STUDIO_URL = process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || 'https://sanity.io/manage'

export default function StudioRedirectPage() {
  useEffect(() => {
    window.location.replace(STUDIO_URL)
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
