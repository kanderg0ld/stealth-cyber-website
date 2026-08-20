/**
 * Content for the Nerv platform page, taken from the Nerv Platform Capability
 * Overview (August 2026).
 *
 * Two deliberate departures from the deck:
 *  1. Vendor comparison tables are reframed as capability comparisons without
 *     naming competitors. The substance is unchanged; the named, dated public
 *     claim is not something the website should carry.
 *  2. Every figure keeps the deck's qualifier. The 47-second timeline is lab
 *     measured, the market statistics are not client outcomes, and pricing is
 *     indicative list. Those footnotes ship with the claims.
 */

/** Kit semantics: magenta = threat/offensive, cyan = defence/healthy,
 *  violet = identity, signal = informational. */
export type Tone = 'magenta' | 'cyan' | 'violet' | 'signal'

/**
 * Text colours only — every value here clears 4.5:1 on Void Black:
 * magenta 5.45, cyan 11.26, violet 5.24, signal 5.03.
 *
 * Violet uses the lightened `nerv-violet-text`, not the kit's #6953E0, which
 * is 3.91:1 and would fail as body or label text.
 */
export const toneText: Record<Tone, string> = {
  magenta: 'text-stealth-magenta',
  cyan: 'text-nerv-cyan',
  violet: 'text-nerv-violet-text',
  signal: 'text-nerv-signal',
}

export interface ComparisonRow {
  capability: string
  typical: string
  nerv: string
}

export interface NervModule {
  /** Anchor id, kept for in-page links on the overview. */
  id: string
  /** URL segment: /nerv/<slug>. Short deliberately — /nerv/nerv-edr reads badly. */
  slug: string
  code: string
  num: string
  surface: string
  title: string
  tagline: string
  body: string
  covers: string[]
  coversLabel: string
  separates: { title: string; body: string }[]
  stats?: { value: string; label: string }[]
  comparison?: {
    typicalLabel: string
    rows: ComparisonRow[]
    note: string
  }
  footnote?: string
  tone: Tone
  group: 'core' | 'ai'
}

