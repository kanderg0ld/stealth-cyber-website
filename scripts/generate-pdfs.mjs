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
  const outPath = path.join('public', 'downloads', `${config.filename}.pdf`)
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
]

// Generate all PDFs
for (const config of pdfs) {
  await createPDF(config)
}

console.log('All PDFs generated.')
