import { useState } from "react";
import { Link } from "react-router-dom";
import aboutdark from '../images/image-about-dark.jpg';
import aboutlight from '../images/image-about-light.jpg';
import dtimg1 from "../images/desktop-image-hero-1.jpg";
import dtimg2 from "../images/desktop-image-hero-2.jpg";
import dtimg3 from "../images/desktop-image-hero-3.jpg";
import arrowIcon from '../images/icon-arrow.svg';
import Scroll from "./Scroll";

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  // Arrays containing dynamic content for each section
  const backgroundImages = [dtimg1, dtimg2, dtimg3];

  const textShadows = [
    { textShadow: '1px 3px 6px #A0A0A0' },
  ];

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

  // Function to handle moving to the next content
  const nextContent = () => {
    setIndex((prevIndex) => (prevIndex + 1) % headers.length);
  };

  // Function to handle moving to the previous content
  const prevContent = () => {
    setIndex((prevIndex) => (prevIndex - 1 + headers.length) % headers.length);
  };

  return (
    <section className="lg:grid lg:grid-rows-2">
      {/* First row of the section with image and content */}
      <div className="lg:grid lg:grid-cols-12">
        <figure className="relative desktop:col-span-7">
          <img
            src={backgroundImages[index]}
            alt={`Hero background ${index + 1}`}
            className="w-full"
          />
          <div className="absolute bottom-0 right-0 lg:block desktop:hidden">
            {/* Scroll component for navigation */}
            <Scroll onNext={nextContent} onPrev={prevContent} />
          </div>
        </figure>

        <div className="lg:col-span-5 flex flex-col items-center lg:relative md:px-6 md:my-6">
          <header className="max-w-80 text-xs px-4 py-6 md:max-w-2xl lg:max-w-sm lg:my-16 lg:mx-16">
            <h1
              className="font-semibold py-4 leading-7 text-3xl md:text-6xl md:font-semibold lg:text-4xl lg:font-bold lg:leading-8 lg:py-3"
              style={textShadows[index]}
            >
              {/* Dynamic header content */}
              {headers[index]}
            </h1>
            <p className="text-neural h-24 md:text-2xl">
              {/* Dynamic paragraph content */}
              {paragraphs[index]}
            </p>
            <div className="flex items-center py-6 cursor-pointer desktop:hover:opacity-35 md:mt-24 desktop:mt-8">
              {/* Shop now link for navigation */}
              <Link
                to={'/shop'}
                className="text-black tracking-[.5rem] font-medium text-sm uppercase md:text-3xl md:tracking-[1.5rem] md:font-bold desktop:text-xl desktop:font-bold"
                aria-label="Shop now"
              >
                Shop now
              </Link>
              <img src={arrowIcon} alt="Arrow Icon" className="h-2 mx-2 md:h-6 desktop:h-4" />
            </div>
          </header>
          <div className="hidden absolute bottom-0 left-0 desktop:hidden">
            {/* Scroll component for navigation */}
            <Scroll onNext={nextContent} onPrev={prevContent} />
          </div>
        </div>
      </div>

      {/* Second row of the section with additional images and content */}
      <div className="flex flex-col md:flex md:flex-col lg:flex lg:flex-row">
        <figure className="">
          {/* Dark-themed image */}
          <img
            src={aboutdark}
            alt="A dark-themed furniture setup"
            className="md:w-full"
            aria-hidden="true"
          />
        </figure>
        <div className="md:items-center md:justify-center md:my-16">
          <article className="max-w-80 md:max-w-none text-xs px-4 py-6 md:flex md:flex-col md:h-80 md:px-16 desktop:basis-7/12">
            <header className="font-bold text-black uppercase text-sm md:text-3xl tracking-[2px] md:tracking-[4px]">
              <h2 id="about-section">About our furniture</h2>
            </header>
            <p className="font-medium text-xs text-neural h-40 w-full mt-4 md:text-2xl md:font-sm lg:text-sm desktop:font-medium desktop:text-lg">
              {/* About section content */}
              Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best expresses your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
            </p>
          </article>
        </div>
        <figure className="">
          {/* Light-themed image */}
          <img
            src={aboutlight}
            alt="A light-themed furniture setup"
            className="md:w-full"
            aria-hidden="true"
          />
        </figure>
      </div>
    </section>

  );
};

export default HeroSection;
