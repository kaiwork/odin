# Media Queries

| | |
|---|---|
| **Course** | Advanced HTML and CSS |
| **Section** | Responsive Design |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-media-queries> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

When natural flexibility isn't enough and the layout genuinely needs to *change* at certain sizes, media queries apply CSS conditionally based on viewport width (among other things). Container queries do the same based on a parent container's size instead of the whole viewport. Used sparingly at sensible breakpoints, they complete the responsive toolkit.

## Key concepts

### Syntax

```css
body {
  margin: 24px;
}

@media (max-width: 600px) {
  body {
    margin: 8px;
  }
}
```

Rules inside the `@media` block apply only while the condition holds — here, viewports 600px wide or narrower get the smaller margin, and it changes live as the window resizes.

- `max-width: X` — matches viewports **at or below** X (style desktop first, override downward).
- `min-width: X` — matches viewports **at or above** X (style mobile first, override upward).

Multiple conditions combine with `and`, and you can have any number of `@media` blocks.

### Breakpoints

There's no official list of breakpoints. Rough reality: phones sit below ~500px, tablets around 500–1000px, desktops above 1000px. But the better approach is to resize your actual design and add a breakpoint where *it* breaks — many simple layouts need exactly one, somewhere in the 500–600px range where multi-column arrangements collapse to a single column.

### Other media types: print

The condition can target output type, not just width:

```css
@media print {
  nav { display: none; }
  body { color: black; background: white; }
}
```

Handy for stripping navigation and forcing printable colours on document-like pages.

### Container queries

Media queries only see the viewport. A card component, though, might sit in a wide main column on one page and a narrow sidebar on another — same viewport, different available space. Container queries let a component respond to its **container's** size: mark an ancestor as a container (`container-type: inline-size`), then write `@container` rules against it.

```css
.sidebar {
  container-type: inline-size;
}

@container (max-width: 400px) {
  .card { flex-direction: column; }
}
```

This makes components self-contained and reusable across differently-sized contexts.

## Common pitfalls

- Writing a media query for every device you can name — dozens of breakpoints become unmaintainable. Add breakpoints where your design needs them, usually very few.
- Mixing `min-width` and `max-width` philosophies haphazardly, causing overlapping or conflicting ranges — pick one direction and stay consistent.
- Using media queries to patch a layout that fixed widths broke — restore natural responsiveness first; queries are the last resort, not the first.
- Reaching for a viewport media query when the component actually depends on its parent's width — that's a container-query problem.

## Objectives — can you explain these?

- [ ] Apply styles conditionally with media queries
- [ ] Explain container queries and when to use them

## Self-test

- How would you write a media query that gives your site a mobile layout?
- What distinguishes `max-width` from `min-width` in a media query condition?
- What's the difference between a media query and a container query?

## My notes

## Questions / to revisit
