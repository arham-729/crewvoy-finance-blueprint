import { motion } from "framer-motion";
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
    <section className="section-padding bg-background border-t border-border/30 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container-x grid lg:grid-cols-12 gap-12">
        <motion.div 
          className="lg:col-span-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs uppercase tracking-[0.25em] text-secondary mb-6 font-semibold">FAQ</div>
          <h2 className="font-heading text-4xl md:text-5xl font-600 text-foreground leading-[1.1]">
            Questions,<br /><span className="text-gradient-warm italic">answered.</span>
          </h2>
        </motion.div>
        
        <motion.div 
          className="lg:col-span-8"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <AccordionItem
                  value={`item-${i}`}
                  className="glass-effect bg-card/50 border border-secondary/10 hover:border-secondary/30 rounded-lg px-6 data-[state=open]:border-secondary/40 data-[state=open]:bg-card/70 transition-all duration-300 group"
                >
                  <AccordionTrigger className="text-foreground font-heading font-600 text-left hover:no-underline text-base py-5 group-hover:text-gradient transition-all duration-300">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/60 leading-relaxed pb-5 group-open:text-foreground/70 transition-colors duration-300">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
