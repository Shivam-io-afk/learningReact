import React from 'react';
import { useState } from 'react';

function FormHandler() {
    const [name, setName] = useState(null);
    const [tnc, setTnc] = useState(false);
    const [checked, setChecked] = useState(false);

    function prevent(e) {
        e.preventDefault();
        console.log(name,tnc,checked);
    }
    return (
        <div style={{ height: "150px", width: "100%" }}>
            <h1>Form Handler</h1>
            <form onSubmit={(prevent)} style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", height: "100%", width: "100%" }}>
                <input type='text' autoFocus onChange={(e) => setName(e.target.value)}/>
                <br/>
                <select onChange={(e) => setChecked(e.target.value)}>
                    <option>Select options</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <br/>
                <div>
                    <input type='checkbox' onChange={(e) => setTnc(e.target.checked)}/> <i style={{ fontSize: '12px' }}>Do You Agree?</i>
                </div>
                <br/>
                <div>
                    <button type='submit'>Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type='reset' value='Reset'/>
                </div>
                <br/>
            </form>
        </div>
    );
};

export default FormHandler;