import React from 'react'
import Slider from 'react-slick'




const Banners = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };


  return (
    <div>
             <Slider {...settings} className='SliderSection'>

<div>
 <img src="../../asset/images/banner3.jpg"  />
 </div>
 <div>
   <img src="../../asset/images/banner1.jpg" />
 </div>
 <div>
   <img src="../../asset/images/banner2.jpg" />
 </div>
 <div>
 <img src="../../asset/images/banner5.jpg" />

 </div>


</Slider>

    </div> 
  )
};

export default Banners