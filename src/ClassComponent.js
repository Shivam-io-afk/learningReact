// This file is used to demonstrate the lifecycle methods of a class component in React

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

        //We can use api calls here if no condition is required
    // Using ComponentDidMount() method
    componentDidMount(){
        console.log("Mounted");
    }

        //we can use api calls here if condition is required
    // Using ComponentDidUpdate() method
    componentDidUpdate(preProps, preState){
        // console.log("Updated",this.state.count);
        console.log("Updated",preState.count,this.state.count);

    }


    // Using shouldComponentUpdate() method
    shouldComponentUpdate(nextProps, nextState){
        console.log("Should Update");
        if(nextState.count > 5){
            return false; //by default it is true
        }
        return true;
    }


    // Using componentWillUnmount() method
    componentWillUnmount(){
        console.log("Unmounted");
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
                <br/><br/>
                <br/><br/>
            </div>
        );
    }
}



export default User;