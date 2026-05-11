import { motion } from "framer-motion";

interface GradientTextProps {
  text: string;
  className?: string;
  animated?: boolean;
}

/**
 * Component that renders text with animated gradient colors
 * Similar to systemsltd.com's "OurServices" effect
 */
export const GradientText = ({ text, className = "", animated = true }: GradientTextProps) => {
  const letters = text.split("");
  
  const colors = [
    "hsl(270, 85%, 65%)",  // Purple
    "hsl(240, 90%, 65%)",  // Blue
    "hsl(180, 98%, 52%)",  // Cyan
    "hsl(120, 100%, 50%)", // Green
    "hsl(45, 100%, 60%)",  // Yellow
    "hsl(25, 100%, 65%)",  // Orange
    "hsl(300, 85%, 60%)",  // Magenta
  ];

  return (
    <span className={className}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          style={{
            color: colors[i % colors.length],
          }}
          animate={
            animated
              ? {
                  color: [
                    colors[i % colors.length],
                    colors[(i + 1) % colors.length],
                    colors[i % colors.length],
                  ],
                }
              : {}
          }
          transition={
            animated
              ? {
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.05,
                  ease: "easeInOut",
                }
              : {}
          }
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
};

export default GradientText;
