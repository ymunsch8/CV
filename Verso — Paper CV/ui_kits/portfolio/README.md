# UI Kit — Portfolio Homepage

A personal landing page for a maker, built on the same paper system as the CV.
Wider and more editorial than the sheet: a sticky masthead, an asymmetric hero,
a three-up grid of works (tipped-in plates), press quotes, and a contact footer.

**File:** `index.html` (self-contained; root `styles.css` + Phosphor CDN).

### Sections
- **Sticky bar** — monogram + name, small-caps nav (Works · Press · About · CV).
- **Hero** — small-caps eyebrow, display headline, italic intro, two CTAs
  (primary + ghost), and a framed portrait *plate* (a tipped-in book illustration).
- **Selected Editions** — three work cards on alternating paper tones; each lifts
  3px on hover. Plates are static placeholders — drop in real photography.
- **Press** — two pull-quotes in display italic with a hanging mark.
- **Footer** — a double-rule call to action over a sunken panel with contact links.

### Design notes
- Plates use a hatched paper fill + a Phosphor `image` glyph as the empty state.
  Replace `.img` / `.plate .img` blocks with real `<img>` or an `<image-slot>`
  (mounted at project root) for user-fillable imagery.
- Links between surfaces are relative: the nav points at `../cv/` and `../contact/`.
- The whole page is inked oxblood by default; change the `ink-*` class on `<body>`.
