'use client'

import dynamic from 'next/dynamic'
import config from '../../../sanity.config'

// No SSR — Sanity Studio must render client-side only
const NextStudio = dynamic(() => import('next-sanity/studio').then(mod => mod.NextStudio), { ssr: false })

export default function StudioClientPage() {
  return <NextStudio config={config} />
}
