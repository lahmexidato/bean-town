# Bean Town — Brand Reference

*Single-source-of-truth for brand decisions. Last updated: June 2026.*

---

## The brand in one sentence

Bean Town is a globally-minded coffee education brand that teaches curious, non-expert drinkers about coffee through the lens of place and culture — always paired with the food that belongs beside it.

---

## Taglines (pick one — decision pending)

| Option | Register |
|---|---|
| **coffee from everywhere. for everyone.** | Primary — warm, inclusive, global |
| learning to drink better, wherever we land. | More personal, traveller tone |
| 4th wave. first round's on us. | Knowing, insider-but-welcoming |

Current default on website: *coffee from everywhere. for everyone.*

---

## Colour palette

| Name | Hex | Role |
|---|---|---|
| Olive | `#3D4A2E` | Primary brand colour — headers, borders, key UI |
| Cream | `#F2EDE3` | Background / primary text on dark |
| Terracotta | `#B5501C` | Accent — warmth, pairings, CTAs |
| Espresso | `#2A1F14` | Deep backgrounds, hero sections, strong type |
| Ochre | `#C8963E` | Secondary accent — labels, highlights |
| Mid-green | `#5C6B3F` | Hover states, secondary olive |
| Warm gray | `#8A8278` | Muted text, secondary labels |

**Usage rules:**
- Never use pure white (`#FFFFFF`) — use cream
- Never use pure black — use espresso
- Terracotta is accent only, not for large backgrounds
- Ochre works on dark (espresso) backgrounds, not cream

---

## Typography

| Role | Font | Weight | Style |
|---|---|---|---|
| Headings | DM Sans | 500 | Normal |
| Body | DM Sans | 400 | Normal |
| Editorial / pull quotes | Lora | 400 | Italic |
| Labels / mono | System mono stack | — | — |

**Size scale (stick to this):** 12 / 14 / 16 / 20 / 28 / 38 / 52px

**Rules:**
- Sentence case everywhere. No ALL CAPS except country labels (small, tracked)
- Never use DM Sans bold (700) — 500 is the heaviest weight used
- Lora italic is used sparingly: pull quotes, country edition intros, card pairings

**Google Fonts link:**
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;1,9..40,400&family=Lora:ital,wght@1,400&display=swap" rel="stylesheet">
```

---

## Logo

**Status:** Adam Smylie is producing the hand-drawn wordmark. Not yet delivered.

**Interim placeholder:** Render "bean town" in Lora italic, `#2A1F14` (on light) or `#F2EDE3` (on dark), lowercase.

**Rules when logo arrives:**
- Never stretch, rotate, or recolour
- Light version (cream): use on espresso/olive backgrounds
- Dark version (espresso): use on cream backgrounds
- Minimum clear space: equal to the height of the "b" on all sides
- Never add drop shadow, outline, or effects

---

## Visual mood

> A well-worn travel journal. A market stall in Oaxaca. A specialist map shop.

- **Not:** Instagrammable minimalism, cold white space, clinical tech-brand aesthetics
- **Yes:** Texture (via colour and type, not stock photos), warmth, layered earthy tones, generous but considered
- No stock photography until original photography exists. Use colour, texture, and type only.

---

## Voice and tone

**The model:** A friend who has been to these places, had the drinks, and says "you have to try it like this — it makes so much more sense." Not a professor. Not a barista. A well-travelled peer.

**Reference:** James Hoffmann for accessibility, but more traveller, less technical.

| Do | Don't |
|---|---|
| Sentence case | ALL CAPS, Title Case |
| Short paragraphs | Wall-of-text explanations |
| "We found that..." | "The correct way to..." |
| Occasional dry humour | Forced quirky marketing voice |
| Assume genuine interest | Assume prior knowledge |
| Name the preparation in its native language | Anglicise unnecessarily |

**Alex's register:** Analytical, comparative, finds the structural angle. "Here's what's actually interesting about this."

**Adam's register:** Experiential, sensory, personal. "I was sitting in a kissaten in Furano and..."

**Combined:** Alex structures, Adam personalises. Neither sounds like a coffee professional.

---

## Country edition format

The signature content unit. Consistent across Instagram, Substack, and website.

```
[Country]
[Coffee preparation — in native language]
+ [Pastry/food pairing]
[2–3 sentence cultural context]
[Link to full edition]
```

**Published so far:** None (Mexico, Ethiopia, Japan in progress)

**Visual treatment:**
- Country label: DM Sans, 12px, uppercase, tracked, warm gray
- Preparation name: DM Sans 500, 28px, espresso/cream
- Pairing: Lora italic, 14px, terracotta
- Body: DM Sans 400, 16px, warm gray
- Card top border: 3px olive (→ terracotta on hover)

---

## What Bean Town is not

- Not a specialty coffee brand or roaster
- Not competing with James Hoffmann (different angle — cultural/travel, not technical)
- Not pretentious — robusta in Vietnamese cà phê đá isn't "inferior", it's correct for that culture
- Not a chain or scalable coffee business
- Not photography-first (until original photography exists)

---

## The 4th wave — our definition

1. **1st wave:** Coffee as commodity (Maxwell House, Nescafé)
2. **2nd wave:** Coffee as experience (Starbucks, café culture)
3. **3rd wave:** Coffee as craft (specialty grades, single origin, precise technique)
4. **4th wave (Bean Town):** Coffee as connection — quality kept, hierarchy dropped, education that brings people in

---

## Assets

| Asset | Status | Owner |
|---|---|---|
| Hand-drawn logo (wordmark) | Pending | Adam Smylie |
| Logo icon mark | Pending | Adam Smylie |
| `assets/logo-placeholder.svg` | Done — in repo | — |
| OG image 1200×630 | Pending | — |
| Instagram carousel template | In Canva | — |
| Brand guidelines (Canva) | In Canva brand kit `kAGUfBgO3uk` | — |

---

## Canva brand kit

**Kit ID:** `kAGUfBgO3uk`
**URL:** https://www.canva.com/brand/kAGUfBgO3uk/guidelines

Colours, fonts, and logo assets should be registered here once Adam's logo is delivered.

---

*See also: `bean-town-brand-doc-v1.md` for full brand narrative and `CLAUDE.md` for CSS implementation.*
