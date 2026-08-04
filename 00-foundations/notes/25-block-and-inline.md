# Block and Inline

| | |
|---|---|
| **Course** | Foundations |
| **Section** | CSS Foundations |
| **Lesson** | <https://www.theodinproject.com/lessons/foundations-block-and-inline> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Before any fancy layout tools, elements arrange themselves in "normal flow", and how each one behaves is governed by its `display` type. Block elements stack vertically and take the full available width; inline elements sit within a line of text. Knowing which is which — and what `inline-block`, `<div>`, and `<span>` are for — explains most "why is this element there?" confusion.

## Key concepts

### Normal flow

With no positioning or layout CSS applied, elements simply lay themselves out one after another in the order they appear in the HTML. That default arrangement is normal flow.

### Block elements

- Start on a **new line** and stack top-to-bottom.
- Stretch to fill the available horizontal space by default.
- Respect `width`, `height`, and vertical margin/padding fully.
- Defaults: `<div>`, `<p>`, `<h1>`–`<h6>`, `<ul>`, `<li>`, `<form>`, and most structural elements.

### Inline elements

- Flow **within** the surrounding text; they do not force line breaks.
- Sized by their content — `width` and `height` don't apply, and vertical padding/margin won't push other lines away (it can overlap them instead).
- Defaults: `<a>`, `<span>`, `<strong>`, `<em>`, `<button>` (inline-block in practice), images behave inline-ish too.
- Don't wrap block elements inside inline ones (e.g. no `<div>` inside an `<a>`'s text-level siblings without care) — generally, inline elements hold text and other inline content.

### Inline-block

`display: inline-block` is the hybrid: the element flows inline (no forced line break) but respects `width`, `height`, and full padding/margin like a block box. Historically used for laying out items side by side; nowadays flexbox usually does that job better.

```css
.badge {
  display: inline-block;
  width: 80px;
  padding: 4px 8px;
}
```

### Divs and spans

Both are *generic* containers with no semantic meaning and no styling of their own:

- `<div>` — a block-level container. Use it to group chunks of the page (a section, a card, a sidebar) so they can be styled or positioned together.
- `<span>` — an inline container. Use it to hook styles onto a fragment of text inside a line.

```html
<p>Status: <span class="highlight">active</span></p>
```

## Common pitfalls

- Setting `width` or `height` on an inline element and wondering why nothing happens — switch it to `inline-block` or `block` first.
- Reaching for a `<div>` when a semantic element (`<p>`, `<nav>`, `<button>`…) exists. Generic containers are a last resort, not a default.
- Expecting vertical margin/padding on inline elements to move surrounding lines — it doesn't.
- Confusing "block vs inline" (layout behaviour) with "important vs unimportant". Display type says nothing about meaning; it only controls flow.

## Objectives — can you explain these?

- [ ] What normal flow is
- [ ] How block and inline elements behave differently
- [ ] Which common elements default to block and which to inline
- [ ] What divs and spans are for

## Self-test

- What distinguishes a block element from an inline element?
- What does `inline-block` give you that plain `inline` doesn't?
- Is `<h1>` block or inline by default?
- Is `<button>` block or inline by default?
- Is `<div>` block or inline by default?
- Is `<span>` block or inline by default?

## My notes

## Questions / to revisit
