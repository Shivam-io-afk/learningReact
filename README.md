# React Functional Component Lifecycle with Hooks

Functional components in React don’t have traditional lifecycle methods like class components (e.g., `componentDidMount`, `componentDidUpdate`). Instead, lifecycle behavior is managed using **React Hooks**, primarily the **`useEffect`** hook. This guide explains how lifecycle events are handled in functional components.

---

## Functional Component Lifecycle Using Hooks

### 1. Mounting Phase (Component is Created)

- **When it happens:** The component is rendered for the first time.
- **Hook to use:** `useEffect` with an empty dependency array (`[]`).

```jsx
import React, { useEffect } from "react";

function MyComponent() {
  useEffect(() => {
    console.log("Component mounted");
    // Perform actions like API calls, subscriptions, etc.

    return () => {
      // Cleanup code if needed
      console.log("Component unmounted");
    };
  }, []); // Empty array ensures this runs only once

  return <h1>Hello, World!</h1>;
}
```

#### Equivalent Class Component:
```jsx
componentDidMount() {
  console.log("Component mounted");
}
```

---

### 2. Updating Phase (Component is Re-rendered)

- **When it happens:** The component is updated because of changes to `props` or `state`.
- **Hook to use:** `useEffect` with specific dependencies.

```jsx
import React, { useEffect, useState } from "react";

function MyComponent({ count }) {
  useEffect(() => {
    console.log("Component updated. Count is now:", count);
    // Perform actions when `count` changes
  }, [count]); // Only runs when `count` changes

  return <h1>Count: {count}</h1>;
}
```

#### Equivalent Class Component:
```jsx
componentDidUpdate(prevProps, prevState) {
  if (prevProps.count !== this.props.count) {
    console.log("Component updated. Count is now:", this.props.count);
  }
}
```

---

### 3. Unmounting Phase (Component is Removed)

- **When it happens:** The component is removed from the DOM.
- **Hook to use:** `useEffect` with a cleanup function.

```jsx
import React, { useEffect } from "react";

function MyComponent() {
  useEffect(() => {
    console.log("Component mounted");

    return () => {
      // Cleanup actions (e.g., unsubscribing from APIs, clearing timers)
      console.log("Component unmounted");
    };
  }, []); // Runs only once, during mount and unmount

  return <h1>Hello, World!</h1>;
}
```

#### Equivalent Class Component:
```jsx
componentWillUnmount() {
  console.log("Component unmounted");
}
```

---

## How Functional Components Handle Lifecycle Events

### Using `useEffect`

- `useEffect` is versatile and can handle **mounting**, **updating**, and **unmounting**:
  - **Mounting:** Use `useEffect` with an empty dependency array (`[]`).
  - **Updating:** Use `useEffect` with dependencies (`[dependency]`).
  - **Unmounting:** Use the cleanup function returned by `useEffect`.

### Example: Handling All Lifecycle Events
```jsx
import React, { useState, useEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  }, []); // Mount and unmount

  useEffect(() => {
    console.log("Count updated to:", count);
  }, [count]); // Runs on `count` update

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---

## Comparison Table: Class vs Functional Component Lifecycle

| **Lifecycle Event**      | **Class Component**            | **Functional Component**        |
|---------------------------|---------------------------------|----------------------------------|
| **Mounting**              | `componentDidMount`            | `useEffect(() => {}, [])`       |
| **Updating**              | `componentDidUpdate`           | `useEffect(() => {}, [deps])`   |
| **Unmounting**            | `componentWillUnmount`         | Cleanup in `useEffect`          |
| **Skip Re-render**        | `shouldComponentUpdate`        | `React.memo` or custom logic    |

---

## `shouldComponentUpdate` vs `componentDidUpdate`

### Lifecycle Sequence During Updates
In React class components, the update process involves several lifecycle methods. The sequence is as follows:

1. **`shouldComponentUpdate(nextProps, nextState)`**  
   - Determines whether the component should re-render.  
   - Called **before rendering**.  
   - If it returns `false`, the update process stops, and no re-render occurs.

2. **`render()`**  
   - Updates the UI if `shouldComponentUpdate` returns `true`.

3. **`componentDidUpdate(prevProps, prevState, snapshot)`**  
   - Executes **after rendering**.  
   - Useful for performing side effects or interacting with the DOM.

### Key Points
- `shouldComponentUpdate` is called **first**, before rendering.  
- `componentDidUpdate` is called **last**, after rendering.  
- If `shouldComponentUpdate` returns `false`, `componentDidUpdate` will not be called because the component does not re-render.

---

## Key Points

1. Functional components use **`useEffect`** for all lifecycle events.
2. `useEffect` cleanup functions mimic `componentWillUnmount`.
3. `useEffect` dependency arrays control when the effect runs:
   - Empty array (`[]`): Runs only once (mount/unmount).
   - Dependencies (`[dep1, dep2]`): Runs on changes to the specified values.
   - No array: Runs after every render.






# In Functional Component 
- useEffect is very useful hook, it contains all lifecycle method 
- Tip
If you're familiar with React class lifecycle methods, you can think of use Effect Hook as
`componentDidMount`, `component DidUpdate`, and `component Will Unmount` combined.



# In Mappig 
- In Mapping the array of objects and displayed the data according to the use. we need `KEY` attribute to uniquely identify the element. because it helps react to identify which items have changed, are added, or are removed. 



# React Fragments (Advanced)
-  React Fragments are used to return multiple elements from a component without adding extra nodes to the DOM
- if we use div instead of `React.Fragment` then it will create a div in the dom
- if we use div in the table then it will show error but if we use fragment then it will work fine
```<> </>``` 


# Lifting Stateup or sending data child to parent node
-  lifting stateup is used to pass the data from `child to parent component` (from child to parent)
- for sending data parent to child we use props and for child to parent we use callback function (`props` are `immutable`  and `callback` function is `mutable`) 
- we also use context api for sending data to the child component without using props to the parent component
-  lifting the state up to the parent component means that the parent component has the state and the child component has the props to access the state of the parent component 




## How You can create Pure Component in functional Component
- For creating Pure component in Functional Component,so we use Hook - useMemo


## Hook0 - useRef
- Ref or useReft is hook in react which is generally used into class components, Ref has a functinality of DOM Manipulation But React not allowed to directly manipulate dom because if cause low performance in appliation in react, use only in emergency!

- it is used on form validation, to change color, to get value etc...


## In React Routing Switches is change into  is Routes 