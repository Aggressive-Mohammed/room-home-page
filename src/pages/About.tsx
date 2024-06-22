import React from "react";
import aboutdark from '../images/image-about-dark.jpg';
import aboutlight from '../images/image-about-light.jpg';

const About: React.FC = () => {
  return (
    // Main section container with flex layout for desktop screens
    <section className="desktop:flex" aria-labelledby="about-section">
        {/* Dark-themed image */}
        <figure className="">
          <img 
            src={aboutdark} 
            alt="A dark-themed furniture setup" 
            className="w-full object-cover lg:h-full" 
          />
        </figure>
        {/* Article containing the text content */}
        <article className="px-4 py-8 desktop:basis-2/5 desktop:px-8 desktop:py-14" role="article">
          {/* Header for the article */}
          <header className="font-bold text-sm desktop:text-base text-black tracking-[7px] uppercase">
            <h2 id="about-section">
              About our furniture
            </h2>
          </header>
          {/* Paragraph describing the furniture collection */}
          <p className="font-medium text-sm text-neural h-40 w-full mt-4 desktop:text-base desktop:font-medium">
            Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best expresses your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
          </p>
        </article>
        {/* Light-themed image */}
        <figure className="desktop:col-span-2">
          <img 
            src={aboutlight} 
            alt="A light-themed furniture setup" 
            className="w-full object-cover desktop:h-full" 
          />
        </figure>
    </section>
  );
}

export default About;
