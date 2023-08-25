import React from 'react';
import Navbar from "./Navbar";
import AnimatedText from "./AnimatedWord";
import "../style/App.css";

const Home = () => {
  return (
        <div className="App">
        <Navbar />
                <div className="full-name centered-heading">
                <AnimatedText text="Mayank" dataValue="Mayank" className="firstName" />
                <AnimatedText text="Punghal" dataValue="Punghal" className="lastName" />
                </div>
        </div>
        );
    };
    
export default Home;