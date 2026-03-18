'use client'

import { useState, useCallback } from 'react'
import {
  Shield,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  Lock,
  Mail,
  Building,
  User,
  HelpCircle,
  ChevronDown,
} from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface QuestionOption {
  label: string
  text: string
  score: number
}

interface Question {
  id: number
  area: string
  areaGroup: string
  question: string
  whyItMatters: string
  options: [QuestionOption, QuestionOption, QuestionOption, QuestionOption]
}

/* ------------------------------------------------------------------ */
/*  Questions (20)                                                     */
/* ------------------------------------------------------------------ */

const questions: Question[] = [
  // --- Application & Access Control ---
  {
    id: 1,
    area: 'Application Control',
    areaGroup: 'Application & Access Control',
    question: 'Do you control which applications can run on your business devices?',
    whyItMatters:
      'Uncontrolled software is one of the most common ways ransomware and malware get onto business networks. If anyone can install anything, a single rogue application can compromise your entire environment.',
    options: [
      { label: 'A', text: 'No — staff can install whatever they want on their devices', score: 0 },
      { label: 'B', text: 'We have informal guidelines but nothing enforced technically', score: 1 },
      { label: 'C', text: 'We restrict installations on most devices but some exceptions exist', score: 2 },
      { label: 'D', text: 'We enforce an approved application list across all business devices and review it regularly', score: 3 },
    ],
  },
  {
    id: 2,
    area: 'Privileged Access',
    areaGroup: 'Application & Access Control',
    question: 'How do you manage who has admin or privileged access to your systems?',
    whyItMatters:
      'Admin accounts are the keys to the kingdom. If an attacker compromises a privileged account, they can access everything. Limiting and monitoring these accounts dramatically reduces the blast radius of a breach.',
    options: [
      { label: 'A', text: 'Most staff have admin access to their devices and some shared systems', score: 0 },
      { label: 'B', text: 'A few people have admin access but we don\'t formally track or review it', score: 1 },
      { label: 'C', text: 'Admin access is limited to IT staff and reviewed occasionally', score: 2 },
      { label: 'D', text: 'Admin access is tightly controlled, individually assigned, regularly audited, and used only when needed', score: 3 },
    ],
  },
  {
    id: 3,
    area: 'Macros & Scripts',
    areaGroup: 'Application & Access Control',
    question: 'Do you restrict Microsoft Office macros or similar automated scripts in your environment?',
    whyItMatters:
      'Malicious macros hidden in email attachments remain one of the top methods attackers use to deploy ransomware. Blocking or restricting macros eliminates a huge attack vector with minimal impact on most staff.',
    options: [
      { label: 'A', text: 'No — macros and scripts can run freely on our devices', score: 0 },
      { label: 'B', text: 'We\'ve told staff not to enable macros from unknown sources, but it\'s not enforced', score: 1 },
      { label: 'C', text: 'Macros are blocked by default but some users have exceptions', score: 2 },
      { label: 'D', text: 'Macros are blocked across the organisation except for specifically approved and digitally signed macros', score: 3 },
    ],
  },

  // --- Patching & Updates ---
  {
    id: 4,
    area: 'OS Patching',
    areaGroup: 'Patching & Updates',
    question: 'How quickly do you apply security updates to your operating systems?',
    whyItMatters:
      'Attackers actively scan for unpatched systems and can exploit known vulnerabilities within hours of public disclosure. Delays in patching leave a window of opportunity that attackers routinely exploit.',
    options: [
      { label: 'A', text: 'We update when we get around to it or when something breaks', score: 0 },
      { label: 'B', text: 'We apply updates every few months but there\'s no set schedule', score: 1 },
      { label: 'C', text: 'We have a monthly patching cycle and apply critical patches within two weeks', score: 2 },
      { label: 'D', text: 'Critical patches are applied within 48 hours and routine updates within two weeks across all systems', score: 3 },
    ],
  },
  {
    id: 5,
    area: 'Application Patching',
    areaGroup: 'Patching & Updates',
    question: 'How quickly do you apply security updates to your business applications?',
    whyItMatters:
      'Applications like web browsers, PDF readers, and email clients are frequently targeted. Keeping them updated closes known security holes before attackers can use them to gain access to your systems.',
    options: [
      { label: 'A', text: 'We don\'t actively track or update individual applications', score: 0 },
      { label: 'B', text: 'We update some applications but many are out of date', score: 1 },
      { label: 'C', text: 'Most key applications are updated regularly but not all are covered', score: 2 },
      { label: 'D', text: 'All business applications are inventoried and updated promptly, with critical patches applied within 48 hours', score: 3 },
    ],
  },
  {
    id: 6,
    area: 'End-of-Life Software',
    areaGroup: 'Patching & Updates',
    question: 'Do you have a process to identify and replace end-of-life software that no longer receives security updates?',
    whyItMatters:
      'Software that no longer receives security patches is a sitting target. Attackers know these vulnerabilities will never be fixed, making end-of-life systems among the easiest to compromise.',
    options: [
      { label: 'A', text: 'We don\'t track which software is end-of-life', score: 0 },
      { label: 'B', text: 'We\'re aware of some end-of-life systems but haven\'t replaced them yet', score: 1 },
      { label: 'C', text: 'We\'re actively working to replace end-of-life software but some still exists', score: 2 },
      { label: 'D', text: 'We maintain a full inventory, plan replacements before end-of-life, and have no unsupported software in our environment', score: 3 },
    ],
  },

  // --- Authentication ---
  {
    id: 7,
    area: 'Multi-Factor Authentication',
    areaGroup: 'Authentication',
    question: 'Do you use multi-factor authentication (MFA) for accessing business systems?',
    whyItMatters:
      'Over 80% of breaches involve stolen credentials. Multi-factor authentication is the single most effective control to stop attackers using stolen passwords to access your systems. It can block over 99% of automated credential attacks.',
    options: [
      { label: 'A', text: 'We don\'t use MFA anywhere', score: 0 },
      { label: 'B', text: 'MFA is enabled on a few critical accounts like email admin', score: 1 },
      { label: 'C', text: 'MFA is enabled for most staff but not all systems or remote access', score: 2 },
      { label: 'D', text: 'MFA is enforced for all users across all business systems, including remote access and cloud services', score: 3 },
    ],
  },
  {
    id: 8,
    area: 'Password Policies',
    areaGroup: 'Authentication',
    question: 'Do you enforce strong password policies or use a password manager across your organisation?',
    whyItMatters:
      'Weak or reused passwords are trivially easy for attackers to crack or buy on the dark web. A password manager combined with strong, unique passwords for every account removes one of the simplest attack paths into your business.',
    options: [
      { label: 'A', text: 'There are no password requirements — staff choose their own', score: 0 },
      { label: 'B', text: 'We require passwords to be a minimum length but don\'t enforce complexity or uniqueness', score: 1 },
      { label: 'C', text: 'We have password policies in place and recommend a password manager', score: 2 },
      { label: 'D', text: 'We enforce strong password policies, mandate a company-wide password manager, and regularly audit for compromised credentials', score: 3 },
    ],
  },

  // --- Backups & Recovery ---
  {
    id: 9,
    area: 'Backup Frequency',
    areaGroup: 'Backups & Recovery',
    question: 'How often do you back up critical business data?',
    whyItMatters:
      'If ransomware encrypts your files or a disaster destroys your servers, backups are your lifeline. Without recent, reliable backups, you may face paying a ransom or losing data permanently — either of which can shut down a business.',
    options: [
      { label: 'A', text: 'We don\'t have a regular backup process', score: 0 },
      { label: 'B', text: 'We back up some data occasionally but it\'s not comprehensive', score: 1 },
      { label: 'C', text: 'We run daily backups of most critical systems', score: 2 },
      { label: 'D', text: 'We run automated daily backups of all critical data, stored offsite or in an immutable format, with defined retention policies', score: 3 },
    ],
  },
  {
    id: 10,
    area: 'Backup Testing',
    areaGroup: 'Backups & Recovery',
    question: 'Do you test your backups to make sure they actually work when you need them?',
    whyItMatters:
      'Many businesses discover their backups are corrupted or incomplete only when they desperately need them. Regularly testing restores ensures you can actually recover your data and systems when disaster strikes.',
    options: [
      { label: 'A', text: 'We\'ve never tested our backups', score: 0 },
      { label: 'B', text: 'We tested a restore once but it\'s not a regular process', score: 1 },
      { label: 'C', text: 'We test restores occasionally, maybe once a year', score: 2 },
      { label: 'D', text: 'We run scheduled restore tests at least quarterly and document the results to verify full recoverability', score: 3 },
    ],
  },

  // --- User Application Hardening ---
  {
    id: 11,
    area: 'Browser Hardening',
    areaGroup: 'Application Hardening',
    question: 'Do you block web browsers from running Flash, Java, or web ads on business devices?',
    whyItMatters:
      'Malicious ads and outdated browser plugins like Flash and Java are common entry points for drive-by downloads. Blocking these removes easy attack paths that require no user interaction to compromise a device.',
    options: [
      { label: 'A', text: 'No — browsers are configured with default settings', score: 0 },
      { label: 'B', text: 'We\'ve uninstalled Flash but haven\'t applied other browser restrictions', score: 1 },
      { label: 'C', text: 'We block some plugins and use ad-blocking on most devices', score: 2 },
      { label: 'D', text: 'Browsers are fully hardened — unnecessary plugins are blocked, ads are filtered, and settings are centrally managed', score: 3 },
    ],
  },
  {
    id: 12,
    area: 'Browser Extensions',
    areaGroup: 'Application Hardening',
    question: 'Do you restrict which browser extensions your team can install?',
    whyItMatters:
      'Browser extensions can see everything you do online, including passwords and sensitive data. A malicious or compromised extension can silently steal credentials and business information without anyone noticing.',
    options: [
      { label: 'A', text: 'Staff can install any extensions they want', score: 0 },
      { label: 'B', text: 'We\'ve asked staff to be cautious but don\'t enforce restrictions', score: 1 },
      { label: 'C', text: 'We block some known-risky extensions but allow most others', score: 2 },
      { label: 'D', text: 'Only pre-approved extensions can be installed, enforced through policy, and the list is reviewed regularly', score: 3 },
    ],
  },

  // --- Incident Response ---
  {
    id: 13,
    area: 'Incident Response Plan',
    areaGroup: 'Incident Response',
    question: 'Do you have a documented plan for responding to a cyber incident?',
    whyItMatters:
      'When a breach happens, every minute counts. Organisations without a documented plan waste critical time deciding what to do, who to call, and how to contain the damage — often making the situation much worse.',
    options: [
      { label: 'A', text: 'No — we\'d figure it out if something happened', score: 0 },
      { label: 'B', text: 'We have a rough idea of what to do but nothing written down', score: 1 },
      { label: 'C', text: 'We have a documented plan with assigned roles but it hasn\'t been updated recently', score: 2 },
      { label: 'D', text: 'We have a comprehensive, up-to-date incident response plan with clear roles, escalation paths, and communication templates', score: 3 },
    ],
  },
  {
    id: 14,
    area: 'Incident Response Testing',
    areaGroup: 'Incident Response',
    question: 'Has your team ever practiced or rehearsed your incident response plan?',
    whyItMatters:
      'A plan that has never been tested is just a document. Tabletop exercises and simulations reveal gaps, build muscle memory, and ensure your team can execute under pressure when a real incident occurs.',
    options: [
      { label: 'A', text: 'No — we\'ve never rehearsed or simulated an incident', score: 0 },
      { label: 'B', text: 'We discussed what we\'d do once in a meeting but never ran a proper exercise', score: 1 },
      { label: 'C', text: 'We\'ve run one tabletop exercise or walkthrough in the past', score: 2 },
      { label: 'D', text: 'We run regular tabletop exercises or simulations at least annually, with lessons learned feeding back into the plan', score: 3 },
    ],
  },

  // --- Security Awareness ---
  {
    id: 15,
    area: 'Security Training',
    areaGroup: 'Security Awareness',
    question: 'Do you provide regular cybersecurity awareness training to all staff?',
    whyItMatters:
      'Human error is involved in over 90% of successful cyber attacks. Regular training helps staff recognise threats like phishing emails, social engineering, and suspicious links before they click and cause a breach.',
    options: [
      { label: 'A', text: 'We don\'t provide any cybersecurity training', score: 0 },
      { label: 'B', text: 'We\'ve done a one-off training session or sent occasional reminder emails', score: 1 },
      { label: 'C', text: 'We run annual training for all staff with completion tracking', score: 2 },
      { label: 'D', text: 'We provide ongoing, interactive training throughout the year with tracked completion and updated content on emerging threats', score: 3 },
    ],
  },
  {
    id: 16,
    area: 'Phishing Simulations',
    areaGroup: 'Security Awareness',
    question: 'Do you run phishing simulations to test your team\'s awareness?',
    whyItMatters:
      'Phishing is the number one method attackers use to gain initial access to business networks. Running simulated phishing campaigns helps you measure real-world readiness and identify staff who need additional training.',
    options: [
      { label: 'A', text: 'We\'ve never run a phishing simulation', score: 0 },
      { label: 'B', text: 'We ran one test a while ago but it\'s not regular', score: 1 },
      { label: 'C', text: 'We run phishing tests a few times a year', score: 2 },
      { label: 'D', text: 'We run regular phishing simulations, track results by team, and provide targeted follow-up training for those who fall for them', score: 3 },
    ],
  },

  // --- Data Protection ---
  {
    id: 17,
    area: 'Data Encryption',
    areaGroup: 'Data Protection',
    question: 'Do you encrypt sensitive business data at rest and in transit?',
    whyItMatters:
      'If a device is lost, stolen, or breached, encryption is the last line of defence. Without it, sensitive client data, financial records, and intellectual property are exposed in plain text to anyone who gains access.',
    options: [
      { label: 'A', text: 'We haven\'t really thought about encryption', score: 0 },
      { label: 'B', text: 'We use HTTPS on our website but don\'t encrypt stored data or emails', score: 1 },
      { label: 'C', text: 'We encrypt laptops and use encrypted email for sensitive communications', score: 2 },
      { label: 'D', text: 'All sensitive data is encrypted at rest and in transit, with managed encryption keys and a clear data classification policy', score: 3 },
    ],
  },
  {
    id: 18,
    area: 'Data Visibility',
    areaGroup: 'Data Protection',
    question: 'Do you know exactly where all your sensitive data is stored?',
    whyItMatters:
      'You cannot protect what you cannot find. Many breaches involve data the organisation didn\'t even know was exposed — sitting in old file shares, personal drives, or unsanctioned cloud services.',
    options: [
      { label: 'A', text: 'We don\'t have a clear picture of where sensitive data lives', score: 0 },
      { label: 'B', text: 'We have a general idea but haven\'t mapped it formally', score: 1 },
      { label: 'C', text: 'We\'ve identified where most sensitive data is stored but some gaps remain', score: 2 },
      { label: 'D', text: 'We maintain a complete, regularly updated data inventory with classification, access controls, and retention policies', score: 3 },
    ],
  },

  // --- Third Party & Supply Chain ---
  {
    id: 19,
    area: 'Vendor Security',
    areaGroup: 'Third-Party & Supply Chain',
    question: 'Do you assess the cybersecurity practices of your key vendors and suppliers?',
    whyItMatters:
      'Your security is only as strong as your weakest vendor. Major breaches increasingly originate through third-party suppliers. If your vendor gets compromised and has access to your data or systems, you get compromised too.',
    options: [
      { label: 'A', text: 'We don\'t assess our vendors\' security at all', score: 0 },
      { label: 'B', text: 'We ask basic questions during onboarding but don\'t follow up', score: 1 },
      { label: 'C', text: 'We review key vendors\' security certifications and practices annually', score: 2 },
      { label: 'D', text: 'We have a formal vendor risk programme with security assessments, contractual requirements, and ongoing monitoring of critical suppliers', score: 3 },
    ],
  },

  // --- Security Policies & Governance ---
  {
    id: 20,
    area: 'Security Policies',
    areaGroup: 'Security Policies & Governance',
    question: 'Do you have documented cybersecurity policies that are reviewed regularly?',
    whyItMatters:
      'Policies set the foundation for everything else. Without documented, up-to-date policies, security efforts are ad-hoc and inconsistent. Policies also demonstrate due diligence to regulators, insurers, and clients.',
    options: [
      { label: 'A', text: 'We don\'t have any documented cybersecurity policies', score: 0 },
      { label: 'B', text: 'We have a few informal guidelines but nothing officially documented', score: 1 },
      { label: 'C', text: 'We have documented policies but they haven\'t been reviewed or updated recently', score: 2 },
      { label: 'D', text: 'We have comprehensive, leadership-approved policies that are reviewed at least annually, communicated to all staff, and actively enforced', score: 3 },
    ],
  },
]

