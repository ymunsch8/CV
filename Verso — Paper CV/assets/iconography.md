# Iconography — Verso

Verso has no native icon set, so it adopts **[Phosphor Icons](https://phosphoricons.com)**
as the house set. The **light** weight is the default (fine, engraved, suits the
letterpress feel); **bold** is used inside filled buttons for presence.

## Loading

Per-weight stylesheets (render-blocking, reliable in screenshots and print):

```html
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css">
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/light/style.css">
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/bold/style.css">
```

Usage: `<i class="ph-light ph-envelope-simple"></i>`. Icons inherit `color`, and
in Verso are almost always set to `var(--accent)`.

> **Substitution flag:** Phosphor is a substitution for a (non-existent) native
> set. If you have a preferred icon library, swap the class prefix and the glyph
> names. Icons load from CDN; bundle them locally for offline use.

## Glyph list in use

| Purpose            | Glyph (`ph-…`)        | Weight |
|--------------------|-----------------------|--------|
| Email              | `envelope-simple`     | light  |
| Phone              | `phone`               | light  |
| Location           | `map-pin`             | light  |
| Website            | `globe-simple`        | light  |
| Instagram          | `instagram-logo`      | light  |
| GitHub             | `github-logo`         | light  |
| Image placeholder  | `image`               | light  |
| Availability note  | `calendar-blank`      | light  |
| Download / CTA     | `download-simple`     | bold   |
| Print              | `printer`             | bold   |
| Send               | `paper-plane-tilt`    | bold   |
| Back / forward     | `arrow-left` / `arrow-right` | bold |
| Open book (CTA)    | `book-open`           | bold   |

## Typographic "icons"

Two characters do icon duty in running text — keep using them instead of glyphs:

- **Em-dash `—`** — the bullet mark for every list (set in the accent ink).
- **Section mark `§`** — the centered divider flourish between major sections.

No emoji. No duotone or coloured icons. No icon ever appears without a clear
functional reason.
