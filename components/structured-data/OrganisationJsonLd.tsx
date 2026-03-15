import JsonLd from '../JsonLd'

export default function OrganisationJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Stealth Cyber',
        legalName: 'Stealth Cyber Pty Ltd',
        url: 'https://stealthcyber.io',
        logo: 'https://stealthcyber.io/logo.png',
        description: 'Stealth Cyber delivers expert cybersecurity services including 24/7 managed detection and response, incident response, CMMC assessments, ISO 27001, AI security, AI management systems, Essential Eight compliance, and GRC — with offices in Gold Coast (Australia), São Paulo (Brazil), and Texas (USA).',
        telephone: '+61752308381',
        address: [
          {
            '@type': 'PostalAddress',
            addressLocality: 'Gold Coast',
            addressRegion: 'QLD',
            addressCountry: 'AU',
          },
          {
            '@type': 'PostalAddress',
            addressLocality: 'São Paulo',
            addressRegion: 'SP',
            addressCountry: 'BR',
          },
          {
            '@type': 'PostalAddress',
            addressRegion: 'TX',
            addressCountry: 'US',
          },
        ],
        areaServed: ['AU', 'BR', 'US', 'Worldwide'],
        sameAs: ['https://linkedin.com/company/stealthcyber'],
        taxID: '72 675 840 632',
      }}
    />
  )
}
