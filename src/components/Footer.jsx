import React from "react";
import image from "../assets/footer_logo.png";
const Footer = () => {
  return (
    <div className="grid grid-cols-2  gap-x-10 pb-20 px-5">
      <div className="flex flex-col justify-center items-center gap-y-2">
        <img src={image} className="w-40 h-40" alt="" />
        <div className="font-urbanist text-6xl text-[#343434]">Transverse</div>
        <div className="font-poppins text-[#343434]">
          Connecting Ideas, Creating Impacts
        </div>
        <div className="flex items-center justify-center gap-x-10 pt-10 font-poppins">
          <div>Accessibility Statement</div>
          <div>Privacy Policy</div>
          <div>Terms & Condition</div>
        </div>
      </div>

      <div className="flex flex-col font-poppins gap-y-2 pt-5">
        <div>Email*</div>
        <input
          type="text"
          name=""
          id=""
          className="border-2 border-[#BADA55] rounded-full py-2 w-4/5 px-1"
        />
        <div className="rounded-full bg-[#BADA55] text-white font-poppins text-center py-2 px-10 mt-2 w-fit cursor-pointer hover:bg-[#A8C63D] transition duration-300 ease-in-out">
          Submit
        </div>

        <div className="grid grid-cols-2 gap-x-10 pt-10">
          <div className="flex flex-col gap-y-2">
            <div className="font-medium">Contact</div>
            <div>contact@transversesolutions.com</div>
            <div>91+ 9999108727</div>
            <div>Delhi</div>
          </div>

          <div className="flex flex-col gap-y-2">
            <div className="font-medium">Menu</div>
            <div>About</div>
            <div>Services</div>
            <div>Contact</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
