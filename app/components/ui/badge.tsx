import React from "react";

interface BadgeProps {
  variant?: "default" | "sand" | "sage" | "seablue" | "terracotta";
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = "default", children, className = "" }: BadgeProps) {
  const variants = {
    default: "bg-armada-navy/5 text-armada-navy",
    sand: "bg-armada-sand/15 text-armada-navy border border-armada-sand/30",
    sage: "bg-armada-sage/15 text-armada-navy",
    seablue: "bg-armada-seablue/15 text-armada-navy",
    terracotta: "bg-armada-terracotta/15 text-armada-navy",
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 text-[9px] font-bold tracking-widest uppercase font-sans ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