export const modules: NervModule[] = [
  {
    id: 'nerv-edr',
    slug: 'edr',
    code: 'Nerv-EDR',
    num: '01',
    surface: 'Endpoint',
    title: 'Endpoint Detection & Response',
    tagline:
      'Enterprise-grade endpoint protection with 37 AI-powered detection modules in a single agent.',
    body: 'A lightweight agent monitoring every process, file, network connection and registry change on Windows, macOS and Linux. Behavioural AI, YARA scanning and deception technology, not signatures.',
    coversLabel: 'What it detects',
    covers: [
      'Process injection and hollowing',
      'Persistence: WMI, COM, IFEO, LaunchAgents',
      'Ransomware, canaries and shadow copy deletion',
      'Lateral movement: PsExec, SMB, pass-the-hash',
      'Credential theft: LSASS, browser stores, keychain',
      'Evasion: AMSI bypass, LOLBAS, PPID spoofing',
      'C2 beaconing, DNS tunnelling, C2 port use',
      'Exfiltration: cloud upload, USB, volume tracking',
      'Local vulnerability and hardening assessment',
      'Network segmentation validation',
    ],
    separates: [
      {
        title: 'Deception built in.',
        body: 'Ransomware canary files and honeytoken credentials, SSH keys and API keys that raise critical alerts the moment an attacker touches them.',
      },
      {
        title: 'AI triage as standard.',
        body: 'Every alert is classified by NOVA in under ten seconds. Not a paid add-on module.',
      },
      {
        title: 'Encrypted C2 detection.',
        body: 'JA3 and JA4 TLS fingerprinting identifies Cobalt Strike, Sliver and Metasploit by handshake, without decryption.',
      },
      {
        title: 'Anti-tamper and zero dependency.',
        body: 'Standalone binary with self-protection. No Python or Java runtime on your endpoints.',
      },
    ],
    stats: [
      { value: '37', label: 'Detection modules in one agent' },
      { value: '3', label: 'Operating systems, one codebase' },
      { value: '<10s', label: 'AI triage on every alert' },
    ],
    comparison: {
      typicalLabel: 'Typical EDR vendors',
      rows: [
        { capability: 'AI triage of every alert', typical: 'Separate product', nerv: 'Built in' },
        { capability: 'Ransomware canary files', typical: 'Not native', nerv: 'Built in' },
        { capability: 'Honeytoken deployment', typical: 'Not native', nerv: 'Built in' },
        { capability: 'JA3 / JA4 TLS fingerprinting', typical: 'Sometimes', nerv: 'Built in' },
        { capability: 'Network segmentation check', typical: 'Not native', nerv: 'Built in' },
        { capability: 'Endpoint hardening audit', typical: 'Separate product', nerv: 'Built in' },
        { capability: 'Windows, macOS and Linux', typical: 'Often Windows + macOS', nerv: 'All three' },
        { capability: 'Multi-tenant MSP console', typical: 'Separate tier', nerv: 'Built in' },
      ],
      note: 'Capability summary of standard-tier inclusions across the endpoint market as at August 2026, prepared from publicly available product documentation. Packaging and licence tiers change frequently and vary by region and contract. This is not a statement about detection efficacy. Verify current inclusions with any vendor you are comparing.',
    },
    tone: 'cyan',
    group: 'core',
  },
  {
    id: 'nerv-web',
    slug: 'web',
    code: 'Nerv-WEB',
    num: '02',
    surface: 'Browser',
    title: 'AI Data Leakage Prevention',
    tagline: 'Your team can keep using AI. Nerv-WEB strips the risk, not the productivity.',
    body: 'A browser extension that redacts sensitive data before it reaches ChatGPT, Claude, Gemini, Copilot and fourteen other platforms. Blocking AI does not work, staff route around it. Redaction does.',
    coversLabel: 'What it covers',
    covers: [
      'API keys, tokens and credentials',
      'Personally identifiable information',
      'Source code and internal identifiers',
      'Financial data and payment details',
      'Client and matter names, portal-synced',
      'Australian PII: TFN, Medicare, ABN',
    ],
    separates: [
      {
        title: 'Redact, do not block.',
        body: 'Silent in-line redaction of 40+ pattern types: API keys, PII, source code, financial data and payment details.',
      },
      {
        title: 'Australian PII natively.',
        body: 'TFN with checksum validation, Medicare numbers and ABN verification. Built for Australian privacy obligations.',
      },
      {
        title: 'Client name protection.',
        body: 'A portal-synced list of client and matter names is auto-redacted, so which client you are working on never leaks.',
      },
      {
        title: 'Privacy by design.',
        body: 'The sensitive value is never transmitted to the portal. Alert metadata only, so the control does not become the exposure.',
      },
      {
        title: 'Enterprise deployable.',
        body: 'Chrome, Edge, Firefox and Safari, force-installed via GPO or Intune. Users cannot disable it.',
      },
    ],
    stats: [
      { value: '40+', label: 'Sensitive data patterns detected' },
      { value: '18', label: 'AI platforms recognised' },
      { value: '4', label: 'Browsers, GPO and Intune deployable' },
    ],
    comparison: {
      typicalLabel: 'Typical DLP tooling',
      rows: [
        { capability: 'Purpose-built for AI platforms', typical: 'Partial at best', nerv: 'Yes' },
        { capability: 'Browser-native enforcement', typical: 'Rarely', nerv: 'Yes' },
        { capability: 'Automatic in-line redaction', typical: 'Sometimes', nerv: 'Yes' },
        { capability: 'Client / matter name protection', typical: 'No', nerv: 'Yes' },
        { capability: 'Australian PII: TFN, Medicare, ABN', typical: 'No', nerv: 'Yes' },
        { capability: 'Correlated into a full SOC', typical: 'SIEM only', nerv: 'Yes' },
        { capability: 'Needs an extra licence', typical: 'Usually', nerv: 'No' },
      ],
      note: 'Capability summary of the data loss prevention market as at August 2026, prepared from publicly available product documentation. Capability in this category depends heavily on licence tier and configuration. Verify current inclusions with any vendor you are comparing.',
    },
    tone: 'magenta',
    group: 'core',
  },
  {
    id: 'nerv-id',
    slug: 'id',
    code: 'Nerv-ID',
    num: '03',
    surface: 'Human identity',
    title: 'Identity Threat Detection & Response',
    tagline:
      'Business email compromise, account takeover and identity attacks, detected and stopped in real time.',
    body: 'Identity is the perimeter now. Nerv-ID monitors Microsoft 365 and Google Workspace, and when it detects a threat it acts: revoke sessions, force a password reset, delete the malicious inbox rule, block the OAuth app.',
    coversLabel: 'What it detects',
    covers: [
      'Impossible travel between logins',
      'Business email compromise and CEO fraud',
      'Password spray across many accounts',
      'Malicious inbox and forwarding rules',
      'Brute force on a single account',
      'OAuth consent attacks',
      'MFA fatigue push bombing',
      'Privilege escalation and CA policy change',
      'Legacy protocol abuse bypassing MFA',
      'Token theft and session reuse',
      'Mass download and external sharing',
      'Per-user behavioural deviation',
    ],
    separates: [
      {
        title: 'Both platforms, one product.',
        body: 'Microsoft 365 and Google Workspace monitored together, which matters the moment you acquire a firm on the other stack.',
      },
      {
        title: 'AI-powered BEC detection.',
        body: 'Email patterns analysed for payment redirection, authority pressure and urgency manipulation, not just rule changes.',
      },
      {
        title: 'Attack chains, not alerts.',
        body: 'Password spray, successful login, inbox rule, payment email arrives as one linked kill chain instead of four tickets.',
      },
      {
        title: 'Response without a human.',
        body: 'Sessions revoked and rules deleted automatically, because a two hour response window is the whole loss event.',
      },
    ],
    stats: [
      { value: '2', label: 'Identity platforms in one product' },
      { value: '12', label: 'Identity threat detections' },
      { value: 'Auto', label: 'Containment without human approval' },
    ],
    comparison: {
      typicalLabel: 'Typical ITDR and bundled identity',
      rows: [
        { capability: 'Microsoft 365 monitoring', typical: 'Yes', nerv: 'Yes' },
        { capability: 'Google Workspace monitoring', typical: 'Rarely', nerv: 'Yes' },
        { capability: 'BEC and payment fraud detection', typical: 'Basic or none', nerv: 'AI-powered' },
        { capability: 'Automated containment', typical: 'Limited', nerv: 'Full' },
        { capability: 'Attack chain correlation', typical: 'No', nerv: 'Yes' },
        { capability: 'Per-user behavioural baseline', typical: 'Partial', nerv: 'Yes' },
        { capability: 'Elevated executive monitoring', typical: 'No', nerv: 'Yes' },
        { capability: 'Needs an extra licence', typical: 'Usually a premium tier', nerv: 'No' },
      ],
      note: 'Capability summary of the identity threat detection market as at August 2026, prepared from publicly available product documentation. Capability varies materially by licence tier and configuration. Verify current inclusions with any vendor you are comparing.',
    },
    tone: 'violet',
    group: 'core',
  },
  {
    id: 'nerv-ai',
    slug: 'ai',
    code: 'Nerv-AI',
    num: '04',
    surface: 'AI systems',
    title: 'AI Detection & Response',
    tagline: 'A security operations layer for the AI systems your business now runs on.',
    body: 'Nerv-AI sits between your users and your models, inspecting every prompt and response in flight. It detects prompt injection, jailbreak attempts, system prompt extraction and data exfiltration, and blocks them before they reach the model. Deploy as a proxy, an SDK or a browser extension.',
    coversLabel: 'Detection categories, mapped to MITRE ATLAS',
    covers: [
      'Prompt injection — AML.T0051',
      'Indirect injection via documents — AML.T0052',
      'LLM jailbreak and persona attacks — AML.T0054',
      'Sensitive data leakage in responses — AML.T0057',
      'System prompt extraction — AML.T0058',
      'Model extraction by systematic probing — AML.T0024',
      'Adversarial input: homoglyphs, invisible characters',
      'Token smuggling and multi-turn context poisoning',
    ],
    separates: [
      {
        title: 'A new product category.',
        body: 'AI detection and response has no established incumbent. Nerv-AI is in the market now, while the category forms.',
      },
      {
        title: 'Model agnostic.',
        body: 'OpenAI, Anthropic, Google, Azure OpenAI and your own self-hosted models, through one control point.',
      },
      {
        title: 'Federated threat intelligence.',
        body: 'Attack patterns seen against one client anonymously strengthen detection for every client.',
      },
      {
        title: 'Compliance evidence built in.',
        body: 'Continuous monitoring records and assessment output aligned to EU AI Act obligations for high-risk systems.',
      },
    ],
    comparison: {
      typicalLabel: 'Emerging AI security tooling',
      rows: [
        { capability: 'Real-time prompt inspection', typical: 'Sometimes', nerv: 'Yes' },
        { capability: 'Model agnostic coverage', typical: 'Partial', nerv: 'Yes' },
        { capability: 'Automated AI red teaming', typical: 'Manual at best', nerv: 'Automated' },
        { capability: 'Federated threat intelligence', typical: 'No', nerv: 'Yes' },
        { capability: 'MITRE ATLAS mapping', typical: 'No', nerv: 'Full' },
        { capability: 'EU AI Act evidence output', typical: 'Partial', nerv: 'Full' },
        { capability: 'Correlated into a full SOC', typical: 'No', nerv: 'Yes' },
      ],
      note: 'Capability summary of the AI security market as at August 2026, prepared from publicly available product documentation. This is a fast-moving category and vendor capability changes month to month. Verify current inclusions with any vendor you are comparing before relying on this summary.',
    },
    tone: 'magenta',
    group: 'core',
  },
  {
    id: 'nerv-nhi',
    slug: 'nhi',
    code: 'Nerv-NHI',
    num: '05',
    surface: 'Machine identity',
    title: 'AI & Machine Identity',
    tagline:
      'Your agents have credentials, permissions and standing access. Nobody offboards a bot.',
    body: 'Non-human identities now outnumber human ones in most tenants, and AI agents are the fastest growing category. Nerv-NHI discovers every agent, service account, API key, model endpoint and automation identity in your environment, tells you what it can reach, and closes the gap between what it was given and what it actually needs.',
    coversLabel: 'What it covers',
    covers: [
      'Agent and service identity discovery',
      'Credential and secret age, rotation, exposure',
      'Least privilege and standing permission review',
      'Delegated authority: who the agent acts for',
      'Agent to resource authorisation mapping',
      'Anomalous agent behaviour against baseline',
      'OAuth app and MCP server consent governance',
      'Named human owner for every machine identity',
      'Orphaned and abandoned identity retirement',
      'Automated scope reduction and revocation',
    ],
    separates: [
      {
        title: 'Built for agentic AI, not just service accounts.',
        body: 'An agent that reasons, chains tools and calls other agents is not a static integration, and treating it like one is how standing access becomes a breach.',
      },
      {
        title: 'Human and machine identity in one place.',
        body: 'Nerv-ID and Nerv-NHI share a console, so a compromised staff account and the agent token it delegated are the same investigation.',
      },
      {
        title: 'Ownership is enforced, not requested.',
        body: 'Every non-human identity carries a named human owner and a review date. Unowned identities are surfaced, not silently inherited.',
      },
      {
        title: 'Offboarding that actually completes.',
        body: 'When a person, project or vendor leaves, the agents and keys created under that authority are identified and retired with them.',
      },
    ],
    footnote:
      'Machine identity governance is an emerging discipline with no settled market leader. We have deliberately not published a capability comparison for this module.',
    tone: 'violet',
    group: 'ai',
  },
  {
    id: 'nerv-code',
    slug: 'code',
    code: 'Nerv-CODE',
    num: '06',
    surface: 'Coding agents',
    title: 'Coding Agent Security',
    tagline:
      'Your developers gave an AI agent write access to the repository. Treat it like the privileged insider it is.',
    body: 'Coding agents read issues, docs, dependencies and tool output, all of it untrusted, then write code and run commands with developer privileges. That turns prompt injection into code execution. Nerv-CODE monitors what the agent does and stops what it should never have been able to do.',
    coversLabel: 'What it covers',
    covers: [
      'Agent action log: read, write, execute',
      'Protected paths and blocked commands',
      'Indirect injection in issues, docs and PRs',
      'Secret access and network egress control',
      'Malicious content in deps and tool output',
      'Secrets caught before commit and before read',
      'Hallucinated and typosquatted packages',
      'Insecure patterns in agent-written code',
      'MCP server and tool inventory, scoped',
      'Authorship provenance and audit trail',
    ],
    separates: [
      {
        title: 'Prompt injection is a supply chain problem here.',
        body: "A malicious instruction buried in a dependency README or a public issue is read by the agent and executed with your developer's credentials.",
      },
      {
        title: 'Provenance you can hand to an auditor.',
        body: 'Which code was agent-authored, under whose authority, from which prompt, reviewed by whom. Increasingly the first question in a regulated code review.',
      },
      {
        title: 'Guardrails at the action, not the prompt.',
        body: 'Filtering the prompt is a losing game. We constrain what the agent is permitted to do, so a successful injection still cannot reach production.',
      },
      {
        title: 'Tied into machine identity.',
        body: "The agent's CI/CD tokens and repository credentials are governed as non-human identities in Nerv-NHI, not as untracked developer secrets.",
      },
    ],
    footnote:
      'Nerv-CODE works alongside the coding agents and IDE assistants your development team already uses. Supported agents are confirmed at scoping.',
    tone: 'cyan',
    group: 'ai',
  },
  {
    id: 'nerv-train',
    slug: 'train',
    code: 'Nerv-TRAIN',
    num: '07',
    surface: 'The human layer',
    title: 'AI Security Awareness Training',
    tagline: 'Annual phishing training does not teach anyone what to do with a chatbot.',
    body: 'Nerv-TRAIN is short, role-based AI security education delivered in the flow of work, and assigned by what the platform actually observes. When Nerv-WEB redacts a client name out of a prompt, the person who typed it receives the two minute module on that exact behaviour, the same day.',
    coversLabel: 'What it covers',
    covers: [
      'Role-based paths: staff, finance, exec, developer',
      'Deepfake voice and video approval simulations',
      'Safe AI use on client and regulated work',
      'AI-written BEC and payment fraud simulations',
      'Shadow AI: what is approved and what is not',
      'Malicious assistant, plugin and agent lures',
      'Prompt hygiene and what never goes in a prompt',
      'Policy attestation and acknowledgement tracking',
      'Behaviour-triggered micro-modules',
      'Completion evidence for ISO 27001 and SOC 2',
    ],
    separates: [
      {
        title: 'Triggered by behaviour, not by calendar.',
        body: 'Training assigned the day the risky thing happens, to the person who did it, about the thing they did. Retention is a different order of magnitude.',
      },
      {
        title: 'The loop closes inside one platform.',
        body: 'Nerv-WEB detects the exposure, Nerv-TRAIN corrects the behaviour, the console evidences both. No CSV export between three vendors.',
      },
      {
        title: 'AI-era social engineering, not 2019 phishing.',
        body: 'Deepfake approval requests, AI-written invoice fraud and malicious agent lures, because that is what is actually arriving now.',
      },
      {
        title: 'Evidence an auditor accepts.',
        body: 'Completion, attestation and behavioural improvement over time, mapped to ISO 27001 A.6.3 and SOC 2 requirements.',
      },
    ],
    footnote:
      'Content is written and maintained by the Stealth Cyber team, in Australian English, with Australian regulatory and privacy context.',
    tone: 'signal',
    group: 'ai',
  },
]

