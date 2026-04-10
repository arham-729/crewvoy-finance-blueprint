import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", href: "#" },
    { label: "Why Us?", href: "#why-us" },
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#" className={`font-heading text-2xl font-800 tracking-tight ${scrolled ? "text-primary" : "text-hero-foreground"}`}>
          Crew<span className="text-gradient">Voy</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-secondary ${
                scrolled ? "text-foreground" : "text-hero-foreground/80"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#booking"
            className="bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Book a Call
          </a>
        </div>

        <button
          className={`md:hidden ${scrolled ? "text-foreground" : "text-hero-foreground"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border px-4 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="block text-foreground text-sm font-medium py-2"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#booking"
            className="block bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold text-center"
            onClick={() => setMobileOpen(false)}
          >
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
