import React from 'react';
import "../../style/App.css";

const RenderImage = ({images, orientation}) => {
    const getImageHeight = (orientation) => {
        if (orientation === 'vertical') {
          return '-webkit-fill-available';
        } else if (orientation === 'horizontal') {
          return '-webkit-fill-available';
        }
        return 'auto'; // Default height if orientation is not specified
      };

  return (
    <div className="App">
      <div className='PhotographyContent'>
        <div className="image-grid">
          {images.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image.url} alt={`Photograph : ${index + 1}`} style={{ height: getImageHeight(orientation) }} />
              <p>{image.caption}</p>
            </div>
          ))}
        </div>
    </div>
    </div>
    );
    };
    
export default RenderImage;