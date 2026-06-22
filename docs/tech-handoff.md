# Bean Town — Technical Handoff

*For developers, contractors, or future Claude Code sessions picking this up cold. Last updated: June 2026.*

---

## What this is

A static website for Bean Town — a coffee culture education brand. No backend, no CMS, no build step. Plain HTML/CSS/JS deployed on Vercel.

---

## Tech stack

| Layer | Technology | Notes |
|---|---|---|
| Framework | None — plain HTML/CSS/JS | By design. Keep it this way. |
| Hosting | Vercel | Auto-deploys from repo |
| Fonts | Google Fonts | DM Sans + Lora — loaded via `<link>` in `<head>` |
| Map (future) | Leaflet.js | Not yet built — see `map.html` placeholder |
| Forms | Google Forms embed | iframe in `contact.html` — embed code pending |
| Domain | TBC — `beantown.coffee` preferred | Alex to register |

---

## File map

```
/
├── index.html          Landing page (hero, edition cards, newsletter CTA, footer)
├── about.html          About page (manifesto, founder bios, 4th wave section)
├── map.html            Placeholder — BLOCKED pending approval
├── contact.html        Contact — Google Form iframe placeholder
├── 404.html            Custom 404
│
├── css/
│   └── style.css       Single stylesheet. All styles live here. CSS custom properties at top.
│
├── js/
│   └── main.js         Nav scroll behaviour + mobile hamburger menu. Nothing else.
│
├── assets/
│   ├── logo-placeholder.svg    Interim SVG — replace with Adam's hand-drawn logo
│   └── og-image.png            TODO: Create 1200×630 social share image
│
├── docs/               Project documentation (not served by Vercel, just reference)
│
├── CLAUDE.md           AI session instructions — read by Claude Code automatically
├── TASKS.md            Active task list
├── README.md           Project overview
├── CONTRIBUTING.md     Copy editing guide (for Adam)
└── vercel.json         Deployment config — clean URLs, security headers, cache rules
```

---

## CSS architecture

`css/style.css` is a single file, mobile-first. It uses CSS custom properties (variables) defined at `:root` for all brand colours and the type scale.

**Section order:**
1. `:root` — all CSS variables (colours, fonts, sizes)
2. Reset + base styles
3. Typography classes (`.logo-text`, headings)
4. Layout (`.container`)
5. Navigation (`.site-nav`, `.mobile-menu`, `.nav-toggle`)
6. Buttons (`.btn`, `.btn--cream`, `.btn--outline`)
7. Hero (`.hero`, index.html only)
8. Country edition cards (`.editions`, `.cards-grid`, `.card`)
9. Newsletter CTA (`.newsletter-cta`)
10. Footer (`.site-footer`)
11. Page hero (`.page-hero`, shared: about + contact)
12. About page (`.manifesto`, `.founders-grid`, `.wave-section`)
13. Contact page (`.contact-section`, `.form-placeholder`)
14. Map placeholder (`.map-placeholder`)
15. 404 page (`.not-found`)

**Breakpoints:**
- `min-width: 640px` — small tablet (cards go 2-column)
- `min-width: 768px` — tablet (nav shows desktop links, footer goes horizontal)
- `min-width: 1024px` — desktop (cards go 3-column, more generous padding)

---

## Brand CSS variables — do not change without updating CLAUDE.md

```css
:root {
  --olive:      #3D4A2E;
  --cream:      #F2EDE3;
  --terracotta: #B5501C;
  --espresso:   #2A1F14;
  --ochre:      #C8963E;
  --mid-green:  #5C6B3F;
  --warm-gray:  #8A8278;
}
```

---

## JavaScript

`js/main.js` does two things only:
1. Adds `.scrolled` class to `#site-nav` when `scrollY > 72px` (darkens nav background)
2. Toggles mobile hamburger menu (`#nav-toggle` / `#mobile-menu`) + Escape key close

No dependencies. No bundler. Wrapped in an IIFE.

---

## Adding a country edition (when Substack editions are published)

In `index.html`, find the `.card` for the relevant country. Change:
```html
<span class="card__link card__link--muted" aria-label="Coming soon">coming soon →</span>
```
To:
```html
<a href="https://beantownco.substack.com/p/[slug]" class="card__link">read it →</a>
```

---

## Adding the Google Form (contact.html)

Alex creates the Google Form, clicks "Send" → embed tab → copies the `<iframe>` code.

In `contact.html`, find:
```html
<!-- GOOGLE FORM IFRAME GOES HERE -->
```

Replace the `.form-placeholder` div below that comment with the `<iframe>` tag. Add `class="form-embed"` to the iframe and remove the `style` and `height` attributes from the Google-generated code — the CSS handles sizing.

---

## Updating the Substack and Instagram URLs

Search all HTML files for `<!-- TODO:` comments. They mark every placeholder link that needs a real URL. There are currently:
- Substack URL (appears in nav, hero CTA, newsletter section, footer)
- Instagram URL (appears in nav, footer)
- Contact email (contact.html)

---

## Deploying

```bash
# One-time setup
npm i -g vercel
vercel login

# Deploy to production
vercel --prod
```

Vercel reads `vercel.json` for clean URLs, caching, and security headers. No other config needed.

---

## Building map.html (when approved)

Map is blocked pending Alex + Adam sign-off. When approved:

1. Add Leaflet.js via CDN to `<head>`:
   ```html
   <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">
   <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
   ```

2. Add a tile provider (free, dark theme): [Stadia Maps](https://stadiamaps.com/) with `stadia-alidade-smooth-dark` or similar.

3. Terracotta markers (`#B5501C`) for published editions, warm-gray (`#8A8278`) for upcoming.

4. Click handler → Leaflet popup with: country name, preparation name, Substack link.

5. Initial markers: Mexico, Ethiopia, Japan, Vietnam, Colombia.

See `map.html` for the full comment brief inside the placeholder.

---

## Non-negotiables (from brand brief)

- No JavaScript framework (no React, Vue, Svelte)
- No Google Maps API — Leaflet only
- No stock photography until original photography exists
- Colours must match the CSS variables exactly
- Font weights: DM Sans max is 500. Never 700.
- Mobile-first: test at 375px before widening

---

*Also read: `CLAUDE.md` for AI session instructions, `CONTRIBUTING.md` for copy editing guidance.*
