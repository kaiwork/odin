# Recursive Methods

| | |
|---|---|
| **Course** | JavaScript |
| **Section** | A Bit of Computer Science |
| **Lesson** | <https://www.theodinproject.com/lessons/javascript-recursive-methods> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Recursion is a function calling itself to solve a problem by shrinking it into smaller copies of the same problem. It's the natural fit for divide-and-conquer algorithms and nested structures, but every recursive call consumes stack space — recurse too deep and you get a stack overflow. Often a plain loop is simpler and cheaper.

## Key concepts

### The two essential parts

Every recursive function needs:

1. A **base case** — the condition where it stops and returns without calling itself.
2. A **recursive case** — the call to itself with a *smaller* input, moving toward the base case.

```js
function factorial(n) {
  if (n <= 1) return 1;        // base case
  return n * factorial(n - 1); // recursive case, smaller input
}
```

Miss the base case (or fail to shrink the input) and the function recurses forever — until the stack runs out.

### Divide and conquer

Recursion shines when a problem splits cleanly into subproblems of the same shape: binary search halves the search range each call; merge sort splits, recursively sorts, then merges; tree traversal recurses into each child. For these, the recursive version mirrors the problem's own structure and is often shorter and clearer than the iterative one.

```js
function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}
```

(Elegant, but exponential — it recomputes the same values repeatedly. A loop does it in linear time.)

### Recursive depth and stack overflow

Each call pushes a frame onto the **call stack** and it stays there until that call returns. **Recursive depth** is how many self-calls are stacked at once. The stack is finite, so deep recursion (e.g. recursing once per element of a huge array) exhausts it and the engine throws a "maximum call stack size exceeded" error — a **stack overflow**. Iterative loops don't have this problem: they reuse one frame.

### Recursion vs loops

Anything recursive can be rewritten with a loop (sometimes with an explicit stack), and vice versa. Recursion is *not* inherently faster — it usually carries function-call overhead. Prefer loops for simple linear repetition; prefer recursion when the problem is naturally self-similar (trees, divide-and-conquer) and the depth is bounded.

## Common pitfalls

- Forgetting the base case, or writing a recursive step that doesn't actually shrink the input — infinite recursion, stack overflow.
- Assuming recursion is an optimisation — it's usually about clarity, not speed.
- Naive recursion that recomputes overlapping subproblems (classic Fibonacci) — exponential blow-up.
- Using recursion over inputs large enough to exceed the call-stack depth when a loop would run in constant stack space.

## Objectives — can you explain these?

- [ ] Why recursion is useful for breaking down large problems
- [ ] The limitations of recursive solutions
- [ ] Which kinds of problems suit loops better than recursion
- [ ] What "recursive depth" means
- [ ] What a stack overflow is
- [ ] Why stack overflow matters specifically for recursive code

## Self-test

- Give a one-sentence definition of a recursive function.
- What is recursion actually for — and is it more efficient than a loop?
- What two parts must every recursive function have?
- Why is stack overflow a particular risk with recursion?

## My notes

## Questions / to revisit
