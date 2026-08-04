# Space Complexity

| | |
|---|---|
| **Course** | JavaScript |
| **Section** | A Bit of Computer Science |
| **Lesson** | <https://www.theodinproject.com/lessons/javascript-space-complexity> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Space complexity is time complexity's sibling: instead of steps, you count how much *memory* an algorithm needs as its input grows, expressed in the same Big O notation. It covers both the input itself and any extra (auxiliary) memory the algorithm allocates.

## Key concepts

### What counts as "space"

Total space = space taken by the **input** + **auxiliary space** (temporary variables, new arrays/objects, and — for recursion — call-stack frames). Analysis uses the same Big O classes and the same rule of dropping constants.

```js
// O(1) space: a fixed number of variables regardless of input size
function multiply(num1, num2) {
  return num1 * num2;
}

// O(N) space: the copy grows with the input
function sumArr(arr) {
  const copy = arr.slice();
  let total = 0;
  copy.forEach((n) => { total += n; });
  return total;
}
```

### Auxiliary space analysis

Sometimes it's more informative to count only the *extra* memory beyond the input — auxiliary space. This distinguishes in-place algorithms from copying ones even though both "hold" the input:

```js
// O(1) auxiliary space: mutates the array it was given
function squareNumsInPlace(nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * nums[i];
  }
  return nums;
}

// O(N) auxiliary space: map allocates a whole new array
function squareNumsNewArr(nums) {
  return nums.map((n) => n * n);
}
```

Auxiliary analysis is useful when the input is already in memory no matter what, and the real question is how much *more* you'll need — e.g. comparing sorting algorithms that work in place against ones that allocate.

### Hidden allocations

JavaScript makes it easy to allocate without noticing: `slice`, `map`, `filter`, spread (`[...arr]`, `{ ...obj }`) and `concat` all create new arrays/objects sized to their input — each is O(N) space. Recursion also consumes space: N nested calls means O(N) stack frames even if each frame stores almost nothing.

### Trade-offs

Space and time often trade against each other (caching results costs memory to save time), and both trade against readability. An O(N) `map` that reads clearly is usually better than a clever in-place loop unless memory is actually a constraint.

## Common pitfalls

- Forgetting that spread, `slice`, `map` and friends each allocate a full new copy — silent O(N) space.
- Ignoring the call stack: recursive solutions carry O(depth) space that an iterative loop avoids.
- Conflating total space with auxiliary space — be explicit about which one you're quoting.
- Micro-optimising memory at the cost of readability when N is small and it doesn't matter.

## Objectives — can you explain these?

- [ ] What space complexity is
- [ ] Why space complexity matters
- [ ] How to measure space complexity with Big O
- [ ] What auxiliary space analysis is and when to use it

## Self-test

- What is space complexity?
- How is space complexity measured?
- Describe a situation where auxiliary space analysis is the more useful lens.

## My notes

## Questions / to revisit
