import { useState } from "react";
import { useParams } from "react-router";
import { getTranslation } from "~/locales/dictionary";
import { PageHero } from "~/components/ui/page-hero";

const R2_BASE = "https://pub-fbe4c0b88b1c4967a575e56eb5f39ecf.r2.dev";

interface MaterialStoryItem {
  id: number;
  img: string;
  step: string;
  labelTh: string;
  labelEn: string;
  labelFr: string;
  titleTh: string;
  titleEn: string;
  titleFr: string;
  descTh: string;
  descEn: string;
  descFr: string;
}

const MATERIAL_STORY: MaterialStoryItem[] = [
  {
    id: 1,
    img: `${R2_BASE}/Material Story/Material Story1.png`,
    step: "01",
    labelTh: "รวบรวมวัสดุ",
    labelEn: "Collection",
    labelFr: "Collecte",
    titleTh: "สร้างเครือข่ายรวบรวมขยะในชุมชน (Community Collection Network)",
    titleEn: "Community Collection Network",
    titleFr: "Réseau de Collecte Communautaire",
    descTh: "สร้างเครือข่ายชุมชนเพื่อการจัดการทรัพยากรขยะเพื่อการหมุนเวียน — ได้รับความร่วมมือกับเครือข่ายคนในชุมชนในการรวบรวมและคัดแยกวัสดุเหลือใช้",
    descEn: "Mobilizing local community networks to collect and segregate discarded items, creating a grassroots circular recycling stream.",
    descFr: "Mobilisation des réseaux communautaires locaux pour collecter et trier les matériaux réutilisables.",
  },
  {
    id: 2,
    img: `${R2_BASE}/Material Story/Material Story2.png`,
    step: "02",
    labelTh: "คัดแยกวัสดุ",
    labelEn: "Sorting",
    labelFr: "Tri des Matières",
    titleTh: "คัดสรรและจำแนกประเภท (Sorting & Material Selection)",
    titleEn: "Sorting & Material Selection",
    titleFr: "Tri & Sélection des Matériaux",
    descTh: "คัดแยกวัสดุเหลือใช้อย่างระมัดระวัง โดยเฉพาะฝาดึงกระป๋องอะลูมิเนียม และวัสดุที่สามารถนำกลับมาใช้ประโยชน์ได้ เพื่อเป็นวัตถุดิบในการพัฒนาผลิตภัณฑ์",
    descEn: "Meticulously inspecting and sorting discarded aluminum pull tabs and recyclable elements into grade-pure crafting materials.",
    descFr: "Tri et inspection minutieuse des languettes de canettes d'aluminium et composants réutilisables.",
  },
  {
    id: 3,
    img: `${R2_BASE}/Material Story/Material Story3.png`,
    step: "03",
    labelTh: "เตรียมวัตถุดิบ",
    labelEn: "Preparation",
    labelFr: "Préparation",
    titleTh: "ทำความสะอาดและเตรียมผิว (Material Preparation)",
    titleEn: "Material Preparation & Sanitization",
    titleFr: "Préparation & Nettoyage",
    descTh: "ทำความสะอาด ปรับแต่ง และเตรียมวัตถุดิบให้พร้อมสำหรับกระบวนการสร้างสรรค์ ด้วยมาตรฐานคุณภาพที่เคารพทั้งวัสดุและกระบวนการ",
    descEn: "Deep cleaning, smoothing sharp edges, and conditioning upcycled materials to meet atelier luxury standards.",
    descFr: "Nettoyage en profondeur, ébavurage et préparation des composants selon les normes de l'atelier.",
  },
  {
    id: 4,
    img: `${R2_BASE}/Material Story/Material Story4.png`,
    step: "04",
    labelTh: "งานฝีมือ",
    labelEn: "Craft & Assembly",
    labelFr: "Artisanat & Tissage",
    titleTh: "รังสรรค์ด้วยงานฝีมือ (Craft & Creation)",
    titleEn: "Artisanal Craft & Transformation",
    titleFr: "Transformation Artisanale",
    descTh: "ช่างฝีมือนำวัตถุดิบที่ผ่านการคัดเลือกมาออกแบบและสร้างสรรค์ผลงานหัตถกรรมมูลค่าเพิ่ม ภายใต้แนวคิด Eco-Luxury และ Circular Economy",
    descEn: "Skilled artisans weave, connect, and transform prepared pull tabs into intricate wearable art under the Eco-Luxury ethos.",
    descFr: "Des artisans qualifiés tissent et assemblent les languettes en pièces d'art contemporain éco-luxe.",
  },
  {
    id: 5,
    img: `${R2_BASE}/Material Story/Material Story5.png`,
    step: "05",
    labelTh: "ผลิตภัณฑ์",
    labelEn: "Finished Masterpiece",
    labelFr: "Pièce Finie",
    titleTh: "ผลงานสำเร็จทรงคุณค่า (Finished Product)",
    titleEn: "Contemporary Heirloom Artifact",
    titleFr: "Artefact Contemporain",
    descTh: "ผลลัพธ์คือชิ้นงานร่วมสมัยที่มีเรื่องราว คุณค่า และความหมาย จากวัสดุที่เคยถูกมองข้าม สู่ผลงานที่ผู้คนสัมผัสได้ถึงความงามและการเคารพโลก",
    descEn: "Contemporary artifacts that carry meaningful narratives—giving once-discarded resources a refined, conscious second life.",
    descFr: "Des créations contemporaines pleines de sens, offrant une seconde vie luxueuse et durable aux matériaux.",
  },
];

