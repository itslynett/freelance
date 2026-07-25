import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ProductionProducts } from "@/components/sections/ProductionProducts";
import { PersonalProjects } from "@/components/sections/PersonalProjects";
import { AcademicProjects } from "@/components/sections/AcademicProjects";
import { TechStack } from "@/components/sections/TechStack";
import { Experience } from "@/components/sections/Experience";
import { Certifications } from "@/components/sections/Certifications";
import { GitHubSection } from "@/components/sections/GitHubSection";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D1117] text-[#F8FAFC] selection:bg-blue-600/30 selection:text-[#F8FAFC]">
      <Navbar />

      <div className="flex flex-col">
        <Hero />
        <About />
        <ProductionProducts />
        <PersonalProjects />
        <AcademicProjects />
        <TechStack />
        <Experience />
        <Certifications />
        <GitHubSection />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
