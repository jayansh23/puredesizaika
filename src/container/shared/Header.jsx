import React from 'react'
import { NavLink } from "react-router-dom";
import Applogo from "../../asset/images/Logo.jpg"


const Header = () => {
  return (
    <div className='Header'>
         <img src={Applogo} className='logoSize' />

        
        <NavLink className="NavLink" to={"/Home"} >
    <span className='headerLink ' > <i class="fa fa-solid fa-home"></i> Home</span>
        </NavLink>
    
    <NavLink className="NavLink" to={"/About"} >
        <span className='headerlink'><i class="fa fa-solid fa-info"></i>About</span>

    </NavLink>

    <NavLink className="NavLink" to={"/Contact"} >
        <span className='headerlink'><i class="fa fa-sharp fa-solid fa-info"></i>Contact</span>

    </NavLink>

   
<div>
<a className="btn btn-danger" href="#" role="button">Online Order</a>
</div>

    </div>
  )
};

export default Header;