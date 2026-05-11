import { ArrowUpRight, ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { CountUp } from "./motion";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-end overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: yBg, scale: scaleBg }}>
        <img
          src={heroBg}
          alt="Modern city skyline representing scale"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        style={{ y: yContent, opacity }}
        className="relative z-10 container-x w-full px-6 md:px-10 pb-20 md:pb-28 pt-32"
      >
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-secondary mb-8"
          >
            <span className="w-8 h-px bg-secondary" />
            AI-Augmented Workforce
          </motion.div>

          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-500 text-foreground leading-[1.05] mb-8 overflow-hidden">
            {["We engineer", "tomorrow's workforce."].map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className={`block ${i === 1 ? "italic font-400 text-foreground/90" : ""}`}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-foreground/60 text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
          >
            Crewvoy fuses elite remote operators with custom chatbots, proprietary web systems and
            deep automation — giving US-based SMBs agency-level output at 60–80% less overhead.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#booking"
              className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-4 rounded-full text-sm font-semibold hover:bg-secondary hover:text-secondary-foreground transition-all">
              Book a strategy call <ArrowUpRight size={16} />
            </a>
            <a href="#services"
              className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground text-sm font-medium px-2 py-4 transition-colors">
              Explore services <ArrowDown size={16} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl border-t border-border/50 pt-10"
        >
          {[
            { v: <><CountUp to={80} suffix="%" /></>, l: "Overhead reduction" },
            { v: <><CountUp to={7} suffix="d" /></>, l: "Deployment time" },
            { v: <><CountUp to={24} />/<CountUp to={7} /></>, l: "Automation uptime" },
            { v: <><CountUp to={100} suffix="%" /></>, l: "Human-in-the-loop QA" },
          ].map((s, i) => (
            <div key={i}>
              <div className="font-heading text-3xl md:text-4xl font-600 text-foreground mb-1">{s.v}</div>
              <div className="text-xs uppercase tracking-wider text-foreground/50">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-foreground/40 text-xs uppercase tracking-[0.3em]"
      >
        scroll
      </motion.div>
    </section>
  );
};

export default HeroSection;
