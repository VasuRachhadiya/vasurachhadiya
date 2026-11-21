import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles, 
  ShieldCheck, 
  Terminal, 
  Bot, 
  Database
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

const issuerIcons: Record<string, React.ReactNode> = {
  CISCO: <Terminal className="w-5 h-5 text-sky-400" />,
  GOOGLE: <Bot className="w-5 h-5 text-amber-400" />,
  'TCS iON': <Database className="w-5 h-5 text-indigo-400" />
};

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>INDUSTRY CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Verified <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400">Certifications</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            Professional skill validations from Cisco Networking Academy, Google Workspace, and TCS iON.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="group relative rounded-3xl bg-slate-900/70 border border-slate-800 p-7 flex flex-col justify-between backdrop-blur-xl hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/5"
            >
              <div>
                {/* Issuer Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2.5">
                    <div className="p-2 rounded-xl bg-slate-800 border border-slate-700">
                      {issuerIcons[cert.issuerLogoText] || <Award className="w-5 h-5 text-emerald-400" />}
                    </div>
                    <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-300">
                      {cert.issuer}
                    </span>
                  </div>

                  <span className="p-1 rounded-full bg-emerald-500/10 text-emerald-400" title="Verified Certification">
                    <ShieldCheck className="w-4 h-4" />
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Skills Tag Cloud & Action Link */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-4">
                <div>
                  <p className="text-[11px] font-mono font-semibold uppercase text-slate-400 mb-2">
                    Competencies
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsLearned.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-800/80 text-emerald-300 border border-slate-700/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-200"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
