import React from 'react';
import { Route,Router, Routes } from 'react-router-dom';
import Home from './container/shared/Home';
import About from './container/About';
import Contact from './container/shared/Contact';

const AppRouter = () => {
  return (
    <div>
    <Routes>
       <Route exact path="/" element={<Home />} />
       <Route exact path="/home" element={<Home  />} />
       <Route exact path="/about" element={<About  />} />
       <Route exact path='/contact' element={<Contact/>} />
    </Routes>


    </div>
  )
};

export default AppRouter;