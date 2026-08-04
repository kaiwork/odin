# WAI-ARIA

| | |
|---|---|
| **Course** | Advanced HTML and CSS |
| **Section** | Accessibility |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-wai-aria> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

ARIA is a set of HTML attributes that patch the accessibility gaps native HTML can't cover — extra roles, labels, and state information for assistive technologies. It changes only what gets *announced*, never how an element behaves, and misusing it makes things worse than no ARIA at all. The first rule of ARIA: prefer native HTML.

## Key concepts

### What ARIA cannot do

ARIA modifies the accessibility tree only. It does **not**:

- change an element's appearance,
- change its behaviour,
- make it focusable,
- add keyboard event handling.

If you give a `<div>` `role="button"`, you still owe it focusability and key handlers yourself — which is why native `<button>` wins.

### The five rules of ARIA

1. Use native HTML elements/attributes instead of ARIA wherever possible.
2. Don't change an element's native semantics unless you truly must.
3. Every interactive ARIA control must be usable with the keyboard.
4. Never put `role="presentation"` or `aria-hidden="true"` on a focusable element.
5. Interactive elements must have an accessible name.

### The accessibility tree

Browsers derive a second tree from the DOM containing only the information assistive technologies need. Two of its properties matter most here: the **accessible name** (what identifies the element when announced, e.g. a button's text) and the **description** (supplementary detail). ARIA attributes work by modifying nodes in this tree.

### The three labelling attributes

```html
<!-- aria-label: give a name directly (no visible text needed) -->
<button aria-label="Close menu">X</button>

<!-- aria-labelledby: name comes from other elements' text, by id -->
<h2 id="billing">Billing address</h2>
<input type="text" aria-labelledby="billing">

<!-- aria-describedby: supplementary description, by id -->
<input type="password" aria-describedby="pw-rules">
<span id="pw-rules">Must be at least 12 characters.</span>
```

- `aria-label` overrides any native label with the string you supply. It has no effect on plain `<div>`/`<span>` elements (no role to name).
- `aria-labelledby` overrides both native labels and `aria-label`; it concatenates the text of every referenced id, and the referenced elements can even be visually hidden.
- `aria-describedby` attaches extra descriptive text the same way, filling the description rather than the name.

### aria-hidden

`aria-hidden="true"` removes an element *and all its descendants* from the accessibility tree while leaving it visible on screen — useful for decorative icons inside labelled buttons. Never apply it to (or around) focusable elements: a keyboard user could land on something that announces nothing.

## Common pitfalls

- Reaching for ARIA when a native element already does the job — "no ARIA is better than bad ARIA."
- Adding `role="button"` to a div and forgetting the keyboard side — ARIA changed the announcement, not the behaviour.
- Setting `aria-hidden="true"` on a container that still holds focusable children — focus lands on invisible-to-AT elements.
- Expecting `aria-label` to work on a generic `<div>` or `<span>`.

## Objectives — can you explain these?

- [ ] State the purpose of WAI-ARIA
- [ ] List the things ARIA cannot do
- [ ] Recall the five rules of ARIA use
- [ ] Explain what the accessibility tree is
- [ ] Distinguish the three ARIA labelling attributes
- [ ] Explain what `aria-hidden` does

## Self-test

- What problem does WAI-ARIA exist to solve?
- Which four things can ARIA not change about an element?
- What are the five rules of ARIA?
- What is the accessibility tree?
- How do `aria-label`, `aria-labelledby`, and `aria-describedby` differ?
- What does `aria-hidden` do, and where must it never be used?

## My notes

## Questions / to revisit
