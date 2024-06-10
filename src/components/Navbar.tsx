import React, { useState } from "react";
import logo from "../images/logo.svg";
import hamburgerIcon from "../images/icon-hamburger.svg";
import closeIcon from "../images/icon-close.svg";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="font-spartan font-black">
      <div className="flex items-center">
        {!menuOpen && (
          <button
            className="mobile:ml-6 mobile:w-12 mobile:h-8 my-10"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <img src={hamburgerIcon} alt="Open menu" />
          </button>
      
        )}

        {menuOpen ? (
          <nav className="mobile:w-screen mobile:flex bg-white mobile:justify-between mobile:py-4" role="navigation">
            <div className="mobile:mt-4 mobile:flex mobile:flex-row items-center mobile:w-screen">
              <button
                className="mobile:ml-4 mobile:w-12 mobile:h-8 px-2"
                onClick={toggleMenu}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                <img src={closeIcon} alt="Close menu" />
              </button>
              <a href="#home" className="px-4 py-2" aria-label="Home">Home</a>
              <a href="#shop" className="px-4 py-2" aria-label="Shop">Shop</a>
              <a href="#about" className="px-4 py-2" aria-label="About">About</a>
              <a href="#contact" className="px-4 py-2" aria-label="Contact">Contact</a>
            </div>
          </nav>
        ) : (
          <img src={logo} alt="Logo" className="mobile:w-20 mobile:h-auto py-2 ml-10" />
        )}
      </div>
    </header>




  );
}

export default Navbar;
