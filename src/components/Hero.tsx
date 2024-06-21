import { useState } from "react";
import dtimg1 from "../images/desktop-image-hero-1.jpg";
import arrowIcon from '../images/icon-arrow.svg';
import dtimg2 from "../images/desktop-image-hero-2.jpg";
import dtimg3 from "../images/desktop-image-hero-3.jpg";
import Scroll from "./Scroll";

const HeroSection = () => {
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
    <section className="flex flex-col lg:flex-row relative">
      <figure className="relative">
        <img
          src={backgroundImages[index]}
          alt={`Background image ${index}`}
          className="w-full object-fill"
        />
        <div className="absolute bottom-0 right-0 lg:hidden">
          <Scroll onNext={nextContent} onPrev={prevContent} />
        </div>
      </figure>

      <div className="px-4 py-8 relative">
        <header className="font-semibold mb-4 text-3xl text-black leading-6">
          <h1 style={textShadows[index]}>
            {headers[index]}
          </h1>
        </header>
        <div className="font-medium text-sm text-neural h-[110px] w-full">
          <p>
            {paragraphs[index]}
          </p>
        </div>
        <div className="flex items-center mt-10 cursor-pointer lg:hover:opacity-35">
          <a href="#" className="text-black tracking-[.5rem] font-medium text-sm uppercase" aria-label="Shop now">
            Shop now
          </a>
          <img src={arrowIcon} alt="Arrow Icon" className="h-2 mx-2" />
        </div>
        <div className="hidden lg:block lg:absolute 2xl:left-0 2xl:bottom-0">
          <Scroll onNext={nextContent} onPrev={prevContent} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
