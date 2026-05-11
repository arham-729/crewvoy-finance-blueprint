const logos = [
  "OpenAI", "Anthropic", "Make.com", "Webflow", "Framer",
  "Zapier", "HubSpot", "Notion", "Slack", "Linear",
];

const TrustLogos = () => {
  return (
    <section className="py-16 border-y border-border bg-card">
      <div className="container-x px-6 md:px-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-foreground/40 mb-10">
          Stack we build on
        </p>
        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-card to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-card to-transparent z-10" />
          <div className="flex logo-scroll">
            {[...logos, ...logos, ...logos].map((name, i) => (
              <div key={i} className="flex-shrink-0 mx-10 flex items-center justify-center">
                <span className="text-foreground/50 font-heading font-500 text-xl whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustLogos;
