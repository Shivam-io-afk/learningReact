import React from 'react';
import React, { useState } from 'react';

function FormHandler () {
    const [name, setName] = useState('');
    const [tnc, setTnc] = useState(false);
    const [checked, setChecked] = useState(false);

    return (
        <div>
            <h1>Form Handler Component</h1>
        </div>
    );
};

export default FormHandler;