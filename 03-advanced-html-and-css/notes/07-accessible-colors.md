# Accessible Colors

| | |
|---|---|
| **Course** | Advanced HTML and CSS |
| **Section** | Accessibility |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-accessible-colors> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Colour choices decide whether text is readable and whether information reaches colourblind or low-vision users at all. Two rules carry this lesson: keep the contrast ratio between text and its background high enough for the WCAG level you target, and never let colour be the *only* signal carrying information.

## Key concepts

### Contrast ratio

A contrast ratio expresses the brightness difference between two colours, from 1:1 (identical, e.g. white on white) up to 21:1 (black on white). Text with a weak ratio is hard or impossible to read for many users.

### WCAG requirements

Requirements differ by text size:

- **Normal text** — smaller than 18pt / 24px (or smaller than 14pt / ~18.66px if bold).
- **Large text** — at or above those thresholds.

| Level | Normal text | Large text |
|---|---|---|
| AA | 4.5:1 | 3:1 |
| AAA | 7:1 | 4.5:1 |

Logos and purely decorative text are exempt from these rules.

### Checking ratios

- **WebAIM's contrast checker** — paste foreground and background hex codes and it reports pass/fail per level.
- **Chrome DevTools, element picker** — hovering an element shows a tooltip that includes its contrast ratio.
- **Chrome DevTools, colour picker** — clicking a colour swatch in the Styles pane expands contrast information and shows which levels the pairing meets, plus lines on the picker indicating passing ranges.

### Don't rely on colour alone

Some users can't distinguish the hues you chose. If required form fields are indicated only by red label text, a colourblind user has no way to tell them apart — add a non-colour cue such as an asterisk in the label. The same applies to charts (add patterns/labels), links inside body text (keep underlines), and status indicators (add icons or text).

## Common pitfalls

- Light grey text on white backgrounds — a common aesthetic choice that routinely fails AA. Check the ratio instead of eyeballing it.
- Forgetting bold and large text have different thresholds, and either over- or under-shooting the requirement.
- Signalling errors, required fields, or states purely by turning something red/green — always pair colour with text, an icon, or another marker.
- Checking contrast only for body text and ignoring text over images or gradients, where the effective background varies.

## Objectives — can you explain these?

- [ ] Explain what a contrast ratio is
- [ ] Check a contrast ratio with dev tools or an online checker
- [ ] Explain why colour must not be the sole carrier of information

## Self-test

- What does a contrast ratio measure?
- Name two ways to inspect a contrast ratio in your browser's dev tools.
- What practice should you avoid when conveying information to users?

## My notes

## Questions / to revisit
