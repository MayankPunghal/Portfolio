import React from 'react';
import "../../style/App.css";

const RenderImage = ({images, orientation}) => {

  return (
    <div className="App">
      <div className='PhotographyContent'>
        <div className="image-grid">
          {images.map((image, index) => (
            <div key={index} className={`image-item`}>
                    <img src={image.url} alt={`Photograph : ${index + 1}`} loading='lazy' />
              <p>{image.caption}</p>
            </div>
          ))}
        </div>
    </div>
    </div>
    );
    };
    
export default RenderImage;