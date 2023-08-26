import React, { useEffect, useState } from 'react';
import "../../style/App.css";

const RenderJoinedImage = ({images, orientation}) => {

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

    const getCaption = (side) => {
        return images.find(image => image.imageside === side)?.caption || '';
      };

  return (
    <div className="App">
    <div className='PhotographyContent'>
      <div className="joined-images">
            {images.map((image, index) => (
            <div key={index} className={`joined-image-item ${image.imageside === 'left' ? 'left-image' : 'right-image'}`}>
                <div className='blur-load'>
                    <img src={image.url} alt={`Photograph : ${index + 1}`} loading='lazy' style={{
                    borderRadius: image.imageside === 'left' ? '8px 0 0 8px' : '0 8px 8px 0',
                    overflow: 'hidden',
                    }}/>
                </div>
            </div>
            ))}
          <p style={{color:`white`, paddingLeft:`525px`}}>{getCaption('left')} - {getCaption('right')}</p>
      </div>
  </div>
  </div>
    );
    };
    
export default RenderJoinedImage;