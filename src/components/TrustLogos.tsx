const logos = [
  "FinTech Co", "ScaleUp Inc", "GrowthPay", "LedgerBase",
  "CloudBooks", "PaySync", "TaxFlow", "AuditPro", "BizFinance"
];

const TrustLogos = () => {
  return (
    <section className="section-padding bg-card">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-muted-foreground text-sm font-semibold uppercase tracking-widest mb-10">
          Trusted by growing businesses
        </p>
        <div className="overflow-hidden relative">
          <div className="flex logo-scroll">
            {[...logos, ...logos, ...logos].map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center"
              >
                <div className="bg-muted rounded-xl px-8 py-4 text-muted-foreground font-heading font-700 text-lg whitespace-nowrap">
                  {name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustLogos;
