import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../style/App.css';
import AnimatedText from './AnimatedWord';
import AnimatedIcon from './AnimatedIcon';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <AnimatedIcon text=":)" dataValue=":)" className = "navbar-items-icon" link="../e-card/card.html"/>
        </li>
        <li>
          <AnimatedText text="Home" dataValue="Home" className = "navbar-items" />
        </li>
        <li>
          <AnimatedText text="About" dataValue="About" className = "navbar-items" />
        </li>
        <li>
          <AnimatedText text="Projects" dataValue="Projects" className = "navbar-items" />
        </li>
        <li>
          <AnimatedText text="Contact" dataValue="Contact" className = "navbar-items" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
