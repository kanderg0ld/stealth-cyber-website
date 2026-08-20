import Link from 'next/link'
import Image from 'next/image'
import { Calendar, User } from 'lucide-react'

interface BlogCardProps {
  title: string
  excerpt: string
  slug: string
  publishedAt: string
  authorName?: string
  imageUrl?: string
  tags?: string[]
}

export default function BlogCard({ title, excerpt, slug, publishedAt, authorName, imageUrl, tags }: BlogCardProps) {
  const date = new Date(publishedAt).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-lg border border-stealth-navy-light bg-stealth-navy transition-[border-color] duration-200 ease-out-quart hover:border-stealth-cyan/30 focus-within:border-stealth-cyan/50">
      {imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out-quart group-hover:scale-[1.03]"
          />
          {/* Scrim, so the card edge reads against a light photograph. */}
          <div className="absolute inset-0 bg-gradient-to-t from-stealth-navy/80 to-transparent" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        {tags && tags.length > 0 && (
          // Was cyan type on an indigo tint inside an indigo border — three
          // colours fighting on a 10px label. One colour, no chrome.
          <p className="mb-3 text-[0.6875rem] font-medium tracking-[0.14em] text-stealth-cyan uppercase">
            {tags[0]}
          </p>
        )}
        <h2 className="mb-2 line-clamp-2 text-lg leading-snug font-semibold text-white transition-colors group-hover:text-stealth-cyan">
          {/*
            Stretched link: the whole card is the target, but there is still
            exactly one link and one focus stop. Replaces the old pairing of a
            title link plus a duplicate "Read more" link to the same URL.
          */}
          <Link href={`/blog/${slug}`} className="after:absolute after:inset-0">
            {title}
          </Link>
        </h2>
        <p className="mb-5 line-clamp-3 flex-1 text-sm leading-relaxed text-stealth-gray">
          {excerpt}
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-stealth-dim">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
            <time dateTime={publishedAt}>{date}</time>
          </span>
          {authorName && (
            <span className="inline-flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" aria-hidden="true" />
              {authorName}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
