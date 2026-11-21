import React from 'react';
import { ArrowUp, Mail, Heart, Code2 } from 'lucide-react';
import { contactInfo, navigationLinks } from '../data/portfolioData';
import { BrandLogo } from './BrandLogo';
import { SocialLinks } from './SocialLinks';

interface FooterProps {
  onOpenEmail?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEmail }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-slate-800/80 bg-slate-950/90 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Intro */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <BrandLogo className="w-9 h-9 drop-shadow-md" />
              <span className="text-base font-bold text-white tracking-tight">
                Vasu Rachhadiya
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Aspiring Software Developer passionate about building modern web applications, AI-assisted engineering, and clean, resilient digital solutions.
            </p>

            <SocialLinks onOpenEmail={onOpenEmail} size="sm" className="pt-2" />
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
              Navigation
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navigationLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-sky-400 transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Status & Back To Top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end space-y-4">
            <div className="text-left md:text-right">
              <p className="text-xs font-mono text-slate-400">System Status</p>
              <div className="inline-flex items-center gap-2 mt-1 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Hire</span>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-xs font-mono text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 px-4 py-2 rounded-xl transition-all"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-sky-400" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-4">
          <p>
            © {currentYear} Vasu Rachhadiya. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span>Built with React 19, TypeScript & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
