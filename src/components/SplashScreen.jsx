import React from "react";

const SplashScreen = () => {
  return (
    <div
      className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50 transition-opacity duration-500 opacity-100"
      aria-label="Loading splash screen"
      role="alert"
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My App</h1>
      <div className="w-10 h-10 border-4 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
      <p className="text-lg text-gray-600 mt-4">Click anywhere to skip</p>
    </div>
  );
};

export default SplashScreen;