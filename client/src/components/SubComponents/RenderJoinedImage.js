import React from 'react';
import "../../style/App.css";

const RenderJoinedImage = ({images, orientation}) => {

    const getCaption = (side) => {
        return images.find(image => image.imageside === side)?.caption || '';
      };

  return (
    <div className="App">
    <div className='PhotographyContent'>
      <div className="joined-images">
            {images.map((image, index) => (
            <div key={index} className={`joined-image-item ${image.imageside === 'left' ? 'left-image' : 'right-image'}`}>
                    <img src={image.url} alt={`Photograph : ${index + 1}`} loading='lazy' style={{
                    borderRadius: image.imageside === 'left' ? '8px 0 0 8px' : '0 8px 8px 0',
                    overflow: 'hidden',
                    }}/>
                {/* <p>{image.caption}</p> */}
            </div>
            ))}
          <p style={{color:`white`, paddingLeft:`525px`}}>{getCaption('left')} - {getCaption('right')}</p>
      </div>
  </div>
  </div>
    );
    };
    
export default RenderJoinedImage;