/** Page 16 — the cross-surface kill chain. */
export const killChain: { step: string; module: string; tone: Tone; body: string }[] = [
  { step: '01', module: 'Nerv-ID', tone: 'violet', body: 'Password spray from an offshore IP compromises three accounts' },
  { step: '02', module: 'Nerv-ID', tone: 'violet', body: 'Impossible travel detected, Sydney to Moscow in five minutes, sessions revoked' },
  { step: '03', module: 'Nerv-EDR', tone: 'cyan', body: 'Credential dumping tool executing on the compromised endpoint, process killed' },
  { step: '04', module: 'Nerv-NHI', tone: 'violet', body: 'Stolen token replayed by an over-permissioned AI agent, scope revoked' },
  { step: '05', module: 'Nerv-ID', tone: 'violet', body: 'Forwarding rule created on the CFO mailbox, rule deleted automatically' },
  { step: '06', module: 'Nerv-WEB', tone: 'magenta', body: 'Attacker pastes exported client data into a public chatbot, redacted in line' },
  { step: '07', module: 'Nerv-AI', tone: 'magenta', body: 'Prompt injection attempted against the company AI assistant, blocked' },
  { step: '08', module: 'AI SOC', tone: 'cyan', body: 'Full kill chain correlated, incident report generated, all sessions revoked' },
]

