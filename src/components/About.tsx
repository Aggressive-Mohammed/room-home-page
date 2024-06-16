import React from "react";
import aboutdark from '../images/image-about-dark.jpg';
import aboutlight from '../images/image-about-light.jpg';


const About: React.FC = () => {
  return (
    <section className="md:grid md:grid-cols-4">
        <figure className="">
          <img src={aboutdark} alt="A light-themed furniture setup" className="w-full md:md:h-80 object-cover md:object-fill" />
        </figure>
        <article className="md:col-span-2 md:mx-8 md:my-5 mx-2 mb-8 px-2">
          <header className="font-spartan mt-6 font-bold text-sm text-black tracking-[4px] mb-2 uppercase md:mt-8 md:font-bold">
            <h2>
              About our furniture
            </h2>
          </header>
          <p className="font-spartan font-medium text-sm text-neural md:font-medium">
            Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best expresses your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
          </p>
        </article>
        <figure className="my-2">
          <img src={aboutlight} alt="A light-themed furniture setup" className="w-full md:h-80 object-cover md:object-fill"/>
        </figure>
    </section>

  );
}

export default About;
