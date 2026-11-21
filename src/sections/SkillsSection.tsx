import React, { useState } from 'react';
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Palette, 
  Sparkles, 
  Layers, 
  Wind, 
  Database, 
  Boxes, 
  HardDrive, 
  GitBranch, 
  FileCode, 
  Bot, 
  Zap, 
  Rocket, 
  CheckCircle2, 
  TrendingUp, 
  Repeat, 
  Coffee,
  Check
} from 'lucide-react';
import { GithubIcon } from '../components/icons/SocialIcons';
import { skillsData } from '../data/portfolioData';

// Map icon names to Lucide components
const iconMap: Record<string, React.ReactNode> = {
  Coffee: <Coffee className="w-5 h-5 text-amber-400" />,
  Terminal: <Terminal className="w-5 h-5 text-emerald-400" />,
  Cpu: <Cpu className="w-5 h-5 text-indigo-400" />,
  Code2: <Code2 className="w-5 h-5 text-orange-400" />,
  Palette: <Palette className="w-5 h-5 text-sky-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-yellow-400" />,
  Layers: <Layers className="w-5 h-5 text-cyan-400" />,
  Wind: <Wind className="w-5 h-5 text-teal-400" />,
  Database: <Database className="w-5 h-5 text-blue-400" />,
  Boxes: <Boxes className="w-5 h-5 text-emerald-400" />,
  HardDrive: <HardDrive className="w-5 h-5 text-purple-400" />,
  GitBranch: <GitBranch className="w-5 h-5 text-orange-400" />,
  Github: <GithubIcon className="w-5 h-5 text-slate-200" />,
  FileCode: <FileCode className="w-5 h-5 text-blue-400" />,
  Bot: <Bot className="w-5 h-5 text-purple-400" />,
  Zap: <Zap className="w-5 h-5 text-yellow-400" />,
  Rocket: <Rocket className="w-5 h-5 text-pink-400" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-sky-400" />,
  Repeat: <Repeat className="w-5 h-5 text-indigo-400" />
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'languages', label: 'Languages' },
    { id: 'frontend', label: 'Web & Frontend' },
    { id: 'databases', label: 'Databases' },
    { id: 'tools', label: 'Dev Tools' },
    { id: 'ai-assisted', label: 'AI Engineering' }
  ];

  const filteredCategories = selectedCategory === 'all'
    ? skillsData
    : skillsData.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-24 relative z-10 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">Toolkit</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            Structured foundations across programming languages, web standards, databases, development workflows, and modern AI acceleration.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-sky-500 text-slate-950 font-semibold shadow-md shadow-sky-500/20 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Groups Grid */}
        <div className="space-y-12">
          {filteredCategories.map(category => (
            <div key={category.id} className="space-y-4">
              
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-slate-800/80 pb-3">
                <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-sky-400" />
                  {category.title}
                </h3>
                <span className="text-xs font-mono text-slate-400 mt-1 sm:mt-0">
                  {category.description}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group relative p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/5 backdrop-blur-sm"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:scale-110 transition-transform">
                        {iconMap[skill.iconName] || <Code2 className="w-5 h-5 text-sky-400" />}
                      </div>

                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-slate-800/80 text-sky-300 border border-slate-700/80">
                        {skill.level}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                      {skill.name}
                    </h4>

                    <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Development Methodology Banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-sky-950/40 via-indigo-950/30 to-purple-950/40 border border-sky-500/20 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
              Modern Engineering Discipline
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              AI-Augmented Prototyping & Solid Core Foundations
            </h4>
            <p className="text-sm text-slate-300 max-w-2xl">
              I utilize AI tools like Antigravity and ChatGPT not to replace core engineering, but to accelerate exploration, audit architectures, and produce cleaner, robust code faster.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <div className="flex -space-x-2">
              <span className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center font-mono font-bold text-xs text-sky-400">
                AI
              </span>
              <span className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center font-mono font-bold text-xs text-indigo-400">
                GIT
              </span>
              <span className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center font-mono font-bold text-xs text-emerald-400">
                SQL
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
