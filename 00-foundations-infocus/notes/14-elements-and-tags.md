# Elements and Tags

| | |
|---|---|
| **Course** | Foundations |
| **Section** | HTML Foundations |
| **Lesson** | <https://www.theodinproject.com/lessons/foundations-elements-and-tags> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

HTML is built from elements, and elements are written with tags. This lesson nails the vocabulary — opening tag, content, closing tag, void element — that every later HTML lesson assumes you know cold.

## Key concepts

### Tags

A tag is a keyword wrapped in angle brackets. Opening tags look like `<p>`; closing tags add a forward slash: `</p>`. The keyword determines what kind of content the browser should expect.

### Elements

An element is the full package — most consist of three parts:

```html
<p>Some paragraph text.</p>
```

1. Opening tag: `<p>`
2. Content: `Some paragraph text.`
3. Closing tag: `</p>`

Elements act as containers: the tags tell the browser (and other tools) what the content between them *is*, so it can be displayed and interpreted correctly.

### Void elements

Some elements have no content and therefore no closing tag:

```html
<br>
<img>
```

These are **void elements** — they are complete in themselves. You may see them written with a trailing slash (`<br />`, `<img />`) in older code or code formatted by some tools; that self-closing style is legacy XHTML habit and the current HTML spec advises against it, though browsers tolerate it.

### Why the right tag matters

Using the semantically appropriate element — a paragraph tag for paragraphs, a heading tag for headings — matters beyond appearance:

- **Accessibility**: screen readers rely on element semantics to present the page meaningfully.
- **SEO**: search engines use the markup's structure to understand and rank content.

## Common pitfalls

- Forgetting the closing tag on a non-void element, which makes the browser guess where the element ends and can scramble the layout below it.
- Writing the slash on the wrong side (`<p/ >` or `</p>` as an opener) — the slash belongs immediately after the `<` in a closing tag.
- Adding closing tags to void elements (`</br>`, `</img>`) — they don't take one.
- Choosing tags for their default look instead of their meaning (e.g. using whatever renders big and bold rather than the correct heading element).

## Objectives — can you explain these?

- [ ] Explain what an HTML tag is.
- [ ] Explain what an HTML element is.

## Self-test

- What is an HTML tag?
- Name the three parts that make up a typical HTML element.
- What is a void element, and how does it differ from a regular element?

## My notes

## Questions / to revisit
