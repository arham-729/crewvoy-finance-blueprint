import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import imgTeam from "@/assets/img-team.jpg";
import imgDashboard from "@/assets/img-dashboard.jpg";
import { Reveal, CountUp, BlurReveal } from "./motion";

const ImpactBand = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yLeft = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const yRight = useTransform(scrollYProgress, [0, 1], [-40, 60]);

  return (
    <section ref={ref} className="relative section-padding bg-background border-t border-border/30 overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container-x relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-8">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.25em] text-secondary font-semibold">By the numbers</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-600 text-foreground leading-[1.05]">
                Output that<br /><span className="text-gradient-warm italic">compounds.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-foreground/60 leading-relaxed text-lg">
                We measure ourselves in hours saved, leads converted and systems shipped — not headcount billed.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-border/50">
              {[
                { v: <><CountUp to={71} suffix="%" /></>, l: "Avg. cost reduction" },
                { v: <><CountUp to={3} />×</>, l: "Output per operator" },
                { v: <><CountUp to={9} />d</>, l: "Median deployment" },
                { v: <><CountUp to={50} suffix="+" /></>, l: "Workflows automated" },
              ].map((s, i) => (
                <Reveal key={i} delay={0.1 + i * 0.05}>
                  <div className="font-heading text-3xl md:text-4xl font-700 text-gradient">{s.v}</div>
                  <div className="text-xs uppercase tracking-wider text-foreground/50 mt-1">{s.l}</div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4 lg:gap-6">
            <BlurReveal delay={0.2}>
              <motion.div 
                style={{ y: yLeft }} 
                className="aspect-[3/4] overflow-hidden rounded-xl border border-secondary/30 hover:border-secondary/60 transition-all duration-500 shadow-lg shadow-secondary/15 hover:shadow-secondary/30 group cursor-pointer relative"
                whileHover={{ y: -10 }}
              >
                <img 
                  src={imgTeam} 
                  alt="Crewvoy team collaborating" 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                {/* Vibrant overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </BlurReveal>
            <BlurReveal delay={0.4}>
              <motion.div 
                style={{ y: yRight }} 
                className="aspect-[3/4] mt-12 overflow-hidden rounded-xl border border-secondary/30 hover:border-secondary/60 transition-all duration-500 shadow-lg shadow-secondary/15 hover:shadow-secondary/30 group cursor-pointer relative"
                whileHover={{ y: -10 }}
              >
                <img 
                  src={imgDashboard} 
                  alt="AI-generated KPI dashboard" 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                {/* Vibrant overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </BlurReveal>
          </div>
        </div>

        <Reveal className="mt-20 text-center">
          <motion.a href="#booking"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 text-foreground bg-gradient-to-r from-secondary/10 to-blue-500/10 border border-secondary/30 hover:border-secondary/60 hover:shadow-lg hover:shadow-secondary/20 px-8 py-4 rounded-full text-sm font-bold transition-all duration-300">
            See what we'd ship for you <motion.div animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 2 }}><ArrowUpRight size={16} /></motion.div>
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
};

export default ImpactBand;
