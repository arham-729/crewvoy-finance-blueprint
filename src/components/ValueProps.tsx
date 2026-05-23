import { Cpu, Workflow, ShieldCheck, Gauge } from "lucide-react";
import { Reveal, Stagger, StaggerItem, ParallaxImage } from "./motion";
import imgOperator from "@/assets/pics/image_four.jpeg";

const features = [
  {
    icon: Cpu, num: "01",
    title: "AI-augmented operators",
    desc: "Our crew is backed by custom integrations, so each one manages complex workflows that traditionally require an entire department.",
  },
  {
    icon: Workflow, num: "02",
    title: "Proprietary automation layer",
    desc: "Make.com, n8n and bespoke web systems wired into your stack. Leads, ops and reporting move on rails, not in inboxes.",
  },
  {
    icon: ShieldCheck, num: "03",
    title: "Human-in-the-loop QA",
    desc: "AI handles velocity. A trained human verifies every decision before it ships, accuracy without bottlenecks.",
  },
  {
    icon: Gauge, num: "04",
    title: "Engineered for scale",
    desc: "Systems designed to absorb 10× volume without 10× headcount. Friction is removed, not relocated.",
  },
];

const ValueProps = () => {
  return (
    <section id="approach" className="section-white section-padding">
      <div className="container-x">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="section-label">Our approach</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0D1117] leading-[1.1]">
                We don't deploy labor.<br />
                <span className="italic font-light text-[#6B7280]">We engineer leverage.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <Reveal delay={0.2}>
              <p className="text-[#6B7280] text-lg leading-relaxed">
                The era of bloated operations is over. Crewvoy replaces friction with high performance systems — built once, scaled infinitely.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Image + copy split */}
        <div className="grid lg:grid-cols-12 mb-5 rounded-2xl overflow-hidden border border-[#E8EAF0] shadow-sm">
          <Reveal className="lg:col-span-7 overflow-hidden">
            <ParallaxImage
              src={imgOperator}
              alt="AI operator stack"
              className="aspect-[16/10] lg:aspect-auto h-full min-h-[380px]"
              intensity={30}
            />
          </Reveal>
          <div className="lg:col-span-5 bg-[#F2F4F9] p-8 md:p-14 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-[#E8EAF0]">
            <Reveal delay={0.1}>
              <p className="text-xs font-semibold text-[#9AA0B4] mb-5 uppercase tracking-[0.15em]">Inside the operator stack</p>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#0D1117] mb-4 leading-snug">
                One operator.<br />Ten systems.<br />
                <span className="italic font-light text-[#6B7280]">Infinite leverage.</span>
              </h3>
              <p className="text-[#6B7280] leading-relaxed text-sm">
                Behind every crew member sits an enterprise grade infrastructure of custom API integrations, automated data pipelines, proprietary scrapers, and unified operational dashboards. You get the elite technical architecture traditional agencies charge premiums for—permanently embedded into your business.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Feature cards */}
        <Stagger className="grid md:grid-cols-2 gap-4">
          {features.map((f) => (
            <StaggerItem key={f.num}>
              <div className="card-surface card-hover card-accent-top p-6 md:p-10 h-full">
                <div className="flex items-start justify-between mb-10">
                  <div className="w-11 h-11 rounded-xl bg-[#FDF0F8] flex items-center justify-center">
                    <f.icon style={{ color: "#D4007A" }} size={19} />
                  </div>
                  <span className="text-xs font-mono text-[#C0C5D5] font-semibold">{f.num}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-[#0D1117] mb-3">{f.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{f.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default ValueProps;
