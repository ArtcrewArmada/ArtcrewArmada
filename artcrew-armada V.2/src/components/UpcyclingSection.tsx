import React, { useState } from 'react';
import { Language } from '../types';
import { Recycle, ArrowRightLeft, Sparkles, CheckCircle2 } from 'lucide-react';

interface UpcyclingSectionProps {
  currentLang: Language;
  onExploreShop: () => void;
}

export const UpcyclingSection: React.FC<UpcyclingSectionProps> = ({ currentLang, onExploreShop }) => {
  const [selectedStream, setSelectedStream] = useState<number>(0);

  const streams = [
    {
      title: { EN: 'Maritime Chainmail to Couture Armor', TH: 'โซ่สมอเรือเดินสมุทรสู่เกราะคูตูร์หรูหรา', FR: 'Chaînes Maritimes en Parures Couture' },
      source: { EN: 'Decommissioned naval mooring gear (Bangkok & Marseille)', TH: 'โซ่จอดเรือรบและเรือสินค้าปลดประจำการ (กรุงเทพฯ & มาร์เซย์)', FR: 'Équipements navals déclassés (Bangkok & Marseille)' },
      process: { 
        EN: 'Desalinated, annealed in hydrogen kiln, cold-drawn into 0.8mm micro-wire, hand-woven into fluid wearable mesh.',
        TH: 'กำจัดคราบเกลือ อบอ่อนในเตาไฮโดรเจน รีดเย็นเป็นลวดขนาดจิ๋ว 0.8 มม. และถักทอด้วยมือเป็นผืนตาข่ายพลิ้วไหว',
        FR: 'Désalinisation, recuit sous hydrogène, tréfilage à froid en micro-fil de 0.8mm et tissage fluide.'
      },
      yieldRatio: '94.2%',
      co2Saved: '42 kg / piece',
      image: 'https://images.unsplash.com/photo-1536633135910-36669256498e?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: { EN: 'Aerospace Turbine Blades to Sculptural Altars', TH: 'ใบพัดกังหันเจ็ตสู่งานประติมากรรมแท่นบูชา', FR: 'Aubes de Turbines en Autels Sculpturaux' },
      source: { EN: 'Retired commercial jet engines (Titanium Grade 5 & Inconel)', TH: 'เครื่องยนต์ไอพ่นพาณิชย์ปลดระวาง (ไทเทเนียม เกรด 5 & อินโคเนล)', FR: 'Moteurs d\'avions retirés du service (Titane Grade 5)' },
      process: { 
        EN: 'Precision water-jet slicing, flame heat-patination revealing iridescent blues and golds, mounted on fossilized oak.',
        TH: 'ตัดด้วยพลังน้ำแรงดันสูง (Water-jet), พ่นไฟสร้างเฉดสีรุ้งเหลือบทองและน้ำเงินบนเนื้อไทเทเนียม วางบนฐานไม้โอ๊กดึกดำบรรพ์',
        FR: 'Découpe au jet d\'eau, patine à la flamme révélant des reflets irisés or et bleu sur chêne fossilisé.'
      },
      yieldRatio: '89.0%',
      co2Saved: '115 kg / piece',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: { EN: 'Antique Clockwork Escapements to Cuffs', TH: 'จักรกลนาฬิกาโบราณสู่กำไลข้อมืออันวิจิตร', FR: 'Mouvements d\'Horlogerie en Manchettes' },
      source: { EN: '19th century pocket watch movements & pendulum gears', TH: 'กลไกนาฬิกาพกและเฟืองลูกตุ้มศตวรรษที่ 19', FR: 'Mouvements de montres à gousset et pendules du XIXe' },
      process: { 
        EN: 'Ultrasonic micro-degreasing, individual micro-riveting onto hand-hammered blackened steel plates.',
        TH: 'ล้างทำความสะอาดด้วยคลื่นอัลตราโซนิก ย้ำหมุดไมโครตรึงแต่ละเฟืองบนแผ่นเหล็กดำตีมือ',
        FR: 'Dégraissage ultrasonique et micro-rivetage sur acier noirci battu à la main.'
      },
      yieldRatio: '98.5%',
      co2Saved: '12 kg / piece',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const currentStream = streams[selectedStream];

  return (
    <section id="upcycling" className="bg-[#111111] py-24 px-6 md:px-16 border-t border-[#F5F2EA]/10">
      <div className="container mx-auto max-w-6xl">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs text-[#B08A3E] uppercase tracking-[0.25em] font-semibold mb-3 border border-[#B08A3E]/30 px-3.5 py-1.5 bg-[#171616]">
            <Recycle className="w-4 h-4" />
            <span>{currentLang === 'TH' ? 'ระบบหมุนเวียนวัตถุดิบ 100%' : currentLang === 'FR' ? 'Transformation Circulaire' : 'Circular Material Genesis'}</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#F5F2EA] uppercase tracking-wider mb-4">
            {currentLang === 'TH' ? 'อัพไซเคิล อาร์มาดา' : currentLang === 'FR' ? 'ARMADA Upcycling' : 'ARMADA Upcycling'}
          </h2>
          <p className="text-sm md:text-base text-[#AFAFA9] max-w-2xl font-light">
            {currentLang === 'TH' 
              ? 'เรามองไม่เห็นขยะ มีเพียงสสารล้ำค่าที่รอคอยการชุบชีวิตโดยช่างฝีมือชั้นครู'
              : currentLang === 'FR'
              ? 'Nous ne voyons aucun déchet, seulement des matières nobles en attente de renaissance.'
              : 'Transforming industrial salvage into museum-caliber luxury artifacts with zero ecological compromise.'}
          </p>
        </div>

        {/* Stream Selector Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {streams.map((stream, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedStream(idx)}
              className={`p-5 text-left border transition-all cursor-pointer flex flex-col justify-between min-h-[110px] ${
                selectedStream === idx
                  ? 'bg-[#201f1f] border-[#B08A3E] shadow-xl'
                  : 'bg-[#141414] border-[#F5F2EA]/10 hover:border-[#B08A3E]/40'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] uppercase font-bold tracking-widest ${selectedStream === idx ? 'text-[#B08A3E]' : 'text-[#AFAFA9]'}`}>
                  Stream 0{idx + 1}
                </span>
                {selectedStream === idx && <Sparkles className="w-4 h-4 text-[#B08A3E]" />}
              </div>
              <h4 className="font-serif-display text-lg text-[#F5F2EA] line-clamp-2">
                {stream.title[currentLang]}
              </h4>
            </button>
          ))}
        </div>

        {/* Detail Visual Transformation Box */}
        <div className="bg-[#181818] border border-[#F5F2EA]/15 p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B08A3E] font-bold block mb-1">
                {currentLang === 'TH' ? 'แหล่งที่มาของวัตถุดิบ' : currentLang === 'FR' ? 'Provenance de la Matière' : 'Raw Origin Provenance'}
              </span>
              <p className="text-sm text-[#F5F2EA] font-medium">
                {currentStream.source[currentLang]}
              </p>
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-[#B08A3E] font-bold block mb-1">
                {currentLang === 'TH' ? 'กรรมวิธีเปลี่ยนรูปชั้นสูง' : currentLang === 'FR' ? 'Processus de Transformation' : 'Transformation Process'}
              </span>
              <p className="text-sm text-[#AFAFA9] leading-relaxed font-light">
                {currentStream.process[currentLang]}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#F5F2EA]/10">
              <div className="bg-[#111111] p-4 border border-[#F5F2EA]/10">
                <span className="text-[10px] uppercase tracking-widest text-[#AFAFA9] block mb-1">
                  {currentLang === 'TH' ? 'อัตรากู้คืนเนื้อโลหะ' : currentLang === 'FR' ? 'Rendement Matière' : 'Material Yield'}
                </span>
                <span className="font-serif-display text-2xl text-[#B08A3E] font-bold">
                  {currentStream.yieldRatio}
                </span>
              </div>
              <div className="bg-[#111111] p-4 border border-[#F5F2EA]/10">
                <span className="text-[10px] uppercase tracking-widest text-[#AFAFA9] block mb-1">
                  {currentLang === 'TH' ? 'ลดการปล่อยคาร์บอน' : currentLang === 'FR' ? 'CO₂ Évité' : 'CO₂ Abated'}
                </span>
                <span className="font-serif-display text-2xl text-[#B08A3E] font-bold">
                  {currentStream.co2Saved}
                </span>
              </div>
            </div>

            <button
              onClick={onExploreShop}
              className="mt-4 inline-flex items-center gap-2 bg-[#B08A3E] text-[#111111] px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#ebc06e] transition-colors cursor-pointer"
            >
              <span>{currentLang === 'TH' ? 'ชมผลงานอัพไซเคิล' : currentLang === 'FR' ? 'Voir les Créations' : 'Explore Upcycled Pieces'}</span>
              <ArrowRightLeft className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:col-span-6 relative aspect-square md:aspect-4/3 overflow-hidden bg-[#111111] border border-[#F5F2EA]/15">
            <img
              src={currentStream.image}
              alt={currentStream.title[currentLang]}
              className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 bg-[#111111]/85 border border-[#B08A3E]/30 px-3 py-2 text-xs text-[#F5F2EA]">
              <span className="text-[#B08A3E] font-semibold">100% Traceable</span> • Circular Certified
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
