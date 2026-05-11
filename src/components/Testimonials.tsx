import { Reveal, Stagger, StaggerItem } from "./motion";

const testimonials = [
  { quote: "Crewvoy didn't just give us an operator — they re-architected our entire lead-to-cash motion. Our ops cost dropped 71% in the first quarter.", name: "Sarah Khan", role: "CEO, FinScale" },
  { quote: "The AI + human combo is unreal. Tier-1 support resolved in seconds, escalations handled by someone who actually knows our product.", name: "Ali Raza", role: "Founder, PayBridge" },
  { quote: "We replaced three roles with one Crewvoy operator and a stack of automations. Output went up, not down.", name: "Ahmed Hassan", role: "COO, LedgerFlow" },
  { quote: "Their reporting layer alone is worth the engagement. We finally see what's actually happening in the business.", name: "Maria Chen", role: "CFO, GrowthPay" },
  { quote: "Best decision we made this year. Felt like hiring an in-house ops team and an automation agency in one.", name: "Omar Farooq", role: "Director, CloudBooks" },
  { quote: "Webflow rebuild shipped in 9 days. Looks like an agency built it. Cost a fraction.", name: "Jenna Park", role: "Head of Brand, Northwind" },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-card border-t border-border">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.25em] text-secondary mb-6">Clients</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-500 text-foreground leading-[1.1]">
                Operators we've shipped.<br />
                <span className="italic font-400">Outcomes we've earned.</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <div className="bg-background p-8 md:p-10 hover:bg-card transition-colors h-full">
                <div className="text-secondary text-4xl font-heading leading-none mb-6">"</div>
                <p className="text-foreground/80 text-base leading-relaxed mb-8">{t.quote}</p>
                <div className="flex items-center gap-3 pt-6 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary text-sm font-semibold">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{t.name}</p>
                    <p className="text-foreground/50 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default Testimonials;
