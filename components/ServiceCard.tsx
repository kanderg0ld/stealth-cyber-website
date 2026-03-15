import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import clsx from 'clsx'

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  featured?: boolean
}

export default function ServiceCard({ title, description, icon, href, featured }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={clsx(
        'group relative block rounded-lg border transition-all duration-300 overflow-hidden',
        featured
          ? 'bg-stealth-navy-light border-stealth-navy-light hover:border-stealth-cyan/30'
          : 'bg-stealth-navy border border-stealth-navy-light hover:border-stealth-cyan/30'
      )}
    >
      {/* Featured top gradient strip */}
      {featured && (
        <div className="h-0.5 bg-brand-gradient w-full" />
      )}
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className={clsx(
            'p-2.5 rounded-lg shrink-0 border',
            'bg-gradient-to-br from-stealth-blue/10 to-stealth-indigo/10 border-stealth-blue/20 text-stealth-cyan'
          )}>
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-semibold mb-2 group-hover:text-stealth-cyan transition-colors">
              {title}
            </h3>
            <p className="text-stealth-gray text-sm leading-relaxed mb-4">{description}</p>
            <div className="flex items-center gap-1 text-stealth-cyan text-sm font-medium group-hover:text-stealth-teal transition-colors">
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
