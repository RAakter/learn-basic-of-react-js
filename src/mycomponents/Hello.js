import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


function Hello(props){
    return(
        <div>
            <p>{props.name}! I'm from functional component.</p>
        </div>
    )
}

function Button(){
    return(
        <div>
            <button type='button' className="btn btn-primary mb-5"
                onClick={clickMe.bind(this, 'clicked from function')}>Click me from Function!</button>
        </div>
    )

}

function clickMe(message){
    alert(message);
}

export {Hello, Button};