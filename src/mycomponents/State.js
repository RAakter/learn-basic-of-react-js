import React, { Component } from 'react';


class State extends Component {

    constructor(){
        super()

        this.state = {
            name: 'State',
            message: 'State is a component that can be used to render the state.'
        }

    }


    render(){
        return (
            <div>
                <h1>{this.state.name}</h1>
                <p>{this.state.message}</p>
            </div>
            )
    }
}

export default State;