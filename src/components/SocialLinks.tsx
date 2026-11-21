import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, FacebookIcon } from './icons/SocialIcons';
import { contactInfo } from '../data/portfolioData';

interface SocialLinksProps {
  onOpenEmail?: () => void;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  onOpenEmail,
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'p-2 rounded-xl w-9 h-9',
    md: 'p-2.5 rounded-xl w-10 h-10 sm:w-11 sm:h-11',
    lg: 'p-3 rounded-2xl w-12 h-12'
  }[size];

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  }[size];

  const socialItems = [
    {
      name: 'GitHub',
      href: contactInfo.github,
      icon: <GithubIcon className={iconSizes} />,
      hoverClass: 'hover:border-slate-500 hover:text-white hover:bg-slate-800/80 shadow-slate-900/40',
      aria: 'GitHub Profile: Vasu Rachhadiya'
    },
    {
      name: 'LinkedIn',
      href: contactInfo.linkedin,
      icon: <LinkedinIcon className={iconSizes} />,
      hoverClass: 'hover:border-[#0A66C2]/60 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 shadow-[#0A66C2]/20',
      aria: 'LinkedIn Profile: Vasu Rachhadiya'
    },
    ...(contactInfo.instagram ? [{
      name: 'Instagram',
      href: contactInfo.instagram,
      icon: <InstagramIcon className={iconSizes} />,
      hoverClass: 'hover:border-[#E4405F]/60 hover:text-[#E4405F] hover:bg-[#E4405F]/10 shadow-[#E4405F]/20',
      aria: 'Instagram Profile: vasu_rachhadiya'
    }] : []),
    ...(contactInfo.facebook ? [{
      name: 'Facebook',
      href: contactInfo.facebook,
      icon: <FacebookIcon className={iconSizes} />,
      hoverClass: 'hover:border-[#1877F2]/60 hover:text-[#1877F2] hover:bg-[#1877F2]/10 shadow-[#1877F2]/20',
      aria: 'Facebook Profile: Vasu Rachhadiya'
    }] : [])
  ];

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {socialItems.map(item => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center bg-slate-900/90 border border-slate-800 text-slate-400 backdrop-blur-md transition-all duration-200 hover:scale-105 hover:shadow-lg ${item.hoverClass} ${sizeClasses}`}
          aria-label={item.aria}
          title={item.name}
        >
          {item.icon}
        </a>
      ))}

      {/* Direct Email Modal / Fallback button */}
      <button
        type="button"
        onClick={onOpenEmail || (() => window.location.href = `mailto:${contactInfo.email}`)}
        className={`flex items-center justify-center bg-slate-900/90 border border-slate-800 text-slate-400 backdrop-blur-md transition-all duration-200 hover:scale-105 hover:shadow-lg hover:border-emerald-500/60 hover:text-emerald-400 hover:bg-emerald-500/10 shadow-emerald-500/20 ${sizeClasses}`}
        aria-label="Send Email to Vasu Rachhadiya"
        title="Email: vasurachhadiya@gmail.com"
      >
        <Mail className={iconSizes} />
      </button>
    </div>
  );
};
