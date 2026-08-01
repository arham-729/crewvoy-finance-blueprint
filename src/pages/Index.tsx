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
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";

const Index = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen">
        <Cursor />
        <ScrollProgress />
        <Navbar />
        <HeroSection />
        <Testimonials />
        <ValueProps />
        <RolesSection />
        <HowItWorks />
        <ImpactBand />
        <TrustLogos />
        <BookingSection />
        <FAQSection />
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default Index;
