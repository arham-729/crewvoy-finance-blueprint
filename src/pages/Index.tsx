import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustLogos from "@/components/TrustLogos";
import ValueProps from "@/components/ValueProps";
import RolesSection from "@/components/RolesSection";
import HowItWorks from "@/components/HowItWorks";
import ImpactBand from "@/components/ImpactBand";
import Testimonials from "@/components/Testimonials";
import BookingSection from "@/components/BookingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { ScrollProgress } from "@/components/motion";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <TrustLogos />
      <ValueProps />
      <RolesSection />
      <HowItWorks />
      <ImpactBand />
      <Testimonials />
      <BookingSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
