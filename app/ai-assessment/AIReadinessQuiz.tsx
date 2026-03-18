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
  // --- AI Strategy & Governance ---
  {
    id: 1,
    area: 'AI Strategy',
    areaGroup: 'AI Strategy & Governance',
    question: 'Does your organisation have a documented AI strategy or policy?',
    whyItMatters:
      'Without a clear AI strategy, teams adopt tools in isolation, creating shadow AI risk and inconsistent outcomes. A documented policy sets guardrails so your organisation can move fast without breaking things — or breaking trust.',
    options: [
      { label: 'A', text: 'No — we have no AI strategy or policy in place', score: 0 },
      { label: 'B', text: 'We have informal guidelines but nothing documented or approved by leadership', score: 1 },
      { label: 'C', text: 'We have a documented AI policy but it hasn\'t been reviewed recently', score: 2 },
      { label: 'D', text: 'We have a leadership-approved AI strategy that is reviewed regularly and communicated to all staff', score: 3 },
    ],
  },
  {
    id: 2,
    area: 'AI Accountability',
    areaGroup: 'AI Strategy & Governance',
    question: 'Is there clear ownership and accountability for AI decisions in your organisation?',
    whyItMatters:
      'When AI makes or influences a decision, someone needs to own the outcome. Without clear accountability, mistakes get passed around and risks go unmanaged. Regulators and clients increasingly expect a named person to be responsible for AI outputs.',
    options: [
      { label: 'A', text: 'No — nobody is formally responsible for AI decisions or oversight', score: 0 },
      { label: 'B', text: 'AI falls loosely under IT but there is no formal accountability structure', score: 1 },
      { label: 'C', text: 'We have assigned ownership for some AI initiatives but it\'s not consistent across the business', score: 2 },
      { label: 'D', text: 'We have clearly defined roles, an AI governance board or sponsor, and documented accountability for all AI decisions', score: 3 },
    ],
  },
  {
    id: 3,
    area: 'AI Approval Process',
    areaGroup: 'AI Strategy & Governance',
    question: 'Do you have a formal approval process before deploying new AI tools or systems?',
    whyItMatters:
      'New AI tools are appearing weekly and staff are adopting them without vetting. A lightweight approval process helps you catch data privacy risks, security gaps, and compliance issues before they become expensive problems.',
    options: [
      { label: 'A', text: 'No — anyone can adopt new AI tools without approval', score: 0 },
      { label: 'B', text: 'We ask people to check with their manager but there\'s no formal process', score: 1 },
      { label: 'C', text: 'We have an approval process for major AI deployments but smaller tools slip through', score: 2 },
      { label: 'D', text: 'All AI tools and systems go through a formal risk and security review before deployment, with documented sign-off', score: 3 },
    ],
  },

  // --- Data Governance & Privacy ---
  {
    id: 4,
    area: 'AI Data Awareness',
    areaGroup: 'Data Governance & Privacy',
    question: 'Do you know what data your AI systems are trained on or have access to?',
    whyItMatters:
      'AI is only as good — and as risky — as the data it touches. If you don\'t know what data your AI can access, you can\'t control what it might leak, misuse, or produce. This is a fundamental blind spot that regulators are now zeroing in on.',
    options: [
      { label: 'A', text: 'No — we don\'t have visibility into what data our AI tools access or use', score: 0 },
      { label: 'B', text: 'We have a rough idea but haven\'t formally mapped AI data flows', score: 1 },
      { label: 'C', text: 'We\'ve documented data sources for most AI systems but some gaps remain', score: 2 },
      { label: 'D', text: 'We maintain a complete inventory of all data accessed by AI systems, with classification and access controls', score: 3 },
    ],
  },
  {
    id: 5,
    area: 'AI Data Leakage Prevention',
    areaGroup: 'Data Governance & Privacy',
    question: 'Do you have controls to prevent AI systems from exposing sensitive or personal data?',
    whyItMatters:
      'AI tools can inadvertently memorise, regurgitate, or expose sensitive information — including customer data, trade secrets, and credentials. Without controls, a single careless prompt could become your next data breach.',
    options: [
      { label: 'A', text: 'No — we haven\'t considered AI-specific data leakage risks', score: 0 },
      { label: 'B', text: 'We\'ve told staff not to put sensitive data into AI tools but there\'s no technical enforcement', score: 1 },
      { label: 'C', text: 'We have some controls in place, like restricting certain AI tools from accessing production data', score: 2 },
      { label: 'D', text: 'We have robust data loss prevention controls for AI, including input filtering, output monitoring, and technical restrictions on sensitive data access', score: 3 },
    ],
  },
  {
    id: 6,
    area: 'AI Data Classification',
    areaGroup: 'Data Governance & Privacy',
    question: 'Do you have data classification policies that extend to AI workloads?',
    whyItMatters:
      'If your data classification stops at traditional systems, your AI tools are operating in a grey zone. Knowing which data is public, internal, confidential, or restricted lets you set appropriate boundaries for what AI can and cannot touch.',
    options: [
      { label: 'A', text: 'We don\'t have data classification policies at all', score: 0 },
      { label: 'B', text: 'We have basic data classification but it doesn\'t cover AI-specific scenarios', score: 1 },
      { label: 'C', text: 'Our data classification policies mention AI but haven\'t been fully applied to all AI workloads', score: 2 },
      { label: 'D', text: 'Our data classification framework explicitly covers AI workloads, with clear rules on what data each AI system can access and process', score: 3 },
    ],
  },

  // --- AI Security ---
  {
    id: 7,
    area: 'Adversarial AI Testing',
    areaGroup: 'AI Security',
    question: 'Have you tested your AI systems against adversarial attacks like prompt injection?',
    whyItMatters:
      'Prompt injection and other adversarial attacks can trick AI systems into ignoring safety rules, leaking data, or performing unintended actions. If you haven\'t tested for these attacks, you don\'t know how your AI behaves when someone tries to break it.',
    options: [
      { label: 'A', text: 'No — we haven\'t tested our AI systems for adversarial vulnerabilities', score: 0 },
      { label: 'B', text: 'We\'re aware of the risks but haven\'t conducted any formal testing', score: 1 },
      { label: 'C', text: 'We\'ve done some basic testing or red-teaming on our main AI systems', score: 2 },
      { label: 'D', text: 'We conduct regular adversarial testing including prompt injection, data poisoning, and model evasion across all AI systems', score: 3 },
    ],
  },
  {
    id: 8,
    area: 'AI Access Control',
    areaGroup: 'AI Security',
    question: 'Do you control who can access and modify your AI models and their configurations?',
    whyItMatters:
      'If anyone can tweak your AI model settings, training data, or system prompts, a single insider or compromised account can fundamentally change how your AI behaves. Access control for AI is just as critical as access control for your databases.',
    options: [
      { label: 'A', text: 'No — there are no specific access controls for our AI systems', score: 0 },
      { label: 'B', text: 'A few people manage AI tools but we don\'t formally control or audit access', score: 1 },
      { label: 'C', text: 'Access to AI models is restricted to specific teams but not all configurations are locked down', score: 2 },
      { label: 'D', text: 'We enforce role-based access control for all AI systems, with audit logs and regular access reviews', score: 3 },
    ],
  },
  {
    id: 9,
    area: 'AI Monitoring',
    areaGroup: 'AI Security',
    question: 'Do you monitor your AI systems for unusual behaviour or unexpected outputs?',
    whyItMatters:
      'AI systems can drift, degrade, or be compromised without obvious signs. Monitoring for anomalies — like sudden changes in output quality or unexpected data access — lets you catch problems before they cause real harm to your business or customers.',
    options: [
      { label: 'A', text: 'No — we don\'t monitor AI system behaviour at all', score: 0 },
      { label: 'B', text: 'We rely on users to report issues but there\'s no systematic monitoring', score: 1 },
      { label: 'C', text: 'We have basic monitoring for some AI systems but it\'s not comprehensive', score: 2 },
      { label: 'D', text: 'We have continuous monitoring across all AI systems with alerting for anomalous behaviour, output drift, and unexpected data access patterns', score: 3 },
    ],
  },

  // --- AI Safety & Reliability ---
  {
    id: 10,
    area: 'AI Output Safety',
    areaGroup: 'AI Safety & Reliability',
    question: 'Do you have safeguards to prevent your AI systems from producing harmful or misleading outputs?',
    whyItMatters:
      'AI that produces toxic, misleading, or factually wrong outputs can damage your brand, expose you to legal liability, and erode customer trust. Guardrails like content filtering and output validation are essential safety nets.',
    options: [
      { label: 'A', text: 'No — we trust AI outputs without any safety checks', score: 0 },
      { label: 'B', text: 'We rely on users to catch bad outputs but there are no automated safeguards', score: 1 },
      { label: 'C', text: 'We have some content filtering or output validation for our main AI systems', score: 2 },
      { label: 'D', text: 'We have comprehensive output safeguards including content filtering, factual validation, and automated quality checks across all AI systems', score: 3 },
    ],
  },
  {
    id: 11,
    area: 'AI Hallucination Management',
    areaGroup: 'AI Safety & Reliability',
    question: 'How do you handle AI hallucinations or incorrect outputs in business-critical processes?',
    whyItMatters:
      'AI hallucinations — confidently wrong answers — are not edge cases; they are a known limitation. In business-critical workflows like finance, legal, or customer communications, an uncaught hallucination can lead to costly errors and reputational damage.',
    options: [
      { label: 'A', text: 'We don\'t have a process — staff may not even know AI can hallucinate', score: 0 },
      { label: 'B', text: 'We\'ve warned staff about hallucinations but there\'s no formal process to catch them', score: 1 },
      { label: 'C', text: 'We require human review of AI outputs in some critical workflows', score: 2 },
      { label: 'D', text: 'We have documented processes for verifying AI outputs in all critical workflows, with automated fact-checking where possible and mandatory human sign-off', score: 3 },
    ],
  },
  {
    id: 12,
    area: 'Human Oversight',
    areaGroup: 'AI Safety & Reliability',
    question: 'Do you have human review processes for high-stakes AI decisions?',
    whyItMatters:
      'Fully autonomous AI decisions in high-stakes areas like hiring, credit, medical advice, or compliance can create legal exposure and ethical risks. Human-in-the-loop processes ensure accountability and catch errors before they cause real-world harm.',
    options: [
      { label: 'A', text: 'No — AI outputs are used directly without human review', score: 0 },
      { label: 'B', text: 'Some staff review AI outputs informally but there\'s no consistent process', score: 1 },
      { label: 'C', text: 'We have human review for some high-stakes decisions but not all', score: 2 },
      { label: 'D', text: 'All high-stakes AI decisions require documented human review and approval before action is taken', score: 3 },
    ],
  },

  // --- AI Risk Management ---
  {
    id: 13,
    area: 'AI Risk Assessment',
    areaGroup: 'AI Risk Management',
    question: 'Have you conducted a risk assessment specifically for your AI deployments?',
    whyItMatters:
      'Traditional risk assessments don\'t cover AI-specific threats like model manipulation, training data poisoning, or output bias. A dedicated AI risk assessment identifies exposures that would otherwise go completely unnoticed until something goes wrong.',
    options: [
      { label: 'A', text: 'No — we haven\'t assessed AI-specific risks at all', score: 0 },
      { label: 'B', text: 'We\'ve informally discussed AI risks but haven\'t done a structured assessment', score: 1 },
      { label: 'C', text: 'We\'ve conducted a risk assessment for some AI systems but not all', score: 2 },
      { label: 'D', text: 'We conduct comprehensive AI risk assessments for all deployments, reviewed regularly and integrated into our enterprise risk framework', score: 3 },
    ],
  },
  {
    id: 14,
    area: 'AI Incident Response',
    areaGroup: 'AI Risk Management',
    question: 'Do you have an incident response plan that covers AI-specific failures or breaches?',
    whyItMatters:
      'When an AI system produces harmful outputs, leaks data, or gets manipulated, your team needs to know exactly what to do. AI incidents move fast and the response playbook is different from a traditional security breach.',
    options: [
      { label: 'A', text: 'No — our incident response plan doesn\'t mention AI at all', score: 0 },
      { label: 'B', text: 'We\'d handle AI issues ad hoc using our general incident process', score: 1 },
      { label: 'C', text: 'Our incident response plan mentions AI but doesn\'t have detailed AI-specific procedures', score: 2 },
      { label: 'D', text: 'We have documented AI incident response procedures with clear escalation paths, containment steps, and communication protocols specific to AI failures', score: 3 },
    ],
  },
  {
    id: 15,
    area: 'AI Vendor Risk',
    areaGroup: 'AI Risk Management',
    question: 'Do you assess the security practices of third-party AI vendors and tools?',
    whyItMatters:
      'Most organisations don\'t build their own AI — they use third-party tools and APIs. If your vendor has weak security, poor data practices, or trains on your data without consent, their risk becomes your risk. Due diligence is non-negotiable.',
    options: [
      { label: 'A', text: 'No — we don\'t assess AI vendors\' security or data practices', score: 0 },
      { label: 'B', text: 'We look at vendor marketing materials but don\'t do formal security assessments', score: 1 },
      { label: 'C', text: 'We assess major AI vendors but smaller tools and plugins aren\'t covered', score: 2 },
      { label: 'D', text: 'All AI vendors undergo a formal security and data privacy assessment, with contractual requirements and ongoing monitoring', score: 3 },
    ],
  },

  // --- AI Ethics & Transparency ---
  {
    id: 16,
    area: 'AI Explainability',
    areaGroup: 'AI Ethics & Transparency',
    question: 'Can you explain how your AI systems make decisions to stakeholders?',
    whyItMatters:
      'Customers, regulators, and board members increasingly want to understand how AI decisions are made. If you can\'t explain why your AI recommended, rejected, or flagged something, you have an accountability gap that erodes trust and invites scrutiny.',
    options: [
      { label: 'A', text: 'No — we don\'t understand or document how our AI systems reach their outputs', score: 0 },
      { label: 'B', text: 'We have a general understanding but couldn\'t explain specific decisions to stakeholders', score: 1 },
      { label: 'C', text: 'We can explain how some AI systems work but not all, and documentation is limited', score: 2 },
      { label: 'D', text: 'We maintain clear documentation of how all AI systems make decisions, with the ability to explain specific outputs to stakeholders on request', score: 3 },
    ],
  },
  {
    id: 17,
    area: 'AI Bias & Fairness',
    areaGroup: 'AI Ethics & Transparency',
    question: 'Do you test your AI systems for bias and fairness?',
    whyItMatters:
      'AI can amplify existing biases in your data, leading to discriminatory outcomes in hiring, lending, customer service, and more. Proactive bias testing protects your organisation from legal risk and reputational damage — and it\'s the right thing to do.',
    options: [
      { label: 'A', text: 'No — we haven\'t considered bias in our AI systems', score: 0 },
      { label: 'B', text: 'We\'re aware of the issue but haven\'t done any testing', score: 1 },
      { label: 'C', text: 'We\'ve tested some AI systems for bias but it\'s not a regular process', score: 2 },
      { label: 'D', text: 'We conduct regular bias and fairness testing across all AI systems, with documented mitigation strategies and ongoing monitoring', score: 3 },
    ],
  },

  // --- AI Skills & Training ---
  {
    id: 18,
    area: 'AI Technical Skills',
    areaGroup: 'AI Skills & Training',
    question: 'Does your team have the skills to securely deploy and manage AI systems?',
    whyItMatters:
      'AI systems have unique security and operational requirements. If your team doesn\'t understand AI-specific risks like data poisoning, model drift, or prompt injection, they can\'t protect against them — no matter how good your traditional IT security is.',
    options: [
      { label: 'A', text: 'No — our team has limited AI knowledge and no specific AI security skills', score: 0 },
      { label: 'B', text: 'A few individuals have some AI knowledge but it\'s not widespread', score: 1 },
      { label: 'C', text: 'Our technical team has reasonable AI skills but gaps remain in AI security', score: 2 },
      { label: 'D', text: 'Our team has strong AI skills including AI security, and we invest in ongoing training to keep pace with the technology', score: 3 },
    ],
  },
  {
    id: 19,
    area: 'AI Awareness Training',
    areaGroup: 'AI Skills & Training',
    question: 'Do you provide AI security awareness training to staff who use AI tools?',
    whyItMatters:
      'Your staff are already using AI — the question is whether they\'re using it safely. Training on topics like data handling in AI tools, recognising hallucinations, and avoiding prompt injection makes the difference between productive AI use and a data incident.',
    options: [
      { label: 'A', text: 'No — we don\'t provide any AI-specific training', score: 0 },
      { label: 'B', text: 'We\'ve sent some general guidance but there\'s no structured training programme', score: 1 },
      { label: 'C', text: 'We provide AI training to some teams but it\'s not organisation-wide', score: 2 },
      { label: 'D', text: 'We provide structured AI security awareness training to all staff who use AI tools, updated regularly as the technology evolves', score: 3 },
    ],
  },

  // --- AI Readiness Infrastructure ---
  {
    id: 20,
    area: 'AI Infrastructure',
    areaGroup: 'AI Readiness Infrastructure',
    question: 'Is your IT infrastructure ready to support AI workloads securely?',
    whyItMatters:
      'AI workloads often need more compute, more data access, and different security controls than traditional applications. If your infrastructure can\'t support AI securely — including network segmentation, logging, and scalable compute — you\'re building on shaky foundations.',
    options: [
      { label: 'A', text: 'No — we haven\'t evaluated our infrastructure for AI readiness', score: 0 },
      { label: 'B', text: 'We use cloud AI services but haven\'t assessed whether our infrastructure is properly configured for them', score: 1 },
      { label: 'C', text: 'We\'ve made some infrastructure changes to support AI but security controls haven\'t fully caught up', score: 2 },
      { label: 'D', text: 'Our infrastructure is designed to support AI workloads securely, with appropriate compute, network segmentation, logging, and access controls', score: 3 },
    ],
  },
]

