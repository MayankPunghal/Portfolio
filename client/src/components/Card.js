import React from 'react';
import '../style/Card.css'; // Import your CSS file

const Card = () => {
  return (
    //card is clipping with the background need to fix that.
    <div className="cardBody">
      <div className="container">
      <div className="front side">
        <div className="content">
          <h1>Mayank</h1>
          <p>
            I am a web developer. I have worked with a range of programming languages, frameworks, and technologies -{' '}
            <b style={{ fontSize: '1.25rem' }}>ASP.NET, C#, Js, SQL</b> and others. I look forward to the opportunities
            that enable me to use my experience to bring about a change.
          </p>
          <p>
            <b style={{ textTransform: 'uppercase', fontSize: '36px' }}>change.</b>
          </p>
        </div>
      </div>
      <div className="back side">
        <div className="content">
          <div className="socials">
            <a href="https://twitter.com/Mayankpunghal" target="_blank" className="fancy" rel="noreferrer">
              <img src="../icons8-twitter.gif" alt="Twitter" loading="lazy" className="socicon" />
            </a>
            <a href="https://www.instagram.com/mayankpunghal/" target="_blank" className="fancy" rel="noreferrer">
              <img src="../icons8-instagram.gif" alt="Instagram" loading="lazy" className="socicon" />
            </a>
            <a href="https://www.linkedin.com/in/mayankpunghal/" target="_blank" className="fancy" rel="noreferrer">
              <img src="../icons8-linkedin-circled.gif" alt="Linkedin" loading="lazy" className="socicon" />
            </a>
            <a href="https://github.com/MayankPunghal" target="_blank" className="fancy" rel="noreferrer">
              <img src="../icons8-github.gif" alt="Github" className="socicon" />
            </a>
          </div>
          <div className="contacts">
            <a className="phone fancy" href="tel:+917021566720">
              +91-7021566720
            </a>
            <a className="email fancy" href="mailto:mayankpunghal@gmail.com">
              mayankpunghal@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;
