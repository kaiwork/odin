# More Testing

| | |
|---|---|
| **Course** | JavaScript |
| **Section** | Testing JavaScript |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-javascript-more-testing> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Some code is easy to test and some is nearly impossible — the difference is coupling. This lesson is about writing testable code in the first place: isolating pure logic from side effects (DOM, network, `prompt`/`alert`), and using mocks for the dependencies you can't remove.

## Key concepts

### Tightly coupled code

Code is tightly coupled when its logic is welded to its dependencies — a function that computes something *and* reads from `prompt()` *and* writes with `alert()` can't be tested without a browser and a human. The first move is always to **refactor**: pull the decision-making out into a function that takes plain inputs and returns plain outputs, and keep the UI glue thin.

```js
// hard to test: logic + UI in one lump
function guessingGame() {
  const magic = 22;
  const guess = prompt("guess a number");
  if (Number(guess) === magic) alert("you win!");
}

// easy to test: pure core, thin shell
function evaluateGuess(magicNumber, guess) {
  return guess === magicNumber;
}

function guessingGame() {
  const magic = 22;
  const guess = Number(prompt("guess a number"));
  if (evaluateGuess(magic, guess)) alert("you win!");
}
```

### Pure functions

A pure function (1) always returns the same output for the same inputs, and (2) has no side effects — it doesn't touch anything outside itself (no DOM writes, network calls, logging, or mutation of external state). Pure functions are trivially testable — call them, assert on the return value — which is why TDD naturally pushes you toward them. Identifying side effects matters because each one is something a test must control or observe indirectly.

### Mocking

When a dependency genuinely can't be removed (a network call, a module you don't own), replace it in the test with a **mock**: a fake stand-in that records how it was called and returns canned values.

```js
const callback = jest.fn().mockReturnValue(42);

doSomething(callback);

expect(callback).toHaveBeenCalledTimes(1);
expect(callback).toHaveBeenCalledWith("expected arg");
```

Jest provides `jest.fn()` for mock functions plus setup/teardown hooks (`beforeEach`, `afterEach`) for resetting state between tests.

### What to test (and what not to)

- Test the **public interface**: incoming query messages by asserting on return values; incoming commands by asserting on resulting public state.
- Don't test **implementation details** or private methods — they're covered indirectly, and testing them makes refactoring break tests for no reason.
- Don't test outgoing messages with no side effects (queries to collaborators) — only assert that outgoing *commands* (calls that cause effects elsewhere) are sent, typically with a mock.

## Common pitfalls

- Reaching for a heavy mock setup when a small refactor toward pure functions would remove the dependency entirely.
- Asserting on private internals, so every harmless refactor breaks the suite.
- Over-mocking until the test only proves the mocks talk to each other, not that the code works.
- Forgetting to reset mocks between tests, letting call counts leak across cases.

## Objectives — can you explain these?

- [ ] What tightly coupled code is
- [ ] What a pure function is and how purity relates to TDD
- [ ] What mocking is

## Self-test

- What makes code "tightly coupled"?
- What two conditions must hold for a function to be pure?
- What are side effects, and why must you identify them before testing a function?
- What should you attempt before writing tests for tightly coupled code?
- If code truly can't be decoupled, how do you test it?
- What is a mock, and when is a mock function the right tool?
- How should incoming query messages be tested?
- Why is testing implementation (rather than behaviour) a bad idea?
- Should private methods get their own tests?
- Why skip testing outgoing messages that have no side effects?

## My notes

## Questions / to revisit
