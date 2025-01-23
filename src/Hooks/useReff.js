import React,{createRef} from "react";
import './Fine.css';
import Stylez from './buttons.module.css';


class Reff extends React.Component {
    constructor(){
        super();
        this.RefInput = createRef();
    }

    render(){
        return(
            <>
                <input type="text" ref={this.RefInput}/> &nbsp;&nbsp;
                <button className={Stylez}>Click Me</button>

                <br/><br/><br/>
            </>  
        );
    }
}


export default Reff;