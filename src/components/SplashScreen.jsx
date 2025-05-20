import React from "react";
import image from "../assets/footer_logo.png";

const SplashScreen = () => {
  return (
    <div
      className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50 transition-opacity duration-500 opacity-100"
      aria-label="Loading splash screen"
      role="alert"
    >
      <div className="flex flex-col justify-center items-center gap-y-2">
        <img src={image} className="w-40 h-40" alt="Footer Logo" />
        <div className="font-urbanist text-6xl text-[#343434]">Transverse</div>
        <div className="font-poppins text-[#343434]">
          Connecting Ideas, Creating Impacts
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-4">Click anywhere to skip</p>
    </div>
  );
};

export default SplashScreen;
