import React from 'react';
import Form from './Form'
import { useState } from 'react';
const Rendering = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    //Calling this function from form.js (passing as props)
    function vcheck(){
        alert("Heyy there! Please Sign in first.\n\nYou can't submit the form skipping the Sign in process.");
    }

    return (
        <div>
            <br /><br /><br />
            <br /><hr /> <br />
            
            {
                isLoggedIn ? <div> <h1>Welcome back!</h1> </div>
                    : <div>
                        <h1>Please sign in.</h1>
                        <Form data={vcheck}/>
                    </div>
            }
        </div>
    );
};

export default Rendering;