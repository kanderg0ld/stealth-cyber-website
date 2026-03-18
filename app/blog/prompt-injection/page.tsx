import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import BreadcrumbJsonLd from '@/components/structured-data/BreadcrumbJsonLd'
import ArticleJsonLd from '@/components/structured-data/ArticleJsonLd'

export const metadata: Metadata = {
  title: 'Prompt Injection: How Attackers Manipulate AI Systems',
  description: 'Prompt injection is one of the biggest security risks facing AI systems today. Learn how it works, common manipulation techniques, and how to secure your LLMs.',
  alternates: { canonical: 'https://stealthcyber.io/blog/prompt-injection' },
  openGraph: {
    title: 'Prompt Injection: How Attackers Manipulate AI Systems | Stealth Cyber',
    description: 'Prompt injection is one of the biggest security risks facing AI systems today. Learn how it works, common manipulation techniques, and how to secure your LLMs.',
    url: 'https://stealthcyber.io/blog/prompt-injection',
    type: 'article',
    publishedTime: '2026-03-18',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Prompt Injection: How Attackers Manipulate AI Systems' }],
  },
}

export default function PromptInjectionPost() {
  return (
    <>
      <ArticleJsonLd
        title="Prompt Injection: How Attackers Manipulate AI Systems"
        description="Prompt injection is one of the biggest security risks facing AI systems today. Learn how it works, common manipulation techniques, and how to secure your LLMs."
        url="https://stealthcyber.io/blog/prompt-injection"
        publishedAt="2026-03-18"
        authorName="Kat Ho"
        imageUrl={undefined}
      />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://stealthcyber.io' },
        { name: 'Blog', url: 'https://stealthcyber.io/blog' },
        { name: 'Prompt Injection', url: 'https://stealthcyber.io/blog/prompt-injection' },
      ]} />

      <article className="bg-stealth-dark py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <div className="mb-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-stealth-gray text-sm hover:text-stealth-cyan transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['AI Security', 'LLM', 'Prompt Injection', 'Red Teaming'].map((tag) => (
              <span key={tag} className="px-2.5 py-1 text-xs font-medium bg-stealth-cyan/10 text-stealth-cyan rounded-full border border-stealth-cyan/20">{tag}</span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Prompt Injection: How Attackers Manipulate AI Systems
          </h1>

          {/* Author and date */}
          <div className="flex items-center gap-3 text-sm mb-10 pb-8 border-b border-stealth-cyan/10">
            <div className="w-10 h-10 rounded-full bg-stealth-cyan/10 flex items-center justify-center text-stealth-cyan font-bold text-sm">KH</div>
            <div>
              <p className="text-white font-medium">Kat Ho</p>
              <p className="text-stealth-gray text-xs">Offensive Security Analyst &middot; 18 March 2026</p>
            </div>
          </div>

          {/* Article body */}
          <div className="prose prose-lg prose-invert prose-cyan max-w-none prose-headings:text-white prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-stealth-gray prose-p:leading-relaxed prose-p:mb-6 prose-li:text-stealth-gray prose-strong:text-white prose-ul:my-6 prose-li:my-2">
            <p>
              Prompt injection is similar to SQL injection in the sense that both rely on crafted text input to manipulate a system. It occurs when an individual crafts prompts designed to manipulate a model into exposing data, conducting malicious actions, or producing unethical outputs.
            </p>

            <p>
              The key difference is that prompt injection doesn&apos;t require knowledge of code or syntax. It only requires an understanding of how a Large Language Model (LLM) can be manipulated.
            </p>

            <p>
              LLMs don&apos;t run on code. They run on plain-text instructions. This means that any guardrails put in place can potentially be exploited. Guardrails also vary in strength, and the more basic ones can be bypassed even by those with limited technical knowledge. Since LLMs operate on instructions and tokenisation based on probability, there is always a chance they can be broken and manipulated.
            </p>

            <h2>Common Manipulation Techniques</h2>

            <ul>
              <li><strong>Encoding tactics</strong> such as Base64, URL encoding, and HTML entities can be used to disguise restricted content.</li>
              <li><strong>Synonyms</strong> can bypass models that rely on wordlist-based rules.</li>
              <li><strong>Role-playing</strong> involves convincing the AI to adopt a character or story that leads it to produce outputs it otherwise wouldn&apos;t.</li>
              <li><strong>Typos and text variations</strong> are another simple way to slip past word restriction rules.</li>
            </ul>

            <h2>Securing LLMs</h2>

            <p>
              As LLMs become more widely adopted across businesses, having proper guardrails in place is more important than ever.
            </p>

            <p>
              There are many ways to secure an LLM, but each comes with its own trade-offs. Text-based instruction rules that restrict certain words, for example, can easily be bypassed using synonyms or encoding.
            </p>

            <p>
              One of the more robust approaches is Reinforcement Learning from Human Feedback (RLHF), a training method that uses human preferences as a reward signal to fine-tune models toward safer and more aligned behaviour. Pairing this with a human-in-the-loop system, where suspicious outputs are flagged and reviewed before reaching the end user, can further reduce the risk of malicious actions slipping through. That said, this approach can be costly and raises valid privacy concerns that need to be addressed.
            </p>

            <p>
              Beyond model-level defences, ensuring that sensitive data is not fed into the Retrieval Augmented Generation (RAG) system is equally important. The system should only have access to the data it needs to function, minimising the risk of data leakage.
            </p>

            <p>
              Prompt injection is a growing concern that is going to become more relevant as AI becomes further embedded in everyday business operations. Understanding how these attacks work is the first step toward building safer systems.
            </p>

            <h2>How Stealth Cyber Helps</h2>

            <p>
              At Stealth Cyber, we don&apos;t just talk about AI security. We test it. Our AI Red Team conducts real-world adversarial assessments against LLMs, AI agents, and generative AI systems, testing for the exact techniques outlined above and more.
            </p>

            <p>
              Our approach goes beyond automated scanning. We manually craft prompt injection attacks, test for data extraction and leakage, simulate role-playing exploits, and probe your AI&apos;s guardrails to find where they break. Every engagement produces a detailed, risk-rated report with practical remediation guidance your team can act on immediately.
            </p>

            <p>
              Our testing methodology aligns to the AIUC-1 standard, covering security, safety, reliability, accountability, and data privacy. Whether you&apos;re running a customer-facing chatbot, an internal AI assistant, or an AI-powered workflow, we help you understand exactly how your AI can be exploited and what to do about it.
            </p>

            <p>
              For organisations that are still in the early stages of AI adoption, our AI Readiness Assessment helps you evaluate your security posture, data governance, and risk appetite before you deploy, so you can move forward with confidence rather than hope.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-stealth-navy rounded-2xl border border-stealth-cyan/10 p-8 md:p-10">
            <h3 className="text-white font-bold text-xl mb-3">Is Your AI Secure?</h3>
            <p className="text-stealth-gray leading-relaxed mb-6">
              Stealth Cyber&apos;s AI Red Team tests your LLMs and AI systems against real-world prompt injection, jailbreaks, data extraction, and more. Find out how your AI holds up before an attacker does.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services/ai#ai-red-teaming"
                className="inline-flex items-center gap-2 px-6 py-3 bg-stealth-cyan text-stealth-dark font-semibold text-sm rounded-lg hover:bg-white transition-colors"
              >
                Learn About AI Red Teaming <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/ai-assessment"
                className="inline-flex items-center gap-2 px-6 py-3 border border-stealth-cyan/40 text-white font-semibold text-sm rounded-lg hover:border-stealth-cyan/60 transition-colors"
              >
                Take the AI Readiness Assessment
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
