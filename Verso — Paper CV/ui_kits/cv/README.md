# UI Kit — CV / Résumé Sheet

The flagship Verso surface: a single sheet of warm stock, floating on a desk,
holding a first-person CV. This is the canonical "paper CV on the web."

**File:** `index.html` (self-contained; links the root `styles.css` + Phosphor CDN).

### Anatomy
- **Control bar** (outside the sheet): an ink-press switcher (oxblood / navy /
  forest — toggles the `.ink-*` class on the page scope) and a *Download CV*
  button that calls `window.print()`.
- **Masthead:** display-serif name, italic role line, and an oxblood monogram tile.
  A double rule closes the masthead.
- **Two-column body:** wide main column (Profile → Experience → Education) and a
  narrow rail (Contact, Craft tags, Languages, an Availability note).
- **Colophon:** an italic footer in the manner of a printed book's last page.

### Design notes
- Mirrors the React primitives — `SectionHeader`, `Experience`, `SkillTag`,
  `ContactLink`, `Callout` — in plain HTML so the page is self-contained,
  print-friendly, and directly editable. Swap in the React components when
  building inside a consuming app.
- Entries are separated by hairline rules, not boxes. The em-dash is the bullet.
- Dates use old-style figures (`'onum'`).

### Make it yours
Replace the persona (Eleanor Hart, master printer) with real content. The
monogram tile reads the two initials. The default press is oxblood — set
`class="… ink-navy"` on `#root` to change it permanently.
