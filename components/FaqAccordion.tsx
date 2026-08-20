'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

interface FaqItem {
  question: string
  answer: string
}

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    // Ruled rows rather than a stack of bordered cards: an accordion is a list,
    // and giving each row its own container made ten of them read as ten cards.
    <div className="divide-y divide-stealth-navy-light border-y border-stealth-navy-light">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i
        return (
          <div key={i}>
            <h3>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
                className="flex w-full items-start justify-between gap-4 py-5 text-left transition-colors hover:text-white"
              >
                <span className="text-[0.9375rem] leading-relaxed font-medium text-stealth-ink">
                  {faq.question}
                </span>
                <Plus
                  className={`mt-0.5 h-4 w-4 shrink-0 text-stealth-cyan transition-transform duration-300 ease-out-quart ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            {/*
              grid-template-rows 0fr → 1fr animates to the content's real
              height. The previous max-h-96 silently clipped every answer over
              ~384px, which is most of them.
            */}
            <div
              id={`faq-answer-${i}`}
              role="region"
              aria-labelledby={`faq-question-${i}`}
              className={`grid transition-[grid-template-rows] duration-300 ease-out-quart ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-[70ch] pb-6 text-sm leading-relaxed text-stealth-gray">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
