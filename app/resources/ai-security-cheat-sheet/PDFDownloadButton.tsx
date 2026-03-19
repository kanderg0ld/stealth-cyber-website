'use client'

import { ArrowRight } from 'lucide-react'

export default function PDFDownloadButton() {
  return (
    <div className="no-print">
      <button
        onClick={() => window.print()}
        className="inline-flex items-center gap-2 px-6 py-3 btn-gradient text-white font-semibold text-sm rounded hover:opacity-90 transition-opacity"
        style={{ boxShadow: '0 4px 24px rgba(0,56,255,0.35)' }}
      >
        Download as PDF <ArrowRight className="w-4 h-4" />
      </button>
      <p className="text-stealth-gray text-xs mt-3">Tip: Enable &quot;Background graphics&quot; in print settings for the best result.</p>
    </div>
  )
}
