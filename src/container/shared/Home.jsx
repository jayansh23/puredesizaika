import React from 'react'
import Slider from 'react-slick'


const Home = () => {
  
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    

  return (
    <div className='HomeSection' >
        <h1>Indian Cuisine</h1>
      <p>Indian cuisine consists of a variety of regional and traditional cuisines native to India. Given the diversity
in soil,climate,culture,ethnic groups,and occupations,these cuisines vary substantially and use locally available spices,
herbs, vegetables, and fruits.It also varies seasonally, depending on which fruits and vegetables are ripe.

</p>

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

    <h2>The Purpose of Our Restaurant</h2>

<p>What is the purpose of Restaurant?  Neil Postman said that “without a purpose,
   schools are houses of detention, not attention” (1995, p. 7).  Most countries
    have systems of formal education and many of these are compulsory.  Although 
    the names of schools differ, most include a primary school for young children 
    and a secondary school for teenagers (Roser & Oritz-Ospina, 2019).
    Before landing upon a definition for school, it is important to delineate the
   differences between education and schooling.
    Education is a process of learning and growing as one gains understanding about 
    the surrounding world.  This is a lifelong process. It is, as John Dewey (1916) put it, a social process – 
    ‘a process of living and not a preparation for future living.’
    Schooling can often look like an institution with a very specific motive – drill
     learning into people according to some plan often drawn up by others. Paulo Friere 
     (1973) famously called this banking – making deposits of knowledge.  This type of 
     “schooling” treats learners like objects.



</p>


        </div>
  )
};

export default Home ;