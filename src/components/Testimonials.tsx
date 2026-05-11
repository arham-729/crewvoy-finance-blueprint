import { Reveal, Stagger, StaggerItem } from "./motion";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

// Fake company logo colors and names
const companies = [
  { name: "FinScale", initials: "FS", bgColor: "from-blue-600 to-blue-400" },
  { name: "PayBridge", initials: "PB", bgColor: "from-purple-600 to-pink-400" },
  { name: "LedgerFlow", initials: "LF", bgColor: "from-green-600 to-emerald-400" },
  { name: "GrowthPay", initials: "GP", bgColor: "from-orange-600 to-yellow-400" },
  { name: "CloudBooks", initials: "CB", bgColor: "from-indigo-600 to-blue-400" },
  { name: "Northwind", initials: "NW", bgColor: "from-red-600 to-pink-400" },
];

const testimonials = [
  { quote: "Crewvoy didn't just give us an operator — they re-architected our entire lead-to-cash motion. Our ops cost dropped 71% in the first quarter.", name: "Sarah Khan", role: "CEO, FinScale", rating: 5, companyIdx: 0 },
  { quote: "The AI + human combo is unreal. Tier-1 support resolved in seconds, escalations handled by someone who actually knows our product.", name: "Ali Raza", role: "Founder, PayBridge", rating: 5, companyIdx: 1 },
  { quote: "We replaced three roles with one Crewvoy operator and a stack of automations. Output went up, not down.", name: "Ahmed Hassan", role: "COO, LedgerFlow", rating: 5, companyIdx: 2 },
  { quote: "Their reporting layer alone is worth the engagement. We finally see what's actually happening in the business.", name: "Maria Chen", role: "CFO, GrowthPay", rating: 5, companyIdx: 3 },
  { quote: "Best decision we made this year. Felt like hiring an in-house ops team and an automation agency in one.", name: "Omar Farooq", role: "Director, CloudBooks", rating: 5, companyIdx: 4 },
  { quote: "Webflow rebuild shipped in 9 days. Looks like an agency built it. Cost a fraction.", name: "Jenna Park", role: "Head of Brand, Northwind", rating: 5, companyIdx: 5 },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-background border-t border-border/30 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container-x relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.25em] text-secondary mb-6 font-semibold">Clients</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-600 text-foreground leading-[1.1]">
                Operators we've shipped.<br />
                <span className="text-gradient-warm italic">Outcomes we've earned.</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => {
            const company = companies[t.companyIdx];
            const gradients = [
              "from-blue-600/30 to-purple-600/20",
              "from-purple-600/30 to-pink-600/20",
              "from-cyan-600/30 to-blue-600/20",
              "from-orange-600/30 to-red-600/20",
              "from-pink-600/30 to-purple-600/20",
              "from-indigo-600/30 to-cyan-600/20",
            ];
            return (
              <StaggerItem key={i}>
                <motion.div 
                  className={`glass-effect card-hover bg-gradient-to-br ${gradients[i % gradients.length]} border border-secondary/20 hover:border-secondary/50 p-8 md:p-10 rounded-lg h-full relative overflow-hidden group`}
                  whileHover={{ boxShadow: "0 25px 60px rgba(52, 211, 153, 0.2)" }}
                >
                  {/* Multi-layer overlays */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Company Logo */}
                  <motion.div 
                    className={`w-14 h-14 rounded-lg bg-gradient-to-br ${company.bgColor} flex items-center justify-center mb-6 relative z-10 shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-white font-bold text-lg">{company.initials}</span>
                  </motion.div>
                  
                  {/* Star rating */}
                  <div className="flex gap-1 mb-6 relative z-10">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: j * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Star size={14} className="fill-secondary text-secondary" />
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="text-secondary/30 text-5xl font-heading leading-none mb-6 relative z-10 group-hover:text-secondary/60 transition-colors duration-300">"</div>
                  <p className="text-foreground/85 text-base leading-relaxed mb-8 relative z-10 group-hover:text-foreground transition-colors duration-300">{t.quote}</p>
                  
                  <div className="flex items-center gap-3 pt-6 border-t border-border/50 relative z-10">
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary/40 to-blue-500/30 flex items-center justify-center text-secondary text-sm font-bold group-hover:from-secondary/60 group-hover:to-blue-500/50 transition-all duration-300 shadow-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      {t.name.split(" ").map(n => n[0]).join("")}
                    </motion.div>
                    <div>
                      <p className="font-semibold text-foreground text-sm group-hover:text-gradient transition-all duration-300">{t.name}</p>
                      <p className="text-foreground/50 text-xs group-hover:text-foreground/70 transition-colors duration-300">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
};

export default Testimonials;
