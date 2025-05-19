import React from "react";

const EndFooter = () => {
  return (
    <footer className="relative flex justify-center items-center py-3 text-white pt-5 overflow-hidden">
      {/* Gradient background with 70% opacity */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#00296B] to-white opacity-70" />
      {/* Text with 100% opacity */}
      <p className="relative z-10 font-semibold text-xl font-sans">
        Your global voice, locally tuned
      </p>
    </footer>
  );
};

export default EndFooter;
