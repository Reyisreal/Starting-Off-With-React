import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://open.spotify.com/artist/6gWULYv8Y0QbpaDt2w6coW"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Music
        </a>
      </header>
    </div>
  );
}

export default App;
