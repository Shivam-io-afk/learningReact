// This file is used to demonstrate the lifecycle methods of a class component in React

import React from 'react';

class User extends React.Component {
    constructor() { // State is initialized here
        super();
        this.state = {
            name: "John Doe",
            userID: "1234",
            count: 0
        }
        console.log("Constructor");
    }

    //We can use api calls here if no condition is required
    // Using ComponentDidMount() method
    componentDidMount() {
        console.log("Mounted");
    }

    //we can use api calls here if condition is required
    // Using ComponentDidUpdate() method
    componentDidUpdate(preProps, preState) {
        // console.log("Updated",this.state.count);
        console.log("Updated", preState.count, this.state.count, this.state.count%2);

    }


    // Using shouldComponentUpdate() method
    shouldComponentUpdate(nextProps, nextState) {
        console.log("\nShould Update");
        if (nextState.count > 6) {
            return false; //by default it is false, it prevent the component to update
        }
        return true;
    }


    render() {
        console.log("Rendered");
        return (
            <>
                <br /><br /><br /> <hr /> <br /><br />
                

                <h1>Class Component</h1>
                <h2>Hi, I'm {this.state.name}</h2>
                <h3>My User ID is {this.state.userID}</h3>
                <h4>COUNTER : {this.state.count}</h4>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Click Me to Update</button>
                <br /><br />
                <br /><br />

                {
                    this.state.count % 2 ? <Child /> : null
                }
            </>
        );
    }
}



export default User;



class Child extends React.Component {
    constructor() {
        super();
        console.log("Child Constructor");
    }


      // Using componentWillUnmount() method
      componentWillUnmount() {
        console.log("\nUnmounted");
    }

    render() {
        return (
            <div>
                <h2>Child Component</h2>
            </div>
        )
    }
}


export { Child };