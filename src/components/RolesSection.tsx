import { useState } from "react";
import { Sparkles, User, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./motion";

const services = [
  {
    name: "Lead Generation",
    augmented: "Operator deploys custom AI scrapers and outbound chatbots — qualified leads land in your CRM with enrichment, intent signals and a ready-to-send sequence. Human verifies fit before send.",
    normal: "VA manually finds leads on LinkedIn, copies them into a sheet, and sends generic emails one by one.",
  },
  {
    name: "Web Development",
    augmented: "Operator targets top-tier sites built on Webflow / Framer, uses AI to deconstruct structure and design, and rebuilds a tailored equivalent for your brand at a fraction of agency timelines.",
    normal: "VA prompts ChatGPT / Claude to spit out a generic site and ships it as-is.",
  },
  {
    name: "CRM & Operations",
    augmented: "Operator builds Make.com / n8n scenarios that auto-sync leads from ads, forms and calls into your CRM with deduplication, scoring and routing — running 24/7.",
    normal: "VA logs into a tool every morning and types data from one tab into another.",
  },
  {
    name: "Reporting & Analytics",
    augmented: "Weekly Loom walkthroughs paired with an AI-generated KPI dashboard — pipeline, conversion, ops health, all visualised. You see the truth, not the narrative.",
    normal: "Random Slack messages and unstructured text reports nobody reads.",
  },
  {
    name: "Customer Support",
    augmented: "AI chatbot handles tier-1 in seconds across email, chat and DMs. Operator handles edge cases and continuously trains the model on your voice.",
    normal: "VA copy-pastes canned replies and forwards everything else to you.",
  },
  {
    name: "Content & Social",
    augmented: "Operator runs an AI content engine — research, draft, brand voice tuning, scheduling and analytics. You approve, system ships.",
    normal: "VA rewrites trending posts and uploads them whenever they remember.",
  },
  {
    name: "Bookkeeping & Admin",
    augmented: "AI categorises transactions and reconciles in real time. Operator audits, files and surfaces anomalies before they become problems.",
    normal: "VA manually enters transactions at month-end and hopes the totals match.",
  },
  {
    name: "Recruiting & HR Ops",
    augmented: "AI screens, scores and shortlists candidates from your ATS. Operator runs structured intake calls and books only the top 5% on your calendar.",
    normal: "VA forwards every résumé that comes in.",
  },
];

const RolesSection = () => {
  const [active, setActive] = useState(0);
  const s = services[active];

  return (
    <section id="services" className="section-padding bg-background border-t border-border/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container-x relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.25em] text-secondary mb-6 font-semibold">Services</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-600 text-foreground leading-[1.1]">
                The same task. Two<br />
                <span className="text-gradient">very different outcomes.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <Reveal delay={0.2}>
              <p className="text-foreground/60 text-base leading-relaxed">
                Pick a service to see what a Crewvoy AI-Augmented Operator delivers
                versus what you'd get from a typical remote VA.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible -mx-6 lg:mx-0 px-6 lg:px-0 pb-2 lg:pb-0">
            {services.map((svc, i) => (
              <motion.button
                key={svc.name}
                onClick={() => setActive(i)}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={`text-left whitespace-nowrap lg:whitespace-normal px-5 py-4 rounded-lg border transition-all flex items-center justify-between gap-4 duration-300 ${
                  active === i
                    ? "bg-gradient-to-r from-secondary/20 to-blue-500/10 border-secondary/50 text-foreground shadow-lg shadow-secondary/20"
                    : "border-border/50 text-foreground/60 hover:text-foreground hover:border-secondary/30 hover:bg-card/50"
                }`}
              >
                <span className="font-heading font-600">{svc.name}</span>
                <motion.div 
                  animate={{ x: active === i ? 4 : 0, rotate: active === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight size={14} className={active === i ? "text-secondary" : "opacity-40"} />
                </motion.div>
              </motion.button>
            ))}
          </div>

          <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={`aug-${active}`}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="glass-effect card-hover bg-card/50 border border-secondary/20 hover:border-secondary/40 p-8 md:p-10 rounded-lg relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <motion.div 
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary/30 to-blue-500/20 flex items-center justify-center mb-6 group-hover:from-secondary/50 group-hover:to-blue-500/40 transition-all duration-300"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                >
                  <Sparkles size={14} className="text-secondary" />
                </motion.div>
                
                <span className="text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-4 inline-block group-hover:text-cyan-300 transition-colors duration-300">
                  Crewvoy AI Operator
                </span>
                <h3 className="font-heading text-xl font-600 text-foreground mb-4 group-hover:text-gradient transition-all duration-300">{s.name}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 relative z-10">{s.augmented}</p>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`norm-${active}`}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="glass-effect bg-card/30 border border-border/50 hover:border-foreground/20 p-8 md:p-10 rounded-lg relative overflow-hidden group transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <motion.div 
                  className="w-8 h-8 rounded-full bg-muted/40 flex items-center justify-center mb-6 group-hover:bg-muted/60 transition-all duration-300"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
                >
                  <User size={14} className="text-foreground/50 group-hover:text-foreground/70 transition-colors" />
                </motion.div>
                
                <span className="text-xs uppercase tracking-[0.2em] text-foreground/40 font-bold mb-4 inline-block group-hover:text-foreground/60 transition-colors duration-300">
                  Normal VA
                </span>
                <h3 className="font-heading text-xl font-600 text-foreground/70 mb-4 group-hover:text-foreground/90 transition-colors duration-300">{s.name}</h3>
                <p className="text-foreground/40 text-sm leading-relaxed group-hover:text-foreground/50 transition-colors duration-300">{s.normal}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <motion.a href="#booking"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-coral"
          >
            Engineer my workforce <motion.div animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 2 }}><ArrowUpRight size={16} /></motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default RolesSection;
