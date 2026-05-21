import { ArrowUpRight, ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { CountUp } from "./motion";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries[0].isIntersecting ? video.play().catch(() => {}) : video.pause();
      },
      { threshold: 0.1 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex items-end overflow-hidden">
      {/* Video background — static, no transform */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={heroBg}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: "translate3d(0,0,0)",
            backfaceVisibility: "hidden",
          }}
        >
          <source src="/videos/video_two.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay — keeps hero readable regardless of theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/65 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      <motion.div
        style={{ y: yContent, opacity }}
        className="relative z-10 container-x w-full px-6 md:px-10 pb-20 md:pb-28 pt-28 md:pt-36"
      >
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-7"
            style={{ color: "#D4007A" }}
          >
            AI-Augmented Workforce
          </motion.p>

          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-semibold text-white leading-[1.05] mb-7">
            {["We engineer", "tomorrow's workforce."].map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "105%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.9, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className={`block ${i === 1 ? "italic font-light text-white/80" : ""}`}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-white/55 text-lg md:text-xl max-w-xl leading-relaxed mb-10"
          >
            Crewvoy fuses elite remote operators with custom chatbots, proprietary web systems and
            deep automation — giving US-based SMBs agency-level output at 60–80% less overhead.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#booking" className="btn-coral">
              Book a strategy call <ArrowUpRight size={15} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-white/55 hover:text-white text-sm font-medium px-2 py-2 transition-colors duration-200"
            >
              Explore services <ArrowDown size={14} />
            </a>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl border-t border-white/10 pt-10"
        >
          {[
            { v: <><CountUp to={80} suffix="%" /></>, l: "Overhead reduction" },
            { v: <><CountUp to={7} suffix="d" /></>, l: "Deployment time" },
            { v: <><CountUp to={24} />/<CountUp to={7} /></>, l: "Automation uptime" },
            { v: <><CountUp to={100} suffix="%" /></>, l: "Human-in-the-loop QA" },
          ].map((s, i) => (
            <div key={i}>
              <div className="font-heading text-3xl md:text-4xl font-semibold text-white">{s.v}</div>
              <div className="text-xs uppercase tracking-wider text-white/40 mt-2">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 text-white/30 text-xs uppercase tracking-[0.3em]"
      >
        scroll
      </motion.div>
    </section>
  );
};

export default HeroSection;
