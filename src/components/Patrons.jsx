import React from "react";
import image from "../assets/patrons.png";
const Patrons = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#00296B] py-10">
      <div className="font-urbanist  text-white flex items-baseline">
        <span className="text-[88px]">Our Esteemed Patrons</span>
        <img src={image} alt="" className="w-[40px] h-[40px] pl-1.5"  />
      </div>

      <div className="flex flex-col justify-center items-center text-center text-white text-sm pt-5 font-poppins">
        Transverse works with organizations that require precision, reliability,
        and strategic communication. From public institutions to
        <br />
        multinational corporations, we help streamline communication across
        languages and industries. Our clients trust us to refine and
        <br />
        optimize their communication strategies, enabling clarity and efficiency
        at every level. With a commitment to excellence,
        <br />
        Transverse continues to be a trusted ally for organizations that operate
        on a global scale.
      </div>
    </div>
  );
};

export default Patrons;
