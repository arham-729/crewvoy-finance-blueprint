import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionLink = (hash: string) => ({ pathname: "/", hash: `#${hash}` });

  const links = [
    { label: "Services", href: "/services" },
    { label: "Approach", href: sectionLink("approach") },
    { label: "How it works", href: sectionLink("how-it-works") },
    { label: "Clients", href: sectionLink("testimonials") },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#E8EAF0] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-x px-6 md:px-10 flex items-center justify-between py-4">
        <Link to="/" className={`font-heading text-lg font-bold transition-colors duration-300 ${scrolled ? "text-[#0D1117]" : "text-white"}`}>
          crewvoy
        </Link>

        <div className="hidden md:flex items-center gap-9">
          {links.map((l, idx) => (
            <Link
              key={l.label}
              to={l.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                scrolled ? "text-[#444] hover:text-[#D4007A]" : "text-white/80 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          to={sectionLink("booking")}
          className={`hidden md:inline-flex items-center gap-1.5 text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 ${
            scrolled
              ? "bg-[#D4007A] text-white hover:bg-[#A8005F]"
              : "bg-white/10 text-white border border-white/25 hover:bg-white/20"
          }`}
        >
          Get in touch <ArrowUpRight size={13} />
        </Link>

        <button
          className={`md:hidden transition-colors ${scrolled ? "text-[#333]" : "text-white"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-[#E8EAF0] px-6 py-6 space-y-5"
        >
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className="block text-[#444] text-sm font-medium hover:text-[#D4007A] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to={sectionLink("booking")}
            className="inline-flex items-center gap-1.5 text-sm font-semibold bg-[#D4007A] text-white px-5 py-2.5 rounded-lg"
            onClick={() => setMobileOpen(false)}
          >
            Get in touch <ArrowUpRight size={13} />
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
