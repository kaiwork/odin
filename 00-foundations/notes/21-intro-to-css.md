# Intro to CSS

| | |
|---|---|
| **Course** | Foundations |
| **Section** | CSS Foundations |
| **Lesson** | <https://www.theodinproject.com/lessons/foundations-intro-to-css> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

CSS is what turns bare HTML into something styled: colors, fonts, sizes, spacing. This lesson covers the basic anatomy of a CSS rule, the most common selectors (type, class, ID, and combinations of them), and the three places CSS can live relative to your HTML. Selectors are the foundation everything else in CSS builds on.

## Key concepts

### Anatomy of a rule

A rule is a selector plus a declaration block. Each declaration is a `property: value` pair ending with a semicolon:

```css
p {
  color: red;
  font-size: 18px;
}
```

### Basic selectors

- **Universal**: `*` matches every element.
- **Type**: `div` matches every `<div>`.
- **Class**: `.alert` matches any element with `class="alert"`. Classes are reusable, and one element can hold several (space-separated in the HTML).
- **ID**: `#title` matches the element with `id="title"`. An ID should appear on only one element per page, and an element has at most one ID.

### Combining selectors

```css
/* Grouping: same declarations for both selectors */
.read, .unread {
  color: white;
}

/* Chaining: elements that have BOTH classes (no space) */
.subsection.header {
  color: red;
}

/* Chaining a class with an ID */
.primary#title {
  font-weight: bold;
}

/* Descendant combinator: .contents anywhere inside .ancestor (space) */
.ancestor .contents {
  background-color: yellow;
}
```

The whitespace matters: `.a .b` selects `.b` elements nested inside `.a`; `.a.b` selects elements carrying both classes.

### Three ways to add CSS

1. **External** — a separate `.css` file linked from the `<head>`. Keeps HTML and CSS apart and lets many pages share one stylesheet. Preferred.

   ```html
   <link rel="stylesheet" href="styles.css">
   ```

2. **Internal** — rules inside a `<style>` element in the `<head>`. Fine for single-page one-offs, but bloats the HTML file.
3. **Inline** — a `style` attribute on a single element, with no selector. Overrides the other two methods but doesn't scale and is best avoided.

   ```html
   <div style="color: white; background-color: black;">…</div>
   ```

### A few starter properties

`color` (text), `background-color`, `font-family`, `font-size`, `font-weight`, `text-align`, plus `height`/`width` (use `height: auto` with an explicit width on images to keep proportions).

## Common pitfalls

- Writing `.a.b` when you meant `.a .b` (or vice versa) — chaining and the descendant combinator differ only by a space but select completely different things.
- Forgetting the `.` or `#` prefix in the stylesheet: `class="alert"` in HTML is matched by `.alert` in CSS, not `alert`.
- Reusing the same ID on multiple elements — use a class when more than one element needs the style.
- Sprinkling inline styles everywhere; they're hard to override and hard to maintain. Keep styling in an external sheet.

## Objectives — can you explain these?

- [ ] How to style HTML elements using CSS
- [ ] How the `class` and `id` attributes work and differ
- [ ] How the various CSS selectors match elements

## Self-test

- Write out the selector syntax for a class and for an ID.
- How do you give one set of declarations to two different selectors at once?
- An element has `id="title"` and `class="primary"` — write a selector that requires both.
- What does putting a space between two selectors do?
- Name the three methods of attaching CSS to HTML.
- What are the trade-offs between those three methods?

## My notes

## Questions / to revisit
