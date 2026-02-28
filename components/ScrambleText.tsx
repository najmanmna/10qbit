"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

// The characters it will cycle through before revealing the text
// Replace the old CHARS line with this one:
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#%";

interface ScrambleTextProps {
  text: string;
  className?: string;
}

export default function ScrambleText({ text, className = "" }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const ref = useRef<HTMLSpanElement>(null);
  
  // Trigger animation when the element comes into the viewport
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const iterations = useRef(0);

  useEffect(() => {
    if (!isInView) return;

    iterations.current = 0;

    const interval = setInterval(() => {
      setDisplayText(() =>
        text
          .split("")
          .map((letter, index) => {
            if (index < iterations.current) {
              return text[index];
            }
            if (text[index] === " ") return " ";
            
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iterations.current >= text.length) {
        clearInterval(interval);
      }
      
      // CHANGED: From 1/3 to 1/4. It now takes 4 ticks to lock in a letter, slowing the reveal.
      iterations.current += 1 / 5; 
    }, 30); // CHANGED: From 30ms to 45ms. The random characters swap slightly slower.

    return () => clearInterval(interval);
  }, [text, isInView]);

  return (
    <span ref={ref} className={className}>
      {displayText}
    </span>
  );
}