# Advanced Selectors

| | |
|---|---|
| **Course** | Intermediate HTML and CSS |
| **Section** | Intermediate CSS Concepts |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-advanced-selectors> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Beyond type, class, and ID selectors, CSS can target elements by their relationship to others (combinators), their state or position (pseudo-classes), parts of them that don't exist in the HTML (pseudo-elements), and their attributes. These selectors let you style precisely without littering the markup with extra classes.

## Key concepts

### Combinators

```css
main > p   { }   /* child: p that is a DIRECT child of main */
main p     { }   /* descendant: p anywhere inside main */
h2 + p     { }   /* adjacent sibling: the p immediately after an h2 */
h2 ~ p     { }   /* general sibling: every p after an h2, same parent */
```

### Pseudo-classes (`:` — one colon)

Select elements based on state or structural position; they act like classes the browser applies for you.

- **Dynamic/state:** `:hover` (pointer over it), `:active` (being clicked), `:focus` (has keyboard focus), `:link` / `:visited` for anchors.
- **Structural:** `:first-child`, `:last-child`, `:only-child`, `:empty`, and the flexible `:nth-child()`:

```css
li:nth-child(odd)    { }  /* 1st, 3rd, 5th… — same as :nth-child(2n+1) */
li:nth-child(3)      { }  /* exactly the third child */
li:nth-child(3n)     { }  /* every third child */
```

- `:root` matches the document root (`<html>`) — the usual home for global custom properties.

### Pseudo-elements (`::` — two colons)

Style parts of an element that are not separate nodes in the HTML:

- `::first-letter`, `::first-line` — typographic effects.
- `::selection` — the highlight when text is selected.
- `::marker` — a list item's bullet or number.
- `::before` / `::after` — generated content inserted at the start/end of an element (needs a `content` property).

For specificity: pseudo-classes count like classes; pseudo-elements count like type selectors.

### Attribute selectors

```css
[src]              { }  /* has the attribute at all */
input[type="text"] { }  /* exact value */
[class^="thunder"] { }  /* value starts with */
[src$=".jpg"]      { }  /* value ends with */
[for*="ill"]       { }  /* value contains */
```

## Common pitfalls

- Mixing up `>` (direct children only) with the space combinator (all descendants) — the space is much broader than people expect.
- Thinking `div:first-child` means "the first child *of* the div" — it actually selects a div that *is* the first child of its parent.
- Writing `:before`/`:after` versus `::before`/`::after` inconsistently — browsers accept single-colon for legacy reasons, but two colons is the correct pseudo-element syntax; pick one convention.
- Forgetting `content: ""` on `::before`/`::after` — without it the pseudo-element does not render.

## Objectives — can you explain these?

- [ ] How parent, child, and sibling combinators work.
- [ ] The difference between pseudo-classes and pseudo-elements.
- [ ] The most common/useful pseudo-classes and pseudo-elements.
- [ ] The ways to select elements by attribute, or by part of an attribute's value.

## Self-test

- How do the child combinator and the descendant combinator differ?
- How does pseudo-class syntax differ from pseudo-element syntax?
- Do pseudo-classes correspond to anything in the HTML? Do pseudo-elements?
- Give two selectors that pick every second child starting from the first.
- What do `div:first-child` and `div:last-child` each match?
- Which selector styles a button under the cursor? One actively being clicked?
- How would you select all inputs whose type is text?
- How would you select every element whose class starts with `thunder`?

## My notes

## Questions / to revisit
