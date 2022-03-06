import logo from './logo.svg';
import './App.css';
import { Search, Titlebar } from './components'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titlebar />
      </header>
      <div className="App-body">
        <div className="App-search">
          <Search />
        </div>

        <div className="App-podcast-view">
          <Search />
        </div>

        <div className="App-playlist">
          <Search />
        </div>
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
