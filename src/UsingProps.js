import { useState } from "react";

function Proper(props){
    const [value, setValue] = useState("------");

    function run(){
        document.querySelector("#inp").addEventListener("keydown", function(e){
            if(e.key === "Enter"){
                // setValue(e.target.value);
            }
            setValue(e.target.value);
        });
    }
    return(
        <div>
            <h5>{props.name}</h5>
            <h5>{props.userID}</h5>
            <br></br> <br></br>
            <h5>{value}</h5> 
            <input type="text" id="inp" onKeyDown={() => run()}/>
        </div>
    )
};



export default Proper;