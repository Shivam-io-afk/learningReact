export function User(){
    return (
        <div>
        <h2 className="App"> This is User Component - 1 </h2>
        <h2 className="App"> This is User Component - 2</h2>
        </div>        
    )
};

// Another way to do this -->

export function Main(){
    return (
        <div>
        <h2 className="App"> This is Admin Component - 1 </h2>
        <h2 className="App"> This is Admin Component - 2</h2>
        </div>        
    )
};

export default Main;