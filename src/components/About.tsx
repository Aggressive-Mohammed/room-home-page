import React from "react";
import aboutdark from '../images/image-about-dark.jpg';
import aboutlight from '../images/image-about-light.jpg';

const About: React.FC = () => {
  return (
    <div className="flex flex-col desktop:flex-row">
      <div className="flex-1">
        <img src={aboutdark} alt="About Dark" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 p-8 flex flex-col justify-center">
        <h2 className="about-header uppercase font-spartan text-black font-bold text-base mb-4" style={{ letterSpacing: "5px" }}>
          About our furniture
        </h2>
        <p className="font-spartan font-medium text-neutral">
          Our multifunctional collection blends design and function to suit
          your individual taste. Make each room unique, or pick a cohesive
          theme that best expresses your interests and what inspires you. Find
          the furniture pieces you need, from traditional to contemporary
          styles or anything in between. Product specialists are available to
          help you create your dream space.
        </p>
      </div>
      <div className="flex-1">
        <img src={aboutlight} alt="About Light" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default About;
