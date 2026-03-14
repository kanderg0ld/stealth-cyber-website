import JsonLd from '../JsonLd'

interface ArticleJsonLdProps {
  title: string
  description: string
  url: string
  publishedAt: string
  authorName: string
  imageUrl?: string
}

export default function ArticleJsonLd({ title, description, url, publishedAt, authorName, imageUrl }: ArticleJsonLdProps) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        url,
        datePublished: publishedAt,
        image: imageUrl,
        author: {
          '@type': 'Person',
          name: authorName,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Stealth Cyber',
          logo: {
            '@type': 'ImageObject',
            url: 'https://stealthcyber.io/logo.png',
          },
        },
      }}
    />
  )
}
