import React, { useRef } from 'react';

const AnimatedIcon = ({ text, dataValue, className, link}) => {
  const elementRef = useRef(null);

  const letters = "!/?.>,<;:'!@#$#%^&*()|'|[{]}=+-_:";

  const animateIcon = (event) => {
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

      iteration += 1 / 7;
    }, 45);
  };

  const navigateToLink = () => {
    window.location.href = link;
  };

  return (
    <h1
      onClick={navigateToLink}
      ref={elementRef}
      className={`animate-icon ${className}`}
      data-value={dataValue}
      onMouseOver={animateIcon}
    >
      {text}
    </h1>
  );
};

export default AnimatedIcon;