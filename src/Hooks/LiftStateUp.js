// Paraent component is included to perform liftingstateup
import React from 'react';
import Stylez from './buttons.module.css';


const StateUp = (props) => {
    let loop = 'wello horld';
    return (
        <>
            <br/><br/>
            <h1>Lifting State Up</h1>
            <input className={Stylez.coolinput} type='text' placeholder='Enter Here' onChange={(e) => loop=e.target.value}></input> &nbsp; &nbsp;
            <button onClick={() => props.data(loop)} className={Stylez.coolbutton}>onclick</button>
        </>
    )
}



export default StateUp;