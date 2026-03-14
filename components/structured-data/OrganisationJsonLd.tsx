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
        description: 'Stealth Cyber delivers expert cybersecurity services including 24/7 managed detection and response, incident response, Essential Eight compliance, and GRC for Australian SMBs.',
        telephone: '+61752308381',
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'QLD',
          addressCountry: 'AU',
        },
        areaServed: 'AU',
        sameAs: ['https://linkedin.com/company/stealthcyber'],
        taxID: '72 675 840 632',
      }}
    />
  )
}
