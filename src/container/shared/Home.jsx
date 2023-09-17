import React from 'react'
import Slider from 'react-slick'
import Banners from './Banners';



const Home = () => {
  
  var settings = {
    dots: true,
    infinite: true,
  
    autoplay: true,
    autoplaySpeed: 1000,

    slidesToShow: 1,
    slidesToScroll: 1
  };  

  return (
    <div className='HomeSection' >
        <h1>Indian Cuisine</h1>
        <Banners />
      
      <h2>The Purpose of Our Restaurant</h2>

<p className='HomePara'>What is the purpose of Restaurant?  Neil Postman said that “without a purpose,
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

<h2>Reviews</h2>

<Slider {...settings} className='SliderSection'>
  <div>
    <h4>pankaj</h4>
  <p style={{ color:'green' }}>
"#The food is really amazing here#!!!!"</p>
  </div>
  <div>
    <h3>Rohan</h3>
    <p style={{color:"yellow"}}>
      "Our family like this place because meals are like homemade....:-!!"</p>
  </div>

  </Slider>

  <h3>PICK YOUR MEAL</h3>

  <div className='row'>
    <div className='col-md-6'>
    <a className="btn btn-danger" href="#" role="button">Vegetarian items hghsgsfsj</a>

    </div>
    <div className='col-md-6'>
    <a className="btn btn-danger" href="#" role="button">Non-Veg ghfgfgdfd</a>

    </div>

  </div>



        </div>
  )
};

export default Home ;