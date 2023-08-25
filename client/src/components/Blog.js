import React from 'react';
import Navbar from "./Navbar";
import AnimatedText from "./AnimatedWord";
import "../style/App.css";

const Blog = () => {
  return (
    <div className="App">
        <Navbar />
        <AnimatedText text="Blog" dataValue="Blog" className="firstName" />
        </div>
        );
    };
    
export default Blog;