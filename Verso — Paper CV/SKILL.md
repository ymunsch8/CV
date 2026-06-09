---
name: verso-design
description: Use this skill to generate well-branded interfaces and assets for Verso — a vintage-letterpress "paper CV" design system (warm aged stock, ink-set serifs, oxblood/navy/forest presses) — either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping CVs, portfolios, and personal pages.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy
assets out and create static HTML files for the user to view. If working on
production code, you can copy assets and read the rules here to become an expert
in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they
want to build or design, ask some questions, and act as an expert designer who
outputs HTML artifacts _or_ production code, depending on the need.

## Fast orientation

- **Tokens / entry point:** link `styles.css` (it `@import`s `tokens/*.css`). Use
  the CSS custom properties — never hard-code hexes. Re-ink anything by adding
  `.ink-navy` / `.ink-forest` (default is `.ink-oxblood`) to a scope.
- **Type:** all serif — `--font-display` (Cormorant Garamond) for the name and
  headings, `--font-serif` (EB Garamond) for body, small caps for labels.
- **Components:** React primitives under `components/` — `Button`, `SkillTag`,
  `SectionHeader`, `Experience`, `ContactLink`, `Callout`. Each has a `.d.ts`,
  a `.prompt.md` (read it for usage), and a card HTML. Consume from
  `window.VersoPaperCV_8e5e2c` after loading `_ds_bundle.js`.
- **UI kits:** full pages under `ui_kits/` — `cv/`, `portfolio/`, `contact/`,
  `print_cv/`. These are self-contained vanilla HTML you can copy and adapt.
- **Icons:** Phosphor (light default, bold in buttons) — see `assets/iconography.md`.

## House rules (short version)

- Warm everything: aged cream paper, warm near-black ink, one accent at a time.
- Hairline rules and the em-dash do the structural work; avoid boxes and big
  rounding (paper barely rounds; only skill tags are pills).
- Real small caps for labels/eyebrows/buttons — never UPPERCASE.
- Old-style figures for dates. True dashes and quotes. No emoji.
- Soft warm shadows, the subtle grain, restrained "ink-settling" motion.
- First-person, warm, specific copy.

See `readme.md` for the full Content Fundamentals, Visual Foundations, and
Iconography sections.
