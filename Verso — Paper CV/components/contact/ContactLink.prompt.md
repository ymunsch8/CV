**ContactLink** — an icon + label for email, phone, location, or a social profile; use in a row in the CV header or a column on a contact page. Icons are Phosphor glyph names.

```jsx
<ContactLink icon="envelope-simple" value="eleanor@verso.press" href="mailto:eleanor@verso.press" />
<ContactLink variant="block" icon="map-pin" label="Studio" value="Gloucestershire, UK" />
```

`inline` is a quiet text link with a leading glyph; `block` is a bordered row with a small-caps label over the value (hover inks the border). Requires the Phosphor web font on the page.
