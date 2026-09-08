import React from 'react';
import { Language } from '../types';
import { Sparkles, Compass, Shield, Sun } from 'lucide-react';

interface PrimitiveArtSectionProps {
  currentLang: Language;
  onExploreArtifacts: () => void;
}

export const PrimitiveArtSection: React.FC<PrimitiveArtSectionProps> = ({ currentLang, onExploreArtifacts }) => {
  const artifacts = [
    {
      title: { EN: 'Sacred Astrolabes & Compass Dials', TH: 'แอสโทรแลบและเข็มทิศดาราศาสตร์โบราณ', FR: 'Astrolabes & Cadrans Sacrés' },
      desc: { 
        EN: 'Celestial tracking discs hand-inscribed with astronomical coordinates, evoking the maritime expeditions of the ancient Mediterranean.',
        TH: 'แผ่นจานคำนวณดวงดาวสลักพิกัดดาราศาสตร์ด้วยมือ สะท้อนการเดินทางท่องมหาสมุทรของกองเรือโบราณแห่งทะเลเมดิเตอร์เรเนียน',
        FR: 'Disques de visée céleste gravés à la main rappelant les expéditions maritimes antiques.'
      },
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: { EN: 'Totemic Obsidian & Slate Relics', TH: 'ศิลปวัตถุหินออบซิเดียนและหินชนวนศักดิ์สิทธิ์', FR: 'Reliques Totémiques en Obsidienne' },
      desc: { 
        EN: 'Raw volcanic obsidian and metamorphic slate monolithic vessels honoring geological epochs and volcanic earth energies.',
        TH: 'หินภูเขาไฟออบซิเดียนดิบและหินชนวนแปรสภาพ แกะสลักเป็นภาชนะทรงเสาหินเพื่อเชิดชูพลังงานแห่งเปลือกโลก',
        FR: 'Blocs d\'obsidienne volcanique sculptés en hommage aux forces géologiques.'
      },
      image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="primitive" className="bg-[#131313] py-24 px-6 md:px-16 border-t border-[#F5F2EA]/10">
      <div className="container mx-auto max-w-6xl">
        
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs text-[#B08A3E] uppercase tracking-[0.25em] font-semibold mb-3">
            {currentLang === 'TH' ? 'อัตลักษณ์แห่งศิลปะดึกดำบรรพ์' : currentLang === 'FR' ? 'Archéologie & Symbolisme' : 'Sacred Geometry & Ancestral Relics'}
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#F5F2EA] uppercase tracking-wider mb-4">
            {currentLang === 'TH' ? 'ศิลปะและโบราณกาล' : currentLang === 'FR' ? 'Art & Primitif' : 'Art & Primitive'}
          </h2>
          <div className="w-20 h-px bg-[#B08A3E] opacity-60 mb-6"></div>
          <p className="text-sm md:text-base text-[#AFAFA9] max-w-2xl font-light">
            {currentLang === 'TH'
              ? 'การหลอมรวมปรัชญาความเชื่อโบราณ สัดส่วนทองคำ และสัญลักษณ์ศักดิ์สิทธิ์เข้ากับงานโลหะวิจิตร'
              : currentLang === 'FR'
              ? 'L\'union sacrée de la géométrie d\'or et des symboles antiques avec la métallurgie contemporaine.'
              : 'Blending ancient cosmological symbolism, golden ratio proportions, and ritual artifacts with high-end sustainable metalcraft.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {artifacts.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#191919] border border-[#F5F2EA]/10 p-6 flex flex-col group hover:border-[#B08A3E]/60 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden mb-6 bg-[#111111] border border-[#F5F2EA]/10">
                <img
                  src={item.image}
                  alt={item.title[currentLang]}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent" />
              </div>

              <h3 className="font-serif-display text-2xl text-[#F5F2EA] mb-3 group-hover:text-[#B08A3E] transition-colors">
                {item.title[currentLang]}
              </h3>

              <p className="text-sm text-[#AFAFA9] leading-relaxed font-light mb-6 flex-1">
                {item.desc[currentLang]}
              </p>

              <button
                onClick={onExploreArtifacts}
                className="self-start text-xs uppercase tracking-widest font-semibold text-[#B08A3E] border-b border-[#B08A3E]/30 pb-1 hover:border-[#B08A3E] transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>{currentLang === 'TH' ? 'สำรวจผลงานศิลปะโบราณ' : currentLang === 'FR' ? 'Découvrir la Collection' : 'Explore Primitive Works'}</span>
                <Sparkles className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