export default function Upcycling() {
  const params = useParams();
  const lang = params.lang || "th";
  const t = getTranslation(lang);
  const s = (t.home as any).sections?.upcycling || {};
  const [lightbox, setLightbox] = useState<MaterialStoryItem | null>(null);

  const getLabel = (item: MaterialStoryItem) => (lang === "th" ? item.labelTh : lang === "fr" ? item.labelFr : item.labelEn);
  const getTitle = (item: MaterialStoryItem) => (lang === "th" ? item.titleTh : lang === "fr" ? item.titleFr : item.titleEn);
  const getDesc = (item: MaterialStoryItem) => (lang === "th" ? item.descTh : lang === "fr" ? item.descFr : item.descEn);

  return (
    <div className="pb-24">
      {/* Page Header */}
      <PageHero
        badge={lang === "th" ? "อัปไซคลิงและความยั่งยืน" : lang === "fr" ? "ARMADA UPCYCLING" : "ARMADA UPCYCLING"}
        title={s.title || (lang === "th" ? "A Story of Upcycling, Art & Community" : "A Story of Upcycling, Art & Community")}
        desc={
          s.desc ||
          (lang === "th"
            ? "เปลี่ยนวัสดุที่ถูกมองข้ามให้กลับมามีคุณค่า ผ่านการออกแบบ งานฝีมือ และแนวคิด Circular Economy"
            : lang === "fr"
            ? "Transformer les matériaux négligés en œuvres de valeur grâce au design, à l'artisanat et à l'Économie Circulaire."
            : "Transforming overlooked materials into new value through design, craftsmanship, and Circular Economy concepts.")
        }
      />

      {/* Philosophy Block */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="border border-[#F5F2EA]/10 p-12 bg-[#1A1A1A] flex flex-col justify-center space-y-6">
            <span className="font-sans text-[10px] font-bold tracking-widest text-[#B08A3E] uppercase">
              {lang === "th" ? "ปรัชญาการอัปไซคลิง" : lang === "fr" ? "PHILOSOPHIE UPCYCLING" : "UPCYCLING PHILOSOPHY"}
            </span>
            <h2 className="font-serif-display text-3xl font-light text-[#F5F2EA]">
              "Reuse. Return. Recreate. Revive."
            </h2>
            <p className="font-sans text-xs text-[#AFAFA9] leading-relaxed">
              {lang === "th"
                ? "เราเปลี่ยนวัสดุเหลือใช้ โดยเฉพาะฝาดึงกระป๋องอะลูมิเนียม ให้เป็นวัตถุดิบหลักในการออกแบบและสร้างสรรค์ผลิตภัณฑ์หัตถกรรมมูลค่าเพิ่ม ภายใต้แนวคิด Eco-Luxury และ Circular Economy"
                : lang === "fr"
                ? "Nous transformons les matériaux négligés, en particulier les languettes de canettes en aluminium, en ressources précieuses pour concevoir des créations artisanales selon les principes d'Éco-Luxe et d'Économie Circulaire."
                : "We transform discarded materials, particularly aluminum pull tabs, into primary resources for designing value-added handcrafted creations under the principles of Eco-Luxury and the Circular Economy."}
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#F5F2EA]/5">
              {[
                { num: "20+", label: lang === "th" ? "ปีแห่งประสบการณ์" : lang === "fr" ? "Ans d'Expérience" : "Years Experience" },
                { num: "5", label: lang === "th" ? "เครือข่ายชุมชน" : lang === "fr" ? "Réseaux Communautaires" : "Community Networks" },
                { num: "100%", label: lang === "th" ? "วัสดุอัปไซเคิล" : lang === "fr" ? "Matériaux Recyclés" : "Upcycled Materials" },
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
              {lang === "th" ? "จากวัสดุเหลือใช้" : lang === "fr" ? "Des Matériaux Recyclés" : "From Discarded Materials"}<br />
              <span className="italic text-[#B08A3E]">
                {lang === "th" ? "สู่คุณค่าที่ยั่งยืน" : lang === "fr" ? "à la Valeur Durable" : "to Sustainable Value"}
              </span>
            </h2>
            <p className="font-sans text-xs text-[#AFAFA9] leading-relaxed">
              {lang === "th"
                ? "สร้างเครือข่ายชุมชนเพื่อการจัดการทรัพยากรขยะเพื่อการหมุนเวียน — ได้รับความร่วมมือกับเครือข่ายคนในชุมชนในการรวบรวมและคัดแยกวัสดุเหลือใช้ โดยเฉพาะฝาดึงกระป๋องอะลูมิเนียม เพื่อเป็นวัตถุดิบในการพัฒนาผลิตภัณฑ์หัตถกรรมมูลค่าเพิ่ม"
                : lang === "fr"
                ? "Création d'un réseau communautaire pour la gestion circulaire des ressources — en collaboration avec les communautés locales pour collecter les languettes d'aluminium et les transformer en pièces de luxe conscient."
                : "Building grassroots community networks for circular resource management—collaborating with local artisans and families to collect and upcycle aluminum pull tabs into conscious luxury designs."}
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
                    alt={getTitle(item)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-[#111111]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-1">
                  <span className="font-sans text-[9px] font-bold text-[#B08A3E] uppercase tracking-[0.4em] block">
                    Step {item.step} — {getLabel(item)}
                  </span>
                  <h3 className="font-serif-display text-xl font-light text-[#F5F2EA] leading-snug">
                    {getTitle(item)}
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
                    alt={getTitle(item)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-[#111111]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1">
                  <span className="font-sans text-[9px] font-bold text-[#B08A3E] uppercase tracking-[0.4em] block">
                    Step {item.step} — {getLabel(item)}
                  </span>
                  <h3 className="font-serif-display text-base font-light text-[#F5F2EA] leading-snug">
                    {getTitle(item)}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Process tagline */}
          <div className="border border-[#B08A3E]/20 p-8 text-center bg-[#1A1A1A]">
            <p className="font-serif-display text-lg md:text-2xl text-[#F5F2EA] italic">
              {lang === "th"
                ? "“จากวัสดุเหลือใช้สู่งานหัตถศิลป์ล้ำค่า — ทุกชิ้นงานบอกเล่าเรื่องราวในอดีตที่ได้รับการชุบชีวิตใหม่อย่างงดงาม”"
                : lang === "fr"
                ? "« Du déchet à l'émerveillement — Chaque création porte la mémoire de son passé réinventé. »"
                : "“From Waste to Wonder — Every piece carries the story of its past, reborn into something beautiful.”"}
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
              ✕ {lang === "th" ? "ปิด" : lang === "fr" ? "Fermer" : "Close"}
            </button>
            <img
              src={lightbox.img}
              alt={getTitle(lightbox)}
              className="w-full object-contain max-h-[65vh]"
            />
            <div className="p-8 space-y-2">
              <span className="font-sans text-[9px] font-bold text-[#B08A3E] uppercase tracking-widest block">
                Step {lightbox.step} — {getLabel(lightbox)}
              </span>
              <h2 className="font-serif-display text-xl font-light text-[#F5F2EA]">
                {getTitle(lightbox)}
              </h2>
              <p className="font-sans text-xs text-[#AFAFA9] leading-relaxed">
                {getDesc(lightbox)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
