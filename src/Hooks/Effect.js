import React, { useEffect, useState } from 'react';

function Effect() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    
    useEffect(() => {
        console.log("useEffect");
    }, [count]); // Empty array means it will run only once and that is when the component is mounted
    //if we remove the empty array then it will run every time the component is updated
    // if we want to run it only when the count is updated then we can pass count in the array
    // useEffect(() => {},[count]); // it will run only when the count is updated

    return (
        <div>
            <h1>Effect</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>

            <br/><br/>
            <input type='text' onChange={(e) => setName(e.target.value)} />
            <EffectWithStateProps data={name}/>
        </div>
    );
}

export default Effect;



export function EffectWithStateProps(props){
    console.log(props);

    useEffect(() => {
        console.log("<b>useEffectWithStateProps</b>");
    },[props.data]);
    return(
        <div>
            <h2>Mool</h2>
        </div>
    )

}