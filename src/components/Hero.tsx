import React, { useState } from "react";
import dtimg1 from "../images/desktop-image-hero-1.jpg";
import arrowIcon from '../images/icon-arrow.svg';
import dtimg2 from "../images/desktop-image-hero-2.jpg";
import dtimg3 from "../images/desktop-image-hero-3.jpg";
import Scroll from "./Scroll";


const HeroSection: React.FC = () => {
  const [index, setIndex] = useState(0);

  const backgroundImages = [dtimg1, dtimg2, dtimg3];

  const headers = [
    "Discover innovative ways to decorate",
    "We are available all across the world",
    "Manufactured with the best materials"
  ];

  const paragraphs = [
    "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    "Our modern furniture store provides a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
  ];

  const textShadows = [
    { textShadow: '1px 3px 6px #A0A0A0' },
  ];

  const nextContent = () => {
    setIndex((prevIndex) => (prevIndex + 1) % headers.length);
  };

  const prevContent = () => {
    setIndex((prevIndex) => (prevIndex - 1 + headers.length) % headers.length);
  };

  return (

    <section className="flex mobile: flex-col desktop:flex-row">
      <div className="relative">
        <img src={backgroundImages[index]} alt="Hero" className=" object-contain" />
        <div className="absolute z-10 bottom-0 right-0">
          <Scroll onPrev={prevContent} onNext={nextContent} />
        </div>
      </div>
      <div className="flex mobile:flex-col mobile:justify-center mobile:mx-10 mobile:mt-10">
        <div className="header-text font-spartan text-black mobile: text-4xl py-3 mobile:text-3xl desktop:text-4xl font-bold">
          <h1 className="font-semibold mobile:xl" style={textShadows[index]}>
            {headers[index]}

          </h1>
        </div>
        <div className="font-spartan font-medium text-neutral mobile:text-sm mobile:mb-4">
          <p>
            {paragraphs[index]}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-5 hover:opacity-35 cursor-pointer mobile:mx-10 mobile:my-6 mobile:mb-16">
        <a href="#" className="font-spartan font-bold text-black uppercase mobile:text-xs desktop:text-base" aria-label="Shop now" style={{ letterSpacing: "15px" }}>
          Shop now
        </a>
        <img src={arrowIcon} alt="Arrow Icon" className="bg-invisible ms-8" />
      </div>
    </section>
  );
};

export default HeroSection;
