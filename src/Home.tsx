import React from 'react';

import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import "./components/Navbar.css"
import About from './pages/About';


const Home: React.FC = () => {
  return (
    <>
    <Navbar />
    <HeroSection/>
    <About />
    </>
  );
}

export default Home;
