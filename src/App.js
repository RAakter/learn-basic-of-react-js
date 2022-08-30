import logo from './logo.svg';
import './App.css';
import {Hello, Button} from './mycomponents/Hello';
import Welcome from './mycomponents/Welcome';
import Arrow from './mycomponents/Arrow';
import State from './mycomponents/State';
import Condition1 from './mycomponents/Condition1';
import Refresh from './mycomponents/Refresh';
import Newdemo from './mycomponents/Newdemo';
import Anotherdemo from './mycomponents/Anotherdemo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span className="App-span-color">Greetings from REZOWANA!</span>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* functional component */}
        <Hello name="Hi"/>
        <Hello name="Hello"/>
        <Hello name="Greetings"/>

        {/* class component */}
        <Welcome name="class"/>
        {/* <Welcome name="class 2"/> */}
        {/* <Welcome name="class 3"/> */}

        {/* button added for clicked on event */}
        <Button/>

        {/* arrow function */}
        <Arrow/>

         {/* state function */}
         <State/>

         <Condition1/>
         <Refresh/>
         <Newdemo/>
         <Anotherdemo/>

      </header>
    </div>
  );
}

export default App;
