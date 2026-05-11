import { Cpu, Workflow, ShieldCheck, Gauge } from "lucide-react";
import { Reveal, Stagger, StaggerItem, ParallaxImage, TextReveal, BlurReveal } from "./motion";
import imgOperator from "@/assets/img-operator.jpg";
import { motion } from "framer-motion";

const features = [
  { icon: Cpu, label: "01", title: "AI-augmented operators",
    desc: "Every operator is paired with custom chatbots and proprietary internal tools — so one person produces the output of an entire team.", 
    gradient: "from-blue-600/20 to-purple-600/20", border: "border-blue-500/30" },
  { icon: Workflow, label: "02", title: "Proprietary automation layer",
    desc: "Make.com, n8n and bespoke web systems wired into your stack. Leads, ops and reporting move on rails, not in inboxes.",
    gradient: "from-purple-600/20 to-pink-600/20", border: "border-purple-500/30" },
  { icon: ShieldCheck, label: "03", title: "Human-in-the-loop QA",
    desc: "AI handles velocity. A trained human verifies every decision before it ships — accuracy without bottlenecks.",
    gradient: "from-cyan-600/20 to-blue-600/20", border: "border-cyan-500/30" },
  { icon: Gauge, label: "04", title: "Engineered for scale",
    desc: "Systems designed to absorb 10× volume without 10× headcount. Friction is removed, not relocated.",
    gradient: "from-orange-600/20 to-red-600/20", border: "border-orange-500/30" },
];

const ValueProps = () => {
  return (
    <section id="approach" className="section-padding bg-background border-t border-border/30">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.25em] text-secondary mb-6 font-semibold">Our approach</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-600 text-foreground leading-[1.1] mb-2">
                We don't hire labor.<br />
                <span className="text-gradient-letters italic font-500">We engineer leverage.</span>
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
        <div className="grid lg:grid-cols-12 gap-px bg-border/50 mb-px rounded-lg overflow-hidden">
          <Reveal className="lg:col-span-7 bg-background overflow-hidden">
            <ParallaxImage
              src={imgOperator}
              alt="Crewvoy operator running automation dashboards"
              className="aspect-[16/10] lg:aspect-auto h-full min-h-[400px]"
              intensity={60}
            />
          </Reveal>
          <div className="lg:col-span-5 bg-gradient-to-br from-card/50 to-background/50 glass-effect p-10 md:p-12 flex flex-col justify-center">
            <Reveal delay={0.1}>
              <span className="text-xs font-mono text-foreground/40 mb-6 block">— Inside the operator stack</span>
              <h3 className="font-heading text-3xl font-600 text-foreground mb-4 leading-tight">
                One operator. <span className="text-gradient italic">Ten systems.</span> Infinite leverage.
              </h3>
              <p className="text-foreground/60 leading-relaxed">
                Behind every Crewvoy operator sits a tailored stack of chatbots, scrapers, dashboards
                and automations — the same tooling agencies sell at premium rates, embedded in your day-to-day ops.
              </p>
            </Reveal>
          </div>
        </div>

        <Stagger className="grid md:grid-cols-2 gap-4">
          {features.map((f, idx) => (
            <StaggerItem key={f.label}>
              <motion.div 
                className={`group glass-effect card-hover bg-gradient-to-br ${f.gradient} border ${f.border} hover:border-secondary/50 p-10 md:p-12 h-full rounded-lg relative overflow-hidden`}
                whileHover={{ boxShadow: "0 20px 50px rgba(188, 232, 247, 0.2)" }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background/20 pointer-events-none" />
                
                <div className="flex items-start justify-between mb-10 relative z-10">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary/30 to-blue-500/20 flex items-center justify-center group-hover:from-secondary/50 group-hover:to-blue-500/30 transition-all duration-500 shadow-lg shadow-secondary/20"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 4, delay: idx * 0.3 }}
                  >
                    <f.icon className="text-secondary group-hover:scale-110 transition-transform duration-300" size={20} />
                  </motion.div>
                  <span className="text-xs font-mono text-foreground/40 group-hover:text-secondary/80 transition-colors duration-300 font-bold">{f.label}</span>
                </div>
                <h3 className="font-heading text-2xl font-600 text-foreground mb-3 group-hover:text-gradient transition-all duration-300 relative z-10">{f.title}</h3>
                <p className="text-foreground/70 text-base leading-relaxed group-hover:text-foreground/90 transition-colors duration-300 relative z-10">{f.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default ValueProps;
