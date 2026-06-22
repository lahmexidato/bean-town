# Contributing to Bean Town

*A guide for Adam (and anyone else) to edit copy, update content, and keep the site clean — without needing to know code.*

---

## Editing copy — the safe zones

You can edit text directly in the HTML files. The copy lives between HTML tags. Everything inside `>` and `<` is safe to change.

**Example — changing a card description:**

```html
<!-- FIND this: -->
<p class="card__copy">
  Cinnamon, piloncillo, and a clay pot. Made slowly, drunk slowly,
  usually before anything else happens in the day.
</p>

<!-- CHANGE the text between the tags — leave the tags themselves alone: -->
<p class="card__copy">
  Your new text goes here.
</p>
```

**Rule:** Change what's between the tags. Never delete a tag or change `class="..."` unless you know what you're doing.

---

## Files to edit for common tasks

| Task | File | What to look for |
|---|---|---|
| Change homepage intro | `index.html` | `<p class="hero__intro">` |
| Change hero tagline | `index.html` | `<p class="hero__tagline">` |
| Update an edition card | `index.html` | `<article class="card">` blocks |
| Add a Substack link to a card | `index.html` | `coming soon →` → replace with link |
| Change about page bios | `about.html` | `<div class="founder">` blocks |
| Update manifesto text | `about.html` | `<section class="manifesto">` |
| Add Google Form | `contact.html` | Find `<!-- GOOGLE FORM IFRAME GOES HERE -->` |
| Update Instagram/Substack URLs | All `.html` files | Search for `href="#"` with a TODO comment above |

---

## Adding a new country edition card

Copy one of the existing cards in `index.html` and change the content:

```html
<article class="card">
  <p class="card__country">Vietnam</p>
  <h2 class="card__prep">Cà phê trứng</h2>
  <p class="card__pairing">+ bánh mì</p>
  <p class="card__copy">
    Egg yolk, condensed milk, and robusta espresso. Hanoi invented 
    something that shouldn't work and absolutely does.
  </p>
  <!-- Replace # with the Substack link when published -->
  <a href="#" class="card__link">read it →</a>
</article>
```

The grid handles 3 cards per row on desktop automatically. If you add a 4th, it'll wrap to a second row — that's fine.

---

## Updating the Substack URL everywhere

When you have the Substack URL, search all `.html` files for the comment:
```
<!-- TODO: Replace # with Substack URL once set up -->
```

Change the `href="#"` on the line below it to `href="https://your-substack-url.substack.com"`.

---

## What NOT to change

- `css/style.css` — unless you're confident with CSS
- `js/main.js` — leave it alone; it's just the menu toggle
- `vercel.json` — deployment config, don't touch
- Colour values anywhere — they must stay consistent with the brand

---

## Testing your changes

Open the HTML file directly in a browser (Chrome, Firefox, Safari — any). You'll see your changes immediately. No server, no build step needed.

To check mobile view: in Chrome, press `F12` (DevTools) → toggle device toolbar → set to iPhone 12 Pro (390px wide).

---

## Naming conventions

- Copy: Sentence case. Lowercase everywhere except proper nouns (Mexico, Japan, Substack, etc.)
- File names: lowercase, hyphens not underscores (`about.html` not `About.html`)
- Keep TODOs in HTML comments so future editors know what's pending

---

## Questions?

If something looks broken after an edit, undo it (Ctrl+Z / Cmd+Z) and check what changed. The site is simple by design — if something stops looking right, it's almost always a deleted tag.

Ask Alex or open a Claude Code session with the context: "I'm editing Bean Town. Read CLAUDE.md first."
