import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion

const Divider = () => {
  const riseAnimation = {
    initial: { opacity: 0, y: 50 }, // Start 50px below and invisible
    animate: { opacity: 1, y: 0 }, // Move to original position and fully visible
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 7,
      duration: 0.5, // Smooth duration for the rise
      delay: 0.3, // Add 0.3s delay for the animation
    },
  };
  return (
    <div className="flex justify-start items-center font-urbanist text-[88px] bg-[#00296B] text-white px-20 py-6">
      <motion.div
        initial={riseAnimation.initial} // Explicitly set initial state
        whileInView={riseAnimation.animate} // Use whileInView for viewport detection
        transition={riseAnimation.transition} // Apply transition with delay
        viewport={{ once: true, amount: 0.5 }}
      >
        Charting Our Ascent
      </motion.div>
    </div>
  );
};

export default Divider;
