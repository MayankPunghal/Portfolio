import React from 'react';
import "../style/Card.css";

const Card = () => {
  return (
    <div class="container">
        <div class="front side">
            <div class="content">
                <h1>Mayank </h1>
                <p>I am a web developer. I have worked with a range of programing languages, frameworks and technologies - <b style="font-size:1.25rem;">ASP.NET, C#, Js, SQL</b> and others. 
                  I look forward to the opportunities that enable me to use my experience to bring about a
                </p>
                <p><b style="text-transform:uppercase;font-size:36px">change.</b></p>
            </div>
        </div>
      <div class="back side">
        <div class="content">
            <div class="socials">
                <a href="https://twitter.com/Mayankpunghal" target="_blank" class="fancy"
                  ><img
                    src="./icons8-twitter.gif"
                    alt="Twitter"
                    loading="lazy"
                    class="socicon"   
                /></a>
                <a href="https://www.instagram.com/mayankpunghal/" target="_blank" class="fancy"
                  ><img
                    src="./icons8-instagram.gif"
                    alt="Instagram"
                    loading="lazy"
                    class="socicon"
                /></a>
                <a href="https://www.linkedin.com/in/mayankpunghal/" target="_blank" class="fancy"
                  ><img
                    src="./icons8-linkedin-circled.gif"
                    alt="Linkedin"
                    loading="lazy"
                    class="socicon"
                /></a>
                <a href="https://github.com/MayankPunghal" target="_blank" class="fancy"
                  ><img src="./icons8-github.gif" 
                  alt="Github" 
                  class="socicon"
                /></a>
                </div>
                <div class="contacts">
                  <a class="phone fancy" href="tel:+917021566720">+91-7021566720</a>
                  <a class="email fancy" href="mailto:mayankpunghal@gmail.com">*************@gmail.com</a>
                </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
