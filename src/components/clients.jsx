import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import image1 from "../assets/client1.png";
import image2 from "../assets/client2.png";
import image3 from "../assets/client3.png";
import image4 from "../assets/client4.png";
import image5 from "../assets/client5.png";
import image6 from "../assets/client6.png";
import image7 from "../assets/client7.png";
import image8 from "../assets/cl1.png";
import image9 from "../assets/cl2.png";
import image10 from "../assets/cl3.png";
import image11 from "../assets/cl4.png";
import image12 from "../assets/cl5.png";

// Array of images for easier mapping
const images = [image1, image2, image3, image4, image5, image6, image7];
const images2 = [image8, image9, image10, image11, image12, image8];

// Duplicate images for seamless looping
const extendedImages = [
  ...images,
  ...images,
  ...images,
  ...images,
  ...images,
  ...images,
  ...images,
  ...images,
  ...images,
];
const extendedImages2 = [
  ...images2,
  ...images2,
  ...images2,
  ...images2,
  ...images2,
  ...images2,
  ...images2,
  ...images2,
  ...images2,
];

const Clients = () => {
  const controls = useAnimation();
  const controls2 = useAnimation();
  const carouselRef = useRef(null);
  const carouselRef2 = useRef(null);

  // Animation settings
  const animationDuration = 20; // Seconds for one full loop
  const totalWidth = images.length * 150; // Approx. width of one set (7 images * 150px = 1050px)
  const totalWidth2 = images2.length * 150; // Approx. width of one set (6 images * 150px = 900px)

  useEffect(() => {
    const animateCarousel = async () => {
      await controls.start({
        x: -totalWidth, // Move container left for images to slide left
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: animationDuration,
            ease: "linear",
          },
        },
      });
    };

    animateCarousel();
  }, [controls, totalWidth]);

  useEffect(() => {
    const animateCarousel2 = async () => {
      await controls2.start({
        x: 0, // Move container from -totalWidth2 to 0 for images to slide right
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: animationDuration,
            ease: "linear",
          },
        },
      });
    };

    animateCarousel2();
  }, [controls2, totalWidth2]);

  return (
    <div className="overflow-hidden py-10 flex flex-col gap-y-10">
      {/* First Carousel: Moves Left */}
      <motion.div
        ref={carouselRef}
        className="flex gap-x-20"
        animate={controls}
        style={{ width: `${totalWidth * 2}px` }} // 2100px, covers at least 2 sets
      >
        {extendedImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Client ${(index % images.length) + 1}`}
            className="w-auto h-auto mx-10 object-contain"
          />
        ))}
      </motion.div>

      {/* Second Carousel: Moves Right */}
      <motion.div
        ref={carouselRef2}
        className="flex gap-x-20"
        initial={{ x: -totalWidth2 }} // Start shifted left by one set (900px)
        animate={controls2}
        style={{ width: `${totalWidth2 * 2}px` }} // 1800px, covers at least 2 sets
      >
        {extendedImages2.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Client ${(index % images2.length) + 1}`}
            className="w-auto h-auto mx-10 object-contain"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Clients;
