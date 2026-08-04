# Frameworks and Preprocessors

| | |
|---|---|
| **Course** | Intermediate HTML and CSS |
| **Section** | Intermediate CSS Concepts |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-frameworks-and-preprocessors> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

CSS frameworks are bundles of pre-written CSS you use via ready-made classes; preprocessors are extended CSS-like languages that compile down to plain CSS. Both can speed up real-world work, and both are things employers mention — but they are only worth learning after your vanilla CSS is solid, because debugging either one is just debugging CSS.

## Key concepts

### CSS frameworks

- A framework packages pre-written CSS (and sometimes components) behind documented class names. Apply `class="btn"` and the framework's button styling appears — someone already wrote the rules.
- **Bootstrap, Foundation, Bulma**: component-style frameworks shipping assembled UI pieces (buttons, navbars, cards).
- **Tailwind**: a utility-first framework — tiny single-purpose classes (spacing, colour, flex utilities) you compose yourself instead of pre-built components.
- Trade-offs: fast to ship and consistent, but framework sites tend to look alike, overriding the framework's decisions can be awkward, and leaning on one early can mask gaps in your own CSS knowledge. Deep customization usually means understanding the underlying CSS anyway.

### CSS preprocessors

- A preprocessor (SASS, LESS, Stylus) is a superset language: you write in it, a compile step converts it to normal CSS the browser understands.
- They add conveniences plain CSS historically lacked — variables, nesting, mixins, loops and conditionals — which reduce repetition in large stylesheets.

```scss
/* SASS example: nesting + a variable */
$accent: #e94;

.card {
  border: 1px solid $accent;

  .title {
    color: $accent;
  }
}
```

- Native CSS has been absorbing these features: custom properties cover variables, and CSS nesting now exists in browsers, so the gap preprocessors fill is shrinking.

### The ordering advice

Learn vanilla CSS deeply first. Frameworks and preprocessors all sit on top of the same fundamentals; strong fundamentals make any of them quick to pick up, and they are what you fall back on when the abstraction leaks.

## Common pitfalls

- Adopting a framework before understanding CSS — you can assemble pages but cannot fix them when the framework's defaults collide with your design.
- Fighting a component framework with piles of override rules — if you are overriding most of it, the framework is costing more than it saves.
- Assuming you need a preprocessor for variables or nesting — modern native CSS may already cover your use case.
- Forgetting that preprocessor output is just CSS — browser devtools show the compiled result, so you still debug in CSS terms.

## Objectives — can you explain these?

- [ ] What a CSS framework is.
- [ ] Some of the well-known frameworks.
- [ ] What a CSS preprocessor is.
- [ ] Some of the well-known preprocessors.

## Self-test

- What are CSS frameworks, and how do you use one?
- What are CSS preprocessors, and how do they reach the browser?

## My notes

## Questions / to revisit
