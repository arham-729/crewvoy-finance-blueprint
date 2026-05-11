import { ArrowUpRight, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Modern city skyline representing scale"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container-x w-full px-6 md:px-10 pb-20 md:pb-28 pt-32">
        <div className="max-w-5xl animate-fade-up">
          <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-secondary mb-8">
            <span className="w-8 h-px bg-secondary" />
            AI-Augmented Workforce
          </div>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-500 text-foreground leading-[1.05] mb-8">
            We engineer<br />
            <span className="italic font-400 text-foreground/90">tomorrow's</span> workforce.
          </h1>
          <p className="text-foreground/60 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            Crewvoy fuses elite remote operators with custom chatbots, proprietary web systems and
            deep automation — giving US-based SMBs agency-level output at 60–80% less overhead.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#booking"
              className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-4 rounded-full text-sm font-semibold hover:bg-secondary hover:text-secondary-foreground transition-all">
              Book a strategy call <ArrowUpRight size={16} />
            </a>
            <a href="#services"
              className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground text-sm font-medium px-2 py-4 transition-colors">
              Explore services <ArrowDown size={16} />
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl border-t border-border/50 pt-10">
          {[
            { v: "60–80%", l: "Overhead reduction" },
            { v: "<7 days", l: "Operator deployment" },
            { v: "24/7", l: "Automation uptime" },
            { v: "100%", l: "Human-in-the-loop QA" },
          ].map((s, i) => (
            <div key={i}>
              <div className="font-heading text-2xl md:text-3xl font-600 text-foreground mb-1">{s.v}</div>
              <div className="text-xs uppercase tracking-wider text-foreground/50">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
