import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from './App';
import Contact from './components/bernard/Contact';
import Form from './components/bernard/Form';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/registration" element={<Form/>} />
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  </Router>,
  document.getElementById('root')
);
