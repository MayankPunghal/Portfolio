import React from 'react';
import Navbar from "./Navbar";
import AnimatedText from "./AnimatedWord";
import "../style/App.css";

const Contact = () => {
  return (
    <div className="App">
        <Navbar />
        <AnimatedText text="Contact" dataValue="Contact" className="full-name firstName" />
        </div>
        );
    };
    
export default Contact;