/* ------------------------------------------------------------------ */
/*  Area groupings for recommendations                                */
/* ------------------------------------------------------------------ */

const areaGroups: { group: string; questionIds: number[]; recommendations: Record<number, string> }[] = [
  {
    group: 'AI Strategy & Governance',
    questionIds: [1, 2, 3],
    recommendations: {
      1: 'Develop a documented AI strategy and acceptable use policy. Start with clear principles on when and how AI can be used, get leadership sign-off, and communicate it to all staff.',
      2: 'Assign clear ownership for AI governance — whether that\'s a dedicated AI lead, a cross-functional committee, or an extension of your existing risk function. Document who is accountable for AI decisions.',
      3: 'Implement a lightweight AI tool approval process. Before any new AI tool is adopted, require a basic risk and security assessment covering data access, vendor practices, and compliance implications.',
    },
  },
  {
    group: 'Data Governance & Privacy',
    questionIds: [4, 5, 6],
    recommendations: {
      4: 'Map all data flows to and from your AI systems. Document what data each AI tool can access, what it stores, and whether it\'s used for model training. This is foundational for both security and compliance.',
      5: 'Implement technical controls to prevent sensitive data from being input into or exposed by AI systems. This includes input filtering, DLP policies extended to AI tools, and restrictions on AI access to production data.',
      6: 'Extend your data classification framework to explicitly cover AI workloads. Define what classification levels of data each AI system can process, and enforce these rules technically where possible.',
    },
  },
  {
    group: 'AI Security',
    questionIds: [7, 8, 9],
    recommendations: {
      7: 'Conduct adversarial testing of your AI systems, starting with prompt injection and jailbreak testing. Consider engaging a specialist to red-team your most critical AI deployments.',
      8: 'Implement role-based access control for all AI models, configurations, and training data. Enable audit logging and conduct regular access reviews — treat AI system access with the same rigour as database access.',
      9: 'Deploy monitoring for your AI systems that tracks output quality, data access patterns, and usage anomalies. Set up alerts for unexpected behaviour so you can investigate before problems escalate.',
    },
  },
  {
    group: 'AI Safety & Reliability',
    questionIds: [10, 11, 12],
    recommendations: {
      10: 'Implement output safeguards for your AI systems — content filtering, factual validation checks, and quality thresholds. Don\'t let AI outputs reach customers or inform decisions without basic safety checks.',
      11: 'Create a documented process for handling AI hallucinations in critical workflows. Require human verification for any AI output used in decisions involving money, legal matters, customer communications, or safety.',
      12: 'Establish human-in-the-loop requirements for all high-stakes AI decisions. Document which decisions require human review, define the review process, and track compliance.',
    },
  },
  {
    group: 'AI Risk Management',
    questionIds: [13, 14, 15],
    recommendations: {
      13: 'Conduct a structured AI risk assessment covering all your AI deployments. Evaluate risks including data exposure, output reliability, vendor dependency, regulatory compliance, and adversarial threats.',
      14: 'Update your incident response plan to include AI-specific scenarios. Define what constitutes an AI incident, who to notify, how to contain AI-related breaches, and how to communicate with affected stakeholders.',
      15: 'Establish a formal assessment process for AI vendors. Evaluate their security practices, data handling policies, training data usage, and compliance certifications before signing up — and review annually.',
    },
  },
  {
    group: 'AI Ethics & Transparency',
    questionIds: [16, 17],
    recommendations: {
      16: 'Document how each AI system makes decisions in plain language. Build the capability to explain specific AI outputs to customers, regulators, and board members when asked. Transparency builds trust.',
      17: 'Start testing your AI systems for bias, beginning with those that affect people directly — hiring tools, customer-facing recommendations, risk scoring. Document findings and implement mitigation strategies.',
    },
  },
  {
    group: 'AI Skills & Training',
    questionIds: [18, 19],
    recommendations: {
      18: 'Invest in AI skills development for your technical team, with a focus on AI security, responsible deployment, and operational management. The AI landscape moves fast — ongoing training is essential.',
      19: 'Roll out structured AI security awareness training for all staff who use AI tools. Cover safe data handling, recognising hallucinations, prompt injection risks, and your organisation\'s AI acceptable use policy.',
    },
  },
  {
    group: 'AI Readiness Infrastructure',
    questionIds: [20],
    recommendations: {
      20: 'Assess your IT infrastructure for AI readiness. Evaluate compute capacity, network segmentation, data pipeline security, logging capabilities, and access controls. Ensure your foundation can support AI workloads securely before scaling adoption.',
    },
  },
]

