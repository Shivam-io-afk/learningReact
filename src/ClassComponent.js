import React from 'react';

class User extends React.Component {
    constructor(){ // State is initialized here
        super();
        this.state = {
            name: "John Doe",
            userID: "1234",
            count : 0
        }
        console.log("Constructor");
    }


    // Using ComponentDidMount() method
    componentDidMount(){
        console.log("Mounted");
    }

    componentDidUpdate(preProps, preState){
        // console.log("Updated",this.state.count);
        console.log("Updated",preState);

    }
    render(){
        console.log("Rendered");
        return (
            <div>
                <h1>Class Component</h1>
                <h2>Hi, I'm {this.state.name}</h2>
                <h3>My User ID is {this.state.userID}</h3>
                <h4>COUNTER : {this.state.count}</h4>
                <button onClick={() => {this.setState({count:this.state.count+1})}}>Click Me to Update</button>
            </div>
        );
    }
}



export default User;