import { ArrowUpRight, ArrowDown, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { CountUp, TextReveal } from "./motion";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-end overflow-hidden">
      {/* Video Background with Fallback */}
      <motion.div className="absolute inset-0" style={{ y: yBg, scale: scaleBg }}>
        {/* Try to use video, fallback to image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={heroBg}
            alt="Modern city skyline representing scale"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
        </div>
        
        {/* Animated gradient overlays simulating video depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 30% 50%, rgba(52, 211, 153, 0.15), transparent 50%)",
              "radial-gradient(circle at 50% 30%, rgba(59, 130, 246, 0.1), transparent 50%)",
              "radial-gradient(circle at 70% 60%, rgba(139, 92, 246, 0.1), transparent 50%)",
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Animated accent orbs */}
        <motion.div 
          className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-secondary/15 to-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            opacity: [0.3, 0.6, 0.3], 
            scale: [1, 1.1, 1],
            x: [0, 20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl"
          animate={{ 
            opacity: [0.2, 0.4, 0.2], 
            scale: [0.9, 1.05, 0.9],
            x: [0, -15, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1, ease: "easeInOut" }}
        />
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
            className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-secondary mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={14} />
            </motion.div>
            AI-Augmented Workforce
          </motion.div>

          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-600 text-foreground leading-[1.05] mb-8 overflow-hidden">
            {["We engineer", "tomorrow's workforce."].map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className={`block ${i === 1 ? "italic font-400 text-gradient-warm" : ""}`}
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
            <motion.a href="#booking"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-coral"
            >
              Book a strategy call <motion.div animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 2 }}><ArrowUpRight size={16} /></motion.div>
            </motion.a>
            <motion.a href="#services"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 text-foreground/70 hover:text-secondary text-sm font-medium px-4 py-4 transition-colors duration-300 group"
            >
              Explore services <motion.div animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 2 }}><ArrowDown size={16} className="group-hover:text-secondary transition-colors" /></motion.div>
            </motion.a>
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
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + i * 0.1 }}
            >
              <div className="font-heading text-3xl md:text-4xl font-700 text-gradient">{s.v}</div>
              <div className="text-xs uppercase tracking-wider text-foreground/50 mt-2">{s.l}</div>
            </motion.div>
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
