import React from 'react';
import officialLogo from '../assets/official_logo.png';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  badgeStyle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
  badgeStyle = false,
}) => {
  // Size dimensions for image container & icon
  const sizeMap = {
    sm: { img: 'w-8 h-8', text: 'text-base', subtext: 'text-[9px]' },
    md: { img: 'w-11 h-11', text: 'text-xl', subtext: 'text-[11px]' },
    lg: { img: 'w-16 h-16', text: 'text-2xl', subtext: 'text-xs' },
    xl: { img: 'w-24 h-24', text: 'text-3xl', subtext: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Graphic Container */}
      <div
        className={`relative flex items-center justify-center shrink-0 rounded-xl overflow-hidden bg-white/95 p-1 border border-slate-700/50 shadow-lg shadow-blue-900/20 group-hover:scale-105 transition-transform duration-300 ${
          badgeStyle ? 'ring-2 ring-amber-500/80 ring-offset-2 ring-offset-slate-950' : ''
        }`}
      >
        <img
          src={officialLogo}
          alt="Uday Contractor Official Logo"
          className={`${currentSize.img} object-contain rounded-lg`}
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Text Branding */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className={`font-extrabold tracking-tight font-heading text-white ${currentSize.text}`}>
              UDAY <span className="text-amber-500 font-bold">CONTRACTOR</span>
            </span>
          </div>
          <p className={`uppercase tracking-widest text-slate-400 font-semibold ${currentSize.subtext}`}>
            Tiles & Stone Installation Experts
          </p>
        </div>
      )}
    </div>
  );
};

export const LogoIconOnly: React.FC<{ size?: 'sm' | 'md' | 'lg'; className?: string }> = ({
  size = 'md',
  className = '',
}) => {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-xl bg-white p-1 border border-slate-700 shadow-md ${sizeMap[size]} ${className}`}
    >
      <img
        src={officialLogo}
        alt="Uday Contractor Official Logo"
        className="w-full h-full object-contain rounded-md"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
