import { Phone, Search, UserCheck } from "lucide-react";

const steps = [
  {
    num: "1",
    icon: Phone,
    title: "Book a Call",
    desc: "Schedule a consultation and tell us about your company and financial needs.",
  },
  {
    num: "2",
    icon: Search,
    title: "We Understand Your Financial Needs",
    desc: "Our recruiters rigorously vet and screen candidates to find the perfect match for your business.",
  },
  {
    num: "3",
    icon: UserCheck,
    title: "We Match You With Expert Professionals",
    desc: "Meet your new team member and receive ongoing support to ensure everything runs smoothly.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding hero-gradient">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-800 text-hero-foreground mb-4">
            How It Works?
          </h2>
          <p className="text-hero-foreground/70 text-lg max-w-xl mx-auto">
            No more stacks of resumes or endless interviews. CrewVoy owns the recruitment cycle so you don't have to.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative text-center">
              <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-heading font-800 text-secondary">{step.num}</span>
              </div>
              <step.icon className="text-hero-foreground/50 mx-auto mb-4" size={32} />
              <h3 className="font-heading text-xl font-700 text-hero-foreground mb-3">{step.title}</h3>
              <p className="text-hero-foreground/60 text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>

              {i < 2 && (
                <div className="hidden md:block absolute top-8 -right-4 w-8 text-secondary/40">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            Start Hiring Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
