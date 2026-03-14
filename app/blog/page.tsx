import type { Metadata } from 'next'
import { sanityClient } from '@/lib/sanity'
import { postsQuery } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'
import BlogCard from '@/components/BlogCard'
import BreadcrumbJsonLd from '@/components/structured-data/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'Cybersecurity Blog',
  description: 'Cybersecurity insights, threat intelligence, and compliance guidance for Australian businesses from the Stealth Cyber team.',
}

export const revalidate = 60

export default async function BlogPage() {
  let posts: any[] = []
  try {
    posts = await sanityClient.fetch(postsQuery)
  } catch {
    // Sanity not yet configured
  }

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', url: 'https://stealthcyber.io' }, { name: 'Blog', url: 'https://stealthcyber.io/blog' }]} />

      <section className="bg-stealth-dark py-20 border-b border-stealth-cyan/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-stealth-cyan text-xs font-medium uppercase tracking-widest mb-4">Insights</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Cybersecurity Blog</h1>
            <p className="text-stealth-gray text-lg">
              Threat intelligence, compliance guidance, and practical security advice
              for Australian businesses — straight from our SOC and advisory team.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-stealth-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard
                  key={post._id}
                  title={post.title}
                  excerpt={post.excerpt || ''}
                  slug={post.slug.current}
                  publishedAt={post.publishedAt}
                  authorName={post.author?.name}
                  imageUrl={post.mainImage ? urlFor(post.mainImage).width(600).height(400).url() : undefined}
                  tags={post.tags}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-stealth-gray text-lg mb-2">No posts yet.</div>
              <p className="text-stealth-gray text-sm">Check back soon — our team publishes new insights regularly.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
