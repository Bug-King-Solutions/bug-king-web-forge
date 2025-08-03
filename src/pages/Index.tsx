import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import TechStack from "@/components/TechStack";
import Team from "@/components/Team";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import TestimonialsShowcase from "@/components/TestimonialsShowcase";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <Team />
      <Services />
      <ProjectsShowcase />
      <TestimonialsShowcase />
      <TechStack />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
