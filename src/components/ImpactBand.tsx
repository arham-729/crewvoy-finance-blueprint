import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import imgTeam from "@/assets/img-team.jpg";
import imgDashboard from "@/assets/img-dashboard.jpg";
import { Reveal, CountUp } from "./motion";

const ImpactBand = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yLeft = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const yRight = useTransform(scrollYProgress, [0, 1], [-40, 60]);

  return (
    <section ref={ref} className="relative section-padding bg-background border-t border-border overflow-hidden">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-8">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.25em] text-secondary">By the numbers</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-500 text-foreground leading-[1.05]">
                Output that<br /><span className="italic font-400">compounds.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-foreground/60 leading-relaxed text-lg">
                We measure ourselves in hours saved, leads converted and systems shipped — not headcount billed.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-border">
              {[
                { v: <><CountUp to={71} suffix="%" /></>, l: "Avg. cost reduction" },
                { v: <><CountUp to={3} />×</>, l: "Output per operator" },
                { v: <><CountUp to={9} />d</>, l: "Median deployment" },
                { v: <><CountUp to={50} suffix="+" /></>, l: "Workflows automated" },
              ].map((s, i) => (
                <Reveal key={i} delay={0.1 + i * 0.05}>
                  <div className="font-heading text-3xl md:text-4xl font-600 text-foreground mb-1">{s.v}</div>
                  <div className="text-xs uppercase tracking-wider text-foreground/50">{s.l}</div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4 lg:gap-6">
            <motion.div style={{ y: yLeft }} className="aspect-[3/4] overflow-hidden rounded-xl border border-border">
              <img src={imgTeam} alt="Crewvoy team collaborating" loading="lazy"
                className="w-full h-full object-cover" />
            </motion.div>
            <motion.div style={{ y: yRight }} className="aspect-[3/4] mt-12 overflow-hidden rounded-xl border border-border">
              <img src={imgDashboard} alt="AI-generated KPI dashboard" loading="lazy"
                className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>

        <Reveal className="mt-20 text-center">
          <a href="#booking"
            className="inline-flex items-center gap-2 text-foreground border border-border hover:border-secondary/60 hover:text-secondary px-7 py-4 rounded-full text-sm font-semibold transition-all">
            See what we'd ship for you <ArrowUpRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default ImpactBand;
