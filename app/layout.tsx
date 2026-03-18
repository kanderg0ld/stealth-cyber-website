import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import OrganisationJsonLd from '@/components/structured-data/OrganisationJsonLd'
import WebsiteJsonLd from '@/components/structured-data/WebsiteJsonLd'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://stealthcyber.io'),
  title: {
    default: 'Stealth Cyber | Global Managed Cybersecurity Services',
    template: '%s | Stealth Cyber',
  },
  description: 'Stealth Cyber delivers 24/7 managed detection and response, incident response, CMMC, ISO 27001, Essential Eight, AI security, and GRC, with offices in Gold Coast (AU), São Paulo (BR), and Texas (US).',
  keywords: [
    'cybersecurity', 'managed detection and response', 'MDR', 'incident response',
    'Essential Eight', 'CMMC', 'ISO 27001', 'AI security', 'penetration testing',
    'GRC', 'cybersecurity Gold Coast', 'cybersecurity Australia', 'DFIR',
  ],
  authors: [{ name: 'Stealth Cyber', url: 'https://stealthcyber.io' }],
  category: 'Cybersecurity',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    alternateLocale: ['en_US', 'pt_BR'],
    url: 'https://stealthcyber.io',
    siteName: 'Stealth Cyber',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Stealth Cyber Global Managed Cybersecurity' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@stealthcyber',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: {
    // Add Google Search Console & Bing verification tokens here when available:
    // google: 'YOUR_TOKEN',
    // other: { 'msvalidate.01': 'YOUR_TOKEN' },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <head>
        <OrganisationJsonLd />
        <WebsiteJsonLd />
        <meta name="theme-color" content="#04050F" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
