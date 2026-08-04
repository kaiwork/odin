# Browser Compatibility

| | |
|---|---|
| **Course** | Intermediate HTML and CSS |
| **Section** | Intermediate CSS Concepts |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-browser-compatibility> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

The same HTML/CSS can behave differently in different browsers because each browser implements web standards on its own schedule with its own rendering engine. This lesson covers a little browser history, how new CSS features roll out, and how to check whether a feature is safe to use — chiefly via the "Can I use" website.

## Key concepts

### A short history

- The first web browser, built by Tim Berners-Lee in 1990, was called WorldWideWeb (later renamed Nexus to avoid confusion with the Web itself).
- Successors — Mosaic, Netscape Navigator, Internet Explorer (which at its peak held the overwhelming majority of the market), then Firefox, Safari, and Chrome — competed partly by adding incompatible features, which is what made "browser compatibility" a problem in the first place.
- Today Chrome is the most-used browser, and many others (Edge, Opera, Brave…) are built on Chromium.

### Why differences exist

- Browsers use different rendering engines: Chromium-based browsers use Blink; Safari uses WebKit; Firefox uses Gecko.
- The W3C and related bodies publish standards, but each engine implements new features at its own pace — sometimes behind flags or with vendor prefixes first.
- A feature can therefore work perfectly in your development browser and be broken for a chunk of your users.

### Checking support

- **caniuse.com** shows, per feature, which browser versions support it (fully, partially, or behind a flag) alongside usage share. Check it before adopting anything recent.
- The pragmatic rule: only rely on features that are supported by the browsers the bulk of your users actually run; "widely available" beats "just shipped".

### Mobile is its own world

- On iOS and iPadOS, *every* browser — including Chrome and Firefox — must use Apple's WebKit engine, so "Chrome on iPhone" is not the Chrome you tested on desktop. Android browsers ship their own engines.
- Emulating a phone in desktop devtools approximates screen size but not OS-specific engine behaviour; test on real devices when it matters.
- Mobile screens vary widely in size and ratio, reinforcing the need for responsive design.

## Common pitfalls

- Testing only in Chrome and shipping — Safari/WebKit differences are the classic source of "works on my machine" bugs.
- Assuming a feature announced in a spec or blog post is usable — check caniuse for actual browser coverage first.
- Treating iOS Chrome as Chromium — it is WebKit underneath, with WebKit's quirks and limitations.
- Trusting devtools device emulation as equivalent to a real phone — it does not replicate engine or OS behaviour.

## Objectives — can you explain these?

- [ ] What browser compatibility means and the history behind it.
- [ ] How new CSS features travel from specification to shipping in browsers.
- [ ] How to check whether a feature is safe to use.

## Self-test

- Which browser has the largest usage share today?
- What was the first web browser originally called?
- How do mobile browsers on iOS/iPadOS differ from those on Android?

## My notes

## Questions / to revisit
