import React, { Component } from 'react';
import ReactDom from 'react-dom';

class Newdemo extends Component {


  myFun(){
    let container = document.getElementById("container"); // where I want to show
    let element = <h1>My Name is Rezowana, I'm from ReactDom</h1> // what I want to show
    let callback = function(){
        alert("I'm from Callback");
    }
    ReactDom.render(element, container, callback);
    // ReactDom.hydrate(element, container, callback);
  }



  render() {
    return (
      <div>
          <button onClick={this.myFun}>Fun</button>
          <h1 id="container">My Name Is Rezowana</h1>
      </div>
    )
  }
}

export default Newdemo;
