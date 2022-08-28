import React, { Component } from 'react';


class Welcome extends Component {

    doThisFromClass(message){
        alert(message);
    }

    render() {
        return <div>
            <button type='button' style={{
            backgroundColor: 'black', color: 'white', borderRadius: '2px', marginBottom: '30px'}}
            onClick={this.doThisFromClass.bind(this, 'clicked from class')}>Click me from Class!</button>
            <p>I'm from {this.props.name} Component!</p> 
        </div>
    }
}

export default Welcome;