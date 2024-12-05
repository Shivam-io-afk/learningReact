// import logo from './logo.svg';
import './App.css';
import { User } from "./User"
import Admin from './Admin';


function App() {
  return (
    <div className="App">
      <Admin />
      <hr />

      <User />
      <hr />
      <User />

      <hr/>
      <UsingComponentInSame/>
    </div>
  );
}


function UsingComponentInSame(){
  var username = "darknight-911";
  function callfun(){
    username = "911";
    alert("This came automatically");
  }
  
  return (
    <div>
      <h1>  
        This is on same page - {username}
      </h1>
      <button className='btn' onClick={() => alert("This is Msg...")}>Click Function</button>
      <button className='btn' onClick={callfun}>This calls when clicked.. </button>
      <button className='btn' onClick={callfun()}>This calls automatically.. at starting</button>
    </div>
  )
}

export default App;