/* ------------------------------------------------------------------ */
/*  Readiness-level helpers                                           */
/* ------------------------------------------------------------------ */

const MAX_RAW = 60 // 20 questions x 3 max score

function rawToScaled(raw: number): number {
  return Math.round((raw / MAX_RAW) * 100)
}

function getReadinessLevel(scaled: number) {
  if (scaled <= 25) return { level: 'Not Ready', color: 'text-red-400', bg: 'bg-red-400', border: 'border-red-400/30', bgCard: 'bg-red-500/10', barColor: '#f87171' }
  if (scaled <= 50) return { level: 'Early Stage', color: 'text-orange-400', bg: 'bg-orange-400', border: 'border-orange-400/30', bgCard: 'bg-orange-500/10', barColor: '#fb923c' }
  if (scaled <= 75) return { level: 'Progressing', color: 'text-yellow-400', bg: 'bg-yellow-400', border: 'border-yellow-400/30', bgCard: 'bg-yellow-500/10', barColor: '#facc15' }
  return { level: 'AI Ready', color: 'text-green-400', bg: 'bg-green-400', border: 'border-green-400/30', bgCard: 'bg-green-500/10', barColor: '#4ade80' }
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
        'Your organisation demonstrates strong AI readiness across all areas. Consider advanced measures such as AI red-teaming, automated bias monitoring, and building an internal AI centre of excellence to maintain your competitive edge.',
      ],
    })
  }

  return results
}

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

