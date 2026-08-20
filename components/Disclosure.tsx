import type { ReactNode } from 'react'
import { Plus } from 'lucide-react'

interface DisclosureProps {
  /** Trigger text. Should say what is inside, not "read more". */
  summary: string
  /** Optional short hint beside the trigger, e.g. a count. */
  hint?: string
  /** Open on first render. Use for the one item worth showing by default. */
  defaultOpen?: boolean
  children: ReactNode
}

/**
 * Built on native `<details>` rather than a React state toggle, deliberately:
 * it is keyboard accessible and screen-reader labelled with no JS, it works in
 * a server component, and the content is present for crawlers whether or not
 * it is expanded. That last point matters — this page is indexed.
 *
 * The trade-off is that the open/close cannot be height-animated. Rotating the
 * marker is the affordance instead, which is honest about what it does.
 */
export default function Disclosure({
  summary,
  hint,
  defaultOpen = false,
  children,
}: DisclosureProps) {
  return (
    <details className="group border-t border-nerv-hair" open={defaultOpen}>
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden">
        <span className="flex flex-wrap items-baseline gap-x-3">
          <span className="text-sm font-semibold text-white">{summary}</span>
          {hint && <span className="text-xs text-stealth-dim">{hint}</span>}
        </span>
        <Plus
          className="h-4 w-4 shrink-0 text-nerv-cyan transition-transform duration-200 ease-out-quart group-open:rotate-45"
          aria-hidden="true"
        />
      </summary>
      <div className="pb-6">{children}</div>
    </details>
  )
}
