import React from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Layout, Smartphone } from 'lucide-react';
import { GithubIcon } from './icons/SocialIcons';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-3xl my-auto rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden z-10 text-slate-100 animate-in fade-in zoom-in-95 duration-200">
        {/* Banner with Glowing Visual */}
        <div className="relative h-44 md:h-52 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-6 flex flex-col justify-end border-b border-slate-800">
          <div 
            className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-30 pointer-events-none"
            style={{ backgroundColor: project.color }}
          />

          <div className="flex items-center justify-between absolute top-4 left-6 right-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-slate-800/80 border border-slate-700/80 text-sky-400">
              {project.type === 'web' ? <Layout className="w-3.5 h-3.5" /> : <Smartphone className="w-3.5 h-3.5" />}
              {project.category}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-2">
              {project.title}
            </h2>
            <p className="text-sm text-slate-300 font-medium mt-1">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          {/* Detailed Overview */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Project Overview
            </h4>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-400" /> Key Features & Capabilities
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-800/50 border border-slate-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                  <span className="text-xs md:text-sm text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture & Engineering Highlights */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-indigo-400" /> Engineering Architecture
            </h4>
            <div className="space-y-2">
              {project.architecture.map((arch, idx) => (
                <div key={idx} className="flex items-center space-x-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 font-mono text-xs text-slate-300">
                  <span className="text-indigo-400 font-bold">0{idx + 1}.</span>
                  <span>{arch}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-2">
              <Layers className="w-4 h-4 text-purple-400" /> Technologies & Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">
            Repository: VasuRachhadiya/{project.id}
          </span>
          <div className="flex items-center space-x-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors border border-slate-700"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Repository</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
