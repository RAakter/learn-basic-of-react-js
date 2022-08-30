import React, { Component } from 'react';


class State extends Component {

    constructor(){
        super()

        this.state = {
            name: 'State',
            message: 'State is a component that can be used to render the state.',
            greetings: {
                name1: 'Greetings',
                name2: 'Hi',
                name3: 'Hello',
            },
            age: ['28', '29', '30', '31', '32', '33', '34']
        }

    }


    render(){
        return (
            <div>
                <h1>{this.state.name}</h1>

                <p>{this.state.message}</p>
                <span>{this.state.greetings.name1}</span>
            </div>
            )
    }
}

export default State;