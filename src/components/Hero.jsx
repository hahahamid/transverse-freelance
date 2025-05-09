import React from "react";
import image1 from "../assets/hero_image_1.png";
import image2 from "../assets/hero_image_2.png";
import image3 from "../assets/hero_image_3.png";
const Hero = () => {
  return (
    <div className="grid grid-cols-2 h-[278px] bg-white px-20 pt-20">
      <div className="flex flex-col">
        <div className="flex flex-col items-start text-[64px] font-urbanist">
          <div>Your Language </div>
          <div>Partner </div>
        </div>
        <div className="flex flex-col items-start text-[16px] font-poppins">
          <div>Empowering businesses </div>
          <div>worldwide </div>
        </div>

        <div className="call-us-button mt-[30px]">call us</div>
      </div>
      <div className="flex">
        <div className="grid grid-cols-2 gap-x-5">
          <img
            src={image1}
            alt="Logo 1"
            className="w-[367px] h-[259px] mt-1.5"
          />
          <div className="flex flex-col gap-y-5 mt-28">
            <img src={image2} alt="Logo 2" className="w-[152px] h-[152px]" />
            <img src={image3} alt="Logo 3" className="w-[76px] h-[76px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
