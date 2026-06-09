**SectionHeader** — opens each section of a CV or page with an engraved small-caps label and a hairline rule. Use once per section.

```jsx
<SectionHeader ordinal="01" label="Experience" />
<SectionHeader label="Selected Works" title="Things I have set in type" rule={false} />
```

`label` is required (small-caps eyebrow). `ordinal` prints in the accent ink. `title` adds a display heading below. `rule` (default true) stretches a hairline to the row's end.
