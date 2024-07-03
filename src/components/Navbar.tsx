import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import hamburgerIcon from "../images/icon-hamburger.svg";
import closeIcon from "../images/icon-close.svg";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to toggle the navigation menu
  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="items-center absolute z-10 w-full desktop:w-1/3 lg:block desktop:inline-block lg:mt-4 desktop:mt-8">
      {/* Top bar for mobile view with hamburger menu and logo */}
      <div className="flex justify-start px-4 py-8 md:mt-8 md:ml-8 lg:hidden desktop:hidden">
        <img
          src={hamburgerIcon}
          alt="Menu"
          className="cursor-pointer ml-2 md:h-8 "
          onClick={toggleNavbar}
          aria-expanded={isNavOpen}
          aria-controls="nav-menu"
        />
        <img src={logo} alt="Logo" className="ml-16 md:h-8 md:ml-24" />
      </div>
      {/* Navigation menu */}
      <nav
        id="nav-menu"
        className={`nav w-full py-4 h-screen desktop:h-8 lg:h-8 items-center absolute top-0 z-20 text-black lg:text-white desktop:text-white font-semibold text-base ${isNavOpen ? "responsive_nav" : ""}`}
        aria-hidden={!isNavOpen} // Accessibility: Hides the menu from screen readers when not visible
      >
        <div className="flex flex-col w-full h-full">
          {/* Menu items container */}
          <div className="bg-white absolute h-14 w-full desktop:w-1/3 lg:desktop:w-1/3 top-0 text-sm flex items-center
          md:h-28
          md:text-xl justify-around 
          md:justify-start
          lg:text-sm
          desktop:bg-unset lg:bg-unset desktop:text-lg desktop:font-semibold">
            <img
              src={closeIcon}
              alt="Close menu"
              className="inline h-3 mr-8 ml-4 md:ml-12 md:mr-16 cursor-pointer md:h-8 text-white lg:hidden desktop:hidden"
              onClick={toggleNavbar}
              aria-label="Close menu"
            />
            <img src={logo} alt="Logo" className="mx-16 hidden  desktop:block lg:block lg:h-4 lg:mx-10 desktop:mx-16" />
            {/* Navigation links */}
            <Link to={'/'} className="px-2 py-2 md:mx-8 lg:mx-2" aria-label="Home">home</Link>
            <Link to={'/shop'} className="px-2 py-2 md:mx-8  lg:mx-2" aria-label="Shop">shop</Link>
            <Link to={'/about'} className="px-2 py-2 md:mx-8 lg:mx-2" aria-label="About">about</Link>
            <Link to={'/contact'} className="px-2 py-2 md:mx-8 lg:mx-2" aria-label="Contact">contact</Link>
          </div>
          {/* Background overlay for mobile view */}
          <div className="bg-black w-full flex flex-col items-start justify-center bg-opacity-50 h-full">
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
