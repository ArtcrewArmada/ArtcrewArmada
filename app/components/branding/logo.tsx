import React from "react";

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  variant?: "full" | "emblem" | "symbol";
  theme?: "dark" | "light" | "sand";
}

export function Logo({ variant = "full", theme = "dark", className = "", ...props }: LogoProps) {
  const logoUrl = "https://pub-fbe4c0b88b1c4967a575e56eb5f39ecf.r2.dev/logo.jpg";
  
  const textColors = {
    dark: {
      primary: "text-armada-navy",
      secondary: "text-armada-sand",
    },
    light: {
      primary: "text-armada-ivory",
      secondary: "text-armada-sand",
    },
    sand: {
      primary: "text-armada-sand",
      secondary: "text-armada-navy",
    },
  };

  const activeColors = textColors[theme];

  if (variant === "symbol" || variant === "emblem") {
    return (
      <img
        src={logoUrl}
        alt="Artcrew Armada"
        className={`rounded-full object-cover ${className}`}
        {...props}
      />
    );
  }

  // Full typography brand logotype
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Icon emblem */}
      <img
        src={logoUrl}
        alt="Artcrew Armada"
        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
      />
      
      {/* Text logotype */}
      <div className="flex flex-col select-none">
        <span
          className={`text-lg font-light tracking-[0.25em] uppercase font-headline ${activeColors.primary}`}
        >
          ARTcrew
        </span>
        <span
          className={`text-xs font-semibold tracking-[0.45em] uppercase font-sans -mt-1 ${activeColors.secondary}`}
        >
          ARMADA
        </span>
      </div>
    </div>
  );
}

