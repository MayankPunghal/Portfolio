import React, { useRef} from 'react';
// import { Link } from 'react-router-dom';

const AnimatedWord = ({ text, dataValue, className, component}) => {
  const elementRef = useRef(null);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const animateText = (event) => {
    let iteration = 0;
    clearInterval(event.target.interval);
    event.target.interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
      if (iteration >= event.target.dataset.value.length) {
        clearInterval(event.target.interval);
      }
      iteration += 1 / 3;
    }, 25);
  };


  return (
    // <Link
    //   to={component}
    //   className={`animate-word ${className}`}
    //   data-value={dataValue}
    //   onMouseOver={animateText}
    // >
    //   {text}
    // </Link>
    <h1
      ref={elementRef}
      className={`animate-word ${className}`}
      data-value={dataValue}
      onMouseOver={animateText}
    >
      {text}
    </h1>
  );
};

export default AnimatedWord;
