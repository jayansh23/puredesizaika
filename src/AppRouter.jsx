import React from 'react';
import { Route,Router, Routes } from 'react-router-dom';
import Home from './container/shared/Home';
import About from './container/About';

const AppRouter = () => {
  return (
    <div>
    <Routes>
       <Route exact path="/" element={<Home />} />
       <Route exact path="/home" element={<Home  />} />
       <Route exact path="/about" element={<About  />} />
    </Routes>


    </div>
  )
};

export default AppRouter;