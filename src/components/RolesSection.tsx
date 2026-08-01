import { useRef } from "react";
import { Check, X } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "./motion";
import { WordReveal } from "./premium";
import FloatingWidget, { type OrbitItem } from "./FloatingWidget";

import imgLaptop from "../assets/widgets/icons8-laptop-3d-512.png";
import imgChart from "../assets/widgets/icons8-chart-3d-512.png";
import imgGear from "../assets/widgets/icons8-workflow-3d-512.png";
import imgWallet from "../assets/widgets/icons8-wallet-3d-512.png";
import imgPeople from "../assets/widgets/icons8-people-3d-512.png";
import imgResume from "../assets/widgets/icons8-resume-94.png";
import imgTarget from "../assets/widgets/icons8-target-3d-512.png";
import imgHeadphones from "../assets/widgets/icons8-headset-3d-512.png";
import imgPencil from "../assets/widgets/icons8-pencil-3d-512.png";

interface Service {
  id: string;
  name: string;
  augmented: string;
  normal: string;
  wins: string[];
  centerImg: string;
  centerLabel: string;
  orbit: OrbitItem[];
}

const services: Service[] = [
  {
    id: "web-dev",
    name: "Web Development",
    augmented:
      "Operators leverage AI stacks including Framer/Webflow to design and ship websites for your business at industry leading levels.Frontend, backend, and maintenance all handled by Crewvoy.",
    normal: "VA prompts ChatGPT / Claude to spit out a generic site and ships it as-is.",
    wins: ["Agency-quality output", "Fraction of timeline", "Brand-tailored design"],
    centerImg: imgLaptop,
    centerLabel: "Web Development",
    orbit: [
      { emoji: "🎨", label: "Design", ring: 0 },
      { emoji: "⚛️", label: "React", ring: 0 },
      { emoji: "🌐", label: "Webflow", ring: 0 },
      { emoji: "✨", label: "Framer", ring: 1 },
      { emoji: "📱", label: "Responsive", ring: 1 },
    ],
  },
  {
    id: "reporting",
    name: "Reporting & Analytics",
    augmented:
      "Weekly Loom walkthroughs paired with a specialized KPI dashboard. Pipeline, conversion, progress, all visualised. You see unfiltered results.",
    normal: "Random Slack messages and unstructured text reports nobody reads.",
    wins: ["Live KPI dashboards", "Weekly Loom walkthroughs", "Full pipeline visibility"],
    centerImg: imgChart,
    centerLabel: "Analytics",
    orbit: [
      { emoji: "📈", label: "Growth", ring: 0 },
      { emoji: "🔍", label: "Insights", ring: 0 },
      { emoji: "🎯", label: "KPIs", ring: 0 },
      { emoji: "📉", label: "Trends", ring: 1 },
      { emoji: "🗂️", label: "Reports", ring: 1 },
    ],
  },
  {
    id: "crm",
    name: "CRM & Operations",
    augmented:
      "Operator builds Make.com / n8n scenarios that auto-sync leads from ads, forms and calls into your CRM with deduplication, scoring and routing, running 24/7.",
    normal: "VA logs into a tool every morning and types data from one tab into another.",
    wins: ["Auto-sync pipelines", "Deduplication & scoring", "Runs while you sleep"],
    centerImg: imgGear,
    centerLabel: "CRM & Ops",
    orbit: [
      { emoji: "🔄", label: "Automation", ring: 0 },
      { emoji: "🗃️", label: "Database", ring: 0 },
      { emoji: "⚡", label: "Zapier", ring: 0 },
      { emoji: "🔗", label: "Integrations", ring: 1 },
      { emoji: "🤖", label: "AI Bots", ring: 1 },
    ],
  },
  {
    id: "bookkeeping",
    name: "Bookkeeping & Admin",
    augmented:
      "AI categorises transactions and reconciles in real time. Operator audits, files and surfaces anomalies before they become problems.",
    normal: "VA manually enters transactions at month-end and hopes the totals match.",
    wins: ["Real-time reconciliation", "Anomaly detection", "Always audit-ready"],
    centerImg: imgWallet,
    centerLabel: "Bookkeeping",
    orbit: [
      { emoji: "🧾", label: "Receipts", ring: 0 },
      { emoji: "📋", label: "Audit", ring: 0 },
      { emoji: "🏦", label: "Banking", ring: 0 },
      { emoji: "🛡️", label: "Compliance", ring: 1 },
      { emoji: "🧮", label: "Calculator", ring: 1 },
    ],
  },
  {
    id: "recruiting",
    name: "Recruiting & HR Ops",
    augmented:
      "AI screens, scores and shortlists candidates from your ATS. Operator runs structured intake calls and books only the top 5% on your calendar.",
    normal: "VA forwards every résumé that comes in.",
    wins: ["AI-scored shortlists", "Top 5% on your calendar", "Structured intake calls"],
    centerImg: imgPeople,
    centerLabel: "HR & Recruiting",
    orbit: [
      { imgSrc: imgResume, label: "Resume", ring: 0 },
      { emoji: "🔎", label: "Screening", ring: 0 },
      { emoji: "📅", label: "Calendar", ring: 0 },
      { emoji: "🏆", label: "Top Talent", ring: 1 },
      { emoji: "🤝", label: "Onboarding", ring: 1 },
    ],
  },
  {
    id: "lead-gen",
    name: "Lead Generation",
    augmented:
      "Operator deploys custom AI scrapers and outbound chatbots. Qualified leads land in your CRM with enrichment, intent signals and a ready-to-send sequence.",
    normal: "VA manually finds leads on LinkedIn, copies them into a sheet, and sends generic emails one by one.",
    wins: ["AI-enriched CRM data", "24/7 outbound sequences", "Human-verified quality"],
    centerImg: imgTarget,
    centerLabel: "Lead Gen",
    orbit: [
      { emoji: "🧲", label: "Attract", ring: 0 },
      { emoji: "📧", label: "Outreach", ring: 0 },
      { emoji: "🤖", label: "AI Scraper", ring: 0 },
      { emoji: "💬", label: "Chatbot", ring: 1 },
      { emoji: "🗺️", label: "Prospecting", ring: 1 },
    ],
  },
  {
    id: "support",
    name: "Customer Support",
    augmented:
      "AI chatbot handles tier-1 in seconds across email, chat and DMs. Operator handles edge cases and continuously trains the model on your voice.",
    normal: "VA copy-pastes canned replies and forwards everything else to you.",
    wins: ["Instant tier-1 resolution", "Omnichannel coverage", "Continuously self-improving"],
    centerImg: imgHeadphones,
    centerLabel: "Customer Support",
    orbit: [
      { emoji: "💬", label: "Live Chat", ring: 0 },
      { emoji: "📬", label: "Email", ring: 0 },
      { emoji: "😊", label: "Satisfaction", ring: 0 },
      { emoji: "🌍", label: "Global", ring: 1 },
      { emoji: "🤖", label: "AI Bot", ring: 1 },
    ],
  },
  {
    id: "content",
    name: "Content & Social",
    augmented:
      "Operator runs an AI content engine: research, draft, brand voice tuning, scheduling and analytics. You approve, system ships.",
    normal: "VA rewrites trending posts and uploads them whenever they remember.",
    wins: ["Full content pipeline", "On-brand tone at scale", "You approve, AI ships"],
    centerImg: imgPencil,
    centerLabel: "Content & Social",
    orbit: [
      { emoji: "📸", label: "Visuals", ring: 0 },
      { emoji: "📣", label: "Campaigns", ring: 0 },
      { emoji: "🗓️", label: "Scheduling", ring: 0 },
      { emoji: "#️⃣", label: "Hashtags", ring: 1 },
      { emoji: "🚀", label: "Growth", ring: 1 },
    ],
  },
];

