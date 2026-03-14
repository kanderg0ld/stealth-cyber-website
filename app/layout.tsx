import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import OrganisationJsonLd from '@/components/structured-data/OrganisationJsonLd'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://stealthcyber.io'),
  title: {
    default: 'Stealth Cyber | Managed Cybersecurity for Australian SMBs',
    template: '%s | Stealth Cyber',
  },
  description: 'Stealth Cyber delivers 24/7 managed detection and response, incident response, Essential Eight compliance, and GRC for Australian small and medium businesses.',
  keywords: ['cybersecurity', 'managed detection response', 'incident response', 'Essential Eight', 'GRC', 'Australia', 'SMB security'],
  authors: [{ name: 'Stealth Cyber' }],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://stealthcyber.io',
    siteName: 'Stealth Cyber',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Stealth Cyber' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@stealthcyber',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <head>
        <OrganisationJsonLd />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
