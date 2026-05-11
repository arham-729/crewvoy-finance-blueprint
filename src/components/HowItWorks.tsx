import { ArrowUpRight } from "lucide-react";
import sectionBg from "@/assets/section-bg.jpg";

const steps = [
  {
    num: "01",
    title: "Audit & architect",
    desc: "We map every workflow, identify automation surface area and architect an AI-augmented operating model tailored to your business.",
  },
  {
    num: "02",
    title: "Deploy systems",
    desc: "Custom chatbots, proprietary web systems and Make.com / n8n pipelines are built and wired into your existing stack — under one week.",
  },
  {
    num: "03",
    title: "Match the operator",
    desc: "We assign a senior operator trained on the systems we just built. They run the playbook, you keep judgement and approval.",
  },
  {
    num: "04",
    title: "Scale & optimise",
    desc: "Weekly KPI reviews, AI-generated dashboards and continuous system upgrades. Output compounds, overhead doesn't.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden border-t border-border">
      <img
        src={sectionBg}
        alt=""
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        width={1920}
        height={1088}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />

      <div className="relative container-x">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.25em] text-secondary mb-6">Process</div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-500 text-foreground leading-[1.1]">
              From friction to<br />
              <span className="italic font-400">infinite scale.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {steps.map((step) => (
            <div key={step.num} className="bg-background p-8 md:p-10 group hover:bg-card transition-colors">
              <div className="text-secondary font-mono text-sm mb-12">{step.num}</div>
              <h3 className="font-heading text-xl font-600 text-foreground mb-3">{step.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#booking"
            className="inline-flex items-center gap-2 text-foreground border border-border hover:border-secondary/60 hover:text-secondary px-7 py-4 rounded-full text-sm font-semibold transition-all">
            Start your audit <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
