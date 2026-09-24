import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  featured?: boolean
}

/**
 * Dark variant. The services band sits on the Near Black page ground, so the
 * cards lift to the elevated surface #101320. Elevation is for things you can
 * click, not for whole sections.
 *
 * Cobalt is deliberately not used for the glyph or the link here: it is
 * 2.6:1 on this ground. Vivid Sky carries them at 10.7:1.
 */
export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex rounded-lg border border-stealth-navy-light bg-stealth-navy p-6 transition-[border-color,background-color] duration-200 ease-out-quart hover:border-stealth-cyan/40 hover:bg-stealth-navy-light/60"
    >
      {/*
        No `items-start`: it would stop the text column stretching to the card's
        full height, which is what `mt-auto` below needs to align the actions.
      */}
      <div className="flex w-full gap-4">
        <span className="mt-0.5 shrink-0 self-start text-stealth-cyan" aria-hidden="true">
          {icon}
        </span>
        <div className="flex min-w-0 flex-1 flex-col">
          <h3 className="mb-2 font-semibold text-white transition-colors group-hover:text-stealth-cyan">
            {title}
          </h3>
          <p className="mb-5 text-sm leading-relaxed text-stealth-gray">{description}</p>
          <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-stealth-cyan">
            Learn more
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 ease-out-quart group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </Link>
  )
}
