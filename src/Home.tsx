import React from 'react';

import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import "./components/Navbar.css"


const Home: React.FC = () => {
  return (
    <>
    <Navbar />
    <HeroSection/>
    </>
  );
}

export default Home;
