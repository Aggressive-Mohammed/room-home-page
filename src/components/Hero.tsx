import { useState } from "react";
import { Link } from "react-router-dom";
import dtimg1 from "../images/desktop-image-hero-1.jpg";
import aboutlight from '../images/image-about-light.jpg';
import arrowIcon from '../images/icon-arrow.svg';
import aboutdark from '../images/image-about-dark.jpg';
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
    <main className="flex h-1538 desktop:h-800 flex-col items-center relative desktop:flex-col" aria-labelledby="hero-section">

      {/* top */}
      <div className="flex desktop:flex-row desktop:h-534">
        {/* Figure containing the background image */}
        <figure className="relative">
          <img
            src={backgroundImages[index]}
            alt={`Hero background ${index + 1}`}
            className="object-fit w-375 desktop:w-840 desktop:h-fit"
          />
          {/* Scroll buttons for mobile view */}
          <div className="absolute bottom-0 right-0 lg:hidden desktop:hidden">
            <Scroll onNext={nextContent} onPrev={prevContent} />
          </div>
        </figure>

        {/* Content section */}
        <div className="flex flex-col h-278 items-normal justify-center px-4 my-4 relative desktop:w-600 desktop:h-[518px] desktop:items-center">
          
         {/* top-left */}
        <div className="desktop:flex desktop:flex-col desktop:w-400 desktop:h-261 desktop:justify-center desktop:px-1">
          {/* Header containing the dynamic title */}
          <header className="font-semibold mb-4 text-3xl text-black leading-6 lg:text-4xl desktop:leading-7 desktop:text-4xl desktop:px-2 desktop:font-bold" id="hero-section">
            <h1>
              {headers[index]}
            </h1>
          </header>
          {/* Paragraph containing the dynamic description */}
          <div className="font-medium text-sm text-neural h-24 lg:h-1/4 lg:text-base desktop:text-base">
            <p>
              {paragraphs[index]}
            </p>
          </div>
          {/* Shop Now link */}
          <div className="flex items-baseline cursor-pointer mt-14 desktop:hover:opacity-35 desktop:mt-10">
            <Link to={'/shop'} className="text-black w-161 h-15 tracking-[.5rem] font-bold text-base uppercase desktop:text-lg desktop:font-semibold" aria-label="Shop now">
              Shop now
            </Link>
            <img src={arrowIcon} alt="Arrow Icon" className="h-3 lg:h-3 desktop:h-4" />
          </div>
          </div>
          {/* Scroll buttons for desktop view */}
          <div className="hidden lg:block lg:absolute lg:left-0 lg:bottom-0 desktop:block desktop:absolute desktop:left-0 desktop:bottom-0">
            <Scroll onNext={nextContent} onPrev={prevContent} />
          </div>
        </div>
      </div>

















      <div className="flex desktop:flex-row desktop:w-1440">
        {/* Dark-themed image */}
        <figure className="">
          <img
            src={aboutdark}
            alt="A dark-themed furniture setup"
            className="object-fit w-375 desktop:w-[420px] desktop:h-310"
          />
        </figure>

        {/* Article containing the text content */}
        <article className="flex flex-col 1 h-278 items-normal justify-center px-4 my-4 relative desktop:w-580 desktop:h-266 desktop:px-8" role="article">
          {/* Header for the article */}
          <header className="font-bold text-sm desktop:text-base text-black tracking-[5px] desktop:tracking-[6px] uppercase">
            <h2 id="about-section">
              About our furniture
            </h2>
          </header>
          {/* Paragraph describing the furniture collection */}
          <p className="font-medium text-sm text-neural mt-4 desktop:text-base desktop:font-medium">
            Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best expresses your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
          </p>
        </article>

        {/* Light-themed image */}
        <figure className="">
          <img
            src={aboutlight}
            alt="A light-themed furniture setup"
            className="object-fit w-375 lg:h-534 lg:w-840 lg:object-fill desktop:w-[420px] desktop:h-310"
          />
        </figure>

      </div>
    </main>
  );
};

export default HeroSection;
