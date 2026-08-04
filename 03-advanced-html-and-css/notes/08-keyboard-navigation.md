# Keyboard Navigation

| | |
|---|---|
| **Course** | Advanced HTML and CSS |
| **Section** | Accessibility |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-keyboard-navigation> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Plenty of users operate the web entirely from the keyboard — because of motor impairments, screen readers, or preference. That means every interactive element must be reachable and usable without a mouse, users must be able to *see* where focus is, and the order focus moves in must make sense.

## Key concepts

### Two requirements for interactive elements

Anything interactive must (1) be focusable and (2) respond to keyboard events. Semantic elements like `<button>` and `<a href>` give you both by default — a `<button>` is tabbable and fires on Enter and Space. A clickable `<div>` has neither; you would have to bolt on `tabindex="0"` and your own key handling, which is exactly why the previous lesson says to use the semantic element instead.

### Focus styles

Focus styles are the visible indicator (by default usually an outline ring) showing which element currently has keyboard focus. Removing them with `outline: none` because they "look ugly" leaves keyboard users navigating blind. The fix is to *replace*, not remove:

```css
button:focus {
  outline: 2px solid #2b6cb0;
  outline-offset: 2px;
  /* or any clearly visible custom treatment */
}
```

### Tab order

Pressing Tab moves focus through focusable elements in the order they appear in the HTML source. If CSS repositions things so the visual order no longer matches the source order, focus appears to jump around unpredictably. Keep source order aligned with visual order rather than papering over it with positive `tabindex` values.

### Hiding content properly

For content that is visually hidden until revealed (menus, drawers, modals), removing it from the tab order alone isn't enough — `tabindex="-1"` stops Tab from reaching it, but a screen reader can still announce it. Hide it fully with `display: none` or `visibility: hidden`, which removes it from both the tab order and assistive-technology output until you reveal it.

## Common pitfalls

- Building interactive widgets from non-semantic elements and forgetting keyboard support entirely — untestable with a mouse-only workflow, so actually Tab through your pages.
- `outline: none` / `:focus { outline: 0 }` with no replacement — the classic accessibility sin. Style focus, don't erase it.
- Scattering positive `tabindex` values to "fix" order — it creates a maintenance trap; fix the source order instead.
- Off-screen menus that are only moved out of view with CSS positioning — they remain in the tab order and the accessibility tree. Use `display: none`/`visibility: hidden` while closed.

## Objectives — can you explain these?

- [ ] Name the two things every interactive element must provide for keyboard users
- [ ] Explain focus styles and why removing them outright is harmful
- [ ] Describe what tab order is and what determines it
- [ ] Hide inactive content correctly from assistive technologies

## Self-test

- What two capabilities does an interactive element need for keyboard users?
- What are focus styles?
- Why must focus styles never be removed without a replacement?
- What is the tab order?
- What is the right way to hide currently-hidden content from assistive technologies?

## My notes

## Questions / to revisit
