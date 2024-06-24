import React from 'react';

import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import "./components/Navbar.css"




const Home: React.FC = () => {
  return (
    <div className='overflow-x-hidden'>
    <Navbar />
    <HeroSection/>

    </div>
  );
}

export default Home;
