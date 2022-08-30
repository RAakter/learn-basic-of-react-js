import React, { Component } from 'react';


class Condition1 extends Component {

    constructor(){
        super()

        this.state = {
            login: false,
        }

    }

    render(){
        // conditional return variable elements
        // return (
        //     this.state.login? (<h1>Logout</h1>) : (<h1>Login</h1>)
        // )

        // conditional return if else
        if(this.state.login === true){
            return (<h1>Logout</h1>);
        }
        else{
            return (<h1>Login</h1>); 
        }
      
    }
}

export default Condition1;