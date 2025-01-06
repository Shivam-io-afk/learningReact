import "./App.css";
import { useState } from "react";

export function State() {
    const [count, setCount] = useState(0); // React state
    const [name, setName] = useState("John Doe"); // React state
  
    const increment = () => {
      setCount(count + 1); // Triggers re-render
    };
  
    return (
      <div>
        <h3>Count: {count}</h3>
        <button onClick={increment}>Increment</button>
      <hr/><hr/>
      <hr/><hr/>
        <h4>{name}</h4>
        <button onClick = {() => setName("Eglueo")}>Change By State</button>
      </div>
    );
  }
  