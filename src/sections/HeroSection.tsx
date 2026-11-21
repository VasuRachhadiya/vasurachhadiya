import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Mail,
  Terminal,
  Code2,
  Sparkles,
  ChevronDown,
  Play,
  Cpu
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/icons/SocialIcons';
import { contactInfo, bioData } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume?: () => void;
  onOpenEmail?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEmail }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'skills' | 'terminal'>('profile');
  const [isRunningCode, setIsRunningCode] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    "✓ Runtime environment: Node v24 + React 19 + TypeScript",
    "✓ Target: Full-Stack Web & Android Mobile Development",
    "✓ System status: Ready for collaboration"
  ]);

  // Typing effect for subtitle
  const roles = [
    "Software Developer",
    "AI-Assisted Engineer",
    "Creative Problem Solver",
    "Full-Stack Web & Android"
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedRole(currentRole.substring(0, displayedRole.length + 1));
        if (displayedRole.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedRole(currentRole.substring(0, displayedRole.length - 1));
        if (displayedRole.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, roleIndex]);

  const handleRunCode = () => {
    setIsRunningCode(true);
    setTerminalOutput(prev => [...prev, "⚡ Compiling Developer Spec..."]);
    setTimeout(() => {
      setTerminalOutput(prev => [
        ...prev,
        `✓ Core Focus: React, TypeScript, Kotlin & Android`,
        `✓ Projects loaded: PrimeMart (Web) & RecipeHub (Android)`,
        `✓ Ready for new challenges in Software Engineering!`
      ]);
      setIsRunningCode(false);
    }, 800);
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Decorative Ambient Gradients */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-sky-500/15 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-indigo-500/15 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Introduction & CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-slate-300">
                Available for Software Engineering Opportunities
              </span>
            </div>

            {/* Main Name & Title */}
            <div>
              <p className="text-sm md:text-base font-mono text-sky-400 font-semibold tracking-wider uppercase mb-2">
                Hello, I am
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Vasu <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">Rachhadiya</span>
              </h1>

              <div className="h-10 mt-3 flex items-center">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-300 font-mono">
                  I build as a{' '}
                  <span className="text-sky-400 border-r-2 border-sky-400 pr-1 animate-pulse">
                    {displayedRole}
                  </span>
                </span>
              </div>
            </div>

            {/* Pitch / Summary */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {bioData.summary}
            </p>

            {/* CTAs & Socials */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-slate-950 transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>

              {/* Social icons */}
              <div className="flex items-center gap-2.5 ml-1">
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub: github.com/VasuRachhadiya"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-sky-400 transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn: Vasu Rachhadiya"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>

                <button
                  type="button"
                  onClick={onOpenEmail}
                  className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                  aria-label="Email Vasu Rachhadiya"
                  title="Email: vasurachhadiya@gmail.com (Click for options)"
                >
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quick Micro Credentials Bar */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-6 max-w-sm">
              <div>
                <p className="text-xs font-mono text-slate-400">Core Focus</p>
                <p className="text-sm font-bold text-sky-400">Web & Android</p>
              </div>
              <div>
                <p className="text-xs font-mono text-slate-400">Methodology</p>
                <p className="text-sm font-bold text-indigo-400">AI-Assisted</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Developer Workstation Card */}
          <div className="lg:col-span-5">
            <div className="relative group rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-2xl backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-slate-600">
              {/* Window Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">vasu-dev-workstation</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <button
                    onClick={handleRunCode}
                    disabled={isRunningCode}
                    className="flex items-center space-x-1 px-2.5 py-1 rounded bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 text-xs font-mono transition-colors border border-sky-500/30"
                  >
                    <Play className={`w-3 h-3 ${isRunningCode ? 'animate-spin' : ''}`} />
                    <span>Run</span>
                  </button>
                </div>
              </div>

              {/* IDE Editor Tabs */}
              <div className="flex items-center border-b border-slate-800/80 bg-slate-950/60 px-2 pt-1 font-mono text-xs">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`flex items-center space-x-2 px-3 py-1.5 border-t-2 transition-colors ${activeTab === 'profile'
                      ? 'border-sky-400 bg-slate-900 text-sky-300 font-semibold'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                >
                  <Code2 className="w-3.5 h-3.5 text-sky-400" />
                  <span>developer.ts</span>
                </button>
                <button
                  onClick={() => setActiveTab('skills')}
                  className={`flex items-center space-x-2 px-3 py-1.5 border-t-2 transition-colors ${activeTab === 'skills'
                      ? 'border-indigo-400 bg-slate-900 text-indigo-300 font-semibold'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                >
                  <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                  <span>skills.config</span>
                </button>
                <button
                  onClick={() => setActiveTab('terminal')}
                  className={`flex items-center space-x-2 px-3 py-1.5 border-t-2 transition-colors ${activeTab === 'terminal'
                      ? 'border-emerald-400 bg-slate-900 text-emerald-300 font-semibold'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                >
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span>console.log</span>
                </button>
              </div>

              {/* Code Panel Body */}
              <div className="p-4 sm:p-5 font-mono text-xs text-slate-300 min-h-[300px] overflow-x-auto leading-relaxed">
                {activeTab === 'profile' && (
                  <div className="space-y-1">
                    <p className="text-slate-500">// Profile Definition: Vasu Rachhadiya</p>
                    <p>
                      <span className="text-purple-400">export const</span>{' '}
                      <span className="text-yellow-300">developer</span> = {'{'}
                    </p>
                    <p className="pl-4">
                      <span className="text-sky-300">name</span>:{' '}
                      <span className="text-emerald-300">"Vasu Rachhadiya"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-sky-300">role</span>:{' '}
                      <span className="text-emerald-300">"Software Developer"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-sky-300">focus</span>:{' '}
                      <span className="text-emerald-300">"Full-Stack Web & Android"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-sky-300">stack</span>:{' '}
                      <span className="text-amber-300">["React", "TypeScript", "Kotlin", "Tailwind"]</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-sky-300">mindset</span>:{' '}
                      <span className="text-emerald-300">"AI-Assisted Iteration & Clean Code"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-sky-300">openToOpportunities</span>:{' '}
                      <span className="text-amber-400">true</span>
                    </p>
                    <p>{'};'}</p>
                  </div>
                )}

                {activeTab === 'skills' && (
                  <div className="space-y-1">
                    <p className="text-slate-500">// Technical Stack Snapshot</p>
                    <p>
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-yellow-300">techStack</span> = {'{'}
                    </p>
                    <p className="pl-4">
                      <span className="text-sky-300">languages</span>: [
                      <span className="text-emerald-300">"Java"</span>,{' '}
                      <span className="text-emerald-300">"Python"</span>,{' '}
                      <span className="text-emerald-300">"C"</span>],
                    </p>
                    <p className="pl-4">
                      <span className="text-sky-300">web</span>: [
                      <span className="text-emerald-300">"HTML5"</span>,{' '}
                      <span className="text-emerald-300">"CSS3"</span>,{' '}
                      <span className="text-emerald-300">"JavaScript"</span>,{' '}
                      <span className="text-emerald-300">"React"</span>],
                    </p>
                    <p className="pl-4">
                      <span className="text-sky-300">databases</span>: [
                      <span className="text-emerald-300">"MySQL"</span>,{' '}
                      <span className="text-emerald-300">"MongoDB"</span>,{' '}
                      <span className="text-emerald-300">"SQLite"</span>],
                    </p>
                    <p className="pl-4">
                      <span className="text-sky-300">aiTools</span>: [
                      <span className="text-emerald-300">"Antigravity"</span>,{' '}
                      <span className="text-emerald-300">"ChatGPT"</span>]
                    </p>
                    <p>{'};'}</p>
                  </div>
                )}

                {activeTab === 'terminal' && (
                  <div className="space-y-1.5">
                    <p className="text-emerald-400 font-bold">$ vasu.init() --status</p>
                    {terminalOutput.map((line, index) => (
                      <p key={index} className="text-slate-300">
                        {line}
                      </p>
                    ))}
                    <div className="flex items-center space-x-1 text-sky-400 pt-2">
                      <span>$</span>
                      <span className="w-2 h-4 bg-sky-400 animate-pulse" />
                    </div>
                  </div>
                )}
              </div>

              {/* Status bar */}
              <div className="px-4 py-2 bg-slate-950 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  UTF-8 • TypeScript • LF
                </span>
                <span>Rajkot, IN (IST)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 pb-2 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-xs font-mono text-slate-400 hover:text-sky-400 transition-colors"
          >
            <span>Scroll to explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-sky-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
