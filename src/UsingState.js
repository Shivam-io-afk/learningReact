import "./App.css";
import { useState } from "react";

export function State() {
    const [count, setCount] = useState(0); // React state
  
    const increment = () => {
      setCount(count + 1); // Triggers re-render
    };
  
    return (
      <div>
        <h3>Count: {count}</h3>
        <button onClick={increment}>Increment</button>
      </div>
    );
  }
  