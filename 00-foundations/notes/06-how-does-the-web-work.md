# How Does the Web Work?

| | |
|---|---|
| **Course** | Foundations |
| **Section** | Prerequisites |
| **Lesson** | <https://www.theodinproject.com/lessons/foundations-how-does-the-web-work> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

Everything you build as a web developer ultimately travels over the same machinery: networks of computers exchanging small chunks of data. This lesson builds a mental model of that machinery — clients, servers, IP addresses, DNS — so that later topics like HTTP, APIs and deployment have something to hang on.

## Key concepts

### The internet vs the web

- A **network** is any group of computers connected so they can exchange data. The **internet** is the global network of networks, stitched together by **routers** (devices that forward traffic between networks) and **ISPs** (companies that connect your local network to the wider internet).
- The **web** is one service running on top of the internet: documents (web pages) delivered over HTTP.

### Packets

Data is not sent as one continuous stream. It is split into **packets** — small chunks, each carrying addressing information — which travel independently across the network and are reassembled at the destination. This lets many conversations share the same wires and lets traffic route around failures.

### Clients and servers

- A **client** is the machine (or program, e.g. your browser) that requests a resource.
- A **server** is a machine that stores resources and responds to requests. A **web server** specifically serves web pages and related files.

### Addressing: IP and DNS

- Every device on a network has an **IP address**, a numeric identifier (e.g. `142.250.4.100`) used to route packets to it.
- Humans use names like `theodinproject.com`, so a **DNS request** asks a Domain Name System server to translate that name into the corresponding IP address before the browser can connect.

### Distinguishing the moving parts

- **Web page** — a single document, written in HTML, displayed by a browser.
- **Web server** — the computer hosting sites and answering requests.
- **Web browser** — the client program that fetches and renders pages.
- **Search engine** — a website (accessed *through* a browser) that helps you find other pages. A search engine is not a browser.

### Putting it together

Typing an address and hitting enter roughly means: DNS lookup → browser sends a request to the server's IP → server responds with the page as packets → browser reassembles and renders it.

## Common pitfalls

- Conflating the browser with the search engine — Chrome is a browser; Google Search is a website the browser visits.
- Treating "internet" and "web" as synonyms; the web is one application of the internet, alongside email, gaming, streaming, etc.
- Assuming data travels as one whole file; it is chunked into packets that may take different routes.

## Objectives — can you explain these?

- [ ] Define what the internet actually is.
- [ ] Explain packets and why data is broken into them for transfer.
- [ ] Distinguish a web page, a web server, a web browser and a search engine.
- [ ] Describe what a client is.
- [ ] Describe what a server is.
- [ ] Explain the role of IP addresses.
- [ ] Explain what DNS servers do.

## Self-test

- What is a web server?
- What is a network?
- What is the internet?
- What is an IP address?
- What does a router do?
- What is an ISP?
- What are packets, and how do they move data across the network?
- What is a client?
- What is a server?
- What is a web page?
- What is a web browser?
- What is a search engine?
- What happens during a DNS request?
- Which browser are you using right now?
- Walk through, in your own words, everything that happens when you run a search on google.com.

## My notes

## Questions / to revisit
