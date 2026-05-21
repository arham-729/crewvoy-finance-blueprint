import { useState } from "react";
import { ArrowUpRight, Sparkles, User, Check, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./motion";

const services = [
  {
    id: "lead-gen",
    name: "Lead Generation",
    augmented: "Operator deploys custom AI scrapers and outbound chatbots — qualified leads land in your CRM with enrichment, intent signals and a ready-to-send sequence. Human verifies fit before send.",
    normal: "VA manually finds leads on LinkedIn, copies them into a sheet, and sends generic emails one by one.",
    wins: ["AI-enriched CRM data", "24/7 outbound sequences", "Human-verified quality"],
  },
  {
    id: "web-dev",
    name: "Web Development",
    augmented: "Operator targets top-tier sites built on Webflow / Framer, uses AI to deconstruct structure and design, and rebuilds a tailored equivalent for your brand at a fraction of agency timelines.",
    normal: "VA prompts ChatGPT / Claude to spit out a generic site and ships it as-is.",
    wins: ["Agency-quality output", "Fraction of timeline", "Brand-tailored design"],
  },
  {
    id: "crm",
    name: "CRM & Operations",
    augmented: "Operator builds Make.com / n8n scenarios that auto-sync leads from ads, forms and calls into your CRM with deduplication, scoring and routing — running 24/7.",
    normal: "VA logs into a tool every morning and types data from one tab into another.",
    wins: ["Auto-sync pipelines", "Deduplication & scoring", "Runs while you sleep"],
  },
  {
    id: "reporting",
    name: "Reporting & Analytics",
    augmented: "Weekly Loom walkthroughs paired with an AI-generated KPI dashboard — pipeline, conversion, ops health, all visualised. You see the truth, not the narrative.",
    normal: "Random Slack messages and unstructured text reports nobody reads.",
    wins: ["Live KPI dashboards", "Weekly Loom walkthroughs", "Full pipeline visibility"],
  },
  {
    id: "support",
    name: "Customer Support",
    augmented: "AI chatbot handles tier-1 in seconds across email, chat and DMs. Operator handles edge cases and continuously trains the model on your voice.",
    normal: "VA copy-pastes canned replies and forwards everything else to you.",
    wins: ["Instant tier-1 resolution", "Omnichannel coverage", "Continuously self-improving"],
  },
  {
    id: "content",
    name: "Content & Social",
    augmented: "Operator runs an AI content engine — research, draft, brand voice tuning, scheduling and analytics. You approve, system ships.",
    normal: "VA rewrites trending posts and uploads them whenever they remember.",
    wins: ["Full content pipeline", "On-brand tone at scale", "You approve, AI ships"],
  },
  {
    id: "bookkeeping",
    name: "Bookkeeping & Admin",
    augmented: "AI categorises transactions and reconciles in real time. Operator audits, files and surfaces anomalies before they become problems.",
    normal: "VA manually enters transactions at month-end and hopes the totals match.",
    wins: ["Real-time reconciliation", "Anomaly detection", "Always audit-ready"],
  },
  {
    id: "recruiting",
    name: "Recruiting & HR Ops",
    augmented: "AI screens, scores and shortlists candidates from your ATS. Operator runs structured intake calls and books only the top 5% on your calendar.",
    normal: "VA forwards every résumé that comes in.",
    wins: ["AI-scored shortlists", "Top 5% on your calendar", "Structured intake calls"],
  },
];

const RolesSection = () => {
  const [active, setActive] = useState(0);
  const s = services[active];

  return (
    <section id="services" className="section-padding section-light">
      <div className="container-x">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="section-label">Services</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0D1117] leading-[1.1]">
                The same task.<br />
                <span className="italic font-light text-[#6B7280]">Two very different outcomes.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <Reveal delay={0.2}>
              <p className="text-[#6B7280] text-base leading-relaxed">
                Pick a service to see what a Crewvoy AI-Augmented Operator delivers
                versus what you'd get from a typical remote VA.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 items-start">

          {/* Tab list — pill style */}
          <div className="lg:col-span-3 -mx-6 px-6 lg:mx-0 lg:px-0 overflow-x-auto lg:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex lg:flex-col gap-2 pb-2 lg:pb-0 w-max lg:w-auto">
              {services.map((svc, i) => (
                <motion.button
                  key={svc.id}
                  onClick={() => setActive(i)}
                  whileTap={{ scale: 0.97 }}
                  className={`relative text-left whitespace-nowrap lg:whitespace-normal px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-3 ${
                    active === i
                      ? "bg-[#D4007A] text-white shadow-lg"
                      : "bg-white text-[#6B7280] hover:text-[#0D1117] border border-[#E8EAF0] hover:border-[#D4007A]/20 hover:bg-[#FDF0F8]"
                  }`}
                >
                  {active === i && (
                    <motion.div
                      layoutId="active-tab-indicator"
                      className="absolute inset-0 rounded-xl bg-[#D4007A]"
                      style={{ zIndex: -1 }}
                    />
                  )}
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 ${
                      active === i ? "bg-white/20 text-white" : "bg-[#F8F4F7] text-[#9AA0B4]"
                    }`}
                  >
                    {i + 1}
                  </span>
                  {svc.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="lg:col-span-9 min-w-0 grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Crewvoy card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`aug-${active}`}
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-[#0D1117] rounded-2xl overflow-hidden flex flex-col min-h-[260px] md:min-h-[340px] min-w-0 w-full"
              >
                {/* Subtle pink top line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FC94AF] to-transparent" />

                <div className="relative z-10 p-5 md:p-10 flex flex-col h-full">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 mb-6 self-start">
                    <div className="w-7 h-7 rounded-lg bg-[#D4007A] flex items-center justify-center">
                      <Sparkles size={13} className="text-white" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#D4007A]">Crewvoy AI Operator</span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-white mb-4">{s.name}</h3>
                  <p className="text-white/55 text-sm leading-relaxed flex-1 mb-8 break-words">{s.augmented}</p>

                  {/* Win chips */}
                  <div className="flex flex-col gap-2">
                    {s.wins.map((win) => (
                      <div key={win} className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#D4007A]/20 flex items-center justify-center flex-shrink-0">
                          <Check size={9} className="text-[#D4007A]" />
                        </div>
                        <span className="text-xs text-white/60 font-medium">{win}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Normal VA card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`norm-${active}`}
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.35, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-white rounded-2xl overflow-hidden flex flex-col border border-[#E8EAF0] min-h-[260px] md:min-h-[340px] min-w-0 w-full"
              >
                {/* Faded red top line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-[#E8EAF0]" />

                <div className="relative z-10 p-5 md:p-10 flex flex-col h-full">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 mb-6 self-start">
                    <div className="w-7 h-7 rounded-lg bg-[#F2F4F9] flex items-center justify-center">
                      <User size={13} className="text-[#9AA0B4]" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#B0B8CC]">Normal VA</span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-[#C0C8D8] mb-4">{s.name}</h3>
                  <p className="text-[#C0C8D8] text-sm leading-relaxed flex-1 mb-8 break-words">{s.normal}</p>

                  {/* Pain chips */}
                  <div className="flex flex-col gap-2">
                    {["Manual, one by one", "No automation layer", "No quality checks"].map((pain) => (
                      <div key={pain} className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#FEE2E2] flex items-center justify-center flex-shrink-0">
                          <X size={9} className="text-[#EF4444]" />
                        </div>
                        <span className="text-xs text-[#C0C8D8] font-medium">{pain}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* CTA */}
        <Reveal className="mt-16 text-center">
          <a href="#booking" className="btn-coral inline-flex">
            Engineer my workforce <ArrowUpRight size={15} />
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default RolesSection;
