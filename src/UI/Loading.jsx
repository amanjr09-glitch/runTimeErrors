import React from "react";
import { motion } from "framer-motion";

function DotsLoading() {
  const loadingContainerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const loadingCircleVariants = {
    start: {
      y: "0%",
    },
    end: {
      y: "100%",
    },
  };
  const loadingCircleTransition = {
    duration: 0.5,
    // yoyo: Infinity,
    ease: "easeInOut",
    repeat: Infinity, 
    repeatType: "reverse"
  };
  return (
    <motion.div
      className="flex gap-1 items-center "
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      <motion.div
        className="h-1 w-1 bg-gray-300 text-white rounded-full"
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.div
        className="h-1 w-1 bg-gray-300 text-white rounded-full"
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.div
        className="h-1 w-1 bg-gray-300 text-white rounded-full"
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
    </motion.div>
  );
}

export default DotsLoading;
