import React, { useRef, useState } from 'react';
import Stylez from './buttons.module.css';

function useRefWFun() {
    let inputRef = useRef(null);
    let inputRef_2 = useRef(null);
    const [Reff,setReff] = useState(null);
    
    
    let val = 1000;
    let i = 9;
    const Manipulate = () => {
        inputRef.current.value = (val = val+1000);
        inputRef_2.current.focus();
        i--;
        inputRef_2.current.style.opacity = `0.${i}`
    }


    return (
        <div className="App">
            <h1>useRef in React </h1>
            <input type="text" ref={inputRef} /> <input type='text' ref={inputRef_2}/> &nbsp;&nbsp;
            <button className={Stylez.coolbutton} onClick={() => Manipulate()} >Hey Click Me</button>

            <br/><br/>
            <RefForwardingCtoC data={inputRef_2}/>
        </div>
    );
}
export default useRefWFun;



function RefForwardingCtoC(Props){
    console.log(Props.data);
    return(
        <>
            <input ref={Props.data}></input>
        </>
    );
}