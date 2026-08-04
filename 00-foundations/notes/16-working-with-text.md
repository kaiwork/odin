# Working with Text

| | |
|---|---|
| **Course** | Foundations |
| **Section** | HTML Foundations |
| **Lesson** | <https://www.theodinproject.com/lessons/foundations-working-with-text> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Most of the web is text, and this lesson covers the elements that structure it: paragraphs, six levels of headings, bold and emphasised text, plus how nested elements relate to each other and how to leave comments in your markup.

## Key concepts

### Paragraphs

Browsers collapse raw whitespace — newlines in your source become single spaces on screen. To get real paragraphs with spacing between them, wrap text in `<p>`:

```html
<p>First paragraph.</p>
<p>Second paragraph, rendered on its own line with a gap above.</p>
```

### Headings

Six levels, `<h1>` (most important) down to `<h6>` (least). They render progressively smaller, but the point is hierarchy, not size:

```html
<h1>Page title — usually one per page</h1>
<h2>Major section</h2>
<h3>Subsection</h3>
```

### Bold and emphasis

- `<strong>` renders bold **and** marks the text as important — screen readers can convey that weight.
- `<em>` renders italic **and** marks emphasis, changing how the sentence reads aloud.

```html
<p>Read the instructions <strong>before</strong> starting. This is <em>really</em> worth doing.</p>
```

Use them for meaning; when you only want the visual effect with no semantic weight, that's a job for CSS later.

### Nesting and relationships

Elements placed inside other elements create a hierarchy:

```html
<div>          <!-- parent of both paragraphs -->
  <p>One</p>   <!-- child of the div; sibling of Two -->
  <p>Two</p>   <!-- child of the div; sibling of One -->
</div>
```

- An element wrapping another is its **parent**; the wrapped element is its **child**.
- Elements sharing the same parent at the same level are **siblings**.

Indent nested elements consistently — the indentation mirrors the hierarchy and keeps markup readable.

### Comments

```html
<!-- This is a comment; the browser ignores it -->
```

Comments annotate your markup for humans. In VS Code, toggle them with `Cmd + /` (macOS) or `Ctrl + /` (Windows/Linux). Note they *are* visible to anyone who views the page source.

## Common pitfalls

- Expecting line breaks in the source file to appear in the browser — whitespace collapses; use elements to structure text.
- Picking heading levels by font size (e.g. an `<h4>` because it "looks right") instead of by document hierarchy. Style with CSS; structure with heading levels.
- Skipping heading levels or using several `<h1>`s, which muddles the outline for screen-reader users.
- Putting secrets or embarrassing notes in HTML comments — they ship to every visitor in the page source.

## Objectives — can you explain these?

- [ ] Create paragraphs.
- [ ] Create headings at the right level.
- [ ] Mark text as bold/important.
- [ ] Mark text as italic/emphasised.
- [ ] Describe parent, child and sibling relationships between nested elements.
- [ ] Write HTML comments.

## Self-test

- Which element creates a paragraph?
- Which elements create headings?
- How many heading levels exist, and what distinguishes them?
- Which element makes text bold and semantically important?
- Which element italicises text and adds emphasis?
- What is the relationship between an element and an element nested inside it?
- What do you call two elements nested at the same level?
- What is the syntax for an HTML comment?

## My notes

## Questions / to revisit
