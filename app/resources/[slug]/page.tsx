import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Download, ArrowLeft, FileText } from 'lucide-react'
import { sanityClient, urlFor } from '@/lib/sanity'
import { whitepaperBySlugQuery } from '@/lib/queries'
import BreadcrumbJsonLd from '@/components/structured-data/BreadcrumbJsonLd'

export const revalidate = 60

interface Props { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  let resource: any = null
  try { resource = await sanityClient.fetch(whitepaperBySlugQuery, { slug: params.slug }) } catch {}
  if (!resource) return { title: 'Resource Not Found' }
  return { title: resource.title, description: resource.description }
}

export default async function ResourcePage({ params }: Props) {
  let resource: any = null
  try { resource = await sanityClient.fetch(whitepaperBySlugQuery, { slug: params.slug }) } catch {}
  if (!resource) notFound()

  const imageUrl = resource.coverImage ? urlFor(resource.coverImage).width(1200).height(630).url() : undefined
  const categoryLabels: Record<string, string> = {
    'threat-intelligence': 'Threat Intelligence',
    'compliance': 'Compliance',
    'incident-response': 'Incident Response',
    'essential-eight': 'Essential Eight',
    'grc': 'GRC',
  }

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://stealthcyber.io' },
        { name: 'Resources', url: 'https://stealthcyber.io/resources' },
        { name: resource.title, url: `https://stealthcyber.io/resources/${params.slug}` },
      ]} />

      <div className="bg-stealth-dark py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/resources" className="inline-flex items-center gap-2 text-stealth-gray hover:text-stealth-cyan text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Resources
          </Link>

          {resource.category && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-stealth-cyan/20 bg-stealth-cyan/10 text-stealth-cyan text-xs font-medium mb-4">
              {categoryLabels[resource.category] || resource.category}
            </div>
          )}

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{resource.title}</h1>
          {resource.description && (
            <p className="text-stealth-gray text-lg leading-relaxed mb-8">{resource.description}</p>
          )}

          {imageUrl && (
            <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
              <Image src={imageUrl} alt={resource.title} fill className="object-cover" />
            </div>
          )}

          {/* Download CTA */}
          <div className="bg-stealth-navy rounded-xl border border-stealth-cyan/20 p-8 text-center">
            <FileText className="w-12 h-12 text-stealth-cyan/40 mx-auto mb-4" />
            <h2 className="text-white font-bold text-xl mb-2">Download This Resource</h2>
            <p className="text-stealth-gray text-sm mb-6">
              Fill in your details below to receive your free copy. We respect your privacy
              and will not share your information.
            </p>
            <form className="max-w-sm mx-auto space-y-3 mb-4" action="/api/download" method="POST">
              <input type="hidden" name="resourceId" value={resource._id} />
              <input type="hidden" name="resourceTitle" value={resource.title} />
              <input type="hidden" name="fileUrl" value={resource.fileUrl || ''} />
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full px-4 py-2.5 bg-stealth-dark border border-stealth-cyan/20 rounded text-white placeholder-stealth-gray focus:outline-none focus:border-stealth-cyan text-sm"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Work email address"
                className="w-full px-4 py-2.5 bg-stealth-dark border border-stealth-cyan/20 rounded text-white placeholder-stealth-gray focus:outline-none focus:border-stealth-cyan text-sm"
              />
              <input
                type="text"
                name="company"
                placeholder="Company (optional)"
                className="w-full px-4 py-2.5 bg-stealth-dark border border-stealth-cyan/20 rounded text-white placeholder-stealth-gray focus:outline-none focus:border-stealth-cyan text-sm"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 bg-stealth-cyan text-stealth-dark font-semibold rounded hover:bg-white transition-colors text-sm"
              >
                <Download className="w-4 h-4" /> Download Free Resource
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
