# React Router

| | |
|---|---|
| **Course** | React |
| **Section** | The React Ecosystem |
| **Lesson** | <https://www.theodinproject.com/lessons/node-path-react-new-react-router> |
| **Status** | ⬜ Not started |

> Primer to orient and revise. The linked lesson is authoritative — do the reading.

## TL;DR

In a single-page application the browser never does a full page reload — JavaScript swaps the visible components in and out and keeps the URL in sync. React Router is the standard library for this client-side routing: it maps URL paths to components, supports nested and dynamic routes, catches bad URLs, and lets you guard routes behind conditions like "is the user logged in?".

## Key concepts

### Setting up a router

```jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "profile", element: <Profile /> },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
```

Each route object pairs a `path` with the `element` to render when the URL matches.

### Navigating with `Link`

Plain `<a>` tags trigger a full page reload. Use `<Link to="profile">Profile</Link>` instead — it updates the URL and re-renders through the router without refreshing.

### Nested routes and `Outlet`

Children render *inside* their parent wherever the parent places an `<Outlet />`:

```jsx
{
  path: "profile",
  element: <Profile />,        // contains <Outlet /> somewhere in its JSX
  children: [
    { index: true, element: <DefaultProfile /> }, // shown at /profile itself
    { path: ":name", element: <UserProfile /> },  // dynamic segment
  ],
}
```

- An **index route** is the default child when no sub-path is present.
- A **dynamic segment** (`:name`) matches any value; read it with `useParams()`:

```jsx
import { useParams } from "react-router-dom";
const { name } = useParams(); // /profile/leo -> "leo"
```

### Handling bad URLs

Add `errorElement: <ErrorPage />` to a route so unmatched or failing URLs render a proper error page instead of the router's default screen.

### Passing data through an Outlet

The parent supplies `<Outlet context={someValue} />`; any nested child reads it with `useOutletContext()`.

### Protected routes

There is no special API — render conditionally. Check some app state (e.g. authentication) and either render the element or redirect, using `<Navigate to="/login" />` or the `useNavigate()` hook.

### Testing routed components

Components using router hooks can't render bare in tests. Build a router with `createMemoryRouter` (it keeps history in memory instead of the browser address bar), pass your routes plus an initial entry, and render it inside `RouterProvider`.

## Common pitfalls

- Using `<a href>` for internal navigation — it throws away all client-side state with a full reload; use `<Link>`.
- Forgetting the `<Outlet />` in a parent route's component, then wondering why child routes render nothing.
- Missing an `errorElement`, so a typo'd URL greets users with the router's raw default error page.
- Rendering a component that calls `useParams`/`useNavigate` in a test without wrapping it in a router — it throws; use `createMemoryRouter`.

## Objectives — can you explain these?

- [ ] What client-side routing is
- [ ] How to set up React Router for client-side routing
- [ ] How nested routes and dynamic path segments work
- [ ] How to add a catch-all/error route for bad URLs
- [ ] How a parent passes data to children rendered through an outlet
- [ ] How to implement protected routes
- [ ] The basics of testing components that rely on React Router

## Self-test

- What is client-side routing and how does it differ from traditional navigation?
- What are the steps to configure a basic router?
- What replaces anchor tags for in-app navigation, and why?
- How are nested routes declared?
- What are dynamic segments (URL params) and how do you read them?
- How do you handle a URL that matches no route?
- How does data travel from a parent route to a child rendered via `<Outlet />`?
- How would you build a route only logged-in users can reach?
- What extra setup do tests need for components that use React Router?

## My notes

## Questions / to revisit
