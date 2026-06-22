# Bean Town — Visual Intelligence: Vulfpeck Analysis

*How we translate the Vulfpeck visual language into Bean Town's own identity.*
*Last updated: June 2026. Source images in: `Vulpeck Visual Inspiration/`*

---

## The two covers analysed

### Hill Climber (2018) — cover by Christa Rijneveld

- **Background:** Warm off-white (~`#FAFAF8`) — not pure white, not cream, something between
- **Illustration:** Ultra-precise topographic contour lines of mountain ridges. Hundreds of fine lines (0.7px weight), no fill, pure linework. Extraordinary craft — the complexity is in the detail, not the composition.
- **Typography:** "VULFPECK" and "HILL CLIMBER" in extremely small, widely-tracked uppercase sans-serif, placed in opposing top corners. Tiny. Almost an afterthought. The type IS the restraint.
- **Colour count:** Two. Off-white and near-black ink. Nothing else.
- **Lesson:** Restraint is the statement. The cover doesn't try to tell you everything — it shows you one thing, done completely.

### Mr. Finish Line era cover

- **Background:** Dusty powder blue (~`#A8BEC8`) — not sky blue, not navy, not slate. A very specific, slightly faded, documentary-film blue.
- **Subject:** A guitarist figure shown in stroboscopic/multiple-exposure style — same person repeated 4–5 times in stages of motion, slightly offset. Creates a sense of movement without action.
- **Colour palette:** The blue + warm amber/gold (~`#C4913A`) of the figure + aged brown shadow tones. Three colours, all warm or warm-muted.
- **Composition:** Subject is small, centred-left, surrounded by enormous amount of blue negative space. The breathing room is the design.
- **Lesson:** Motion suggests story. The sense of "going somewhere" maps directly to the Bean Town travel-and-discovery narrative.

---

## Vulfpeck's custom typefaces (Vulf Mono + Vulf Sans)

Designed by James Edmondson / OH no Type Company. These are crucial to understanding why the Vulfpeck brand feels the way it does.

**Vulf Mono (2016):**
- Monospaced, inspired by the IBM Selectric typewriter's 12pt Light Italic setting
- All strokes have slightly concave edges — giving a "flex" that fights the usual rigidity of mono fonts
- Used on the Vulfpeck website — gives it "lo-fi warmth like ASCII art but with humanity"
- Feels: typewriter, archival, analog, slightly worn

**Vulf Sans (2019):**
- Based on Vulf Mono but proportionally spaced, 5 weights + italic
- Described as "the warmer feeling sans that will have you wondering, 'Is subtle funk even funkier?'"
- The designer wanted: "warmth, love, and humanity" built into the letterforms themselves
- Feels: humanistic sans but with typewriter DNA still visible

**For Bean Town:** Our Lora (serif) + DM Sans (humanistic sans) pairing already mirrors this combination structurally. The gap is in mono — we use system mono for labels, but a typewriter-warm mono (Courier Prime, Cutive Mono, or similar) could close the distance significantly for country codes and preparation labels.

---

## The 7 design principles extracted

### 1. Restraint as statement
1–2 elements on the canvas. Generous, intentional negative space. The empty space works as hard as the content. **Hill Climber is 95% white paper.**

→ Bean Town should resist filling space on edition cards and Instagram posts. The preparation name, the pairing, the wordmark — nothing else.

### 2. Warmth through analog imperfection
Typewriter fonts. Slightly faded film photography. Hand-drawn marks. Nothing feels freshly printed from a laser printer. **Vulf Mono fights the rigidity of its own format.**

→ Adam's logo must have this quality. If it looks too clean or too digital, redo it. The "barely controlled but brilliant" quality is the whole point. It should look like it was drawn by someone who knows exactly what they're doing.

### 3. Illustration over photography
When Vulfpeck use illustration (Hill Climber), it is extraordinarily precise linework — not decorative, not naive, not clip-art. It has the same craft level as their music. **The cover IS the music.**

→ Until Bean Town has original photography, commission line illustrations for each edition: the jebena pot, the café de olla clay pot, the pour-over kettle. These should have the Hill Climber energy — precise, hand-feeling, ink on paper.

### 4. Chromatic economy: 2–3 colours per piece
Hill Climber: 2 colours. Mr Finish Line era: 3. Never a rainbow, never a full-spectrum approach. Each piece is one background + one or two accents. **The constraint forces decision.**

→ Bean Town's full palette (7 colours) is for the system, not for any single piece. Instagram editions should use: espresso background + one accent colour per country. Mexico = terracotta. Ethiopia = ochre. Japan = olive. Consistent system, country differentiation through accent choice.

