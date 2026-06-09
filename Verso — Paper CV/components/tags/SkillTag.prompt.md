**SkillTag** — a typographic chip for skills, tools, and disciplines; use in clusters under a SectionHeader. Set `level` to show a printed-catalogue proficiency rating.

```jsx
<SkillTag>Hand composition</SkillTag>
<SkillTag accent level={5}>Letterpress</SkillTag>
<SkillTag variant="solid">Bookbinding</SkillTag>
```

Variants: `outline` (default, hairline border), `solid` (filled ink or accent), `ghost` (sunken paper). `accent` re-inks to the active press color. Keep labels short — one or two words.