/* ------------------------------------------------------------------ */
/*  Area groupings for recommendations                                */
/* ------------------------------------------------------------------ */

const areaGroups: { group: string; questionIds: number[]; recommendations: Record<number, string> }[] = [
  {
    group: 'Application & Access Control',
    questionIds: [1, 2, 3],
    recommendations: {
      1: 'Implement application whitelisting to control which software can run on your business devices. Start with your most critical systems and expand from there.',
      2: 'Tighten privileged access by assigning individual admin accounts, removing unnecessary admin rights from standard users, and conducting quarterly access reviews.',
      3: 'Block Microsoft Office macros by default across your organisation. Only allow digitally signed macros from trusted publishers where there is a genuine business need.',
    },
  },
  {
    group: 'Patching & Updates',
    questionIds: [4, 5, 6],
    recommendations: {
      4: 'Establish an automated patch management process for operating systems. Aim to apply critical security patches within 48 hours of release.',
      5: 'Create an inventory of all business applications and implement a process to keep them updated. Prioritise internet-facing applications like browsers and email clients.',
      6: 'Audit your environment for end-of-life software that no longer receives security updates, and create a replacement plan with deadlines for each.',
    },
  },
  {
    group: 'Authentication',
    questionIds: [7, 8],
    recommendations: {
      7: 'Enable multi-factor authentication on all user accounts and business systems immediately. Prioritise email, VPN, cloud services, and any system holding sensitive data.',
      8: 'Roll out a company-wide password manager and enforce a policy of unique, strong passwords for every account. Regularly check your domain against known credential breach databases.',
    },
  },
  {
    group: 'Backups & Recovery',
    questionIds: [9, 10],
    recommendations: {
      9: 'Implement automated daily backups of all critical data, stored in an offsite or immutable location that cannot be encrypted by ransomware.',
      10: 'Schedule quarterly backup restore tests and document the results. Ensure you can fully restore critical systems within your target recovery timeframe.',
    },
  },
  {
    group: 'Application Hardening',
    questionIds: [11, 12],
    recommendations: {
      11: 'Harden web browsers by blocking unnecessary plugins, enabling ad-blocking, and centrally managing browser security settings across all business devices.',
      12: 'Restrict browser extensions to an approved list. Remove any existing unapproved extensions and implement a policy to prevent staff installing new ones without approval.',
    },
  },
  {
    group: 'Incident Response',
    questionIds: [13, 14],
    recommendations: {
      13: 'Develop a documented incident response plan that includes clear roles, escalation paths, communication templates, and contact details for external support.',
      14: 'Run a tabletop exercise or incident simulation at least annually. Involve key stakeholders and use the results to update and improve your response plan.',
    },
  },
  {
    group: 'Security Awareness',
    questionIds: [15, 16],
    recommendations: {
      15: 'Implement ongoing cybersecurity awareness training for all staff, updated regularly to cover emerging threats. Track completion and understanding.',
      16: 'Start running regular phishing simulations to measure your team\'s ability to spot attacks. Use the results to provide targeted follow-up training.',
    },
  },
  {
    group: 'Data Protection',
    questionIds: [17, 18],
    recommendations: {
      17: 'Ensure all sensitive data is encrypted both at rest and in transit. Enable full-disk encryption on all laptops and enforce TLS for all data transfers.',
      18: 'Conduct a data discovery exercise to map where all sensitive information is stored. Classify your data and ensure appropriate access controls are in place for each category.',
    },
  },
  {
    group: 'Third-Party & Supply Chain',
    questionIds: [19],
    recommendations: {
      19: 'Establish a vendor risk assessment process. Evaluate the security practices of any supplier who has access to your data or systems, and include security requirements in contracts.',
    },
  },
  {
    group: 'Security Policies & Governance',
    questionIds: [20],
    recommendations: {
      20: 'Develop comprehensive cybersecurity policies covering acceptable use, data handling, incident response, and access management. Gain leadership sign-off and review them annually.',
    },
  },
]

