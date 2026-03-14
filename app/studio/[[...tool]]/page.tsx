'use client'

import dynamic from 'next/dynamic'
import config from '../../../sanity.config'

// Dynamic import with no SSR — renders purely client-side (required for static export)
const NextStudio = dynamic(() => import('next-sanity/studio').then(mod => mod.NextStudio), { ssr: false })

// Required for `output: 'export'` — pre-generate /studio as a client-side shell
export function generateStaticParams() {
  return [{}]
}

export default function StudioPage() {
  return <NextStudio config={config} />
}

