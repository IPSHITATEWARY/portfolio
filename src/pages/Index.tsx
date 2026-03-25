import NavBar from "@/components/portfolio/NavBar";
import HeroSection from "@/components/portfolio/HeroSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import CertificationsSection from "@/components/portfolio/CertificationsSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-ink">
      <NavBar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
    </main>
  );
};

export default Index;
