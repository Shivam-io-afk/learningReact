import React,{createRef} from "react";
import './Fine.css';
import Stylez from './buttons.module.css';
import RefFun from '../Hooks/useRefWFnc';

class Reff extends React.Component {
    constructor(){
        super();
        this.RefInput = createRef();
    }

    componentDidMount(){
        console.log(this.RefInput);
    }

    render(){
        return(
            <>
                <input className={Stylez.coolinput  } type="text" ref={this.RefInput}/> &nbsp;&nbsp;
                <button onClick={() => console.log(this.RefInput.current.value)} className={Stylez.coolbutton}>Click Me</button>

                <br/><br/><br/>

                <RefFun/>
            </>  
        );
    }
}


export default Reff;