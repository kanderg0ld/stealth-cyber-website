import type { Metadata } from 'next'
import StealthHome from '@/components/home/StealthHome'
import FaqJsonLd from '@/components/structured-data/FaqJsonLd'
import HowToJsonLd from '@/components/structured-data/HowToJsonLd'

export const metadata: Metadata = {
  title: 'Stealth Cyber | Global Managed Cybersecurity Services',
  description: 'Enterprise-level cyber defence for businesses that demand the highest protection. 24/7 threat monitoring, incident response, CMMC, ISO 27001, Essential Eight, AI security, and GRC from offices in Gold Coast, São Paulo, and Texas.',
  keywords: [
    'managed cybersecurity services', 'managed detection and response Australia',
    'incident response Gold Coast', 'Essential Eight compliance', 'CMMC assessment',
    'ISO 27001 consultant', 'AI security services', 'penetration testing Australia',
    'cybersecurity consultancy',
  ],
  openGraph: {
    title: 'Stealth Cyber | Global Managed Cybersecurity Services',
    description: 'Enterprise-level cyber defence for businesses that demand the highest protection. 24/7 threat monitoring, incident response, CMMC, ISO 27001, Essential Eight, AI security. Offices in AU, BR, US.',
    url: 'https://stealthcyber.io',
  },
  alternates: { canonical: 'https://stealthcyber.io' },
}

// Published as FAQ structured data and rendered by the homepage FAQ, so the
// two always match.
const faqs = [
  {
    question: 'What is proactive cybersecurity and how is it different from reactive?',
    answer: 'Proactive cybersecurity focuses on preventing attacks before they happen, using continuous monitoring, vulnerability management, threat hunting, and security awareness training. Reactive cybersecurity responds after a breach has occurred, focusing on containment and recovery. Proactive security reduces the likelihood and impact of attacks, while reactive security manages the fallout. Most modern businesses need both, but investing in proactive measures significantly reduces overall risk and cost. Stealth Cyber delivers proactive 24/7 managed detection and response alongside reactive incident response services.',
  },
  {
    question: 'How do I know if my business has been compromised?',
    answer: 'Common signs of a business compromise include unusual network traffic, unexpected system slowdowns, unexplained account lockouts, employees receiving phishing emails from internal accounts, unfamiliar software or processes running on devices, and unexpected data transfers. Many breaches go undetected for months because businesses lack continuous monitoring. The average dwell time for an undetected breach is over 200 days. A managed detection and response (MDR) service monitors your environment 24/7 and detects threats in minutes, not months.',
  },
  {
    question: 'What does a managed detection and response service actually include?',
    answer: 'A managed detection and response (MDR) service includes 24/7 monitoring of your endpoints, network, cloud, and email by trained security analysts in a Security Operations Centre (SOC). It covers real-time threat detection, alert investigation and triage, threat intelligence enrichment, automated and manual containment of active threats, incident escalation, and regular reporting. Unlike basic antivirus or SIEM tools, MDR analysts actively investigate every alert and take action on your behalf. Stealth Cyber\'s MDR service also includes monthly threat briefings and risk reports.',
  },
  {
    question: 'How much does managed cybersecurity cost for a small business in Australia?',
    answer: 'Managed cybersecurity for a small business in Australia typically ranges from $1,500 to $10,000 per month depending on the number of users, devices, and services included. Basic managed security (endpoint protection, monitoring, and patching) sits at the lower end, while comprehensive MDR with 24/7 SOC monitoring, vulnerability management, and compliance support is at the higher end. For context, the average cost of a data breach for an Australian SMB exceeds $200,000. Stealth Cyber offers tailored packages based on your business size and risk profile.',
  },
  {
    question: 'What is the Essential Eight and does my business need to comply?',
    answer: 'The Essential Eight is a set of eight cybersecurity mitigation strategies developed by the Australian Cyber Security Centre (ACSC) to protect organisations against the most common cyber threats. It covers application control, patching applications, patching operating systems, multi-factor authentication, restricting admin privileges, restricting Office macros, user application hardening, and regular backups. Compliance is mandatory for Australian government entities and increasingly required by enterprise clients, insurers, and government contractors. Organisations are assessed at maturity levels 0 to 3. Even if not legally required, the Essential Eight is the most practical cybersecurity baseline for any Australian business.',
  },
  {
    question: 'How long does it take to set up managed cyber protection?',
    answer: 'Most businesses can be fully onboarded to a managed cybersecurity service within 2 to 4 weeks. The first week typically covers scoping, agent deployment on endpoints, and integration with your existing tools (email, cloud, network). Week two focuses on baseline tuning to reduce false positives and align alerting to your environment. By week three or four, 24/7 monitoring is fully operational. Stealth Cyber assigns a dedicated onboarding team to ensure a smooth transition with minimal disruption to your day-to-day operations.',
  },
  {
    question: 'What happens when a threat is detected?',
    answer: 'When a threat is detected, our SOC analysts immediately investigate to confirm whether it is a genuine threat or a false positive. If confirmed, the threat is contained automatically or manually depending on severity. This may include isolating an affected device, blocking a malicious IP, disabling a compromised account, or killing a malicious process. You are notified with a clear, jargon-free summary of what happened, what was done, and what you need to know. For critical incidents, our team escalates directly to your nominated contact by phone. Post-incident, we provide a full report with root cause analysis and hardening recommendations.',
  },
  {
    question: 'Is cyber insurance enough without a managed security service?',
    answer: 'No. Cyber insurance covers financial losses after a breach, but it does not prevent breaches or reduce their severity. Most cyber insurance policies also require businesses to meet minimum security standards before a claim will be paid. Common requirements include multi-factor authentication, regular patching, endpoint protection, and backup testing. If these controls are not in place, insurers can deny claims. A managed security service ensures you meet these requirements and actively prevents incidents, reducing both the likelihood of a claim and your insurance premiums.',
  },
  {
    question: 'What cybersecurity does a 50-person accounting firm actually need?',
    answer: 'A 50-person accounting firm handling sensitive financial data needs, at minimum: multi-factor authentication on all accounts, endpoint protection on every device, email security to block phishing, regular patching of operating systems and applications, encrypted and tested backups, security awareness training for all staff, and a documented incident response plan. Recommended additions include 24/7 managed detection and response (MDR), vulnerability scanning, dark web monitoring for leaked credentials, and Essential Eight compliance if operating in Australia. Stealth Cyber provides tailored packages for professional services firms that cover all of these requirements.',
  },
  {
    question: 'How do I assess my current cyber risk?',
    answer: 'The best way to assess your current cyber risk is to start with a structured self-assessment that evaluates your security controls across key areas like access management, patching, backups, incident response, and data protection. Stealth Cyber offers a free online cybersecurity self-assessment at stealthcyber.io/assessment that scores your organisation out of 100 and provides personalised recommendations. For a deeper review, a professional security assessment from a qualified cybersecurity provider will identify specific vulnerabilities, compliance gaps, and prioritised remediation steps tailored to your business.',
  },
]

export default function HomePage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <HowToJsonLd />
      <StealthHome faqs={faqs} />
    </>
  )
}
