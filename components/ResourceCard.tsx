import Link from 'next/link'
import Image from 'next/image'
import { FileText, Download } from 'lucide-react'

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
    <article className="group relative flex flex-col overflow-hidden rounded-lg border border-stealth-navy-light bg-stealth-navy transition-[border-color] duration-200 ease-out-quart hover:border-stealth-cyan/30 focus-within:border-stealth-cyan/50">
      {imageUrl ? (
        <div className="relative h-40 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out-quart group-hover:scale-[1.03]"
          />
        </div>
      ) : (
        <div className="flex h-40 items-center justify-center bg-stealth-navy-light">
          <FileText className="h-10 w-10 text-stealth-dim" aria-hidden="true" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        {category && (
          <p className="mb-3 text-[0.6875rem] font-medium tracking-[0.14em] text-stealth-cyan uppercase">
            {categoryLabels[category] || category}
          </p>
        )}
        <h2 className="mb-2 line-clamp-2 text-base leading-snug font-semibold text-white transition-colors group-hover:text-stealth-cyan">
          {/* Stretched link — whole card is the target, one focus stop. */}
          <Link href={`/resources/${slug}`} className="after:absolute after:inset-0">
            {title}
          </Link>
        </h2>
        <p className="mb-5 line-clamp-2 flex-1 text-sm leading-relaxed text-stealth-gray">
          {description}
        </p>
        <p className="inline-flex items-center gap-2 text-sm font-medium text-stealth-cyan">
          <Download className="h-4 w-4" aria-hidden="true" />
          Download Resource
        </p>
      </div>
    </article>
  )
}
