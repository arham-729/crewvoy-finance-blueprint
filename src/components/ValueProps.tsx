import { Cpu, Workflow, ShieldCheck, Gauge } from "lucide-react";
import { Reveal, Stagger, StaggerItem, ParallaxImage } from "./motion";
import imgOperator from "@/assets/img-operator.jpg";

const features = [
  { icon: Cpu, label: "01", title: "AI-augmented operators",
    desc: "Every operator is paired with custom chatbots and proprietary internal tools — so one person produces the output of an entire team." },
  { icon: Workflow, label: "02", title: "Proprietary automation layer",
    desc: "Make.com, n8n and bespoke web systems wired into your stack. Leads, ops and reporting move on rails, not in inboxes." },
  { icon: ShieldCheck, label: "03", title: "Human-in-the-loop QA",
    desc: "AI handles velocity. A trained human verifies every decision before it ships — accuracy without bottlenecks." },
  { icon: Gauge, label: "04", title: "Engineered for scale",
    desc: "Systems designed to absorb 10× volume without 10× headcount. Friction is removed, not relocated." },
];

const ValueProps = () => {
  return (
    <section id="approach" className="section-padding bg-background border-t border-border">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.25em] text-secondary mb-6">Our approach</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-500 text-foreground leading-[1.1]">
                We don't hire labor.<br />
                <span className="italic font-400">We engineer leverage.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <Reveal delay={0.2}>
              <p className="text-foreground/60 text-lg leading-relaxed">
                The era of bloated operations is over. Crewvoy replaces friction with high-performance
                systems — built once, scaled infinitely. Every workflow is rebuilt around what AI does
                best, with humans owning judgement at every critical step.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Image + intro split */}
        <div className="grid lg:grid-cols-12 gap-px bg-border mb-px">
          <Reveal className="lg:col-span-7 bg-background overflow-hidden">
            <ParallaxImage
              src={imgOperator}
              alt="Crewvoy operator running automation dashboards"
              className="aspect-[16/10] lg:aspect-auto h-full min-h-[400px]"
              intensity={60}
            />
          </Reveal>
          <div className="lg:col-span-5 bg-background p-10 md:p-12 flex flex-col justify-center">
            <Reveal delay={0.1}>
              <span className="text-xs font-mono text-foreground/40 mb-6 block">— Inside the operator stack</span>
              <h3 className="font-heading text-3xl font-500 text-foreground mb-4 leading-tight">
                One operator. <span className="italic">Ten systems.</span> Infinite leverage.
              </h3>
              <p className="text-foreground/60 leading-relaxed">
                Behind every Crewvoy operator sits a tailored stack of chatbots, scrapers, dashboards
                and automations — the same tooling agencies sell at premium rates, embedded in your day-to-day ops.
              </p>
            </Reveal>
          </div>
        </div>

        <Stagger className="grid md:grid-cols-2 gap-px bg-border">
          {features.map((f) => (
            <StaggerItem key={f.label}>
              <div className="group bg-background p-10 md:p-12 hover:bg-card transition-colors duration-500 h-full">
                <div className="flex items-start justify-between mb-10">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <f.icon className="text-secondary" size={20} />
                  </div>
                  <span className="text-xs font-mono text-foreground/30">{f.label}</span>
                </div>
                <h3 className="font-heading text-2xl font-500 text-foreground mb-3">{f.title}</h3>
                <p className="text-foreground/60 text-base leading-relaxed">{f.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default ValueProps;
