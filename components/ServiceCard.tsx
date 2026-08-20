import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  featured?: boolean
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex rounded-lg border border-gray-200 bg-white p-6 transition-[border-color,box-shadow] duration-200 ease-out-quart hover:border-stealth-blue/40 hover:shadow-[0_10px_30px_-18px_rgba(0,56,255,0.45)]"
    >
      {/*
        Previously a full-width gradient strip sat across the top of every card
        and the icon lived in a tinted gradient tile. Both were decoration that
        repeated 10 times on the homepage; the glyph now carries the colour on
        its own.
      */}
      {/*
        No `items-start` here: it would stop the text column stretching to the
        card's full height, which is what `mt-auto` below needs to work. The
        icon opts out individually with `self-start`.
      */}
      <div className="flex w-full gap-4">
        <span className="mt-0.5 shrink-0 self-start text-stealth-blue" aria-hidden="true">
          {icon}
        </span>
        {/*
          Flex column with `mt-auto` on the action, so "Learn more" sits on a
          common baseline across each row instead of floating directly under
          copy of varying length and leaving dead space beneath.
        */}
        <div className="flex min-w-0 flex-1 flex-col">
          <h3 className="mb-2 font-semibold text-gray-900 transition-colors group-hover:text-stealth-blue">
            {title}
          </h3>
          <p className="mb-5 text-sm leading-relaxed text-stealth-body">{description}</p>
          <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-stealth-blue">
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
