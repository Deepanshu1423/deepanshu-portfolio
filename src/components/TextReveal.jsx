"use client";

import { motion } from "framer-motion";

const TextReveal = ({
  text,
  className = "",
  highlightWords = [],
  highlightClassName = "",
}) => {
  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const wordVariants = {
    hidden: {
      y: 30,
      opacity: 0,
      filter: "blur(8px)",
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.h1
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {words.map((word, index) => {
        const cleanWord = word.replace(/[.,]/g, "");
        const isHighlighted = highlightWords.includes(cleanWord);

        return (
          <span
            key={`${word}-${index}`}
            className="inline-block overflow-hidden"
          >
            <motion.span
              variants={wordVariants}
              className={`mr-2 inline-block ${
                isHighlighted ? highlightClassName : ""
              }`}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </motion.h1>
  );
};

export default TextReveal;