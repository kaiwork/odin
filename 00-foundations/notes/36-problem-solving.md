# Problem Solving

| | |
|---|---|
| **Course** | Foundations |
| **Section** | JavaScript Basics |
| **Lesson** | <https://www.theodinproject.com/lessons/foundations-problem-solving> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Programming is mostly problem solving, and problem solving is a skill you practise deliberately rather than absorb by accident. This lesson gives a three-stage process — understand, plan, divide and conquer — and introduces pseudocode as the tool for planning before you write real syntax. FizzBuzz is used as the worked example.

## Key concepts

### Stage 1: Understand the problem

Do not touch the keyboard until you can restate the problem in your own words, in plain language. If you cannot explain it simply, you do not understand it yet. Ask clarifying questions: what are the inputs, what are the outputs, what are the edge cases?

### Stage 2: Plan

Sketch the solution before coding. Useful planning questions: does the program need a UI, what inputs does it take and from where, what should it output, and what steps get from input to output? The answer to that last question is your algorithm — a recipe of steps that solves the problem.

Pseudocode expresses that algorithm in natural language, free of syntax concerns:

```
When the user enters a number
Loop from 1 up to that number
  If the current value divides by 3 and 5, print "FizzBuzz"
  Else if it divides by 3, print "Fizz"
  Else if it divides by 5, print "Buzz"
  Otherwise print the number itself
```

### Stage 3: Divide and conquer

Do not attempt the whole problem in one go. Split it into subproblems, solve the smallest/simplest one first, and build outward — each solved piece gives you a working foundation and a confidence boost. For FizzBuzz: first print the numbers at all, then handle multiples of 3, then 5, then both.

When you get stuck, the trap is hacking at random until something compiles. Instead, step back to the plan: which subproblem is actually failing? Debug that one in isolation.

## Common pitfalls

- Jumping straight to code before understanding the problem — you end up solving the wrong thing and restarting.
- Trying to solve everything at once instead of one subproblem at a time, which makes bugs impossible to localise.
- Writing pseudocode that is really just JavaScript with the semicolons removed — keep it at the level of intent, not syntax.
- Treating being stuck as a signal to type more; it is a signal to re-plan.

## Objectives — can you explain these?

- [ ] Describe the three stages of the problem-solving process.
- [ ] Explain pseudocode and apply it when planning a solution.
- [ ] Decompose a problem into smaller subproblems.

## Self-test

- Name the three stages of the problem-solving process.
- Why must you understand a problem before planning or coding?
- What techniques help you understand a problem better?
- What questions should you answer during the planning stage?
- What is an algorithm?
- What is pseudocode?
- What do you gain by splitting a problem into subproblems and solving them one at a time?

## My notes

## Questions / to revisit
