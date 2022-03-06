import logo from './logo.svg';
import './App.css';
import { Podcasts, Titlebar, Playlist } from './components'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titlebar />
      </header>
      <div>
        <Podcasts />
      </div>

      <footer className="App-link">
        <a
          href="https://github.com/magilo/podcast-app-v1"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
      </footer>
    </div>
  );
}

export default App;
