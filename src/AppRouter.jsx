import React from 'react';
import { Route,Router, Routes } from 'react-router-dom';
import Home from './container/shared/Home';
import About from './container/About';
import Contact from './container/shared/Contact';
import Service from './container/shared/Service';



const AppRouter = () => {
  return (
    <div>
    <Routes>
       <Route exact path="/" element={<Home />} />
       <Route exact path="/home" element={<Home  />} />
       <Route exact path="/about" element={<About  />} />
       <Route exact path='/contact' element={<Contact />} />
       <Route exact path="/service" element={<Service />} />
    </Routes>


    </div>
  )
};

export default AppRouter;