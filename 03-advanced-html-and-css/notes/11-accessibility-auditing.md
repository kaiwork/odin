# Accessibility Auditing

| | |
|---|---|
| **Course** | Advanced HTML and CSS |
| **Section** | Accessibility |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-accessibility-auditing> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Knowing the rules isn't enough — you need ways to check whether a page actually meets them. This lesson tours the accessibility features built into browser DevTools and three third-party auditing tools that scan a page and rank its problems.

## Key concepts

### Browser DevTools

DevTools already cover a lot of auditing ground:

- contrast-ratio checks via the element and colour pickers,
- an Accessibility pane for inspecting an element's computed accessible name, role, and properties,
- a view of the full accessibility tree that assistive technologies consume.

### Lighthouse

Ships inside Chrome DevTools — no install needed. Runs audits for accessibility (alongside performance, SEO, and PWA checks) and reports issues ranked by severity. Good first pass on any page.

### axe DevTools

A Chrome extension from Deque. Scans the page, lists a11y violations graded by severity, and flags items that need a human to verify manually. (Lighthouse's accessibility audit is itself powered by axe.)

### WebAIM's WAVE

A web-based tool: give it a URL and it renders the page with icons overlaid where it found alerts, warnings, and contrast errors. The overlay can distort the page's layout, which is its main annoyance, but the categorised feedback is easy to act on.

### The limits of automation

Automated scanners catch the mechanical problems — missing alt attributes, low contrast, missing labels — but can't judge whether alt text is *meaningful* or whether keyboard flow makes sense. Manual testing (Tab through the page, drive it with a screen reader) and, above all, feedback from real users of assistive technology remain the strongest checks.

## Common pitfalls

- Treating a clean automated score as proof of accessibility — scanners miss whole categories of problems; pair them with manual keyboard and screen-reader testing.
- Ignoring the "needs manual review" items that tools like axe flag — those are often where the real issues hide.
- Running audits only at the end of a project instead of during development, when issues are cheap to fix.

## Objectives — can you explain these?

- [ ] Find and use the accessibility section of your browser's DevTools
- [ ] Audit a page with a third-party accessibility tool

## Self-test

- What accessibility features do your browser's DevTools offer?
- Which third-party auditing tool comes built into Chrome DevTools?

## My notes

## Questions / to revisit
