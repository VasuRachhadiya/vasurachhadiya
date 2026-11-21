import React, { useState } from 'react';
import { 
  X, 
  Mail, 
  Copy, 
  Check, 
  ExternalLink, 
  MessageSquare, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmailModal: React.FC<EmailModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    contactInfo.email
  )}&su=${encodeURIComponent("Portfolio Inquiry - Vasu Rachhadiya")}`;

  const mailtoUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
    "Portfolio Inquiry - Vasu Rachhadiya"
  )}`;

  const handleScrollToContact = () => {
    onClose();
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden z-10 text-slate-900 dark:text-slate-100 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/80 dark:bg-slate-950/60">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-500 dark:text-sky-400">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                Contact via Email
              </h3>
              <p className="text-xs font-mono text-sky-600 dark:text-sky-400 font-medium">
                {contactInfo.email}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close email options"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Options */}
        <div className="p-6 space-y-3">
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
            Select your preferred method to send an email or copy the address:
          </p>

          {/* Option 1: Gmail Web (Universal, Works anywhere) */}
          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-transparent border border-sky-500/30 hover:border-sky-500/60 transition-all duration-200 group hover:shadow-md"
          >
            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-lg bg-sky-500 text-slate-950 flex items-center justify-center font-bold text-lg shadow-sm">
                G
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                    Open in Gmail Web
                  </p>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-600 dark:text-sky-400 border border-sky-500/30">
                    Recommended
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Compose directly in a new browser tab (no app setup needed)
                </p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-sky-500 dark:text-sky-400 shrink-0 ml-2" />
          </a>

          {/* Option 2: Copy to Clipboard */}
          <button
            onClick={handleCopy}
            className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 text-left group"
          >
            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center">
                {copied ? <Check className="w-5 h-5 text-emerald-500" /> : <Copy className="w-5 h-5" />}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                  {copied ? "Copied to Clipboard!" : "Copy Email Address"}
                </p>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  {contactInfo.email}
                </p>
              </div>
            </div>
            <span className={`text-xs font-medium px-3 py-1 rounded-lg transition-colors ${
              copied 
                ? 'bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border border-emerald-500/20' 
                : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
            }`}>
              {copied ? "Copied ✓" : "Copy"}
            </span>
          </button>

          {/* Option 3: Default Desktop Mail App */}
          <a
            href={mailtoUrl}
            onClick={onClose}
            className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 group"
          >
            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors">
                  Open Default Mail App
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Uses Outlook, Apple Mail, or Windows Mail via mailto:
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200 shrink-0 ml-2" />
          </a>

          {/* Option 4: On-Site Contact Form */}
          <button
            onClick={handleScrollToContact}
            className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 text-left group"
          >
            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                  Use On-Site Contact Form
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Fill in the message form directly on this webpage
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200 shrink-0 ml-2" />
          </button>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
          <span>Vasu Rachhadiya</span>
          <span>Rajkot, Gujarat, India</span>
        </div>

      </div>
    </div>
  );
};
