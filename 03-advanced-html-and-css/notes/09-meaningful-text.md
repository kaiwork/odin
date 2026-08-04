# Meaningful Text

| | |
|---|---|
| **Course** | Advanced HTML and CSS |
| **Section** | Accessibility |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-meaningful-text> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Screen-reader users often hear pieces of a page out of context — a list of just the links, a single error message, an image announcement. Each of those fragments has to make sense on its own. This lesson covers writing link text, form error messages, and image `alt` attributes that carry their own meaning.

## Key concepts

### Links

Screen readers can pull every link on a page into one list, so "click here" repeated ten times is useless. Guidelines:

- The link text itself should say where the link goes — descriptive, and reasonably brief (around 100 characters is a sensible ceiling).
- Don't lean on "click here" / "here" phrasing; besides being vague, it assumes a mouse.
- If a link opens in a new tab/window or triggers a download, say so in the text, and include the file type and size for downloads.

```html
<!-- Weak -->
Click <a href="...">here</a> for the syllabus.

<!-- Better -->
<a href="...">Course syllabus (PDF, 1.2 MB)</a>
```

### Form errors and instructions

"Error occurred" tells the user nothing. A meaningful error message identifies *which* input is wrong and *why* — better still, how to fix it ("Email must include an @ symbol"). Put supporting instructions (password rules, required-field markers) next to the input they describe or at the top of the form, so they're encountered before the user hits the problem.

### Alt text

- **Meaningful images** need `alt` text describing their function and content in context — what the user loses if the image doesn't load.
- **Decorative or redundant images** should get an explicitly empty `alt=""`, which tells screen readers to skip them. Omitting the attribute entirely is worse: the screen reader may fall back to announcing the file name.

```html
<img src="divider.png" alt="">                      <!-- decorative: skipped -->
<img src="chart.png" alt="Sign-ups doubled between March and June"> <!-- meaningful -->
```

## Common pitfalls

- "Click here" and "read more" links — meaningless when heard out of context; put the destination in the text.
- Generic error messages ("Invalid input") that force the user to guess which field failed and why.
- Leaving the `alt` attribute off entirely instead of setting `alt=""` — the file name may get read aloud.
- Alt text that narrates appearance ("blue rectangle with logo") instead of conveying the image's purpose in the page.

## Objectives — can you explain these?

- [ ] Write link text that is meaningful out of context
- [ ] Provide meaningful text in forms — errors and instructions
- [ ] Choose appropriate `alt` attribute values for images

## Self-test

- What three rules make link text meaningful?
- What should a form error message tell the user?
- When is an empty `alt=""` the correct choice?

## My notes

## Questions / to revisit
