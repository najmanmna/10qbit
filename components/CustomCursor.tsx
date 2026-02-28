"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Snappier physics for an arrow. It needs to feel responsive, not heavy.
  const springConfig = { damping: 30, stiffness: 800, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      // No offset needed! We want the exact tip of the arrow (0,0) on the mouse coordinates
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-screen"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        opacity: isVisible ? 1 : 0,
        // Ensure the rotation origin is exactly at the tip of the arrow
        originX: 0,
        originY: 0,
      }}
      // On hover, the arrow scales up slightly and tilts
      animate={{
        scale: isHovering ? 1.2 : 1,
        rotate: isHovering ? -10 : 0,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Custom Sharp Sci-Fi Arrow SVG */}
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_8px_rgba(0,206,201,0.8)]"
      >
        <motion.path 
          // A sharp, geometric arrow shape where the tip is perfectly at 0,0
          d="M0 0L20 8L11 11L8 20L0 0Z" 
          animate={{
            // Changes from primary text color to the Cyan accent color on hover
            fill: isHovering ? "#00CEC9" : "#E8E8F0",
          }}
          transition={{ duration: 0.2 }}
        />
      </svg>
    </motion.div>
  );
}