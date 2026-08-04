# More CSS Properties

| | |
|---|---|
| **Course** | Intermediate HTML and CSS |
| **Section** | Intermediate CSS Concepts |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-more-css-properties> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

A grab-bag of workhorse CSS properties: `background` (and its many sub-properties), `border` and `border-radius`, `box-shadow`, `overflow`, and `opacity`. None is conceptually deep, but they show up constantly, and knowing which property solves which visual problem saves a lot of searching.

## Key concepts

### background

`background` is a shorthand that bundles several longhand properties — colour, image, position, size, repeat, origin, clip, attachment. Because there are so many pieces, it is often clearer to write the individual properties:

```css
.hero {
  background-color: #223;
  background-image: url("texture.png");
  background-repeat: repeat;      /* tile the image; no-repeat to disable */
  background-size: cover;
  background-position: center;
}
```

Backgrounds can also stack multiple layers (comma-separated).

### border and border-radius

```css
.card {
  border: 2px solid #ccc;        /* width, style, colour */
  border-radius: 8px;            /* rounded corners */
}

.avatar {
  border-radius: 50%;            /* square element -> circle */
}
```

`border-radius` accepts per-corner values and can produce circles, pills, and blob shapes.

### box-shadow

```css
.raised {
  box-shadow: 0 2px 8px rgba(0 0 0 / 0.15);  /* x, y, blur, colour */
}
```

Shadows imply depth — which layer sits above another. Keep them subtle and light; heavy dark shadows look dated fast.

### overflow

Controls what happens when content is bigger than its box: `visible` (default), `hidden`, `scroll`, `auto`. The classic use is a fixed-height card whose inner list scrolls:

```css
.card-list {
  height: 300px;
  overflow: auto;   /* scrollbars only when needed */
}
```

### opacity

`opacity: 0.5` makes the whole element (children included) half-transparent; `1` is opaque, `0` invisible but still occupying space. Handy for hover transitions and layered effects.

## Common pitfalls

- Using the `background` shorthand and accidentally resetting sub-properties you set elsewhere — shorthands reset every longhand they cover to its default if omitted.
- Confusing `opacity` (fades the entire element and its children) with a transparent background colour like `rgba(...)`/`rgb(... / 0.5)` (fades only the background).
- Forgetting that `border` needs a style (`solid`, `dashed`…) — `border: 2px red` without a style draws nothing.
- Overdoing `box-shadow` — big, dark shadows on everything flattens the depth hierarchy the shadows were meant to create.

## Objectives — can you explain these?

- [ ] A set of frequently used CSS properties: background, borders, shadows, overflow, and opacity.

## Self-test

- Which property makes an element see-through?
- Which property makes a background image repeat/tile?
- Which property gives an element scrollbars when its content overflows?
- Which property draws a shadow behind an element?
- Which property rounds an element's corners?
- How do you turn a square element into a circle with `border-radius`?

## My notes

## Questions / to revisit
