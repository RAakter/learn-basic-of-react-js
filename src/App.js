import logo from './logo.svg';
import './App.css';
import {Hello, Button} from './mycomponents/Hello';
import Welcome from './mycomponents/Welcome';
import Arrow from './mycomponents/Arrow';

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

        <Button/>
        <Arrow/>
        <Arrow/>

      </header>
    </div>
  );
}

export default App;
