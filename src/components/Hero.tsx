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
    <section className="md:grid grid-cols-2  flex flex-col min-w-80">
      <figure className="relative md:h-80">
        <div className="relative md:h-full">
          <img
            src={backgroundImages[index]}
            alt={`Background image ${index}`}
            className="w-full md:h-80 object-cover md:object-fill"
          />
          <div className="absolute bottom-0 right-0 md:hidden">
            <Scroll onNext={nextContent} onPrev={prevContent} />
          </div>
        </div>
      </figure>

      <article className="my-8 mx-4 md:relative md:py-12">
        <header className="font-spartan font-semibold text-3xl   text-black leading-8 pb-2 md:px-4">
          <h1
            className=""
            style={textShadows[index]}
          >
            {headers[index]}
          </h1>
        </header>
        <div className="md:px-4 ">
          <p className="font-spartan font-medium text-base text-neural min-h-48  max-w-96">
            {paragraphs[index]}
          </p>
        </div>
        <div className="flex items-center my-2 md:px-4 md:mt-4 md:hover:opacity-35 cursor-pointer">
          <a href="#" className="text-black tracking-[.7rem] font-spartan font-semibold text-sm uppercase w-auto h-4 md:font-medium" aria-label="Shop now">
            Shop now
          </a>
          <img src={arrowIcon} alt="Arrow Icon" className="max-w-auto mx-2 max-h-2 md:mx-4" />
        </div>
        <div className="absolute bottom-0 left-0 hidden md:block ">
          <Scroll onNext={nextContent} onPrev={prevContent} />
        </div>
      </article>
    </section>


  );
};

export default HeroSection;
