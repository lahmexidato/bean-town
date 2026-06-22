# Bean Town — Claude Code Activation Prompt

Copy and paste this prompt to kick off a Claude Code website build session.

---

## Activation prompt (paste into Claude Code terminal or first message)

```
You are building the Bean Town website — a coffee culture education brand.

Read CLAUDE.md first. It contains all brand constants, file structure, tech stack decisions, and coding principles. Follow it without deviation.

Read TASKS.md second. It contains the current active task list with status flags. Pick up from the first incomplete `[ ]` task in Phase 1 unless I direct otherwise.

## Session goal
Build the Bean Town v1 website as a set of static HTML/CSS/JS files ready to deploy on Vercel.

## Non-negotiables
- No JavaScript frameworks. Vanilla HTML/CSS/JS only.
- All brand colours and fonts must come from CLAUDE.md — do not improvise.
- Mobile-first. Check every component at 375px before scaling up.
- The coffee world map page (map.html) is BLOCKED — do not build it. Mark it with a "coming soon" placeholder link only.
- Google Form on contact.html: embed using the iframe code I will provide. If I haven't provided it yet, add a placeholder comment <!-- GOOGLE FORM IFRAME GOES HERE --> and continue.

## Pages to build (in order)
1. index.html — landing page
2. css/style.css — full stylesheet
3. about.html — about page
4. contact.html — contact with Google Form embed
5. 404.html — custom 404

## Starting point
The repo is empty. Begin by creating the file structure, then build index.html and css/style.css first.

## When you need input
If you need a decision from me (copy, a URL, an asset), add a clear <!-- TODO: [description] --> comment in the relevant file and continue building. Don't stop and ask — keep moving.

After completing each page, tell me what you built and what the next step is.
```

---

## Supplementary prompts — use these mid-session

### To build the world map (once approved)
```
Build map.html — the Bean Town coffee world map.

Use Leaflet.js loaded from CDN. Use the CartoDB dark matter tile layer (free, no API key needed):
https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png

Map settings:
- Initial view: centered on roughly 20°N 15°E (Africa-centred, shows the whole world)
- Zoom level 2 on desktop, 1 on mobile
- Disable scroll zoom on page load (enable on map click)

Markers:
- Published editions: terracotta #B5501C
- Upcoming/planned: warm-gray #8A8278
- Starting markers: Mexico (19.4°N 99.1°W), Ethiopia (9.0°N 38.7°E), Japan (35.7°N 139.7°E), Vietnam (21.0°N 105.8°E), Colombia (4.7°N 74.1°W)
- All 5 as "upcoming" (gray) initially — will update to published as Substack editions go live

Popup on click: country name + preparation name + "read on substack →" link (placeholder # for now)

Style the map container to fill the full viewport minus the nav header.
```

### To add a new country edition card to index.html
```
Add a new country edition card to the teaser section on index.html.

Country: [COUNTRY]
Preparation: [DRINK NAME]
One-line description: [DESCRIPTION]
Pastry pairing: [PASTRY]
Substack link: [URL or # if not published yet]
Status: [published / coming soon]

Match the exact card component already in index.html. Don't change the card structure.
```

### To update brand colours or fonts
```
Update the brand constants in CLAUDE.md and css/style.css.

Change: [what to change]
New value: [new value]
Reason: [brief reason]

After updating, grep all HTML files to check for any hardcoded instances of the old value and update them too.
```

### To set up Vercel deployment
```
Create vercel.json for the Bean Town static site.

Requirements:
- All routes should serve their corresponding .html file
- 404 should serve 404.html
- No rewrites needed — direct file serving
- Add security headers: X-Content-Type-Options, X-Frame-Options, Referrer-Policy

Also create a README.md with:
- Project name and one-line description
- How to run locally (just open index.html, or use `npx serve .`)
- How to deploy to Vercel
- Link to CLAUDE.md for AI session context
```

---

## Session hygiene

- At the start of each new Claude Code session: paste the activation prompt above
- Claude Code will re-read CLAUDE.md and TASKS.md and pick up where it left off
- Update TASKS.md with `[x]` when tasks are completed — either manually or ask Claude Code to do it
- Keep CLAUDE.md current if brand decisions change mid-build

---

*File: activation-prompt.md*
*Updated: June 2026*
