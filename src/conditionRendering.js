import React from 'react';
import Form from './form'

const Rendering = () => {
    const isLoggedIn = true;

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