/* ------------------------------------------------------------------ */
/*  Risk-level helpers                                                */
/* ------------------------------------------------------------------ */

const MAX_RAW = 60 // 20 questions x 3 max score

function rawToScaled(raw: number): number {
  return Math.round((raw / MAX_RAW) * 100)
}

function getRiskLevel(scaled: number) {
  if (scaled <= 25) return { level: 'Critical', color: 'text-red-400', bg: 'bg-red-400', border: 'border-red-400/30', bgCard: 'bg-red-500/10', barColor: '#f87171' }
  if (scaled <= 50) return { level: 'High', color: 'text-orange-400', bg: 'bg-orange-400', border: 'border-orange-400/30', bgCard: 'bg-orange-500/10', barColor: '#fb923c' }
  if (scaled <= 75) return { level: 'Medium', color: 'text-yellow-400', bg: 'bg-yellow-400', border: 'border-yellow-400/30', bgCard: 'bg-yellow-500/10', barColor: '#facc15' }
  return { level: 'Low', color: 'text-green-400', bg: 'bg-green-400', border: 'border-green-400/30', bgCard: 'bg-green-500/10', barColor: '#4ade80' }
}

function getGroupedRecommendations(answers: Record<number, number>) {
  const results: { group: string; items: string[] }[] = []

  for (const ag of areaGroups) {
    const lowItems: string[] = []
    for (const qId of ag.questionIds) {
      if (answers[qId] !== undefined && answers[qId] < 2) {
        lowItems.push(ag.recommendations[qId])
      }
    }
    if (lowItems.length > 0) {
      results.push({ group: ag.group, items: lowItems })
    }
  }

  if (results.length === 0) {
    results.push({
      group: 'Keep Up the Great Work',
      items: [
        'Your organisation demonstrates strong cybersecurity fundamentals across all areas. Consider advanced measures such as penetration testing, threat hunting, and zero-trust architecture to stay ahead of evolving threats.',
      ],
    })
  }

  return results
}

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

