# Links and Images

| | |
|---|---|
| **Course** | Foundations |
| **Section** | HTML Foundations |
| **Lesson** | <https://www.theodinproject.com/lessons/foundations-links-and-images> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Links and images are what make the web a *web*. This lesson covers the anchor element and its `href` attribute, the difference between absolute and relative paths, and embedding images with `<img>` — including the attributes every image should carry.

## Key concepts

### Anchor elements

```html
<a href="https://www.theodinproject.com/about">About The Odin Project</a>
```

- `<a>` creates the link; the text between the tags is what the user clicks.
- **Attributes** are name–value pairs inside an opening tag (`href="..."` here). `href` holds the destination; without it the anchor behaves like plain text.
- Links default to blue and underlined until styled otherwise.

### Opening in a new tab

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">Example</a>
```

- `target="_blank"` opens the link in a new tab/window.
- Pair it with `rel="noopener noreferrer"`: `noopener` stops the opened page from grabbing a reference to yours (guarding against tabnabbing-style attacks), and `noreferrer` additionally withholds referrer information.

### Absolute vs relative links

- **Absolute**: the full address — scheme plus domain plus path, e.g. `https://www.theodinproject.com/paths`. Use for other sites.
- **Relative**: a path relative to the current page's location, e.g. `about.html` or `pages/about.html`. Use for pages within your own site — they keep working if the domain changes.
- `./` means "start from the current directory"; `../` climbs to the **parent directory**, e.g. `../images/dog.jpg` from inside a subfolder.

### Images

```html
<img src="images/dog.jpg" alt="A brown dog on the beach" width="640" height="360">
```

- `<img>` is a void element — no closing tag.
- `src` points at the image file (absolute URL or relative path).
- `alt` gives replacement text, read aloud by screen readers and shown if the image fails to load. Every image needs `src` and `alt`.
- Setting `width` and `height` reserves the image's space before it loads, preventing the page content from jumping around (layout shift).

### Web image formats

The four workhorses: **JPG** (photos), **PNG** (graphics needing transparency, lossless), **GIF** (simple animations), **SVG** (vector — icons and diagrams that scale without pixelation).

## Common pitfalls

- Writing `target="_blank"` without `rel="noopener noreferrer"`, leaving the new tab able to interfere with the opening page.
- Hard-coding absolute URLs for internal pages, which break the moment the site moves domain or is opened locally.
- Omitting `alt` text — screen-reader users get nothing, and broken images show nothing useful.
- Getting relative paths wrong when files sit in different folders; remember `../` to go up a level.

## Objectives — can you explain these?

- [ ] Link to pages on other websites.
- [ ] Link to other pages within your own site.
- [ ] Explain the difference between absolute and relative links.
- [ ] Embed an image on a page with HTML.

## Self-test

- Which element creates a hyperlink?
- What is an attribute?
- Which attribute holds a link's destination?
- What security precaution goes with `target="_blank"`, and why?
- How do absolute and relative links differ?
- Which element displays an image?
- Which two attributes should every image have?
- How do you reference a parent directory in a file path?
- Name the four main image formats used on the web.

## My notes

## Questions / to revisit
