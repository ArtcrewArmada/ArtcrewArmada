import React from 'react';
import { AWARENESS_METRICS } from '../data/content';
import { Language } from '../types';
import { Leaf, Award, Recycle, ShieldCheck } from 'lucide-react';

interface AwarenessSectionProps {
  currentLang: Language;
}

export const AwarenessSection: React.FC<AwarenessSectionProps> = ({ currentLang }) => {
  const cards = [
    {
      icon: <Recycle className="w-8 h-8 text-[#B08A3E]" />,
      num: `${AWARENESS_METRICS.upcycledMetalsKg} kg`,
      label: { 
        EN: 'Upcycled Salvage Repurposed', 
        TH: 'โลหะอุตสาหกรรมที่นำกลับมาแปรสภาพ', 
        FR: 'Métaux Récupérés & Revalorisés' 
      },
      detail: { 
        EN: 'Decommissioned naval chains, aerospace parts, and clockworks saved from open scrap dumps.',
        TH: 'โซ่เรือเดินสมุทร ชิ้นส่วนอากาศยาน และกลไกนาฬิกาที่ถูกกู้คืนจากลานขยะอุตสาหกรรม',
        FR: 'Chaînes marines et titane aéronautique détournés des décharges.'
      }
    },
    {
      icon: <Leaf className="w-8 h-8 text-[#B08A3E]" />,
      num: `${AWARENESS_METRICS.co2AvoidedTons} T`,
      label: { 
        EN: 'CO₂ Footprint Abated', 
        TH: 'ปริมาณก๊าซคาร์บอนที่ลดลงได้', 
        FR: 'Émissions de CO₂ Évitées' 
      },
      detail: { 
        EN: 'Eliminating the destructive smelting and chemical extraction of virgin gold and silver ore.',
        TH: 'หลีกเลี่ยงการถลุงแร่ใหม่และการใช้สารเคมีรุนแรงในการสกัดทองคำและเงินจากเหมืองเปิด',
        FR: 'En évitant l\'extraction minière destructrice de minerais vierges.'
      }
    },
    {
      icon: <Award className="w-8 h-8 text-[#B08A3E]" />,
      num: `${AWARENESS_METRICS.artisansSupported}`,
      label: { 
        EN: 'Master Craftsmen Empowered', 
        TH: 'ช่างฝีมือโบราณที่ได้รับการสนับสนุน', 
        FR: 'Maîtres Artisans Accompagnés' 
      },
      detail: { 
        EN: 'Preserving endangered heritage crafts through continuous fair-wage atelier fellowships.',
        TH: 'อนุรักษ์ศาสตร์ช่างโบราณที่ใกล้สูญหาย ผ่านการจ้างงานที่เป็นธรรมและทุนวิจัยสตูดิโอ',
        FR: 'Sauvegarde des savoir-faire rares par des bourses et rémunérations équitables.'
      }
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#B08A3E]" />,
      num: `${AWARENESS_METRICS.zeroWastePercent}%`,
      label: { 
        EN: 'Atelier Circularity Ratio', 
        TH: 'อัตราการหมุนเวียนเศษวัสดุในสตูดิโอ', 
        FR: 'Taux de Circularité Atelier' 
      },
      detail: { 
        EN: 'Micro-filings, silver dust, and cut wire are vacuum-collected and melted back into ingots.',
        TH: 'ผงตะไบ เศษฝุ่นเงิน และปลายลวดทองแดงทุกเศษเสี้ยวถูกดูดเก็บเพื่อหลอมกลับเป็นแท่งโลหะ',
        FR: 'Poussières et chutes d\'argent sont intégralement refondues.'
      }
    }
  ];

  return (
    <section id="awareness" className="bg-[#111111] py-24 px-6 md:px-16 border-t border-[#F5F2EA]/10">
      <div className="container mx-auto max-w-6xl">
        
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs text-[#B08A3E] uppercase tracking-[0.25em] font-semibold mb-3">
            {currentLang === 'TH' ? 'ธรรมาภิบาลและการตรวจสอบย้อนกลับ' : currentLang === 'FR' ? 'Impact & Traçabilité' : 'Environmental Transparency'}
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#F5F2EA] uppercase tracking-wider mb-4">
            {currentLang === 'TH' ? 'ศูนย์สร้างความตระหนักรู้' : currentLang === 'FR' ? 'Centre de Sensibilisation' : 'Awareness Center'}
          </h2>
          <div className="w-20 h-px bg-[#B08A3E] opacity-60 mb-6"></div>
          <p className="text-sm md:text-base text-[#AFAFA9] max-w-2xl font-light">
            {currentLang === 'TH'
              ? 'เราเชื่อว่าความหรูหราที่แท้จริงต้องวัดจากคุณค่าของการฟื้นคืน ไม่ใช่การผลาญทรัพยากร'
              : currentLang === 'FR'
              ? 'Le luxe véritable se mesure à l\'impact positif de la régénération, jamais à la prédation.'
              : 'Our verified environmental metrics and circular supply chain audit benchmarks.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#171616] border border-[#F5F2EA]/10 p-6 flex flex-col justify-between hover:border-[#B08A3E]/50 transition-all duration-300"
            >
              <div>
                <div className="mb-4">{card.icon}</div>
                <div className="font-serif-display text-3xl md:text-4xl text-[#B08A3E] font-bold mb-2">
                  {card.num}
                </div>
                <h3 className="text-xs uppercase tracking-wider font-semibold text-[#F5F2EA] mb-3">
                  {card.label[currentLang]}
                </h3>
              </div>
              <p className="text-xs text-[#AFAFA9] font-light leading-relaxed pt-3 border-t border-[#F5F2EA]/10">
                {card.detail[currentLang]}
              </p>
            </div>
          ))}
        </div>

        {/* Ethical Charter Statement */}
        <div className="bg-[#1a1919] p-8 md:p-10 border border-[#B08A3E]/30 text-center max-w-3xl mx-auto">
          <h3 className="font-serif-display text-2xl text-[#F5F2EA] mb-3">
            {currentLang === 'TH' ? 'กฎบัตรความโปร่งใสแห่ง ArtCrew Armada' : currentLang === 'FR' ? 'La Charte de Transparence Armada' : 'The Armada Transparency Protocol'}
          </h3>
          <p className="text-xs md:text-sm text-[#AFAFA9] font-light leading-relaxed">
            {currentLang === 'TH'
              ? 'ลูกค้าทุกท่านสามารถสแกนตราประทับ NFC หรือรหัสเฉพาะบนสูจิบัตรเพื่อดูประวัติที่มาของเศษโลหะและบันทึกชั่วโมงงานช่างของชิ้นงานนั้นๆ ได้แบบเรียลไทม์'
              : currentLang === 'FR'
              ? 'Chaque création est dotée d\'une empreinte traçable permettant d\'accéder à l\'origine exacte des métaux revalorisés et aux registres de forge.'
              : 'Each artifact is accompanied by a cryptographic ledger entry linking to the verified origin of the scrap batch and the master smith signatures.'}
          </p>
        </div>

      </div>
    </section>
  );
};
