import React from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import "./components/Navbar.css"
// import HeroSectioncopy from './components/Hero copy';

const App: React.FC = () => {
  return (
    <div>
    <Navbar />

    <HeroSection/>
    
    <About />
    
    
    </div>
      
   
  );
}

export default App;
