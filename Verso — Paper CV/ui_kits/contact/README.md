# UI Kit — Contact / About Page

A two-column "about the printer" page: a first-person bio with a signature on the
left, and a portrait plate, contact blocks, and a *note-to-the-press* form on the
right.

**File:** `index.html` (self-contained; root `styles.css` + Phosphor CDN).

### Sections
- **Bar** — monogram + name, and a small-caps "Back to work" link to the portfolio.
- **Bio** — eyebrow, display headline, an italic standfirst, two body paragraphs,
  and a display-italic signature in the accent ink.
- **Contact column** — a portrait plate, bordered `ContactLink`-style blocks
  (email / studio / Instagram), and a short message form.
- **Form** — name + note fields with paper inputs (accent focus ring) and a
  *Send to the press* button. Submitting is cosmetic: it resets and reveals an
  italic confirmation line.

### Design notes
- Inputs follow the paper system: warm raised fill, hairline border, 2px radius,
  accent focus border — no heavy form chrome.
- The form does not post anywhere; wire it to a real endpoint when productionising.
