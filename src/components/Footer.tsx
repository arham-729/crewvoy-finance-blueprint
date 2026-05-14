import { Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="section-darker pt-20 pb-10 px-6 md:px-10">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 mb-20 pb-16" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="lg:col-span-5">
            <motion.h3
              className="font-heading text-3xl md:text-4xl font-bold text-white leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to optimise<br />
              <span className="italic font-light text-white/40">your stack?</span>
            </motion.h3>
            <a href="#booking" className="btn-coral">
              Book a strategy call <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="lg:col-span-3 lg:col-start-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30 mb-6">Navigate</p>
            <div className="space-y-3">
              {[
                { label: "Approach", href: "#approach" },
                { label: "Services", href: "#services" },
                { label: "How it works", href: "#how-it-works" },
                { label: "Clients", href: "#testimonials" },
                { label: "Book a call", href: "#booking" },
              ].map((l) => (
                <a key={l.label} href={l.href} className="block text-white/45 text-sm hover:text-white transition-colors duration-200">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="flex flex-col items-center gap-5 text-center">
          <p className="font-heading text-xl font-bold text-white">
            crewvoy<span style={{ color: "#FC94AF" }}>.</span>
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/crewvoy/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center text-white/40 hover:text-white transition-colors duration-200"
              style={{ border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <Linkedin size={15} />
            </a>
            <a
              href="mailto:crewvoy@proton.me"
              className="w-9 h-9 rounded-full flex items-center justify-center text-white/40 hover:text-white transition-colors duration-200"
              style={{ border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <Mail size={15} />
            </a>
          </div>
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Crewvoy. Engineering tomorrow's workforce.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
