# Semantic HTML

| | |
|---|---|
| **Course** | Advanced HTML and CSS |
| **Section** | Accessibility |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-semantic-html> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

`<div>` and `<span>` say nothing about what they contain, so assistive technologies can't announce them meaningfully. Using elements that carry meaning — buttons, labels, lists, tables, landmarks — gives screen-reader users the same context sighted users get visually, largely for free. This is the highest-leverage accessibility habit there is.

## Key concepts

### Why semantics matter

A screen reader announcing a clickable `<div>Rock</div>` says only "Rock" — no hint that it can be activated. The same content as `<button>Rock</button>` is announced with its role ("button"), is keyboard-focusable, and responds to Enter/Space, all with zero extra work. Semantics provide **role and context**, and native elements bring keyboard behaviour along with them.

### Reach for the right element

```html
<!-- Clickable things -->
<button type="button">Rock</button>

<!-- Labelled inputs: either link by id... -->
<label for="name">Name</label>
<input type="text" id="name">

<!-- ...or wrap the input -->
<label>Name <input type="text"></label>
```

- Use specific input types (`type="email"`, `type="tel"`) — they improve announcements and pull up matching mobile keyboards.
- Use `<ol>`, `<ul>`, or `<dl>` for lists — screen readers announce them as lists and report how many items they hold.
- Use `<table>` (with proper header markup) for tabular data so cell/header relationships are navigable.

### Landmarks

Seven elements define landmark regions that screen-reader users can jump between directly, instead of walking the whole page:

`<aside>`, `<footer>`, `<form>`, `<header>`, `<main>`, `<nav>`, `<section>`

Landmarks plus a sound heading hierarchy (`<h1>`–`<h6>`) are the primary ways screen-reader users skim and navigate a page.

## Common pitfalls

- Building interactive controls out of `<div>`/`<span>` plus a click handler — no role, no focus, no keyboard support. Use `<button>` or `<a>`.
- Placeholder text instead of a `<label>` — placeholders are not reliable accessible names and vanish once the user types. Always associate a real label.
- Choosing headings or list markup for their default look (or faking lists with dashes) — pick elements for meaning and restyle with CSS.
- Wrapping everything in `<section>` without thinking — landmarks only help if they map to the page's real regions.

## Objectives — can you explain these?

- [ ] Explain why semantic HTML matters for accessibility
- [ ] Name the seven elements that create page landmarks

## Self-test

- Why does semantic markup make a page more accessible?
- List the seven landmark-defining HTML elements.

## My notes

## Questions / to revisit
