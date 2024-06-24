import React, { useState } from "react";
import { Link } from "react-router-dom";
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
    <header className="absolute z-10 w-full lg:w-1/3 desktop:w-362 lg:mt-4 desktop:mt-12">
      {/* Top bar for mobile view with hamburger menu and logo */}
      <div className="flex justify-start px-4 py-8 desktop:hidden">
        <img
          src={isNavOpen ? closeIcon : hamburgerIcon}
          alt={isNavOpen ? "Close menu" : "Menu"}
          className="cursor-pointer ml-2"
          onClick={toggleNavbar}
          aria-expanded={isNavOpen}
          aria-controls="nav-menu"
        />
        <img src={logo} alt="Logo" className="ml-16 desktop:block" />
      </div>
      {/* Navigation menu */}
      <nav
        id="nav-menu"
        className={`absolute top-0 z-20 w-full bg-white desktop:bg-transparent  desktop:bg-unset text-black desktop:text-white font-semibold text-base ${isNavOpen ? "block" : "hidden"} desktop:block`}
        aria-hidden={!isNavOpen}
      >
        <div className="flex flex-col lg:flex-row h-screen lg:h-auto items-center">
          <div className="flex flex-col desktop:flex-row items-center justify-start w-full lg:w-auto">
            <img src={logo} alt="Logo" className="hidden desktop:block desktop:mx-14" />
            <Link to="/" className="py-2 px-4 desktop:px-3" aria-label="Home">home</Link>
            <Link to="/shop" className="py-2 px-4 desktop:px-3" aria-label="Shop">shop</Link>
            <Link to="/about" className="py-2 px-4 desktop:px-3" aria-label="About">about</Link>
            <Link to="/contact" className="py-2 px-4 desktop:px-3" aria-label="Contact">contact</Link>
          </div>
          {isNavOpen && (
            <div className="bg-black bg-opacity-50 h-screen w-full desktop:hidden"></div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
