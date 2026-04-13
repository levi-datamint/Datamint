import React from 'react';

export const LeafIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 22C12 22 4 16 4 9C4 4 8 2 12 2C16 2 20 4 20 9C20 16 12 22 12 22Z" fill="url(#leaf-gradient)" />
    <path d="M12 22V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.3"/>
    <defs>
      <linearGradient id="leaf-gradient" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4ADE80" />
        <stop offset="1" stopColor="#16A34A" />
      </linearGradient>
    </defs>
  </svg>
);

export const Logo: React.FC<{ className?: string, textClassName?: string }> = ({ className = "", textClassName = "text-2xl text-mint-900" }) => (
  <div className={`flex items-center select-none ${className}`}>
    <img src="/datamint logo 1.png" alt="Datamint" className="h-16 w-auto object-contain" />
  </div>
);