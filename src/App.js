import logo from './logo.svg';
import './App.css';
import Hello from './mycomponents/Hello';

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
        <Hello />
      </header>
    </div>
  );
}

export default App;
