import React, { useMemo } from 'react';
import AnimatedText from "./AnimatedWord";
import Navbar from "./Navbar";
import RenderImage from "./SubComponents/RenderImage"
import RenderJoinedImage from "./SubComponents/RenderJoinedImage"
import "../style/App.css";

const Photography = () => {
  const landscape_wide_16x9 = useMemo(() => [
    { url: '/Images/landscape_wide_16x9_img-1.jpg', caption: 'City Landscape Noida' },
    { url: '/Images/landscape_wide_16x9_img-2.jpg', caption: 'Long Exposure Shot Noida' },
    { url: '/Images/landscape_wide_16x9_img-3.jpg', caption: 'Busy Red-Fort Market, Delhi' },
    { url: '/Images/landscape_wide_16x9_img-4.jpg', caption: 'Puri Beach, Orissa' },
    { url: '/Images/landscape_wide_16x9_img-5.jpg', caption: 'Dal Lake, Srinagar' },
    { url: '/Images/landscape_wide_16x9_img-6.jpg', caption: 'Dusk - Golden Hour over the City Skyline' },
    { url: '/Images/landscape_wide_16x9_img-7.jpeg', caption: 'Son River' },
    { url: '/Images/landscape_wide_16x9_img-8.jpeg', caption: 'Fishermen of Chilika Lake' },
    { url: '/Images/landscape_wide_16x9_img-9.jpeg', caption: 'Alibagh Beach' },
    { url: '/Images/landscape_wide_16x9_img-10.jpeg', caption: 'Goa Beach' },
  ], []);

  const landscape_medium_3x2 = useMemo(() => [
    { url: '/Images/landscape_medium_3x2_img-1.jpeg', caption: 'Urban Landscape - Ghansoli, Mumbai' },
    { url: '/Images/landscape_medium_3x2_img-5.jpg', caption: 'India Gate, Delhi' },
    { url: '/Images/landscape_medium_3x2_img-6.jpg', caption: 'Bank of Ganga, Rishikesh' },
    { url: '/Images/landscape_medium_3x2_img-7.jpg', caption: 'Northern Railway, Loharu' },
    { url: '/Images/landscape_medium_3x2_img-8.jpg', caption: 'Pizza!!!!!!' },
    { url: '/Images/landscape_medium_3x2_img-10.jpg', caption: 'Metro Cutting through the City, Greater Noida' },
    { url: '/Images/landscape_medium_3x2_img-11.jpg', caption: 'Spooky Architecture, Delhi' },
    { url: '/Images/landscape_medium_3x2_img-12.jpg', caption: 'Baltal Camp, Ladakh Mountains' },
    { url: '/Images/landscape_medium_3x2_img-13.jpg', caption: 'Mexican Cheesy Cromosque, Bistro Nirvana, Tapovan' },
    { url: '/Images/landscape_medium_3x2_img-14.jpg', caption: 'Coffee Caramel Pudding' },
    { url: '/Images/landscape_medium_3x2_img-15.jpg', caption: 'Chicken Stroganoff with Pasta' },
    { url: '/Images/landscape_medium_3x2_img-16.jpg', caption: 'Shrimp Thai Yom Tum' },
    { url: '/Images/landscape_medium_3x2_img-17.jpg', caption: 'McLeodGunj Mountains, Himachal Pradesh' },
  ], []);

  const portrait_tall_2x3 = useMemo(() => [
    { url: '/Images/portrait_tall_2x3_img-1.jpg', caption: 'Shraddhanjali Ceremony, India Gate' },
    { url: '/Images/portrait_tall_2x3_img-2.jpg', caption: 'Cedar Trees covering the Mountain' },
    { url: '/Images/portrait_tall_2x3_img-3.jpg', caption: 'Ancient Monastry in Himachal' },
    { url: '/Images/portrait_tall_2x3_img-4.jpg', caption: 'Pilgrims trekking to Amarnath Temple' },
    { url: '/Images/portrait_tall_2x3_img-5.jpg', caption: 'Post Apocalyptic Vibe' },
    { url: '/Images/portrait_tall_2x3_img-7.jpg', caption: 'Macro' },
    { url: '/Images/portrait_tall_2x3_img-8.jpg', caption: 'Portrait' },
    { url: '/Images/portrait_tall_2x3_img-9.jpg', caption: 'Low Light - rainy mood' },
    { url: '/Images/portrait_tall_2x3_img-10.jpg', caption: 'Close up portrait' },
    { url: '/Images/portrait_tall_2x3_img-11.jpg', caption: 'Macro - object photography' },
    { url: '/Images/portrait_tall_2x3_img-12.jpg', caption: 'Just a pretty sunrise' },
    { url: '/Images/portrait_tall_2x3_img-13.jpg', caption: 'The start of the Jhelum river' },
    { url: '/Images/portrait_tall_2x3_img-14.jpg', caption: 'Abstract macro' },
    { url: '/Images/portrait_tall_2x3_img-15.jpg', caption: 'One of the temples in Khajuraho' },
    { url: '/Images/portrait_tall_2x3_img-16.jpg', caption: 'Cycling to Amarkantak' },
    { url: '/Images/portrait_tall_2x3_img-17.jpeg', caption: 'Lush Green Platues of Madhya Pradesh' },
    { url: '/Images/portrait_tall_2x3_img-18.jpeg', caption: 'Monochrome Portrait' },
    { url: '/Images/portrait_tall_2x3_img-19.jpeg', caption: 'Monochrome Wallpaper' },
    { url: '/Images/portrait_tall_2x3_img-20.jpeg', caption: 'Golden Hour hitting the river' },
    { url: '/Images/portrait_tall_2x3_img-21.jpeg', caption: 'Adventure' },
  ], []);

  const landscape_wide_16x9_joined = useMemo(() => [
    { url: '/Images/landscape_wide_16x9_img-11.1.jpg', caption: 'Panaroma', imageside:'left' },
    { url: '/Images/landscape_wide_16x9_img-11.2.jpg', caption: 'shot', imageside:'right'},
  ], []);

  return (
    <div className="App">
        <div className='PhotographyContainer'>
        <Navbar />
        <AnimatedText text="Photography" dataValue="Photography" className="firstName" />
        <RenderImage images={landscape_wide_16x9} orientation = "landscape_wide"/>
        <RenderImage images={landscape_medium_3x2} orientation = "landscape_medium"/>
        <RenderImage images={portrait_tall_2x3} orientation = "portrait_tall"/>
        <RenderJoinedImage images={landscape_wide_16x9_joined} orientation = "landscape_wide_joined"/>
        </div>
    </div>
    );
    };
    
export default Photography;