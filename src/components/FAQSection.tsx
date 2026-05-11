import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What exactly is a Crewvoy AI-Augmented Operator?",
    a: "A senior remote operator paired with custom chatbots, proprietary web systems and automation workflows we build for your business. They run the playbook, AI handles the velocity, you keep the judgement.",
  },
  {
    q: "How is this different from hiring a normal VA?",
    a: "A normal VA does tasks one by one. Our operators ship outcomes powered by automation that runs 24/7. You get agency-level output without agency-level overhead.",
  },
  {
    q: "How fast can you deploy?",
    a: "Initial audit and architecture in days. Most operators are deployed and live inside your stack in under a week.",
  },
  {
    q: "Will I own the systems you build?",
    a: "Yes. All chatbots, scenarios, dashboards and web systems are yours. We architect them inside accounts you control.",
  },
  {
    q: "How does pricing work?",
    a: "Flat monthly engagement bundling the operator, the systems, and ongoing optimisation. Typically 60–80% lower than the equivalent in-house build.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-background border-t border-border">
      <div className="container-x grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="text-xs uppercase tracking-[0.25em] text-secondary mb-6">FAQ</div>
          <h2 className="font-heading text-4xl md:text-5xl font-500 text-foreground leading-[1.1]">
            Questions,<br /><span className="italic font-400">answered.</span>
          </h2>
        </div>
        <div className="lg:col-span-8">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card rounded-lg border border-border px-6 data-[state=open]:border-secondary/40 transition-colors"
              >
                <AccordionTrigger className="text-foreground font-heading font-500 text-left hover:no-underline text-base py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/60 leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
