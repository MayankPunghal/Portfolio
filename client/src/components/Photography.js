import React, { useMemo } from 'react';
import AnimatedText from "./AnimatedWord";
import Navbar from "./Navbar";
import RenderImage from "./SubComponents/RenderImage"
import RenderJoinedImage from "./SubComponents/RenderJoinedImage"
import "../style/App.css";

const Photography = () => {
  const landscape_wide_16x9 = useMemo(() => [
    { url: '/Images/landscape_wide_16x9_img-1.jpg', caption: 'City Landscape Noida', smallImage: '/Images/resizedImages/landscape_wide_16x9_img-1_small.jpg' },
  { url: '/Images/landscape_wide_16x9_img-2.jpg', caption: 'Long Exposure Shot Noida', smallImage: '/Images/resizedImages/landscape_wide_16x9_img-2_small.jpg' },
  { url: '/Images/landscape_wide_16x9_img-3.jpg', caption: 'Busy Red-Fort Market, Delhi', smallImage: '/Images/resizedImages/landscape_wide_16x9_img-3_small.jpg' },
  { url: '/Images/landscape_wide_16x9_img-4.jpg', caption: 'Puri Beach, Orissa', smallImage: '/Images/resizedImages/landscape_wide_16x9_img-4_small.jpg' },
  { url: '/Images/landscape_wide_16x9_img-5.jpg', caption: 'Dal Lake, Srinagar', smallImage: '/Images/resizedImages/landscape_wide_16x9_img-5_small.jpg' },
  { url: '/Images/landscape_wide_16x9_img-6.jpg', caption: 'Dusk - Golden Hour over the City Skyline', smallImage: '/Images/resizedImages/landscape_wide_16x9_img-6_small.jpg' },
  { url: '/Images/landscape_wide_16x9_img-7.jpeg', caption: 'Son River', smallImage: '/Images/resizedImages/landscape_wide_16x9_img-7_small.jpeg' },
  { url: '/Images/landscape_wide_16x9_img-8.jpeg', caption: 'Fishermen of Chilika Lake', smallImage: '/Images/resizedImages/landscape_wide_16x9_img-8_small.jpeg' },
  { url: '/Images/landscape_wide_16x9_img-9.jpeg', caption: 'Alibagh Beach', smallImage: '/Images/resizedImages/landscape_wide_16x9_img-9_small.jpeg' },
  { url: '/Images/landscape_wide_16x9_img-10.jpeg', caption: 'Goa Beach', smallImage: '/Images/resizedImages/landscape_wide_16x9_img-10_small.jpeg' },
  ], []);

  const landscape_medium_3x2 = useMemo(() => [
    { url: '/Images/landscape_medium_3x2_img-1.jpeg', caption: 'Urban Landscape - Ghansoli, Mumbai', smallImage: '/Images/resizedImages/landscape_medium_3x2_img-1_small.jpeg' },
  { url: '/Images/landscape_medium_3x2_img-5.jpg', caption: 'India Gate, Delhi', smallImage: '/Images/resizedImages/landscape_medium_3x2_img-5_small.jpg' },
  { url: '/Images/landscape_medium_3x2_img-6.jpg', caption: 'Bank of Ganga, Rishikesh', smallImage: '/Images/resizedImages/landscape_medium_3x2_img-6_small.jpg' },
  { url: '/Images/landscape_medium_3x2_img-7.jpg', caption: 'Northern Railway, Loharu', smallImage: '/Images/resizedImages/landscape_medium_3x2_img-7_small.jpg' },
  { url: '/Images/landscape_medium_3x2_img-8.jpg', caption: 'Pizza!!!!!!', smallImage: '/Images/resizedImages/landscape_medium_3x2_img-8_small.jpg' },
  { url: '/Images/landscape_medium_3x2_img-10.jpg', caption: 'Metro Cutting through the City, Greater Noida', smallImage: '/Images/resizedImages/landscape_medium_3x2_img-10_small.jpg' },
  { url: '/Images/landscape_medium_3x2_img-11.jpg', caption: 'Spooky Architecture, Delhi', smallImage: '/Images/resizedImages/landscape_medium_3x2_img-11_small.jpg' },
  { url: '/Images/landscape_medium_3x2_img-12.jpg', caption: 'Baltal Camp, Ladakh Mountains', smallImage: '/Images/resizedImages/landscape_medium_3x2_img-12_small.jpg' },
  { url: '/Images/landscape_medium_3x2_img-13.jpg', caption: 'Mexican Cheesy Cromosque, Bistro Nirvana, Tapovan', smallImage: '/Images/resizedImages/landscape_medium_3x2_img-13_small.jpg' },
  { url: '/Images/landscape_medium_3x2_img-14.jpg', caption: 'Coffee Caramel Pudding', smallImage: '/Images/resizedImages/landscape_medium_3x2_img-14_small.jpg' },
  { url: '/Images/landscape_medium_3x2_img-15.jpg', caption: 'Chicken Stroganoff with Pasta', smallImage: '/Images/resizedImages/landscape_medium_3x2_img-15_small.jpg' },
  { url: '/Images/landscape_medium_3x2_img-16.jpg', caption: 'Shrimp Thai Yom Tum', smallImage: '/Images/resizedImages/landscape_medium_3x2_img-16_small.jpg' },
  { url: '/Images/landscape_medium_3x2_img-17.jpg', caption: 'McLeodGunj Mountains, Himachal Pradesh', smallImage: '/Images/resizedImages/landscape_medium_3x2_img-17_small.jpg' },
  ], []);

  const portrait_tall_2x3 = useMemo(() => [
    { url: '/Images/portrait_tall_2x3_img-1.jpg', caption: 'Shraddhanjali Ceremony, India Gate', smallImage: '/Images/resizedImages/portrait_tall_2x3_img-1_small.jpg' },
  { url: '/Images/portrait_tall_2x3_img-2.jpg', caption: 'Cedar Trees covering the Mountain', smallImage: '/Images/resizedImages/portrait_tall_2x3_img-2_small.jpg' },
  { url: '/Images/portrait_tall_2x3_img-3.jpg', caption: 'Ancient Monastry in Himachal', smallImage: '/Images/resizedImages/portrait_tall_2x3_img-3_small.jpg' },
  { url: '/Images/portrait_tall_2x3_img-4.jpg', caption: 'Pilgrims trekking to Amarnath Temple', smallImage: '/Images/resizedImages/portrait_tall_2x3_img-4_small.jpg' },
  { url: '/Images/portrait_tall_2x3_img-5.jpg', caption: 'Post Apocalyptic Vibe', smallImage: '/Images/resizedImages/portrait_tall_2x3_img-5_small.jpg' },
  { url: '/Images/portrait_tall_2x3_img-7.jpg', caption: 'Macro', smallImage: '/Images/resizedImages/portrait_tall_2x3_img-7_small.jpg' },
  { url: '/Images/portrait_tall_2x3_img-8.jpg', caption: 'Portrait', smallImage: '/Images/resizedImages/portrait_tall_2x3_img-8_small.jpg' },
  { url: '/Images/portrait_tall_2x3_img-9.jpg', caption: 'Low Light - rainy mood', smallImage: '/Images/resizedImages/portrait_tall_2x3_img-9_small.jpg' },
  { url: '/Images/portrait_tall_2x3_img-10.jpg', caption: 'Close up portrait', smallImage: '/Images/resizedImages/portrait_tall_2x3_img-10_small.jpg' },
  { url: '/Images/portrait_tall_2x3_img-11.jpg', caption: 'Macro - object photography', smallImage: '/Images/resizedImages/portrait_tall_2x3_img-11_small.jpg' },
  { url: '/Images/portrait_tall_2x3_img-12.jpg', caption: 'Just a pretty sunrise', smallImage: '/Images/resizedImages/portrait_tall_2x3_img-12_small.jpg' },
  { url: '/Images/portrait_tall_2x3_img-13.jpg', caption: 'The start of the Jhelum river', smallImage: '/Images/resizedImages/portrait_tall_2x3_img-13_small.jpg' },
  { url: '/Images/portrait_tall_2x3_img-14.jpg', caption: 'Abstract macro', smallImage: '/Images/resizedImages/portrait_tall_2x3_img-14_small.jpg' },
  { url: '/Images/portrait_tall_2x3_img-15.jpg', caption: 'One of the temples in Khajuraho', smallImage: '/Images/resizedImages/portrait_tall_2x3_img-15_small.jpg' },
  { url: '/Images/portrait_tall_2x3_img-16.jpg', caption: 'Cycling to Amarkantak', smallImage: '/Images/resizedImages/portrait_tall_2x3_img-16_small.jpg' },
  { url: '/Images/portrait_tall_2x3_img-17.jpeg', caption: 'Lush Green Platues of Madhya Pradesh', smallImage: '/Images/resizedImages/portrait_tall_2x3_img-17_small.jpeg' },
  { url: '/Images/portrait_tall_2x3_img-18.jpeg', caption: 'Monochrome Portrait', smallImage: '/Images/resizedImages/portrait_tall_2x3_img-18_small.jpeg' },
  { url: '/Images/portrait_tall_2x3_img-19.jpeg', caption: 'Monochrome Wallpaper', smallImage: '/Images/resizedImages/portrait_tall_2x3_img-19_small.jpeg' },
  { url: '/Images/portrait_tall_2x3_img-20.jpeg', caption: 'Golden Hour hitting the river', smallImage: '/Images/resizedImages/portrait_tall_2x3_img-20_small.jpeg' },
  { url: '/Images/portrait_tall_2x3_img-21.jpeg', caption: 'Adventure', smallImage: '/Images/resizedImages/portrait_tall_2x3_img-21_small.jpeg' },
  ], []);

  const landscape_wide_16x9_joined = useMemo(() => [
    { url: '/Images/landscape_wide_16x9_img-11.1.jpg', caption: 'Panaroma', imageside: 'left', smallImage: '/Images/resizedImages/landscape_wide_16x9_img-11.1_small.jpg' },
    { url: '/Images/landscape_wide_16x9_img-11.2.jpg', caption: 'shot', imageside: 'right', smallImage: '/Images/resizedImages/landscape_wide_16x9_img-11.2_small.jpg' },
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