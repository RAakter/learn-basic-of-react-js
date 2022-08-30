import React, { Component } from 'react';
import ReactDom from 'react-dom';

class Anotherdemo extends Component {

    changeImage(){
       let img = document.getElementById("img");
       ReactDom.findDOMNode(img).style.display = "none";
    }

    render() {
        return (
            <div>
                <button onClick={this.changeImage}>Hide Image</button><br></br>
                <img id="img" src="./images/rezowana.jpg" alt="rezowana"></img>
            </div>
        );
    }
}

export default Anotherdemo;