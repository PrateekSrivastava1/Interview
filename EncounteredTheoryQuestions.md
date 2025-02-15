# 1: What is context in react js?

Answer: In React.js, context is a built-in API that allows you to share values 
(such as themes, user authentication, or global state) between components 
without having to pass props manually at every level.

# 2: When to Use Context?
Avoiding prop drilling: When you need to pass data deeply in a component tree.
Global state management: Sharing theme settings, authentication, user preferences, etc.
Performance optimization: Instead of passing props to every component, context lets you access data directly.

# 3: When Not to Use Context?
When state changes frequently—context updates can trigger unnecessary re-renders.
If you only need to pass data one or two levels deep, props are often simpler.

# 4: Why does Context cause unnecessary re-renders when state changes frequently?
In React, context triggers a re-render for all consuming components whenever the 
providers value changes, even if some components do not use the changed part of the context.

Every Context Update Re-renders All Consumers
When the value inside <Context.Provider> changes, all components consuming that context will 
re-render, even if they don’t rely on the updated part of the state.

Reference Changes Cause Re-renders
If the value prop of <Provider> is an object or array, it creates a new reference on every
 render, causing unnecessary re-renders.

Component Tree Depth Matters
Deeper components consuming the context must wait for their parent to re-render before they
update, potentially affecting performance.

```
<App>
 ├── <Header />
 │    ├── <ThemeToggle />  (Uses context)
 ├── <Main />
 │    ├── <Profile />
 │    │    ├── <UserDetails />  (Uses context)
 │    │         ├── <UserName /> (Uses context)
Now, if we use React Context for the theme, every time the theme changes, all components using that context will wait for their parent to re-render before updating.
```

When Does This Become a Big Problem?
If the component tree is very deep.
If many components re-render unnecessarily, slowing down performance.
If frequent updates (e.g., live data, animations) cause unnecessary delays.

# 5: How to Optimize Context Usage?
Use Separate Contexts for Independent State Values
Use useMemo to Prevent Unnecessary Reference Changes
Use Selective Context Consumption with a Custom Hook

# 6: What is redux?
Redux is a state management library that helps manage global state in large-scale applications.
It follows a centralized store approach where all application state is kept in a single store, 
making state updates more predictable and manageable.

# 7: Why Use Redux When We Already Have Context?
Although React Context API allows global state management, it is not a replacement for Redux. 
Context is best for passing static or infrequently changing values, while Redux is designed for 
complex state management with frequent updates.

🔹 Problems with Context API
Frequent State Changes Cause Re-renders
Every update in the Context Provider causes all consumer components to re-render.
This can slow down performance in large applications.
Example: A frequently updating cart, user data, or API calls.

Difficult Debugging & Time-Travel Debugging is Missing
Redux has Redux DevTools, which allow you to track every state change and even revert to a previous state.

No Middleware Support in Context
Redux supports middlewares like Thunk & Saga for handling async logic, like API calls.

State Logic Becomes Scattered in Context API
Context API does not provide a strict way to handle state updates in a structured manner, leading to unorganized code.
Redux enforces a clear structure: Store → Action → Reducer.


# 8: Redux vs Context API: When to Use What?
Feature	Redux	Context API
State Complexity	✅ Best for large & complex state	⚠️ Good for simple state
Frequent Updates	✅ Optimized with reducers	⚠️ Causes unnecessary re-renders
Performance	✅ Uses selectors to avoid extra re-renders	⚠️ Every consumer re-renders on state change
Debugging	✅ Redux DevTools (Time-travel, logs)	⚠️ No built-in debugging
Middleware Support	✅ Supports Thunk, Saga for async logic	❌ No middleware support
Scalability	✅ Best for large applications	⚠️ Can become unmanageable in big apps


# 9: When to Use Redux?
Use Redux when:

Your app has large and complex global state.
You need better debugging & logging (Redux DevTools).
You want to prevent unnecessary re-renders using selectors.
You require middlewares (Thunk, Saga) for async operations.

Use Context API when:
You need to pass static values (e.g., theme, language settings).
Your app has small-scale state management.
You don't need debugging or async logic in state management.


# 10: what is zustand?
Zustand is a fast, lightweight, and minimalistic state management library for React.
It simplifies state management with a hook-based API, removing the need for reducers,
actions, or boilerplate code found in Redux.

No boilerplate (unlike Redux)
Fast performance (avoids unnecessary re-renders)
Direct state updates (no reducers required)
Selectors for optimized re-renders (only update components that use specific state)
Supports React & Vanilla JavaScript

# 11: Why Use Zustand Instead of Redux?
Redux is powerful, but it comes with complexity and boilerplate. 
Zustand solves the same problems but with a simpler and more efficient approach.

| Feature                     | Redux                                      | Zustand                                  |
|-----------------------------|--------------------------------------------|------------------------------------------|
| **Setup Complexity**         | ❌ Requires reducers, actions, store      | ✅ Just one hook                         |
| **Boilerplate Code**         | ❌ High                                    | ✅ Minimal                               |
| **Performance**              | ✅ Optimized with selectors               | ✅ Even better, only renders when state changes |
| **Ease of Use**              | ❌ More complex syntax                    | ✅ Simple API                            |
| **Middleware Support**       | ✅ Yes (Thunk, Saga)                      | ✅ Yes (built-in middleware support)     |
| **Re-renders**               | ❌ Redux causes re-renders even if the component does not need updated state | ✅ Zustand updates only the components using the changed state |
| **Bundle Size**              | ❌ ~20+ KB                                 | ✅ ~1 KB                                 |

# 12: When to Use Zustand?
Use Zustand when:
You need global state without Redux complexity.
You want better performance with minimal re-renders.
You want a small, lightweight solution (~1KB).
You don’t need advanced features like time-travel debugging (Redux DevTools).

Use Redux when:
You need strict state management rules (e.g., enterprise-level apps).
You want Redux DevTools for debugging.
You have many developers working on shared state logic.
You need middlewares like Redux Thunk or Saga for complex async operations.
