import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import imgTeam from "@/assets/pics/image_six.jpeg";
import imgDashboard from "@/assets/pics/image_two.jpeg";
import { Reveal, CountUp, BlurReveal } from "./motion";
import { Magnetic, WordReveal } from "./premium";
import { useIsMobile } from "@/hooks/use-mobile";

const ImpactBand = () => {
  const ref = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yLeft  = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const yRight = useTransform(scrollYProgress, [0, 1], [-30, 40]);

  return (
    <section ref={ref} className="section-white section-padding">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-8">
            <Reveal>
              <span className="section-label">By the numbers</span>
            </Reveal>
            <WordReveal
              text="Output that compounds."
              highlight={["compounds."]}
              highlightClassName="italic font-light text-[#6B7280]"
              className="font-heading text-4xl md:text-6xl font-bold text-[#0D1117] leading-[1.05]"
            />
            <Reveal delay={0.2}>
              <p className="text-[#6B7280] leading-relaxed">
                We measure ourselves in hours saved, leads converted and systems shipped, not headcount billed.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-[#E8EAF0]">
              {[
                { v: <><CountUp to={71} suffix="%" /></>, l: "Avg. cost reduction" },
                { v: <><CountUp to={3} />×</>,           l: "Output per operator" },
                { v: <><CountUp to={7} />d</>,            l: "Median deployment" },
                { v: <><CountUp to={20} suffix="+" /></>, l: "Workflows automated" },
              ].map((s, i) => (
                <Reveal key={i} delay={0.1 + i * 0.05}>
                  <div className="font-heading text-3xl md:text-4xl font-bold text-[#D4007A]">{s.v}</div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#9AA0B4] mt-1">{s.l}</div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 grid grid-cols-2 gap-4">
            <BlurReveal delay={0.2}>
              <motion.div
                style={{ y: isMobile ? 0 : yLeft }}
                className="aspect-[3/4] overflow-hidden rounded-2xl border border-[#E8EAF0] group cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-500"
              >
                <img
                  src={imgTeam}
                  alt="AI operator at computers"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </BlurReveal>
            <BlurReveal delay={0.35}>
              <motion.div
                style={{ y: isMobile ? 0 : yRight }}
                className="aspect-[3/4] mt-0 md:mt-10 overflow-hidden rounded-2xl border border-[#E8EAF0] group cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-500"
              >
                <img
                  src={imgDashboard}
                  alt="AI augmented operator"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </BlurReveal>
          </div>
        </div>

        <Reveal className="mt-16 text-center">
          <Magnetic href="#booking" className="btn-outline">
            See what we'd ship for you <ArrowUpRight size={15} />
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
};

export default ImpactBand;
