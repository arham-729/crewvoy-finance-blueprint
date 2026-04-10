import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What services do you offer?",
    a: "We provide dedicated remote financial professionals including payroll support, accounts payable/receivable, tax preparation, bookkeeping, audit services, and e-commerce finance specialists.",
  },
  {
    q: "How fast can we start?",
    a: "We can find and place your financial professional within 1 week. Our sourcing, interviewing, and vetting processes are handled entirely by us.",
  },
  {
    q: "Are professionals dedicated to my business?",
    a: "Yes. All our professionals work full-time (40 hours/week) exclusively for you, in your time zone, using your tools — just like a regular employee.",
  },
  {
    q: "How does pricing work?",
    a: "Our pricing is simple and transparent with no hidden charges. CrewVoy professionals cost up to 75% less compared to local equivalents while maintaining the highest quality standards.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground text-center mb-12">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-background rounded-xl border border-border px-6"
            >
              <AccordionTrigger className="text-foreground font-heading font-600 text-left hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
