import React,{useMemo,useState} from "react";
// import Counter from "./State";

function Memoo(){
    const [Number, SetNumber] = useState(0);
    const [Multi, SetMulti] = useState(1);

    
    const Numsmulti = useMemo(function Bhalue() {
    console.warn("ss");
        return Multi * 10;
    },[Multi]) 

    return(
        <>
            <div>
                <br/>
                <h2>counter : {Number}</h2>
                <button onClick={() => SetNumber(Number+1)}>Click</button>


                <h3>{Numsmulti}</h3>
                <button onMouseEnter={() => SetMulti(Multi + 1)}>Incrs.</button>
                <br/><br/><br/><br/>
            </div>
        </>
    );
}

export default Memoo;