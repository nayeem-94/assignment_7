1. What is JSX, and why is it used?

JSX is a syntax that lets you write HTML-like code inside JavaScript. It makes React code easier to read and helps combine UI with logic.

2. What is the difference between State and Props?

Props: Data passed from parent to child, read-only.

State: Local data owned by a component, can be updated.

3. What is the useState hook, and how does it work?

useState lets you add state to functional components. It gives you a value and a function to update it, and React re-renders when it changes.

4. How can you share state between components in React?

You can lift the state up to the nearest common parent and pass it down as props, or use context for deeper sharing.

5. How is event handling done in React?

Events are written in camelCase (e.g., onClick) and passed a function. Example:

<button onClick={handleClick}>Click Me</button>