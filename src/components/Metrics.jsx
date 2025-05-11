import React from "react";
import { motion, useInView } from "framer-motion";

const Metrics = () => {
  // Animation variants for the boxes
  const boxVariants = {
    hidden: { scale: 0 }, // Start fully shrunk
    visible: { scale: 1 }, // Expand to full size
  };

  // Animation variants for the text
  const textVariants = {
    hidden: { opacity: 0, y: 20 }, // Start invisible and slightly below
    visible: { opacity: 1, y: 0 }, // Fade in and slide up
  };

  // Animation variants for the centered text
  const centerTextVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Configuration for each box
  const boxConfigs = [
    {
      borderColor: "#FDC550", // yellow-500
      borderRadius: "rounded-t-full rounded-r-full",
      fillDirection: "bottom-left",
      text: "Words/Year",
      centerText: "1M+",
      textColor: "white",
    },
    {
      borderColor: "#00296B",
      borderRadius: "rounded-b-full rounded-l-full",
      fillDirection: "top-right",
      text: "Trade Fairs Promotion",
      centerText: "15",
      textColor: "white",
    },
    {
      borderColor: "#FDC550",
      borderRadius: "rounded-t-full rounded-r-full",
      fillDirection: "bottom-left",
      text: "Interpretation",
      centerText: "100+",
      textColor: "white",
    },
    {
      borderColor: "#00296B",
      borderRadius: "rounded-b-full rounded-l-full",
      fillDirection: "top-right",
      text: "Experts",
      centerText: "500+",
      textColor: "white",
    },
  ];

  // Use Framer Motion's useInView to detect when component is in view
  const ref = React.useRef(null);
  const inView = useInView(ref, {
    amount: 0.5, // Trigger when 50% of the component is visible
    once: true, // Only trigger once
  });

  return (
    <div ref={ref} className="flex gap-x-20 justify-between items-start p-20">
      {boxConfigs.map((config, index) => (
        <div key={index} className="flex flex-col items-center">
          <motion.div
            className={`w-[152px] h-[152px] border-[3px] ${config.borderRadius} relative overflow-hidden`}
            style={{ borderColor: config.borderColor, transformOrigin: "center" }}
            variants={boxVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
          >
            <motion.div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: config.borderColor,
                clipPath:
                  config.fillDirection === "bottom-left"
                    ? "circle(0% at 0% 100%)"
                    : "circle(0% at 100% 0%)",
              }}
              animate={
                inView
                  ? {
                      clipPath:
                        config.fillDirection === "bottom-left"
                          ? "circle(150% at 0% 100%)"
                          : "circle(150% at 100% 0%)",
                    }
                  : {}
              }
              transition={{ duration: 1, delay: 2, ease: "easeOut" }}
            />
            <motion.span
              className="absolute inset-0 flex items-center justify-center font-semibold font-poppins text-xl"
              style={{ color: config.textColor }}
              variants={centerTextVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 3 }}
            >
              {config.centerText}
            </motion.span>
          </motion.div>
          <motion.p
            className="mt-10 text-lg font-medium text-gray-800"
            variants={textVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.4, ease: "easeOut", delay: 1.3 }}
          >
            {config.text}
          </motion.p>
        </div>
      ))}
    </div>
  );
};

export default Metrics;