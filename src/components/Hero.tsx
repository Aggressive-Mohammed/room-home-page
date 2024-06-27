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
    <section className="flex flex-col relative desktop:flex-row" aria-labelledby="hero-section">
      {/* Hero Image Section */}
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

      {/* Content Section */}
      <div className="px-5 py-8 relative  desktop:basis-7/12 desktop:pt-32 md:py-16 md:mx-10 desktop:px-20 desktop:max-w-xl">
        {/* Header containing the dynamic title */}
        <header className="font-semibold mb-4 text-3xl md:text-7xl md:font-bold text-black  leading-6 desktop:text-5xl" id="hero-section">
          <h1>
            {headers[index]}
          </h1>
        </header>
        {/* Paragraph containing the dynamic description */}
        <div className="font-medium text-sm text-neural h-24 w-full md:text-2xl  desktop:text-base">
          <p>
            {paragraphs[index]}
          </p>
        </div>
        {/* Shop Now Link */}
        <div className="flex items-center mt-16 cursor-pointer desktop:hover:opacity-35 md:mt-24 desktop:mt-6">
          <Link to={'/shop'} className="text-black tracking-[.5rem] font-medium text-sm uppercase md:text-xl md:tracking-[.8rem] md:font-bold
          desktop:text-lg desktop:font-semibold" aria-label="Shop now">
            Shop now
          </Link>
          <img src={arrowIcon} alt="Arrow Icon" className="h-2 mx-2 md:h-6 desktop:h-4" />
        </div>
        {/* Scroll buttons for desktop view */}
        <div className="hidden desktop:block desktop:absolute desktop:left-0 desktop:bottom-0">
          <Scroll onNext={nextContent} onPrev={prevContent} />
        </div>
      </div>

      {/* About Section */}
      <section className="desktop:flex" aria-labelledby="about-section">
        {/* Dark-themed image */}
        <figure>
          <img 
            src={aboutdark} 
            alt="A dark-themed furniture setup" 
            className="w-full object-cover lg:h-full"
            aria-hidden="true"  // since this image is decorative and not critical content
          />
        </figure>
        {/* Article containing the text content */}
        <article className="px-4 py-8 desktop:basis-2/5 md:mx-8 md:py-16  desktop:px-8 desktop:py-14" role="article">
          {/* Header for the article */}
          <header className="font-bold text-sm md:text-xl desktop:text-base md:font-bold text-black tracking-[5px] uppercase">
            <h2 id="about-section">About our furniture</h2>
          </header>
          {/* Paragraph describing the furniture collection */}
          <p className="font-medium text-sm text-neural h-40 w-full mt-4 md:text-lg desktop:text-base desktop:font-medium">
            Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best expresses your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
          </p>
        </article>
        {/* Light-themed image */}
        <figure className="desktop:col-span-2">
          <img 
            src={aboutlight} 
            alt="A light-themed furniture setup" 
            className="w-full object-cover desktop:h-full"
            aria-hidden="true"  // since this image is decorative and not critical content
          />
        </figure>
      </section>
    </section>
  );
};

export default HeroSection;
