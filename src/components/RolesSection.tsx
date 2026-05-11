import { useState } from "react";
import { Sparkles, User, ArrowUpRight } from "lucide-react";

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

import { useState } from "react";
import { Sparkles, User, ArrowUpRight } from "lucide-react";
import { Reveal } from "./motion";
import { motion, AnimatePresence } from "framer-motion";

// keep services array above unchanged


        <div className="grid lg:grid-cols-12 gap-8">
          {/* Service tabs */}
          <div className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible -mx-6 lg:mx-0 px-6 lg:px-0">
            {services.map((svc, i) => (
              <button
                key={svc.name}
                onClick={() => setActive(i)}
                className={`text-left whitespace-nowrap lg:whitespace-normal px-5 py-4 rounded-lg border transition-all flex items-center justify-between gap-4 ${
                  active === i
                    ? "bg-background border-secondary/40 text-foreground"
                    : "border-border text-foreground/60 hover:text-foreground hover:border-foreground/20"
                }`}
              >
                <span className="font-heading font-500">{svc.name}</span>
                <ArrowUpRight size={14} className={active === i ? "text-secondary" : "opacity-40"} />
              </button>
            ))}
          </div>

          {/* Comparison */}
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden">
            <div className="bg-background p-8 md:p-10 relative">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-secondary/15 flex items-center justify-center">
                  <Sparkles size={14} className="text-secondary" />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">
                  Crewvoy AI Operator
                </span>
              </div>
              <h3 className="font-heading text-xl font-600 text-foreground mb-4">{s.name}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">{s.augmented}</p>
            </div>
            <div className="bg-background p-8 md:p-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <User size={14} className="text-foreground/50" />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-foreground/40 font-semibold">
                  Normal VA
                </span>
              </div>
              <h3 className="font-heading text-xl font-600 text-foreground/70 mb-4">{s.name}</h3>
              <p className="text-foreground/40 text-sm leading-relaxed">{s.normal}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="#booking"
            className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-4 rounded-full text-sm font-semibold hover:bg-secondary hover:text-secondary-foreground transition-all">
            Engineer my workforce <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default RolesSection;
