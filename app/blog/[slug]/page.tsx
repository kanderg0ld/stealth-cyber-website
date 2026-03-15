import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { sanityClient, urlFor } from '@/lib/sanity'
import { postBySlugQuery } from '@/lib/queries'
import ArticleJsonLd from '@/components/structured-data/ArticleJsonLd'
import BreadcrumbJsonLd from '@/components/structured-data/BreadcrumbJsonLd'

interface Props { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  let post: any = null
  try { post = await sanityClient.fetch(postBySlugQuery, { slug: params.slug }) } catch {}
  if (!post) return { title: 'Post Not Found' }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: 'article', publishedTime: post.publishedAt },
  }
}

export default async function BlogPostPage({ params }: Props) {
  let post: any = null
  try { post = await sanityClient.fetch(postBySlugQuery, { slug: params.slug }) } catch {}
  if (!post) notFound()

  const imageUrl = post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : undefined

  return (
    <>
      <ArticleJsonLd
        title={post.title}
        description={post.excerpt || ''}
        url={`https://stealthcyber.io/blog/${params.slug}`}
        publishedAt={post.publishedAt}
        authorName={post.author?.name || 'Stealth Cyber'}
        imageUrl={imageUrl}
      />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://stealthcyber.io' },
        { name: 'Blog', url: 'https://stealthcyber.io/blog' },
        { name: post.title, url: `https://stealthcyber.io/blog/${params.slug}` },
      ]} />

      <article className="bg-stealth-dark py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tags */}
          {post.tags?.length > 0 && (
            <div className="flex gap-2 mb-4">
              {post.tags.map((tag: string) => (
                <span key={tag} className="px-2.5 py-1 text-xs font-medium bg-stealth-cyan/10 text-stealth-cyan rounded-full border border-stealth-cyan/20">{tag}</span>
              ))}
            </div>
          )}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-4 text-stealth-gray text-sm mb-8">
            {post.author?.name && <span>By {post.author.name}{post.author.role ? `, ${post.author.role}` : ''}</span>}
            {post.publishedAt && <span>{new Date(post.publishedAt).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}</span>}
          </div>
          {imageUrl && (
            <div className="relative aspect-video rounded-xl overflow-hidden mb-10">
              <Image src={imageUrl} alt={post.title} fill className="object-cover" />
            </div>
          )}
          <div className="prose prose-invert prose-cyan max-w-none">
            {post.body && <PortableText value={post.body} />}
          </div>
        </div>
      </article>
    </>
  )
}
