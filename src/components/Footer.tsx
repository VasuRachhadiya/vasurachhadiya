import React from 'react';
import { ArrowUp, Mail, Heart, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, FacebookIcon } from './icons/SocialIcons';
import { contactInfo, navigationLinks } from '../data/portfolioData';

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
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 p-[1.5px]">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <span className="font-mono font-bold text-xs text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300">
                    VR
                  </span>
                </div>
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Vasu Rachhadiya
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Aspiring Software Developer & BCA Graduate passionate about building modern web applications, AI-assisted engineering, and clean, resilient digital solutions.
            </p>

            <div className="flex items-center space-x-2.5 pt-2">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-slate-700 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              {contactInfo.instagram && (
                <a
                  href={contactInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-pink-400 hover:border-slate-700 transition-colors"
                  aria-label="Instagram Profile"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              )}
              {contactInfo.facebook && (
                <a
                  href={contactInfo.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-500 hover:border-slate-700 transition-colors"
                  aria-label="Facebook Profile"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              )}
              <button
                type="button"
                onClick={onOpenEmail}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                aria-label="Email Vasu"
                title="Email: vasurachhadiya@gmail.com"
              >
                <Mail className="w-4 h-4" />
              </button>
            </div>
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
