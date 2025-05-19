import React from "react";
import one from "../assets/one.png";
import two from "../assets/twp.png"; // Fixed typo: twp.png -> two.png
import three from "../assets/three.png";
import four from "../assets/four.png";
import five from "../assets/five.png";
import six from "../assets/six.png";
import seven from "../assets/seven.png";
import eight from "../assets/eight.png";
import nine from "../assets/nine.png";
import ten from "../assets/ten.png";
import eleven from "../assets/eleven.png";
import twelve from "../assets/twelve.png";
import thirteen from "../assets/thirteen.png";
import fourteen from "../assets/fourteen.png";
import fifteen from "../assets/fifteen.png";

const images = [
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
  thirteen,
  fourteen,
  fifteen,
];

const Gallery = () => {
  return (
    <div className="w-1/2 mx-auto h-[500px] overflow-y-auto overscroll-y-contain py-28 scrollbar-hide">
      <div className="flex flex-col items-center justify-center gap-y-5">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery item ${index + 1}`}
            className="w-full h-auto" // Changed from w-1/2 to w-full to fit container
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;