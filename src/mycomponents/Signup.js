import React, { Component } from 'react';

class Signup extends Component {

    constructor(){
        super();
        this.state = {
            fname: '',
            lname: '',
            email: '',
            mobile: '',
        };
    }

    onChangeHandler=(event) =>{
        let inputName = event.target.name;
        let inputValue = event.target.value;

        this.setState({
            [inputName]: inputValue
        });

        if(inputName === 'fname'){

        }
        if(inputName === 'lname'){

        }
        if(inputName === 'email'){

        }
        if(inputName === 'mobile'){
            
        }
    }

    render() {
        return (
            <div>
                <p>Fisrt Name: {this.state.fname}</p>
                <p>Last Name: {this.state.lname}</p>
                <p>Email: {this.state.email}</p>
                <p>Mobile No: {this.state.mobile}</p>
                <form>
                    <input onChange={this.onChangeHandler} type="text" name="fname" placeholder="Your first name"></input><br></br> 
                    <input onChange={this.onChangeHandler} type="text" name="lname" placeholder="Your last name"></input><br></br> 
                    <input onChange={this.onChangeHandler} type="email" name="email" placeholder="Your email address"></input><br></br> 
                    <input onChange={this.onChangeHandler} type="text" name="mobile" placeholder="Your mobile"></input><br></br> 
                    <input type="submit" name="submit" value="Save Now"></input><br></br> 
                </form>
            </div>
        );
    }
}

export default Signup;