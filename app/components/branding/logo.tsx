import React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  variant?: "full" | "emblem" | "symbol";
  theme?: "dark" | "light" | "sand";
}

export function Logo({ variant = "full", theme = "dark", className, ...props }: LogoProps) {
  // Brand colors
  const colors = {
    dark: {
      primary: "#1E2A44", // Navy
      secondary: "#C7A995", // Sand
      background: "#F7F4EF", // Ivory
    },
    light: {
      primary: "#F7F4EF", // Ivory
      secondary: "#C7A995", // Sand
      background: "#1E2A44", // Navy
    },
    sand: {
      primary: "#C7A995", // Sand
      secondary: "#1E2A44", // Navy
      background: "#F7F4EF",
    },
  };

  const activeColors = colors[theme];

  if (variant === "symbol") {
    // Elegant diamond/cross symbol mark with arrow and dots
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        {/* Outer Fine circle outline */}
        <circle cx="50" cy="50" r="46" stroke={activeColors.primary} strokeWidth="1" strokeDasharray="2 2" />
        
        {/* Central Geometric Diamond */}
        <path
          d="M50 25 L65 50 L50 75 L35 50 Z"
          stroke={activeColors.primary}
          strokeWidth="1.5"
          fill={activeColors.secondary}
          fillOpacity="0.15"
        />
        
        {/* Fine cross lines */}
        <line x1="50" y1="15" x2="50" y2="85" stroke={activeColors.primary} strokeWidth="1" />
        <line x1="15" y1="50" x2="85" y2="50" stroke={activeColors.primary} strokeWidth="1" />
        
        {/* Central point dots */}
        <circle cx="50" cy="50" r="3" fill={activeColors.primary} />
        <circle cx="50" cy="25" r="2.5" fill={activeColors.primary} />
        <circle cx="50" cy="75" r="2.5" fill={activeColors.primary} />
        <circle cx="35" cy="50" r="2.5" fill={activeColors.primary} />
        <circle cx="65" cy="50" r="2.5" fill={activeColors.primary} />
        
        {/* Elegant arrow movement indicators */}
        <path d="M47 18 L50 15 L53 18" stroke={activeColors.primary} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M47 82 L50 85 L53 82" stroke={activeColors.primary} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (variant === "emblem") {
    // Circular emblem containing branding texts
    return (
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        <circle cx="60" cy="60" r="54" stroke={activeColors.primary} strokeWidth="1.5" />
        
        {/* Inner symbol */}
        <path
          d="M60 40 L70 60 L60 80 L50 60 Z"
          stroke={activeColors.secondary}
          strokeWidth="1"
          fill={activeColors.secondary}
          fillOpacity="0.1"
        />
        <circle cx="60" cy="60" r="2" fill={activeColors.primary} />
        
        {/* Circular text path anchor */}
        <path
          id="textPath"
          d="M 60, 60 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
          fill="none"
        />
        
        <text fill={activeColors.primary} fontSize="7" letterSpacing="2.8" fontFamily="Montserrat, sans-serif">
          <textPath href="#textPath" startOffset="0%">
            ARTCREW ARMADA • CREATION & CRAFT HOUSE •
          </textPath>
        </text>
      </svg>
    );
  }

  // Full typography brand logotype
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Icon emblem */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 flex-shrink-0"
      >
        <circle cx="50" cy="50" r="42" stroke={activeColors.primary} strokeWidth="1.5" />
        <path
          d="M50 28 L66 50 L50 72 L34 50 Z"
          stroke={activeColors.secondary}
          strokeWidth="1.2"
          fill={activeColors.secondary}
          fillOpacity="0.1"
        />
        <circle cx="50" cy="50" r="3" fill={activeColors.primary} />
      </svg>
      
      {/* Text logotype */}
      <div className="flex flex-col select-none">
        <span
          className="text-lg font-light tracking-[0.25em] uppercase font-headline"
          style={{ color: activeColors.primary }}
        >
          ARTcrew
        </span>
        <span
          className="text-xs font-semibold tracking-[0.45em] uppercase font-sans -mt-1"
          style={{ color: activeColors.secondary }}
        >
          ARMADA
        </span>
      </div>
    </div>
  );
}
