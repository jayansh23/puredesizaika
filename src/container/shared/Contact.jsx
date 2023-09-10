import React from 'react'
import { useState } from 'react';


const Contact = () => {
    
const FamouseDishes = [
 {id:1, image:require("../../shortPics/profile1.jpg"), name:"PolaoCurry", ingredints:"rice,pulses,spices,green veggies"},
 {id:1, image:require("../../shortPics/profile2.jpg"), name:"MainThali", ingredints:"artist"},
 {id:1, image:require("../../shortPics/profile3.jpg"), name:"VegThali", ingredints:"artist"},
 {id:1, image:require("../../shortPics/profile4.jpg"), name:"Combo", ingredints:"artist"}



    ];

    const [menu, setmenu] = useState(FamouseDishes);


  return (
    <div>
        <h1>Our Famouse dishes</h1>
    
    
    <div className='row'>
    {menu.map ((item,index) =>(
        <div className='col-md-3' key={index}>
              <div class="card" >
              <img src={item.image} class="card-img-top" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">{item.name}</h5>
              <p class="card-text">{item.ingredints}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>


        </div>

        </div>

        </div>
        


    )
    )}
    <h2>Order in Demand</h2>
    <p>pick today's meal</p>

    </div>


    </div>
  )
}

export default Contact ;