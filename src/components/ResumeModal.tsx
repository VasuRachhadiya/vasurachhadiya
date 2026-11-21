import React from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const resumePdfPath = '/Vasu_Rachhadiya_Resume.pdf';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl h-[92vh] flex flex-col rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden z-10 text-slate-100">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-100 flex items-center gap-2">
                {contactInfo.name} — Official Resume
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <CheckCircle2 className="w-3 h-3" /> Verified Document
                </span>
              </h3>
              <p className="text-xs text-slate-400 font-mono">Software Developer & AI-Assisted Development</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href={resumePdfPath}
              download="Vasu_Rachhadiya_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-sky-500 hover:bg-sky-400 text-slate-950 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <a
              href={resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in New Tab</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Viewer Body */}
        <div className="flex-1 w-full bg-slate-950 relative overflow-hidden flex flex-col">
          <object
            data={`${resumePdfPath}#toolbar=0`}
            type="application/pdf"
            className="w-full h-full border-none"
          >
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <FileText className="w-16 h-16 text-sky-400 mb-4 opacity-80" />
              <h4 className="text-lg font-semibold text-white mb-2">Resume Document Ready</h4>
              <p className="text-sm text-slate-400 max-w-md mb-6">
                Your browser doesn't have an inline PDF reader, but you can download or view the document directly.
              </p>
              <a
                href={resumePdfPath}
                download="Vasu_Rachhadiya_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-medium transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Resume PDF
              </a>
            </div>
          </object>
        </div>

        {/* Footer info bar */}
        <div className="px-5 py-2.5 bg-slate-950 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>Source: Vasu Rachhadiya Resume</span>
          <span>Location: Rajkot, Gujarat, India</span>
        </div>
      </div>
    </div>
  );
};
