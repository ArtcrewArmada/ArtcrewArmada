import { useState } from "react";
import { useParams } from "react-router";
import { getTranslation } from "~/locales/dictionary";
import { Button } from "~/components/ui/button";
import { PageHero } from "~/components/ui/page-hero";

const R2_BASE = "https://pub-fbe4c0b88b1c4967a575e56eb5f39ecf.r2.dev/Products";

const PRODUCTS = [
  { id: 1, img: "armada1.jpg",  title: "ARMADA No.01", material: "Upcycled Aluminum Pull-tab", category: "upcycling" },
  { id: 2, img: "armada2.jpg",  title: "ARMADA No.02", material: "Chainmaille & Metal Art", category: "jewelry" },
  { id: 3, img: "armada3.jpg",  title: "ARMADA No.03", material: "Macramé & Fiber Art", category: "fiber" },
  { id: 4, img: "armada4.jpg",  title: "ARMADA No.04", material: "Upcycled Aluminum Pull-tab", category: "upcycling" },
  { id: 5, img: "armada5.jpg",  title: "ARMADA No.05", material: "Bead Weaving & Wire", category: "jewelry" },
  { id: 6, img: "armada6.jpg",  title: "ARMADA No.06", material: "Macramé & Natural Fiber", category: "fiber" },
  { id: 7, img: "armada7.jpg",  title: "ARMADA No.07", material: "Upcycled Aluminum Pull-tab", category: "upcycling" },
  { id: 8, img: "armada8.jpg",  title: "ARMADA No.08", material: "Wirework & Metalwork", category: "jewelry" },
  { id: 9, img: "armada9.jpg",  title: "ARMADA No.09", material: "Macramé & Knotting", category: "fiber" },
  { id: 10, img: "armada10.jpg", title: "ARMADA No.10", material: "Upcycled Aluminum Pull-tab", category: "upcycling" },
  { id: 11, img: "armada11.jpg", title: "ARMADA No.11", material: "Chainmaille Metalwork", category: "jewelry" },
  { id: 12, img: "armada12.jpg", title: "ARMADA No.12", material: "Natural Fiber & Textile", category: "fiber" },
  { id: 13, img: "armada13.jpg", title: "ARMADA No.13", material: "Upcycled Aluminum Pull-tab", category: "upcycling" },
  { id: 14, img: "armada14.jpg", title: "ARMADA No.14", material: "Bead & Wire Weaving", category: "jewelry" },
  { id: 15, img: "armada15.jpg", title: "ARMADA No.15", material: "Macramé & Rope Art", category: "fiber" },
  { id: 16, img: "armada16.jpg", title: "ARMADA No.16", material: "Upcycled Aluminum Pull-tab", category: "upcycling" },
  { id: 17, img: "armada17.jpg", title: "ARMADA No.17", material: "Chainmaille & Ornament", category: "jewelry" },
  { id: 18, img: "armada18.jpg", title: "ARMADA No.18", material: "Natural Fiber Textile", category: "fiber" },
  { id: 19, img: "armada19.jpg", title: "ARMADA No.19", material: "Upcycled Aluminum Pull-tab", category: "upcycling" },
  { id: 20, img: "armada20.jpg", title: "ARMADA No.20", material: "Wirework & Bead Art", category: "jewelry" },
  { id: 21, img: "armada21.jpg", title: "ARMADA No.21", material: "Macramé & Conscious Craft", category: "fiber" },
];

const FILTERS = [
  { key: "all", label: "All Works" },
  { key: "upcycling", label: "Upcycling" },
  { key: "jewelry", label: "Jewelry & Metal" },
  { key: "fiber", label: "Fiber & Macramé" },
];

