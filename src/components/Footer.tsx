import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="hero-gradient py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="font-heading text-2xl font-800 text-hero-foreground mb-3">
              Crew<span className="text-gradient">Voy</span>
            </h3>
            <p className="text-hero-foreground/60 text-sm leading-relaxed max-w-xs">
              Remote financial hiring at a quarter of the cost. Expert professionals, seamless integration.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-700 text-hero-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Why Us?", "Services", "How It Works", "Testimonials", "Book a Call"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, "-").replace("?", "")}`}
                  className="block text-hero-foreground/60 text-sm hover:text-secondary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-700 text-hero-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/company/crewvoy/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-hero-foreground/60 text-sm hover:text-secondary transition-colors"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href="mailto:arhamharoonansari70@gmail.com"
                className="flex items-center gap-2 text-hero-foreground/60 text-sm hover:text-secondary transition-colors"
              >
                <Mail size={16} /> arhamharoonansari70@gmail.com
              </a>
              <a
                href="mailto:Hamzaareeb048@gmail.com"
                className="flex items-center gap-2 text-hero-foreground/60 text-sm hover:text-secondary transition-colors"
              >
                <Mail size={16} /> Hamzaareeb048@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-hero-foreground/10 pt-6 text-center">
          <p className="text-hero-foreground/40 text-sm">
            © {new Date().getFullYear()} CrewVoy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
