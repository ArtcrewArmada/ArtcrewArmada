import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "navy";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", fullWidth = false, className = "", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-sans font-medium tracking-wider uppercase transition-calm focus:outline-none focus:ring-1 focus:ring-armada-sand disabled:opacity-50 disabled:cursor-not-allowed border";
    
    const variants = {
      primary: "bg-armada-sand border-armada-sand text-armada-navy hover:bg-armada-navy hover:border-armada-navy hover:text-armada-ivory",
      secondary: "bg-transparent border-armada-navy text-armada-navy hover:bg-armada-navy hover:text-armada-ivory",
      navy: "bg-armada-navy border-armada-navy text-armada-ivory hover:bg-armada-sand hover:border-armada-sand hover:text-armada-navy",
      ghost: "bg-transparent border-transparent text-armada-navy hover:bg-armada-navy/5",
    };

    const sizes = {
      sm: "px-4 py-1.5 text-xs font-semibold tracking-wider",
      md: "px-6 py-2.5 text-xs font-bold tracking-widest",
      lg: "px-8 py-3.5 text-sm font-bold tracking-widest",
    };

    const widthStyle = fullWidth ? "w-full" : "";

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
