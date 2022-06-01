import React from 'react';
import Home from './pages/Home';
import AboutUs from './pages/Aboutus';
import Contact from './pages/Contact';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={"404 - not found"} />     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
