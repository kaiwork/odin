# ECMAScript

| | |
|---|---|
| **Course** | JavaScript |
| **Section** | JavaScript in the Real World |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-javascript-ecmascript> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

"JavaScript" is an implementation of the ECMAScript standard, which is maintained by Ecma International and now gets a new version every year. Browsers take time to implement new features, so shiny syntax may not run for all of your users — check support, and use Babel to transpile modern code into something older browsers understand.

## Key concepts

### The standard and its versions

ECMAScript is the specification that defines the language; browser engines and Node implement it. ES6, released in 2015, was a landmark version that modernised the language (`let`/`const`, arrow functions, classes, modules, promises, template literals and more). From then on, versions are named by year — ES6 is also called ES2015 — and a new edition ships annually with a smaller batch of additions instead of rare giant releases.

### The browser-support problem

A feature entering the standard doesn't mean users have it. Each browser engine implements features on its own schedule, and users run old browser versions for years. Code using a brand-new feature can throw syntax errors or behave incorrectly for a slice of your audience. Resources like compatibility tables (e.g. caniuse.com, MDN's browser-compat data) tell you what is safe for the browsers you target.

### Babel

Babel is a transpiler: it rewrites modern JavaScript into equivalent older JavaScript. For example, an arrow function can be emitted as a regular function expression so pre-ES6 engines can run it:

```js
// what you write
const double = (n) => n * 2;

// roughly what Babel can output for old targets
var double = function (n) {
  return n * 2;
};
```

You tell Babel which environments to support, and it transforms only what those targets lack. It typically runs as a build step — commonly wired into a bundler like Webpack — so you write current-year JavaScript and ship broadly compatible output.

## Common pitfalls

- Assuming "it works in my browser" means it works everywhere — your up-to-date dev browser is not your users' fleet; check support tables.
- Reading "ES6" and "ES2015" as different things — they're the same edition under two naming schemes.
- Believing transpiling solves everything — syntax can be rewritten, but some new APIs need polyfills rather than transpilation.
- Chasing every proposal you see in blog posts — features aren't stable until they actually land in the standard and in your target browsers.

## Objectives — can you explain these?

- [ ] How ECMAScript releases work
- [ ] Why new JavaScript features can be risky to use immediately
- [ ] What Babel does

## Self-test

- What is ES6?
- What release cadence has ECMAScript followed since ES6?
- Why be cautious about using a just-released JavaScript feature?
- Which tool transpiles modern JavaScript for older browsers?

## My notes

## Questions / to revisit
