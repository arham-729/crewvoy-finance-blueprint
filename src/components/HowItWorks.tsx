import { useRef } from "react";
import { ArrowUpRight, Search, Boxes, UserCheck, TrendingUp } from "lucide-react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Magnetic } from "./premium";
import imgAutomation from "@/assets/pics/image_three.jpeg";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Audit & architect",
    desc: "We map every workflow, identify automation surface area and architect an AI-augmented operating model tailored to your business.",
  },
  {
    num: "02",
    icon: Boxes,
    title: "Deploy systems",
    desc: "Custom workflows, pipelines, and automations are built and wired into your existing stack — under one week.",
  },
  {
    num: "03",
    icon: UserCheck,
    title: "Match the operator",
    desc: "We assign a senior operator trained on the systems we just built. They run the playbook, you keep judgement and approval.",
  },
  {
    num: "04",
    icon: TrendingUp,
    title: "Scale & optimise",
    desc: "Weekly KPI reviews, dashboards and continuous system upgrades. Output compounds, overhead doesn't.",
  },
];

const N = steps.length;

// Scroll budget: first slice reveals + breaks the headline,
// the remaining track is split evenly across the 4 cards.
// Cards begin while the headline is still settling, so the screen is never empty.
const HEADLINE_END = 0.22;
const CARDS_START = 0.24;
const CARD_SPAN = (1 - CARDS_START) / N;

const StepCard = ({
  step,
  i,
  progress,
}: {
  step: typeof steps[0];
  i: number;
  progress: MotionValue<number>;
}) => {
  const start = CARDS_START + i * CARD_SPAN;
  const end = start + CARD_SPAN * 0.7;
  const local = useTransform(progress, [start, end], [0, 1], { clamp: true });

  // alternate entry direction: even cards from left, odd from right
  const fromX = i % 2 === 0 ? -120 : 120;

  const opacity = useTransform(local, [0, 0.4, 1], [0, 1, 1]);
  const x = useTransform(local, [0, 1], [fromX, 0]);
  const y = useTransform(local, [0, 1], [60, 0]);
  const scale = useTransform(local, [0, 1], [0.9, 1]);

  const Icon = step.icon;

  return (
    <motion.div
      style={{ opacity, x, y, scale }}
      className="group relative flex flex-col rounded-[28px] p-7 md:p-8 overflow-hidden"
    >
      <div
        className="absolute inset-0 rounded-[28px]"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.10)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
        }}
      />

      {/* number watermark */}
      <span
        className="absolute -top-3 right-3 font-heading font-bold leading-none pointer-events-none select-none"
        style={{ fontSize: "100px", color: "rgba(255,255,255,0.04)" }}
      >
        {step.num}
      </span>

      <div className="relative flex items-center gap-4 mb-5">
        <span
          className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110"
          style={{ background: "rgba(212,0,122,0.12)" }}
        >
          <Icon size={19} style={{ color: "#D4007A" }} />
        </span>
        <span className="font-mono text-xs font-bold tracking-wider text-[#D4007A]">
          STEP {step.num}
        </span>
      </div>

      <h3
        className="relative font-heading font-bold leading-[1.08] mb-3 text-white"
        style={{ fontSize: "clamp(22px, 2.2vw, 32px)" }}
      >
        {step.title}
      </h3>

      <p className="relative text-sm md:text-base leading-relaxed text-white/45">
        {step.desc}
      </p>
    </motion.div>
  );
};

const HowItWorks = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // headline "breaks": the two halves slide apart and fade FULLY out
  // before the cards arrive — no lingering, no overlap.
  const leftX = useTransform(scrollYProgress, [0, HEADLINE_END], [0, -180], { clamp: true });
  const rightX = useTransform(scrollYProgress, [0, HEADLINE_END], [0, 180], { clamp: true });
  const headOpacity = useTransform(scrollYProgress, [0, HEADLINE_END * 0.45, HEADLINE_END], [1, 1, 0], { clamp: true });
  const headScale = useTransform(scrollYProgress, [0, HEADLINE_END], [1, 0.7], { clamp: true });
  // hard-hide the headline once faded so it can never bleed behind the cards
  const headVisibility = useTransform(scrollYProgress, (p) => (p >= HEADLINE_END ? "hidden" : "visible"));

  return (
    <section id="how-it-works" className="section-dark">

      {/* ── Static intro: header + robot image ── */}
      <div className="container-x pt-20 pb-4">
        <span className="block text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-5">
          Process
        </span>
        <div className="grid lg:grid-cols-12 gap-8 mb-10">
          <div className="lg:col-span-7">
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-white leading-[1.05]">
              From friction to{" "}
              <span className="italic font-light text-white/40">infinite scale.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-white/40 text-lg leading-relaxed">
              Four steps from your current chaos to a compounding operating layer that runs without you.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl">
          <img
            src={imgAutomation}
            alt="AI operator"
            style={{ height: "clamp(440px, 72vh, 820px)" }}
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* ── Pinned scroll scene: headline breaks, then cards reveal in sequence ── */}
      <div ref={ref} style={{ height: "440vh" }} className="relative">
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">
          <div className="container-x w-full">

            {/* Breaking headline — splits apart and fully fades before cards arrive */}
            <motion.div
              style={{ opacity: headOpacity, scale: headScale, visibility: headVisibility }}
              className="absolute inset-0 z-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
            >
              <span className="block text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-6">
                The 4-step system
              </span>
              <h2 className="font-heading font-bold text-white leading-[1.02] text-5xl md:text-7xl">
                <motion.span style={{ x: leftX }} className="inline-block">
                  Built once.
                </motion.span>{" "}
                <motion.span style={{ x: rightX }} className="inline-block italic font-light text-white/40">
                  Scaled infinitely.
                </motion.span>
              </h2>
            </motion.div>

            {/* 4 cards revealing one after another */}
            <div className="relative z-10 grid md:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto">
              {steps.map((s, i) => (
                <StepCard key={s.num} step={s} i={i} progress={scrollYProgress} />
              ))}
            </div>

            {/* progress line */}
            <div className="absolute bottom-8 left-0 right-0 h-px bg-white/10 z-30">
              <motion.div
                style={{ scaleX: scrollYProgress }}
                className="absolute inset-0 bg-[#D4007A] origin-left"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="container-x py-16">
        <div className="text-center">
          <Magnetic href="#booking" className="btn-coral">
            Engineer my workforce <ArrowUpRight size={15} />
          </Magnetic>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
