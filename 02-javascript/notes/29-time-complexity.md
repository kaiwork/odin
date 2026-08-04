# Time Complexity

| | |
|---|---|
| **Course** | JavaScript |
| **Section** | A Bit of Computer Science |
| **Lesson** | <https://www.theodinproject.com/lessons/javascript-time-complexity> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

You can't judge an algorithm by timing it with a stopwatch — hardware and load skew the numbers. Instead, count how the number of steps *grows* as the input grows. Big O notation expresses that growth rate for the worst case, giving you a machine-independent way to compare algorithms.

## Key concepts

### Measuring efficiency by steps, not seconds

Wall-clock time depends on the machine, the language, and what else is running. Complexity analysis instead asks: as input size N grows, how does the step count grow? That growth curve is what matters at scale.

### Big O

Big O describes an **upper bound** — the worst-case growth rate. Common classes, fastest to slowest:

| Notation | Name | Example |
|---|---|---|
| O(1) | Constant | array index access `arr[2]` |
| O(log N) | Logarithmic | binary search |
| O(N) | Linear | single loop over the input |
| O(N log N) | Linearithmic | efficient sorts (e.g. merge sort) |
| O(N²) | Quadratic | nested loops over the input |
| O(N³) | Cubic | triply nested loops |
| O(2ⁿ) | Exponential | naive recursive Fibonacci |
| O(N!) | Factorial | generating every permutation |

```js
// O(1): same number of steps no matter how big arr is
function first(arr) {
  return arr[0];
}

// O(N): steps grow linearly with arr.length
function contains(arr, target) {
  for (const item of arr) {
    if (item === target) return true;
  }
  return false;
}
```

Binary search is the classic O(log N) example: each step halves the remaining search space, so doubling the input adds only one step.

### Dropping constants

O(2N) is written O(N); O(N/2) is also O(N). Constants shift the line up or down but don't change its *shape*, and Big O cares only about how cost scales as N heads toward very large values.

### Omega, Theta, and why Big O wins

- **Big Ω (Omega)** — best-case growth. Less useful: knowing an algorithm is fast when it gets lucky doesn't help you plan for load.
- **Big Θ (Theta)** — bound where best and worst cases grow at the same rate.
- **Big O** — worst case. Preferred in practice because if the worst case scales acceptably, you're safe everywhere.

### When two algorithms tie

Two algorithms with the same Big O can still differ meaningfully in real performance — constants, memory behaviour, and typical (rather than worst-case) inputs all matter. At that point, benchmark for your actual workload, or compare on other axes such as space complexity.

## Common pitfalls

- Believing O(1) means "fast" — it means constant; a single expensive step is still O(1).
- Comparing algorithms by timing single runs on one machine instead of reasoning about growth.
- Treating Big O as the whole story — two O(N log N) sorts can differ a lot in practice.
- Forgetting that hidden loops inside methods (e.g. array searches within a loop) multiply complexity.

## Objectives — can you explain these?

- [ ] How an algorithm's efficiency is measured
- [ ] What Big O is
- [ ] The common Big O notations, in order of growth
- [ ] Other ways to measure efficiency (Omega, Theta)
- [ ] What to consider when two algorithms share the same complexity

## Self-test

- What is Big O?
- List the most common Big O classes from fastest to slowest growth.
- Why do we use Big O rather than raw timing?
- What is Big Omega, and why is it less useful than Big O?
- Why are constants dropped in Big O notation?

## My notes

## Questions / to revisit
