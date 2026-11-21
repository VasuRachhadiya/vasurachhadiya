import React from 'react';
import { 
  User, 
  GraduationCap, 
  MapPin, 
  Code, 
  Bot, 
  BookOpen, 
  CheckCircle, 
  Zap, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { bioData, contactInfo } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Vasu Rachhadiya</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            Engineering solid web & mobile foundations through rigorous academics, clean code, and AI-assisted innovation.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left: Profile Showcase Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-3xl bg-slate-900/80 border border-slate-800 p-8 flex flex-col justify-between h-full backdrop-blur-xl overflow-hidden group hover:border-slate-700 transition-all">
              
              {/* Background ambient glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                {/* Visual Avatar / Monogram Shield */}
                <div className="flex items-center justify-between">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 p-[2px] shadow-lg shadow-sky-500/20">
                    <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                      <span className="text-2xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300">
                        VR
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-slate-800/80 text-slate-300 border border-slate-700">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    {contactInfo.location}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white">Vasu Rachhadiya</h3>
                  <p className="text-sm font-mono text-sky-400 font-medium">
                    Software Developer & MCA Student
                  </p>
                </div>

                {/* Profile quick highlights */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <GraduationCap className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-mono text-slate-400">Master of Computer Applications (MCA)</p>
                      <p className="text-sm font-semibold text-slate-200">Atmiya University, Rajkot</p>
                      <p className="text-xs text-indigo-300 font-mono mt-0.5">Currently Pursuing • Sem 1: 84.56% | Sem 2: 82.33%</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <Code className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-mono text-slate-400">Bachelor of Computer Applications (BCA)</p>
                      <p className="text-sm font-semibold text-slate-200">T. N. Rao College, Rajkot</p>
                      <p className="text-xs text-sky-300 font-mono mt-0.5">Saurashtra University • 77.42%</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <Bot className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-mono text-slate-400">AI-Assisted Development</p>
                      <p className="text-sm font-semibold text-slate-200">Modern Prototyping & Engineering</p>
                      <p className="text-xs text-purple-300 font-mono mt-0.5">Antigravity, ChatGPT & LLMs</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Quote */}
              <div className="relative z-10 mt-6 pt-6 border-t border-slate-800/80">
                <p className="text-xs italic text-slate-400 font-serif leading-relaxed">
                  "Building reliable software begins with sound fundamentals, disciplined curiosity, and embracing modern development tools."
                </p>
              </div>

            </div>
          </div>

          {/* Right: Detailed Story & Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Story Card */}
            <div className="rounded-3xl bg-slate-900/60 border border-slate-800/80 p-8 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-sky-400" />
                My Journey & Engineering Perspective
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {bioData.detailedBio.map((paragraph, idx) => (
                  <p key={idx} className="text-slate-300">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Approach & Mindset Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mb-3">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">Foundational Problem Solving</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Deep respect for data structures, object-oriented concepts, relational schemas, and structured debugging across Java, Python, and C.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-3">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">AI-Assisted Efficiency</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Leveraging AI tooling to prototype interfaces swiftly, audit complex code structures, and rapidly turn creative ideas into viable solutions.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-3">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">Continuous Learning</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Actively pursuing master-level coursework, certifications (Cisco, Google, TCS), and expanding full-stack and mobile capabilities.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">Ready to Contribute</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Eager to join high-performing engineering teams, contribute through practical work, and grow as a software engineer.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
