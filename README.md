# Bean Town

> Coffee from everywhere. For everyone.

Bean Town is a coffee culture education brand co-founded by Alex Hamilton and Adam Smylie. We cover traditional coffee preparations from around the world — paired with the food, history, and culture they come from — without pretension.

This repo contains the Bean Town website (static HTML/CSS/JS), all brand documentation, and content strategy.

---

## Status

| Area | Status |
|---|---|
| Website v1 | **Built** — index, about, contact, 404, map placeholder |
| Brand documentation | **Done** — see `/docs` |
| Domain | Pending — Alex to register `beantown.coffee` |
| Substack | Pending — Alex/Adam to set up |
| Instagram | Pending — check @beantownco availability |
| Google Form (contact) | Pending — Alex to create and share iframe embed code |
| Logo | Pending — Adam to deliver hand-drawn wordmark |
| Map page | Blocked — awaiting Alex + Adam sign-off |
| Country editions | In progress — Mexico, Ethiopia, Japan |

---

## Repo structure

```
/
├── index.html              Landing page
├── about.html              About us (manifesto, bios, 4th wave)
├── map.html                Placeholder — BLOCKED
├── contact.html            Contact — Google Form iframe pending
├── 404.html                Custom 404
│
├── css/style.css           All styles — single file, CSS variables at top
├── js/main.js              Nav scroll + mobile menu toggle only
├── assets/                 Logo placeholder SVG, OG image (pending)
│
├── docs/
│   ├── brand-reference.md      Brand colours, fonts, logo, voice — quick reference
│   ├── content-playbook.md     Editorial strategy, content pillars, platform plan
│   ├── tech-handoff.md         Developer handoff — file map, CSS guide, deployment
│   └── visual-intelligence.md  Vulfpeck analysis — design principles and concrete moves
│
├── CLAUDE.md               AI session instructions (read automatically by Claude Code)
├── TASKS.md                Active task list
├── CONTRIBUTING.md         Copy editing guide for Adam
├── README.md               This file
│
├── bean-town-brand-doc-v1.md   Full brand narrative (internal)
├── bean-town-research.md       Market research and content gaps (internal)
├── founders-context.md         Founder bios and voice notes (internal — do not publish)
├── activation-prompt.md        Claude Code session starter prompt
│
└── vercel.json             Deployment config — clean URLs, caching, security headers
```

---

## Running locally

No build step. Open any `.html` file directly in a browser, or serve with:

```bash
npx serve .
```

---

## Deploying

```bash
npm i -g vercel
vercel --prod
```

Target domain: `beantown.coffee` (TBC — Alex to register)

---

## Starting a Claude Code session

```
Read CLAUDE.md first. It contains brand constants, file structure, and coding principles.
Read TASKS.md second. Pick up from the first incomplete [ ] task.
```

Or paste `activation-prompt.md` as the opening message.

---

## Brand quick reference

| Token | Value |
|---|---|
| Olive | `#3D4A2E` |
| Cream | `#F2EDE3` |
| Terracotta | `#B5501C` |
| Espresso | `#2A1F14` |
| Ochre | `#C8963E` |
| Heading font | DM Sans 500 |
| Body font | DM Sans 400 |
| Editorial serif | Lora 400 italic |

Full brand reference: `docs/brand-reference.md`
Full brand narrative: `bean-town-brand-doc-v1.md`

---

## Canva brand kit

**ID:** `kAGUfBgO3uk`
**URL:** https://www.canva.com/brand/kAGUfBgO3uk/guidelines

Brand guidelines doc and Instagram post templates have been generated in Canva. Open to select and save to your account.

---

## Key decisions still pending

| Decision | Owner |
|---|---|
| Domain registration | Alex |
| Substack URL | Alex + Adam |
| Instagram handle | Alex + Adam |
| Positioning tagline (3 options) | Alex + Adam |
| Map page concept approval | Alex + Adam |
| First 3 country edition order | Alex + Adam |
| Logo delivery timeline | Adam |

---

*Alex Hamilton + Adam Smylie — 2026*