type Phase = 'intro' | 'quiz' | 'capture' | 'results'

export default function AssessmentQuiz() {
  const [phase, setPhase] = useState<Phase>('intro')
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [expandedTip, setExpandedTip] = useState(false)
  const [transitioning, setTransitioning] = useState(false)

  // Lead capture
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [submitting, setSubmitting] = useState(false)

  // Results
  const [rawScore, setRawScore] = useState(0)

  const totalQuestions = questions.length
  const progress = phase === 'quiz' ? ((currentQ + 1) / totalQuestions) * 100 : phase === 'capture' || phase === 'results' ? 100 : 0

  const scaledScore = rawToScaled(rawScore)
  const risk = getRiskLevel(scaledScore)
  const groupedRecs = getGroupedRecommendations(answers)

  /* -- transition helper -- */
  const transitionTo = useCallback((nextQ: number) => {
    setTransitioning(true)
    setTimeout(() => {
      setCurrentQ(nextQ)
      setSelectedOption(null)
      setExpandedTip(false)
      setTransitioning(false)
    }, 200)
  }, [])

  /* -- handlers -- */

  function handleSelectOption(optionScore: number) {
    setSelectedOption(optionScore)
  }

  function handleNext() {
    if (selectedOption === null) return
    const qId = questions[currentQ].id
    const newAnswers = { ...answers, [qId]: selectedOption }
    setAnswers(newAnswers)

    if (currentQ + 1 < totalQuestions) {
      transitionTo(currentQ + 1)
    } else {
      const total = Object.values(newAnswers).reduce((sum, s) => sum + s, 0)
      setRawScore(total)
      setPhase('capture')
    }
  }

  function handleBack() {
    if (currentQ > 0) {
      const prevQId = questions[currentQ - 1].id
      setSelectedOption(answers[prevQId] ?? null)
      transitionTo(currentQ - 1)
    }
  }

  async function handleSubmitLead(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)

    try {
      await fetch('/api/assessment-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          company,
          score: scaledScore,
          riskLevel: risk.level,
          answers,
          completedAt: new Date().toISOString(),
        }),
      })
      setPhase('results')
    } catch {
      setPhase('results')
    } finally {
      setSubmitting(false)
    }
  }

  /* ---------------------------------------------------------------- */
  /*  Intro screen                                                    */
  /* ---------------------------------------------------------------- */

  if (phase === 'intro') {
    return (
      <section className="bg-stealth-dark min-h-[80vh] flex items-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-stealth-cyan/10 mb-8">
            <Shield className="w-12 h-12 text-stealth-cyan" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How Secure Is Your Business?
          </h1>
          <p className="text-stealth-gray text-lg leading-relaxed mb-4">
            Take our free 5-minute cybersecurity self-assessment to uncover gaps in your
            defences. Answer 20 straightforward questions and receive a personalised risk
            score with actionable recommendations.
          </p>
          <p className="text-stealth-gray text-sm mb-10">
            No technical knowledge required. Designed for business owners, executives, and IT managers.
          </p>
          <button
            onClick={() => setPhase('quiz')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-stealth-cyan text-stealth-dark font-semibold rounded-lg hover:bg-white transition-colors text-lg"
          >
            Start Assessment <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    )
  }

  /* ---------------------------------------------------------------- */
  /*  Quiz screen                                                     */
  /* ---------------------------------------------------------------- */

  if (phase === 'quiz') {
    const q = questions[currentQ]
    return (
      <section className="bg-stealth-dark min-h-[80vh]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Progress bar */}
          <div className="mb-10">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-stealth-gray">Question {currentQ + 1} of {totalQuestions}</span>
              <span className="text-stealth-cyan font-medium">{q.area}</span>
            </div>
            <div className="w-full h-2 bg-stealth-navy rounded-full overflow-hidden">
              <div
                className="h-full bg-stealth-cyan rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question with transition */}
          <div className={`transition-all duration-200 ${transitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
            {/* Question title + Why It Matters toggle */}
            <div className="mb-8">
              <div className="flex items-start gap-3">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex-1">
                  {q.question}
                </h2>
                <button
                  onClick={() => setExpandedTip(!expandedTip)}
                  className="shrink-0 mt-1 p-1.5 rounded-full hover:bg-stealth-cyan/10 transition-colors group"
                  aria-label="Why this matters"
                  title="Why this matters"
                >
                  <HelpCircle className={`w-5 h-5 transition-colors ${expandedTip ? 'text-stealth-cyan' : 'text-stealth-gray group-hover:text-stealth-cyan'}`} />
                </button>
              </div>

              {/* Expandable "Why This Matters" */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  expandedTip ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
                }`}
              >
                <div className="flex items-start gap-3 bg-stealth-navy/60 border border-stealth-cyan/10 rounded-xl p-4">
                  <ChevronDown className="w-4 h-4 text-stealth-cyan shrink-0 mt-0.5" />
                  <p className="text-stealth-gray text-sm leading-relaxed">
                    <span className="text-stealth-cyan font-medium">Why this matters: </span>
                    {q.whyItMatters}
                  </p>
                </div>
              </div>
            </div>

            {/* Options as clickable cards */}
            <div className="space-y-4 mb-10">
              {q.options.map((opt) => {
                const isSelected = selectedOption === opt.score
                return (
                  <button
                    key={opt.label}
                    onClick={() => handleSelectOption(opt.score)}
                    className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 ${
                      isSelected
                        ? 'bg-stealth-cyan/10 border-stealth-cyan text-white shadow-[0_0_20px_rgba(77,204,255,0.1)]'
                        : 'bg-stealth-navy border-stealth-navy-light text-stealth-gray hover:border-stealth-cyan/30 hover:bg-stealth-navy-light'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-colors ${
                          isSelected
                            ? 'bg-stealth-cyan text-stealth-dark'
                            : 'bg-stealth-cyan/10 text-stealth-cyan'
                        }`}
                      >
                        {opt.label}
                      </span>
                      <span className={`text-sm md:text-base leading-relaxed ${isSelected ? 'text-white' : ''}`}>
                        {opt.text}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between">
              <button
                onClick={handleBack}
                disabled={currentQ === 0}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all duration-200 ${
                  currentQ > 0
                    ? 'text-stealth-gray hover:text-white hover:bg-stealth-navy-light'
                    : 'text-stealth-gray/20 cursor-not-allowed'
                }`}
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <button
                onClick={handleNext}
                disabled={selectedOption === null}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  selectedOption !== null
                    ? 'bg-stealth-cyan text-stealth-dark hover:bg-white'
                    : 'bg-stealth-navy text-stealth-gray/40 cursor-not-allowed'
                }`}
              >
                {currentQ + 1 < totalQuestions ? 'Next Question' : 'See Your Results'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  /* ---------------------------------------------------------------- */
  /*  Lead capture screen                                             */
  /* ---------------------------------------------------------------- */

  if (phase === 'capture') {
    return (
      <section className="bg-stealth-dark min-h-[80vh] flex items-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Progress bar (complete) */}
          <div className="mb-10">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-stealth-gray">Assessment Complete</span>
              <span className="text-stealth-cyan font-medium">20 of 20</span>
            </div>
            <div className="w-full h-2 bg-stealth-navy rounded-full overflow-hidden">
              <div className="h-full bg-stealth-cyan rounded-full w-full" />
            </div>
          </div>

          <div className="bg-stealth-navy rounded-2xl border border-stealth-cyan/10 p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center p-3 rounded-xl bg-stealth-cyan/10 mb-4">
                <Lock className="w-8 h-8 text-stealth-cyan" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                See Your Personalised Results &amp; Recommendations
              </h2>
              <p className="text-stealth-gray leading-relaxed">
                Enter your details below to unlock your personalised risk score and
                tailored recommendations for your organisation.
              </p>
            </div>

            <form onSubmit={handleSubmitLead} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm text-stealth-gray mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stealth-gray" />
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Smith"
                    className="w-full pl-10 pr-4 py-3 bg-stealth-dark border border-stealth-cyan/10 rounded-lg text-white placeholder:text-stealth-gray/50 focus:outline-none focus:border-stealth-cyan transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-stealth-gray mb-1.5">
                  Work Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stealth-gray" />
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@company.com"
                    className="w-full pl-10 pr-4 py-3 bg-stealth-dark border border-stealth-cyan/10 rounded-lg text-white placeholder:text-stealth-gray/50 focus:outline-none focus:border-stealth-cyan transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm text-stealth-gray mb-1.5">
                  Company Name
                </label>
                <div className="relative">
                  <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stealth-gray" />
                  <input
                    id="company"
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Acme Corp"
                    className="w-full pl-10 pr-4 py-3 bg-stealth-dark border border-stealth-cyan/10 rounded-lg text-white placeholder:text-stealth-gray/50 focus:outline-none focus:border-stealth-cyan transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-stealth-cyan text-stealth-dark font-semibold rounded-lg hover:bg-white transition-colors disabled:opacity-50"
              >
                {submitting ? 'Loading...' : 'Get Your Results'}
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-stealth-gray/60 text-xs text-center">
                We respect your privacy. Your data is used only to deliver your assessment results.
              </p>
            </form>
          </div>
        </div>
      </section>
    )
  }

  /* ---------------------------------------------------------------- */
  /*  Results screen                                                  */
  /* ---------------------------------------------------------------- */

  return (
    <section className="bg-stealth-dark min-h-[80vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Score card */}
        <div className={`rounded-2xl border ${risk.border} ${risk.bgCard} p-8 md:p-10 text-center mb-10`}>
          <h2 className="text-white text-lg font-medium mb-8">Your Cybersecurity Risk Score</h2>

          {/* Circular gauge */}
          <div className="relative inline-flex items-center justify-center w-44 h-44 mb-6">
            <svg className="w-44 h-44 -rotate-90" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="52" fill="none" stroke="currentColor" strokeWidth="8" className="text-stealth-navy" />
              <circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                strokeWidth="8"
                strokeLinecap="round"
                stroke={risk.barColor}
                strokeDasharray={`${(scaledScore / 100) * 327} 327`}
                style={{ transition: 'stroke-dasharray 1s ease-out' }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={`text-5xl font-bold ${risk.color}`}>{scaledScore}</span>
              <span className="text-stealth-gray text-sm">/100</span>
            </div>
          </div>

          {/* Horizontal bar gauge */}
          <div className="max-w-sm mx-auto mb-6">
            <div className="w-full h-3 bg-stealth-navy rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${scaledScore}%`, backgroundColor: risk.barColor }}
              />
            </div>
            <div className="flex justify-between text-xs text-stealth-gray/60 mt-1.5">
              <span>0</span>
              <span>25</span>
              <span>50</span>
              <span>75</span>
              <span>100</span>
            </div>
          </div>

          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${risk.bgCard} border ${risk.border}`}>
            <AlertTriangle className={`w-4 h-4 ${risk.color}`} />
            <span className={`font-semibold text-sm ${risk.color}`}>{risk.level} Risk</span>
          </div>
        </div>

        {/* What this means */}
        <div className="mb-10">
          <h3 className="text-white font-bold text-xl mb-3">What This Means</h3>
          {scaledScore <= 25 && (
            <p className="text-stealth-gray leading-relaxed">
              Your organisation has significant cybersecurity gaps that leave you highly vulnerable to attack.
              Immediate action is needed to address foundational security controls. We strongly recommend engaging
              a cybersecurity partner to help prioritise remediation before a breach occurs.
            </p>
          )}
          {scaledScore > 25 && scaledScore <= 50 && (
            <p className="text-stealth-gray leading-relaxed">
              Your organisation has some security measures in place but there are notable gaps that attackers
              could exploit. Addressing these weaknesses should be a near-term priority to reduce your risk
              of a successful breach.
            </p>
          )}
          {scaledScore > 50 && scaledScore <= 75 && (
            <p className="text-stealth-gray leading-relaxed">
              Your organisation has a reasonable security foundation, but there are areas that need improvement
              to achieve a strong security posture. Focusing on the recommendations below will help you close
              the remaining gaps and significantly reduce your risk.
            </p>
          )}
          {scaledScore > 75 && (
            <p className="text-stealth-gray leading-relaxed">
              Your organisation demonstrates a strong cybersecurity posture across most areas. Continue
              maintaining and improving your defences, and consider advanced measures such as penetration
              testing and threat hunting to stay ahead of evolving threats.
            </p>
          )}
        </div>

        {/* Grouped recommendations */}
        <div className="mb-10">
          <h3 className="text-white font-bold text-xl mb-6">Personalised Recommendations</h3>
          <div className="space-y-6">
            {groupedRecs.map((group) => (
              <div key={group.group}>
                <h4 className="text-stealth-cyan font-semibold text-sm uppercase tracking-wider mb-3">
                  {group.group}
                </h4>
                <div className="space-y-3">
                  {group.items.map((rec, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-stealth-navy rounded-xl border border-stealth-cyan/10 p-5"
                    >
                      <span className="shrink-0 w-7 h-7 rounded-lg bg-stealth-cyan/10 flex items-center justify-center">
                        <AlertTriangle className="w-3.5 h-3.5 text-stealth-cyan" />
                      </span>
                      <p className="text-stealth-gray text-sm leading-relaxed">{rec}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-stealth-navy rounded-2xl border border-stealth-cyan/10 p-8 text-center">
          <div className="inline-flex items-center justify-center p-3 rounded-xl bg-stealth-cyan/10 mb-4">
            <CheckCircle className="w-8 h-8 text-stealth-cyan" />
          </div>
          <h3 className="text-white font-bold text-xl mb-3">
            Ready to Close the Gaps?
          </h3>
          <p className="text-stealth-gray leading-relaxed mb-6 max-w-lg mx-auto">
            This self-assessment gives you a high-level view. Our team can conduct a thorough
            security review of your environment and provide a detailed remediation roadmap
            tailored to your business.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-stealth-cyan text-stealth-dark font-semibold rounded-lg hover:bg-white transition-colors"
          >
            Talk to Our Team <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
