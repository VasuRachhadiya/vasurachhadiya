import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: number;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = 'w-10 h-10', size = 64 }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size}
      height={size}
      aria-label="Vasu Rachhadiya Brand Logo"
    >
      <defs>
        <linearGradient id="brand_border" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="50%" stopColor="#818CF8" />
          <stop offset="100%" stopColor="#C084FC" />
        </linearGradient>
        <linearGradient id="brand_facet_top" x1="19" y1="16" x2="45" y2="31" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
        <linearGradient id="brand_facet_right" x1="33" y1="25" x2="47" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#818CF8" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
        <linearGradient id="brand_facet_left" x1="17" y1="25" x2="31" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C084FC" />
          <stop offset="100%" stopColor="#7E22CE" />
        </linearGradient>
        <radialGradient id="brand_glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#818CF8" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#090D16" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Squircle Base Frame */}
      <rect width="64" height="64" rx="16" fill="#090D16" />
      <rect x="1.5" y="1.5" width="61" height="61" rx="14.5" stroke="url(#brand_border)" strokeWidth="1.5" strokeOpacity="0.85" />

      {/* Radiant Ambient Core Glow */}
      <circle cx="32" cy="32" r="16" fill="url(#brand_glow)" />

      {/* Geometric Isometric Prism Facets */}
      <path d="M32 16L45.5 23.8L32 31.6L18.5 23.8Z" fill="url(#brand_facet_top)" />
      <path d="M33 33.2L46.5 25.4V41L33 48.8Z" fill="url(#brand_facet_right)" />
      <path d="M31 33.2L17.5 25.4V41L31 48.8Z" fill="url(#brand_facet_left)" />

      {/* Central Nexus Star Spark */}
      <path d="M32 28.5C32 30.5 33.5 32 35.5 32C33.5 32 32 33.5 32 35.5C32 33.5 30.5 32 28.5 32C30.5 32 32 30.5 32 28.5Z" fill="#FFFFFF" />
    </svg>
  );
};
