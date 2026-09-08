import React from 'react';
import { HERO_BG_URL, translations } from '../data/content';
import { Language } from '../types';

interface HeroSectionProps {
  currentLang: Language;
  onExplore: () => void;
  onPhilosophy: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLang,
  onExplore,
  onPhilosophy,
}) => {
  return (
    <section 
      id="home"
      className="relative min-h-[92vh] w-full flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Cinematic Atelier Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-35 z-0 transition-opacity duration-700" 
        style={{ backgroundImage: `url('${HERO_BG_URL}')` }}
      />

      {/* Dark Vignette Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/60 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#131313]/70 via-transparent to-[#131313]/70 z-10 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-6 md:px-16 flex flex-col items-center text-center my-12">
        <span className="text-xs md:text-sm text-[#B08A3E] uppercase tracking-[0.25em] font-semibold mb-6 border border-[#B08A3E]/40 px-5 py-2 backdrop-blur-md shadow-inner">
          {translations.hero.badge[currentLang]}
        </span>

        <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F5F2EA] mb-8 max-w-5xl tracking-tight leading-[1.1] drop-shadow-2xl">
          {translations.hero.title[currentLang]}
        </h1>

        <p className="text-base md:text-lg text-[#AFAFA9] max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          {translations.hero.subtitle[currentLang]}
        </p>

        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
          <button 
            id="hero-explore-btn"
            onClick={onExplore}
            className="bg-[#F5F2EA] text-[#111111] text-xs font-semibold px-10 py-4 uppercase tracking-[0.2em] hover:bg-[#B08A3E] hover:text-[#F5F2EA] transition-all duration-300 shadow-lg cursor-pointer text-center"
          >
            {translations.hero.explore[currentLang]}
          </button>
          <button 
            id="hero-philosophy-btn"
            onClick={onPhilosophy}
            className="bg-transparent border border-[#F5F2EA]/30 text-[#F5F2EA] text-xs font-semibold px-10 py-4 uppercase tracking-[0.2em] hover:border-[#B08A3E] hover:text-[#B08A3E] hover:bg-[#B08A3E]/10 transition-all duration-300 cursor-pointer text-center"
          >
            {translations.hero.philosophy[currentLang]}
          </button>
        </div>
      </div>
    </section>
  );
};
