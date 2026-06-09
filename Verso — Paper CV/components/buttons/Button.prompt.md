**Button** — the pressed-ink action for Verso; use for any CTA, especially the résumé download. Renders an `<a>` when `href` is set, otherwise a `<button>`.

```jsx
<Button variant="primary" size="lg" icon="download-simple" href="/cv.pdf">
  Download CV
</Button>
```

Variants: `primary` (filled accent ink), `secondary` (ink-bordered paper), `ghost` (quiet inline). Sizes: `sm` `md` `lg`. Icons are Phosphor glyph names (load `@phosphor-icons/web`). Press settles the button down 1.5px; primary darkens to `--accent-deep` on hover. Re-ink the whole button by setting `.ink-navy` / `.ink-forest` on an ancestor.
