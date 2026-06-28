import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Subtle ring cursor (desktop / fine-pointer only).
 * Grows over links & buttons. Uses mix-blend so it reads
 * on both light and dark sections without changing the theme.
 */
const Cursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 280, damping: 30, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 280, damping: 30, mass: 0.4 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement;
      setHovering(!!t.closest('a, button, [data-cursor], [role="button"]'));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full mix-blend-difference"
      style={{
        x: ringX,
        y: ringY,
        translateX: "-50%",
        translateY: "-50%",
        border: "1.5px solid rgba(255,255,255,0.9)",
      }}
      animate={{
        width: hovering ? 46 : 26,
        height: hovering ? 46 : 26,
        opacity: hovering ? 1 : 0.55,
      }}
      transition={{ type: "spring", stiffness: 250, damping: 22 }}
    />
  );
};

export default Cursor;
