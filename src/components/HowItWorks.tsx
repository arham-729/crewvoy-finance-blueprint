import { ArrowUpRight } from "lucide-react";
import sectionBg from "@/assets/section-bg.jpg";
import imgAutomation from "@/assets/img-automation.jpg";
import { Reveal, Stagger, StaggerItem, ParallaxImage } from "./motion";
import { motion } from "framer-motion";

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
    <section id="how-it-works" className="section-padding relative overflow-hidden border-t border-border/30">
      <img
        src={sectionBg}
        alt=""
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        width={1920}
        height={1088}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      {/* Animated accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="relative container-x">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.25em] text-secondary mb-6 font-semibold">Process</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-600 text-foreground leading-[1.1]">
                From friction to<br />
                <span className="text-gradient-warm italic">infinite scale.</span>
              </h2>
            </Reveal>
          </div>
        </div>

        {/* Parallax band */}
        <Reveal className="mb-8">
          <div className="relative overflow-hidden rounded-xl group glow-border-lg">
            <ParallaxImage
              src={imgAutomation}
              alt="Glowing automation pipelines"
              className="aspect-[21/9] group-hover:scale-110 transition-transform duration-700"
              intensity={70}
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </Reveal>

        <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const stepGradients = [
              "from-blue-600/25 to-purple-600/15",
              "from-purple-600/25 to-pink-600/15",
              "from-cyan-600/25 to-blue-600/15",
              "from-orange-600/25 to-red-600/15",
            ];
            return (
            <StaggerItem key={step.num}>
              <motion.div 
                className={`glass-effect card-hover bg-gradient-to-br ${stepGradients[idx % stepGradients.length]} border border-secondary/20 hover:border-secondary/50 p-8 md:p-10 rounded-lg h-full relative overflow-hidden group`}
                whileHover={{ boxShadow: "0 25px 60px rgba(52, 211, 153, 0.2)", y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <motion.div 
                  className="text-secondary/40 font-mono text-sm font-bold mb-8 relative z-10 group-hover:text-secondary/80 transition-colors duration-300"
                  animate={{ rotate: [0, 2, -2, 0] }}
                  transition={{ repeat: Infinity, duration: 4, delay: idx * 0.3 }}
                >
                  {step.num}
                </motion.div>
                
                <h3 className="font-heading text-xl font-600 text-foreground mb-3 group-hover:text-gradient transition-all duration-300 relative z-10">{step.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed group-hover:text-foreground/85 transition-colors duration-300 relative z-10">{step.desc}</p>
                
                {/* Connector line for desktop */}
                {idx < steps.length - 1 && (
                  <motion.div 
                    className="hidden lg:block absolute -right-6 top-1/2 w-12 h-0.5 bg-gradient-to-r from-secondary/20 to-transparent"
                    animate={{ scaleX: [0, 1] }}
                    transition={{ duration: 1, delay: idx * 0.2 }}
                  />
                )}
              </motion.div>
            </StaggerItem>
            );
          })}
        </Stagger>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.a href="#booking"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-coral"
          >
            Start your audit <motion.div animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 2 }}><ArrowUpRight size={16} /></motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
