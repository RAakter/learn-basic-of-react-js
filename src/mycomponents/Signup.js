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
            let namePattern = /^([a-zA-Z ]){2,30}$/;
            if(!namePattern.test(inputValue)){
                this.setState({fname: "First Name is not valid"});
            }
        }
        if(inputName === 'lname'){
            let namePattern = /^([a-zA-Z ]){2,30}$/;
            if(!namePattern.test(inputValue)){
                this.setState({lname: "Last Name is not valid"});
            }
        }
        if(inputName === 'email'){
            let emailPattern = /\S+@\S+\.\S+/;
            if(!emailPattern.test(inputValue)){
                this.setState({email: "Email is not valid"});
            }
        }
        if(inputName === 'mobile'){
            if(!Number(inputValue)){
                this.setState({mobile: "Mobile No is not valid"});
            }
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