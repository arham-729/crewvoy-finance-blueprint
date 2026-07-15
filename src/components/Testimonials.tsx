import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./motion";
import damanLogo from "@/assets/company_logos/daman.jpeg";
import microsoftLogo from "@/assets/company_logos/microsoft.png";
import mycoLogo from "@/assets/company_logos/myco.jpeg";
import rapidevLogo from "@/assets/company_logos/rapidev.jpg";
import serefinLogo from "@/assets/company_logos/serefin.jpeg";
import xtremeLogo from "@/assets/company_logos/Xtremetv.jpg";

const companies = [
  { id: 1, name: "Daman", logo: damanLogo },
  { id: 2, name: "Microsoft", logo: microsoftLogo },
  { id: 3, name: "MyCoIO", logo: mycoLogo },
  { id: 4, name: "RapidEV", logo: rapidevLogo },
  { id: 5, name: "Serefin", logo: serefinLogo },
  { id: 6, name: "XtremeTV", logo: xtremeLogo },
];

const CompanyLogo = ({
  company,
  index,
  scrollYProgress,
}: {
  company: typeof companies[0];
  index: number;
  scrollYProgress: import("framer-motion").MotionValue<number>;
}) => {
  const driftDirection = index % 2 === 0 ? 1 : -1;
  const scrollY = useTransform(scrollYProgress, [0, 1], [driftDirection * 8, driftDirection * -10]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        y: scrollY,
      }}
      className="group flex items-center justify-center cursor-pointer"
    >
      <div className="w-full h-[130px] md:h-[150px] rounded-2xl bg-white/5 border border-white/10 shadow-[0_6px_24px_rgba(0,0,0,0.24)] flex items-center justify-center px-6 transition-transform duration-300 group-hover:-translate-y-1 group-hover:border-white/20 group-hover:shadow-[0_16px_32px_rgba(0,0,0,0.32)]">
        <motion.img
          src={company.logo}
          alt={company.name}
          className="max-h-14 max-w-[70%] object-contain opacity-95"
          style={{
            transformStyle: "preserve-3d",
          }}
        />
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const ref = useRef<HTMLSection>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0.5, 1]);
  const headerScale = useTransform(scrollYProgress, [0, 0.2], [0.9, 1]);

  return (
    <section ref={ref} id="testimonials" className="section-darker relative overflow-hidden py-20 md:py-24 px-6 md:px-10 min-h-[80vh]">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-white/[0.03] blur-3xl" />
        <div className="absolute right-10 bottom-16 h-80 w-80 rounded-full bg-white/[0.02] blur-3xl" />
      </div>

      <div className="container-x relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <motion.div
            className="lg:col-span-4 lg:pt-8"
            style={{ opacity: headerOpacity, scale: headerScale }}
          >
            <Reveal><span className="section-label-dark">Trusted By</span></Reveal>
            <h2 className="font-heading text-[clamp(2.7rem,5vw,5rem)] leading-[0.92] tracking-[-0.09em] text-balance">
              <span className="font-black text-white">Companies </span>
              <span className="font-normal text-[#9AA0B4]">who trust us</span>
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-xl">
              Companies that trusted our work and chose us to deliver clean execution, faster turnarounds, and dependable systems.
            </p>

            <div className="mt-10 grid gap-3 max-w-md">
              {[
                "Reliable environments for daily operations",
                "Systems that support speed without noise",
                "Consistent execution across the stack",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/70">
                  <span className="h-2 w-2 rounded-full bg-[#D4007A] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-8 lg:pt-16">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-5 gap-y-8 md:gap-y-10 items-start">
              {companies.map((company, i) => (
                <CompanyLogo key={company.id} company={company} index={i} scrollYProgress={scrollYProgress} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
