import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  FileText,
  Download,
  Mail,
  ExternalLink,
  Code2,
  GraduationCap,
  Award,
  User,
  Moon,
  Sun,
  X
} from 'lucide-react';
import { GithubIcon } from './icons/SocialIcons';
import { contactInfo } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onOpenEmail?: () => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onOpenEmail,
  theme,
  toggleTheme
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const items = [
    {
      category: 'Navigation',
      id: 'about',
      title: 'About Vasu',
      description: 'Background, MCA education, and technical philosophy',
      icon: <User className="w-4 h-4 text-sky-400" />,
      action: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      category: 'Navigation',
      id: 'skills',
      title: 'Technical Skills',
      description: 'Java, Python, C, Web, Databases, AI Tools',
      icon: <Code2 className="w-4 h-4 text-indigo-400" />,
      action: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      category: 'Navigation',
      id: 'projects',
      title: 'Featured Projects',
      description: 'PrimeMart E-Commerce & RecipeHub Android App',
      icon: <Code2 className="w-4 h-4 text-cyan-400" />,
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      category: 'Navigation',
      id: 'education',
      title: 'Education Timeline',
      description: 'MCA Atmiya University (84.5%), BCA (77.4%), Tapovan',
      icon: <GraduationCap className="w-4 h-4 text-purple-400" />,
      action: () => {
        document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      category: 'Navigation',
      id: 'certifications',
      title: 'Certifications',
      description: 'Cisco Python, Google Workspace AI, TCS iON MDM',
      icon: <Award className="w-4 h-4 text-emerald-400" />,
      action: () => {
        document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      category: 'Navigation',
      id: 'contact',
      title: 'Contact Form & Details',
      description: 'Email, phone, location & message form',
      icon: <Mail className="w-4 h-4 text-amber-400" />,
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      category: 'Resume',
      id: 'view-resume',
      title: 'View Resume (Preview Modal)',
      description: 'Interactive preview of Vasu Rachhadiya\'s resume',
      icon: <FileText className="w-4 h-4 text-sky-400" />,
      action: () => {
        onClose();
        onOpenResume();
      }
    },
    {
      category: 'Resume',
      id: 'download-resume',
      title: 'Download Resume PDF',
      description: 'Download the official Vasu_Rachhadiya_Resume.pdf',
      icon: <Download className="w-4 h-4 text-emerald-400" />,
      action: () => {
        const link = document.createElement('a');
        link.href = '/Vasu_Rachhadiya_Resume.pdf';
        link.download = 'Vasu_Rachhadiya_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        onClose();
      }
    },
    {
      category: 'Quick Actions',
      id: 'send-email',
      title: 'Compose Email to Vasu',
      description: 'Open in Gmail Web, default mail client, or copy address',
      icon: <Mail className="w-4 h-4 text-emerald-400" />,
      action: () => {
        onClose();
        if (onOpenEmail) onOpenEmail();
      }
    },
    {
      category: 'Quick Actions',
      id: 'copy-email',
      title: `Copy Email: ${contactInfo.email}`,
      description: 'Copy email address to clipboard',
      icon: <Mail className="w-4 h-4 text-sky-400" />,
      action: () => {
        navigator.clipboard.writeText(contactInfo.email);
        alert('Email copied to clipboard!');
        onClose();
      }
    },
    {
      category: 'Quick Actions',
      id: 'github',
      title: 'Open GitHub Profile',
      description: 'Visit github.com/VasuRachhadiya',
      icon: <GithubIcon className="w-4 h-4 text-white" />,
      action: () => {
        window.open(contactInfo.github, '_blank', 'noopener,noreferrer');
        onClose();
      }
    },
    {
      category: 'Quick Actions',
      id: 'theme',
      title: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
      description: 'Toggle interface visual theme',
      icon: theme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-indigo-400" />,
      action: () => {
        toggleTheme();
        onClose();
      }
    }
  ];

  const filteredItems = items.filter(
    item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      itemRefs.current = [];
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Automatically scroll active selected item into view on Arrow Up / Down
  useEffect(() => {
    const activeEl = itemRefs.current[selectedIndex];
    if (activeEl) {
      activeEl.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth'
      });
    }
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev < filteredItems.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : filteredItems.length - 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl rounded-2xl bg-slate-900/95 dark:bg-slate-900/95 border border-slate-700/60 shadow-2xl overflow-hidden z-10 transition-all text-slate-100">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800">
          <Search className="w-5 h-5 text-sky-400 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or search..."
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              setSelectedIndex(0);
              itemRefs.current = [];
            }}
            className="w-full bg-transparent text-sm md:text-base text-slate-100 placeholder-slate-400 outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-sm text-slate-400">
              No results found for "{query}"
            </div>
          ) : (
            filteredItems.map((item, index) => (
              <button
                key={item.id}
                ref={el => {
                  itemRefs.current[index] = el;
                }}
                onClick={item.action}
                onMouseMove={() => {
                  if (selectedIndex !== index) setSelectedIndex(index);
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-colors ${selectedIndex === index
                    ? 'bg-sky-500/15 border border-sky-500/30 text-white dark:text-white'
                    : 'text-slate-300 hover:bg-slate-800/60'
                  }`}
              >
                <div className="flex items-center space-x-3 overflow-hidden">
                  <div className="p-2 rounded-lg bg-slate-800 shrink-0">
                    {item.icon}
                  </div>
                  <div className="truncate">
                    <p className="text-sm font-medium text-slate-100">{item.title}</p>
                    <p className="text-xs text-slate-400 truncate">{item.description}</p>
                  </div>
                </div>
                <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 shrink-0 ml-2">
                  {item.category}
                </span>
              </button>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/70 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
          <div className="flex items-center space-x-3">
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">↑↓</kbd> Navigate
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">↵</kbd> Select
            </span>
          </div>
          <span>
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">Esc</kbd> Close
          </span>
        </div>
      </div>
    </div>
  );
};
