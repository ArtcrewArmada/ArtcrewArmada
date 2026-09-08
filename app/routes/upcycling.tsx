import { useState } from "react";
import { useParams } from "react-router";
import { getTranslation } from "~/locales/dictionary";
import { PageHero } from "~/components/ui/page-hero";

const R2_BASE = "https://pub-fbe4c0b88b1c4967a575e56eb5f39ecf.r2.dev";

const MATERIAL_STORY = [
  {
    id: 1,
    img: `${R2_BASE}/Material Story/Material Story1.png`,
    step: "01",
    label: "รวบรวมวัสดุ",
    title: "Community Collection Network",
    desc: "สร้างเครือข่ายชุมชนเพื่อการจัดการทรัพยากรขยะเพื่อการหมุนเวียน — ได้รับความร่วมมือกับเครือข่ายคนในชุมชนในการรวบรวมและคัดแยกวัสดุเหลือใช้",
  },
  {
    id: 2,
    img: `${R2_BASE}/Material Story/Material Story2.png`,
    step: "02",
    label: "คัดแยกวัสดุ",
    title: "Sorting & Material Selection",
    desc: "คัดแยกวัสดุเหลือใช้อย่างระมัดระวัง โดยเฉพาะฝาดึงกระป๋องอะลูมิเนียม และวัสดุที่สามารถนำกลับมาใช้ประโยชน์ได้ เพื่อเป็นวัตถุดิบในการพัฒนาผลิตภัณฑ์",
  },
  {
    id: 3,
    img: `${R2_BASE}/Material Story/Material Story3.png`,
    step: "03",
    label: "เตรียมวัตถุดิบ",
    title: "Material Preparation",
    desc: "ทำความสะอาด ปรับแต่ง และเตรียมวัตถุดิบให้พร้อมสำหรับกระบวนการสร้างสรรค์ ด้วยมาตรฐานคุณภาพที่เคารพทั้งวัสดุและกระบวนการ",
  },
  {
    id: 4,
    img: `${R2_BASE}/Material Story/Material Story4.png`,
    step: "04",
    label: "งานฝีมือ",
    title: "Craft & Creation",
    desc: "ช่างฝีมือนำวัตถุดิบที่ผ่านการคัดเลือกมาออกแบบและสร้างสรรค์ผลงานหัตถกรรมมูลค่าเพิ่ม ภายใต้แนวคิด Eco-Luxury และ Circular Economy",
  },
  {
    id: 5,
    img: `${R2_BASE}/Material Story/Material Story5.png`,
    step: "05",
    label: "ผลิตภัณฑ์",
    title: "Finished Product",
    desc: "ผลลัพธ์คือชิ้นงานร่วมสมัยที่มีเรื่องราว คุณค่า และความหมาย จากวัสดุที่เคยถูกมองข้าม สู่ผลงานที่ผู้คนสัมผัสได้ถึงความงามและการเคารพโลก",
  },
];

