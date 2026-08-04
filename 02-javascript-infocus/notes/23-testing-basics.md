# Testing Basics

| | |
|---|---|
| **Course** | JavaScript |
| **Section** | Testing JavaScript |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-javascript-testing-basics> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Test Driven Development (TDD) means writing an automated test for a piece of behaviour *before* writing the code that implements it, then coding until the test passes. This lesson gets Jest installed and running, and introduces the basic test/expect/matcher pattern you'll use everywhere.

## Key concepts

### TDD in one paragraph

The cycle is: write a failing test that describes the behaviour you want → write the minimum code to make it pass → refactor with the safety net of green tests. Benefits: it forces you to think about a function's interface before its implementation, catches regressions automatically, and pushes you toward small, decoupled functions (big tangled ones are painful to test).

### Jest

Jest is the testing framework this course uses (Mocha, Jasmine and others work similarly). Install it as a dev dependency and wire it into npm scripts:

```bash
npm install --save-dev jest
```

```json
// package.json
{
  "scripts": { "test": "jest" }
}
```

Jest finds files named like `sum.test.js` and runs them with `npm test`.

### Anatomy of a test

```js
// sum.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;

// sum.test.js
const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
```

`test(name, fn)` defines a test case; `expect(value)` wraps the actual result; a **matcher** asserts something about it.

### Common matchers

- `toBe` — strict equality (`===`), for primitives
- `toEqual` — deep/recursive equality, for objects and arrays
- `toBeTruthy` / `toBeFalsy`
- `toContain` — item in an array or substring in a string
- `toThrow` — the function throws (pass a wrapper: `expect(() => fn()).toThrow()`)
- `not` inverts any matcher: `expect(x).not.toBe(y)`

### ES6 modules with Jest

Jest runs on Node and doesn't understand `import`/`export` out of the box; the standard fix is Babel. Install `@babel/preset-env` as a dev dependency and add a Babel config targeting the current Node version, and Jest will transform your modules automatically.

## Common pitfalls

- Using `toBe` on objects or arrays — it checks reference identity, so structurally equal objects fail. Use `toEqual`.
- Writing tests after the code and only testing the happy path — TDD's value comes from tests driving the design.
- Passing a *called* function to `expect(...).toThrow()` — the error fires before Jest can catch it; wrap it in an arrow function.
- Skipping the Babel/ESM setup and being confused when `import` statements crash the test run.

## Objectives — can you explain these?

- [ ] The basics of TDD and why it's worth the effort
- [ ] How to install and run Jest in a project
- [ ] How to write basic tests with `test`, `expect`, and matchers

## Self-test

- What benefits does TDD give you compared with testing manually after the fact?
- Name several common Jest matchers and when you'd reach for each.

## My notes

## Questions / to revisit
