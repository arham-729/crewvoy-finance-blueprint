import { ArrowUpRight } from "lucide-react";
import imgAutomation from "@/assets/pics/image_three.jpeg";
import { Reveal, Stagger, StaggerItem, ParallaxImage } from "./motion";

const steps = [
  { num: "01", title: "Audit & architect",
    desc: "We map every workflow, identify automation surface area and architect an AI-augmented operating model tailored to your business." },
  { num: "02", title: "Deploy systems",
    desc: "Custom chatbots, proprietary web systems and Make.com / n8n pipelines are built and wired into your existing stack — under one week." },
  { num: "03", title: "Match the operator",
    desc: "We assign a senior operator trained on the systems we just built. They run the playbook, you keep judgement and approval." },
  { num: "04", title: "Scale & optimise",
    desc: "Weekly KPI reviews, AI-generated dashboards and continuous system upgrades. Output compounds, overhead doesn't." },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-dark section-padding">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="section-label-dark">Process</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-[1.1]">
                From friction to<br />
                <span className="italic font-light text-white/50">infinite scale.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <Reveal delay={0.2}>
              <p className="text-white/50 text-lg leading-relaxed">
                Four steps from your current chaos to a compounding,
                AI-powered operating layer that runs without you.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Image band */}
        <Reveal className="mb-6">
          <div className="relative overflow-hidden rounded-2xl group" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            <ParallaxImage
              src={imgAutomation}
              alt="AI humanoid robot"
              className="aspect-[16/7]"
              intensity={25}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1119]/60 via-transparent to-transparent" />
          </div>
        </Reveal>

        {/* Step cards */}
        <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => (
            <StaggerItem key={step.num}>
              <div
                className="card-hover card-accent-top p-8 md:p-10 h-full rounded-xl"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)" }}
              >
                <p className="text-xs font-mono text-white/25 mb-7">{step.num}</p>
                <h3 className="font-heading text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-14 text-center">
          <a href="#booking" className="btn-coral">
            Start your audit <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
