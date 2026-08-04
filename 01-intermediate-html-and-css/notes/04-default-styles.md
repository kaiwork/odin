# Default Styles

| | |
|---|---|
| **Course** | Intermediate HTML and CSS |
| **Section** | Intermediate CSS Concepts |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-default-styles> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Every browser ships a user-agent stylesheet that gives unstyled HTML its look: big bold headings, blue underlined links, default margins and padding. These defaults differ slightly between browsers, which is why the same page can render inconsistently. A CSS reset is a small stylesheet you load first to strip or normalize those defaults, giving you a predictable baseline.

## Key concepts

### User-agent stylesheets

- The reason a bare `<h1>` is large and bold, `<a>` is blue and underlined, and `<body>` has a margin is the browser's built-in user-agent stylesheet — not magic.
- Each browser engine writes its own, so defaults (especially margins, padding, form-control styling) are not identical across Chrome, Firefox, and Safari.
- Your own CSS wins over user-agent rules in the cascade, so anything you set explicitly overrides the default.

### CSS resets

A reset is just ordinary CSS placed before your own styles. Resets range from nuclear to gentle:

```css
/* The classic "hard reset" idea */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

- **Hard resets** zero out nearly everything so you style from scratch.
- **Normalizers** (e.g. Normalize.css) keep useful defaults but iron out cross-browser differences.
- **Modern opinionated resets** (Josh Comeau's reset, Eric Meyer's reset, etc.) mix both: sensible `box-sizing`, image defaults like `max-width: 100%`, improved `line-height`, and so on.

### Do you need one?

No — resets are optional and a matter of taste. Because author styles override defaults anyway, a reset mostly saves you from repeatedly fighting the same default margins and inconsistencies. Many developers keep a personal reset they paste into every project; others use a published one, or none at all. You can also edit a published reset — it is plain CSS, not a black box.

## Common pitfalls

- Blaming your own CSS for mystery spacing that actually comes from user-agent margins (e.g. on `<body>`, headings, `<ul>`).
- Applying `* { margin: 0; padding: 0; }` and then wondering why lists lost their bullets' indentation and headings their rhythm — a hard reset means rebuilding those decisions yourself.
- Loading the reset after your own styles — order matters in the cascade when specificity ties; the reset should come first.
- Treating a popular reset as mandatory or untouchable — it is a starting point you are free to adapt.

## Objectives — can you explain these?

- [ ] What default browser (user-agent) styles are and where they come from.
- [ ] How a CSS reset removes or normalizes those defaults.

## Self-test

- What problems does a CSS reset solve — why reach for one?
- Is a reset ever required, or always optional?

## My notes

## Questions / to revisit
