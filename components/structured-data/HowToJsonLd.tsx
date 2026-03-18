import JsonLd from '@/components/JsonLd'

export default function HowToJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to Get Started with Stealth Cyber',
        description: 'A cybersecurity consultation with Stealth Cyber gives your organisation a clear picture of current security risks, compliance gaps, and actionable next steps.',
        estimatedCost: { '@type': 'MonetaryAmount', currency: 'AUD', value: '0' },
        totalTime: 'P3D',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Submit your enquiry',
            text: 'Complete the contact form at stealthcyber.io/contact or call +61 7 5230 8381. Provide your organisation name, industry, and a brief outline of any current security concerns.',
            url: 'https://stealthcyber.io/contact',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Initial scoping call',
            text: 'A Stealth Cyber consultant will contact you within one business day to schedule a 30-minute scoping call to understand your environment, size, and security objectives.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Assessment delivery',
            text: 'Our team conducts a structured review of your current security controls, policies, and compliance posture — typically completed remotely within 1–2 business days.',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Receive your report',
            text: 'You receive a clear, jargon-free report detailing your current security maturity, key risks, compliance gaps, and a prioritised roadmap of recommended actions — with no obligation to engage.',
          },
        ],
      }}
    />
  )
}
