import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import RolesSection from "@/components/RolesSection";

const Services = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Services | Crewvoy";

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <main>
      <Navbar />
      <RolesSection />
    </main>
  );
};

export default Services;