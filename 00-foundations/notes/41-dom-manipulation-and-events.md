# DOM Manipulation and Events

| | |
|---|---|
| **Course** | Foundations |
| **Section** | JavaScript Basics |
| **Lesson** | <https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

The DOM (Document Object Model) is the browser's live, tree-shaped representation of your page, and JavaScript can read and rewrite it at will — this is how static HTML becomes an interactive app. This lesson covers selecting nodes, creating/adding/removing/altering elements, and responding to user actions through events and listeners. It is the single most important lesson for making web pages do things.

## Key concepts

### The DOM tree

Every tag becomes a node in a tree of parents, children, and siblings. "Node" is the general term (includes text and comments); "element" is specifically a node created from an HTML tag.

### Targeting nodes

```js
document.querySelector(".error");     // first match for a CSS selector
document.querySelectorAll("li");      // all matches, as a NodeList
container.firstElementChild;           // relational access
container.closest(".card");
```

`querySelectorAll` returns a NodeList, which is not a true array — it lacks most array methods. Convert with `Array.from(nodeList)` or spread syntax when you need `map`/`filter`.

### Creating, adding, removing, altering

```js
const div = document.createElement("div"); // created in memory, not yet on page
div.classList.add("highlight");
div.textContent = "Hello";
div.setAttribute("id", "greeting");
div.style.color = "blue";               // inline style; note camelCase properties

parent.appendChild(div);                 // now it appears
parent.removeChild(div);                 // and now it's gone
```

Prefer `textContent` for inserting text: `innerHTML` parses its string as HTML, which is slower and opens the door to script injection if the string contains user input.

Since the DOM is built as the HTML parses, load your script with `<script src="app.js" defer></script>` in the head (or place the tag at the end of the body) so the elements exist before the code runs.

### Events and listeners

Three ways to react to events: an inline HTML attribute (`onclick="..."`), setting an element's `on`-property (`btn.onclick = ...`), or `addEventListener`. Listeners are preferred: they keep JS out of HTML and allow multiple handlers per event.

```js
btn.addEventListener("click", (event) => {
  console.log(event.target); // the element that was clicked
});
```

Named functions make handlers reusable and easier to debug. To wire up a group of nodes, select them all and loop:

```js
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", handleClick);
});
```

### Capturing and bubbling

When an event fires it travels down the tree to the target (capturing phase), then back up through its ancestors (bubbling phase). Listeners run during bubbling by default, which is why a click handler on a parent also fires for clicks on its children.

## Common pitfalls

- Running DOM queries before the DOM exists — use `defer` or put the script tag at the bottom of the body.
- Creating an element with `createElement` and wondering why it never appears: it must be attached with `appendChild` (or similar) first.
- Using `innerHTML` with user-supplied text, creating an XSS vulnerability; use `textContent`.
- Calling `map` directly on a NodeList — convert it to an array first.
- Writing `element.style.background-color` — inline style properties are camelCased (`backgroundColor`).

## Objectives — can you explain these?

- [ ] Explain what the DOM is relative to a webpage.
- [ ] Distinguish a node from an element.
- [ ] Target nodes using selectors.
- [ ] Use the basic methods to find, add, remove, and alter DOM nodes.
- [ ] Explain how a NodeList differs from an array of nodes.
- [ ] Explain event bubbling and how it works.

## Self-test

- What is the DOM?
- How do you select the nodes you want to work with?
- How do you create a new element?
- How do you attach an element to the page?
- How do you remove an element?
- What ways can you alter an existing element?
- `textContent` vs `innerHTML` for adding text — which and why?
- Where should the script tag go in your HTML, and why?
- How do events and listeners work together?
- What are the three ways to hook code to an event?
- Why is `addEventListener` the preferred approach?
- What do named handler functions buy you?
- How do you attach listeners to a whole group of nodes?
- How do the return values of `querySelector` and `querySelectorAll` differ?
- What does a NodeList contain?
- How does the capturing phase differ from the bubbling phase?

## My notes

## Questions / to revisit
