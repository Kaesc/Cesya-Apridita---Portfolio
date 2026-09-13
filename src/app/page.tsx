import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main className="bg-black text-white">
      <section id="hero" className="min-h-screen flex items-center">
        <HeroSection />
      </section>

      <section id="about" className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <AboutSection />
        </div>
      </section>

      <section id="projects" className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <ProjectsSection />
        </div>
      </section>

      <section id="skills" className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SkillsSection />
        </div>
      </section>

      <section id="contact" className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <ContactSection />
        </div>
      </section>
    </main>
  );
}
