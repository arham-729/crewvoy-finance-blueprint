import { useLayoutEffect, useRef } from "react";
import { X, Check } from "lucide-react";
import { motion, useScroll, useTransform, useMotionValueEvent, MotionValue } from "framer-motion";
import { Reveal } from "./motion";
import { WordReveal } from "./premium";

/**
 * framer-motion 12.38 doesn't reliably write plain numeric `opacity` onto a
 * motion.div's style (transform-composited props like x/scale/rotate work fine —
 * only opacity gets dropped). Bypass the automatic style write and set it on
 * the DOM node directly via a subscription, which does work.
 */
function useOpacityFix(value: MotionValue<number>) {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (ref.current) ref.current.style.opacity = String(value.get());
  }, [value]);
  useMotionValueEvent(value, "change", (v) => {
    if (ref.current) ref.current.style.opacity = String(v);
  });
  return ref;
}

const oldWay = [
  "Hiring more staff to cover the workload.",
  "Manual processes that break under volume.",
  "Automation nobody verifies before it ships.",
  "Every quarter starts from scratch.",
];

const newWay = [
  "AI-augmented operators do the work of a department.",
  "A proprietary automation layer moves everything on rails.",
  "Human-in-the-loop QA checks every decision before it ships.",
  "Systems engineered to absorb 10× volume, not 10× headcount.",
];

const ListItem = ({
  text,
  bad,
  progress,
  index,
  start,
}: {
  text: string;
  bad: boolean;
  progress: import("framer-motion").MotionValue<number>;
  index: number;
  start: number;
}) => {
  const popIn = start + index * 0.055;
  const local = useTransform(progress, [popIn, Math.min(popIn + 0.05, 0.99)], [0, 1], { clamp: true });

  const opacity = useTransform(local, [0, 1], [0, 1]);
  const y       = useTransform(local, [0, 1], [16, 0]);
  const scale   = useTransform(local, [0, 1], [0.9, 1]);
  const opacityRef = useOpacityFix(opacity);

  return (
    <motion.div ref={opacityRef} style={{ y, scale }} className="flex items-start gap-3">
      <span
        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
        style={{
          background: bad ? "rgba(13,17,23,0.08)" : "rgba(212,0,122,0.35)",
          color: bad ? "#6B7280" : "#FFFFFF",
        }}
      >
        {bad ? <X size={11} strokeWidth={2.5} /> : <Check size={11} strokeWidth={2.5} />}
      </span>
      <p
        className="text-sm leading-relaxed"
        style={{ color: bad ? "#6B7280" : "rgba(255,255,255,0.92)" }}
      >
        {text}
      </p>
    </motion.div>
  );
};

const ValueProps = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // ── Scroll choreography ──────────────────────────────────────────
  // 0.00 - 0.06  words together, centered
  // 0.06 - 0.16  words split left / right and fade out
  // 0.14 - 0.22  Before card appears, centered
  // 0.24 - 0.46  Before card's items pop in one by one
  // 0.48 - 0.60  Before card slides left, After card slides in on the right
  // 0.60 - 0.86  After card's items pop in one by one

  // Words: drift apart, then vanish
  const wordsOpacity = useTransform(scrollYProgress, [0, 0.03, 0.12, 0.16], [1, 1, 1, 0], { clamp: true });
  const leftWordX    = useTransform(scrollYProgress, [0.06, 0.16], [0, -320], { clamp: true });
  const rightWordX   = useTransform(scrollYProgress, [0.06, 0.16], [0, 320], { clamp: true });
  // hard-hide once faded so the headline can never sit invisibly over the cards
  const wordsVisibility = useTransform(scrollYProgress, (p) => (p >= 0.16 ? "hidden" : "visible"));

  // Before card: fades in dead centre, later slides into the left slot
  const beforeOpacity = useTransform(scrollYProgress, [0.14, 0.22], [0, 1], { clamp: true });
  const beforeScale   = useTransform(scrollYProgress, [0.14, 0.22], [0.92, 1], { clamp: true });
  // NOTE: -50% is the "centred" baseline (replaces Tailwind's -translate-x-1/2,
  // which Framer's `x` would otherwise overwrite on the same transform property).
  const beforeX = useTransform(scrollYProgress, [0.48, 0.60], ["-50%", "-104%"], { clamp: true });

  // After card: slides in beside it once Before has moved aside
  const afterOpacity = useTransform(scrollYProgress, [0.50, 0.62], [0, 1], { clamp: true });
  const afterX       = useTransform(scrollYProgress, [0.50, 0.62], ["12%", "4%"], { clamp: true });

  const wordsOpacityRef  = useOpacityFix(wordsOpacity);
  const beforeOpacityRef = useOpacityFix(beforeOpacity);
  const afterOpacityRef  = useOpacityFix(afterOpacity);

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
      <div ref={ref} style={{ height: "400vh" }} className="relative">
        <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">

          {/* Words: together, then split apart, then vanish */}
          <motion.div
            ref={wordsOpacityRef}
            style={{ visibility: wordsVisibility }}
            className="absolute inset-0 z-20 flex items-center justify-center px-6 pointer-events-none"
          >
            <h2 className="font-heading text-5xl md:text-7xl font-bold text-[#0D1117] leading-[1.03] whitespace-nowrap">
              <motion.span style={{ x: leftWordX }} className="inline-block">
                What sets us
              </motion.span>{" "}
              <motion.span style={{ x: rightWordX }} className="inline-block italic font-light text-[#9AA0B4]">
                apart
              </motion.span>
            </h2>
          </motion.div>

          {/* Card stage: both cards are centred, then pushed apart via x offsets */}
          <div className="relative z-10 w-full max-w-5xl mx-auto px-6 h-[440px] md:h-[460px]">
            {/* Before card — starts dead centre, slides to the left slot */}
            <motion.div
              ref={beforeOpacityRef}
              style={{
                background: "#F1F1EE",
                scale: beforeScale,
                x: beforeX,
              }}
              className="absolute top-0 left-1/2 w-[min(92vw,420px)] h-[440px] md:h-[460px] rounded-[28px] p-9 md:p-11 flex flex-col"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-3" style={{ color: "#9AA0A0" }}>
                Before
              </p>
              <p className="font-heading text-2xl md:text-[28px] font-bold leading-[1.25] mb-10" style={{ color: "#A9ACA5" }}>
                Guessing what actually moves the business.
              </p>
              <div className="flex flex-col gap-6">
                {oldWay.map((text, i) => (
                  <ListItem key={i} text={text} bad progress={scrollYProgress} index={i} start={0.24} />
                ))}
              </div>
            </motion.div>

            {/* After card — slides in to the right slot */}
            <motion.div
              ref={afterOpacityRef}
              style={{
                background: "#0B0D14",
                x: afterX,
              }}
              className="absolute top-0 left-1/2 w-[min(92vw,420px)] h-[440px] md:h-[460px] rounded-[28px] p-9 md:p-11 flex flex-col"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-3" style={{ color: "rgba(255,255,255,0.7)" }}>
                After
              </p>
              <p className="font-heading text-2xl md:text-[28px] font-bold leading-[1.25] mb-10 text-white">
                Knowing exactly what sets you apart.
              </p>
              <div className="flex flex-col gap-6">
                {newWay.map((text, i) => (
                  <ListItem key={i} text={text} bad={false} progress={scrollYProgress} index={i} start={0.60} />
                ))}
              </div>
            </motion.div>
          </div>

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
