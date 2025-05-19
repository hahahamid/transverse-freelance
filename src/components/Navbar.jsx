import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const handleScroll = (e, id) => {
    e.preventDefault(); // Prevent default anchor behavior
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative flex justify-center items-center h-[40px] bg-[#00296B] text-white px-[58px]">
      <div className="absolute left-12">
        <img src={logo} alt="Logo" className="h-[22px] w-[22px]" />
      </div>

      <div className="">Connecting Ideas, Creating Impact</div>

      <div className="absolute right-15 flex items-center">
        <a
          href="#about"
          className="mx-3 hover:text-gray-300"
          onClick={(e) => handleScroll(e, "about")}
        >
          About
        </a>
        <a
          href="#services"
          className="mx-3 hover:text-gray-300"
          onClick={(e) => handleScroll(e, "services")}
        >
          Services
        </a>
        <a
          href="#contact"
          className="mx-3 hover:text-gray-300"
          onClick={(e) => handleScroll(e, "contact")}
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
