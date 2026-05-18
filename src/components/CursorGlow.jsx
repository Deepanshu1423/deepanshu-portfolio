"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CursorGlow = () => {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const smoothX = useSpring(mouseX, {
    stiffness: 90,
    damping: 30,
    mass: 0.4,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 90,
    damping: 30,
    mass: 0.4,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 160);
      mouseY.set(e.clientY - 160);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
      }}
      className="pointer-events-none fixed left-0 top-0 z-[5] hidden h-80 w-80 rounded-full bg-gradient-to-br from-[var(--accent-light)]/35 via-[var(--accent-main)]/18 to-transparent blur-3xl md:block"
    />
  );
};

export default CursorGlow;