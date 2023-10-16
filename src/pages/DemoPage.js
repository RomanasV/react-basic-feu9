import logo from './logo.svg';
import './DemoPage.css';

function DemoPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Sveiki atvykę į React puslapį</p>

        <p>2 + 2 = {2 + 2}</p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <ul className="test">
          <li>Vienas</li>
          <li>Du</li>
          <li>Trys</li>
        </ul>
      </header>
    </div>
  );
}

export default DemoPage;
