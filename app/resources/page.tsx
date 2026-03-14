import type { Metadata } from 'next'
import { sanityClient, urlFor } from '@/lib/sanity'
import { whitepaperQuery } from '@/lib/queries'
import ResourceCard from '@/components/ResourceCard'
import BreadcrumbJsonLd from '@/components/structured-data/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'Security Resources & Whitepapers',
  description: 'Download free cybersecurity whitepapers, guides, and resources from Stealth Cyber covering Essential Eight, incident response, GRC, and more.',
}

export const revalidate = 60

export default async function ResourcesPage() {
  let resources: any[] = []
  try { resources = await sanityClient.fetch(whitepaperQuery) } catch {}

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', url: 'https://stealthcyber.io' }, { name: 'Resources', url: 'https://stealthcyber.io/resources' }]} />

      <section className="bg-stealth-dark py-20 border-b border-stealth-cyan/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-stealth-cyan text-xs font-medium uppercase tracking-widest mb-4">Resources</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Whitepapers &amp; Security Guides</h1>
            <p className="text-stealth-gray text-lg">
              Free resources to help Australian businesses understand and improve their
              cybersecurity posture. Practical guides written by our expert team.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-stealth-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {resources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource) => (
                <ResourceCard
                  key={resource._id}
                  title={resource.title}
                  description={resource.description || ''}
                  slug={resource.slug.current}
                  category={resource.category}
                  imageUrl={resource.coverImage ? urlFor(resource.coverImage).width(600).height(400).url() : undefined}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-stealth-gray text-lg mb-2">Resources coming soon.</div>
              <p className="text-stealth-gray text-sm">Our team is preparing practical security guides for Australian businesses.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
