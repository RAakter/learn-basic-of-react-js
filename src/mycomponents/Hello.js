import React from 'react';


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
            <button type='button' style={{
                backgroundColor: 'blue', color: 'white', borderRadius: '2px', marginBottom: '30px'}}
                onClick={clickMe.bind(this, 'clicked from function')}>Click me from Function!</button>
        </div>
    )

}

function clickMe(message){
    alert(message);
}

export {Hello, Button};