/** Page 17 — the AI SOC agents. */
export const socAgents: { initial: string; name: string; role: string }[] = [
  { initial: 'N', name: 'Nova', role: 'Alert triage and classification' },
  { initial: 'S', name: 'Spectre', role: 'Deep forensic investigation' },
  { initial: 'V', name: 'Vanguard', role: 'Containment and response' },
  { initial: 'P', name: 'Phantom', role: 'Proactive threat hunting' },
  { initial: 'A', name: 'Atlas', role: 'Vulnerability prioritisation' },
  { initial: 'F', name: 'Forge', role: 'Malware analysis' },
  { initial: 'G', name: 'Ghost', role: 'Offensive security testing' },
  { initial: 'C', name: 'Cipher', role: 'OSINT and intelligence' },
]

/** Page 18 — deployment paths. */
export const deployment: { surface: string; detail: string }[] = [
  { surface: 'Endpoint', detail: 'One signed binary pushed via your existing RMM, Intune or GPO. No runtime dependencies, no reboot.' },
  { surface: 'Browser', detail: 'Force-installed extension for Chrome, Edge, Firefox and Safari. Users cannot disable it.' },
  { surface: 'Identity', detail: 'OAuth consent in Microsoft 365 or Google Workspace. No agent, no change to mail flow.' },
  { surface: 'Machine identity', detail: 'Read-only discovery first, so you see every agent and key before anything is enforced.' },
  { surface: 'AI systems', detail: 'A proxy endpoint, an SDK integration or the browser extension, depending on what you own.' },
  { surface: 'Coding agents', detail: 'A repository and CI integration plus an agent-side policy. No change to how developers work.' },
  { surface: 'People', detail: 'Single sign-on and a directory sync. Training assigns itself from there.' },
]

