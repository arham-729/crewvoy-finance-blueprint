import { Cpu, Workflow, ShieldCheck, Gauge } from "lucide-react";

const features = [
  {
    icon: Cpu,
    label: "01",
    title: "AI-augmented operators",
    desc: "Every operator is paired with custom chatbots and proprietary internal tools — so one person produces the output of an entire team.",
  },
  {
    icon: Workflow,
    label: "02",
    title: "Proprietary automation layer",
    desc: "Make.com, n8n and bespoke web systems wired into your stack. Leads, ops and reporting move on rails, not in inboxes.",
  },
  {
    icon: ShieldCheck,
    label: "03",
    title: "Human-in-the-loop QA",
    desc: "AI handles velocity. A trained human verifies every decision before it ships — accuracy without bottlenecks.",
  },
  {
    icon: Gauge,
    label: "04",
    title: "Engineered for scale",
    desc: "Systems designed to absorb 10× volume without 10× headcount. Friction is removed, not relocated.",
  },
];

const ValueProps = () => {
  return (
    <section id="approach" className="section-padding bg-background border-t border-border">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.25em] text-secondary mb-6">Our approach</div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-500 text-foreground leading-[1.1]">
              We don't hire labor.<br />
              <span className="italic font-400">We engineer leverage.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-foreground/60 text-lg leading-relaxed">
              The era of bloated operations is over. Crewvoy replaces friction with high-performance
              systems — built once, scaled infinitely. Every workflow is rebuilt around what AI does
              best, with humans owning judgement at every critical step.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {features.map((f, i) => (
            <div key={i}
              className="group bg-background p-10 md:p-12 hover:bg-card transition-colors duration-500">
              <div className="flex items-start justify-between mb-10">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <f.icon className="text-secondary" size={20} />
                </div>
                <span className="text-xs font-mono text-foreground/30">{f.label}</span>
              </div>
              <h3 className="font-heading text-2xl font-500 text-foreground mb-3">{f.title}</h3>
              <p className="text-foreground/60 text-base leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
