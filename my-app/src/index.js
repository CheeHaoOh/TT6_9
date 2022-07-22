import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from './App';
import Contact from './components/bernard/Contact';
import Form from './components/bernard/Form';
// import Login from './components/bernard/login';
import CWallet from './components/tingwei/pages/CWallet';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="/login" element={<Login/>} /> */}
      <Route path="/registration" element={<Form/>} />
      <Route path='/contact' element={<Contact/>}/>
     
      <Route path ="/c_wallets" element = {<CWallet />} />
     </Routes>
  </Router>,
  document.getElementById('root')
);
