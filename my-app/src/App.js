
import './App.css';
import Header from './components/bernard/Header';
import fakebody from './components/bernard/assets/fakebody.png';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import C_Wallet from "./components/tingwei/pages/C_Wallet";

function App() {
  return (
    <div className="App">

      
      <img src={fakebody} alt="Nature" class="responsive"/>
      <h1>Hello world</h1>
      <BrowserRouter>
        <Routes>
          <Route path ="/" element ={<Header/>} />
          <Route path ="/c_wallets" element = {<C_Wallet />} />
        </Routes>        
      </BrowserRouter>
    </div>




  );
}

export default App;
