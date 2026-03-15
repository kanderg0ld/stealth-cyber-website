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

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group relative block rounded-lg border border-gray-200 bg-white transition-all duration-300 overflow-hidden hover:border-stealth-cyan/50 hover:shadow-lg"
    >
      <div className="h-0.5 bg-brand-gradient w-full" />
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="p-2.5 rounded-lg shrink-0 border bg-gradient-to-br from-stealth-blue/10 to-stealth-indigo/10 border-stealth-blue/20 text-stealth-blue">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-gray-900 font-semibold mb-2 group-hover:text-stealth-blue transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
            <div className="flex items-center gap-1 text-stealth-blue text-sm font-medium group-hover:text-stealth-indigo transition-colors">
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
