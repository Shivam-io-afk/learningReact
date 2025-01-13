import "./App.css";
import { useState } from "react";

export function State() {
  const [count, setCount] = useState(0); // React state
  const [name, setName] = useState("John Doe"); // React state
  const [visible, setVisible] = useState(true); // React state

  const increment = () => {
    setCount(count + 1); // Triggers re-render
  };

  return (
    <>
            <br /><hr /><hr /><br />

      <h3>Count: {count}</h3>
      <button onClick={increment}>Increment</button>

      <hr /><hr />

      <h4>{name}</h4>
      <button onClick={() => setName("Eglueo")}>Change By State</button>

     

      <h4 style={{fontSize:"20px"}}>
        Hide And Show Elements <br/> &nbsp;
        { 
          visible ? <i style={{fontSize:"13px"}}>Now you can see Me..</i> : null
        }
        </h4>
      <button value="Hide" onClick={() => setVisible(false)}>Hide</button>
      &nbsp;&nbsp;
      <button value="Show" onClick={() => setVisible(true)}>Show</button>
      &nbsp;&nbsp;
      <button value="Toggle" onClick={() => setVisible(!visible)}>Toggle</button>

    </>
  ); 
}
