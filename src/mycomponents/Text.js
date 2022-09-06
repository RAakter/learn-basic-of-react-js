import React, { Component } from 'react';

class Text extends Component {

    constructor(){
        super();

        this.state={
            desc: "",
            userInput: ""

        };
    }

    onChangeHandler=(event)=>{
        let value = event.target.value;
        this.setState({
            userInput: value
        });
    }

    render() {
        return (
            <div>
                <textarea onChange={this.onChangeHandler}/>
                <p>{this.state.userInput}</p>
            </div>
        );
    }
}

export default Text;