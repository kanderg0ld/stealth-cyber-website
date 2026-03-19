import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'
import fs from 'fs'
import path from 'path'

const BRAND = {
  dark: rgb(4 / 255, 5 / 255, 15 / 255),
  navy: rgb(7 / 255, 9 / 255, 26 / 255),
  cyan: rgb(77 / 255, 204 / 255, 255 / 255),
  blue: rgb(0 / 255, 56 / 255, 255 / 255),
  indigo: rgb(98 / 255, 49 / 255, 245 / 255),
  gray: rgb(148 / 255, 163 / 255, 184 / 255),
  white: rgb(1, 1, 1),
  black: rgb(0, 0, 0),
  lightGray: rgb(0.95, 0.95, 0.95),
  textGray: rgb(0.3, 0.3, 0.3),
  textDark: rgb(0.15, 0.15, 0.15),
}

const A4 = { width: 595.28, height: 841.89 }
const MARGIN = 56
const CONTENT_WIDTH = A4.width - MARGIN * 2

async function createPDF(config) {
  const doc = await PDFDocument.create()
  const fontRegular = await doc.embedFont(StandardFonts.Helvetica)
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold)

  function addCoverPage(title, subtitle) {
    const page = doc.addPage([A4.width, A4.height])
    // Dark background
    page.drawRectangle({ x: 0, y: 0, width: A4.width, height: A4.height, color: BRAND.dark })
    // Top gradient bar
    page.drawRectangle({ x: 0, y: A4.height - 4, width: A4.width, height: 4, color: BRAND.blue })
    // Title
    const titleLines = wrapText(title, fontBold, 36, CONTENT_WIDTH)
    let y = A4.height - 180
    for (const line of titleLines) {
      page.drawText(line, { x: MARGIN, y, size: 36, font: fontBold, color: BRAND.white })
      y -= 44
    }
    // Accent bar
    y -= 10
    page.drawRectangle({ x: MARGIN, y, width: 60, height: 3, color: BRAND.blue })
    y -= 30
    // Subtitle
    const subLines = wrapText(subtitle, fontRegular, 14, CONTENT_WIDTH * 0.7)
    for (const line of subLines) {
      page.drawText(line, { x: MARGIN, y, size: 14, font: fontRegular, color: BRAND.gray })
      y -= 20
    }
    // Bottom
    page.drawText('stealthcyber.io', { x: MARGIN, y: 40, size: 11, font: fontRegular, color: BRAND.gray })
    page.drawRectangle({ x: 0, y: 0, width: A4.width, height: 4, color: BRAND.blue })
    return page
  }

  function addContentPage() {
    const page = doc.addPage([A4.width, A4.height])
    return { page, y: A4.height - MARGIN }
  }

  function drawHeading(page, y, text) {
    // Blue accent bar
    page.drawRectangle({ x: MARGIN, y: y - 2, width: 3, height: 16, color: BRAND.blue })
    page.drawText(text, { x: MARGIN + 12, y, size: 15, font: fontBold, color: BRAND.textDark })
    return y - 30
  }

  function drawSubheading(page, y, text) {
    page.drawText(text, { x: MARGIN, y, size: 11, font: fontBold, color: BRAND.textDark })
    return y - 18
  }

  function drawParagraph(page, y, text) {
    const lines = wrapText(text, fontRegular, 10, CONTENT_WIDTH)
    for (const line of lines) {
      if (y < MARGIN + 20) return y
      page.drawText(line, { x: MARGIN, y, size: 10, font: fontRegular, color: BRAND.textGray })
      y -= 15
    }
    return y - 5
  }

  function drawCheckItem(page, y, text) {
    if (y < MARGIN + 20) return y
    // Checkbox
    page.drawRectangle({ x: MARGIN, y: y - 2, width: 10, height: 10, borderColor: BRAND.gray, borderWidth: 1.2, color: BRAND.white })
    // Text
    const lines = wrapText(text, fontRegular, 9.5, CONTENT_WIDTH - 20)
    let ly = y
    for (const line of lines) {
      if (ly < MARGIN + 20) return ly
      page.drawText(line, { x: MARGIN + 18, y: ly, size: 9.5, font: fontRegular, color: BRAND.textGray })
      ly -= 14
    }
    return ly - 4
  }

  function drawBullet(page, y, text) {
    if (y < MARGIN + 20) return y
    page.drawCircle({ x: MARGIN + 4, y: y + 3, size: 2, color: BRAND.blue })
    const lines = wrapText(text, fontRegular, 9.5, CONTENT_WIDTH - 18)
    let ly = y
    for (const line of lines) {
      if (ly < MARGIN + 20) return ly
      page.drawText(line, { x: MARGIN + 16, y: ly, size: 9.5, font: fontRegular, color: BRAND.textGray })
      ly -= 14
    }
    return ly - 3
  }

  function addBackPage() {
    const page = doc.addPage([A4.width, A4.height])
    page.drawRectangle({ x: 0, y: 0, width: A4.width, height: A4.height, color: BRAND.dark })
    page.drawRectangle({ x: 0, y: A4.height - 4, width: A4.width, height: 4, color: BRAND.blue })

    let y = A4.height - 80
    page.drawText(config.backPageTitle || 'Need help?', { x: MARGIN, y, size: 24, font: fontBold, color: BRAND.white })
    y -= 30
    const descLines = wrapText(config.backPageDesc || 'Stealth Cyber provides managed cybersecurity for Australian professional services firms. Get in touch.', fontRegular, 13, CONTENT_WIDTH * 0.7)
    for (const line of descLines) {
      page.drawText(line, { x: MARGIN, y, size: 13, font: fontRegular, color: BRAND.gray })
      y -= 20
    }

    y -= 30
    const contacts = [
      ['Website', 'stealthcyber.io'],
      ['Email', 'contact@stealthcyber.io'],
      ['Phone (AU)', '+61 7 5230 8381'],
      ['Phone (US)', '+1 (855) 774-2595'],
      ['Offices', 'Gold Coast, AU | Sao Paulo, BR | Texas, US'],
    ]
    for (const [label, value] of contacts) {
      page.drawText(label.toUpperCase(), { x: MARGIN, y, size: 8, font: fontBold, color: BRAND.cyan })
      y -= 16
      page.drawText(value, { x: MARGIN, y, size: 13, font: fontRegular, color: BRAND.white })
      y -= 28
    }

    // Bottom
    page.drawRectangle({ x: 0, y: 0, width: A4.width, height: 4, color: BRAND.blue })
    page.drawText('© 2026 Stealth Cyber Pty Ltd. ABN 72 675 840 632. All rights reserved.', { x: MARGIN, y: 16, size: 8, font: fontRegular, color: BRAND.gray })
    return page
  }

  function wrapText(text, font, size, maxWidth) {
    const words = text.split(' ')
    const lines = []
    let current = ''
    for (const word of words) {
      const test = current ? `${current} ${word}` : word
      const width = font.widthOfTextAtSize(test, size)
      if (width > maxWidth && current) {
        lines.push(current)
        current = word
      } else {
        current = test
      }
    }
    if (current) lines.push(current)
    return lines
  }

  // Build the PDF
  addCoverPage(config.title, config.subtitle)

  for (const section of config.sections) {
    let { page, y } = addContentPage()

    for (const block of section.blocks) {
      // Check if we need a new page
      if (y < MARGIN + 60) {
        ;({ page, y } = addContentPage())
      }

      if (block.type === 'heading') {
        y = drawHeading(page, y, block.text)
      } else if (block.type === 'subheading') {
        y = drawSubheading(page, y, block.text)
      } else if (block.type === 'paragraph') {
        y = drawParagraph(page, y, block.text)
      } else if (block.type === 'check') {
        y = drawCheckItem(page, y, block.text)
      } else if (block.type === 'bullet') {
        y = drawBullet(page, y, block.text)
      } else if (block.type === 'callout') {
        // Draw a highlighted box
        const lines = wrapText(block.text, fontRegular, 9.5, CONTENT_WIDTH - 24)
        const boxH = lines.length * 14 + 16
        if (y - boxH < MARGIN + 20) {
          ;({ page, y } = addContentPage())
        }
        page.drawRectangle({ x: MARGIN, y: y - boxH + 8, width: CONTENT_WIDTH, height: boxH, color: BRAND.lightGray })
        page.drawRectangle({ x: MARGIN, y: y - boxH + 8, width: 3, height: boxH, color: BRAND.blue })
        let ly = y - 4
        for (const line of lines) {
          page.drawText(line, { x: MARGIN + 12, y: ly, size: 9.5, font: fontRegular, color: BRAND.textGray })
          ly -= 14
        }
        y = y - boxH - 8
      }
    }
  }

  addBackPage()

  const bytes = await doc.save()
  const outPath = path.join('public', `${config.filename}.pdf`)
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, bytes)
  console.log(`Generated: ${outPath}`)
}

// --- PDF Definitions ---

