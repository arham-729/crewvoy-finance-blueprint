import { Quote } from "lucide-react";

const testimonials = [
  { quote: "CrewVoy helped us cut financial costs significantly. Their team integrated seamlessly with ours.", name: "Sarah Khan", role: "CEO, FinScale", initials: "SK" },
  { quote: "Extremely reliable and professional service. Our bookkeeping has never been more accurate.", name: "Ali Raza", role: "Founder, PayBridge", initials: "AR" },
  { quote: "Game changer for our business operations. We scaled our finance team in just a week.", name: "Ahmed Hassan", role: "COO, LedgerFlow", initials: "AH" },
  { quote: "The quality of talent is outstanding. Our financial reporting improved dramatically.", name: "Maria Chen", role: "CFO, GrowthPay", initials: "MC" },
  { quote: "CrewVoy's professionals are dedicated, skilled, and always go above and beyond expectations.", name: "Omar Farooq", role: "Director, CloudBooks", initials: "OF" },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Real results from real businesses.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300"
            >
              <Quote className="text-secondary/40 mb-4" size={24} />
              <p className="text-foreground text-sm leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-semibold">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
