# ES6 Modules

| | |
|---|---|
| **Course** | JavaScript |
| **Section** | Organizing Your JavaScript Code |
| **Lesson** | <https://www.theodinproject.com/lessons/javascript-es6-modules> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Before ES6 modules, every `<script>` file shared one global scope, so files could clobber each other's variables and had to be loaded in exactly the right order. ES6 modules (ESM) give each file its own private scope: you `export` what you want to share and `import` what you need, and the browser resolves the dependency graph from a single entry point.

## Key concepts

### The old problem

With multiple classic scripts, a top-level `const greeting = ...` in one file collides with the same name in another. The workaround was the module pattern — IIFEs returning only a public interface — managed by hand.

### Named exports and imports

A module can export any number of named bindings:

```js
// one.js
export const greeting = "Hello!";
export function sayHi() { console.log(greeting); }

// or collect them at the bottom:
// export { greeting, sayHi };
```

```js
// two.js
import { greeting, sayHi } from "./one.js";
sayHi();
```

Imported names must match the exported names (though `as` can rename: `import { greeting as hello } from "./one.js"`).

### Default exports and imports

Each module may have at most one default export, which has no fixed name — the importer picks one:

```js
// user.js
export default function createUser(name) {
  return { name };
}
```

```js
// app.js
import createUser from "./user.js";   // no braces, any name
```

A module can mix one default export with named exports; the import combines them: `import def, { named } from "./file.js"`.

### Entry points in HTML

Only the entry file goes in the HTML, marked as a module:

```html
<script src="main.js" type="module"></script>
```

The browser follows `import` statements to load everything else — no more ordering a stack of script tags. Module scripts are deferred by default and run in strict mode.

### ESM vs CommonJS

Node.js historically used CommonJS: `const thing = require("./thing")` and `module.exports = ...`. ESM (`import`/`export`) is the standard for browsers and increasingly used in Node too. The two systems have different syntax and loading behaviour; you'll meet CommonJS in Node-based tooling.

## Common pitfalls

- Forgetting `type="module"` on the script tag — `import` then throws a syntax error in the browser.
- Using braces for a default import (`import { createUser }`) or omitting them for a named one — the two forms are not interchangeable.
- Omitting the `./` and file extension in browser import paths — the browser needs a real relative URL like `"./one.js"`.
- Expecting module top-level variables to be global — each module's scope is private, which is the point; export what other files need.

## Objectives — can you explain these?

- [ ] What ES6 modules are and how importing/exporting works
- [ ] The difference between default and named exports
- [ ] The main differences between CommonJS and ES6 modules

## Self-test

- Before ES6 modules, how did you keep a variable private to one file?
- Before ES6 modules, how did you deliberately expose values to other files?
- What benefits do modules bring to a codebase?
- How do default exports differ from named exports?
- What is an entry point?
- How do you include a module script in an HTML page?

## My notes

## Questions / to revisit