export default function Upcycling() {
  const params = useParams();
  const lang = params.lang || "th";
  const t = getTranslation(lang);
  const s = (t.home as any).sections?.upcycling || {};
  const [lightbox, setLightbox] = useState<typeof MATERIAL_STORY[0] | null>(null);

  return (
    <div className="pb-24">
      {/* Page Header */}
      <PageHero
        badge="ARMADA UPCYCLING"
        title={s.title || "A Story of Upcycling, Art & Community"}
        desc={s.desc || "เปลี่ยนวัสดุที่ถูกมองข้ามให้กลับมามีคุณค่า ผ่านการออกแบบ งานฝีมือ และแนวคิด Circular Economy"}
      />

      {/* Philosophy Block */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="border border-[#F5F2EA]/10 p-12 bg-[#1A1A1A] flex flex-col justify-center space-y-6">
            <span className="font-sans text-[10px] font-bold tracking-widest text-[#B08A3E] uppercase">
              Upcycling Philosophy
            </span>
            <h2 className="font-serif-display text-3xl font-light text-[#F5F2EA]">
              "Reuse. Return. Recreate. Revive."
            </h2>
            <p className="font-sans text-xs text-[#AFAFA9] leading-relaxed">
              เราเปลี่ยนวัสดุเหลือใช้ โดยเฉพาะฝาดึงกระป๋องอะลูมิเนียม ให้เป็นวัตถุดิบหลักในการออกแบบและสร้างสรรค์ผลิตภัณฑ์หัตถกรรมมูลค่าเพิ่ม ภายใต้แนวคิด Eco-Luxury และ Circular Economy
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#F5F2EA]/5">
              {[
                { num: "20+", label: "ปีแห่งประสบการณ์" },
                { num: "5", label: "เครือข่ายชุมชน" },
                { num: "100%", label: "Upcycled Materials" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif-display text-2xl text-[#B08A3E] font-light">{stat.num}</p>
                  <p className="font-sans text-[9px] text-[#AFAFA9]/60 uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-[#F5F2EA]/10 bg-[#1A1A1A] flex items-center justify-center p-8 min-h-[300px]">
            <img
              src={`${R2_BASE}/armada-atelier.jpg`}
              alt="ARMADA L'ATELIER Trademark Logo"
              className="w-64 h-64 object-contain"
            />
          </div>
        </div>
      </div>

      {/* ─── Material Story Section ─── */}
      <div className="bg-[#151515] border-y border-[#F5F2EA]/5 py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-16">

          {/* Section Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="font-sans text-[10px] font-bold tracking-[0.45em] uppercase text-[#B08A3E] block">
              Material Story
            </span>
            <h2 className="font-serif-display font-light text-3xl md:text-5xl text-[#F5F2EA]">
              จากวัสดุเหลือใช้<br />
              <span className="italic text-[#B08A3E]">สู่คุณค่าที่ยั่งยืน</span>
            </h2>
            <p className="font-sans text-xs text-[#AFAFA9] leading-relaxed">
              สร้างเครือข่ายชุมชนเพื่อการจัดการทรัพยากรขยะเพื่อการหมุนเวียน — ได้รับความร่วมมือกับเครือข่ายคนในชุมชน
              ในการรวบรวมและคัดแยกวัสดุเหลือใช้ โดยเฉพาะ <strong className="text-[#F5F2EA]">ฝาดึงกระป๋องอะลูมิเนียม</strong> และวัสดุที่สามารถนำกลับมาใช้ประโยชน์ได้
              เพื่อเป็นวัตถุดิบในการพัฒนาผลิตภัณฑ์หัตถกรรมมูลค่าเพิ่ม
            </p>
          </div>

          {/* Timeline Flow: Step 1-2 large, 3-5 below */}
          {/* Row 1: Steps 1-2 side by side (large) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MATERIAL_STORY.slice(0, 2).map((item) => (
              <div
                key={item.id}
                onClick={() => setLightbox(item)}
                className="group relative overflow-hidden border border-[#F5F2EA]/10 hover:border-[#B08A3E]/60 transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#131313]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-[#111111]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-1">
                  <span className="font-sans text-[9px] font-bold text-[#B08A3E] uppercase tracking-[0.4em] block">
                    Step {item.step} — {item.label}
                  </span>
                  <h3 className="font-serif-display text-xl font-light text-[#F5F2EA] leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Steps 3-5 (three columns) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MATERIAL_STORY.slice(2).map((item) => (
              <div
                key={item.id}
                onClick={() => setLightbox(item)}
                className="group relative overflow-hidden border border-[#F5F2EA]/10 hover:border-[#B08A3E]/60 transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-square overflow-hidden bg-[#131313]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-[#111111]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1">
                  <span className="font-sans text-[9px] font-bold text-[#B08A3E] uppercase tracking-[0.4em] block">
                    Step {item.step} — {item.label}
                  </span>
                  <h3 className="font-serif-display text-base font-light text-[#F5F2EA] leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Process tagline */}
          <div className="border border-[#B08A3E]/20 p-8 text-center bg-[#1A1A1A]">
            <p className="font-serif-display text-lg md:text-2xl text-[#F5F2EA] italic">
              "From Waste to Wonder — Every piece carries the story of its past, reborn into something beautiful."
            </p>
            <div className="w-12 h-[1px] bg-[#B08A3E] mx-auto mt-6" />
            <p className="font-sans text-[10px] text-[#AFAFA9]/60 uppercase tracking-widest mt-4">
              ARTCREW ARMADA — Circular Economy & Conscious Craft
            </p>
          </div>

        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-[#111111]/95 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#1A1A1A] border border-[#F5F2EA]/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 z-10 font-sans text-[10px] font-bold text-[#AFAFA9] hover:text-[#F5F2EA] uppercase tracking-widest cursor-pointer"
            >
              ✕ Close
            </button>
            <img
              src={lightbox.img}
              alt={lightbox.title}
              className="w-full object-contain max-h-[65vh]"
            />
            <div className="p-8 space-y-2">
              <span className="font-sans text-[9px] font-bold text-[#B08A3E] uppercase tracking-widest block">
                Step {lightbox.step} — {lightbox.label}
              </span>
              <h2 className="font-serif-display text-xl font-light text-[#F5F2EA]">
                {lightbox.title}
              </h2>
              <p className="font-sans text-xs text-[#AFAFA9] leading-relaxed">
                {lightbox.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
