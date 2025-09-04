import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trackerPosition, setTrackerPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Update tracker position with delay
      setTimeout(() => {
        setTrackerPosition({ x: e.clientX, y: e.clientY });
      }, 100);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener("mousemove", updatePosition);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      'button, a, .cursor-pointer, .social-link, .project-card, [data-testid*="button"], [data-testid*="link"]'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Cursor Tracker */}
      <motion.div
        className="cursor-tracker"
        animate={{
          x: trackerPosition.x - 50,
          y: trackerPosition.y - 50,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 30,
        }}
        data-testid="cursor-tracker"
      />
      
      {/* Main Cursor */}
      <motion.div
        className={`custom-cursor ${isHovering ? "hover" : ""}`}
        animate={{
          x: position.x - 10,
          y: position.y - 10,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
        data-testid="custom-cursor"
      />
    </>
  );
};

export default CustomCursor;
