import React, { useRef } from 'react';
import Stylez from './buttons.module.css';


function useRefWFun() {
    let inputRef = useRef(null)
    return (
        <div className="App">
            <h1>useRef in React </h1>
            <input type="text" ref={inputRef} /> &nbsp;&nbsp;
            <button className={Stylez.coolbutton}>Hey Click Me</button>
        </div>
    );
}
export default useRefWFun;