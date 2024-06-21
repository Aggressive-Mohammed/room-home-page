import React, { useState, useRef } from "react";
import logo from "../images/logo.svg";
import hamburgerIcon from "../images/icon-hamburger.svg";
import closeIcon from "../images/icon-close.svg";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="items-center absolute z-10 w-full md:w-full lg:w-1/3  lg:ml-8 lg:inline-block lg:mt-4">
      <div className="flex justify-start px-4 py-8 lg:hidden md:flex md:justify-start md:px-8 md:py-12">
        <img
          src={hamburgerIcon}
          alt="Menu"
          className="cursor-pointer ml-2 md:h-8 md:w-auto"
          onClick={toggleNavbar}
          aria-expanded={isNavOpen}
          aria-controls="nav-menu"
        />
        <img src={logo} alt="Logo" className="ml-16" />
      </div>
      <nav
        id="nav-menu"
        className={`nav w-full py-4 h-screen lg:h-8  items-center absolute top-0 z-20 text-black lg:text-white font-semibold text-base ${isNavOpen ? "responsive_nav" : ""}`}
        aria-hidden={!isNavOpen}
      >
        <div className="flex flex-col w-full h-full">
          <div className="bg-white absolute w-full top-0 text-sm h-20  flex items-center justify-around lg:bg-unset">
            <img
              src={closeIcon}
              alt="Close menu"
              className="inline h-3 mr-8 ml-4  cursor-pointer text-white  lg:hidden"
              onClick={toggleNavbar}
              aria-label="Close menu"
            />
            <img src={logo} alt="Logo" className="mx-16 hidden md:hidden lg:block" />
            <a href="#home" className="px-4 py-2 lg:px-4" aria-label="Home">home</a>
            <a href="#shop" className="px-4 py-2 md:py-4 lg:px-4 md:px-10" aria-label="Shop">shop</a>
            <a href="#about" className="px-4 py-2 md:py-4 md:px-10 lg:px-4" aria-label="About">about</a>
            <a href="#contact" className="px-2 py-2  lg:px-4" aria-label="Contact">contact</a>
          </div>
          <div className="bg-black w-full flex flex-col items-start justify-center bg-opacity-50 h-full lg:hidden">
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
