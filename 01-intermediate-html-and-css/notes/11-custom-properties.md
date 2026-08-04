# Custom Properties

| | |
|---|---|
| **Course** | Intermediate HTML and CSS |
| **Section** | Intermediate CSS Concepts |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-custom-properties> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Custom properties ("CSS variables") let you name a value once — `--color-error: red` — and reference it anywhere with `var()`. Change the definition and every reference updates, which makes palettes, spacing scales, and especially dark/light theming dramatically easier to maintain.

## Key concepts

### Declaring and using

A custom property name starts with two hyphens and is typically kebab-case. You read it back with the `var()` function:

```css
.error-modal {
  --color-error-text: red;
  --modal-border: 1px solid black;

  color: var(--color-error-text);
  border: var(--modal-border);
}
```

Custom properties can hold any value — colours, lengths, whole shorthand values, even `calc()` expressions.

### Fallback values

`var()` accepts a second argument used when the property is not defined:

```css
.fallback {
  background-color: var(--undeclared-color, orange);
}
```

The fallback can itself contain another `var()`.

### Scope

A custom property is visible to the selector it is declared in and to that element's descendants — not to siblings or ancestors. Declaring on a `.cool-div` means only elements inside it can use the value.

### `:root` for global scope

Declare on `:root` (the `<html>` element, with class-level specificity) and every element in the document can read it:

```css
:root {
  --main-color: #005ea5;
}
button { background: var(--main-color); }
```

### Theming

Two patterns:

1. **Class toggle** — define one set of values under `:root.dark` and another under `:root.light` (or just `:root`), then swap the class with JavaScript.
2. **OS preference** — use the `prefers-color-scheme` media query so the site follows the user's system setting:

```css
:root {
  --background: white;
  --text: black;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #121212;
    --text: #eee;
  }
}
```

The media query accepts only `dark` and `light`; browsers default to `light` when no preference is set.

## Common pitfalls

- Forgetting the `var()` wrapper — `color: --my-color` is invalid; it must be `color: var(--my-color)`.
- Declaring a variable in one component and expecting a sibling component to see it — scope flows down to descendants only; use `:root` for shared values.
- Relying solely on `prefers-color-scheme` with no manual toggle — some users want the site theme to differ from their OS theme.
- Typos in property names fail silently — the declaration just falls back (or becomes invalid), with no error to point at. Fallback values in `var()` help.

## Objectives — can you explain these?

- [ ] How to declare a custom property.
- [ ] How to use a custom property inside a rule.
- [ ] How custom-property scope works.
- [ ] What the `:root` selector is for.
- [ ] How media queries (specifically `prefers-color-scheme`) enable theming.

## Self-test

- How would you declare a custom property named `text-color`?
- How would you read a custom property named `background-color`?
- Where do you declare a custom property so every selector can use it?
- Where do you declare custom properties so the user's OS/browser theme preference is respected?

## My notes

## Questions / to revisit
