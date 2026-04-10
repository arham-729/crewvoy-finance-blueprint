import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustLogos from "@/components/TrustLogos";
import ValueProps from "@/components/ValueProps";
import RolesSection from "@/components/RolesSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import BookingSection from "@/components/BookingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustLogos />
      <ValueProps />
      <RolesSection />
      <HowItWorks />
      <Testimonials />
      <BookingSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
