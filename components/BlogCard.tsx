import Link from 'next/link'
import Image from 'next/image'
import { Calendar, User, Tag } from 'lucide-react'

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
    <article className="group bg-stealth-navy border border-stealth-cyan/10 rounded-lg overflow-hidden hover:border-stealth-cyan/30 transition-all duration-300">
      {imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <Image src={imageUrl} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-stealth-navy/80 to-transparent" />
        </div>
      )}
      <div className="p-5">
        {tags && tags.length > 0 && (
          <div className="flex items-center gap-1 mb-3">
            <Tag className="w-3 h-3 text-stealth-cyan" />
            <span className="text-stealth-cyan text-xs font-medium">{tags[0]}</span>
          </div>
        )}
        <h2 className="text-white font-semibold text-lg mb-2 leading-snug group-hover:text-stealth-cyan transition-colors line-clamp-2">
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h2>
        <p className="text-stealth-gray text-sm leading-relaxed mb-4 line-clamp-3">{excerpt}</p>
        <div className="flex items-center gap-4 text-xs text-stealth-gray">
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>{date}</span>
          </div>
          {authorName && (
            <div className="flex items-center gap-1">
              <User className="w-3.5 h-3.5" />
              <span>{authorName}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
