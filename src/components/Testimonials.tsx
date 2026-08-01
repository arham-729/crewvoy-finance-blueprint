import damanLogo from "@/assets/company_logos/daman_new_transparent.png";
import microsoftLogo from "@/assets/company_logos/microsoft_transparent.png";
import mycoLogo from "@/assets/company_logos/myco_transparent.png";
import rapidevLogo from "@/assets/company_logos/rapidev_transparent.png";
import serefinLogo from "@/assets/company_logos/serefin_new_transparent.png";
import xtremeLogo from "@/assets/company_logos/xtremetv_transparent.png";

const companies = [
  { id: 1, name: "Daman", logo: damanLogo },
  { id: 2, name: "Microsoft", logo: microsoftLogo },
  { id: 3, name: "MyCoIO", logo: mycoLogo },
  { id: 4, name: "RapidEV", logo: rapidevLogo },
  { id: 5, name: "Serefin", logo: serefinLogo },
  { id: 6, name: "XtremeTV", logo: xtremeLogo },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-light py-14 border-y border-[#E8EAF0]">
      <div className="container-x px-6 md:px-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#9AA0B4] mb-9">
          Companies who trust us
        </p>
        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F8F4F7] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F8F4F7] to-transparent z-10 pointer-events-none" />
          <div className="flex logo-scroll">
            {[...companies, ...companies, ...companies].map((company, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-10 flex items-center justify-center h-20 w-[160px] transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
