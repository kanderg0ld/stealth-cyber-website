import JsonLd from '@/components/JsonLd'

export default function WebsiteJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Stealth Cyber',
        url: 'https://stealthcyber.io',
        description: 'Global cybersecurity consultancy delivering managed detection and response, incident response, CMMC, ISO 27001, Essential Eight, AI security, and GRC services.',
        inLanguage: 'en',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://stealthcyber.io/blog?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      }}
    />
  )
}
