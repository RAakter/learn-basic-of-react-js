import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                <form>
                    <p>My First Form</p>
                    <input type="text" placeholder="Your Name"></input>
                    <input type="submit" value="Submit Now"></input>
                </form>
            </div>
        );
    }
}

export default Form;