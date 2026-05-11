import { Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <footer className="bg-card/30 glass-effect border-t border-secondary/10 pt-20 pb-10 px-6 md:px-10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container-x relative z-10">
        <motion.div 
          className="grid lg:grid-cols-12 gap-12 mb-20 pb-20 border-b border-border/50"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="lg:col-span-6" variants={itemVariants}>
            <h3 className="font-heading text-4xl md:text-5xl font-600 text-foreground leading-[1.05] mb-8">
              Ready to optimise<br />
              <span className="text-gradient">your stack?</span>
            </h3>
            <motion.a href="#booking"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-blue-500 text-background px-8 py-4 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-secondary/30 transition-all duration-300"
            >
              Book a strategy call <motion.div animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 2 }}><ArrowUpRight size={16} /></motion.div>
            </motion.a>
          </motion.div>
          
          <motion.div className="lg:col-span-3 lg:col-start-8" variants={itemVariants}>
            <h4 className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-6 font-bold">Navigate</h4>
            <div className="space-y-4">
              {[
                { label: "Approach", href: "#approach" },
                { label: "Services", href: "#services" },
                { label: "How it works", href: "#how-it-works" },
                { label: "Clients", href: "#testimonials" },
                { label: "Book a call", href: "#booking" },
              ].map((l) => (
                <motion.a 
                  key={l.label} 
                  href={l.href}
                  className="block text-foreground/60 text-sm hover:text-secondary transition-colors duration-300 group"
                  whileHover={{ x: 4 }}
                >
                  <span className="group-hover:text-secondary">{l.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div className="lg:col-span-3" variants={itemVariants}>
            <h4 className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-6 font-bold">Contact</h4>
            <div className="space-y-4">
              <motion.a 
                href="https://www.linkedin.com/company/crewvoy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/60 text-sm hover:text-secondary transition-colors duration-300 group"
                whileHover={{ x: 4 }}
              >
                <Linkedin size={14} className="group-hover:scale-110 transition-transform" /> LinkedIn
              </motion.a>
              <motion.a 
                href="mailto:arhamharoonansari70@gmail.com"
                className="flex items-center gap-2 text-foreground/60 text-sm hover:text-secondary transition-colors duration-300 group break-all"
                whileHover={{ x: 4 }}
              >
                <Mail size={14} className="group-hover:scale-110 transition-transform" /> arhamharoonansari70@gmail.com
              </motion.a>
              <motion.a 
                href="mailto:Hamzaareeb048@gmail.com"
                className="flex items-center gap-2 text-foreground/60 text-sm hover:text-secondary transition-colors duration-300 group break-all"
                whileHover={{ x: 4 }}
              >
                <Mail size={14} className="group-hover:scale-110 transition-transform" /> Hamzaareeb048@gmail.com
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex flex-wrap items-center justify-between gap-4"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="font-heading text-2xl font-700 text-foreground">
            crewvoy<span className="text-gradient">.</span>
          </p>
          <p className="text-foreground/40 text-xs">
            © {new Date().getFullYear()} Crewvoy. Engineering tomorrow's workforce.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
