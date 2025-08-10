import ParticleBackground from '..//components/particle-background';
import Navigation from '../components/navigation';
import HeroSection from '../components/hero-section';
import AboutSection from '../components/about-section';
import SkillsSection from '../components/skills-section';
import ProjectsSection from '../components/projects-section';
import EducationSection from '../components/education-section';
import ContactSection from '../components/contact-section';
import { personalInfo } from '../data/portfolio-data';
import ExperienceSection from '../components/experience-section';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-x-hidden">
      <ParticleBackground />
      <Navigation />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold gradient-text mb-4">{personalInfo.name}</h3>
            <p className="text-gray-400">{personalInfo.title}</p>
          </div>

          {/* Responsive Navigation - Horizontal on desktop, Grid on mobile */}
          <div className="mb-8">
            <div className="hidden md:flex justify-center space-x-6">
              <a href="#home" className="text-gray-400 hover:text-[#00ff88] transition-colors">Home</a>
              <a href="#about" className="text-gray-400 hover:text-[#00d4ff] transition-colors">About</a>
              <a href="#skills" className="text-gray-400 hover:text-[#ff0080] transition-colors">Skills</a>
              <a href="#projects" className="text-gray-400 hover:text-[#00ff88] transition-colors">Projects</a>
              <a href="#education" className="text-gray-400 hover:text-[#00d4ff] transition-colors">Education</a>
              <a href="#experience" className="text-gray-400 hover:text-[#ff0080] transition-colors">Experience</a>
              <a href="#contact" className="text-gray-400 hover:text-[#00ff88] transition-colors">Contact</a>
            </div>

            {/* Mobile Navigation - 2 column grid */}
            <div className="md:hidden grid grid-cols-3 gap-4 max-w-xs mx-auto">
              <a href="#home" className="text-gray-400 hover:text-[#00ff88] transition-colors py-2">Home</a>
              <a href="#about" className="text-gray-400 hover:text-[#00d4ff] transition-colors py-2">About</a>
              <a href="#skills" className="text-gray-400 hover:text-[#ff0080] transition-colors py-2">Skills</a>
              <a href="#projects" className="text-gray-400 hover:text-[#00ff88] transition-colors py-2">Projects</a>
              <a href="#education" className="text-gray-400 hover:text-[#00d4ff] transition-colors py-2">Education</a>
              <a href="#experience" className="text-gray-400 hover:text-[#ff0080] transition-colors py-2">Experience</a>
              <a href="#contact" className="text-gray-400 hover:text-[#00ff88] transition-colors py-2">Contact</a>
            </div>
          </div>

          <div className="text-gray-500 text-sm">
            © 2025 {personalInfo.name}. All rights reserved. Built with React.js & Tailwind CSS.
          </div>
        </div>
      </footer>
    </div>
  );
}
