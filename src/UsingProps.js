import { useState } from "react";

function Proper(props) {
    const [value, setValue] = useState("");

    function run(innervalue) {
        setValue(innervalue);
    }


    function getValue() {
        let input = document.querySelector("#inptxt");
        let display = document.querySelector(".txt");

        display.innerHTML = input.value;
    }

    return (
        <div>
            <h5>{props.name}</h5>
            <h5>{props.userID}</h5>
            <br></br>
            <hr /><hr />

            <h5>Change by using STATE - {value}</h5>
            <input type="text" onKeyUp={(e) => run(e.target.value)} />

            
            <br></br>
            <br></br>
            <hr /><hr />

            <div style={{border: "1px solid black", padding: "10px", backgroundColor: "lightgray" }}>
                <h5>Changing by button Press - <i className="txt"></i></h5>
                <input style={{height:"30px"}} type="text" id="inptxt" />
                &nbsp;
                <button style={{height:"30px", width:"60px", fontSize:"15px"}} onClick={() => getValue()}>btn</button>
            </div>
       
        </div>
    )
};



export default Proper;