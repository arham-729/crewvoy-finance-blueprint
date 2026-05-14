import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
    <section className="section-light section-padding">
      <div className="container-x grid lg:grid-cols-12 gap-12">
        <motion.div
          className="lg:col-span-4"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">FAQ</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0D1117] leading-[1.1]">
            Questions,<br />
            <span className="italic font-light text-[#6B7280]">answered.</span>
          </h2>
        </motion.div>

        <motion.div
          className="lg:col-span-8"
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-white border border-[#E8EAF0] rounded-xl px-6 data-[state=open]:border-[#0064DA]/30 data-[state=open]:shadow-sm transition-all duration-200"
              >
                <AccordionTrigger className="text-[#0D1117] font-semibold text-left hover:no-underline text-sm py-5 hover:text-[#0064DA] transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#6B7280] text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
