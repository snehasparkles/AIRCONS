import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Ac from './components/Ac';
import Wm from './components/Wm';
import Rf from './components/Rf';
import Nav from './components/Nav';

function App() {
  return (
    <>
  
    <BrowserRouter>
    
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ac" element={<Ac />} />
        <Route path="/washingmachine" element={<Wm />} />
        <Route path="/fridge" element={<Rf />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
