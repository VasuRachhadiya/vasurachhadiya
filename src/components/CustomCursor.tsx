import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Check if fine pointer device (e.g. mouse, trackpad)
    if (window.matchMedia('(pointer: fine)').matches) {
      setIsTouch(false);
    } else {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button') ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('clickable'))
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Outer subtle glow ring */}
      <div
        className="pointer-events-none fixed z-50 transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? '48px' : '32px',
          height: isPointer ? '48px' : '32px',
          border: isPointer ? '1.5px solid rgba(56, 189, 248, 0.6)' : '1px solid rgba(129, 140, 248, 0.4)',
          borderRadius: '50%',
          backgroundColor: isPointer ? 'rgba(56, 189, 248, 0.08)' : 'transparent',
          boxShadow: isPointer ? '0 0 16px rgba(56, 189, 248, 0.3)' : 'none',
          transition: 'width 0.2s, height 0.2s, border 0.2s, background-color 0.2s'
        }}
      />
      {/* Inner pinpoint dot */}
      <div
        className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? '6px' : '4px',
          height: isPointer ? '6px' : '4px',
          boxShadow: '0 0 8px #38bdf8'
        }}
      />
    </>
  );
};
