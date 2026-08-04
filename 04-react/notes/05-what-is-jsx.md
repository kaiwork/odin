# What Is JSX?

| | |
|---|---|
| **Course** | React |
| **Section** | Getting Started With React |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-react-new-what-is-jsx> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

JSX is an HTML-like syntax extension for JavaScript. It is not required to write React, but almost everyone uses it because it lets markup and the logic that drives it live together in the same component. Under the hood each JSX tag compiles down to a `React.createElement(...)` call — it's all JavaScript.

## Key concepts

### Why JSX exists

- Rendering logic and markup are intrinsically coupled, so React keeps them together in components instead of splitting behavior and structure across files.
- Because JSX is compiled, React can give clearer error and warning messages than raw string templates.

### The three rules of JSX

1. **Return a single root element.** Wrap siblings in one parent — a `<div>`, or a fragment `<>...</>` when you don't want an extra DOM node:

   ```jsx
   return (
     <>
       <h1>Title</h1>
       <p>Body</p>
     </>
   );
   ```

2. **Close every tag.** Void HTML tags must be self-closed: `<input />`, `<img />`, `<br />`. Tags like `<li>` need an explicit `</li>`.

3. **camelCase most attributes.** JSX attributes become keys of a JavaScript object, so dashes and reserved words are out: `class` → `className`, `stroke-width` → `strokeWidth`. (Exceptions: `data-*` and `aria-*` attributes keep their dashes.)

### Embedding dynamic values

Curly braces drop you back into JavaScript inside JSX — as tag content or as attribute values:

```jsx
const name = "Odin";
const avatar = { url: "/odin.png", alt: "Odin" };

return (
  <div>
    <h1>Hello, {name}</h1>
    <img src={avatar.url} alt={avatar.alt} />
  </div>
);
```

Any expression works inside `{}` — variables, function calls, ternaries — but not statements like `if` or `for`.

## Common pitfalls

- Writing `class="..."` instead of `className="..."` — it triggers a console warning and is easy to miss when pasting HTML into a component.
- Returning two sibling elements without a wrapper — the compiler errors; wrap them in a fragment `<>...</>`.
- Forgetting to self-close void tags copied from HTML (`<input>`, `<img>`) — invalid JSX, won't compile.
- Quoting an attribute you meant to be dynamic: `src="{avatar}"` passes the literal string `"{avatar}"`; use `src={avatar}` for the variable's value.

## Objectives — can you explain these?

- [ ] Explain what JSX is.
- [ ] Describe how JSX differs from plain HTML.

## Self-test

- What is JSX, in one sentence?
- Why bother writing JSX instead of plain JavaScript?
- What are the three rules JSX enforces?
- How do you embed a JavaScript value inside JSX markup?

## My notes

## Questions / to revisit
