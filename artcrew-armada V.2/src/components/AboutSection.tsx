import React from 'react';
import { translations } from '../data/content';
import { Language } from '../types';
import { ShieldCheck, Flame, Compass } from 'lucide-react';

interface AboutSectionProps {
  currentLang: Language;
  onExploreWorkshops: () => void;
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  currentLang,
  onExploreWorkshops,
  onContactClick,
}) => {
  const icons = [
    <ShieldCheck className="w-8 h-8 text-[#B08A3E]" />,
    <Flame className="w-8 h-8 text-[#B08A3E]" />,
    <Compass className="w-8 h-8 text-[#B08A3E]" />,
  ];

  return (
    <section id="about" className="bg-[#111111] py-24 px-6 md:px-16 border-t border-[#F5F2EA]/10 relative">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs text-[#B08A3E] uppercase tracking-[0.25em] font-semibold mb-3 block">
            {translations.about.tag[currentLang]}
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#F5F2EA] leading-tight mb-8">
            {translations.about.title[currentLang]}
          </h2>
          <p className="text-base md:text-lg text-[#AFAFA9] leading-relaxed font-light">
            {translations.about.lead[currentLang]}
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {translations.about.pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="bg-[#191919] p-8 border border-[#F5F2EA]/10 hover:border-[#B08A3E]/50 transition-all duration-300 flex flex-col"
            >
              <div className="mb-6 p-3 bg-[#111111] w-fit border border-[#B08A3E]/20">
                {icons[idx]}
              </div>
              <h3 className="font-serif-display text-2xl text-[#F5F2EA] mb-4">
                {pillar.title[currentLang]}
              </h3>
              <p className="text-sm text-[#AFAFA9] leading-relaxed font-light">
                {pillar.desc[currentLang]}
              </p>
            </div>
          ))}
        </div>

        {/* Atelier Quote / Callout */}
        <div className="bg-[#1c1b1b] border-l-2 border-[#B08A3E] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-serif-display text-xl md:text-2xl text-[#F5F2EA] italic mb-2">
              &ldquo;We do not consume materials; we act as temporary custodians of elements that will outlive us.&rdquo;
            </p>
            <span className="text-xs text-[#B08A3E] uppercase tracking-widest font-semibold">
              Artisan Guild Charter • Bangkok & Paris
            </span>
          </div>
          <div className="flex gap-4 shrink-0">
            <button
              onClick={onContactClick}
              className="bg-[#B08A3E] text-[#111111] text-xs font-bold px-6 py-3 uppercase tracking-wider hover:bg-[#ebc06e] transition-colors cursor-pointer"
            >
              {currentLang === 'TH' ? 'นัดหมายเยี่ยมชม' : currentLang === 'FR' ? 'Prendre Rendez-vous' : 'Book Atelier Visit'}
            </button>
            <button
              onClick={onExploreWorkshops}
              className="border border-[#F5F2EA]/30 text-[#F5F2EA] text-xs font-semibold px-6 py-3 uppercase tracking-wider hover:border-[#B08A3E] hover:text-[#B08A3E] transition-colors cursor-pointer"
            >
              {currentLang === 'TH' ? 'ดูหลักสูตร' : currentLang === 'FR' ? 'Nos Formations' : 'View Apprenticeships'}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
