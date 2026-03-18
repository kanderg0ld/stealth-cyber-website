import type { Metadata } from 'next'
import BreadcrumbJsonLd from '@/components/structured-data/BreadcrumbJsonLd'
import AssessmentQuiz from './AssessmentQuiz'

export const metadata: Metadata = {
  title: 'Free Cybersecurity Self-Assessment | 20 Questions',
  description: 'Take Stealth Cyber\'s free cybersecurity self-assessment quiz. Answer 20 questions about your organisation\'s security posture and get a personalised risk score with actionable recommendations.',
  alternates: { canonical: 'https://stealthcyber.io/assessment' },
  openGraph: {
    title: 'Free Cybersecurity Self-Assessment | Stealth Cyber',
    description: 'How secure is your business? Take our 5-minute self-assessment to find out your cyber risk level and get personalised recommendations.',
    url: 'https://stealthcyber.io/assessment',
  },
}

export default function AssessmentPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', url: 'https://stealthcyber.io' }, { name: 'Cybersecurity Assessment', url: 'https://stealthcyber.io/assessment' }]} />
      <AssessmentQuiz />
    </>
  )
}
