
import './App.css';
import Header from './components/bernard/Header';
import fakebody from './components/bernard/assets/fakebody.png';

// import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() { 
  const lastname = localStorage.getItem("lastname");
  return (
    <div className="App">

      <Header/>
      <p>Welcome {lastname}</p>
      <img src={fakebody} alt="Nature" class="responsive"/>


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