export default function Shop() {
  const params = useParams();
  const lang = params.lang || "th";
  const t = getTranslation(lang);
  const s = (t.home as any).sections?.shop || {};

  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState<typeof PRODUCTS[0] | null>(null);

  const filtered = filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  return (
    <div className="pb-24">
      <PageHero
        badge="SHOP"
        title={s.title || "Objects with Meaning"}
        desc={s.desc || "เลือกชมผลงานที่สร้างขึ้นจากฝีมือ ความคิดสร้างสรรค์ และเรื่องราวเบื้องหลังของแต่ละชิ้นงาน"}
      />

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3 items-center border-b border-[#F5F2EA]/10 pb-8">
          <span className="font-sans text-[10px] font-bold tracking-widest uppercase text-[#AFAFA9]/60 mr-2">
            Filter:
          </span>
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`font-sans text-[10px] font-bold tracking-widest uppercase px-4 py-2 border transition-all duration-200 cursor-pointer ${
                filter === f.key
                  ? "border-[#B08A3E] text-[#B08A3E] bg-[#B08A3E]/10"
                  : "border-[#F5F2EA]/10 text-[#AFAFA9] hover:border-[#B08A3E]/50 hover:text-[#F5F2EA]"
              }`}
            >
              {f.label}
            </button>
          ))}
          <span className="ml-auto font-sans text-[10px] text-[#AFAFA9]/40 tracking-wider">
            {filtered.length} works
          </span>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelected(product)}
              className="group border border-[#F5F2EA]/10 bg-[#1A1A1A] overflow-hidden cursor-pointer hover:border-[#B08A3E]/60 transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden bg-[#131313]">
                <img
                  src={`${R2_BASE}/${product.img}`}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              {/* Info */}
              <div className="p-4 space-y-1">
                <span className="font-sans text-[9px] font-bold tracking-widest text-[#B08A3E] uppercase block">
                  {product.material}
                </span>
                <h3 className="font-serif-display text-base font-light text-[#F5F2EA] leading-snug">
                  {product.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Inquiry CTA */}
        <div className="border border-[#B08A3E]/20 bg-[#1A1A1A] p-10 text-center space-y-4 mt-16">
          <span className="font-sans text-[10px] font-bold tracking-[0.45em] uppercase text-[#B08A3E] block">
            Bespoke & Commission
          </span>
          <h3 className="font-serif-display text-2xl md:text-3xl font-light text-[#F5F2EA]">
            สนใจสั่งทำพิเศษหรือขอราคา?
          </h3>
          <p className="font-sans text-xs text-[#AFAFA9] leading-relaxed max-w-lg mx-auto">
            ติดต่อเราโดยตรงเพื่อสอบถามรายละเอียด ราคา หรือออกแบบชิ้นงาน Bespoke เฉพาะสำหรับคุณ
          </p>
          <a
            href={`/${lang}/contact`}
            className="inline-block mt-2 font-sans text-[10px] font-bold tracking-widest uppercase px-8 py-3 border border-[#B08A3E] text-[#B08A3E] hover:bg-[#B08A3E] hover:text-[#111111] transition-all duration-200"
          >
            ติดต่อสั่งงาน →
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-[#111111]/95 flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#1A1A1A] border border-[#F5F2EA]/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 font-sans text-[10px] font-bold text-[#AFAFA9] hover:text-[#F5F2EA] uppercase tracking-widest cursor-pointer"
            >
              ✕ Close
            </button>
            <img
              src={`${R2_BASE}/${selected.img}`}
              alt={selected.title}
              className="w-full object-contain max-h-[70vh]"
            />
            <div className="p-8 space-y-3">
              <span className="font-sans text-[10px] font-bold tracking-widest text-[#B08A3E] uppercase block">
                {selected.material}
              </span>
              <h2 className="font-serif-display text-2xl font-light text-[#F5F2EA]">
                {selected.title}
              </h2>
              <p className="font-sans text-xs text-[#AFAFA9] leading-relaxed">
                งานสร้างสรรค์จากฝีมือช่างของ ArtcrewArmada — ผลิตด้วยใจ คุณค่าทุกชิ้นมาจากกระบวนการที่เคารพวัสดุและผู้คน
              </p>
              <a
                href={`/${lang}/contact`}
                className="inline-block mt-4 font-sans text-[10px] font-bold tracking-widest uppercase px-6 py-2.5 border border-[#B08A3E] text-[#B08A3E] hover:bg-[#B08A3E] hover:text-[#111111] transition-all duration-200"
              >
                สอบถามราคา / สั่งงาน →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
