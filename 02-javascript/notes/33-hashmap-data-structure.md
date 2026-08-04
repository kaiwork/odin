# HashMap Data Structure

| | |
|---|---|
| **Course** | JavaScript |
| **Section** | A Bit of Computer Science |
| **Lesson** | <https://www.theodinproject.com/lessons/javascript-hashmap-data-structure> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

A hash map stores key–value pairs and offers O(1) *average* insertion, lookup and removal. The trick: a hash function converts each key into a number, which (via modulo) picks a slot — a bucket — in an internal array. This lesson covers hashing, buckets, collisions, and when the bucket array must grow.

## Key concepts

### Hashing

To **hash** is to run an input through a hash function and get a number (the hash code) out. Crucially, hashing is one-way and deterministic: the same key always yields the same code, but you can't recover the key from the code. A decent string hash mixes every character, typically multiplying by a prime as it goes:

```js
function stringToNumber(string) {
  let hashCode = 0;
  const primeNumber = 31;
  for (let i = 0; i < string.length; i++) {
    hashCode = primeNumber * hashCode + string.charCodeAt(i);
  }
  return hashCode;
}
```

The prime multiplier spreads codes out, reducing the chance that different keys land on the same value.

### Buckets

The map's storage is an array of **buckets**. A key's bucket index is its hash code reduced into range with modulo:

```js
const index = hash(key) % buckets.length;
```

Insertion hashes the key and writes the pair into that bucket; lookup hashes the key, jumps straight to the bucket, and compares keys there. No scanning of the whole collection — that's where O(1) average time comes from.

### Collisions

A **collision** happens when two different keys map to the same bucket (same hash code, or different codes that reduce to the same index). A common resolution is to make each bucket hold a **linked list**: colliding entries chain together, and lookups walk the short chain comparing actual keys. As long as collisions are rare, chains stay tiny and performance stays near O(1); if everything collided, lookup would degrade toward O(N).

### Load factor and growth

The **load factor** (commonly around 0.75–1.0) sets the tolerated fullness. When the number of stored entries exceeds `capacity × loadFactor`, the map **grows**: allocate a bucket array of double the size and re-insert every entry (indexes change because `% buckets.length` changed). Growing keeps buckets sparse and collisions rare, trading memory for speed.

### Keys, not indexes

Unlike arrays, hash maps are accessed by key and generally don't preserve any meaningful order — don't rely on iteration order in your own implementation.

## Common pitfalls

- Forgetting the modulo step and indexing the array with a huge raw hash code.
- Handling collisions by overwriting — different keys in one bucket must coexist (e.g. chained in a list); only an *equal* key should be overwritten.
- Never growing the bucket array, so load climbs and "O(1)" quietly turns into long chain walks.
- Confusing a collision (two keys, one bucket) with an update (same key twice).

## Objectives — can you explain these?

- [ ] What hash codes are and how to generate one
- [ ] How a hash map works internally (buckets, collisions, growth)

## Self-test

- What does it mean to hash something?
- What are buckets?
- What is a collision and how can it be resolved?
- When should the buckets array grow, and what happens when it does?

## My notes

## Questions / to revisit
