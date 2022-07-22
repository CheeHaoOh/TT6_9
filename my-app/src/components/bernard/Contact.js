import React from "react";
import { Link } from "react-router-dom";
import "./styles/Contact.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Contact() {
  return (
    <div className="contact">
<Link to='/'><ArrowBackIcon className='icon'/></Link>
      <h1>Contact Us</h1>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Message" className="input-message" />
      <Link to="/" className='send'>Send</Link>
    </div>
  );
}

export default Contact;
