import JsonLd from '../JsonLd'

interface Offer {
  name: string
  price: string
  description: string
}

interface SoftwareProductJsonLdProps {
  name: string
  description: string
  url: string
  offers: Offer[]
}

/**
 * SoftwareApplication schema for the Nerv platform.
 *
 * Prices are published as AUD per user per month to match the page. `Custom`
 * tiers are deliberately omitted rather than given a fabricated number — an
 * invented price in structured data is worse than an absent one.
 */
export default function SoftwareProductJsonLd({
  name,
  description,
  url,
  offers,
}: SoftwareProductJsonLdProps) {
  const priced = offers.filter((o) => o.price.startsWith('$'))

  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name,
        description,
        url,
        applicationCategory: 'SecurityApplication',
        applicationSubCategory: 'Extended Detection and Response',
        operatingSystem: 'Windows, macOS, Linux',
        publisher: {
          '@type': 'Organization',
          '@id': 'https://stealthcyber.io/#organisation',
          name: 'Stealth Cyber',
          url: 'https://stealthcyber.io',
        },
        offers: priced.map((o) => ({
          '@type': 'Offer',
          name: o.name,
          description: o.description,
          price: o.price.replace('$', ''),
          priceCurrency: 'AUD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: o.price.replace('$', ''),
            priceCurrency: 'AUD',
            unitText: 'user per month',
            valueAddedTaxIncluded: false,
          },
          eligibleQuantity: {
            '@type': 'QuantitativeValue',
            minValue: 10,
            unitText: 'seats',
          },
        })),
      }}
    />
  )
}
