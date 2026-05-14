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
    <section id="testimonials" className="section-light section-padding">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="section-label">Clients</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0D1117] leading-[1.1]">
                Operators we've shipped.<br />
                <span className="italic font-light text-[#6B7280]">Outcomes we've earned.</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <div className="card-surface-light card-hover p-8 md:p-10 h-full rounded-xl flex flex-col">
                <div className="text-[#D4007A] text-4xl font-heading leading-none mb-5 select-none opacity-30">"</div>
                <p className="text-[#444B5A] text-sm leading-relaxed flex-1 mb-8">{t.quote}</p>
                <div className="flex items-center gap-3 pt-6 border-t border-[#E8EAF0]">
                  <div className="w-9 h-9 rounded-full bg-[#FDF0F8] flex items-center justify-center text-[#D4007A] text-xs font-bold flex-shrink-0">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0D1117]">{t.name}</p>
                    <p className="text-xs text-[#9AA0B4]">{t.role}</p>
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
