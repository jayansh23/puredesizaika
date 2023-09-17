import React from 'react'
import Slider from 'react-slick'
import { useState } from 'react';





const Banners = () => {
    
  var settings = {
        dots: true,
        infinite: true,
      
        autoplay: true,
        autoplaySpeed: 1000,
    
        slidesToShow: 1,
        slidesToScroll: 1
      };

      const BannerPics = [
{id:1, image:"asset/images/banner3.jpg"},
{id:1, image:"asset/images/banner1.jpg"},
{id:1, image:"asset/images/banner2.jpg"},
{id:1, image:"asset/images/banner3.jpg"}


 ];

 return (
    <div>
      <div>
  <Slider {...settings} className='SliderSection'>

{BannerPics.map ((item,index) =>(

<img src={item.image} />

))}

 


</Slider>
</div>

    </div> 
  )
};

export default Banners