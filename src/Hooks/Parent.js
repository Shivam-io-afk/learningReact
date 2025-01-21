import Lifting from './LiftStateUp';

 function Parent(){
    var callBck = (x) =>{
        alert(x);
    }
    return (
        <div>
            <br />
            <h1>Parent Component</h1>
            <Lifting data={callBck}/>
            <br/><br/>
        </div>
    )   
}



export default Parent;