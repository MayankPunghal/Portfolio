import React, { useEffect, useState } from 'react';
import "../../style/App.css";

const RenderImage = ({images, orientation}) => {
    const [loadedDivs, setLoadedDivs] = useState([]);

    useEffect(() => {
      const blurDivs = document.querySelectorAll(".blur-load");
      blurDivs.forEach((div) => {
        const img = div.querySelector("img");
  
        function loaded() {
          div.classList.add("loaded");
          setLoadedDivs((prevLoadedDivs) => [...prevLoadedDivs, div]);
        }
  
        if (img.complete) {
          loaded();
        } else {
          img.addEventListener("load", loaded);
        }
      });
    }, []);


  return (
    <div className="App">
      <div className='PhotographyContent'>
        <div className="image-grid">
          {images.map((image, index) => (
            <div key={index} className={`image-item`}>
                <div className={`blur-load ${loadedDivs.includes(index) ? 'loaded' : ''}`}style={{ backgroundImage: `url(${image.smallImage})` }}>
                    <img src={image.url} alt={`Photograph : ${index + 1}`} loading='lazy' />
              </div>
              <p>{image.caption}</p>
            </div>
          ))}
        </div>
    </div>
    </div>
    );
    };
    
export default RenderImage;