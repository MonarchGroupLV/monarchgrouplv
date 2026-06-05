# BLUEPRINT.md — MonarchGroupLV.com
**Project:** Monarch Group LV — Official Website
**Version:** 1.0
**Last Updated:** June 2026
**Status:** In Development

---

## CRITICAL DIRECTIVES
- DO NOT offer to schedule agents
- DO NOT prompt for input
- Read this file completely before writing a single line of code
- Report before fixing anything unexpected
- Touch-it-fix-it standard applies — if you touch a file, it must be better when you leave it
- This is a luxury brand. Pixel perfect execution. No generic AI aesthetics. Every detail matters.

---

## PROJECT OVERVIEW

Monarch Group LV is a Las Vegas-based private asset placement and luxury estate liquidation firm. The website serves three primary functions:

1. Generate leads via a private inquiry contact form
2. Establish credibility with probate attorneys, estate attorneys, trustees, real estate agents, executors, and high net worth individuals
3. Showcase services and portfolio across all Monarch Group ventures

**Founder:** Quinton "Kevin" Westbrook
**Entity:** Monarch Group LV LLC
**Domain:** monarchgrouplv.com
**Office:** 6130 W Flamingo Rd, Suite 409, Las Vegas, NV 89103
**Phone:** 702.816.6835
**Email:** TBD — placeholder until confirmed, use `concierge@monarchgrouplv.com` as temp

---

## TECH STACK

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Components | Shadcn/ui |
| Fonts | Google Fonts via next/font |
| Email | Resend (contact form API route) |
| Deployment | Vercel |
| Images | next/image with optimization |
| Animation | Intersection Observer (no heavy libraries) |
| SEO | Next.js Metadata API |

---

## ENVIRONMENT VARIABLES

```env
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=concierge@monarchgrouplv.com
NEXT_PUBLIC_SITE_URL=https://monarchgrouplv.com
```

Document all env vars in README.md. Never hardcode keys.

---

## DESIGN SYSTEM

### Color Tokens
```css
--gold: #B8942A
--gold-light: #D4AC4A
--gold-bright: #E2C97E
--gold-dim: #7A6018
--gold-faint: rgba(184,148,42,0.15)
--obsidian: #080808
--obs2: #0F0F0F
--obs3: #141414
--obs4: #1C1C1C
--obs5: #242424
--cream: #EDE5D0
--cream-dim: #A89870
```

### Typography
| Role | Font | Weight | Notes |
|---|---|---|---|
| Display / Headings | Cinzel | 400, 500, 600 | All caps treatments, letter-spacing 0.15em+ |
| Serif / Body | Cormorant Garamond | 300, 400, italic | Large sizes for elegance |
| Sans / UI | Montserrat | 300, 400, 500, 600 | Small caps labels, nav, buttons |

### Spacing & Layout
- Max content width: 1200px
- Section padding: 7rem 4rem desktop, 5rem 1.5rem mobile
- Grid gap: 1px between cards (creates hairline gold dividers via background color)
- All section transitions: fade up 28px, 0.85s ease via Intersection Observer

### Grain Texture Overlay
Fixed position, full viewport, z-index 999, pointer-events none, opacity 0.032. SVG fractalNoise filter. Applied via body::before pseudo element.

### Animation Standards
- Hero elements: staggered fadeUp on load, 0.2s to 1.5s delays
- Scroll reveals: Intersection Observer, threshold 0.08, rootMargin 0px 0px -30px 0px
- Nav background: transparent over hero, transitions to rgba(8,8,8,0.97) on scroll
- Service card hover: gold underline scaleX(0) to scaleX(1), transform-origin left, 0.4s ease
- Venture card hover: left border color transitions to gold, background darkens

---

## SITE ARCHITECTURE

Single page with anchor navigation. All sections on index page. Future pages will be added as separate routes.

```
/
├── #home (Hero)
├── #about
├── #services
├── #process
├── #ventures
├── #testimonials
└── #contact
```

