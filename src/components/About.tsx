import React from "react";
import aboutdark from '../images/image-about-dark.jpg';
import aboutlight from '../images/image-about-light.jpg';


const About: React.FC = () => {
  return (
    <section className="lg:grid lg:grid-cols-6">
        <figure className="lg:col-span-2">
          <img src={aboutdark} alt="A light-themed furniture setup" className="w-full object-cover lg:h-full " />
        </figure>
        <article className="lg:col-span-2 mx-2 mb-8 px-2 lg:my-10 lg:mx-8">
          <header className="font-spartan mt-6 font-bold text-sm text-black tracking-[4px] mb-2 uppercase lg:text-lg lg:tracking-[5px]">
            <h2>
              About our furniture
            </h2>
          </header>
          <p className="font-spartan font-medium text-sm text-neural lg:font-semibold">
            Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best expresses your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
          </p>
        </article>
        <figure className=" lg:col-span-2">
          <img src={aboutlight} alt="A light-themed furniture setup" className="w-full object-cover lg:h-full"/>
        </figure>
    </section>

  );
}

export default About;