/** Page 20 — commercials. */
export const tiers: {
  name: string
  includes: string
  body: string
  price: string
  unit: string
  atTen: string
  featured?: boolean
}[] = [
  {
    name: 'Essentials',
    includes: 'Nerv-EDR + Nerv-WEB',
    body: 'Endpoint protection and AI data leakage prevention. The floor for any team with staff using AI tools.',
    price: '$30',
    unit: 'per user / month',
    atTen: '$300 / month at 10 seats',
  },
  {
    name: 'Professional',
    includes: 'Adds Nerv-ID and Nerv-TRAIN',
    body: 'Identity threat detection across Microsoft 365 and Google Workspace, plus AI awareness training triggered by real behaviour.',
    price: '$75',
    unit: 'per user / month',
    atTen: '$750 / month at 10 seats',
  },
  {
    name: 'Enterprise',
    includes: 'All seven modules + AI SOC',
    body: 'Adds Nerv-AI, Nerv-NHI and Nerv-CODE. Full cross-surface correlation and the AI security operations centre.',
    price: '$100',
    unit: 'per user / month',
    atTen: '$1,000 / month at 10 seats',
    featured: true,
  },
  {
    name: 'Managed',
    includes: 'All seven + Stealth Cyber SOC',
    body: 'Everything in Enterprise, operated by our analysts. Monthly reporting, incident response retainer, advisory hours.',
    price: 'Custom',
    unit: 'scoped to your environment',
    atTen: 'Confirmed in a written proposal',
  },
]

