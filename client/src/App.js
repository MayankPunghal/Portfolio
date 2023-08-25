import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact"; 
// import Card from "./components/Card"; 
import Navbar from "./components/Navbar";
import AnimatedText from "./components/AnimatedWord";
import "./style/App.css";


function App() {
  
  return (
    // <BrowserRouter>
    //   <div>
    //     <Routes>
    //       <Route path="/" exact component={Home} />
    //       <Route path="/about" component={About} />
    //       <Route path="/projects" component={Projects} />
    //       <Route path="/contact" component={Contact} />
    //       <Route path="/Card" component={Card} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>
    <div className="App">
      <Navbar />
      <div className="full-name centered-heading">
        <AnimatedText text="Mayank" dataValue="Mayank" className="firstName" />
        <AnimatedText text="Punghal" dataValue="Punghal" className="lastName" />
      </div>
    </div>
  );
}

export default App;
