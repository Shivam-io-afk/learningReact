// import logo from './logo.svg';
import './App.css';
import NorComponent from "./NorComponent"; /* These are the way to use import and use component*/
import { User, Main } from "./User";  /* These are the way to use import and use component*/
import Admin from './Admin';


function App() {
  return (
    <div className="App">
      <Admin />
      <hr />

      <User />
      <hr />
      <Main />

      <hr/>
      <UsingComponentInSame/>
    </div>
  );
}

// Using components in same file and using click events 
function UsingComponentInSame(){
  var username = "darknight-911";
  function callfun(){
    username = "911";
    alert("This came automatically");
    <NorComponent/>
  }
  
  function mainn(){
    alert("Heyy. !");
  }
  return (
    <div>
      <h1>  
        This is on same page - {username}
      </h1>
      <button className='btn' onClick={() => alert("This is Msg...")}>Click Function</button>
      <button className='btn' onClick={() => mainn()}>BTN_@</button>
      <button className='btn' onClick={callfun}>This calls when clicked.. </button>
      {/* <button className='btn' onClick={callfun()}>This calls automatically.. at starting</button> */}
    </div>
  )
}

export default App;
