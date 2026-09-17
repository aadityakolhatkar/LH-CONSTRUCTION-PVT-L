import React from 'react';

interface LHLogoProps {
  className?: string;
  variant?: 'badge' | 'light' | 'mono-blue';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const LHLogo: React.FC<LHLogoProps> = ({
  className = '',
  variant = 'badge',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'h-9 w-auto',
    md: 'h-11 w-auto',
    lg: 'h-16 w-auto',
    xl: 'h-24 w-auto',
  };

  // Color mappings based on variant
  // In the user's uploaded logo (LHJPG.png):
  // The 'L' is pure white, the 'H' is vivid royal blue, and 'CONSTRUCTION LTD' is white on a dark backing.
  const isLight = variant === 'light';
  const isMonoBlue = variant === 'mono-blue';

  const bgColor = isLight ? '#FFFFFF' : isMonoBlue ? '#1E40AF' : '#0B0D11';
  const lColor = isLight ? '#1E293B' : '#FFFFFF';
  const hColor = isLight ? '#2563EB' : isMonoBlue ? '#93C5FD' : '#2E67D1';
  const textColor = isLight ? '#0F172A' : '#FFFFFF';
  const borderColor = isLight ? '#E2E8F0' : isMonoBlue ? '#3B82F6' : '#1E242D';

  return (
    <div
      className={`inline-flex items-center justify-center select-none ${sizeClasses[size]} ${className}`}
      title="LH Construction Ltd"
    >
      <svg
        viewBox="0 0 320 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain filter drop-shadow-sm"
        role="img"
        aria-label="LH Construction Ltd Logo"
      >
        {/* Background container / badge */}
        <rect
          x="4"
          y="4"
          width="312"
          height="332"
          rx="18"
          fill={bgColor}
          stroke={borderColor}
          strokeWidth="3"
        />

        {/* The 'L' Component */}
        {/* Left vertical stem: x: 44 to 96, y: 36 to 252 */}
        {/* Bottom horizontal bar: x: 44 to 276, y: 200 to 252 */}
        <path
          d="M 44 36 
             H 98 
             V 198 
             H 276 
             V 252 
             H 44 
             Z"
          fill={lColor}
        />

        {/* The 'H' Component in Royal Blue */}
        {/* Left column of H: x: 118 to 164, y: 36 to 180 */}
        {/* Right column of H: x: 230 to 276, y: 36 to 180 */}
        {/* Crossbar of H: x: 164 to 230, y: 96 to 138 */}
        <path
          d="M 118 36 
             H 164 
             V 94 
             H 230 
             V 36 
             H 276 
             V 180 
             H 230 
             V 134 
             H 164 
             V 180 
             H 118 
             Z"
          fill={hColor}
        />

        {/* Brand Text: CONSTRUCTION LTD */}
        <text
          x="160"
          y="302"
          textAnchor="middle"
          fill={textColor}
          fontSize="24"
          fontFamily="Syne, 'Plus Jakarta Sans', sans-serif"
          fontWeight="800"
          letterSpacing="0.16em"
        >
          CONSTRUCTION LTD
        </text>
      </svg>
    </div>
  );
};
