import { motion, useInView, useScroll, useTransform, useSpring, useMotionValue, animate } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

/* ---------- Reveal ---------- */
type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "h1" | "h2" | "h3" | "p" | "span";
};

export const Reveal = ({ children, delay = 0, y = 40, className, as = "div" }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
};

/* ---------- Stagger ---------- */
export const Stagger = ({ children, className }: { children: ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 40 },
      show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ---------- Parallax wrapper for an image ---------- */
export const ParallaxImage = ({
  src, alt, className, intensity = 80, scale = 1.15,
}: { src: string; alt: string; className?: string; intensity?: number; scale?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-intensity, intensity]);
  const s = useTransform(scrollYProgress, [0, 0.5, 1], [scale, 1, scale]);
  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ""}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ y, scale: s }}
        className="w-full h-full object-cover will-change-transform"
      />
    </div>
  );
};

/* ---------- Count-up number ---------- */
export const CountUp = ({
  to, suffix = "", prefix = "", duration = 2,
}: { to: number; suffix?: string; prefix?: string; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration, ease: [0.22, 1, 0.36, 1] });
    const unsub = mv.on("change", (v) => setVal(v));
    return () => { controls.stop(); unsub(); };
  }, [inView, to, duration, mv]);

  const isFloat = !Number.isInteger(to);
  return (
    <span ref={ref}>
      {prefix}
      {isFloat ? val.toFixed(1) : Math.round(val).toLocaleString()}
      {suffix}
    </span>
  );
};

/* ---------- Smooth scroll progress bar ---------- */
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-secondary origin-left z-[60]"
    />
  );
};

/* ---------- Animated text reveal line by line ---------- */
export const TextReveal = ({ text, className = "" }: { text: string; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  
  return (
    <div ref={ref} className={className}>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

/* ---------- Animated blur-in reveal ---------- */
export const BlurReveal = ({ 
  children, 
  delay = 0, 
  className = "" 
}: { 
  children: ReactNode; 
  delay?: number; 
  className?: string 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={inView ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ---------- Floating animation hook ---------- */
export const useFloatingAnimation = (intensity = 20, duration = 4) => {
  return {
    animate: { y: [0, -intensity, 0] },
    transition: { repeat: Infinity, duration, ease: "easeInOut" }
  };
};
