import React from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';

const App: React.FC = () => {
  return (
    <div className='flex mobile:flex-col'>
      <div className='absolute z-10'>
        <Navbar />
      </div>
      <div>
        <HeroSection />
      </div>
      <div>
        <About />
      </div>
    </div>
  );
}

export default App;
