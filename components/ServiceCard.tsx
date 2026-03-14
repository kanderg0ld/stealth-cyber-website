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
        'group block p-6 rounded-lg border transition-all duration-300',
        featured
          ? 'border-stealth-cyan/40 bg-stealth-cyan/5 hover:border-stealth-cyan hover:bg-stealth-cyan/10'
          : 'border-stealth-cyan/10 bg-stealth-navy hover:border-stealth-cyan/30 hover:bg-stealth-navy-light'
      )}
    >
      <div className="flex items-start gap-4">
        <div className={clsx(
          'p-2.5 rounded-lg shrink-0',
          featured ? 'bg-stealth-cyan/20 text-stealth-cyan' : 'bg-stealth-navy-light text-stealth-cyan'
        )}>
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-semibold mb-2 group-hover:text-stealth-cyan transition-colors">
            {title}
          </h3>
          <p className="text-stealth-gray text-sm leading-relaxed mb-4">{description}</p>
          <div className="flex items-center gap-1 text-stealth-cyan text-sm font-medium">
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  )
}
