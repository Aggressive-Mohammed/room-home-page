import React, { useRef } from "react";
import logo from "../images/logo.svg";
import hamburgerIcon from "../images/icon-hamburger.svg";
import closeIcon from "../images/icon-close.svg";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLDivElement | null>(null);

  const toggleNavbar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive_nav");
    }
  };

  return (
    <header className="items-center absolute z-10 font-spartan w-full">
      <div className="flex px-4 py-8">
        <img
          src={hamburgerIcon}
          alt="Menu"
          className="cursor-pointer ml-4"
          onClick={toggleNavbar}
        />
        <img src={logo} alt="Logo" className="mx-16 md:mx-2" />
      </div>

      <nav ref={navRef} className="nav w-full font-spartan py-4 h-screen items-center absolute top-0 z-20 text-black md:flex md:text-white font-bold">
        <div className="flex flex-col w-full h-full">
          <div className="bg-white absolute top-0 w-full h-20 flex flex-row items-center justify-center font-spartan">
            <img
              src={closeIcon}
              alt="Close menu"
              className="inline mr-8 ml-2 cursor-pointer text-white"
              onClick={toggleNavbar}
            />
            <a href="#home" className="px-2 py-2 font-spartan" aria-label="Home">
              home
            </a>
            <a href="#shop" className="px-2 py-2" aria-label="Shop">
              shop
            </a>
            <a href="#about" className="px-2 py-2" aria-label="About">
              about
            </a>
            <a href="#contact" className="px-2 py-2" aria-label="Contact">
              contact
            </a>
          </div>
          <div className="bg-black w-full flex flex-col items-start justify-center bg-opacity-50 h-full">

          </div>
        </div>
      </nav>




    </header>
  );
};

export default Navbar;
