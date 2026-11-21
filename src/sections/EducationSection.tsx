import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  Sparkles,
  School
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 relative z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">Timeline</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            A consistent record of academic excellence in computer applications, analytical problem-solving, and software principles.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-sky-500 via-indigo-500 to-purple-500 opacity-30" />

          <div className="space-y-12">
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Central Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-sky-400 flex items-center justify-center z-10 shadow-lg shadow-sky-500/20">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
                  </div>

                  {/* Spacer for Alternate layout */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Timeline Card */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                    <div className="group rounded-2xl bg-slate-900/80 border border-slate-800 p-6 backdrop-blur-xl hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5">
                      
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-medium ${
                          item.status === 'In Progress'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                            : 'bg-slate-800 text-slate-300 border border-slate-700'
                        }`}>
                          {item.status}
                        </span>

                        <span className="flex items-center gap-1 text-xs font-mono text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-sky-400" />
                          {item.period}
                        </span>
                      </div>

                      {/* Degree Title */}
                      <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                        {item.degree}
                      </h3>

                      {/* Institution / University */}
                      <p className="text-sm font-semibold text-sky-400 mt-1">
                        {item.institution}
                        {item.university && (
                          <span className="text-slate-400 font-normal"> • {item.university}</span>
                        )}
                      </p>

                      <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {item.location}
                      </p>

                      {/* Grade Pill */}
                      <div className="my-3 inline-block px-3 py-1 rounded-xl bg-sky-500/10 border border-sky-500/20 text-xs sm:text-sm font-mono font-bold text-sky-300">
                        {item.grade}
                      </div>

                      {/* Detail points */}
                      <ul className="space-y-1.5 mt-2 border-t border-slate-800/80 pt-3">
                        {item.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start text-xs text-slate-400 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 mr-2 shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
