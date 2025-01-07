import React from 'react';
import Form from './form'
import { useState } from 'react';
const Rendering = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    return (
        <div>
            {
                isLoggedIn ? <div> 
                    <h1>Welcome back!</h1>
                     </div>
                    : <div>
                        <h1>Please sign in.</h1>
                        <Form/>
                    </div>
            }
        </div>
    );
};

export default Rendering;