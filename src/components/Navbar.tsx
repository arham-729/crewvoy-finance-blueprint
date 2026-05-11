import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-x px-6 md:px-10 flex items-center justify-between h-20">
        <a href="#" className="font-heading text-xl font-700 text-foreground tracking-tight">
          crewvoy<span className="text-secondary">.</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a key={l.label} href={l.href}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <a href="#booking"
          className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-foreground border border-border hover:border-secondary/60 hover:text-secondary px-5 py-2.5 rounded-full transition-all">
          Get in touch <ArrowUpRight size={14} />
        </a>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-6 space-y-4">
          {links.map((l) => (
            <a key={l.label} href={l.href}
              className="block text-foreground/80 text-sm font-medium"
              onClick={() => setMobileOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#booking"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary border border-secondary/40 px-5 py-2.5 rounded-full"
            onClick={() => setMobileOpen(false)}>
            Get in touch <ArrowUpRight size={14} />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
