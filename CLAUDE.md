# CLAUDE.md — Bean Town Project

This file is read automatically by Claude Code at the start of every session. Follow all instructions here.

---

## Project overview

**Bean Town** is a coffee culture education brand co-founded by Alex Hamilton and Adam Smylie. It is a digital-first brand with no physical location. The core concept: coffee as a lens on culture and place, delivered without pretension to curious non-expert drinkers worldwide.

**Output surfaces:**
- Website (this repo) — landing page, about, world map, contact
- Instagram — country edition carousels, daily cup posts
- Substack newsletter — long-form country editions and essays
- Future: podcast, stickers/merch

---

## Tech stack

- **Framework:** Plain HTML/CSS/JS (no framework) — keep it simple, vibe-codeable, fast to ship
- **Hosting:** Vercel (deploy from this repo)
- **Forms:** Google Forms embed (contact page)
- **Map:** Leaflet.js or similar lightweight library — no Google Maps API dependency
- **Fonts:** Google Fonts — primary sans (DM Sans or Plus Jakarta Sans), secondary serif (Lora)
- **No build step required** — all files are static, edit and deploy directly

---

## Brand constants — do not deviate

### Colours (exact hex)
```
--olive:       #3D4A2E   /* Primary brand */
--cream:       #F2EDE3   /* Background / primary text on dark */
--terracotta:  #B5501C   /* Accent */
--espresso:    #2A1F14   /* Deep backgrounds, strong type */
--ochre:       #C8963E   /* Secondary accent */
--mid-green:   #5C6B3F   /* Hover states, secondary olive */
--warm-gray:   #8A8278   /* Muted text */
```

### Typography
- **Headings:** DM Sans, weight 500 — never bold (700)
- **Body:** DM Sans, weight 400
- **Editorial/accent:** Lora (serif), weight 400 — use sparingly for pull quotes, edition intros
- **Mono (code/labels):** system-ui mono stack
- **Size scale:** 12 / 14 / 16 / 20 / 28 / 38 / 52px — stick to this

### Voice
- Sentence case everywhere. No ALL CAPS, no Title Case except proper nouns.
- Warm, curious, peer-level. Never condescending. Never technical without explanation.
- Short paragraphs. Occasional dry humour is fine.

### Logo
- The wordmark is hand-drawn by Adam Smylie — use `logo.svg` or `logo.png` as supplied
- Until logo exists: render "bean town" in Lora italic, #2A1F14, lowercase
- Never stretch, recolour, or add effects to the logo

---

## File structure

```
bean-town/
├── index.html          # Landing page
├── about.html          # About us
├── map.html            # Coffee world map (pending — see TASKS.md)
├── contact.html        # Google Forms embed
├── 404.html            # Custom 404
├── css/
│   └── style.css       # Single stylesheet — no component CSS files
├── js/
│   └── main.js         # Single JS file
├── assets/
│   ├── logo.svg        # Adam's hand-drawn logo (TBC)
│   ├── logo-placeholder.svg
│   └── og-image.png    # Social share image 1200×630
├── fonts/              # Self-hosted fallback if needed
├── CLAUDE.md           # This file
├── TASKS.md            # Active task list
├── README.md           # Project overview
└── vercel.json         # Deployment config
```

---

## Coding principles

1. **Mobile-first.** Every component is designed for 375px wide, then scales up.
2. **No frameworks.** No React, no Vue, no Tailwind. Vanilla HTML/CSS/JS only.
3. **Minimal dependencies.** Leaflet.js for the map. Google Fonts via `<link>`. Nothing else.
4. **Accessible.** `alt` text on all images. Semantic HTML. `<main>`, `<nav>`, `<footer>` used correctly.
5. **Fast.** No images above 200KB. Lazy load anything below the fold. No blocking scripts.
6. **Editable by non-developers.** Adam should be able to edit copy in HTML without breaking anything. Keep structure clean.

---

## Pages — brief for each

### `index.html` — Landing page
- Full-height hero: logo + tagline ("coffee from everywhere. for everyone.") on `--espresso` background
- Brief intro paragraph (3–4 sentences max)
- Country edition teaser cards (3 × cards: Mexico, Ethiopia, Japan — with placeholder content initially)
- Substack CTA: "read the newsletter →" linking to substack URL
- Footer: Instagram link + contact link

### `about.html` — About us
- Two-column on desktop, stacked on mobile: Alex bio + Adam bio
- Short brand manifesto section (from brand doc)
- The 4th wave explainer (2 short paragraphs)

### `map.html` — Coffee world map *(pending approval — see TASKS.md)*
- Interactive Leaflet.js map, `--espresso` background tiles or dark/muted tiles
- Markers in `--terracotta` for countries with published editions
- Markers in `--warm-gray` for upcoming countries
- Click a marker → small popup with country name, preparation name, link to Substack edition
- Status: **design approved, not yet built** — see TASKS.md

### `contact.html` — Contact
- Embedded Google Form (URL TBC — Alex to create and share iframe embed code)
- Fields: Name, Email, Message, "How did you find us?" dropdown
- Keep it visually consistent — override Google Form styles where possible or use custom form with Formspree fallback

---

## Deployment

```bash
# Install Vercel CLI once
npm i -g vercel

# Deploy
vercel --prod
```

- Vercel project name: `bean-town`
- Domain target: `beantown.coffee` or `beantownco.com` (TBC — Alex to register)
- All pages are static — no serverless functions needed

---

## What NOT to do

- Don't add a JavaScript framework
- Don't add a CMS — content is hand-edited HTML for now
- Don't use Google Maps API (cost + complexity) — use Leaflet with free tile provider
- Don't use stock coffee photography — use texture, colour, and type until original photography is available
- Don't introduce new brand colours or fonts without updating this file

---

## Documentation

| File | Purpose |
|---|---|
| `TASKS.md` | Active task list — start here |
| `docs/brand-reference.md` | Colours, fonts, logo rules, voice — quick reference |
| `docs/content-playbook.md` | Editorial strategy, content pillars, platform plan |
| `docs/tech-handoff.md` | Developer handoff — file map, CSS guide, deployment |
| `docs/visual-intelligence.md` | Vulfpeck analysis — 7 design principles, concrete visual moves |
| `CONTRIBUTING.md` | Copy editing guide for Adam |
| `bean-town-brand-doc-v1.md` | Full brand narrative (internal) |
| `bean-town-research.md` | Market research and content gaps (internal) |
| `founders-context.md` | Founder bios and voice notes (internal — do not publish) |

## Current status

Website v1 is built — all five pages complete. See `TASKS.md` for active work.
Canva brand kit ID: `kAGUfBgO3uk` — https://www.canva.com/brand/kAGUfBgO3uk/guidelines
