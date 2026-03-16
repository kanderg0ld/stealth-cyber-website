import JsonLd from '../JsonLd'

interface ServiceJsonLdProps {
  name: string
  description: string
  url: string
}

export default function ServiceJsonLd({ name, description, url }: ServiceJsonLdProps) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: name,
        name,
        description,
        url,
        provider: {
          '@type': 'Organization',
          '@id': 'https://stealthcyber.io/#organisation',
          name: 'Stealth Cyber',
          url: 'https://stealthcyber.io',
        },
        areaServed: ['AU', 'BR', 'US', 'Worldwide'],
      }}
    />
  )
}
