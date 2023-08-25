import React, { useMemo } from 'react';
import AnimatedText from "./AnimatedWord";
import Navbar from "./Navbar";
import RenderImage from "./SubComponents/RenderImage"
import "../style/App.css";

const Photography = () => {
  const Verticalimages = useMemo(() => [
    { url: '/Images/image1.jpg', caption: 'Photograph 1' },
    { url: '/Images/image3.jpg', caption: 'Photograph 3' },
    { url: '/Images/image4.jpg', caption: 'Photograph 4' },
    { url: '/Images/image15.jpg', caption: 'Photograph 15' },
    { url: '/Images/image16.jpg', caption: 'Photograph 16' },
    { url: '/Images/image22.jpg', caption: 'Photograph 22' },
    { url: '/Images/image24.jpg', caption: 'Photograph 24' },
    { url: '/Images/image26.jpg', caption: 'Photograph 26' },
    { url: '/Images/image49.jpeg', caption: 'Photograph 49' },
    { url: '/Images/image53.jpeg', caption: 'Photograph 53' },
  ], []);
  // const Horizontalimages = useMemo(() => [
  //   { url: '/Images/image2.jpg', caption: 'Photograph 2' },
  //   { url: '/Images/image5.jpg', caption: 'Photograph 5' },
  //   { url: '/Images/image6.jpg', caption: 'Photograph 6' },
  //   { url: '/Images/image7.jpg', caption: 'Photograph 7' },
  //   { url: '/Images/image8.jpg', caption: 'Photograph 8' },
  //   { url: '/Images/image9.jpg', caption: 'Photograph 9' },
  //   { url: '/Images/image10.jpg', caption: 'Photograph 10' },
  //   { url: '/Images/image11.jpg', caption: 'Photograph 11' },
  //   { url: '/Images/image12.jpg', caption: 'Photograph 12' },
  //   { url: '/Images/image13.jpg', caption: 'Photograph 13' },
  //   { url: '/Images/image14.jpg', caption: 'Photograph 14' },
  //   { url: '/Images/image17.jpg', caption: 'Photograph 17' },
  //   { url: '/Images/image18.jpg', caption: 'Photograph 18' },
  //   { url: '/Images/image19.jpg', caption: 'Photograph 19' },
  //   { url: '/Images/image20.jpg', caption: 'Photograph 20' },
  //   { url: '/Images/image21.jpg', caption: 'Photograph 21' },
  //   { url: '/Images/image23.jpg', caption: 'Photograph 23' },
  //   { url: '/Images/image25.jpg', caption: 'Photograph 25' },
  //   { url: '/Images/image27.jpg', caption: 'Photograph 27' },
  //   { url: '/Images/image28.jpg', caption: 'Photograph 28' },
  //   { url: '/Images/image29.jpg', caption: 'Photograph 29' },
  //   { url: '/Images/image30.jpg', caption: 'Photograph 30' },
  //   { url: '/Images/image31.jpg', caption: 'Photograph 31' },
  //   { url: '/Images/image32.jpg', caption: 'Photograph 32' },
  //   { url: '/Images/image34.jpg', caption: 'Photograph 34' },
  //   { url: '/Images/image35.jpg', caption: 'Photograph 35' },
  //   { url: '/Images/image36.jpg', caption: 'Photograph 36' },
  //   { url: '/Images/image37.jpg', caption: 'Photograph 37' },
  //   { url: '/Images/image38.jpg', caption: 'Photograph 38' },
  //   { url: '/Images/image39.jpg', caption: 'Photograph 39' },
  //   { url: '/Images/image40.jpg', caption: 'Photograph 40' },
  //   { url: '/Images/image41.jpg', caption: 'Photograph 41' },
  //   { url: '/Images/image42.jpg', caption: 'Photograph 42' },
  //   { url: '/Images/image43.jpg', caption: 'Photograph 43' },
  //   { url: '/Images/image44.jpg', caption: 'Photograph 44' },
  //   { url: '/Images/image45.jpg', caption: 'Photograph 45' },
  //   { url: '/Images/image46.jpg', caption: 'Photograph 46' },
  //   { url: '/Images/image47.jpg', caption: 'Photograph 47' },
  //   { url: '/Images/image48.jpg', caption: 'Photograph 48' },
  //   { url: '/Images/image50.jpeg', caption: 'Photograph 50' },
  //   { url: '/Images/image51.jpeg', caption: 'Photograph 51' },
  //   { url: '/Images/image52.jpeg', caption: 'Photograph 52' },
  //   { url: '/Images/image54.jpeg', caption: 'Photograph 54' },
  //   { url: '/Images/image55.jpeg', caption: 'Photograph 55' },
  //   { url: '/Images/image56.jpeg', caption: 'Photograph 56' },
  //   { url: '/Images/image57.jpeg', caption: 'Photograph 57' },
  //   { url: '/Images/image58.jpeg', caption: 'Photograph 58' },
  //   { url: '/Images/image59.jpeg', caption: 'Photograph 59' },
  //   { url: '/Images/image60.jpeg', caption: 'Photograph 60' },
  //   { url: '/Images/image61.jpeg', caption: 'Photograph 61' },
  //   { url: '/Images/image62.jpeg', caption: 'Photograph 62' },
  //   { url: '/Images/image63.jpeg', caption: 'Photograph 63' }
  // ], []);
  return (
    <div className="App">
        <div className='PhotographyContainer'>
        <Navbar />
        <AnimatedText text="Photography" dataValue="Photography" className="firstName" />
        <RenderImage images={Verticalimages} orientation = "vertical"/>
        {/* <RenderImage images={Horizontalimages} orientation = "horizontal"/> */}
        </div>
    </div>
    );
    };
    
export default Photography;