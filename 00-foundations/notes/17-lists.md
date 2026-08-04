# Lists

| | |
|---|---|
| **Course** | Foundations |
| **Section** | HTML Foundations |
| **Lesson** | <https://www.theodinproject.com/lessons/foundations-lists> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

A short lesson with two takeaways: `<ul>` for bulleted lists where order doesn't matter, `<ol>` for numbered lists where it does — with every item in either kind wrapped in `<li>`.

## Key concepts

### Unordered lists — `<ul>`

For collections where sequence is irrelevant (a shopping list, navigation links). Items render with bullet points:

```html
<ul>
  <li>Milk</li>
  <li>Bread</li>
  <li>Eggs</li>
</ul>
```

### Ordered lists — `<ol>`

For sequences where position carries meaning (recipe steps, rankings, instructions). Items are numbered automatically:

```html
<ol>
  <li>Preheat the oven.</li>
  <li>Mix the batter.</li>
  <li>Bake for 25 minutes.</li>
</ol>
```

The browser generates the numbers — you never type `1.`, `2.` yourself, and the numbering stays correct when you reorder or insert items.

### List items — `<li>`

`<li>` is the building block shared by both list types. Only `<li>` elements belong as direct children of a `<ul>` or `<ol>`; the `<li>` itself can then contain other content (text, links, even nested lists).

## Common pitfalls

- Faking lists with paragraphs and typed-out bullets or numbers — you lose semantics, accessibility and automatic renumbering.
- Placing text or other elements directly inside `<ul>`/`<ol>` without an `<li>` wrapper.
- Using `<ol>` when order is meaningless (or `<ul>` for genuine step-by-step sequences) — pick by meaning, not by which marker looks nicer.

## Objectives — can you explain these?

- [ ] Create an unordered list.
- [ ] Create an ordered list.

## Self-test

- Which element creates a bulleted (unordered) list?
- Which element creates a numbered (ordered) list?
- Which element wraps the individual items in both kinds of list?

## My notes

## Questions / to revisit
