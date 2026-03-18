'use client'

import { useState, useRef, FormEvent } from 'react'

const SERVICES = [
  { value: '', label: 'Select a service...' },
  { value: 'mdr', label: 'Managed Detection & Response' },
  { value: 'incident-response', label: 'Incident Response' },
  { value: 'essential-eight', label: 'Essential Eight Compliance' },
  { value: 'cmmc', label: 'CMMC Assessment' },
  { value: 'iso27001', label: 'ISO 27001 Certification' },
  { value: 'ai-security', label: 'AI Security' },
  { value: 'ai-management', label: 'AI Management Systems' },
  { value: 'grc', label: 'GRC & Compliance' },
  { value: 'mss', label: 'Managed Security Services' },
  { value: 'pentest', label: 'Penetration Testing' },
  { value: 'other', label: 'Other / Not Sure' },
]

const inputClass =
  'w-full px-4 py-2.5 bg-stealth-dark border border-stealth-cyan/20 rounded text-white placeholder-stealth-gray focus:outline-none focus:border-stealth-cyan text-sm'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setStatus('success')
        formRef.current?.reset()
      } else {
        const json = await res.json().catch(() => ({}))
        setStatus('error')
        setErrorMsg(
          res.status === 429
            ? 'Too many submissions. Please try again in an hour.'
            : json.error || 'Something went wrong. Please try again or call us directly.'
        )
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please check your connection and try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-stealth-navy rounded-xl border border-stealth-cyan/20 p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-stealth-cyan/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-stealth-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-white font-bold text-lg mb-2">Message Sent</h3>
        <p className="text-stealth-gray text-sm">
          Thanks for reaching out. A member of our team will be in touch within one business day.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-stealth-navy rounded-xl border border-stealth-cyan/10 p-8">
      <h2 className="text-white font-bold text-xl mb-6">Send Us a Message</h2>

      {status === 'error' && (
        <div className="mb-5 px-4 py-3 rounded border border-red-500/40 bg-red-500/10 text-red-400 text-sm">
          {errorMsg}
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5" htmlFor="firstName">
              First Name <span aria-hidden>*</span>
            </label>
            <input id="firstName" type="text" name="firstName" required maxLength={100}
              className={inputClass} placeholder="Jane" autoComplete="given-name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5" htmlFor="lastName">
              Last Name <span aria-hidden>*</span>
            </label>
            <input id="lastName" type="text" name="lastName" required maxLength={100}
              className={inputClass} placeholder="Smith" autoComplete="family-name" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5" htmlFor="email">
            Email Address <span aria-hidden>*</span>
          </label>
          <input id="email" type="email" name="email" required maxLength={254}
            className={inputClass} placeholder="jane@example.com" autoComplete="email" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5" htmlFor="phone">
            Phone Number
          </label>
          <input id="phone" type="tel" name="phone" maxLength={30}
            className={inputClass} placeholder="+61 4XX XXX XXX" autoComplete="tel" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5" htmlFor="organisation">
            Organisation
          </label>
          <input id="organisation" type="text" name="organisation" maxLength={200}
            className={inputClass} placeholder="Your company name" autoComplete="organization" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5" htmlFor="service">
            Service of Interest
          </label>
          <select id="service" name="service"
            className={`${inputClass} cursor-pointer`}>
            {SERVICES.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5" htmlFor="message">
            Message <span aria-hidden>*</span>
          </label>
          <textarea id="message" name="message" required minLength={10} maxLength={5000}
            rows={4} className={`${inputClass} resize-none`}
            placeholder="Tell us about your security needs or the incident you're dealing with..." />
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full py-3 bg-stealth-cyan text-stealth-dark font-semibold rounded hover:bg-white transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? 'Sending…' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}
