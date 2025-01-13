import Lifting from './StateUp';
import Stylez from './buttons.module.css';

export function Parent(){
    return (
        <div>
            <br />
            <Lifting />
            <h1>Parent Component</h1>
            <button className={Stylez.coolbutton}>Click To get Data From Child Component</button>
            <br/><br/>
            <br/><br/>
        </div>
    )
}

