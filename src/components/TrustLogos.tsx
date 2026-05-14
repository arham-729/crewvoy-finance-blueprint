const logos = [
  "OpenAI", "Anthropic", "Make.com", "Webflow", "Framer",
  "Zapier", "HubSpot", "Notion", "Slack", "Linear",
];

const TrustLogos = () => {
  return (
    <section className="section-light py-14 border-y border-[#E8EAF0]">
      <div className="container-x px-6 md:px-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#9AA0B4] mb-9">
          Stack we build on
        </p>
        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F8F4F7] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F8F4F7] to-transparent z-10 pointer-events-none" />
          <div className="flex logo-scroll">
            {[...logos, ...logos, ...logos].map((name, i) => (
              <div key={i} className="flex-shrink-0 mx-10 flex items-center justify-center">
                <span className="text-[#9AA0B4] font-semibold text-base whitespace-nowrap hover:text-[#D4007A] transition-colors duration-300 cursor-default">
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
