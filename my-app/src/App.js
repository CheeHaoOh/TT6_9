
import './App.css';
import Header from './components/bernard/Header';
import fakebody from './components/bernard/assets/fakebody.png';

// import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">

      <Header/>
     
      <img src={fakebody} alt="Nature" class="responsive"/>
      <h1>Hello world</h1>
      {/* <BrowserRouter>
        <Routes>
          <Route path ="/" element ={<Header/>} />
          <Route path ="/cWallets" element = {<CWallet />} />
        </Routes>        
      </BrowserRouter> */}
    </div>




  );
}

export default App;