const N = services.length;

const ServiceLayer = ({
  s,
  i,
  progress,
}: {
  s: Service;
  i: number;
  progress: import("framer-motion").MotionValue<number>;
}) => {
  const start = i / N;
  const end = (i + 1) / N;
  const local = useTransform(progress, [start, end], [0, 1], { clamp: true });

  const widgetOpacity = useTransform(local, [0, 0.18, 0.8, 1], [0, 1, 1, 0]);
  const widgetScale = useTransform(local, [0, 0.5, 1], [0.85, 1, 0.92]);

  const textY = useTransform(local, [0, 0.15, 0.85, 1], [-70, 0, 80, 150]);
  const textOpacity = useTransform(local, [0, 0.16, 0.84, 1], [0, 1, 1, 0]);

  return (
    <div className="absolute inset-0 flex items-center pointer-events-none overflow-hidden">
      <div className="container-x w-full grid lg:grid-cols-12 gap-4 md:gap-10 lg:gap-16 items-center px-4 md:px-6">
        {/* Floating widget column — shown below text on mobile */}
        <motion.div
          style={{ opacity: widgetOpacity, scale: widgetScale }}
          className="order-2 lg:order-2 lg:col-span-5 lg:col-start-8 will-change-transform"
        >
          <FloatingWidget
            centerImg={s.centerImg}
            centerLabel={s.centerLabel}
            orbit={s.orbit}
          />
        </motion.div>

        {/* Text column */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="order-1 lg:order-1 lg:col-span-6 will-change-transform"
        >
          <span className="block font-heading font-light text-[#D4007A] mb-2 md:mb-3 tracking-wide text-xs md:text-sm">
            {String(i + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}
          </span>
          <span className="block font-heading text-2xl xs:text-3xl md:text-6xl font-bold text-[#0D1117] leading-[1.04] mb-3 md:mb-7">
            {s.name}
          </span>
          <p className="text-[#374151] text-sm md:text-xl leading-relaxed max-w-xl mb-4 md:mb-7">
            {s.augmented}
          </p>
          <div className="flex flex-wrap gap-2 md:gap-2.5 mb-4 md:mb-8">
            {s.wins.map((win) => (
              <span
                key={win}
                className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3.5 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-semibold"
                style={{
                  background: "#FDF0F8",
                  color: "#D4007A",
                  border: "1px solid rgba(212,0,122,0.18)",
                }}
              >
                <Check size={12} className="hidden md:inline" /><Check size={10} className="md:hidden" /> {win}
              </span>
            ))}
          </div>
          <div className="hidden md:flex items-start gap-3 max-w-lg">
            <span className="mt-0.5 w-5 h-5 rounded-full bg-[#F2F4F9] flex items-center justify-center flex-shrink-0">
              <X size={11} className="text-[#B0B8CC]" />
            </span>
            <p className="text-[#9AA0B4] text-sm leading-relaxed">
              <span className="font-semibold text-[#B0B8CC]">A normal VA: </span>
              {s.normal}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const RolesSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section id="services" className="section-light">
      {/* Section header */}
      <div className="container-x section-padding pb-0">
        <div className="mb-4">
          <Reveal>
            <span className="section-label">Services</span>
          </Reveal>
          <WordReveal
            text="The same task. Two very different outcomes."
            highlight={["different"]}
            highlightClassName="italic font-light text-[#6B7280]"
            className="font-heading text-4xl md:text-6xl font-bold text-[#0D1117] leading-[1.05]"
          />
        </div>
      </div>

      {/* Tall scroll track */}
      <div ref={ref} style={{ height: `${N * 100}vh` }} className="relative">
        {/* Pinned stage */}
        <div className="sticky top-0 h-screen overflow-hidden">
          {services.map((s, i) => (
            <ServiceLayer key={s.id} s={s} i={i} progress={scrollYProgress} />
          ))}

        </div>
      </div>
    </section>
  );
};

export default RolesSection;
