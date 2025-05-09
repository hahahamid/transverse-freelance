import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-[40px] bg-[#00296B] text-white px-12">
      <div>
        <img src={logo} alt="Logo" className="h-[22px] w-[22px]" />
      </div>
      <div className="ml-10">Connecting Ideas, Creating Impact</div>
      <div className="flex items-center">
        <a href="#about" className="mx-2 hover:text-gray-300">
          About
        </a>
        <a href="#services" className="mx-2 hover:text-gray-300">
          Services
        </a>
        <a href="#contact" className="mx-2 hover:text-gray-300">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
