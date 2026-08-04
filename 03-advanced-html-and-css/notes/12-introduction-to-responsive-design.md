# Introduction to Responsive Design

| | |
|---|---|
| **Course** | Advanced HTML and CSS |
| **Section** | Responsive Design |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-introduction-to-responsive-design> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

"Responsive design" is the umbrella term for the techniques that let one website work well at any screen size — phone, laptop, ultrawide monitor. Since smartphones became the dominant way people browse, supporting a wide range of viewports is a baseline requirement, not a nice-to-have. This short lesson sets the scope for the section.

## Key concepts

### What it is (and isn't)

Responsive design is not a separate mobile site and not a single CSS feature. It's a set of implementation techniques — flexible layouts, sensible sizing habits, responsive images, media queries — that let the same HTML adapt its presentation to the space available. The word "design" here is about engineering the layout's behaviour, not visual styling taste.

### Why it's mandatory

Before 2007, essentially everyone browsed on monitors of broadly similar proportions. The iPhone changed that, and today traffic arrives from tiny phones, tablets, laptops, TVs, and very wide desktop monitors. A site that only looks right at one width is broken for a large share of its users.

### The practical range

- **Lower bound: ~320px CSS width.** That covers the smallest phones still in wide use (e.g. iPhone SE-class devices). Designing below that is rarely worth it.
- **Upper bound: no fixed limit.** You can't predict how wide a monitor will be, so the standard tactic is to cap the content with a `max-width` and centre it — the layout then looks intentional on any resolution beyond that cap.

```css
.wrapper {
  max-width: 960px;
  margin: 0 auto;
}
```

### What's coming in this section

The following lessons break responsiveness into: habits that make layouts flexible by default (natural responsiveness), making images scale and swap correctly, and media queries for the cases where the layout genuinely must change at certain widths.

## Common pitfalls

- Designing only at your own monitor's width and checking mobile as an afterthought — resize constantly while developing.
- Chasing exact device dimensions ("iPhone 15 width") — devices are too varied; design for a continuous range from ~320px upward.
- Letting content stretch edge-to-edge on huge monitors instead of capping line lengths with a `max-width`.

## Objectives — can you explain these?

- [ ] Explain what responsive design means and why it matters

## Self-test

- What is responsive design?

## My notes

## Questions / to revisit
