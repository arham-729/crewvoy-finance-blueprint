import { Star, Zap, Users } from "lucide-react";

const cards = [
  {
    icon: Star,
    title: "Expert Financial Talent",
    desc: "Access top-tier financial professionals with proven experience in accounting, bookkeeping, tax prep, and more.",
  },
  {
    icon: Users,
    title: "Perfect Business Fit",
    desc: "We match you with professionals tailored to your industry, tools, and work style for seamless integration.",
  },
  {
    icon: Zap,
    title: "Fast Onboarding",
    desc: "Your new team member arrives ready to contribute from day one — fully vetted, trained, and motivated.",
  },
];

const ValueProps = () => {
  return (
    <section id="why-us" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground mb-4">
            Why Choose CrewVoy?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            The key to success: Our "Source, Match & Manage" model.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-background rounded-2xl p-8 border border-border hover:border-secondary/40 hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-colors">
                <card.icon className="text-secondary" size={28} />
              </div>
              <h3 className="font-heading text-xl font-700 text-foreground mb-3">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
