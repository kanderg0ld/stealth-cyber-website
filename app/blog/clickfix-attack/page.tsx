import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import BreadcrumbJsonLd from '@/components/structured-data/BreadcrumbJsonLd'
import ArticleJsonLd from '@/components/structured-data/ArticleJsonLd'

export const metadata: Metadata = {
  title: 'ClickFix: The Attack That Asks You to Compromise Yourself',
  description: 'We responded to a macOS compromise where the victim executed the malicious command themselves. No exploit, no zero-day — just a fake CAPTCHA and social engineering. This is ClickFix.',
  alternates: { canonical: 'https://stealthcyber.io/blog/clickfix-attack' },
  openGraph: {
    title: 'ClickFix: The Attack That Asks You to Compromise Yourself | Stealth Cyber',
    description: 'We responded to a macOS compromise where the victim executed the malicious command themselves. No exploit, no zero-day — just a fake CAPTCHA and social engineering. This is ClickFix.',
    url: 'https://stealthcyber.io/blog/clickfix-attack',
    type: 'article',
    publishedTime: '2026-04-08',
  },
}

export default function ClickFixPost() {
  return (
    <>
      <ArticleJsonLd
        title="ClickFix: The Attack That Asks You to Compromise Yourself"
        description="We responded to a macOS compromise where the victim executed the malicious command themselves. No exploit, no zero-day — just a fake CAPTCHA and social engineering. This is ClickFix."
        url="https://stealthcyber.io/blog/clickfix-attack"
        publishedAt="2026-04-08"
        authorName="Bailey Marshall"
        imageUrl={undefined}
      />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://stealthcyber.io' },
        { name: 'Blog', url: 'https://stealthcyber.io/blog' },
        { name: 'ClickFix: The Attack That Asks You to Compromise Yourself', url: 'https://stealthcyber.io/blog/clickfix-attack' },
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
            {['Threat Intelligence', 'Incident Response', 'Social Engineering', 'macOS Security'].map((tag) => (
              <span key={tag} className="px-2.5 py-1 text-xs font-medium bg-stealth-cyan/10 text-stealth-cyan rounded-full border border-stealth-cyan/20">{tag}</span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            ClickFix: The Attack That Asks You to Compromise Yourself
          </h1>

          {/* Author and date */}
          <div className="flex items-center gap-3 text-sm mb-10 pb-8 border-b border-stealth-cyan/10">
            <div className="w-10 h-10 rounded-full bg-stealth-cyan/10 flex items-center justify-center text-stealth-cyan font-bold text-sm">BM</div>
            <div>
              <p className="text-white font-medium">Bailey Marshall</p>
              <p className="text-stealth-gray text-xs">Chief Technology Officer &middot; 8 April 2026</p>
            </div>
          </div>

          {/* Article body */}
          <div className="prose prose-lg prose-invert prose-cyan max-w-none prose-headings:text-white prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3 prose-p:text-stealth-gray prose-p:leading-relaxed prose-p:mb-6 prose-li:text-stealth-gray prose-strong:text-white prose-ul:my-6 prose-li:my-2">

            <p>
              We recently responded to a macOS compromise where the victim executed the malicious command themselves &mdash; willingly, without hesitation, because a website told them to.
            </p>

            <p>
              No exploit. No zero-day. No phishing email with a malicious attachment. Just a fake CAPTCHA, a bash command, and a user doing what the page instructed.
            </p>

            <p>
              This is ClickFix &mdash; and it&apos;s one of the most effective social engineering techniques we&apos;ve seen gain traction in 2026.
            </p>

            <h2>What Happened</h2>

            <p>
              A user visited a legitimate company website that had been quietly compromised. Instead of the normal site, they were greeted by what appeared to be a browser security check &mdash; a &ldquo;BotGuard&rdquo; human verification prompt, styled to look like the Cloudflare CAPTCHA most internet users see dozens of times a week.
            </p>

            <p>
              The prompt instructed the user to:
            </p>

            <ol>
              <li>Open Terminal</li>
              <li>Paste the provided command</li>
              <li>Press Enter to &ldquo;complete verification&rdquo;</li>
            </ol>

            <p>
              The user followed the steps. The command executed a Base64-encoded AppleScript payload delivered from a command-and-control domain. That payload contacted a secondary C2 server to pull down additional modules. Within seconds, the malware was systematically copying browser databases &mdash; saved passwords, active session cookies, browsing history &mdash; and staging them in a temporary directory ready for exfiltration.
            </p>

            <p>
              Huntress EDR detected the activity at execution and automatically isolated the host from the network, cutting off the exfiltration attempt. A non-standard browser profile configuration on this particular machine meant the malware targeted file paths that didn&apos;t exist &mdash; so credential theft was minimal. Remediation was completed the same day.
            </p>

            <p>
              The outcome was contained. It easily could not have been.
            </p>

            <h2>Why ClickFix Works</h2>

            <p>
              ClickFix (sometimes called InstallFix in newer variants) exploits several overlapping psychological and technical realities:
            </p>

            <p>
              <strong>Trusted site, malicious payload.</strong> The fake CAPTCHA appears on a real website &mdash; one the user has visited before and trusts. The infection begins before the user has any reason to be suspicious.
            </p>

            <p>
              <strong>Familiar UX patterns.</strong> Browser-based verification prompts are part of everyday internet use. Users are conditioned to follow them without scrutiny.
            </p>

            <p>
              <strong>Legitimate-sounding branding.</strong> Names like &ldquo;BotGuard,&rdquo; &ldquo;Cloudflare Verification,&rdquo; and &ldquo;Human Check&rdquo; borrow credibility from real services.
            </p>

            <p>
              <strong>Developer blind spots.</strong> The pattern of <code>curl | bash</code> is a legitimate installation method used by tools like Homebrew, Rust, and nvm. Developers who run install commands regularly are particularly susceptible &mdash; the red flags are lower because the pattern is familiar.
            </p>

            <p>
              <strong>Bypasses security controls entirely.</strong> Because the user initiates the action, the operating system treats it as legitimate. There&apos;s no exploit to detect, no malicious file attachment to block. Traditional security tools largely see nothing until the payload executes.
            </p>

            <h2>The Threat Landscape in 2026</h2>

            <p>
              ClickFix is no longer a novel technique used by a handful of actors. It has become a full attack framework adopted across at least 20 distinct malware campaigns between February and March 2026 alone, targeting both macOS and Windows users.
            </p>

            <p>
              <strong>On macOS:</strong> Users are directed to Terminal to paste a bash or curl command, which downloads an infostealer &mdash; typically an AppleScript-based payload or a Nuitka-compiled Python binary.
            </p>

            <p>
              <strong>On Windows:</strong> Users are directed to the Run dialog (Win+R), instructed to paste and execute a command that deploys PowerShell or mshta.exe payloads &mdash; infostealers like StealC, Lumma Stealer, or Rhadamanthys.
            </p>

            <p>
              macOS users are disproportionately targeted. Of the campaigns tracked in early 2026, seven targeted macOS exclusively, and nine targeted both platforms. The likely reason: macOS users tend to hold higher-value credentials &mdash; SSH keys, cloud API tokens, developer secrets, and cryptocurrency wallets &mdash; making each successful infection more lucrative.
            </p>

            <p>
              Known malware families currently using ClickFix distribution include:
            </p>

            <ul>
              <li><strong>Infiniti Stealer</strong> &mdash; macOS-specific, Nuitka-compiled Python infostealer</li>
              <li><strong>MacSync</strong> &mdash; macOS infostealer with dynamic AppleScript payloads and in-memory execution</li>
              <li><strong>Amatera</strong> &mdash; Cross-platform, targeting browser data, session tokens, and crypto wallets</li>
              <li><strong>StealC</strong> &mdash; Windows infostealer harvesting browser logins and Outlook credentials</li>
              <li><strong>Lumma Stealer</strong> &mdash; Cross-platform, delivered via fake CAPTCHAs and counterfeit app installers</li>
              <li><strong>ModeloRAT</strong> &mdash; Python-based trojan distributed via the KongTuke traffic distribution system through compromised WordPress sites</li>
            </ul>

            <p>
              Distribution vectors extend beyond compromised websites. ClickFix campaigns also reach users through malvertising (sponsored search results on Google and Bing), SEO-poisoned pages, phishing emails, and fake software installers &mdash; including pages mimicking legitimate developer tools.
            </p>

            <p>
              The variant involved in this incident was first observed only two days before we responded to it. These campaigns rotate infrastructure and payloads rapidly to stay ahead of detection.
            </p>

            <h2>The Golden Rule</h2>

            <p>
              No legitimate CAPTCHA, verification service, or browser security check will ever ask you to open Terminal, Command Prompt, PowerShell, or the Run dialog and paste a command.
            </p>

            <p>
              Full stop. This is universally an attack vector. Legitimate verification happens entirely within the browser. If a website asks you to execute a system command &mdash; regardless of how professional the prompt looks, how trusted the site is, or how convincing the branding appears &mdash; it is attempting to compromise your system. Close the tab.
            </p>

            <h2>What Defenders Should Do</h2>

            <h3>For individuals</h3>

            <ul>
              <li>Treat any &ldquo;verification&rdquo; that requires leaving your browser as an attack &mdash; close the tab immediately</li>
              <li>Stop saving passwords in your browser. Use a dedicated password manager (1Password, Bitwarden). Browser credential stores are the primary target of infostealer campaigns</li>
              <li>Enable MFA on all critical accounts</li>
              <li>If you accidentally execute a suspicious command, disconnect from the internet immediately and begin incident response &mdash; don&apos;t wait to see what happens</li>
            </ul>

            <h3>For organisations</h3>

            <ul>
              <li>Deploy EDR on every endpoint &mdash; macOS included. This incident was contained because Huntress detected and isolated the host at execution. Without EDR, there would have been no alert and no containment</li>
              <li>Run security awareness training that specifically covers ClickFix, including both the Terminal (macOS) and Run dialog (Windows) variants. The technique is prevalent enough in 2026 that it warrants dedicated coverage</li>
              <li>Monitor for <code>osascript</code> execution referencing browser data paths, curl commands contacting unknown domains, and PowerShell/mshta.exe execution from user-initiated contexts</li>
              <li>Alert on abnormal file descriptor limit changes on macOS &mdash; this is a known ClickFix indicator</li>
              <li>Block known malicious domains at the network perimeter and keep IOC feeds current</li>
              <li>If you run WordPress-based web properties, monitor for KongTuke/404 TDS injection indicators &mdash; the KongTuke traffic distribution system is actively compromising WordPress sites to inject fake CAPTCHA lures</li>
            </ul>

            <h3>For website owners</h3>

            <ul>
              <li>Audit your web applications regularly for injected JavaScript</li>
              <li>Implement Content Security Policy (CSP) headers to restrict unauthorised script execution</li>
              <li>Use Subresource Integrity (SRI) for third-party scripts</li>
              <li>Keep WordPress plugins updated &mdash; plugin vulnerabilities are a primary compromise vector for sites being used in ClickFix distribution</li>
            </ul>

            <h2>The Bottom Line</h2>

            <p>
              The three factors that limited damage in this incident were: a non-standard browser configuration that happened to put credential data outside the malware&apos;s default target paths, Huntress EDR detecting and isolating the host within seconds of execution, and immediate incident response. Two of those three are things you can control. One was luck.
            </p>

            <p>
              ClickFix works because it replaces technical exploitation with social engineering &mdash; and social engineering scales. The same attack that compromised a macOS developer machine this week is running across dozens of campaigns simultaneously, hitting Windows endpoints through Run dialog lures, targeting accounting firm staff through fake Cloudflare prompts, and reaching developers through fake installer pages for tools they actually use.
            </p>

            <p>
              The technique will keep evolving. InstallFix variants have already eliminated the fake CAPTCHA step entirely, masquerading as legitimate software installers to trigger the same user-initiated execution.
            </p>

            <p>
              The defence doesn&apos;t change: know the pattern, trust your endpoint controls, and treat any web-initiated request to run a system command as hostile.
            </p>

            <h2>How Stealth Cyber Helps</h2>

            <p>
              Stealth Cyber provides managed detection and response, incident response, and security awareness training for SMBs across Australia and globally. Our SOC monitors your endpoints around the clock, and our incident response team is on call when something gets through.
            </p>

            <p>
              This incident was contained because the right controls were already in place. If you want to understand your organisation&apos;s exposure to social engineering campaigns like ClickFix &mdash; or make sure you have the detection and response capability to catch what your users miss &mdash; we can help.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-stealth-navy rounded-2xl border border-stealth-cyan/10 p-8 md:p-10">
            <h3 className="text-white font-bold text-xl mb-3">Are Your Endpoints Protected?</h3>
            <p className="text-stealth-gray leading-relaxed mb-6">
              ClickFix bypasses traditional security controls because the user initiates the action. EDR with 24/7 monitoring is the difference between containment and compromise. Find out where your organisation stands.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-stealth-cyan text-stealth-dark font-semibold text-sm rounded-lg hover:bg-white transition-colors"
              >
                Speak With Our Team <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/assessment"
                className="inline-flex items-center gap-2 px-6 py-3 border border-stealth-cyan/40 text-white font-semibold text-sm rounded-lg hover:border-stealth-cyan/60 transition-colors"
              >
                Free Self-Assessment
              </Link>
            </div>
          </div>

          {/* Back to blog */}
          <div className="mt-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-stealth-gray text-sm hover:text-stealth-cyan transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