### Future Pages (do not build yet, just architect for them)
```
/portfolio
/blog
/privacy-policy
/terms
```

---

## COMPONENT ARCHITECTURE

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Main single page, all sections
│   └── api/
│       └── contact/
│           └── route.ts    # Contact form API route via Resend
├── components/
│   ├── layout/
│   │   ├── Nav.tsx         # Fixed nav with scroll behavior
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── MottoBar.tsx
│   │   ├── Stats.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── TaglineBreak.tsx
│   │   ├── Process.tsx
│   │   ├── Ventures.tsx
│   │   ├── Testimonials.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── CrownCrest.tsx  # SVG crown crest, reusable
│       ├── GoldRule.tsx    # Horizontal gold divider
│       ├── SectionEyebrow.tsx
│       └── RevealWrapper.tsx  # Intersection Observer wrapper
├── lib/
│   └── utils.ts
└── public/
    └── images/
        ├── estate-hero.png     # Las Vegas luxury estate at dusk
        └── monarch-logo.png    # Lion crest logo PNG
```

---

## SECTIONS — DETAILED SPEC

### 1. NAV
- Fixed position, z-index 100
- Left: Crown SVG icon + "MONARCH GROUP LV" wordmark in Cinzel + "Private Asset Placement · Las Vegas" small text in gold
- Center: Home, About, Services, Process, Ventures, Contact links
- Right: "Private Inquiry" ghost button with gold border
- Scroll behavior: transparent gradient over hero → solid obsidian on scroll past hero
- Mobile: hamburger menu, full screen overlay nav

### 2. HERO
- Full viewport height (100vh)
- Background: `/public/images/estate-hero.png` at 55% opacity
- Overlays: dark gradient (top strong, middle lighter, bottom strong) + radial vignette crushing edges to black
- Grain texture on top of everything
- Content (centered, z-index 2):
  - Eyebrow: "Private Asset Placement · Las Vegas, Nevada" with flanking gold lines
  - Crown SVG crest (90x110px)
  - H1: "MONARCH" in Cinzel, ~5.8rem desktop
  - Subhead: "GROUP LV" in Cinzel gold, ~2.2rem, letter-spacing 0.35em
  - Gold rule: 180px wide, gradient left to right
  - Tagline italic: "Discreetly Transitioning High-Value Assets for Select Clients"
  - Sub: "PRIVACY · PRESTIGE · PERFORMANCE" small caps gold
  - Body: one paragraph, max-width 520px
  - CTAs: "Request Private Consultation" (gold filled) + "Our Services" (ghost outline)
- Scroll indicator: bottom center, "SCROLL" label + animated gold line

### 3. MOTTO BAR
- Full width gold (#B8942A) background
- Content: PRIVACY · PRESTIGE · PERFORMANCE · RARE ISN'T LUCK — IT'S ACCESS
- Font: Cinzel, obsidian color, letter-spacing 0.25em
- Small diamond or dot separators between items

### 4. STATS BAR
- Background obs3
- Top and bottom borders: 1px solid rgba(184,148,42,0.12)
- Four stats centered with gap:
  - $2M+ / Assets Placed
  - 100+ / Estates Served
  - Zero / Public Exposure
  - 100% / Discretion Guaranteed
- Number: Cormorant Garamond, 2.4rem, gold
- Label: Montserrat, 0.52rem, letter-spacing 0.28em, uppercase, cream-dim

### 5. ABOUT
- Background: obsidian
- Two column grid, 1fr 1fr, gap 7rem
- Left column: image panel (500px height desktop)
  - Border: 1px solid rgba(184,148,42,0.2)
  - Estate hero image at 35% opacity, sepia(20%) contrast(1.1)
  - Accent boxes: bottom-right and top-left corner decorative borders
  - Badge: "Las Vegas, Nevada" gold pill top-left
- Right column:
  - Eyebrow: "About the Firm"
  - H2: "A Different Kind of Luxury Broker" (em tag on "Luxury Broker" = gold italic)
  - Paragraph 1: Core positioning copy
  - Paragraph 2: Discretion and process copy
  - Paragraph 3: Founder mention — Quinton "Kevin" Westbrook
  - Pullquote / emphasis line: **"The traditional estate sale was never designed for estates like yours. Monarch Group was."**
  - Partner row: Goldin (0% Seller Fee) + Julien's Auctions — text treatments with gold serif font

### 6. SERVICES
- Background: obs2
- Header centered: eyebrow + H2 "Our Services"
- 3x2 grid, 1px gaps, gold-faint background (creates hairline dividers)
- Six cards:
  1. Estate Liquidation
  2. Luxury Consignment
  3. Private Acquisitions
  4. Probate & Trust Services
  5. Auction Strategy
  6. Valuation Advisory
- Each card: large faint number (Cormorant), title, body copy
- Hover: background darkens + 2px gold underline animates from left

### 7. TAGLINE BREAK
- Background obs3 with subtle radial gold glow
- Centered blockquote:
  - Large italic Cormorant: "Not for everyone. Built for a few."
  - "Built for a few." in gold
  - Sub: "Driven by Distinction · Monarch Group LV"

### 8. PROCESS
- Background obs2
- Eyebrow + heading left aligned
- Four step horizontal layout with connecting gold hairline between step dots
- Steps: I / Private Consultation, II / Expert Valuation, III / Strategic Placement, IV / Seamless Settlement
- Each step: roman numeral circle dot, title, body

### 9. VENTURES
- Background obs3
- Two column: left text, right venture cards
- Left: eyebrow, heading "Monarch Group is the Umbrella", body copy
- Right: four stacked venture cards
  - Vegas Luxury Broker — Active
  - LogiQ Labs — Active
  - BitFinder — Recovery Services
  - Snap2Sold — In Development
- Each card: icon box (3 letter abbreviation), name, description, status badge
- Hover: gold left border, background darkens slightly

### 10. TESTIMONIALS
- Background obsidian
- Build full section and component structure now even though content is placeholder
- Three card layout
- Each card contains:
  - Five gold stars
  - Quote text (placeholder: "Placeholder testimonial — real content coming soon.")
  - Client name (placeholder)
  - Client role (placeholder: "Estate Executor, Las Vegas" / "Real Estate Agent" / "Probate Attorney")
  - Thin gold top border on card
- Section header: eyebrow "What Clients Say" + H2 "Trusted by Those Who Expect More"
- Make it trivially easy to swap in real testimonials later — consider a testimonials.ts data file

### 11. CONTACT
- Background obsidian with subtle radial gold glow top center
- Max-width 800px centered
- Small crown SVG crest
- H2: "PRIVATE INQUIRY" in Cinzel
- Italic serif subheading: "Every significant transaction starts privately"
- Body copy about discretion and no obligation
- Form fields:
  - First Name (required)
  - Last Name (required)
  - Email Address (required)
  - Phone Number
  - Area of Interest (select dropdown):
    - Estate Liquidation
    - Luxury Consignment
    - Private Acquisitions
    - Probate / Trust Services
    - BitFinder Recovery Services
    - Valuation Advisory
    - General Inquiry
  - Message (textarea)
  - Submit button: full width gold
- Form behavior:
  - Client side validation
  - Loading state on submit button
  - Success state: button text changes, form fields disabled
  - Error state: clear error message
  - API route: POST /api/contact → Resend → delivers to CONTACT_EMAIL env var
- Contact info row below form:
  - Office address
  - Direct phone
  - Email (placeholder)

### 12. FOOTER
- Background obs3, top border gold hairline
- Three column: wordmark left, nav links center, copyright right
- Mobile: stacked centered

---

## ASSETS

| File | Location | Description |
|---|---|---|
| estate-hero.png | /public/images/ | Las Vegas luxury estate at dusk with Strip view |
| monarch-logo.png | /public/images/ | Lion crest logo with crown, gold on black |

**Note:** If monarch-logo.png is not present, use the inline SVG crown crest defined in CrownCrest.tsx. Never use a broken image tag.

---

## SEO METADATA

```typescript
export const metadata: Metadata = {
  title: 'Monarch Group LV — Private Asset Placement | Las Vegas',
  description: 'Monarch Group LV discreetly transitions high-value assets for select clients. Luxury estate liquidation, private consignment, and auction strategy in Las Vegas, Nevada.',
  keywords: ['luxury estate liquidation Las Vegas', 'private asset placement', 'estate consignment Las Vegas', 'probate estate services Nevada', 'luxury consignment Las Vegas'],
  openGraph: {
    title: 'Monarch Group LV — Private Asset Placement',
    description: 'Discreetly transitioning high-value assets for select clients.',
    url: 'https://monarchgrouplv.com',
    siteName: 'Monarch Group LV',
    locale: 'en_US',
    type: 'website',
  },
}
```

Also generate:
- sitemap.xml
- robots.txt
- favicon using crown M motif

---

## CONTACT FORM API ROUTE

```typescript
// src/app/api/contact/route.ts
// POST handler
// Validate required fields: firstName, lastName, email, interest, message
// Send via Resend to process.env.CONTACT_EMAIL
// Return 200 on success, 400 on validation error, 500 on send failure
// Email subject: "New Private Inquiry — Monarch Group LV"
// Include all form fields in email body, formatted cleanly
// Reply-to: set to submitter's email so Kevin can reply directly
```

---

## MOBILE RESPONSIVE RULES

| Breakpoint | Changes |
|---|---|
| < 900px | Nav links hidden, hamburger menu appears |
| < 900px | About grid: single column |
| < 900px | Services grid: single column |
| < 900px | Process steps: 2x2 grid, connecting line hidden |
| < 900px | Ventures grid: single column |
| < 900px | Testimonials: single column |
| < 900px | Contact form: single column |
| < 900px | Footer: stacked centered |
| < 900px | Section padding: 5rem 1.5rem |
| < 900px | Stats: flex-wrap, reduced gap |
| < 900px | Motto bar: flex-wrap |

---

## PENDING DECISIONS (do not block on these — use placeholders)

- [ ] Final email address for contact form (currently using concierge@monarchgrouplv.com as placeholder)
- [ ] Real testimonial content (build section with placeholder data)
- [ ] Monarch lion crest logo PNG placement
- [ ] Surety bond / insurance credentials to add to site once obtained
- [ ] Additional portfolio photography

---

## BRAND VOICE

**Tone:** Authoritative, discreet, confident. Never salesy. Never desperate. The brand speaks like old money that doesn't need to announce itself.

**Key phrases approved for use:**
- "Discreetly transitioning high-value assets for select clients"
- "Privacy. Prestige. Performance."
- "Rare isn't luck. It's access."
- "Not for everyone. Built for a few."
- "Driven by Distinction."
- "The traditional estate sale was never designed for estates like yours. Monarch Group was."
- "Every engagement handled with absolute discretion."
- "No public exposure. No unnecessary movement. No disruption to the residence."
- "Assets remain securely in your possession while strategic placement is executed behind the scenes."

**Never use:**
- "Cheap" / "affordable" / "discount"
- "Quick" (say "efficient" or "expedient")
- "Guys" / casual language
- Exclamation points
- Emoji

---

## COMMIT STANDARDS

Every commit must include:
- What changed
- Why it changed
- Any pending items introduced

Format: `feat(section): description` or `fix(component): description`

---

## VERSION HISTORY

| Version | Date | Notes |
|---|---|---|
| 1.0 | June 2026 | Initial blueprint — design finalized in Claude artifact |
