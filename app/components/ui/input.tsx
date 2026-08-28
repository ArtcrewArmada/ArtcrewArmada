import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="flex flex-col space-y-1.5 w-full">
        {label && (
          <label className="font-sans text-[10px] font-bold tracking-widest uppercase text-armada-navy/60">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`bg-transparent border-b border-armada-navy/20 py-2 px-1 text-sm text-armada-navy placeholder-armada-navy/40 focus:outline-none focus:border-armada-sand transition-calm ${
            error ? "border-armada-terracotta" : ""
          } ${className}`}
          {...props}
        />
        {error && (
          <span className="text-[10px] text-armada-terracotta tracking-wider uppercase font-semibold">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
