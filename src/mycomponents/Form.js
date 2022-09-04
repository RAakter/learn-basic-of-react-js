import React, { Component } from 'react';

class Form extends Component {

    constructor(){
        super()

        this.state={
            //name : " "
            username: " "
        }
    }

    onChangeHandler=(event)=>{
        //let newName = event.target.value;
        let myname  = event.target.name;
        let myvalue = event.target.value;
        this.setState({[myname]:myvalue});
        // this.setState({name:newName});
    }

    render() {
        return (
            <div>
                <form>
                    <p>My First Form</p>
                    <p>{this.state.username}</p>
                    <input name="username" onChange={this.onChangeHandler} type="text" placeholder="Your Name"></input>
                    <input type="submit" value="Submit Now"></input>
                </form>
            </div>
        );
    }
}

export default Form;