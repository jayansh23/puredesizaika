import React from 'react'
import { NavLink } from "react-router-dom";
// import Applogo from "logo192.png";
import Applogo from "../../asset/image/Logo.jpg"


const Header = () => {
  return (

    
    <div className='Header'>
    

        <div className='row'>
        <div className='col-md-4'>
         <img src={Applogo} className='logoSize' />
         </div>

        <div className='col-md-6'>
        <NavLink className="NavLink" to={"/Home"} >
    <span className='headerLink ' > <i class="fa fa-solid fa-home"></i> Home </span>
        </NavLink>
    
    <NavLink className="NavLink" to={"/About"} >
        <span className='headerlink'> <i class="fa fa-solid fa-info"></i> About </span>

    </NavLink>

    <NavLink className="NavLink" to={"/Contact"} >
        <span className='headerlink'> <i class="fa fa-sharp fa-solid fa-info"></i> Contact </span>

    </NavLink>

    <NavLink className="NavLink" to={"/Service"} >
        <span className='headerlink'> <i class="fa fa-sharp fa-solid fa-info"></i> Service </span>

    </NavLink>
    </div>

   
<div className='col-md-2'>
<a className="btn btn-danger" href="#" role="button">Online Order</a>
</div>
</div>

    </div>
  )
};

export default Header;