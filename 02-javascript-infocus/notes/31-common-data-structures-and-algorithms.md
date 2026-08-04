# Common Data Structures and Algorithms

| | |
|---|---|
| **Course** | JavaScript |
| **Section** | A Bit of Computer Science |
| **Lesson** | <https://www.theodinproject.com/lessons/javascript-common-data-structures-and-algorithms> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

A data structure is a way of organising data so certain operations are cheap; an algorithm is a procedure that exploits that organisation. This lesson surveys the classics — stacks, queues, linked lists, binary search trees — and the search/traversal algorithms built on them: binary search, breadth-first search, and depth-first search.

## Key concepts

### Data structures and their trade-offs

Each structure trades off insertion speed, lookup speed, and memory:

- **Array** — indexed access is O(1); searching an unsorted array is O(N).
- **Hash / set** — near-constant lookup by key; no ordering.
- **Stack** — Last In, First Out (LIFO). Operations: **push** (add to top) and **pop** (remove from top). Think undo history, or the call stack itself.
- **Queue** — First In, First Out (FIFO). Operations: **enqueue** (add at the back) and **dequeue** (remove from the front). Think a printer queue.
- **Linked list** — a chain of **nodes**, each holding a value and a reference to the next node. Cheap insertion/removal at known positions; no random access — you must walk the chain.
- **Binary search tree (BST)** — each node has up to two children; everything smaller sits in the left subtree, everything larger in the right. Keeps data ordered and (when balanced) searchable in O(log N).

```js
// stacks and queues are easily modelled with arrays
const stack = [];
stack.push(1); stack.push(2);
stack.pop();      // 2 — LIFO

const queue = [];
queue.push(1); queue.push(2);
queue.shift();    // 1 — FIFO
```

### Binary search

On *sorted* data, compare the target against the middle element and discard the half that can't contain it; repeat. Each step halves the search space — O(log N). It's a textbook example of the **divide and conquer** design principle, and the same idea that makes BST lookup fast.

### Tree traversal: BFS and DFS

Two systematic ways to visit every node in a tree:

- **Breadth-first search (BFS)** visits level by level. It defers children using a **queue**: dequeue a node, visit it, enqueue its children.
- **Depth-first search (DFS)** plunges down one branch before backtracking. It defers nodes using a **stack** — either explicitly, or implicitly via recursion (the call stack *is* the stack). Common orders: preorder, inorder, postorder.

Which structure you use to hold the "pending" nodes is exactly what makes the traversal breadth-first (queue) or depth-first (stack).

## Common pitfalls

- Mixing up stack and queue semantics — remember LIFO vs FIFO, push/pop vs enqueue/dequeue.
- Running binary search on unsorted data — the halving logic silently returns wrong answers.
- Forgetting that a linked list has no indexes: reaching the nth node costs O(N).
- Memorising structure names without their trade-offs — interviews and real design decisions both hinge on *why* you'd pick one over another.

## Objectives — can you explain these?

- [ ] What data structures are and why the choice matters
- [ ] How stacks and queues work
- [ ] Why algorithms are worth learning
- [ ] How binary search, BFS and DFS work

## Self-test

- What distinguishes a stack from a queue?
- What do enqueue and dequeue do?
- What is a linked list, and what is a node?
- Which algorithm-design principle does binary search implement?
- Which data structure holds pending nodes in a breadth-first tree traversal?
- Which data structure holds pending nodes in a depth-first tree traversal?

## My notes

## Questions / to revisit
