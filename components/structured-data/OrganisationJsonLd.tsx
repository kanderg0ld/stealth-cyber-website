import JsonLd from '../JsonLd'

export default function OrganisationJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': 'https://stealthcyber.io/#organisation',
        name: 'Stealth Cyber',
        legalName: 'Stealth Cyber Pty Ltd',
        url: 'https://stealthcyber.io',
        logo: {
          '@type': 'ImageObject',
          url: 'https://stealthcyber.io/Primary-Reversed-Dark.png',
          width: 501,
          height: 106,
        },
        image: 'https://stealthcyber.io/Primary-Reversed-Dark.png',
        description: 'Stealth Cyber delivers expert cybersecurity services including 24/7 managed detection and response, incident response, CMMC assessments, ISO 27001, AI security, AI management systems, Essential Eight compliance, and GRC, with offices in Gold Coast (Australia), São Paulo (Brazil), and Texas (USA).',
        telephone: '+61752308381',
        foundingDate: '2024',
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+61752308381',
            contactType: 'sales',
            areaServed: ['AU', 'NZ', 'SG', 'JP'],
            availableLanguage: 'English',
          },
          {
            '@type': 'ContactPoint',
            telephone: '+18557742595',
            contactType: 'sales',
            areaServed: ['US', 'CA', 'BR', 'MX'],
            availableLanguage: ['English', 'Portuguese', 'Spanish'],
          },
        ],
        numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 10, maxValue: 50 },
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
        knowsAbout: [
          'Cybersecurity',
          'Managed Detection and Response',
          'Incident Response',
          'Digital Forensics',
          'Penetration Testing',
          'Essential Eight Compliance',
          'CMMC Certification',
          'ISO 27001',
          'ISO 42001 AI Management',
          'AI Security',
          'GRC',
          'Security Operations Centre',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Cybersecurity Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Managed Detection & Response', url: 'https://stealthcyber.io/services#mdr' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Incident Response', url: 'https://stealthcyber.io/services#incident-response' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Essential Eight Compliance', url: 'https://stealthcyber.io/services#essential-eight' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CMMC Assessment', url: 'https://stealthcyber.io/services#cmmc' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ISO 27001', url: 'https://stealthcyber.io/services#iso27001' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Security', url: 'https://stealthcyber.io/services#ai-security' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Management Systems', url: 'https://stealthcyber.io/services#ai-management' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'GRC & Compliance', url: 'https://stealthcyber.io/services#grc' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Managed Security Services', url: 'https://stealthcyber.io/services#mss' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Penetration Testing', url: 'https://stealthcyber.io/services#pentest' } },
          ],
        },
      }}
    />
  )
}
