import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";
import { ReactNode, useRef, MouseEvent } from "react";

/* ───────────────────────────────────────────────
   WordReveal — big headline that reveals word by word
   as it scrolls into view. The a47 signature.
   Inherits text color/size from parent classes.
   ─────────────────────────────────────────────── */
export const WordReveal = ({
  text,
  className = "",
  highlight,
  highlightClassName = "text-accent",
  delay = 0,
  stagger = 0.06,
}: {
  text: string;
  className?: string;
  /** words (lowercased match) to wrap in highlightClassName */
  highlight?: string[];
  highlightClassName?: string;
  delay?: number;
  stagger?: number;
}) => {
  const words = text.split(" ");
  const hi = new Set((highlight ?? []).map((w) => w.toLowerCase().replace(/[.,]/g, "")));
  return (
    <motion.h2
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      className={className}
    >
      {words.map((w, i) => {
        const clean = w.toLowerCase().replace(/[.,]/g, "");
        const isHi = hi.has(clean);
        return (
          <span key={i} className="inline-block overflow-hidden align-bottom">
            <motion.span
              variants={{
                hidden: { y: "100%", opacity: 0 },
                show: { y: "0%", opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
              }}
              className={`inline-block ${isHi ? highlightClassName : ""}`}
            >
              {w}
              {i < words.length - 1 ? " " : ""}
            </motion.span>
          </span>
        );
      })}
    </motion.h2>
  );
};

/* ───────────────────────────────────────────────
   LineReveal — stacked statement lines that rise in
   one after another. For pain-points / big statements.
   ─────────────────────────────────────────────── */
export const LineReveal = ({
  lines,
  className = "",
  lineClassName = "",
  stagger = 0.14,
}: {
  lines: (string | ReactNode)[];
  className?: string;
  lineClassName?: string;
  stagger?: number;
}) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-70px" }}
    transition={{ staggerChildren: stagger }}
    className={className}
  >
    {lines.map((line, i) => (
      <span key={i} className="block overflow-hidden">
        <motion.span
          variants={{
            hidden: { y: "115%" },
            show: { y: "0%", transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
          }}
          className={`block ${lineClassName}`}
        >
          {line}
        </motion.span>
      </span>
    ))}
  </motion.div>
);

/* ───────────────────────────────────────────────
   Rise — generic "pops up on scroll" wrapper.
   Use for images, descriptions, anything.
   ─────────────────────────────────────────────── */
export const Rise = ({
  children,
  className = "",
  delay = 0,
  y = 50,
  blur = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  blur?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y, filter: blur ? "blur(12px)" : "blur(0px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true, margin: "-70px" }}
    transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ───────────────────────────────────────────────
   ParallaxScroll — element drifts vertically as the
   section scrolls (subtle depth, like a47 imagery).
   ─────────────────────────────────────────────── */
export const ParallaxScroll = ({
  children,
  className = "",
  distance = 80,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const sy = useSpring(y, { stiffness: 100, damping: 30 });
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y: sy }} className="h-full">{children}</motion.div>
    </div>
  );
};

/* ───────────────────────────────────────────────
   Magnetic — button/link that pulls toward the cursor.
   Inherits whatever classes you pass (keeps your theme).
   ─────────────────────────────────────────────── */
export const Magnetic = ({
  children,
  className = "",
  href,
  strength = 0.35,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  strength?: number;
  onClick?: () => void;
}) => {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16 });
  const sy = useSpring(y, { stiffness: 220, damping: 16 });

  const onMove = (e: MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const Tag = (href ? motion.a : motion.button) as typeof motion.a;
  return (
    <Tag
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={className}
      data-cursor
    >
      {children}
    </Tag>
  );
};
