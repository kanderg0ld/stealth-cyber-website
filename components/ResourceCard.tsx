import Link from 'next/link'
import Image from 'next/image'
import { FileText, Download, Tag } from 'lucide-react'

interface ResourceCardProps {
  title: string
  description: string
  slug: string
  category?: string
  imageUrl?: string
}

const categoryLabels: Record<string, string> = {
  'threat-intelligence': 'Threat Intelligence',
  'compliance': 'Compliance',
  'incident-response': 'Incident Response',
  'essential-eight': 'Essential Eight',
  'grc': 'GRC',
}

export default function ResourceCard({ title, description, slug, category, imageUrl }: ResourceCardProps) {
  return (
    <article className="group bg-stealth-navy border border-stealth-navy-light rounded-lg overflow-hidden hover:border-stealth-cyan/30 transition-all duration-300">
      {imageUrl ? (
        <div className="relative h-40 overflow-hidden">
          <Image src={imageUrl} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
      ) : (
        <div className="h-40 flex items-center justify-center bg-stealth-navy-light">
          <FileText className="w-12 h-12 text-stealth-cyan/30" />
        </div>
      )}
      <div className="p-5">
        {category && (
          <div className="flex items-center gap-1 mb-3">
            <Tag className="w-3 h-3 text-stealth-cyan" />
            <span className="text-stealth-cyan text-xs font-medium bg-stealth-indigo/10 border border-stealth-indigo/30 rounded px-1.5 py-0.5">{categoryLabels[category] || category}</span>
          </div>
        )}
        <h2 className="text-white font-semibold text-base mb-2 leading-snug group-hover:text-stealth-cyan transition-colors line-clamp-2">
          {title}
        </h2>
        <p className="text-stealth-gray text-sm leading-relaxed mb-4 line-clamp-2">{description}</p>
        <Link
          href={`/resources/${slug}`}
          className="inline-flex items-center gap-2 text-stealth-cyan text-sm font-medium hover:text-stealth-teal transition-colors"
        >
          <Download className="w-4 h-4" />
          Download Resource
        </Link>
      </div>
    </article>
  )
}
