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
    <header className="items-center absolute z-10 font-spartan w-full lg:w-1/2 lg:inline lg:mt-10">
      <div className="flex px-4 py-8 lg:hidden">
        <img
          src={hamburgerIcon}
          alt="Menu"
          className="cursor-pointer ml-4"
          onClick={toggleNavbar}
        />
        <img src={logo} alt="Logo" className="mx-16" />
      </div>

      <nav ref={navRef} className="nav w-full font-spartan py-4 h-screen items-center absolute top-0 z-20 text-black lg:text-white font-bold lg:h-20 ">
        <div className="flex flex-col w-full h-full">
          <div className="bg-white absolute top-0 w-full h-20 flex flex-row items-center justify-center font-spartan lg:justify-start lg:bg-unset">
            <img
              src={closeIcon}
              alt="Close menu"
              className="inline mr-8 ml-2 cursor-pointer sm text-white lg:hidden"
              onClick={toggleNavbar}
            />
            <img src={logo} alt="Logo" className="mx-16 hidden lg:block" />
            <a href="#home" className="px-2 py-2 lg:px-4" aria-label="Home">
              home
            </a>
            <a href="#shop" className="px-2 py-2 lg:px-4" aria-label="Shop">
              shop
            </a>
            <a href="#about" className="px-2 py-2 lg:px-4" aria-label="About">
              about
            </a>
            <a href="#contact" className="px-2 py-2 lg:px-4" aria-label="Contact">
              contact
            </a>
          </div>
          <div className="bg-black w-full flex flex-col items-start justify-center bg-opacity-50 h-full lg:hidden">
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
