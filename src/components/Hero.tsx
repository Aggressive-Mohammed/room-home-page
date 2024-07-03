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
    <section className="desktop:grid lg:grid-rows-2 desktop:max-h-fit">
      {/* First row of the section with image and content */}
      <div className="lg:grid lg:grid-cols-12">
        <figure className="relative lg:col-span-7 desktop:col-span-7">
          <img
            src={backgroundImages[index]}
            alt={`Hero background ${index + 1}`}
            className="w-full lg:h-full desktop:w-full"
          />
          <div className="absolute bottom-0 right-0 lg:hidden desktop:hidden">
            {/* Scroll component for navigation */}
            <Scroll onNext={nextContent} onPrev={prevContent} />
          </div>
        </figure>

        <div className="lg:col-span-5 flex flex-col items-center lg:items-center lg:relative md:px-6 md:my-6 lg:mt-5 lg:my-0 xl:mt-10 desktop:max-w-2xl desktop:px-12 desktop:mt-8 xl:max-w-xl">
          <header className="max-w-sm px-6 py-6 md:max-w-2xl lg:max-w-md xl:max-w-md lg:my-6 lg:px-6 desktop:max-w-2xl">
            <h1
              className="font-semibold py-4 mr-5 leading-7 text-3xl md:text-6xl md:font-semibold lg:text-4xl desktop:text-5xl lg:font-bold lg:leading-8 lg:py-3"
              style={textShadows[index]}
            >
              {/* Dynamic header content */}
              {headers[index]}
            </h1>
            <p className="text-dark-gray text-base h-40 md:h-60 md:text-3xl lg:text-sm lg:h-[105px] desktop:text-lg xl:text-base">
              {/* Dynamic paragraph content */}
              {paragraphs[index]}
            </p>
           <div className="flex items-center cursor-pointer mt-6 mb-4 md:mt-4 lg:mb-6 lg:mt-1 desktop:my-12 xl:mt-8 group">
              {/* Shop now link for navigation */}
              <Link
                to="/shop"
                className="text-black tracking-[1rem] font-semibold text-sm uppercase md:text-3xl lg:text-base md:tracking-[1.5rem] md:font-normal 
                desktop:font-medium lg:tracking-[.6rem] desktop:text-xl group-hover:opacity-35"
                aria-label="Shop now"
              >
                Shop now
              </Link>
              <img src={arrowIcon} alt="Arrow Icon" className="h-2 mx-2 md:h-6 lg:h-3 desktop:h-4 group-hover:opacity-75" />
            </div>
          </header>
          <div className="hidden absolute bottom-0 left-0 lg:block desktop:block">
            {/* Scroll component for navigation */}
            <Scroll onNext={nextContent} onPrev={prevContent} />
          </div>
        </div>
      </div>

      {/* Second row of the section with additional images and content */}
      <div className="flex flex-col md:flex md:flex-col lg:flex lg:h-auto lg:flex-row lg:max-h-64 lg:max-w-full desktop:flex desktop:flex-row desktop:max-h-80">
        <figure className="lg:max-w-full desktop:max-w-full">
          {/* Dark-themed image */}
          <img
            src={aboutdark}
            alt="A dark-themed furniture setup"
            className="md:w-full lg:w-max lg:h-full desktop:h-full"
            aria-hidden="true"
          />
        </figure> 

        <div className="flex-col my-8 items-center px-6 md:items-center  md:justify-center md:my-8 lg:justify-end lg:max-w-full desktop:basis-2/4 desktop:max-w-full xl:max-w-lg">
          <article className="max-w-none md:max-w-none text-xs py-6 lg:py-0 md:flex md:flex-col md:h-80 xl:mt-8 lg:h-auto md:px-16 lg:max-w-xl desktop:my-4 desktop:h-auto lg:px-2 desktop:px-8">
            <header className="font-bold text-black uppercase text-sm md:text-3xl tracking-[4px] lg:text-base md:tracking-[4px] desktop:text-xl xl:tracking-[4px] xl:text-lg">
              <h2 id="about-section ">About our furniture</h2>
            </header>
            <p className="font-base text-base text-dark-gray h-auto w-full mt-2 md:text-2xl md:font-sm lg:text-sm desktop:font-medium desktop:text-lg xl:text-base">
              {/* About section content */}
              Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best expresses your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
            </p>
          </article>
        </div>

        <figure className="lg:max-w-full desktop:max-w-full">
          {/* Light-themed image */}
          <img
            src={aboutlight}
            alt="A light-themed furniture setup"
            className="md:w-full lg:w-max lg:h-full desktop:h-full"
            aria-hidden="true"
          />
        </figure>
      </div>
    </section>

  );
};

export default HeroSection;
