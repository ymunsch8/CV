**Experience** — a single résumé/CV timeline entry; stack several under a `SectionHeader` to build the Experience section. Hairline rule separates entries.

```jsx
<Experience
  role="Master Printer"
  org="The Whittington Press"
  dates="2014 – Present"
  location="Gloucestershire"
  summary="Stewarding a working letterpress studio and its archive of metal type."
  bullets={[
    "Set and printed twelve limited editions, each under 300 copies.",
    "Restored a 1923 Albion hand-press to full working order.",
  ]}
  tags={["Composition", "Bookbinding", "Type design"]}
/>
```

Only `role` is required. `orgHref` turns the organisation into an accent link. Dates use old-style figures automatically.
