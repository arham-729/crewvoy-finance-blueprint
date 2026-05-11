import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Approach", href: "#approach" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Clients", href: "#testimonials" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "glass-effect-dark border-b border-secondary/10" 
          : "bg-transparent"
      }`}
    >
      <div className="container-x px-6 md:px-10 flex items-center justify-between h-20">
        <motion.a 
          href="#" 
          className="font-heading text-xl font-700 text-foreground tracking-tight"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          crewvoy<span className="text-gradient">.</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l, idx) => (
            <motion.a 
              key={l.label} 
              href={l.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="text-sm font-medium text-foreground/70 hover:text-secondary relative group transition-colors duration-300"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </div>

        <motion.a 
          href="#booking"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:inline-flex items-center gap-1.5 text-sm font-bold text-foreground bg-gradient-to-r from-secondary/10 to-blue-500/10 border border-secondary/30 hover:border-secondary/60 hover:shadow-lg hover:shadow-secondary/20 px-6 py-3 rounded-full transition-all duration-300"
        >
          Get in touch <ArrowUpRight size={14} />
        </motion.a>

        <motion.button 
          className="md:hidden text-foreground" 
          onClick={() => setMobileOpen(!mobileOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {mobileOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-effect-dark border-t border-secondary/10 px-6 py-6 space-y-4"
        >
          {links.map((l) => (
            <motion.a 
              key={l.label} 
              href={l.href}
              className="block text-foreground/80 text-sm font-medium hover:text-secondary transition-colors"
              onClick={() => setMobileOpen(false)}
              whileHover={{ x: 4 }}
            >
              {l.label}
            </motion.a>
          ))}
          <motion.a 
            href="#booking"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-secondary border border-secondary/40 px-6 py-3 rounded-full hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300"
            onClick={() => setMobileOpen(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in touch <ArrowUpRight size={14} />
          </motion.a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
