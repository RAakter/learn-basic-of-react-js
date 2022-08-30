import React, { Component } from 'react';


class Condition1 extends Component {

    constructor(){
        super()

        this.state = {
            login: false,
        }

    }

    changeName(name){
       this.setState({name: name});
    }


    render(){
        return (
            this.state.login? (<h1>Logout</h1>) : (<h1>Login</h1>)
        )
    }
}

export default Condition1;