# Inspecting HTML and CSS

| | |
|---|---|
| **Course** | Foundations |
| **Section** | CSS Foundations |
| **Lesson** | <https://www.theodinproject.com/lessons/foundations-inspecting-html-and-css> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Browser developer tools let you look at any page's live HTML and CSS, see exactly which rules apply to an element, and edit styles on the fly without touching source files. This is the single most important debugging skill for front-end work — you'll use the inspector constantly from here on.

## Key concepts

### Opening DevTools

In Chrome (other browsers are similar):

- Right-click anywhere on a page and choose **Inspect**, or
- Press **F12** (or Ctrl+Shift+C / Cmd+Option+C to jump straight to element selection).

The **Elements** panel shows the live DOM — the browser's current representation of the page, which may differ from the original HTML source.

### Selecting elements

Two main ways:

- Click through the node tree in the Elements panel, expanding nested elements with the arrows.
- Click the **element selection icon** (cursor-in-a-box, top-left of DevTools), then hover and click the element on the page itself. Hovering highlights elements and shows a tooltip with tag, classes, and dimensions.

### Reading the Styles pane

With an element selected, the **Styles** pane lists every rule that matches it, in order of precedence. Key detail: a declaration shown with a **strikethrough** has been overridden by another rule that won the cascade — the crossed-out value is not being applied.

### Editing styles live

In the Styles pane you can:

- Toggle any declaration on/off with its checkbox.
- Click a property or value to edit it, or add brand-new declarations to a rule.
- Changes render immediately on the page — no save, no reload.

These edits are temporary: refresh the page and they're gone. That makes DevTools ideal for experimenting ("what if this margin were 24px?") before committing the change to your actual stylesheet.

## Common pitfalls

- Forgetting that DevTools edits vanish on refresh — copy any change you like into your CSS file before reloading.
- Ignoring struck-through declarations while wondering why a style "isn't working". The strikethrough is telling you exactly which rule lost the cascade.
- Editing the wrong element because a parent or child was selected instead — use the element picker and check the highlighted region on the page.
- Only using DevTools when something is broken. It's just as useful for learning: inspect sites you like and see how their layouts are built.

## Objectives — can you explain these?

- [ ] How to open the browser's element inspector
- [ ] How to pick out and examine a particular element on the page
- [ ] How to try out HTML and CSS changes live in the inspector

## Self-test

- What are the ways to target one specific element on a page in DevTools?
- In the Styles pane, what does it mean when a declaration is crossed out?
- How would you tweak an element's CSS live in the browser to preview a change?

## My notes

## Questions / to revisit
