import type { Metadata } from 'next'
import BreadcrumbJsonLd from '@/components/structured-data/BreadcrumbJsonLd'
import AIReadinessQuiz from './AIReadinessQuiz'

export const metadata: Metadata = {
  title: 'Free AI Readiness Assessment | Is Your Business Ready for AI?',
  description: 'Take Stealth Cyber\'s free AI readiness self-assessment. Answer 20 questions and get a personalised AI readiness score with recommendations for adopting AI safely.',
  alternates: { canonical: 'https://stealthcyber.io/ai-assessment' },
  openGraph: {
    title: 'Free AI Readiness Assessment | Stealth Cyber',
    description: 'Is your business ready for AI? Take our 5-minute self-assessment to find out your AI readiness level and get personalised recommendations.',
    url: 'https://stealthcyber.io/ai-assessment',
  },
}

export default function AIAssessmentPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', url: 'https://stealthcyber.io' }, { name: 'AI Readiness Assessment', url: 'https://stealthcyber.io/ai-assessment' }]} />
      <AIReadinessQuiz />
    </>
  )
}
