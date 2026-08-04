# JavaScript Developer Tools

| | |
|---|---|
| **Course** | Foundations |
| **Section** | JavaScript Basics |
| **Lesson** | <https://www.theodinproject.com/lessons/foundations-javascript-developer-tools> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Browser developer tools are where you will spend a large part of your working life as a web developer: inspecting HTML, tweaking CSS live, watching console output, and stepping through JavaScript. This lesson is a guided tour of Chrome DevTools — you are meant to click around and build familiarity, not memorise every panel.

## Key concepts

### Opening DevTools

Three routes in Chrome: the browser menu (More Tools → Developer Tools), right-click an element and choose Inspect, or a keyboard shortcut (F12, or Cmd+Option+I on macOS / Ctrl+Shift+I elsewhere).

### Elements panel — the live DOM

Shows the DOM as the browser currently sees it (which can differ from the HTML source). You can edit markup in place, drag nodes around, toggle CSS declarations on and off, force pseudo-class states like `:hover` and `:focus` on an element, and inspect the box model diagram (margin, border, padding, content) for any node. The Computed tab lists the final resolved CSS properties alphabetically.

### Device mode

Simulates different screen sizes and media queries so you can test responsive layouts without a physical device. You can also render the page as print media to check print stylesheets.

### Console

Runs arbitrary JavaScript in the context of the page and shows anything logged with `console.log()` (plus warnings and errors). It is your quickest feedback loop while experimenting.

### Sources panel and breakpoints

A breakpoint is a marked line where the debugger pauses execution so you can inspect variable values at that exact moment. Set one by opening your script in the Sources panel and clicking the line number. Once paused you can step through the code line by line and watch state change — usually far more effective than sprinkling `console.log` everywhere.

```js
// Instead of guessing with logs...
console.log("total is", total);
// ...pause here with a breakpoint and inspect `total` directly.
```

## Common pitfalls

- Editing HTML/CSS in DevTools and forgetting the changes vanish on refresh — they never touch your source files.
- Debugging exclusively with `console.log` when a single breakpoint would show every variable in scope at once.
- Forgetting that the Elements panel shows the rendered DOM, not your original HTML file — scripts may have changed it.
- Testing responsiveness only by resizing the window instead of using device mode, which also simulates media queries and device pixel ratios.

## Objectives — can you explain these?

- [ ] Simulate different screen sizes with DevTools.
- [ ] Inspect and modify the DOM.
- [ ] Debug JavaScript in the browser.
- [ ] Set and use breakpoints.
- [ ] View and edit HTML in the Elements panel.
- [ ] Check which scripts a page loads via the resources/sources view.
- [ ] Force a CSS pseudo-class state on an element.
- [ ] View computed CSS properties alphabetically.
- [ ] Inspect and edit any element's box model.
- [ ] Preview a page in print mode.
- [ ] Toggle CSS classes on and off.
- [ ] Simulate media queries in device mode.

## Self-test

- What are the ways to open developer tools?
- How do you simulate a different screen size for a page?
- What is a breakpoint?
- How do you set a breakpoint in DevTools?

## My notes

## Questions / to revisit
