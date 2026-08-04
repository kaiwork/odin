# The Box Model

| | |
|---|---|
| **Course** | Foundations |
| **Section** | CSS Foundations |
| **Lesson** | <https://www.theodinproject.com/lessons/foundations-the-box-model> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Every element on a web page is a rectangular box, and layout is fundamentally about how those boxes size themselves and push against each other. The three layers around content — padding, border, margin — plus the `box-sizing` property determine an element's real footprint. This is arguably the most important mental model in all of CSS.

## Key concepts

### The layers, inside to outside

1. **Content** — the text, image, or child elements.
2. **Padding** — transparent space between the content and the border. Part of the element's visible background.
3. **Border** — the (optionally visible) edge around the padding.
4. **Margin** — transparent space *outside* the border, separating this box from neighbouring boxes.

```css
.card {
  padding: 16px;            /* space inside the border */
  border: 1px solid black;  /* the edge itself */
  margin: 24px;             /* space between this box and others */
}
```

Rule of thumb: use **padding** to add breathing room between an element's content and its border; use **margin** to add distance between separate elements. Negative margins (or removing margin entirely) can make elements overlap — padding can't do that.

### Standard vs alternative box model

- **Standard** (`box-sizing: content-box`, the default): `width` and `height` set the *content* box only. Padding and border are added on top, so a `width: 200px` box with `padding: 20px` and a `2px` border actually occupies 244px.
- **Alternative** (`box-sizing: border-box`): `width` and `height` set the whole visible box — content shrinks to make room for padding and border. A `width: 200px` box is 200px wide, full stop.

Most developers switch everything to the alternative model at the top of the stylesheet:

```css
* {
  box-sizing: border-box;
}
```

(Margin is never counted in the element's width under either model — it's space outside the box.)

### Margin collapsing

Vertical margins of adjacent elements don't add together; the larger of the two wins. Two stacked paragraphs with `margin: 20px` are separated by 20px, not 40px.

### Centering a block element horizontally

Give it a set width and auto horizontal margins:

```css
.container {
  width: 600px;
  margin: 0 auto;
}
```

## Common pitfalls

- Sizing surprises under the default model: adding padding or border makes the element bigger than the `width` you declared. Fix with `box-sizing: border-box` globally.
- Using padding to space two elements apart (or margin to space content from its own border) — each tool has one job; mixing them up makes layouts fragile.
- Expecting stacked vertical margins to sum. They collapse to the larger value.
- Forgetting that margin is transparent and outside the border — `background-color` fills padding but never margin.

## Objectives — can you explain these?

- [ ] What the box model is and what each layer represents
- [ ] How to control element size and spacing with `margin`, `padding`, and `border`

## Self-test

- Name the box-model layers in order from innermost to outermost.
- What does `box-sizing` change about how `width`/`height` are interpreted?
- How do the standard and alternative box models differ?
- To push two elements further apart, do you reach for `margin` or `padding`?
- To add space between an element's content and its border, `margin` or `padding`?
- Which of the two can make elements overlap?
- How do you apply the alternative box model everywhere at once?
- How do you center a block element horizontally?

## My notes

## Questions / to revisit
