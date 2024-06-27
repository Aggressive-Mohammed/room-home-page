import { useState } from "react";
import { Link } from "react-router-dom";
import dtimg1 from "../images/desktop-image-hero-1.jpg";
import arrowIcon from '../images/icon-arrow.svg';
import dtimg2 from "../images/desktop-image-hero-2.jpg";
import dtimg3 from "../images/desktop-image-hero-3.jpg";
import Scroll from "./Scroll";

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  // Arrays containing the background images, headers, and paragraphs for each section
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
  
  // Function to go to the next content
  const nextContent = () => {
    setIndex((prevIndex) => (prevIndex + 1) % headers.length);
  };

  // Function to go to the previous content
  const prevContent = () => {
    setIndex((prevIndex) => (prevIndex - 1 + headers.length) % headers.length);
  };

  return (
    // Main section container with flex layout for desktop screens
    <section className="flex flex-col relative desktop:flex-row" aria-labelledby="hero-section">
      {/* Figure containing the background image */}
      <figure className="relative">
        <img
          src={backgroundImages[index]}
          alt={`Hero background ${index + 1}`}
          className="w-full object-fill"
        />
        {/* Scroll buttons for mobile view */}
        <div className="absolute bottom-0 right-0 desktop:hidden">
          <Scroll onNext={nextContent} onPrev={prevContent} />
        </div>
      </figure>

      {/* Content section */}
      <div className="px-4 py-8 relative desktop:basis-7/12 desktop:pt-32 desktop:px-20 desktop:max-w-xl">
        {/* Header containing the dynamic title */}
        <header className="font-semibold mb-4 text-3xl md:text-5xl text-black leading-6 desktop:text-5xl" id="hero-section">
          <h1>
            {headers[index]}
          </h1>
        </header>
        {/* Paragraph containing the dynamic description */}
        <div className="font-medium text-sm text-neural h-24 w-full md:text-base desktop:text-base">
          <p>
            {paragraphs[index]}
          </p>
        </div>
        {/* Shop Now link */}
        <div className="flex items-center mt-10 cursor-pointer desktop:hover:opacity-35 desktop:mt-6">
          <Link to={'/shop'} className="text-black tracking-[.5rem] font-medium text-sm uppercase desktop:text-lg desktop:font-semibold" aria-label="Shop now">
            Shop now
          </Link>
          <img src={arrowIcon} alt="Arrow Icon" className="h-2 mx-2 desktop:h-4" />
        </div>
        {/* Scroll buttons for desktop view */}
        <div className="hidden desktop:block desktop:absolute desktop:left-0 desktop:bottom-0">
          <Scroll onNext={nextContent} onPrev={prevContent} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