type Phase = 'intro' | 'quiz' | 'capture' | 'results'

export default function AIReadinessQuiz() {
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
  const readiness = getReadinessLevel(scaledScore)
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
      await fetch('/api/ai-assessment-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          company,
          score: scaledScore,
          readinessLevel: readiness.level,
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
            Is Your Business Ready for AI?
          </h1>
          <p className="text-stealth-gray text-lg leading-relaxed mb-4">
            AI is moving fast. Is your organisation keeping up — or falling behind?
            Take our free 5-minute AI readiness assessment to find out where you stand
            across strategy, security, data governance, and more.
          </p>
          <p className="text-stealth-gray text-sm mb-10">
            No technical knowledge required. Designed for business leaders, CISOs, and IT managers.
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
                See Your AI Readiness Score &amp; Recommendations
              </h2>
              <p className="text-stealth-gray leading-relaxed">
                Enter your details below to unlock your personalised AI readiness score and
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
        <div className={`rounded-2xl border ${readiness.border} ${readiness.bgCard} p-8 md:p-10 text-center mb-10`}>
          <h2 className="text-white text-lg font-medium mb-8">Your AI Readiness Score</h2>

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
                stroke={readiness.barColor}
                strokeDasharray={`${(scaledScore / 100) * 327} 327`}
                style={{ transition: 'stroke-dasharray 1s ease-out' }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={`text-5xl font-bold ${readiness.color}`}>{scaledScore}</span>
              <span className="text-stealth-gray text-sm">/100</span>
            </div>
          </div>

          {/* Horizontal bar gauge */}
          <div className="max-w-sm mx-auto mb-6">
            <div className="w-full h-3 bg-stealth-navy rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${scaledScore}%`, backgroundColor: readiness.barColor }}
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

          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${readiness.bgCard} border ${readiness.border}`}>
            <AlertTriangle className={`w-4 h-4 ${readiness.color}`} />
            <span className={`font-semibold text-sm ${readiness.color}`}>{readiness.level}</span>
          </div>
        </div>

        {/* What this means */}
        <div className="mb-10">
          <h3 className="text-white font-bold text-xl mb-3">What This Means</h3>
          {scaledScore <= 25 && (
            <p className="text-stealth-gray leading-relaxed">
              Your organisation has significant gaps in AI readiness. Without foundational governance, security controls,
              and skills in place, adopting AI at scale carries serious risk. The good news: addressing these fundamentals
              now puts you ahead of most organisations. We recommend engaging an AI readiness partner to build your roadmap.
            </p>
          )}
          {scaledScore > 25 && scaledScore <= 50 && (
            <p className="text-stealth-gray leading-relaxed">
              You have taken some early steps toward AI readiness, but notable gaps remain in governance, security,
              or data practices. Addressing the recommendations below will help you adopt AI more confidently and
              reduce the risk of costly missteps as you scale your AI initiatives.
            </p>
          )}
          {scaledScore > 50 && scaledScore <= 75 && (
            <p className="text-stealth-gray leading-relaxed">
              Your organisation is making solid progress on AI readiness. You have foundations in place but there are
              areas that need strengthening to achieve a robust, secure AI posture. Focusing on the recommendations
              below will help you close the remaining gaps and accelerate safe AI adoption.
            </p>
          )}
          {scaledScore > 75 && (
            <p className="text-stealth-gray leading-relaxed">
              Your organisation demonstrates strong AI readiness across strategy, security, data governance, and skills.
              You are well-positioned to adopt and scale AI with confidence. Continue iterating on your practices and
              consider advanced measures like AI red-teaming and automated governance tooling to maintain your edge.
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
            Speak With Our Team About AI Readiness
          </h3>
          <p className="text-stealth-gray leading-relaxed mb-6 max-w-lg mx-auto">
            This self-assessment gives you a high-level view. Our team can conduct a thorough
            AI readiness review of your environment and provide a detailed roadmap tailored
            to your business — covering governance, security, data, and skills.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-stealth-cyan text-stealth-dark font-semibold rounded-lg hover:bg-white transition-colors"
          >
            Talk to Our Team <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-stealth-gray text-sm mt-4">
            Or reach out directly at{' '}
            <a href="mailto:contact@stealthcyber.io" className="text-stealth-cyan hover:underline">
              contact@stealthcyber.io
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
