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
    <section className="md:flex md:flex-col lg:flex">
      <figure className="relative">
        <img
          src={backgroundImages[index]}
          alt={`Background image ${index}`}
          className="w-full object-fit"
        />
        <div className="absolute bottom-0 right-0 md:block lg:hidden">
          <Scroll onNext={nextContent} onPrev={prevContent} />
        </div>
      </figure>
      <article className="my-8 mx-4 md:ml-20 md:p-10 md:flex md:flex-col md:relative max-w-xl lg:flex lg:flex-col lg:relative lg:justify-center lg:mx-0 lg:my-0">
        <div className="md:flex md:flex-col md:mx-2 md:max-w-full md:p-4 lg:flex lg:flex-col lg:mx-10 lg:max-w-80">
          <header className="font-spartan font-semibold text-3xl text-black leading-8 md:leading-10 md:font-bold md:text-5xl lg:font-bold lg:text-4xl ">
            <h1
              className=""
              style={textShadows[index]}
            >
              {headers[index]}
            </h1>
          </header>
          <div
            className="font-spartan font-medium text-sm text-neural min-h-36  max-w-96 md:text-base lg:font-light lg:text-base md:max-w-lg  md:my-4 lg:min-h-40 lg:max-w-80">
            <p className="">
              {paragraphs[index]}
            </p>
          </div>
          <div className="flex items-center md:items-baseline my-2 cursor-pointer lg:hover:opacity-35">
            <a href="#" className="text-black tracking-[.7rem] font-spartan font-semibold text-medium md:font-bold md:text-lg uppercase lg:font-bold w-auto h-6 lg:text-lg" aria-label="Shop now">
              Shop now
            </a>
            <img src={arrowIcon} alt="Arrow Icon" className="max-w-auto mx-2 max-h-4" />
          </div>
        </div>

        <div className="hidden md:hidden lg:block lg:absolute lg:left-0 lg:bottom-0">
          <Scroll onNext={nextContent} onPrev={prevContent} />
        </div>
      </article>



    </section>
  );
};

export default HeroSection;
