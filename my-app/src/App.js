import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Wallet from "./components/tingwei/pages/Wallet";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header> */}

      <BrowserRouter>
        <Routes>
          <Route path ="/" element = {<Wallet />} />
        </Routes>        
      </BrowserRouter>

    </div>




  );
}

export default App;
