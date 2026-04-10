import {
  Calculator,
  FileText,
  TrendingUp,
  Receipt,
  ShoppingCart,
  BookOpen,
  Shield,
} from "lucide-react";

const roles = [
  { icon: Calculator, title: "Payroll Support VAs", desc: "Manage payroll processing, compliance, and employee records efficiently." },
  { icon: Receipt, title: "Accounts Payable / Receivable", desc: "Handle invoicing, payments, and collections to keep your cash flow healthy." },
  { icon: TrendingUp, title: "Financial Operations Executive", desc: "Oversee financial workflows, reporting, and strategic operations." },
  { icon: FileText, title: "Tax Preparation Executive", desc: "Ensure accurate tax filings, deductions, and regulatory compliance." },
  { icon: ShoppingCart, title: "E-commerce Finance Specialist", desc: "Manage finances for online businesses including reconciliation and analytics." },
  { icon: BookOpen, title: "Industry Bookkeeping", desc: "Maintain accurate financial records tailored to your industry needs." },
  { icon: Shield, title: "Audit Services", desc: "Conduct internal audits and ensure financial integrity across operations." },
];

const RolesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground mb-4">
            Financial Roles We Help You Hire
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            No matter your need, we find the exact financial professional to support your team.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, i) => (
            <div
              key={i}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <role.icon className="text-secondary" size={24} />
              </div>
              <h3 className="font-heading text-lg font-700 text-foreground mb-2">{role.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{role.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            Start Hiring Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default RolesSection;
