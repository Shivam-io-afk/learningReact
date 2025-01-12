import React, { useState } from 'react';
import './Fine.css';
import Styles from './buttons.module.css';//importing css file as module

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment} className={Styles.coolbutton}>Increment</button>
            &nbsp;&nbsp;
            <button onClick={decrement} className={Styles.coolbutton}>Decrement</button>

        </div>
    );
};

export default Counter;