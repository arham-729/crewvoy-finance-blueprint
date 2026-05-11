import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border pt-20 pb-10 px-6 md:px-10">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 mb-20 pb-20 border-b border-border">
          <div className="lg:col-span-6">
            <h3 className="font-heading text-4xl md:text-6xl font-500 text-foreground leading-[1.05] mb-8">
              Ready to optimise<br />your stack?
            </h3>
            <a href="#booking"
              className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-4 rounded-full text-sm font-semibold hover:bg-secondary hover:text-secondary-foreground transition-all">
              Book a strategy call <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="lg:col-span-3 lg:col-start-8">
            <h4 className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-5">Navigate</h4>
            <div className="space-y-3">
              {[
                { label: "Approach", href: "#approach" },
                { label: "Services", href: "#services" },
                { label: "How it works", href: "#how-it-works" },
                { label: "Clients", href: "#testimonials" },
                { label: "Book a call", href: "#booking" },
              ].map((l) => (
                <a key={l.label} href={l.href}
                  className="block text-foreground/70 text-sm hover:text-secondary transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-5">Contact</h4>
            <div className="space-y-3">
              <a href="https://www.linkedin.com/company/crewvoy/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/70 text-sm hover:text-secondary transition-colors">
                <Linkedin size={14} /> LinkedIn
              </a>
              <a href="mailto:arhamharoonansari70@gmail.com"
                className="flex items-center gap-2 text-foreground/70 text-sm hover:text-secondary transition-colors break-all">
                <Mail size={14} /> arhamharoonansari70@gmail.com
              </a>
              <a href="mailto:Hamzaareeb048@gmail.com"
                className="flex items-center gap-2 text-foreground/70 text-sm hover:text-secondary transition-colors break-all">
                <Mail size={14} /> Hamzaareeb048@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="font-heading text-2xl font-700 text-foreground">
            crewvoy<span className="text-secondary">.</span>
          </p>
          <p className="text-foreground/40 text-xs">
            © {new Date().getFullYear()} Crewvoy. Engineering tomorrow's workforce.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
