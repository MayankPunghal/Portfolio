import React from 'react';
import Navbar from "./Navbar";
import AnimatedText from "./AnimatedWord";
import "../style/App.css";

const Projects = () => {
  return (
    <div className="App">
        <Navbar />
        <AnimatedText text="Projects" dataValue="Projects" className="firstName" />
        </div>
        );
    };
    
export default Projects;