/** Page 21 — fit. */
export const fit: { title: string; body: string }[] = [
  { title: 'Startups and scale-ups, from 10 seats', body: 'Shipping fast, usually with AI in the product, and with nobody whose actual job is security. You do not need two hundred staff to buy this.' },
  { title: 'Small professional services firms', body: 'Accounting, legal and advisory practices from ten people up. Client confidentiality is the product, and staff are already using AI on client work.' },
  { title: 'Growing companies facing assurance', body: 'Healthcare, finance, legal and anyone hitting their first enterprise security questionnaire, SOC 2 audit or ISO 27001 push.' },
  { title: 'AI-forward teams of any size', body: 'Already shipping AI features, running internal AI tools or letting agents write code, and aware that nothing currently watches them.' },
  { title: 'MSPs and MSSPs', body: 'Multi-tenant from the first login, per-client dashboards, white-label ready, partner margin on the platform.' },
]

/** Page 3 — why the existing stack cannot see the AI surface. */
export const blindSpots: { title: string; body: string }[] = [
  { title: 'EDR watches processes.', body: 'A malicious prompt is not a process. It is a legitimate API call carrying hostile text.' },
  { title: 'Web filtering watches domains.', body: 'The domain is api.openai.com and it is meant to be allowed.' },
  { title: 'DLP watches files.', body: 'The exfiltration is a paste into a text box, then a screenshot of the answer.' },
  { title: 'SIEM watches logs.', body: 'Model inputs and outputs are almost never logged, so there is nothing to correlate.' },
]

