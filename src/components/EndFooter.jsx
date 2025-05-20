import React from "react";
import footer from "../assets/footer.png";

const EndFooter = () => {
  return (
    <div className="relative w-full">
      <img src={footer} alt="footer background" className="w-full" />

      <div className="absolute bottom-3 left-[40%] flex items-center justify-center">
        <span className="text-white text-xl font-semibold drop-shadow-lg">
          Your global voice, locally tuned
        </span>
      </div>
    </div>
  );
};

export default EndFooter;
