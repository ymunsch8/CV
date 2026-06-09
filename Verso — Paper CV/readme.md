# Verso — Paper CV Design System

> A warm, vintage-letterpress design system for presenting a CV, portfolio, and
> personal pages **on the web as if pressed onto paper**. Aged cream stock, ink-set
> serifs, hairline rules, and a subtle fibre grain.

Verso is a from-scratch brand (there is no prior codebase or Figma). It was
commissioned as: *"I want a paper design for my CV on web format."* The chosen
direction is **vintage letterpress** — warm textured stock, ink-pressed serifs,
slightly aged — with a **subtle grain**, an **all-serif** type system, and an
**oxblood** primary ink (with navy and forest as alternate presses).

The sample persona used throughout (Eleanor Hart, a master printer & bookbinder)
is illustrative only — swap in real content when consuming the system.

**Sources:** none external. All assets are generated in-project. Fonts are loaded
from Google Fonts (Cormorant Garamond + EB Garamond); see *Caveats*.

---

## Content Fundamentals

How Verso writes.

- **Voice — first person, warm, personable.** The CV speaks as *I*, not as a
  third-person dossier. *"For twenty years I have set metal type by hand."* It is
  proud but unshowy; it values craft and specificity over buzzwords.
- **Specific over generic.** Concrete nouns and numbers: *"Restored a 1923 Albion
  hand-press,"* not *"Experienced with equipment."* Achievements lead with a verb.
- **Casing.** Sentence case for everything readable. **Small caps** (real
  `font-variant: small-caps`, never UPPERCASE) carry section labels, eyebrows,
  button text, and metadata — the "engraved label" of a letterpress specimen book.
- **Figures.** Old-style (text) figures everywhere — dates, phone numbers — via
  `font-feature-settings: 'onum' 1`. They sit on the baseline like running text.
- **Punctuation.** Proper typography: en/em dashes (–, —), true quotes (" "),
  the section mark (§) as a divider flourish. The em-dash (—) is the bullet mark.
- **No emoji. No exclamation inflation.** Warmth comes from word choice and
  rhythm, not punctuation or icons-as-words.
- **Tone words:** considered, tactile, exacting, quiet confidence, craft-led.

---

## Visual Foundations

The look and feel, answered concretely.

- **Palette.** Warm aged paper (`--paper-0…3`, cream → buff) pressed with warm
  near-black ink (`--ink-900…300`). One accent ink at a time — **oxblood**
  (default), or **navy** / **forest** via `.ink-navy` / `.ink-forest` on a scope.
  No cool greys, no pure black, no pure white. Everything leans warm.
- **Type.** All serif. **Cormorant Garamond** (high-contrast display) for the name
  and headings; **EB Garamond** (old-style body) for everything else; the same
  family in small caps for labels. Italic standfirst lines introduce sections.
  Major-third scale on a 16px base. Generous `1.6` body leading, ~64ch measure.
- **Backgrounds.** A flat warm paper surface, never gradients-as-decoration. The
  only "gradient" is a barely-there radial vignette on the *desk* behind a sheet.
  A **subtle SVG fractal-noise grain** (`--grain-url`) sits at ~3.5% multiply on
  paper surfaces — fibre, not texture-for-its-own-sake.
- **The sheet.** Content floats on a sheet of stock: `.paper` gives it the grain,
  a soft warm multi-layer drop shadow (`--shadow-sheet`), and a 2px radius. The
  `.desk` class is the deeper paper field it rests on.
- **Borders & rules.** Hairline rules (`1px var(--rule)`) separate entries; a
  **double rule** marks stronger breaks; a centered **§** flourish divides
  sections. Rules do a lot of the structural work — boxes are used sparingly.
- **Corners.** Paper barely rounds: `0` or `2px` on cards; only **skill tags**
  use a full pill. No big rounded-rectangle cards.
- **Shadows.** Warm and soft, suggesting a sheet lifted off a desk — never glossy
  elevation or coloured glows. `--shadow-raise` for small lifts, `--shadow-sheet`
  for the page, `--shadow-press` (inset) for pressed states.
- **Cards.** Mostly a bordered or hairline-ruled region on the same stock — flat,
  with at most `--shadow-raise`. Callouts add a left accent edge (aside) or a
  full hairline border (note). Nothing has a coloured left-border-only gimmick.
- **Motion.** Restrained, "ink settling." `--ease-paper` (a gentle ease-out),
  120–420ms. Fades and small translates only — no bounce, no infinite loops.
  Buttons settle **down** 1.5px on press; links deepen colour and ink their
  underline on hover.
- **Hover / press.** Hover = deepen to `--accent-deep` or ink a border; never a
  lighten-to-white. Press = translate down + (optionally) inset shadow.
- **Imagery.** When present, treat photographs as warm-toned, slightly desaturated
  plates with a hairline frame — like tipped-in book illustrations. (Use
  `<image-slot>` or real photos; do not auto-generate.)
- **Transparency / blur.** Essentially none. This is opaque ink on opaque paper;
  no frosted glass, no backdrop blur.
- **Layout.** A centred single column (`--page-width` ≈ 800px sheet) for the CV;
  wider asymmetric two-column for the portfolio. Left-aligned text, ragged right.

---

## Iconography

- **Set:** [Phosphor Icons](https://phosphoricons.com) — used at the **light**
  weight for delicate UI/contact glyphs, **bold** inside buttons. The light weight
  reads as fine engraving, which suits the letterpress feel.
- **Why a substitution flag:** Verso has no native icon set, so Phosphor (light)
  was chosen as the house set. It is loaded from CDN
  (`https://unpkg.com/@phosphor-icons/web`); usage is `<i class="ph-light ph-envelope-simple"></i>`.
- **Usage:** sparingly — contact rows, button affordances, callout markers. Icons
  always pick up `--accent`. Never decorative icon-spam, never emoji, never
  coloured/duotone icons. The em-dash (—) and section mark (§) double as
  typographic "icons" for bullets and dividers.
- See `assets/iconography.md` for the working glyph list.

---

## Index / Manifest

**Root**
- `styles.css` — the single entry point consumers link. `@import`s only.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills-compatible entry for using Verso in Claude Code.

**`tokens/`** (all reachable from `styles.css`)
- `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `effects.css` · `base.css`

**`guidelines/`** — foundation specimen cards (Design System tab): Type, Colors,
Spacing, Brand.

**`components/`** — reusable React primitives (namespace `window.VersoPaperCV_8e5e2c`):
- `buttons/` — **Button** (primary / secondary / ghost · sizes · icons)
- `tags/` — **SkillTag** (outline / solid / ghost · proficiency level)
- `section/` — **SectionHeader** (small-caps label · ordinal · rule)
- `experience/` — **Experience** (CV timeline entry)
- `contact/` — **ContactLink** (inline link / bordered block)
- `callouts/` — **Callout** (note / pull-quote / aside)

**`ui_kits/`** — full-screen recreations:
- `cv/` — the CV / résumé sheet
- `portfolio/` — personal landing / portfolio homepage
- `contact/` — contact & about page
- `print_cv/` — print-ready (A4) CV

**`assets/`** — `iconography.md` and any logos/imagery.

---

## Caveats

- **Fonts load from Google Fonts CDN**, not bundled binaries — so the compiler
  reports *Fonts: (none)*. Rendering is correct everywhere. To ship offline,
  download the Cormorant Garamond + EB Garamond `.woff2` files and replace the
  `@import` in `tokens/fonts.css` with local `@font-face` rules.
- **Icons load from the Phosphor CDN** for the same reason.
