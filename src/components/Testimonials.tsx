import { motion } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { Reveal } from "./motion";
import { WordReveal } from "./premium";

const testimonials = [
  { quote: "Best decision we made this year. Felt like hiring an in house ops team and an automation agency in one. The value is insane.", name: "Joel Walton", role: "Director", company: "Vantara Group" },
  { quote: "We replaced three roles with one Crewvoy associate and a stack of automations. Output went up, and we did surprisingly cut costs.", name: "Lucas Talley", role: "COO", company: "Meridian Ops" },
  { quote: "They convinced us to switch from our placeholder VA to their operator and the difference was immediately obvious.", name: "Patricia Brown", role: "Founder", company: "Crestline Digital" },
  { quote: "Onboarding was super easy. The output we got was far beyond expectations.", name: "Robert Murphy", role: "CEO", company: "Northfeld Inc." },
];

const PINK = "#D4007A";

const Avatar = ({ name }: { name: string }) => (
  <div
    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
    style={{ background: `linear-gradient(135deg, ${PINK}, ${PINK}99)` }}
  >
    {name.split(" ").map(n => n[0]).join("")}
  </div>
);

const RolePill = ({ role, company }: { role: string; company: string }) => (
  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mt-1"
       style={{ background: `${PINK}18`, color: PINK, border: `1px solid ${PINK}30` }}>
    {role} · {company}
  </div>
);

const Card = ({
  quote, name, role, company, className = "", large = false,
}: {
  quote: string; name: string; role: string; company: string; className?: string; large?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50, rotateX: 10 }}
    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    style={{ perspective: 1000, transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
    className={`h-full ${className}`}
  >
    <div
      className="card-accent-top card-hover flex flex-col justify-between rounded-2xl p-8 relative overflow-hidden cursor-default h-full"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.09)",
      }}
    >
      <div className="relative z-10 flex-1">
        <p className={`${large ? "text-xl md:text-2xl font-medium" : "text-sm"} text-white/80 leading-relaxed mb-8`}>
          "{quote}"
        </p>
      </div>
      <div className="relative z-10 flex items-center gap-3">
        <Avatar name={name} />
        <div>
          <p className="text-sm font-bold text-white">{name}</p>
          <RolePill role={role} company={company} />
        </div>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  const [t0, t1, t2, t3] = testimonials;
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / testimonials.length;
    const index = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(Math.max(0, Math.min(index, testimonials.length - 1)));
  }, []);

  return (
    <section id="testimonials" className="section-darker section-padding overflow-hidden">
      <div className="container-x">

        {/* Header */}
        <div className="mb-14">
          <Reveal><span className="section-label-dark">Clients</span></Reveal>
          <WordReveal
            text="Real clients. Real outcomes."
            highlight={["outcomes."]}
            highlightClassName="italic font-light text-white/35"
            className="font-heading text-4xl md:text-6xl font-bold text-white leading-[1.05]"
          />
        </div>

        {/* Desktop bento — fixed, no rotation */}
        <div className="hidden md:grid grid-cols-12 gap-4" style={{ gridTemplateRows: "1fr 1fr" }}>
          {/* Left tall card — spans 2 rows */}
          <div className="col-span-5 row-span-2">
            <Card quote={t0.quote} name={t0.name} role={t0.role} company={t0.company} className="h-full" large />
          </div>
          {/* Top right */}
          <div className="col-span-7">
            <Card quote={t1.quote} name={t1.name} role={t1.role} company={t1.company} className="h-full" />
          </div>
          {/* Bottom right split */}
          <div className="col-span-4">
            <Card quote={t2.quote} name={t2.name} role={t2.role} company={t2.company} className="h-full" />
          </div>
          <div className="col-span-3">
            <Card quote={t3.quote} name={t3.name} role={t3.role} company={t3.company} className="h-full" />
          </div>
        </div>

        {/* Mobile horizontal snap carousel */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="md:hidden -mx-6 px-6 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          <div className="flex gap-4 pb-2" style={{ width: "max-content" }}>
            {testimonials.map((t, i) => (
              <div key={i} className="snap-center flex-shrink-0" style={{ width: "calc(100vw - 64px)" }}>
                <Card quote={t.quote} name={t.name} role={t.role} company={t.company} className="h-full" large={i === 0} />
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators — mobile only */}
        <div className="flex md:hidden justify-center gap-2 mt-5">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full transition-colors duration-300"
              style={{ background: i === activeIndex ? "#D4007A" : "rgba(255,255,255,0.2)" }}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
