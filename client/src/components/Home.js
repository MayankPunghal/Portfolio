import React, { useEffect } from 'react';
import Navbar from "./Navbar";
import AnimatedText from "./AnimatedWord";
import "../style/App.css";

const Home = () => {
  useEffect(() => {
    const outsideElemLeft = document.querySelector('.scroll-animation-outside');
    const inside1ElemRight = document.querySelector('.scroll-animation-inside1');
    const inside2ElemLeft = document.querySelector('.scroll-animation-inside2');
    const inside3ElemRight = document.querySelector('.scroll-animation-inside3');
    
    const handleScroll = () => {
      const rotationvalueoutside = window.scrollY * 0.15 * 0.5;
      const rotationvalueinside1 = window.scrollY * 0.10 * 0.5;
      const rotationvalueinside2 = window.scrollY * 0.05 * 0.5;
      const rotationvalueinside3 = window.scrollY * 0.02 * 0.5;

      const originalMin = 0;const originalMax = 6000;
      const newMin = 0.8;const newMax = 20;
      const normalize = (value) => {
        return newMin + ((value - originalMin) / (originalMax - originalMin)) * (newMax - newMin);
      };
      const scalevalueoutside = normalize(window.scrollY * 0.1);
      const scalevalueinside1 = normalize(window.scrollY * 0.1);
      const scalevalueinside2 = normalize(window.scrollY * 0.1);
      const scalevalueinside3 = normalize(window.scrollY * 0.1);

      outsideElemLeft.style.transform = `translateX(-50%) translateY(-50%) rotate(${rotationvalueoutside}deg) scale(${scalevalueoutside})`;
      inside1ElemRight.style.transform = `translateX(-50%) translateY(-50%) rotate(-${rotationvalueinside1}deg) scale(${scalevalueinside1}) `;
      inside2ElemLeft.style.transform = `translateX(-50%) translateY(-50%) rotate(${rotationvalueinside2}deg) scale(${scalevalueinside2}) `;
      inside3ElemRight.style.transform = `translateX(-50%) translateY(-50%) rotate(-${rotationvalueinside3}deg) scale(${scalevalueinside3}) `;
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
        <div className="App">
            <img src = "/rotator_l.png" className='scroll-animation-outside rotators'/>
            <img src = "/rotator1_r.png" className='scroll-animation-inside1 rotators'/>
            <img src = "/rotator2_l.png" className='scroll-animation-inside2 rotators'/>
            <img src = "/rotator3_r.png" className='scroll-animation-inside3 rotators'/>
            <div className='back-blur'></div>
        <Navbar />
                <div className="full-name centered-heading">
                <AnimatedText text="Mayank" dataValue="Mayank" className="firstName" />
                <AnimatedText text="Punghal" dataValue="Punghal" className="lastName" />
                </div>
        </div>
        );
    };
    
export default Home;