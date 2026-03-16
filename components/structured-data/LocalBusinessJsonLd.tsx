import JsonLd from '@/components/JsonLd'

export default function LocalBusinessJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': ['LocalBusiness', 'ProfessionalService'],
        '@id': 'https://stealthcyber.io/#business',
        name: 'Stealth Cyber',
        legalName: 'Stealth Cyber Pty Ltd',
        image: 'https://stealthcyber.io/og-image.svg',
        logo: 'https://stealthcyber.io/Primary-Reversed-Dark.png',
        url: 'https://stealthcyber.io',
        telephone: '+61752308381',
        priceRange: '$$',
        description: 'Global cybersecurity consultancy providing managed detection and response, incident response, penetration testing, CMMC assessments, ISO 27001, Essential Eight compliance, AI security, and GRC services — with offices in Gold Coast (Australia), São Paulo (Brazil), and Texas (USA).',
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+61752308381',
            contactType: 'customer service',
            areaServed: ['AU', 'BR', 'US', 'Worldwide'],
            availableLanguage: ['English', 'Portuguese'],
            contactOption: 'TollFree',
          },
          {
            '@type': 'ContactPoint',
            telephone: '+61752308381',
            contactType: 'emergency',
            areaServed: ['AU', 'BR', 'US', 'Worldwide'],
            availableLanguage: ['English', 'Portuguese'],
          },
        ],
        location: [
          {
            '@type': 'Place',
            name: 'Stealth Cyber — Gold Coast',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Gold Coast',
              addressRegion: 'QLD',
              addressCountry: 'AU',
            },
          },
          {
            '@type': 'Place',
            name: 'Stealth Cyber — São Paulo',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'São Paulo',
              addressRegion: 'SP',
              addressCountry: 'BR',
            },
          },
          {
            '@type': 'Place',
            name: 'Stealth Cyber — Texas',
            address: {
              '@type': 'PostalAddress',
              addressRegion: 'TX',
              addressCountry: 'US',
            },
          },
        ],
        sameAs: ['https://linkedin.com/company/stealthcyber'],
        knowsAbout: [
          'Managed Detection and Response',
          'Incident Response',
          'Digital Forensics',
          'Essential Eight Compliance',
          'CMMC Certification',
          'ISO 27001',
          'ISO 42001',
          'AI Security',
          'Penetration Testing',
          'GRC',
          'Cybersecurity',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Cybersecurity Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Managed Detection & Response' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Incident Response' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Essential Eight Compliance' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CMMC Assessment' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ISO 27001 Certification' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Security' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Penetration Testing' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'GRC & Compliance' } },
          ],
        },
      }}
    />
  )
}
