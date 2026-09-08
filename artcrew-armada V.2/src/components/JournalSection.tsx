import React, { useState } from 'react';
import { JOURNAL_DATA } from '../data/content';
import { JournalPost, Language } from '../types';
import { BookOpen, Clock, ArrowRight, X } from 'lucide-react';

interface JournalSectionProps {
  currentLang: Language;
}

export const JournalSection: React.FC<JournalSectionProps> = ({ currentLang }) => {
  const [selectedArticle, setSelectedArticle] = useState<JournalPost | null>(null);

  return (
    <section id="journal" className="bg-[#131313] py-24 px-6 md:px-16 border-t border-[#F5F2EA]/10">
      <div className="container mx-auto max-w-6xl">
        
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs text-[#B08A3E] uppercase tracking-[0.25em] font-semibold mb-3">
            {currentLang === 'TH' ? 'บันทึกบทความและสารคดีงานช่าง' : currentLang === 'FR' ? 'Chroniques & Essais de l\'Atelier' : 'Atelier Chronicles & Metallurgy Essays'}
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#F5F2EA] uppercase tracking-wider mb-4">
            {currentLang === 'TH' ? 'บันทึกบทความ' : currentLang === 'FR' ? 'Journal' : 'Journal'}
          </h2>
          <div className="w-20 h-px bg-[#B08A3E] opacity-60 mb-6"></div>
          <p className="text-sm md:text-base text-[#AFAFA9] max-w-2xl font-light">
            {currentLang === 'TH'
              ? 'การบันทึกทางความคิดเกี่ยวกับสุนทรียะของวัตถุดิบ ความยั่งยืน และการส่งต่อภูมิปัญญาช่างโบราณ'
              : currentLang === 'FR'
              ? 'Réflexions sur l\'éthique de la matière, l\'artisanat durable et la poétique du métal ancien.'
              : 'Writings on material ethics, circular luxury philosophy, and intimate artisan conversations.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {JOURNAL_DATA.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedArticle(post)}
              className="group bg-[#191919] border border-[#F5F2EA]/10 hover:border-[#B08A3E]/60 transition-all duration-300 flex flex-col cursor-pointer p-6"
            >
              <div className="relative aspect-[16/9] overflow-hidden mb-6 bg-[#111111] border border-[#F5F2EA]/10">
                <img
                  src={post.image}
                  alt={post.title[currentLang]}
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#111111]/90 border border-[#B08A3E]/30 px-3 py-1 text-[11px] uppercase tracking-wider text-[#B08A3E] font-semibold">
                  {post.category[currentLang]}
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-[#AFAFA9] mb-3">
                <span>{post.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#B08A3E]" />
                  {post.readTime[currentLang]}
                </span>
              </div>

              <h3 className="font-serif-display text-2xl text-[#F5F2EA] mb-4 group-hover:text-[#B08A3E] transition-colors leading-snug">
                {post.title[currentLang]}
              </h3>

              <p className="text-sm text-[#AFAFA9] font-light leading-relaxed mb-6 flex-1 line-clamp-3">
                {post.excerpt[currentLang]}
              </p>

              <div className="pt-4 border-t border-[#F5F2EA]/10 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-[#B08A3E]">
                <span>{currentLang === 'TH' ? 'อ่านบทความฉบับเต็ม' : currentLang === 'FR' ? 'Lire l\'Article' : 'Read Full Essay'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </article>
          ))}
        </div>

        {/* Read Article Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 bg-[#111111]/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-[#181818] border border-[#B08A3E]/40 max-w-3xl w-full p-8 md:p-12 relative shadow-2xl my-8">
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 text-[#AFAFA9] hover:text-[#F5F2EA] cursor-pointer p-2"
              >
                <X className="w-6 h-6" />
              </button>

              <span className="text-xs text-[#B08A3E] uppercase tracking-widest font-semibold block mb-2">
                {selectedArticle.category[currentLang]} • {selectedArticle.date}
              </span>

              <h2 className="font-serif-display text-3xl md:text-4xl text-[#F5F2EA] mb-6 leading-tight">
                {selectedArticle.title[currentLang]}
              </h2>

              <div className="aspect-[21/9] overflow-hidden mb-8 bg-[#111111] border border-[#F5F2EA]/10">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title[currentLang]}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 text-[#AFAFA9] text-base font-light leading-relaxed mb-8">
                {selectedArticle.content[currentLang].map((para, pIdx) => (
                  <p key={pIdx} className="first-letter:text-3xl first-letter:text-[#B08A3E] first-letter:font-serif first-letter:float-left first-letter:mr-2">
                    {para}
                  </p>
                ))}
              </div>

              <div className="pt-6 border-t border-[#F5F2EA]/10 flex justify-end">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="bg-[#B08A3E] text-[#111111] px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-[#ebc06e]"
                >
                  {currentLang === 'TH' ? 'ปิดหน้าต่าง' : 'Close Article'}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
