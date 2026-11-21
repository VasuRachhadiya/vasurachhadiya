import React, { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { CustomCursor } from './components/CustomCursor';
import { ParticlesBackground } from './components/ParticlesBackground';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { ResumeModal } from './components/ResumeModal';
import { ProjectModal } from './components/ProjectModal';
import { EmailModal } from './components/EmailModal';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { EducationSection } from './sections/EducationSection';
import { CertificationsSection } from './sections/CertificationsSection';
import { ContactSection } from './sections/ContactSection';
import { Project } from './types';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Global keyboard shortcuts (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`relative min-h-screen transition-colors duration-300 overflow-x-hidden ${theme === 'dark'
        ? 'bg-slate-950 text-slate-100 selection:bg-sky-500/30 selection:text-sky-200'
        : 'bg-slate-50 text-slate-900 selection:bg-sky-500/30 selection:text-sky-800'
      }`}>
      {/* Sleek Custom Cursor on Desktop */}
      <CustomCursor />

      {/* Interactive Cybernetic Canvas Constellation */}
      <ParticlesBackground theme={theme} />

      {/* Main Navigation */}
      <Navbar
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenResume={() => setIsResumeModalOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Page Sections */}
      <main className="relative z-10 flex flex-col">
        <HeroSection
          onOpenResume={() => setIsResumeModalOpen(true)}
          onOpenEmail={() => setIsEmailModalOpen(true)}
        />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection onSelectProject={project => setSelectedProject(project)} />
        <EducationSection />
        <CertificationsSection />
        <ContactSection onOpenEmail={() => setIsEmailModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenEmail={() => setIsEmailModalOpen(true)} />

      {/* Interactive Modals */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenEmail={() => setIsEmailModalOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <EmailModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
      />
    </div>
  );
}