/** Page 2 — what four consoles cost you. */
export const costs: { title: string; body: string }[] = [
  { title: 'Correlation happens in a human head.', body: 'An endpoint alert and an identity alert are the same incident, but nobody joins them until Monday.' },
  { title: 'Alert fatigue is the control failure.', body: 'Four consoles generating four queues means the alert that mattered was the one nobody opened.' },
  { title: 'Every gap is a licensing conversation.', body: 'AI triage, hardening audits and identity response are sold as upsells, so the coverage you assumed you had, you don’t.' },
  { title: 'Nobody owns the AI surface at all.', body: 'Staff paste client data into chatbots, your AI applications answer whatever they are asked, and agents act on delegated authority nobody reviews.' },
]

/** Page 12 — what the AI red team asks. */
export const redTeamProbes: { question: string; detail: string }[] = [
  { question: 'Can it be jailbroken?', detail: '100+ jailbreak and persona manipulation patterns' },
  { question: 'Can the system prompt be extracted?', detail: '30+ extraction techniques' },
  { question: 'Is it resistant to prompt injection?', detail: '50+ direct and indirect injection techniques' },
  { question: 'Does it leak personal information?', detail: 'Structured probing for PII and credentials' },
  { question: 'Can it be made to generate harmful content?', detail: 'Safety boundary testing' },
  { question: 'What is the posture score?', detail: '0 to 100, tracked over time' },
]

/** Page 22 — why Stealth Cyber. */
export const credibility: { title: string; body: string }[] = [
  { title: 'Offensive security at the core', body: 'OSED and CED certified leadership. We attack systems for a living, which is why the detections are where they are.' },
  { title: 'Real incident response experience', body: 'Credential theft, business email compromise, ransomware and MSP supply chain compromise, investigated end to end.' },
  { title: 'Governance credibility', body: 'Contributions to state government information security standards, IRAP pre-audit work, ISO 27001 and SOC 2 programmes underway.' },
  { title: 'Follow the sun coverage', body: 'Teams in Australia, Brazil and the United States. Local accountability, extended hours, one platform.' },
]

