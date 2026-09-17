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
          <label className="font-sans text-xs font-bold tracking-wider uppercase text-[#AFAFA9]">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`bg-transparent border-b border-[#F5F2EA]/20 py-2.5 px-1 text-sm md:text-base text-[#F5F2EA] placeholder-[#AFAFA9]/40 focus:outline-none focus:border-[#B08A3E] transition-calm ${
            error ? "border-[#B08A3E]" : ""
          } ${className}`}
          {...props}
        />
        {error && (
          <span className="text-xs text-[#B08A3E] tracking-wider uppercase font-semibold">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