### 5. Type placement: extreme corners, very small
Hill Climber's band name and album title are in the top corners, tiny, tracked. Not centred, not large, not decorative. The type knows its place. **The illustration is the hero.**

→ Bean Town Instagram layout: country label tiny top-left (10–11px, tracked). Preparation name enormous (52–60px) centred. Wordmark tiny bottom-right (12px). Nothing else. Let the type hierarchy do the work.

### 6. Motion suggests story and place
The stroboscopic guitarist on Mr Finish Line says "going somewhere" without a map, a caption, or an explanation. The repeated figure implies journey. **The medium carries the message.**

→ Bean Town editions should feel in-motion. Carousel structure: the reader is travelling through a country with us. The visual metaphor should reinforce "we've been somewhere, we're bringing you back something."

### 7. Anti-trend at all times
Vulfpeck doesn't use whatever gradient or palette is trending on Behance this year. Their work feels slightly past — documentary, worn-in, archival. But it doesn't feel retro in a knowing way. It's just what they are. **Being yourself is the anti-trend.**

→ Bean Town's earthy palette is already anti-trend. The risk is deviation — adding a trendy sage green, a neo-brutalist colour block, a cool-toned accent. Don't. The olive, cream, espresso, ochre combination is the right call for exactly this reason.

---

## Palette comparison

| Vulfpeck | Hex | Bean Town equivalent | Hex | Match |
|---|---|---|---|---|
| Warm white | `#FAFAF8` | Cream | `#F2EDE3` | ✓ Strong |
| Warm ink | `#1C1C1A` | Espresso | `#2A1F14` | ✓ Strong |
| Dusty sky | `#A8BEC8` | — | — | ✗ Missing |
| Warm amber | `#C4913A` | Ochre | `#C8963E` | ✓ Very close |
| Aged gold | `#9B7030` | Terracotta (different) | `#B5501C` | ~ Partial |

**The gap:** Vulfpeck's dusty powder blue (`#A8BEC8`). Bean Town has no equivalent and shouldn't add it to the main palette — but when the map page is built, this tone (or something close: `#7A9BAA`) is the right choice for cartographic elements and ocean tiles. Use it nowhere else.

---

## Concrete recommendations

### Do immediately

1. **Add Courier Prime or Cutive Mono** to the font stack for country preparation labels in CSS:
   ```css
   --font-mono: 'Courier Prime', 'Cutive Mono', 'Courier New', monospace;
   ```
   Use for: country edition label badges, preparation codes, any small data-label text. Not for body copy.

2. **Lock the Instagram layout rule:** Country label 10px tracked · Preparation name 56px · Wordmark 12px · Nothing else. No decoration. Space does the work.

3. **Adam's logo brief addition:** Add to the brief — the logo should look like it was drawn in one pass, not built up. No digital cleanup. Slight baseline variation. Slightly uneven weight. The imperfection is the craft. Reference: the feeling of Vulf Mono characters, not their design.

### Do when you have budget

4. **Commission contour-line illustrations for each country edition.** Style reference: Hill Climber's topographic linework. Subject: the preparation vessel for each edition (clay pot for Mexico, jebena for Ethiopia, pour-over kettle for Japan). Fine lines, no fill, ink quality. These become the signature visual of each edition — used in Instagram carousels, Substack headers, and eventually the website.

5. **Add cartographic blue to the Canva brand kit** as a restricted-use swatch with a note: "Map page only. Never use in editorial content." `#7A9BAA`.

### Do never

- Add a gradient anywhere
- Use photography that looks like it was shot for a brand (stock or otherwise)
- Fill the entire canvas on an Instagram post
- Use DM Sans Bold (700)
- Add a colour not in the palette without updating both `CLAUDE.md` and `docs/brand-reference.md`

---

## The north star summary

> Vulfpeck look like they sound: warm, precise, unhurried, quietly extraordinary.
> Bean Town should look like it tastes: earthy, travelled, curious, made by hand.
> The gap between those two descriptions is smaller than it first appears.

---

*Source images: `Vulpeck Visual Inspiration/Vulpeck.png` (Hill Climber, Christa Rijneveld, 2018), `Vulpeck Visual Inspiration/album_cover.png` (Mr. Finish Line era)*
*Sources: [Vulf Mono — Font Review Journal](https://fontreviewjournal.com/vulf-mono/) · [Vulf Sans — Typographica](https://typographica.org/typeface-reviews/vulf-sans/) · [OH no Type Company](https://ohnotype.co/fonts/vulf) · [Fonts In Use — Vulfpeck](https://fontsinuse.com/tags/10358/vulfpeck) · [Vulfpeck discography — Wikipedia](https://en.wikipedia.org/wiki/Vulfpeck_discography)*
