import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import BreadcrumbJsonLd from '@/components/structured-data/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'Cybersecurity Blog',
  description: 'Cybersecurity insights, threat intelligence, and compliance guidance from the Stealth Cyber team.',
}

const posts = [
  {
    title: 'Microsoft Secure Score: Security Metric or False Sense of Confidence?',
    excerpt: 'Microsoft Secure Score matters, but only if you look at it the right way. What it actually measures, where businesses get it wrong, and how to use it to reduce real risk.',
    slug: 'microsoft-secure-score',
    publishedAt: '2026-03-26',
    author: 'Mariane Ribeiro, Cybersecurity Engineer',
    tags: ['Microsoft 365', 'Secure Score', 'M365 Security'],
  },
  {
    title: 'Why Accounting and Legal Firms Are the Perfect Target',
    excerpt: 'High-value data, trusted relationships, and deadline pressure make professional services firms prime targets for cybercriminals. Here is why, and what to do about it.',
    slug: 'accounting-legal-firms-target',
    publishedAt: '2026-03-18',
    author: 'Chris McDonald',
    tags: ['Professional Services', 'Threat Intelligence', 'BEC'],
  },
  {
    title: 'AI Management Systems: Why They Matter More Than You Think',
    excerpt: 'AI deployment has outpaced governance in most businesses. What an AI management system is, what it should cover, and why Australian businesses need one now.',
    slug: 'ai-management-systems',
    publishedAt: '2026-03-18',
    author: 'Chris McDonald',
    tags: ['AI Governance', 'ISO 42001', 'AI Management'],
  },
  {
    title: 'Is Your IT Provider Really Providing Optimal Cyber Protection? 10 Things to Consider',
    excerpt: 'IT management and cybersecurity are different disciplines. Here are 10 questions every Australian SMB should be asking their IT provider about cyber protection.',
    slug: 'is-your-it-provider-protecting-you',
    publishedAt: '2026-03-18',
    author: 'Chris McDonald',
    tags: ['SMB Security', 'IT Provider', 'Managed Security'],
  },
  {
    title: 'Demystifying ASD Essential Eight: It\'s Not That Hard, Is It?',
    excerpt: 'A plain-English breakdown of the ASD Essential Eight. What each control does, why most organisations are further along than they think, and where to start.',
    slug: 'essential-eight-demystified',
    publishedAt: '2026-03-18',
    author: 'Chris McDonald',
    tags: ['Essential Eight', 'Compliance', 'ASD'],
  },
  {
    title: 'Prompt Injection: How Attackers Manipulate AI Systems',
    excerpt: 'Prompt injection is one of the biggest security risks facing AI systems today. Learn how it works, common manipulation techniques, and how to secure your LLMs.',
    slug: 'prompt-injection',
    publishedAt: '2026-03-18',
    author: 'Kat Ho, Offensive Security Analyst',
    tags: ['AI Security', 'LLM', 'Prompt Injection'],
  },
]

export default function BlogPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', url: 'https://stealthcyber.io' }, { name: 'Blog', url: 'https://stealthcyber.io/blog' }]} />

      <section className="bg-stealth-dark py-20 border-b border-stealth-cyan/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-stealth-cyan text-xs font-medium uppercase tracking-widest mb-4">Insights</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Cybersecurity Blog</h1>
            <p className="text-stealth-gray text-lg">
              Threat intelligence, compliance guidance, and practical security advice
              straight from our SOC and advisory team.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-stealth-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-stealth-navy rounded-xl border border-stealth-cyan/10 overflow-hidden hover:border-stealth-cyan/30 transition-colors">
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-xs font-medium bg-stealth-cyan/10 text-stealth-cyan rounded-full border border-stealth-cyan/20">{tag}</span>
                    ))}
                  </div>
                  <h2 className="text-white font-bold text-lg mb-2 group-hover:text-stealth-cyan transition-colors">{post.title}</h2>
                  <p className="text-stealth-gray text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <p className="text-stealth-gray text-xs mb-4">{post.author}</p>
                  <div className="flex items-center justify-between border-t border-stealth-cyan/10 pt-4">
                    <span className="text-stealth-gray text-xs">{new Date(post.publishedAt).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <span className="inline-flex items-center gap-1 text-stealth-cyan text-xs font-medium group-hover:gap-2 transition-all">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
