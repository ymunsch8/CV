# UI Kit — Print-Ready CV (A4)

A single-page A4 résumé tuned for paper and PDF. Same content and voice as the
on-screen CV, recomposed at print density so it fills exactly one sheet.

**File:** `index.html` (self-contained; root `styles.css` + Phosphor CDN).

### What's different from the screen CV
- Fixed **A4 canvas** (794 × 1123px @96dpi) with `@page { size: A4; margin: 0 }`.
- A slightly brighter stock (`#fdfaf2`) and tighter type scale so three jobs,
  education, skills, languages, and affiliations all fit above the fold.
- A **Print / Save as PDF** button (`window.print()`); the toolbar and shadow are
  hidden in print, and `print-color-adjust: exact` keeps the oxblood accents.
- Header puts contact details top-right under a heavy rule — classic CV masthead.

### Use
Open and press the button (or ⌘/Ctrl-P) → *Save as PDF*. Edit the markup directly
to swap in real content; everything is plain HTML driven by the token CSS.

### Note
ATS-style parsers prefer plain layouts; this sheet is designed for a *human*
reader and a beautiful printed/PDF artifact, not keyword scraping.
