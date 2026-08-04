# Introduction to HTML and CSS

| | |
|---|---|
| **Course** | Foundations |
| **Section** | HTML Foundations |
| **Lesson** | <https://www.theodinproject.com/lessons/foundations-introduction-to-html-and-css> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

A short orientation lesson: HTML supplies a page's structure and content, CSS supplies its appearance, and JavaScript (later) supplies its behaviour. Knowing which job belongs to which technology tells you where to look whenever you want to change something on a page.

## Key concepts

### The division of labour

- **HTML** (HyperText Markup Language) — the raw content and structure: paragraphs, headings, lists, links, buttons, images. If it's *what's on the page*, it's HTML.
- **CSS** (Cascading Style Sheets) — the presentation: colours, fonts, spacing, layout, positioning. If it's *how the page looks*, it's CSS.
- **JavaScript** — the behaviour: reacting to clicks, fetching data, updating the page dynamically. If the page *does something*, that's JavaScript.

### Markup vs programming

HTML and CSS are not programming languages — they describe structure and style but have no logic (no conditions, loops or computation in the programming sense). That's not a knock on them: an enormous amount of the web is built from HTML and CSS alone, and they must be solid before JavaScript makes sense.

### A tiny illustration

```html
<button class="cta">Sign up</button>
```

```css
.cta {
  background-color: navy;
  color: white;
  font-family: sans-serif;
}
```

The HTML puts a button on the page with its label; the CSS decides its colours and font. Neither one can do the other's job.

## Common pitfalls

- Reaching for CSS to add content, or HTML attributes to do styling. Keep content in HTML and appearance in CSS from day one.
- Calling HTML/CSS "programming languages" in interviews — they're markup and styling languages; pedants (and interviewers) notice.
- Rushing past HTML/CSS to get to JavaScript. Every JavaScript project still needs well-structured markup and styling underneath.

## Objectives — can you explain these?

- [ ] Give a high-level picture of HTML, CSS and how the two cooperate on a page.

## Self-test

- What do the acronyms HTML and CSS expand to?
- To add paragraphs of text to a page, do you reach for HTML or CSS?
- To change a button's font and background colour, do you reach for HTML or CSS?
- How do HTML, CSS and JavaScript differ in the roles they play?

## My notes

## Questions / to revisit
