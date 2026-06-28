import { useRef } from "react";
import { Cpu, Workflow, ShieldCheck, Gauge } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "./motion";
import { WordReveal } from "./premium";

const pillars = [
  { icon: Cpu,         num: "01", title: "AI-augmented operators",       desc: "Each operator manages workflows that traditionally require an entire department." },
  { icon: Workflow,    num: "02", title: "Proprietary automation layer",  desc: "Make.com, n8n and bespoke systems wired in. Leads and ops move on rails." },
  { icon: ShieldCheck, num: "03", title: "Human-in-the-loop QA",         desc: "AI handles velocity. A human verifies every decision before it ships." },
  { icon: Gauge,       num: "04", title: "Engineered for scale",          desc: "Systems built to absorb 10× volume without 10× headcount." },
];

// Fixed screen positions for each card (top/left/right/bottom CSS values)
// and the direction they fly in from
const SLOTS = [
  { top: "18%", left: "12%",  fromX: -200, fromY: -150 }, // top-left
  { top: "18%", right: "12%", fromX:  200, fromY: -150 }, // top-right
  { bottom: "18%", left: "12%",  fromX: -200, fromY:  150 }, // bottom-left
  { bottom: "18%", right: "12%", fromX:  200, fromY:  150 }, // bottom-right
];

const PillarCard = ({
  pillar,
  slot,
  progress,
  index,
}: {
  pillar: typeof pillars[0];
  slot: typeof SLOTS[0];
  progress: import("framer-motion").MotionValue<number>;
  index: number;
}) => {
  const flyIn = 0.08 + index * 0.20;
  const local = useTransform(progress, [flyIn, Math.min(flyIn + 0.14, 0.95)], [0, 1], { clamp: true });

  const opacity = useTransform(local, [0, 0.5, 1], [0, 1, 1]);
  const x       = useTransform(local, [0, 1], [slot.fromX, 0]);
  const y       = useTransform(local, [0, 1], [slot.fromY, 0]);
  const scale   = useTransform(local, [0, 1], [0.7, 1]);

  return (
    <motion.div
      style={{
        opacity, x, y, scale,
        position: "absolute",
        top:    slot.top,
        left:   slot.left,
        right:  slot.right,
        bottom: slot.bottom,
        width:  240,
      }}
    >
      <div
        className="rounded-2xl px-5 py-5"
        style={{
          background: "rgba(255,255,255,0.97)",
          border: "1px solid #E8EAF0",
          boxShadow: "0 12px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(212,0,122,0.07)",
        }}
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#FDF0F8" }}>
            <pillar.icon size={17} style={{ color: "#D4007A" }} />
          </span>
          <span className="font-mono text-[11px] font-bold text-[#D4007A]">{pillar.num}</span>
        </div>
        <p className="font-heading text-sm font-bold text-[#0D1117] leading-snug mb-2">{pillar.title}</p>
        <p className="text-[#6B7280] text-xs leading-relaxed">{pillar.desc}</p>
      </div>
    </motion.div>
  );
};

const ValueProps = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const headlineOpacity = useTransform(scrollYProgress, [0, 0.06, 0.90, 0.98], [0, 1, 1, 0], { clamp: true });
  const headlineScale   = useTransform(scrollYProgress, [0, 0.06], [0.92, 1], { clamp: true });

  return (
    <section id="approach" className="section-white">
      {/* Static header */}
      <div className="container-x section-padding pb-0">
        <div className="grid lg:grid-cols-12 gap-10 mb-4">
          <div className="lg:col-span-7">
            <Reveal><span className="section-label">Our approach</span></Reveal>
            <WordReveal
              text="We don't deploy labor. We engineer leverage."
              highlight={["engineer", "leverage."]}
              highlightClassName="italic font-light text-[#6B7280]"
              className="font-heading text-4xl md:text-6xl font-bold text-[#0D1117] leading-[1.05]"
            />
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <Reveal delay={0.2}>
              <p className="text-[#6B7280] text-lg leading-relaxed">
                The era of bloated operations is over. Crewvoy replaces friction with high-performance systems — built once, scaled infinitely.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Pinned scroll scene */}
      <div ref={ref} style={{ height: "550vh" }} className="relative">
        <div className="sticky top-0 h-screen overflow-hidden">

          {/* Centre headline */}
          <motion.div
            style={{ scale: headlineScale, opacity: headlineOpacity }}
            className="absolute inset-0 flex items-center justify-center z-10 text-center px-6"
          >
            <h2 className="font-heading text-5xl md:text-7xl font-bold text-[#0D1117] leading-[1.03]">
              What sets us<br />
              <span className="italic font-light text-[#9AA0B4]">apart</span>
            </h2>
          </motion.div>

          {/* 4 cards fly in from corners */}
          {pillars.map((p, i) => (
            <PillarCard
              key={p.num}
              pillar={p}
              slot={SLOTS[i]}
              progress={scrollYProgress}
              index={i}
            />
          ))}

          {/* pink progress line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-[#E8EAF0] z-30">
            <motion.div style={{ scaleX: scrollYProgress }} className="absolute inset-0 bg-[#D4007A] origin-left" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
