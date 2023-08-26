import React from 'react';
import Navbar from "./Navbar";
import AnimatedText from "./AnimatedWord";
import "../style/App.css";

const About = () => {
  return (
    <div className="App">
        <Navbar />
        <AnimatedText text="About" dataValue="About" className="full-name firstName" />
        </div>
        );
    };
    
export default About;