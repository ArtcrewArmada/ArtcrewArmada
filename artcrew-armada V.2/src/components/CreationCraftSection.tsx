import React, { useState } from 'react';
import { Language } from '../types';
import { Sparkles, Layers, Hammer, Eye } from 'lucide-react';

interface CreationCraftSectionProps {
  currentLang: Language;
}

export const CreationCraftSection: React.FC<CreationCraftSectionProps> = ({ currentLang }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const craftMethods = [
    {
      title: { EN: 'Micro Cire-Perdue Casting', TH: 'การหล่อขี้ผึ้งสูญหายขนาดจิ๋ว', FR: 'Fonte à la Cire Perdue Micro' },
      subtitle: { EN: 'Ancient Mesopotamian lost-wax technique', TH: 'เทคนิคขี้ผึ้งโบราณแห่งเมโสโปเตเมีย', FR: 'Technique mésopotamienne ancestrale' },
      desc: {
        EN: 'Each talisman is carved in organic beeswax harvested from local wild hives. Molten recycled 925 silver is poured into ceramic shell molds under charcoal flame.',
        TH: 'เครื่องรางแต่ละชิ้นถูกแกะสลักในขี้ผึ้งธรรมชาติจากรวงผึ้งป่า เทโลหะเงิน 925 รีไซเคิลหลอมเหลวลงในเบ้าหล่อเซรามิกภายใต้เปลวไฟถ่านไม้ธรรมชาติ',
        FR: 'Chaque talisman est sculpté dans la cire d\'abeille sauvage. L\'argent recyclé en fusion est coulé dans des moules céramiques sous flamme de charbon.'
      },
      image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
      specs: [
        { label: { EN: 'Temperature', TH: 'อุณหภูมิหลอม', FR: 'Température' }, val: '961.8 °C' },
        { label: { EN: 'Hand Hours', TH: 'ชั่วโมงงานมือ', FR: 'Heures d\'Artisanat' }, val: '45 - 90 hrs' },
        { label: { EN: 'Alloy Composition', TH: 'ส่วนผสมโลหะ', FR: 'Alliage' }, val: '92.5% Ag / 7.5% Cu' }
      ]
    },
    {
      title: { EN: 'Byzantine Link Interlock', TH: 'การถักโซ่เกราะไบแซนไทน์', FR: 'Entrelacs Byzantins & Maille' },
      subtitle: { EN: '4-in-1 European maille weave', TH: 'การประสานลวดลายเกราะ 4-in-1 ยุโรป', FR: 'Tissage d\'armure européenne' },
      desc: {
        EN: 'Individual links coiled from reclaimed industrial copper wire are hand-clipped and woven without solder, allowing dynamic liquid drape against skin.',
        TH: 'ห่วงแต่ละชิ้นที่ม้วนจากขดลวดทองแดงอุตสาหกรรมรีไซเคิลถูกตัดและถักประสานด้วยมือล้วนโดยไม่ต้องใช้ตะกั่วบัดกรี ให้สัมผัสพลิ้วไหวแนบเนื้อ',
        FR: 'Des maillons façonnés à partir de fils de cuivre industriels sont assemblés manuellement sans soudure pour une souplesse absolue.'
      },
      image: 'https://images.unsplash.com/photo-1536633135910-36669256498e?auto=format&fit=crop&q=80&w=800',
      specs: [
        { label: { EN: 'Link Diameter', TH: 'ขนาดเส้นผ่านศูนย์กลางห่วง', FR: 'Diamètre Maillon' }, val: '1.2 mm' },
        { label: { EN: 'Ring Count', TH: 'จำนวนห่วงต่อชิ้น', FR: 'Nombre d\'Anneaux' }, val: '4,500 - 12,000' },
        { label: { EN: 'Joint Integrity', TH: 'ความทนทานต่อแรงดึง', FR: 'Résistance Traction' }, val: '120 kg/cm²' }
      ]
    },
    {
      title: { EN: 'Mokume-Gane Diffusion Welding', TH: 'โมคุเมะ-กาเนะ การเชื่อมประสานชั้นโลหะ', FR: 'Soudure par Diffusion Mokume-Gane' },
      subtitle: { EN: '17th Century Japanese wood-grain alloy', TH: 'โลหะผสมลายไม้ญี่ปุ่นศตวรรษที่ 17', FR: 'Alliage motif grain de bois japonais XVIIe' },
      desc: {
        EN: 'Up to 32 alternating sheets of reclaimed brass, bronze, and silver are fused through heat and pressure without flux, creating natural organic topography.',
        TH: 'แผ่นทองเหลือง สำริด และเงินรีไซเคิลกว่า 32 ชั้น ถูกหลอมประสานด้วยความร้อนและแรงอัดโดยไม่ใช้น้ำยาประสาน เกิดเป็นลวดลายภูมิประเทศธรรมชาติ',
        FR: 'Jusqu\'à 32 feuilles alternées de laiton, bronze et argent fusionnées sous haute pression pour créer des motifs de grain de bois.'
      },
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
      specs: [
        { label: { EN: 'Layer Count', TH: 'จำนวนชั้นโลหะ', FR: 'Couches' }, val: '24 - 36 Layers' },
        { label: { EN: 'Forging Cycles', TH: 'รอบการตีขึ้นรูป', FR: 'Cycles de Forge' }, val: '14 Iterations' },
        { label: { EN: 'Surface Finish', TH: 'การเก็บผิวสัมผัส', FR: 'Finition' }, val: 'Liver of Sulfur Patina' }
      ]
    }
  ];

  const currentMethod = craftMethods[activeTab];

  return (
    <section id="creation" className="bg-[#131313] py-24 px-6 md:px-16 border-t border-[#F5F2EA]/10">
      <div className="container mx-auto max-w-6xl">
        
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs text-[#B08A3E] uppercase tracking-[0.25em] font-semibold mb-3">
            {currentLang === 'TH' ? 'ศาสตร์แห่งงานหัตถศิลป์ชั้นสูง' : currentLang === 'FR' ? 'Haute Facture & Traditions' : 'Atelier Metallurgy & Ancient Joinery'}
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#F5F2EA] uppercase tracking-wider mb-4">
            {currentLang === 'TH' ? 'การสร้างสรรค์และงานช่าง' : currentLang === 'FR' ? 'Création & Artisanat' : 'Creation & Craft'}
          </h2>
          <div className="w-20 h-px bg-[#B08A3E] opacity-60"></div>
        </div>

        {/* Technique Switcher Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {craftMethods.map((method, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 text-xs uppercase tracking-widest transition-all cursor-pointer border ${
                activeTab === idx
                  ? 'bg-[#B08A3E] text-[#111111] border-[#B08A3E] font-bold shadow-lg'
                  : 'bg-[#191919] text-[#AFAFA9] border-[#F5F2EA]/10 hover:border-[#B08A3E]/60 hover:text-[#F5F2EA]'
              }`}
            >
              {method.title[currentLang]}
            </button>
          ))}
        </div>

        {/* Method Detail Card */}
        <div className="bg-[#171616] border border-[#F5F2EA]/15 grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-2xl">
          <div className="lg:col-span-6 relative min-h-[350px] lg:min-h-[440px] bg-[#111111]">
            <img
              src={currentMethod.image}
              alt={currentMethod.title[currentLang]}
              className="w-full h-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171616] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#171616]" />
            <div className="absolute top-4 left-4 bg-[#111111]/80 px-3 py-1 border border-[#B08A3E]/40 text-[#B08A3E] text-[11px] uppercase tracking-widest font-semibold">
              {currentMethod.subtitle[currentLang]}
            </div>
          </div>

          <div className="lg:col-span-6 p-8 md:p-12 flex flex-col justify-center">
            <h3 className="font-serif-display text-2xl md:text-3xl text-[#F5F2EA] mb-4">
              {currentMethod.title[currentLang]}
            </h3>
            <p className="text-sm md:text-base text-[#AFAFA9] font-light leading-relaxed mb-8">
              {currentMethod.desc[currentLang]}
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#F5F2EA]/10 mb-6">
              {currentMethod.specs.map((spec, sIdx) => (
                <div key={sIdx} className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-[#AFAFA9] mb-1">
                    {spec.label[currentLang]}
                  </span>
                  <span className="font-serif-display text-sm md:text-base text-[#B08A3E] font-medium">
                    {spec.val}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs text-[#F5F2EA]/80 italic">
              <Sparkles className="w-4 h-4 text-[#B08A3E]" />
              <span>
                {currentLang === 'TH' 
                  ? 'ชิ้นงานทุกชิ้นมีตราประทับช่างและสูจิบัตรกำกับเฉพาะ' 
                  : currentLang === 'FR'
                  ? 'Chaque pièce porte le poinçon d\'atelier et son certificat'
                  : 'Every piece is stamped with the Armada hallmark and individual provenance.'}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