const pdfs = [
  {
    filename: 'ai-security-cheat-sheet',
    title: 'AI Security Cheat Sheet',
    subtitle: 'What every Australian business needs to know about securing AI tools in the workplace.',
    backPageTitle: 'Need help securing your AI tools?',
    backPageDesc: 'Stealth Cyber provides managed cybersecurity and AI governance support for Australian professional services firms.',
    sections: [
      {
        blocks: [
          { type: 'heading', text: 'The Core Problem' },
          { type: 'paragraph', text: 'AI tools move faster than security policies. Most organisations are using AI in some capacity before anyone has defined the rules around it. This cheat sheet covers the essentials so your team is not making security decisions by default.' },
          { type: 'heading', text: 'What to Lock Down First' },
          { type: 'subheading', text: 'Data you should never put into a public AI tool' },
          { type: 'bullet', text: 'Client personal information (names, TFNs, contact details)' },
          { type: 'bullet', text: 'Financial records, bank account details, transaction data' },
          { type: 'bullet', text: 'Legally privileged communications' },
          { type: 'bullet', text: 'Staff payroll and HR records' },
          { type: 'bullet', text: 'Commercially sensitive contracts or strategy documents' },
          { type: 'bullet', text: 'Login credentials, API keys, or any authentication material' },
          { type: 'callout', text: 'If it would cause a problem under the Privacy Act or your professional obligations if it leaked, it does not go into a public AI tool.' },
        ],
      },
      {
        blocks: [
          { type: 'heading', text: 'Five Rules for Staff Using AI Tools' },
          { type: 'check', text: '1. Only use tools the business has approved. If it is not on the approved list, raise it before using it for work tasks.' },
          { type: 'check', text: '2. Never paste client data into a public AI tool. Not even to "just check something quickly."' },
          { type: 'check', text: '3. Treat AI outputs as a first draft, not a final answer. Review everything before it goes to a client or gets acted on.' },
          { type: 'check', text: '4. Report anything that looks wrong. If an AI tool behaves unexpectedly or produces output that references information it should not have, report it.' },
          { type: 'check', text: '5. Your professional obligations apply to AI-assisted work. If you sign off on it, you are accountable for it.' },
          { type: 'heading', text: 'Microsoft 365 and Copilot Risks' },
          { type: 'paragraph', text: 'Copilot for Microsoft 365 draws from everything the user can access. If your permissions model is loose, Copilot will surface files and data beyond what any individual user should be seeing.' },
          { type: 'subheading', text: 'Before deploying Copilot:' },
          { type: 'bullet', text: 'Review and tighten SharePoint permissions' },
          { type: 'bullet', text: 'Apply Microsoft Purview sensitivity labels to confidential content' },
          { type: 'bullet', text: 'Audit who has access to what across your tenancy' },
          { type: 'bullet', text: 'Understand what Copilot can see on behalf of each user role' },
          { type: 'callout', text: 'Deploying Copilot without a permissions review is a reliable way to expose sensitive information to people who should not have it.' },
        ],
      },
      {
        blocks: [
          { type: 'heading', text: 'Shadow AI' },
          { type: 'paragraph', text: 'Shadow AI is any AI tool being used by staff that the business has not formally sanctioned. Most organisations have more shadow AI use than they realise.' },
          { type: 'callout', text: 'How to find it: Ask your IT or security provider to audit browser extensions, SaaS application usage, and network traffic for known AI service domains.' },
          { type: 'heading', text: 'AI Incident Types to Report' },
          { type: 'bullet', text: 'Accidental submission of confidential data to a public AI tool' },
          { type: 'bullet', text: 'AI output that references client or business information it should not have access to' },
          { type: 'bullet', text: 'An AI tool behaving unexpectedly or requesting unusual permissions' },
          { type: 'bullet', text: 'Staff using an unsanctioned AI tool with work-related data' },
          { type: 'bullet', text: 'A vendor disclosing that their AI features have been updated to include data sharing' },
          { type: 'heading', text: 'Three Things to Do This Week' },
          { type: 'check', text: '1. Audit what AI tools your staff are currently using. Ask directly and check with your IT provider.' },
          { type: 'check', text: '2. Establish a simple approved tools list. Even an email to staff is better than no policy.' },
          { type: 'check', text: '3. Brief your team on what data cannot go into public AI tools. One conversation prevents most incidents.' },
        ],
      },
    ],
  },

  // 2. AI Readiness Checklist
  {
    filename: 'ai-readiness-checklist',
    title: 'AI Readiness Checklist',
    subtitle: 'Before your organisation deploys AI tools at scale, work through this checklist. Each item represents a gap that creates real risk if left unaddressed.',
    backPageTitle: 'Need help getting AI ready?',
    backPageDesc: 'Stealth Cyber helps Australian professional services firms build AI governance frameworks that are practical, not just compliant. Get in touch for a straight conversation about your AI readiness.',
    sections: [
      {
        blocks: [
          { type: 'callout', text: 'How to Use This Checklist: Work through each section with your IT provider or security partner. A tick means the item is in place and verified, not just assumed. Items left blank are gaps. Prioritise the gaps in Section 1 and Section 2 before expanding AI tool use further.' },
          { type: 'heading', text: '1. Data Governance Foundations' },
          { type: 'paragraph', text: 'These need to be in place before AI touches your data.' },
          { type: 'check', text: 'You have a current data register that identifies what sensitive data you hold and where it lives' },
          { type: 'check', text: 'Data is classified by sensitivity (e.g. public, internal, confidential, restricted)' },
          { type: 'check', text: 'Sensitivity labels are applied to documents and emails in Microsoft 365 (if applicable)' },
          { type: 'check', text: 'You know which staff have access to which data and why' },
          { type: 'check', text: 'Access permissions have been reviewed in the last 12 months' },
          { type: 'check', text: 'There is a documented process for off-boarding staff that includes revoking data access' },
          { type: 'check', text: 'Your Privacy Act obligations are understood and documented' },
          { type: 'check', text: 'You have a data breach response plan' },
        ],
      },
      {
        blocks: [
          { type: 'heading', text: '2. Identity and Access Security' },
          { type: 'paragraph', text: 'AI tools inherit the permissions of the users running them. Weak identity security becomes an AI security problem.' },
          { type: 'check', text: 'Multi-factor authentication is enforced on all accounts, not just offered' },
          { type: 'check', text: 'Phishing-resistant MFA (hardware keys or certificate-based) is in use for privileged accounts' },
          { type: 'check', text: 'Legacy authentication protocols are blocked in Microsoft 365' },
          { type: 'check', text: 'Conditional access policies restrict sign-in to managed, compliant devices' },
          { type: 'check', text: 'Admin accounts are separate from day-to-day user accounts' },
          { type: 'check', text: 'Privileged access is reviewed and validated regularly' },
          { type: 'check', text: 'Single sign-on is used where available to centralise authentication control' },
          { type: 'check', text: 'Shared or generic accounts have been eliminated or formally justified' },
          { type: 'heading', text: '3. AI Tool Inventory and Policy' },
          { type: 'check', text: 'You have a complete list of AI tools currently in use across the organisation, including browser extensions and personal accounts used for work' },
          { type: 'check', text: 'There is a written policy that defines approved AI tools and acceptable use' },
          { type: 'check', text: 'Staff have been briefed on what data cannot be processed through public AI tools' },
          { type: 'check', text: 'There is a process for staff to request approval of new AI tools before using them' },
        ],
      },
      {
        blocks: [
          { type: 'heading', text: '3. AI Tool Inventory and Policy (continued)' },
          { type: 'check', text: 'Your AI policy has been reviewed by legal or compliance in the context of your professional obligations' },
          { type: 'check', text: 'Vendor agreements for AI tools have been reviewed for data handling and training clauses' },
          { type: 'check', text: 'You know whether your AI vendor uses your data to train its models' },
          { type: 'heading', text: '4. Microsoft Copilot Specific' },
          { type: 'paragraph', text: 'If applicable to your environment.' },
          { type: 'check', text: 'SharePoint and OneDrive permissions have been audited and tightened before Copilot deployment' },
          { type: 'check', text: 'Sensitivity labels are applied to content Copilot can access' },
          { type: 'check', text: 'You understand what Copilot can surface on behalf of each user role' },
          { type: 'check', text: 'Copilot interactions are logged and reviewable' },
          { type: 'check', text: 'Staff have been briefed on Copilot\'s data scope and appropriate use' },
          { type: 'check', text: 'A Copilot usage policy is in place' },
          { type: 'heading', text: '5. Output Quality and Accountability' },
          { type: 'check', text: 'Staff understand that AI outputs require review before being sent to clients or acted on' },
          { type: 'check', text: 'There is a defined review requirement for AI-assisted work based on consequence' },
          { type: 'check', text: 'Staff know they remain professionally accountable for AI-assisted work they sign off on' },
          { type: 'check', text: 'There is a process for reporting AI errors or unexpected outputs' },
          { type: 'check', text: 'AI-generated content used in client deliverables is disclosed where required by professional standards' },
        ],
      },
      {
        blocks: [
          { type: 'heading', text: '6. Vendor and Third-Party Risk' },
          { type: 'check', text: 'You have reviewed the data handling terms for every AI tool in use' },
          { type: 'check', text: 'You know where your data is stored geographically for each tool' },
          { type: 'check', text: 'You know whether your AI vendors are subject to foreign government access requests that could affect your data' },
          { type: 'check', text: 'AI vendors with access to sensitive data have been assessed against your supplier risk framework' },
          { type: 'check', text: 'You have a process for reviewing vendor AI terms when they are updated' },
          { type: 'heading', text: '7. Incident and Compliance Readiness' },
          { type: 'check', text: 'You have defined what constitutes an AI-related security incident' },
          { type: 'check', text: 'Reporting obligations for AI incidents are understood (Privacy Act notifiable data breaches, professional body obligations)' },
          { type: 'check', text: 'Your cyber liability insurance covers AI-related incidents (confirm with your broker)' },
          { type: 'check', text: 'You are monitoring regulatory developments on AI governance in your sector' },
          { type: 'check', text: 'Someone in the organisation has clear ownership of AI governance' },
          { type: 'heading', text: 'Score Your Readiness' },
          { type: 'bullet', text: '0 to 10 ticked: AI deployment is running ahead of governance. Stop and address Section 1 and Section 2 before expanding use.' },
          { type: 'bullet', text: '11 to 25 ticked: Foundational gaps exist. Prioritise the blanks in Sections 1 through 3 and engage your security provider on a remediation plan.' },
          { type: 'bullet', text: '26 to 40 ticked: Reasonable baseline. Focus on the remaining gaps and establish a review cycle.' },
          { type: 'bullet', text: '41 or more ticked: Strong foundation. Maintain through regular review and stay current on regulatory developments.' },
        ],
      },
    ],
  },

  // 3. 10 Questions to Ask Your IT Provider
  {
    filename: '10-questions-it-provider',
    title: '10 Questions to Ask Your IT Provider About Cybersecurity',
    subtitle: 'A capable IT provider should be able to answer every one of these clearly and specifically. Vague answers are data.',
    backPageTitle: 'Want an independent view?',
    backPageDesc: 'Stealth Cyber provides independent cybersecurity assessments and managed protection for Australian professional services firms. If you want a straight read on your current security posture, get in touch.',
    sections: [
      {
        blocks: [
          { type: 'callout', text: 'How to Use This Resource: Take these questions into your next review conversation with your IT provider. You are not looking for jargon. You are looking for specific, measurable answers. Where you get generalities, ask for the specific metric, report, or process behind the claim.' },
          { type: 'heading', text: '1. Who is monitoring our environment at 2am on a Saturday?' },
          { type: 'paragraph', text: 'What you are listening for: a named tool, a named team, and a defined escalation process. "We have antivirus and alerting" is not 24/7 monitoring. If the answer is that alerts go to a ticketing queue and get reviewed during business hours, your environment is unmonitored outside of business hours.' },
          { type: 'callout', text: 'Follow-up: What was the last alert generated in our environment, and when was it reviewed?' },
          { type: 'heading', text: '2. What are your mean time to detect and mean time to respond benchmarks?' },
          { type: 'paragraph', text: 'Mean time to detect (MTTD) is how long it takes to identify that a threat is present. Mean time to respond (MTTR) is how long it takes to contain it. These are measurable numbers. Industry average MTTD without a dedicated security function is around 200 days.' },
          { type: 'callout', text: 'Follow-up: Can you show us these metrics for our environment specifically over the last quarter?' },
          { type: 'heading', text: '3. Have you done an ASD Essential Eight assessment of our environment?' },
          { type: 'paragraph', text: 'A proper assessment tests whether controls are actually enforced, not just configured. If they have done one, ask for the report. If they have not, ask when it will be scheduled.' },
          { type: 'callout', text: 'Follow-up: What is our current maturity level for each of the eight controls?' },
        ],
      },
      {
        blocks: [
          { type: 'heading', text: '4. How are we patching and how quickly?' },
          { type: 'paragraph', text: 'The ASD recommends patching internet-facing applications within 48 hours of a critical vulnerability being published. Operating systems within 48 hours for extreme risk, two weeks for everything else. Monthly patching cycles leave known vulnerabilities open for up to 30 days.' },
          { type: 'callout', text: 'Follow-up: Can you show us our current patch compliance report and the average age of unpatched critical vulnerabilities?' },
          { type: 'heading', text: '5. Is MFA enforced across all accounts, and are legacy authentication protocols blocked?' },
          { type: 'paragraph', text: 'MFA being available is not the same as MFA being enforced. Legacy authentication protocols bypass MFA entirely. If basic authentication, IMAP, or POP3 are still permitted in your Microsoft 365 environment, MFA is protecting less than you think.' },
          { type: 'callout', text: 'Follow-up: Show us the conditional access policy that blocks legacy authentication and confirm there are no exceptions.' },
          { type: 'heading', text: '6. How are administrative privileges managed?' },
          { type: 'paragraph', text: 'How many accounts have domain admin or local admin rights? How is that list reviewed? Are IT staff working day-to-day from admin accounts?' },
          { type: 'callout', text: 'Follow-up: Can you pull the current list of accounts with admin privileges and walk us through the last time it was reviewed?' },
        ],
      },
      {
        blocks: [
          { type: 'heading', text: '7. Walk us through what happens when a threat is detected.' },
          { type: 'paragraph', text: 'You want a specific process: who gets the alert, who investigates, what the containment steps are, how quickly isolation happens, and how you as the business are notified. A provider with a real process will answer this without hesitation.' },
          { type: 'callout', text: 'Follow-up: Has this process been tested in a tabletop exercise or simulation in the last 12 months?' },
          { type: 'heading', text: '8. Are our backups tested and is at least one copy stored offline or immutably?' },
          { type: 'paragraph', text: 'Backups that have never been tested may not restore. Backups stored on the same network as the systems they protect can be encrypted by ransomware along with everything else.' },
          { type: 'callout', text: 'Follow-up: When was the last time a full restore was tested from our backups, and what was the result?' },
          { type: 'heading', text: '9. What have you proactively recommended in the last six months that we did not ask for?' },
          { type: 'paragraph', text: 'A security-aware IT provider brings things to your attention before you think to ask. New threat patterns relevant to your industry. Configuration gaps found during routine work. Emerging risks.' },
          { type: 'callout', text: 'Follow-up: If the answer is limited, ask what threat intelligence sources they are monitoring and how that informs their recommendations.' },
        ],
      },
      {
        blocks: [
          { type: 'heading', text: '10. What is outside your scope?' },
          { type: 'paragraph', text: 'This is the most important question. Most IT providers have genuine limits to their security capability and the honest ones will tell you where those limits are. Knowing what your current provider does not cover tells you where the gaps are, which is information you need to manage your risk properly.' },
          { type: 'callout', text: 'Follow-up: Who would you recommend engaging for the areas outside your scope, and are you willing to work alongside a specialist security partner?' },
          { type: 'heading', text: 'What to Do With the Answers' },
          { type: 'paragraph', text: 'A provider who answers all ten questions clearly, specifically, and with evidence is a provider who is genuinely on top of your security. That is worth knowing.' },
          { type: 'paragraph', text: 'A provider who cannot answer several of these questions, or who gives vague responses without specifics, is a provider whose security capability may not match what you are paying for or what you need. That is also worth knowing.' },
          { type: 'paragraph', text: 'This is not about catching anyone out. It is about understanding what you actually have in place so you can make informed decisions about your risk.' },
        ],
      },
    ],
  },

  // 4. Cyber Insurance Checklist
  {
    filename: 'cyber-insurance-checklist',
    title: 'Cyber Insurance Checklist',
    subtitle: 'Cyber insurance is not a substitute for security controls. It is a financial backstop for when controls fail. This checklist helps you understand what you actually have, what you actually need, and what gaps to close before your next renewal.',
    backPageTitle: 'Preparing for your next renewal?',
    backPageDesc: 'Stealth Cyber works with Australian professional services firms on security posture assessments and managed protection. For independent advice on your cyber security position before your next insurance renewal, get in touch.',
    sections: [
      {
        blocks: [
          { type: 'heading', text: 'Before You Buy or Renew' },
          { type: 'check', text: 'You have read the policy, not just the summary. Specifically the exclusions section.' },
          { type: 'check', text: 'You understand the difference between first-party coverage (your own losses) and third-party coverage (claims made against you by others)' },
          { type: 'check', text: 'Your broker has cybersecurity specialist expertise, not just general business insurance knowledge' },
          { type: 'check', text: 'You have disclosed your actual security posture accurately on the application. Misrepresentation is the most common reason claims are denied.' },
          { type: 'check', text: 'You know your policy\'s retroactive date (the earliest date from which a claim can arise)' },
          { type: 'heading', text: 'Coverage: What to Confirm Is Included' },
          { type: 'subheading', text: 'Incident Response Costs' },
          { type: 'check', text: 'Forensic investigation costs are covered' },
          { type: 'check', text: 'Incident response firm engagement is covered' },
          { type: 'check', text: 'The policy specifies which IR firms you are permitted to engage, and you have checked whether your preferred provider is on the panel' },
          { type: 'subheading', text: 'Business Interruption' },
          { type: 'check', text: 'Business interruption losses from a cyber incident are covered' },
          { type: 'check', text: 'The waiting period (time before BI coverage kicks in) is defined and acceptable' },
          { type: 'check', text: 'Coverage applies to dependent system failures (e.g. a cloud provider outage affecting your operations)' },
          { type: 'subheading', text: 'Data Breach Costs' },
          { type: 'check', text: 'Notification costs to affected individuals are covered' },
          { type: 'check', text: 'Regulatory investigation costs and fines are covered (note: some policies exclude regulatory fines)' },
          { type: 'check', text: 'Credit monitoring and identity protection services for affected individuals are covered' },
          { type: 'check', text: 'Legal costs associated with a breach are covered' },
        ],
      },
      {
        blocks: [
          { type: 'subheading', text: 'Ransomware and Extortion' },
          { type: 'check', text: 'Ransomware response and recovery costs are covered' },
          { type: 'check', text: 'Ransom payments are covered (confirm this explicitly if it is a concern)' },
          { type: 'check', text: 'Data recovery costs are covered' },
          { type: 'check', text: 'The policy does not exclude ransomware attacks originating from nation-state actors or acts of war (this exclusion has been applied in disputed cases)' },
          { type: 'subheading', text: 'Third-Party Liability' },
          { type: 'check', text: 'Claims from clients whose data was compromised in your environment are covered' },
          { type: 'check', text: 'Coverage applies to claims arising from failure to protect third-party data' },
          { type: 'check', text: 'Media liability (e.g. defamation arising from digital content) is included if relevant' },
          { type: 'subheading', text: 'Social Engineering and Funds Transfer Fraud' },
          { type: 'check', text: 'Business email compromise and funds transfer fraud are covered' },
          { type: 'check', text: 'The coverage limit for social engineering events is adequate for the transaction sizes in your business' },
          { type: 'check', text: 'Coverage applies even when an employee authorised the transfer (most BEC losses involve authorised payments)' },
          { type: 'heading', text: 'Policy Conditions: What You Need in Place' },
          { type: 'paragraph', text: 'Most cyber policies require certain security controls as a condition of coverage. Failure to maintain them can void a claim.' },
          { type: 'check', text: 'Multi-factor authentication is enforced on all remote access and email (near-universal policy condition)' },
          { type: 'check', text: 'MFA is enforced on all privileged accounts' },
          { type: 'check', text: 'Endpoint detection and response (EDR) software is deployed across all endpoints' },
          { type: 'check', text: 'Systems are patched within defined timeframes' },
          { type: 'check', text: 'Offsite or immutable backups are maintained' },
          { type: 'check', text: 'Staff receive regular security awareness training' },
          { type: 'check', text: 'You have a documented incident response plan' },
          { type: 'check', text: 'End-of-life or unsupported software is identified (some policies exclude incidents from unsupported systems)' },
        ],
      },
      {
        blocks: [
          { type: 'heading', text: 'Limits and Sub-Limits: Things to Check' },
          { type: 'check', text: 'The aggregate policy limit is sufficient to cover a realistic worst-case scenario for your business' },
          { type: 'check', text: 'Sub-limits for ransomware payments, social engineering, and regulatory fines are adequate (these are often significantly lower than the main policy limit)' },
          { type: 'check', text: 'The policy has a clear definition of a "cyber event" and you understand what falls inside and outside it' },
          { type: 'check', text: 'The deductible (excess) is a number your business can absorb without material impact' },
          { type: 'check', text: 'Coverage limits have been reviewed against your current revenue and data exposure, not just carried over from the previous year' },
          { type: 'heading', text: 'At the Time of an Incident' },
          { type: 'check', text: 'You know your insurer\'s 24/7 incident notification number' },
          { type: 'check', text: 'Your broker\'s emergency contact is saved somewhere accessible outside your primary systems (which may be offline during an incident)' },
          { type: 'check', text: 'Your IR and legal team know to loop in the insurer before making public statements or paying a ransom' },
          { type: 'check', text: 'You understand the documentation requirements for a claim and have a process for capturing evidence from the start of an incident' },
          { type: 'check', text: 'You know your policy\'s notification timeframe (many policies require notification within 24 to 72 hours of discovering an incident)' },
          { type: 'heading', text: 'The Honest Reality About Cyber Insurance' },
          { type: 'paragraph', text: 'Cyber insurance is valuable and you should have it. It is also frequently misunderstood as a solution to cyber risk rather than a financial instrument for managing residual risk.' },
          { type: 'paragraph', text: 'Policies with weak security controls in place are increasingly being declined at renewal, written with significant exclusions, or subjected to much higher premiums.' },
          { type: 'callout', text: 'A current Essential Eight assessment and a managed detection and response service are the two most effective things you can do to improve your insurability and keep your premiums in check.' },
        ],
      },
    ],
  },

  // 5. Account Security Checklist
  {
    filename: 'account-security-checklist',
    title: 'Account Security Checklist',
    subtitle: 'Most breaches start with a compromised account. This checklist covers the controls that matter most for protecting the accounts your business depends on.',
    backPageTitle: 'Need help locking down your accounts?',
    backPageDesc: 'Stealth Cyber provides managed detection and response and security assessments for Australian professional services firms. Get in touch for a straight conversation about your account security posture.',
    sections: [
      {
        blocks: [
          { type: 'callout', text: 'How to Use This Checklist: Work through each section with your IT provider or security team. Tick items that are confirmed in place and verified, not just assumed. Anything unticked is a gap. Prioritise gaps in Section 1 first.' },
          { type: 'heading', text: '1. Multi-Factor Authentication' },
          { type: 'paragraph', text: 'MFA is the single most effective control for preventing unauthorised account access. Every unticked item in this section is a meaningful gap.' },
          { type: 'check', text: 'MFA is enforced on Microsoft 365 for all users, with no exceptions' },
          { type: 'check', text: 'MFA is enforced on all email access, including mobile devices' },
          { type: 'check', text: 'MFA is enforced on all remote access to business systems (VPN, remote desktop, RMM tools)' },
          { type: 'check', text: 'MFA is enforced on all cloud services (accounting software, practice management, document storage)' },
          { type: 'check', text: 'MFA is enforced on all privileged and admin accounts' },
          { type: 'check', text: 'Legacy authentication protocols are blocked in Microsoft 365 (basic auth, IMAP, POP3)' },
          { type: 'check', text: 'Phishing-resistant MFA (hardware security keys or certificate-based) is used for the highest-risk accounts' },
          { type: 'check', text: 'MFA bypass or exclusion policies have been reviewed and minimised' },
          { type: 'check', text: 'Staff have been briefed on MFA fatigue attacks (repeated push notifications to pressure approval)' },
        ],
      },
      {
        blocks: [
          { type: 'heading', text: '2. Password Security' },
          { type: 'check', text: 'A password manager is in use across the organisation for business accounts' },
          { type: 'check', text: 'Unique passwords are required for every business account (no password reuse)' },
          { type: 'check', text: 'Default passwords have been changed on all systems, devices, and applications' },
          { type: 'check', text: 'There is a process for revoking credentials immediately when a staff member leaves' },
          { type: 'check', text: 'Shared or generic account passwords are changed when any person with knowledge of them leaves' },
          { type: 'check', text: 'Credentials are never stored in spreadsheets, sticky notes, browser saved passwords on shared devices, or unencrypted documents' },
          { type: 'check', text: 'Staff know not to reuse business passwords for personal accounts' },
          { type: 'check', text: 'Your organisation\'s email domain has been checked against known credential breach databases (e.g. Have I Been Pwned)' },
          { type: 'heading', text: '3. Privileged and Admin Accounts' },
          { type: 'check', text: 'Admin accounts are separate from day-to-day user accounts' },
          { type: 'check', text: 'The list of accounts with admin or privileged access has been reviewed in the last 6 months' },
          { type: 'check', text: 'Staff are not operating with admin rights for routine daily tasks' },
          { type: 'check', text: 'Domain admin accounts are used only for tasks that require domain admin access' },
          { type: 'check', text: 'Service accounts have the minimum permissions required and are reviewed regularly' },
          { type: 'check', text: 'Privileged account credentials are stored in a privileged access management (PAM) tool, not a shared spreadsheet' },
          { type: 'check', text: 'There is a Break Glass account for emergency access that is separately secured and its use is logged and alerted' },
        ],
      },
      {
        blocks: [
          { type: 'heading', text: '4. Microsoft 365 Specific' },
          { type: 'check', text: 'Conditional access policies are in place and enforced' },
          { type: 'check', text: 'Sign-in is restricted to managed, compliant devices where possible' },
          { type: 'check', text: 'Sign-ins from unexpected geographic locations trigger alerts or are blocked' },
          { type: 'check', text: 'Microsoft Secure Score has been reviewed and remediation is in progress' },
          { type: 'check', text: 'Unified audit logging is enabled and retained for a minimum of 90 days' },
          { type: 'check', text: 'Mailbox auditing is enabled for all users' },
          { type: 'check', text: 'External email forwarding is disabled or restricted by policy' },
          { type: 'check', text: 'Auto-forwarding rules are monitored for unexpected configurations' },
          { type: 'check', text: 'The Global Administrator role has fewer than 5 accounts assigned and all are cloud-only accounts with MFA' },
          { type: 'check', text: 'Emergency access (Break Glass) accounts exist and are tested at least annually' },
          { type: 'heading', text: '5. Email Security' },
          { type: 'paragraph', text: 'Email is the primary initial access vector for most attacks targeting Australian businesses.' },
          { type: 'check', text: 'SPF, DKIM, and DMARC records are configured correctly for your domain' },
          { type: 'check', text: 'DMARC is set to at minimum quarantine policy (p=quarantine or p=reject)' },
          { type: 'check', text: 'External email is tagged to indicate it did not originate inside your organisation' },
          { type: 'check', text: 'Impersonation protection is configured for key personnel (CEO, finance, principals)' },
          { type: 'check', text: 'Attachment scanning and safe links are enabled' },
          { type: 'check', text: 'Staff are trained to verify payment redirection requests or changes to bank details via a separate communication channel, not by replying to the email' },
        ],
      },
      {
        blocks: [
          { type: 'heading', text: '6. Device and Session Security' },
          { type: 'check', text: 'All devices accessing business data have endpoint protection (EDR) installed and active' },
          { type: 'check', text: 'Devices are encrypted (BitLocker for Windows, FileVault for Mac)' },
          { type: 'check', text: 'Screen lock activates after a short idle period on all devices' },
          { type: 'check', text: 'Lost or stolen devices can be remotely wiped' },
          { type: 'check', text: 'Personal devices accessing business email or data are enrolled in mobile device management' },
          { type: 'check', text: 'Session timeouts are configured for web-based business applications' },
          { type: 'check', text: 'Staff know to sign out of business accounts on shared or personal devices after use' },
          { type: 'check', text: 'Browser extensions are reviewed periodically. Malicious extensions are a common credential theft vector.' },
          { type: 'heading', text: '7. Offboarding and Access Review' },
          { type: 'check', text: 'There is a documented offboarding process that includes immediate account suspension on departure' },
          { type: 'check', text: 'All accounts (Microsoft 365, line-of-business applications, shared accounts) are included in the offboarding checklist' },
          { type: 'check', text: 'Access rights are reviewed across all staff at least annually, not just at onboarding' },
          { type: 'check', text: 'Contractor and third-party access is time-limited and revoked on completion of the engagement' },
          { type: 'check', text: 'Service desk staff are trained to verify identity before making account changes (social engineering via helpdesk is a common attack vector)' },
          { type: 'heading', text: 'Signs an Account May Be Compromised' },
          { type: 'paragraph', text: 'Report any of the following to your IT or security provider immediately:' },
          { type: 'bullet', text: 'Login alerts from unexpected locations or devices' },
          { type: 'bullet', text: 'MFA prompts you did not initiate' },
          { type: 'bullet', text: 'Emails sent from your account that you did not write' },
          { type: 'bullet', text: 'Contacts reporting unusual communications from you' },
          { type: 'bullet', text: 'Password changed without your action' },
          { type: 'bullet', text: 'Files accessed or modified at unusual times' },
          { type: 'bullet', text: 'Unfamiliar inbox rules, forwarding rules, or calendar sharing' },
          { type: 'callout', text: 'When in doubt, report it. The cost of investigating a false alarm is zero compared to the cost of missing a real one.' },
        ],
      },
    ],
  },

  // 6. Incident Response Checklist
  {
    filename: 'incident-response-checklist',
    title: 'Incident Response Checklist: The First 24 Hours',
    subtitle: 'What you do in the first 24 hours of a suspected cyber incident determines how bad the outcome is. This checklist is designed to be used in the moment.',
    backPageTitle: 'Experiencing an incident?',
    backPageDesc: 'Stealth Cyber provides 24/7 managed detection and response and incident response services for Australian professional services firms. If you are experiencing an incident right now, call us.',
    sections: [
      {
        blocks: [
          { type: 'heading', text: 'Before Anything Else' },
          { type: 'paragraph', text: 'The instinct when something goes wrong is to start clicking around to understand what happened. Resist it. Uncoordinated activity in a live incident destroys forensic evidence, can trigger further malicious activity, and makes the investigation significantly harder.' },
          { type: 'subheading', text: 'DO NOT:' },
          { type: 'bullet', text: 'Restart or shut down affected systems without direction' },
          { type: 'bullet', text: 'Delete files, emails, or logs that look suspicious' },
          { type: 'bullet', text: 'Run antivirus scans without guidance' },
          { type: 'bullet', text: 'Log into affected accounts from those same systems' },
          { type: 'bullet', text: 'Discuss the incident over potentially compromised systems' },
          { type: 'bullet', text: 'Post anything publicly or notify clients before legal advice' },
          { type: 'callout', text: 'DO: Stay calm, work the checklist, and get your security provider on the phone.' },
          { type: 'heading', text: 'Hour 0-1: Immediate Actions' },
          { type: 'paragraph', text: 'Contain first, investigate second.' },
          { type: 'check', text: 'Identify and document the systems, accounts, or services that appear to be affected' },
          { type: 'check', text: 'Photograph or screenshot anything unusual before touching it' },
          { type: 'check', text: 'Do not power off affected systems unless ransomware is actively encrypting files. If active encryption is occurring, isolate from the network immediately.' },
          { type: 'check', text: 'Isolate affected systems from the network if directed by your security provider' },
          { type: 'check', text: 'Contact your managed security provider or IR team immediately with: what you noticed, when, what systems are involved, and what actions have been taken' },
          { type: 'check', text: 'Contact your cyber insurance provider. Most policies require notification within 24 to 72 hours.' },
          { type: 'check', text: 'Identify who in leadership needs to know right now. Brief them verbally, not over potentially compromised systems.' },
        ],
      },
      {
        blocks: [
          { type: 'heading', text: 'Hour 1-4: Assessment and Escalation' },
          { type: 'paragraph', text: 'Work with your security provider on these items. Do not attempt forensic investigation independently.' },
          { type: 'check', text: 'Determine the nature of the incident: ransomware, account compromise, data exfiltration, BEC, or unknown' },
          { type: 'check', text: 'Identify the scope: how many systems, accounts, and users are affected' },
          { type: 'check', text: 'Identify the likely entry point: phishing, compromised credentials, unpatched vulnerability, malicious insider' },
          { type: 'check', text: 'Determine whether the attacker may still have active access to your environment' },
          { type: 'check', text: 'Identify what data may have been accessed or exfiltrated' },
          { type: 'check', text: 'Preserve logs: capture and preserve system logs, email logs, and authentication logs before they are overwritten' },
          { type: 'check', text: 'Change credentials for all potentially affected accounts from a clean, unaffected device' },
          { type: 'check', text: 'Revoke active sessions for affected Microsoft 365 accounts' },
          { type: 'check', text: 'Engage legal counsel if client data may have been compromised or if regulatory notification may be required' },
        ],
      },
      {
        blocks: [
          { type: 'heading', text: 'Hour 4-24: Notification Assessment and Stabilisation' },
          { type: 'check', text: 'Assess whether the incident triggers mandatory notification obligations' },
          { type: 'bullet', text: 'Privacy Act: notifiable data breach if serious harm to individuals is likely' },
          { type: 'bullet', text: 'APRA regulated entities: notify APRA within 72 hours of becoming aware of a material cyber incident' },
          { type: 'bullet', text: 'ASX listed entities: continuous disclosure obligations may apply' },
          { type: 'bullet', text: 'Professional body obligations (legal, accounting): check your relevant body\'s requirements' },
          { type: 'check', text: 'Draft a communication plan for clients if their data may be involved. Do not send anything before legal review.' },
          { type: 'check', text: 'Document a timeline of the incident as understood so far (required for insurance, regulatory, and legal purposes)' },
          { type: 'check', text: 'Identify third parties who may need to be notified: payment processors, cloud providers, key clients, PI insurer' },
          { type: 'check', text: 'Begin evidence preservation for any systems that need forensic imaging before remediation' },
          { type: 'check', text: 'Do not begin rebuilding or restoring systems until the investigation scope is defined' },
          { type: 'check', text: 'Establish an out-of-band communication channel (personal mobiles, personal email) for your response team' },
          { type: 'heading', text: 'Key Contacts: Fill This In Now' },
          { type: 'paragraph', text: 'Security Provider / IR Team: _______________' },
          { type: 'paragraph', text: 'Cyber Insurance Claims Line: _______________' },
          { type: 'paragraph', text: 'Legal Counsel: _______________' },
          { type: 'paragraph', text: 'CEO / Managing Principal: _______________' },
          { type: 'paragraph', text: 'IT Provider: _______________' },
          { type: 'paragraph', text: 'PR / Communications: _______________' },
        ],
      },
      {
        blocks: [
          { type: 'heading', text: 'After the First 24 Hours' },
          { type: 'paragraph', text: 'The immediate response phase is about containment and preservation. Once achieved, the work shifts to:' },
          { type: 'bullet', text: 'Full forensic investigation to determine the complete scope' },
          { type: 'bullet', text: 'Eradication of attacker presence from the environment' },
          { type: 'bullet', text: 'Remediation of the vulnerability or control failure that enabled the incident' },
          { type: 'bullet', text: 'Regulated notifications where required' },
          { type: 'bullet', text: 'Rebuilding affected systems from known-clean baselines' },
          { type: 'bullet', text: 'Post-incident review and control uplift' },
          { type: 'bullet', text: 'Client and stakeholder communications' },
          { type: 'callout', text: 'This is a weeks-long process, not a 24-hour one. The first 24 hours determines whether it is manageable or catastrophic.' },
          { type: 'heading', text: 'Signs You May Have an Active Incident Right Now' },
          { type: 'bullet', text: 'Unexpected account lockouts across multiple users' },
          { type: 'bullet', text: 'MFA prompts nobody initiated' },
          { type: 'bullet', text: 'Files being renamed with unfamiliar extensions' },
          { type: 'bullet', text: 'Systems becoming slow or unresponsive without explanation' },
          { type: 'bullet', text: 'Unusual outbound network traffic or connections to unfamiliar addresses' },
          { type: 'bullet', text: 'Emails sent from staff accounts that staff did not write' },
          { type: 'bullet', text: 'Contacts reporting suspicious communications from your business' },
          { type: 'bullet', text: 'Ransom note appearing on a screen' },
          { type: 'bullet', text: 'Sudden inability to access files, systems, or backups' },
          { type: 'callout', text: 'If any of these are occurring, call your security provider immediately. Do not wait to be certain.' },
        ],
      },
    ],
  },

  // 7. Microsoft 365 Security Hardening Checklist
  {
    filename: 'm365-security-checklist',
    title: 'Microsoft 365 Security Hardening Checklist',
    subtitle: 'Default Microsoft 365 settings are not secure settings. This checklist covers the configurations that matter most for Australian SMBs.',
    backPageTitle: 'Need help hardening your M365 tenant?',
    backPageDesc: 'Stealth Cyber specialises in Microsoft 365 security hardening, Secure Score remediation, and managed detection and response for Australian professional services firms. Get in touch for a verified assessment of your M365 security posture.',
    sections: [
      {
        blocks: [
          { type: 'heading', text: '1. Identity and Authentication' },
          { type: 'paragraph', text: 'Highest priority. An identity misconfiguration underpins the majority of M365 compromises we investigate.' },
          { type: 'check', text: 'Security Defaults or Conditional Access policies are enabled. Conditional Access is strongly preferred for business environments.' },
          { type: 'check', text: 'Legacy authentication protocols are blocked (basic auth, IMAP, POP3, SMTP AUTH) for all users without a documented technical requirement.' },
          { type: 'check', text: 'MFA is enforced for all users via Conditional Access, not just enabled via per-user MFA settings.' },
          { type: 'check', text: 'MFA is enforced for all Global Administrators and privileged roles.' },
          { type: 'check', text: 'Phishing-resistant MFA (FIDO2 or certificate-based) is deployed for the highest-privilege accounts.' },
          { type: 'check', text: 'Sign-in is restricted to compliant, managed devices via Conditional Access where possible.' },
          { type: 'check', text: 'Sign-ins from high-risk locations or anonymous IP addresses are blocked or require additional verification.' },
          { type: 'check', text: 'Sign-in risk policies are configured in Entra ID Identity Protection (P2 licence required).' },
          { type: 'check', text: 'Self-service password reset is enabled and configured with appropriate verification methods.' },
          { type: 'check', text: 'Password hash synchronisation is enabled if using hybrid identity.' },
          { type: 'check', text: 'Emergency access (Break Glass) accounts exist, are excluded from Conditional Access, are monitored, and credentials are stored securely offline.' },
        ],
      },
      {
        blocks: [
          { type: 'heading', text: '2. Admin Role Management' },
          { type: 'check', text: 'The number of Global Administrator accounts is five or fewer.' },
          { type: 'check', text: 'Global Administrator accounts are cloud-only, not synchronised from on-premises Active Directory.' },
          { type: 'check', text: 'Global Administrator accounts are not used for day-to-day tasks.' },
          { type: 'check', text: 'Role assignments follow least privilege: users hold only the roles they need.' },
          { type: 'check', text: 'Privileged Identity Management (PIM) is configured for just-in-time admin access where licencing permits.' },
          { type: 'check', text: 'Admin roles are reviewed and validated at least every 90 days.' },
          { type: 'check', text: 'Admin accounts do not have active mailboxes used for routine email.' },
          { type: 'heading', text: '3. Exchange Online and Email Security' },
          { type: 'check', text: 'SPF record is published and correctly configured for your domain.' },
          { type: 'check', text: 'DKIM signing is enabled for all sending domains.' },
          { type: 'check', text: 'DMARC is configured with at minimum a quarantine policy (p=quarantine). Reject (p=reject) is the target.' },
          { type: 'check', text: 'DMARC reports are being monitored.' },
          { type: 'check', text: 'External email tagging is enabled so staff can identify emails originating outside the organisation.' },
          { type: 'check', text: 'Anti-phishing policies are configured with impersonation protection for key personnel.' },
          { type: 'check', text: 'Safe Links is enabled and configured to scan URLs in email and Office documents.' },
          { type: 'check', text: 'Safe Attachments is enabled and configured to detonate suspicious attachments before delivery.' },
        ],
      },
      {
        blocks: [
          { type: 'heading', text: '3. Exchange Online and Email Security (continued)' },
          { type: 'check', text: 'Automatic external email forwarding is disabled at the tenant level.' },
          { type: 'check', text: 'Transport rules are reviewed for unexpected or unauthorised configurations.' },
          { type: 'check', text: 'Mailbox auditing is enabled for all users (on by default for E3/E5 but should be verified).' },
          { type: 'check', text: 'Unified audit log is enabled and retention period is configured appropriately.' },
          { type: 'check', text: 'Mail flow rules are reviewed and documented.' },
          { type: 'heading', text: '4. SharePoint, OneDrive, and Teams' },
          { type: 'check', text: 'External sharing in SharePoint is restricted to the minimum required. Anonymous sharing links are disabled or time-limited.' },
          { type: 'check', text: 'SharePoint site permissions are reviewed periodically. Overly permissive sites are a significant Copilot risk.' },
          { type: 'check', text: 'OneDrive external sharing is configured consistently with SharePoint policy.' },
          { type: 'check', text: 'Guest access in Teams is enabled only if required and is governed by a documented policy.' },
          { type: 'check', text: 'External access (federation) in Teams is restricted to known, trusted domains where possible.' },
          { type: 'check', text: 'Sensitivity labels are applied to SharePoint sites and Teams containing confidential content.' },
          { type: 'check', text: 'Data Loss Prevention (DLP) policies are configured to detect and control sensitive data sharing.' },
        ],
      },
      {
        blocks: [
          { type: 'heading', text: '5. Microsoft Defender for Office 365' },
          { type: 'check', text: 'Defender for Office 365 Plan 1 or Plan 2 is licenced and configured (included in Business Premium).' },
          { type: 'check', text: 'Anti-malware policies are configured with appropriate alert and quarantine settings.' },
          { type: 'check', text: 'Zero-hour auto purge (ZAP) is enabled to retroactively remove malicious messages post-delivery.' },
          { type: 'check', text: 'Attack simulation training is configured and running regular phishing simulations.' },
          { type: 'check', text: 'Threat Explorer or Real-time detections are being used to investigate suspicious activity.' },
          { type: 'check', text: 'Preset security policies (Standard or Strict) have been applied as a baseline.' },
          { type: 'heading', text: '6. Endpoint Security (Defender for Endpoint / Intune)' },
          { type: 'check', text: 'Microsoft Defender for Endpoint is deployed and active on all Windows endpoints.' },
          { type: 'check', text: 'Defender for Endpoint is integrated with the Microsoft 365 Defender portal.' },
          { type: 'check', text: 'Endpoint Detection and Response (EDR) is in Block mode, not just Audit mode.' },
          { type: 'check', text: 'Attack Surface Reduction (ASR) rules are configured and enforced.' },
          { type: 'check', text: 'Intune is managing all corporate devices with compliance policies enforced.' },
          { type: 'check', text: 'Device compliance policies require encryption, screen lock, and minimum OS version.' },
          { type: 'check', text: 'Non-compliant devices are blocked from accessing corporate resources via Conditional Access.' },
          { type: 'check', text: 'Mobile devices accessing corporate email are enrolled in Intune.' },
          { type: 'check', text: 'Windows Autopatch or a comparable patch management process is active and verified.' },
        ],
      },
      {
        blocks: [
          { type: 'heading', text: '7. Microsoft Secure Score' },
          { type: 'check', text: 'Microsoft Secure Score has been reviewed in the last 30 days.' },
          { type: 'check', text: 'A remediation plan exists for the highest-impact recommendations.' },
          { type: 'check', text: 'Secure Score is tracked over time and reviewed as part of regular security governance.' },
          { type: 'check', text: 'Recommendations have been assessed against your environment before being actioned.' },
          { type: 'heading', text: '8. Monitoring and Alerting' },
          { type: 'check', text: 'Microsoft Sentinel or an equivalent SIEM is ingesting M365 audit logs.' },
          { type: 'check', text: 'Alerts are configured for high-risk events: impossible travel logins, mass file deletion, privilege escalation, new inbox rules, legacy auth attempts.' },
          { type: 'check', text: 'Alerts are being reviewed by a human, not just landing in a queue.' },
          { type: 'check', text: 'Sign-in logs are being reviewed for anomalous activity.' },
          { type: 'check', text: 'A process exists for responding to Identity Protection risk events.' },
          { type: 'heading', text: '9. Data Protection and Compliance' },
          { type: 'check', text: 'Microsoft Purview Information Protection is configured with sensitivity labels appropriate to your data classifications.' },
          { type: 'check', text: 'Labels are applied to documents and emails containing confidential or restricted content.' },
          { type: 'check', text: 'Retention policies are configured to meet your legal and regulatory obligations.' },
          { type: 'check', text: 'eDiscovery and audit capabilities are understood and tested if required for your sector.' },
          { type: 'check', text: 'Personal data subject to the Privacy Act is identified and controls are appropriate.' },
          { type: 'heading', text: 'Interpreting Your Results' },
          { type: 'bullet', text: 'Fewer than 15 ticked: Significant security gaps. Prioritise Section 1 and Section 3 immediately.' },
          { type: 'bullet', text: '15 to 35 ticked: Partial baseline. Focus on completing Sections 1 through 4.' },
          { type: 'bullet', text: '36 to 50 ticked: Solid baseline. Work through remaining items in a structured plan.' },
          { type: 'bullet', text: '50 or more ticked: Strong configuration. Maintain through regular review and Secure Score monitoring.' },
        ],
      },
    ],
  },

  // 8. BEC Prevention Guide
  {
    filename: 'bec-prevention-guide',
    title: 'Business Email Compromise Prevention Guide',
    subtitle: 'The highest-return, lowest-effort attack targeting Australian professional services firms. How it works, how to recognise it, and the controls that actually stop it.',
    backPageTitle: 'Concerned about BEC exposure?',
    backPageDesc: 'Stealth Cyber helps Australian professional services firms implement the technical and process controls that prevent BEC attacks. Get in touch for an independent assessment of your current exposure.',
    sections: [
      {
        blocks: [
          { type: 'heading', text: 'What Business Email Compromise Is' },
          { type: 'paragraph', text: 'Business email compromise (BEC) is a financially motivated attack where a criminal uses a legitimate or convincingly spoofed email account to deceive someone into transferring funds, changing payment details, or disclosing sensitive information.' },
          { type: 'paragraph', text: 'It does not require sophisticated malware. It does not need to bypass endpoint protection. It exploits trust, process gaps, and time pressure. A single successful BEC attack against a professional services firm can result in losses of tens to hundreds of thousands of dollars in a single transaction.' },
          { type: 'paragraph', text: 'The ACCC consistently reports BEC as one of the highest-loss scam categories for Australian businesses. The actual figure is higher than reported, because many losses go unreported due to professional embarrassment.' },
          { type: 'heading', text: 'How BEC Attacks Actually Work' },
          { type: 'subheading', text: 'Type 1: Spoofed Domain' },
          { type: 'paragraph', text: 'The attacker sends email from a domain that closely resembles a legitimate one. yourfirm.com.au becomes yourfirm.co or y0urfirm.com.au. Visually similar at a glance, particularly on mobile where the full address is often truncated.' },
          { type: 'subheading', text: 'Type 2: Compromised Supplier/Client Account' },
          { type: 'paragraph', text: 'The attacker compromises a supplier or client email account and sends fraudulent payment instructions from a completely legitimate address. The email thread may reference real prior conversations. The only tell is the payment details.' },
          { type: 'subheading', text: 'Type 3: Compromised Internal Account' },
          { type: 'paragraph', text: 'An internal staff member\'s account is compromised. The attacker monitors the mailbox, identifies upcoming transactions, and inserts fraudulent instructions at the right moment. They may create inbox rules to hide replies from the legitimate user.' },
          { type: 'subheading', text: 'Type 4: Executive Impersonation' },
          { type: 'paragraph', text: 'The attacker impersonates a senior person, typically targeting finance staff with urgent payment requests. Often sent on a Friday afternoon or before a holiday. The urgency and authority combination overrides normal verification instincts.' },
        ],
      },
      {
        blocks: [
          { type: 'heading', text: 'The Red Flags' },
          { type: 'paragraph', text: 'Train every staff member who handles payments, invoices, or financial data to recognise these:' },
          { type: 'bullet', text: 'Payment instructions that arrive by email only, with no prior verbal discussion' },
          { type: 'bullet', text: 'Requests to change bank account details, even from known contacts' },
          { type: 'bullet', text: 'Urgent payment requests outside normal business hours or process' },
          { type: 'bullet', text: 'Email addresses that are slightly different from what you expect on close inspection' },
          { type: 'bullet', text: 'Requests to keep the transaction confidential or not discuss with others' },
          { type: 'bullet', text: 'Unusual email formatting, signature changes, or slight differences in writing style' },
          { type: 'bullet', text: 'A familiar contact asking for something they have never asked for before' },
          { type: 'bullet', text: 'Payment requests that arrive just before a deadline, settlement, or close of business' },
          { type: 'callout', text: 'A combination of these, particularly urgency plus a request to bypass normal process, should trigger a verification call to a known number before any action is taken.' },
          { type: 'heading', text: 'Technical Controls' },
          { type: 'paragraph', text: 'Implement these with your IT provider:' },
          { type: 'check', text: 'DMARC, DKIM, and SPF records are correctly configured and DMARC is set to quarantine or reject.' },
          { type: 'check', text: 'External email tagging is enabled in Microsoft 365.' },
          { type: 'check', text: 'Anti-impersonation policies are configured in Defender for Office 365 for all senior staff and finance personnel.' },
          { type: 'check', text: 'MFA is enforced on all email accounts.' },
          { type: 'check', text: 'Mailbox auditing and unified audit logging are enabled.' },
          { type: 'check', text: 'Inbox rules are monitored for unexpected configurations.' },
          { type: 'check', text: 'Automatic external forwarding is disabled at the tenant level.' },
        ],
      },
      {
        blocks: [
          { type: 'heading', text: 'Process Controls' },
          { type: 'paragraph', text: 'Implement these in your operations:' },
          { type: 'check', text: 'A written policy exists that no payment details are changed based solely on an email instruction, regardless of who it appears to come from.' },
          { type: 'check', text: 'Any request to change bank account details requires verbal verification to a known phone number already on file.' },
          { type: 'check', text: 'Payment run authorisation requires two people to approve transactions above a defined threshold.' },
          { type: 'check', text: 'New payees above a defined threshold require verification via a second channel before the first payment is processed.' },
          { type: 'check', text: 'Finance and admin staff are briefed specifically on BEC tactics, not just general phishing awareness.' },
          { type: 'check', text: 'There is a clear escalation path for staff who receive a suspicious payment request. They should feel empowered to pause and verify.' },
          { type: 'heading', text: 'If You Receive a Suspicious Email Right Now' },
          { type: 'bullet', text: '1. Do not click any links or open any attachments in the email.' },
          { type: 'bullet', text: '2. Do not reply to the email.' },
          { type: 'bullet', text: '3. Do not call any phone number provided in the email.' },
          { type: 'bullet', text: '4. Contact the apparent sender using a phone number you already have on file.' },
          { type: 'bullet', text: '5. If the email requests a payment or account change, pause any related transaction until verification is complete.' },
          { type: 'bullet', text: '6. Forward the email to your IT or security provider for analysis.' },
          { type: 'bullet', text: '7. If you have already made a payment and suspect fraud, contact your bank immediately. Then contact your security provider and legal counsel.' },
        ],
      },
      {
        blocks: [
          { type: 'heading', text: 'If a BEC Attack Has Succeeded' },
          { type: 'paragraph', text: 'Speed is everything. The window for recovering transferred funds closes quickly.' },
          { type: 'bullet', text: 'Contact your bank immediately and use the word "fraud." Request an urgent recall.' },
          { type: 'bullet', text: 'Contact the recipient bank if known through your bank\'s fraud team.' },
          { type: 'bullet', text: 'Contact your cyber insurance provider and notify them.' },
          { type: 'bullet', text: 'Contact your legal counsel.' },
          { type: 'bullet', text: 'Engage your security provider to investigate the scope of any underlying account compromise.' },
          { type: 'bullet', text: 'Document everything: the email, the transaction, the timeline, and every action taken.' },
          { type: 'bullet', text: 'Do not notify the fraudulent recipient that you are aware. This can cause them to move funds faster.' },
          { type: 'bullet', text: 'Report to the ACSC via ReportCyber and to ACORN.' },
          { type: 'heading', text: 'The Uncomfortable Reality' },
          { type: 'paragraph', text: 'Most BEC losses are not recovered. Fund recovery is possible in some cases if the bank is contacted quickly, but it is not guaranteed and becomes less likely with every hour that passes.' },
          { type: 'paragraph', text: 'The controls above are not complicated or expensive. The verification process costs a two-minute phone call. The technical controls are configurations, not new platforms. The businesses that suffer significant BEC losses almost always had the information they needed to prevent it.' },
          { type: 'callout', text: 'The difference is whether anyone acted on it before the event rather than after.' },
        ],
      },
    ],
  },

  // 9. EOFY Cyber Threat Guide
  {
    filename: 'eofy-cyber-threat-guide',
    title: 'End of Financial Year Cyber Threat Guide',
    subtitle: 'EOFY is the highest-risk period of the year for Australian professional services firms and their clients. This guide covers what attackers do differently during this period and what to do about it.',
    backPageTitle: 'Need a pre-EOFY security review?',
    backPageDesc: 'Stealth Cyber provides managed cybersecurity for Australian professional services firms. For a pre-EOFY security review or to discuss your firm\'s risk posture, get in touch.',
    sections: [
      {
        blocks: [
          { type: 'heading', text: 'Why EOFY Is Different' },
          { type: 'paragraph', text: 'The end of financial year creates a specific set of conditions that attackers actively exploit. Staff are under genuine time pressure. The volume of legitimate urgent requests is at its peak. Finance teams are processing a higher-than-normal volume of transactions. Decisions that would normally receive careful scrutiny get made faster because deadlines are real.' },
          { type: 'paragraph', text: 'Attackers understand this. EOFY phishing campaigns, business email compromise attempts, and credential harvesting operations targeting Australian accounting, legal, and financial advisory firms spike consistently in the lead-up to 30 June. These are not opportunistic attacks. They are planned campaigns timed to exploit a known window of reduced vigilance.' },
          { type: 'heading', text: 'The Threat Landscape at EOFY' },
          { type: 'subheading', text: 'ATO-Themed Phishing' },
          { type: 'paragraph', text: 'The ATO is one of the most impersonated brands in Australian phishing campaigns. During EOFY, phishing emails impersonating the ATO spike significantly. They claim returns have been lodged, refunds are pending, debts require urgent payment, or TFNs have been flagged. The emails are increasingly convincing with correct branding and plausible subject lines.' },
          { type: 'subheading', text: 'Accounting Software Credential Harvesting' },
          { type: 'paragraph', text: 'Xero, MYOB, and QuickBooks credentials are directly valuable. An attacker with access to a firm\'s practice management software has access to client financial data, bank account details, and payroll records. EOFY sees a surge in fake login pages, urgent account notifications, and credential stuffing attacks.' },
          { type: 'subheading', text: 'Payment Redirection and BEC' },
          { type: 'paragraph', text: 'The volume of large transactions peaks at EOFY. Settlement payments, tax payments, superfund contributions, trust account disbursements. A fraudulent payment redirection request inserted into a busy EOFY transaction stream has a higher chance of success because the volume and urgency make careful verification less likely.' },
          { type: 'subheading', text: 'Ransomware Targeting Deadline Pressure' },
          { type: 'paragraph', text: 'A firm that cannot access client files three days before tax lodgement deadlines is under maximum pressure to pay a ransom quickly. Ransomware groups are aware of these deadlines and time deployments accordingly.' },
        ],
      },
      {
        blocks: [
          { type: 'heading', text: 'EOFY Controls: For Your Firm' },
          { type: 'check', text: 'Brief all staff on EOFY-specific phishing themes before the peak period. ATO impersonation, accounting software credential requests, and urgent payment requests should be specifically named.' },
          { type: 'check', text: 'Confirm that your payment verification process is in place and being followed. No payment detail changes based solely on an email instruction.' },
          { type: 'check', text: 'Review who has access to your accounting and practice management platforms. Remove or suspend accounts for staff who no longer need access.' },
          { type: 'check', text: 'Confirm MFA is enforced on your accounting software, not just your email.' },
          { type: 'check', text: 'Review your backup status. Verify that recent backups are completing successfully and that at least one copy is stored offline or immutably.' },
          { type: 'check', text: 'Confirm your incident response contact details are current and accessible to key staff.' },
          { type: 'check', text: 'Remind staff that urgency is a manipulation tactic. A genuine ATO or software vendor communication will not collapse if it takes 10 minutes to verify.' },
          { type: 'heading', text: 'EOFY Controls: For Your Clients' },
          { type: 'check', text: 'Brief clients who handle their own finances on ATO impersonation scams and how the ATO actually communicates.' },
          { type: 'check', text: 'Remind clients that bank account details should never be changed based solely on an email instruction, even if it appears to come from your firm.' },
          { type: 'check', text: 'Advise clients to verify any unusual communication purportedly from your firm by calling your office on a number they already have.' },
          { type: 'check', text: 'If your firm sends large invoices or payment requests at EOFY, consider establishing a verbal confirmation protocol with high-value clients.' },
        ],
      },
      {
        blocks: [
          { type: 'heading', text: 'Recognising an ATO Impersonation Email' },
          { type: 'paragraph', text: 'Legitimate ATO communications will not:' },
          { type: 'bullet', text: 'Ask you to confirm bank account details via email or a link' },
          { type: 'bullet', text: 'Demand immediate payment via gift card, cryptocurrency, or wire transfer' },
          { type: 'bullet', text: 'Threaten arrest, legal action, or account suspension in an email' },
          { type: 'bullet', text: 'Ask for your myGov credentials via a link in an email' },
          { type: 'bullet', text: 'Send an attachment requiring you to enable macros to view it' },
          { type: 'callout', text: 'If an email claims to be urgent and from the ATO, log in to myGov directly through the browser. If the communication does not exist there, the email is fraudulent.' },
          { type: 'heading', text: 'If a Staff Member or Client Has Already Clicked' },
          { type: 'paragraph', text: 'Acting quickly limits the damage.' },
          { type: 'bullet', text: '1. Do not panic. Gather the facts before escalating.' },
          { type: 'bullet', text: '2. Determine what was clicked and what information was entered. A link clicked with no credentials entered is a different risk profile to credentials being submitted.' },
          { type: 'bullet', text: '3. If credentials were entered, treat those accounts as compromised immediately. Change passwords and revoke active sessions from a different, clean device.' },
          { type: 'bullet', text: '4. Contact your security provider with the details. Preserve the email and any screenshots.' },
          { type: 'bullet', text: '5. If client data may have been exposed, contact legal counsel to assess notification obligations.' },
          { type: 'bullet', text: '6. Do not send a mass internal email about the incident using systems that may be affected.' },
        ],
      },
      {
        blocks: [
          { type: 'heading', text: 'Tax Time Scam Reporting' },
          { type: 'paragraph', text: 'If you or your clients receive ATO impersonation emails, report them:' },
          { type: 'bullet', text: 'ATO: forward to reportemailfraud@ato.gov.au' },
          { type: 'bullet', text: 'ACCC Scamwatch: scamwatch.gov.au' },
          { type: 'bullet', text: 'ACSC ReportCyber: cyber.gov.au/report' },
          { type: 'heading', text: 'The Broader Point' },
          { type: 'paragraph', text: 'EOFY is a predictable risk period. The threats are not new and the defences are not complicated. The firms that come through this period without incident are the ones that brief their people, verify their controls, and treat the elevated risk as an operational reality to manage rather than a background concern to note and move on from.' },
          { type: 'callout', text: 'A 15-minute briefing to your team before the peak period is one of the highest-return security investments you can make. Do it every year.' },
        ],
      },
    ],
  },

  // 10. Employee Onboarding Checklist
  {
    filename: 'employee-onboarding-checklist',
    title: 'New Employee Cyber Security Onboarding Checklist',
    subtitle: 'Every new employee is a potential entry point until they are properly briefed and set up correctly. This checklist is for IT providers, practice managers, and the employee themselves.',
    backPageTitle: 'Need help with your onboarding process?',
    backPageDesc: 'Stealth Cyber provides managed cybersecurity for Australian professional services firms, including security awareness training through Huntress SAT and managed endpoint protection.',
    sections: [
      {
        blocks: [
          { type: 'callout', text: 'How to Use This Checklist: Complete Section A (IT Setup) before the employee\'s first day where possible. Complete Section B (Access and Permissions) on day one. Complete Section C (Security Briefing) within the first week. Have the employee sign off Section D once the briefing is done.' },
          { type: 'heading', text: 'A. IT Setup (Complete Before Day One)' },
          { type: 'subheading', text: 'Account Provisioning' },
          { type: 'check', text: 'Microsoft 365 account created with a role-appropriate licence' },
          { type: 'check', text: 'Account added to relevant Microsoft 365 groups and distribution lists only' },
          { type: 'check', text: 'Access granted to SharePoint sites and Teams channels appropriate to the role only. Default is no access unless the role requires it.' },
          { type: 'check', text: 'Email signature configured' },
          { type: 'check', text: 'Shared mailboxes added only where the role requires them' },
          { type: 'check', text: 'No admin rights assigned unless the role specifically requires them and this has been approved' },
          { type: 'subheading', text: 'Authentication' },
          { type: 'check', text: 'MFA is enforced on the account before first login' },
          { type: 'check', text: 'MFA method configured: Microsoft Authenticator app minimum, hardware key for privileged roles' },
          { type: 'check', text: 'A temporary password has been set and must be changed on first login' },
          { type: 'check', text: 'The account is in the correct Conditional Access policy scope' },
        ],
      },
      {
        blocks: [
          { type: 'subheading', text: 'Device Setup' },
          { type: 'check', text: 'Corporate device is enrolled in Intune before being handed to the employee' },
          { type: 'check', text: 'Endpoint protection (Defender for Endpoint or equivalent) is deployed and active' },
          { type: 'check', text: 'BitLocker or FileVault encryption is enabled and verified' },
          { type: 'check', text: 'Device compliance policy is met before the device can access corporate resources' },
          { type: 'check', text: 'Standard software load is applied. No admin rights on the device by default.' },
          { type: 'check', text: 'Screen lock configured to activate after 5 minutes of inactivity' },
          { type: 'check', text: 'A password manager account is provisioned for the employee' },
          { type: 'subheading', text: 'Access to Business Systems' },
          { type: 'check', text: 'Accounting software access provisioned at the appropriate permission level' },
          { type: 'check', text: 'Practice management software access provisioned' },
          { type: 'check', text: 'Any additional line-of-business applications provisioned with least-privilege access' },
          { type: 'check', text: 'Access to financial data restricted to what the role requires' },
          { type: 'heading', text: 'B. Day One Access Verification' },
          { type: 'check', text: 'Employee has logged in successfully and changed their temporary password' },
          { type: 'check', text: 'MFA is working correctly on the device and on the employee\'s personal phone' },
          { type: 'check', text: 'Employee can access all systems required for their role' },
          { type: 'check', text: 'Employee cannot access systems or data outside their role scope (spot check this)' },
          { type: 'check', text: 'Password manager is set up and the employee has completed onboarding to it' },
          { type: 'check', text: 'Corporate email is confirmed working on corporate device only, or on personal device enrolled in Intune if BYOD is permitted' },
          { type: 'check', text: 'Employee has confirmed they understand that personal devices need to be enrolled before accessing corporate email or data' },
        ],
      },
      {
        blocks: [
          { type: 'heading', text: 'C. Security Briefing (Complete Within First Week)' },
          { type: 'paragraph', text: 'Cover each topic verbally and confirm the employee understands it. This is a conversation, not a form.' },
          { type: 'subheading', text: 'Phishing and Social Engineering' },
          { type: 'check', text: 'Employee understands what a phishing email looks like and the specific variants relevant to your industry' },
          { type: 'check', text: 'Employee knows to report suspicious emails to IT or the security provider rather than just deleting them' },
          { type: 'check', text: 'Employee understands that urgency in an email is a manipulation tactic, not a reason to skip verification' },
          { type: 'check', text: 'Employee knows never to enter credentials on a page they reached by clicking a link in an email' },
          { type: 'check', text: 'Employee understands what MFA fatigue is and knows to deny unexpected MFA prompts and report them' },
          { type: 'subheading', text: 'Password and Account Security' },
          { type: 'check', text: 'Employee understands the requirement for unique passwords for every account' },
          { type: 'check', text: 'Employee understands that credentials must not be shared, written down, or stored in unencrypted documents' },
          { type: 'check', text: 'Employee knows how to use the password manager and has created their master password securely' },
          { type: 'check', text: 'Employee understands that their business credentials must not be used for personal accounts' },
          { type: 'subheading', text: 'Data Handling' },
          { type: 'check', text: 'Employee understands the firm\'s data classification scheme and which categories apply to client data' },
          { type: 'check', text: 'Employee knows which data cannot be shared externally without authorisation' },
          { type: 'check', text: 'Employee understands the firm\'s policy on AI tools: which are approved, which are not, and what data cannot be processed through public AI platforms' },
          { type: 'check', text: 'Employee understands their obligations under the Privacy Act in the context of their role' },
          { type: 'check', text: 'Employee knows not to store client data on personal devices or personal cloud accounts' },
        ],
      },
      {
        blocks: [
          { type: 'subheading', text: 'Payment and Financial Processes' },
          { type: 'check', text: 'Employee understands the firm\'s payment verification process' },
          { type: 'check', text: 'Employee knows that bank account details are never changed based solely on an email instruction' },
          { type: 'check', text: 'Employee knows the escalation process for any unusual financial request' },
          { type: 'subheading', text: 'Device and Physical Security' },
          { type: 'check', text: 'Employee knows not to leave devices unattended and unlocked' },
          { type: 'check', text: 'Employee knows not to connect corporate devices to public Wi-Fi without using a VPN' },
          { type: 'check', text: 'Employee knows not to use personal USB drives or external storage on corporate devices' },
          { type: 'check', text: 'Employee knows the procedure for reporting a lost or stolen device immediately' },
          { type: 'subheading', text: 'Incident Reporting' },
          { type: 'check', text: 'Employee knows what to report: suspicious emails, unexpected MFA prompts, unusual system behaviour, accidental data exposure, lost or stolen devices' },
          { type: 'check', text: 'Employee knows who to report to and how: IT provider contact details, security provider contact details, and the internal escalation path' },
          { type: 'check', text: 'Employee understands that reporting quickly is always the right call, even if uncertain' },
          { type: 'heading', text: 'D. Employee Acknowledgement' },
          { type: 'paragraph', text: 'To be signed by the employee after completing Sections A, B, and C.' },
          { type: 'check', text: 'Received and reviewed the firm\'s cybersecurity policies' },
          { type: 'check', text: 'Had the security briefing in Section C explained to me' },
          { type: 'check', text: 'Set up my accounts, devices, and password manager as required' },
          { type: 'check', text: 'Asked questions about anything I did not understand' },
          { type: 'paragraph', text: 'I understand that I am responsible for following the firm\'s security policies and that I should report anything suspicious to IT or the security provider without delay.' },
        ],
      },
      {
        blocks: [
          { type: 'heading', text: 'Ongoing Requirements After Onboarding' },
          { type: 'bullet', text: 'Security awareness training is required annually at minimum and will be assigned through the firm\'s training platform' },
          { type: 'bullet', text: 'Phishing simulations are run periodically. Clicking on a simulation is a training moment, not a disciplinary one, but results are monitored.' },
          { type: 'bullet', text: 'Security policies are reviewed and updated and employees are expected to stay current with them' },
          { type: 'bullet', text: 'Any change in role that involves increased access to financial data or privileged systems requires a review by IT' },
        ],
      },
    ],
  },
]

// Generate all PDFs
for (const config of pdfs) {
  await createPDF(config)
}

console.log('All PDFs generated.')
