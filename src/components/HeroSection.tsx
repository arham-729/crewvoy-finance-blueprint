import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Financial professionals working"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-[hsl(var(--hero-bg))] opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--hero-bg))] via-[hsl(var(--hero-bg))/0.85] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-800 text-hero-foreground leading-tight mb-6">
              Remote financial hiring at a{" "}
              <span className="text-gradient">quarter of the cost.</span>
            </h1>
            <p className="text-hero-foreground/70 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
              Hire expert financial professionals to streamline your operations
              and scale efficiently.
            </p>
            <a
              href="#booking"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition-all hover:gap-3"
            >
              Book a Call <ArrowRight size={20} />
            </a>
          </div>

          <div className="hidden md:flex justify-center" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl bg-secondary/20 backdrop-blur-sm border border-secondary/30 flex items-center justify-center">
                <div className="text-center text-hero-foreground">
                  <div className="text-6xl font-heading font-800 text-gradient mb-2">75%</div>
                  <p className="text-hero-foreground/70 text-lg">Cost Savings</p>
                  <p className="text-hero-foreground/50 text-sm mt-1">vs. local hiring</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-card rounded-2xl shadow-xl p-4 animate-fade-in" style={{ animationDelay: "0.8s" }}>
                <p className="text-sm font-medium text-foreground">Expert Finance Teams</p>
                <p className="text-xs text-muted-foreground">Ready in under 1 week</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mini testimonial */}
        <div className="mt-16 flex items-center gap-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <div className="flex -space-x-3">
            {["S", "A", "M"].map((letter, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-secondary/30 border-2 border-hero flex items-center justify-center text-hero-foreground text-sm font-semibold"
              >
                {letter}
              </div>
            ))}
          </div>
          <div>
            <p className="text-hero-foreground/80 text-sm italic">
              "CrewVoy helped us cut financial costs significantly."
            </p>
            <p className="text-secondary text-xs font-medium mt-0.5">Sarah Khan — CEO, FinScale</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
