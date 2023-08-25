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
          <AnimatedIcon text=":)" dataValue=":)" className = "navbar-items-icon" link="/Card"/>
        </li>
        <li>
          <AnimatedText text="Home" dataValue="Home" className = "navbar-items" link="/"/>
        </li>
        <li>
          <AnimatedText text="About" dataValue="About" className = "navbar-items" link="/About"/>
        </li>
        <li>
          <AnimatedText text="Projects" dataValue="Projects" className = "navbar-items" link="/Projects"/>
        </li>
        <li>
          <AnimatedText text="Contact" dataValue="Contact" className = "navbar-items" link="/Contact"/>
        </li>
        <li>
          <AnimatedText text="Photography" dataValue="Photography" className = "navbar-items" link="/Photography"/>
        </li>
        <li>
          <AnimatedText text="Blog" dataValue="Blog" className = "navbar-items" link="/Blog"/>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
