import React from 'react';
import { translations } from '../data/content';
import { Language } from '../types';

interface FooterProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  onSelectSection: (sectionId: any) => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onSelectLang,
  onSelectSection,
}) => {
  return (
    <footer className="bg-[#111111] border-t border-[#F5F2EA]/20 w-full mt-24 flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-12 gap-8 text-center md:text-left z-20 relative">
      <div className="flex flex-col gap-3">
        <h3 className="font-serif-display text-2xl text-[#F5F2EA] tracking-wider">
          {translations.footer.brand}
        </h3>
        <p className="text-xs text-[#AFAFA9] tracking-widest uppercase font-light">
          {translations.footer.tagline[currentLang]}
        </p>
      </div>

      <nav className="flex flex-wrap justify-center items-center gap-6 text-xs text-[#AFAFA9] tracking-wider font-semibold">
        <button 
          onClick={() => onSelectLang('TH')}
          className={`uppercase transition-colors cursor-pointer ${
            currentLang === 'TH' ? 'text-[#F5F2EA] border-b border-[#B08A3E] pb-0.5' : 'hover:text-[#B08A3E]'
          }`}
        >
          Thai
        </button>
        <button 
          onClick={() => onSelectLang('EN')}
          className={`uppercase transition-colors cursor-pointer ${
            currentLang === 'EN' ? 'text-[#F5F2EA] border-b border-[#B08A3E] pb-0.5' : 'hover:text-[#B08A3E]'
          }`}
        >
          English
        </button>
        <button 
          onClick={() => onSelectLang('FR')}
          className={`uppercase transition-colors cursor-pointer ${
            currentLang === 'FR' ? 'text-[#F5F2EA] border-b border-[#B08A3E] pb-0.5' : 'hover:text-[#B08A3E]'
          }`}
        >
          French
        </button>

        <span className="text-[#F5F2EA]/20 hidden md:inline">|</span>

        <button 
          onClick={() => onSelectSection('about')}
          className="uppercase hover:text-[#B08A3E] transition-colors cursor-pointer"
        >
          {translations.footer.terms[currentLang]}
        </button>
        <button 
          onClick={() => onSelectSection('awareness')}
          className="uppercase hover:text-[#B08A3E] transition-colors cursor-pointer"
        >
          {translations.footer.privacy[currentLang]}
        </button>
      </nav>
    </footer>
  );
};
