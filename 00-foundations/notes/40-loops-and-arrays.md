# Loops and Arrays

| | |
|---|---|
| **Course** | Foundations |
| **Section** | JavaScript Basics |
| **Lesson** | <https://www.theodinproject.com/lessons/foundations-loops-and-arrays> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Loops let a computer repeat work without you repeating code; arrays let you keep many values in one ordered container. Together they handle almost every "do this for each item" task. This lesson also introduces the higher-order array methods `map`, `filter`, and `reduce`, and gets you started with test-driven development (TDD) exercises.

## Key concepts

### Loops

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let n = 0;
while (n < 3) {
  n++;
}

for (const item of ["a", "b", "c"]) {
  console.log(item);
}
```

`break` exits the loop entirely; `continue` skips the rest of the current iteration and moves to the next one. `do...while` runs the body at least once before checking the condition.

### Arrays

An array is an ordered, zero-indexed collection that can hold values of any type:

```js
const scores = [10, 20, 30];
scores[0];        // 10 — access by index
scores[1] = 25;   // change by index
scores.length;    // 3
scores.push(40);  // add to end; pop() removes from end
scores.unshift(5); // add to start; shift() removes from start
```

Other everyday methods: `includes`, `indexOf`, `join`, `slice`, `concat`.

### map, filter, reduce

These take a function as an argument and replace most manual loops:

```js
const nums = [1, 2, 3, 4];
nums.map(n => n * 2);              // [2, 4, 6, 8] — transform each element
nums.filter(n => n % 2 === 0);     // [2, 4] — keep elements that pass a test
nums.reduce((sum, n) => sum + n, 0); // 10 — fold everything into one value
```

`map` and `filter` return new arrays and leave the original untouched. `reduce` carries an accumulator from element to element, starting from the optional initial value (the `0` above).

### Test-driven development

TDD means writing an automated test that describes the expected behaviour, then writing code until the test passes. Automated tests catch regressions instantly and free you from re-checking everything by hand after each change. The lesson's exercises come with pre-written tests to practise against.

## Common pitfalls

- Off-by-one errors: arrays are zero-indexed, so the last element is `arr[arr.length - 1]`, and `i <= arr.length` overshoots.
- Writing a `while` loop whose condition never becomes false — an infinite loop that freezes the page.
- Expecting `map`/`filter` to modify the original array; they return new ones you must capture.
- Forgetting `reduce`'s initial value, which makes the first element the starting accumulator and breaks on empty arrays.

## Objectives — can you explain these?

- [ ] Use loops to repeat work.
- [ ] Create and manipulate arrays.
- [ ] Use `map`, `filter`, and `reduce`.
- [ ] Work through exercises driven by automated tests (TDD).

## Self-test

- What kinds of problems do loops solve?
- What does `break` do inside a loop?
- What does `continue` do inside a loop?
- What is an array?
- When would you reach for an array?
- How do you read or overwrite a specific array element?
- Name several useful array methods and what each does.
- Why are automated tests worth writing?

## My notes

## Questions / to revisit
