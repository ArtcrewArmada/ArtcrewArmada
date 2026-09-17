import { useState } from "react";
import { useParams, Link } from "react-router";
import { getTranslation } from "~/locales/dictionary";
import { PageHero } from "~/components/ui/page-hero";

const R2_BASE = "https://pub-fbe4c0b88b1c4967a575e56eb5f39ecf.r2.dev/Products";

interface ProductItem {
  id: number;
  img: string;
  title: string;
  materialTh: string;
  materialEn: string;
  materialFr: string;
  category: "upcycling" | "jewelry" | "fiber";
}

const PRODUCTS: ProductItem[] = [
  { id: 1, img: "armada1.jpg", title: "ARMADA No.01", materialTh: "ฝาดึงกระป๋องอะลูมิเนียมอัปไซเคิล", materialEn: "Upcycled Aluminum Pull-tab", materialFr: "Languettes d'Aluminium Recyclées", category: "upcycling" },
  { id: 2, img: "armada2.jpg", title: "ARMADA No.02", materialTh: "งานห่วงถักโลหะและศิลปะร่วมสมัย", materialEn: "Chainmaille & Metal Art", materialFr: "Cotte de Mailles & Art Métallique", category: "jewelry" },
  { id: 3, img: "armada3.jpg", title: "ARMADA No.03", materialTh: "งานมาคราเม่และศิลปะเส้นใย", materialEn: "Macramé & Fiber Art", materialFr: "Macramé & Art Textile", category: "fiber" },
  { id: 4, img: "armada4.jpg", title: "ARMADA No.04", materialTh: "ฝาดึงกระป๋องอะลูมิเนียมอัปไซเคิล", materialEn: "Upcycled Aluminum Pull-tab", materialFr: "Languettes d'Aluminium Recyclées", category: "upcycling" },
  { id: 5, img: "armada5.jpg", title: "ARMADA No.05", materialTh: "งานร้อยลูกปัดและดัดลวด", materialEn: "Bead Weaving & Wire", materialFr: "Perlage & Travail du Fil", category: "jewelry" },
  { id: 6, img: "armada6.jpg", title: "ARMADA No.06", materialTh: "งานมาคราเม่และเส้นใยธรรมชาติ", materialEn: "Macramé & Natural Fiber", materialFr: "Macramé & Fibres Naturelles", category: "fiber" },
  { id: 7, img: "armada7.jpg", title: "ARMADA No.07", materialTh: "ฝาดึงกระป๋องอะลูมิเนียมอัปไซเคิล", materialEn: "Upcycled Aluminum Pull-tab", materialFr: "Languettes d'Aluminium Recyclées", category: "upcycling" },
  { id: 8, img: "armada8.jpg", title: "ARMADA No.08", materialTh: "งานดัดลวดและขึ้นรูปโลหะ", materialEn: "Wirework & Metalwork", materialFr: "Filigrane & Métallurgie d'Art", category: "jewelry" },
  { id: 9, img: "armada9.jpg", title: "ARMADA No.09", materialTh: "งานผูกปมเชือกมาคราเม่", materialEn: "Macramé & Knotting", materialFr: "Macramé & Nouage Artisanal", category: "fiber" },
  { id: 10, img: "armada10.jpg", title: "ARMADA No.10", materialTh: "ฝาดึงกระป๋องอะลูมิเนียมอัปไซเคิล", materialEn: "Upcycled Aluminum Pull-tab", materialFr: "Languettes d'Aluminium Recyclées", category: "upcycling" },
  { id: 11, img: "armada11.jpg", title: "ARMADA No.11", materialTh: "หัตถศิลป์ห่วงถัก Chainmaille", materialEn: "Chainmaille Metalwork", materialFr: "Maillage & Métal Contemporain", category: "jewelry" },
  { id: 12, img: "armada12.jpg", title: "ARMADA No.12", materialTh: "สิ่งทอและเส้นใยธรรมชาติ", materialEn: "Natural Fiber & Textile", materialFr: "Textile & Fibres Végétales", category: "fiber" },
  { id: 13, img: "armada13.jpg", title: "ARMADA No.13", materialTh: "ฝาดึงกระป๋องอะลูมิเนียมอัปไซเคิล", materialEn: "Upcycled Aluminum Pull-tab", materialFr: "Languettes d'Aluminium Recyclées", category: "upcycling" },
  { id: 14, img: "armada14.jpg", title: "ARMADA No.14", materialTh: "งานทอลูกปัดและดัดลวด", materialEn: "Bead & Wire Weaving", materialFr: "Tissage de Perles & Fil", category: "jewelry" },
  { id: 15, img: "armada15.jpg", title: "ARMADA No.15", materialTh: "ศิลปะเชือกถักมาคราเม่", materialEn: "Macramé & Rope Art", materialFr: "Art de la Corde & Macramé", category: "fiber" },
  { id: 16, img: "armada16.jpg", title: "ARMADA No.16", materialTh: "ฝาดึงกระป๋องอะลูมิเนียมอัปไซเคิล", materialEn: "Upcycled Aluminum Pull-tab", materialFr: "Languettes d'Aluminium Recyclées", category: "upcycling" },
  { id: 17, img: "armada17.jpg", title: "ARMADA No.17", materialTh: "เครื่องประดับห่วงถักร่วมสมัย", materialEn: "Chainmaille & Ornament", materialFr: "Ornements en Cotte de Mailles", category: "jewelry" },
  { id: 18, img: "armada18.jpg", title: "ARMADA No.18", materialTh: "งานสิ่งทอเส้นใยธรรมชาติ", materialEn: "Natural Fiber Textile", materialFr: "Création Textile Naturelle", category: "fiber" },
  { id: 19, img: "armada19.jpg", title: "ARMADA No.19", materialTh: "ฝาดึงกระป๋องอะลูมิเนียมอัปไซเคิล", materialEn: "Upcycled Aluminum Pull-tab", materialFr: "Languettes d'Aluminium Recyclées", category: "upcycling" },
  { id: 20, img: "armada20.jpg", title: "ARMADA No.20", materialTh: "งานดัดลวดและลูกปัดโบราณ", materialEn: "Wirework & Bead Art", materialFr: "Filigrane & Perles d'Art", category: "jewelry" },
  { id: 21, img: "armada21.jpg", title: "ARMADA No.21", materialTh: "งานมาคราเม่เพื่อความยั่งยืน", materialEn: "Macramé & Conscious Craft", materialFr: "Macramé & Artisanat Conscient", category: "fiber" },
];

export default function Shop() {
  const params = useParams();
  const lang = params.lang || "th";
  const t = getTranslation(lang);
  const s = (t.home as any).sections?.shop || {};

  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState<ProductItem | null>(null);

  const filters = [
    { key: "all", label: lang === "th" ? "ทุกผลงาน" : lang === "fr" ? "Toutes les Œuvres" : "All Works" },
    { key: "upcycling", label: lang === "th" ? "Upcycling" : lang === "fr" ? "Upcycling" : "Upcycling" },
    { key: "jewelry", label: lang === "th" ? "เครื่องประดับ & โลหะ" : lang === "fr" ? "Bijoux & Métal" : "Jewelry & Metal" },
    { key: "fiber", label: lang === "th" ? "สิ่งทอ & มาคราเม่" : lang === "fr" ? "Fibres & Macramé" : "Fiber & Macramé" },
  ];

  const filtered = filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  const getMaterial = (p: ProductItem) => (lang === "th" ? p.materialTh : lang === "fr" ? p.materialFr : p.materialEn);

  return (
    <div className="pb-24">
      <PageHero
        badge={lang === "th" ? "ร้านค้าและผลงาน" : lang === "fr" ? "BOUTIQUE" : "SHOP"}
        title={s.title || (lang === "th" ? "Objects with Meaning" : "Objects with Meaning")}
        desc={
          s.desc ||
          (lang === "th"
            ? "เลือกชมผลงานที่สร้างขึ้นจากฝีมือ ความคิดสร้างสรรค์ และเรื่องราวเบื้องหลังของแต่ละชิ้นงาน"
            : lang === "fr"
            ? "Parcourez des œuvres créées à partir de l'artisanat d'art, de la créativité et des récits humains."
            : "Explore contemporary handcrafted creations sculpted with purposeful materiality, craftsmanship, and soul.")
        }
      />

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3 items-center border-b border-[#F5F2EA]/10 pb-8">
          <span className="font-sans text-[10px] font-bold tracking-widest uppercase text-[#AFAFA9]/60 mr-2">
            {lang === "th" ? "หมวดหมู่:" : lang === "fr" ? "Filtre :" : "Filter:"}
          </span>
          {filters.map((f) => (
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
            {filtered.length} {lang === "th" ? "ชิ้นงาน" : lang === "fr" ? "pièces" : "works"}
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
                  {getMaterial(product)}
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
            {lang === "th"
              ? "สนใจสั่งทำพิเศษหรือขอใบเสนอราคา?"
              : lang === "fr"
              ? "Intéressé par une commande personnalisée ou un devis ?"
              : "Interested in Bespoke Commissions or Private Inquiries?"}
          </h3>
          <p className="font-sans text-xs text-[#AFAFA9] leading-relaxed max-w-lg mx-auto">
            {lang === "th"
              ? "ติดต่อเราโดยตรงเพื่อสอบถามรายละเอียด ราคา หรือออกแบบชิ้นงาน Bespoke เฉพาะสำหรับคุณ"
              : lang === "fr"
              ? "Contactez directement notre atelier pour échanger sur vos dimensions, finitions et pièces sur mesure."
              : "Contact our atelier directly to discuss custom dimensions, bespoke jewelry, or architectural commissions."}
          </p>
          <Link
            to={`/${lang}/contact`}
            className="inline-block mt-2 font-sans text-[10px] font-bold tracking-widest uppercase px-8 py-3 border border-[#B08A3E] text-[#B08A3E] hover:bg-[#B08A3E] hover:text-[#111111] transition-all duration-200"
          >
            {lang === "th" ? "ติดต่อสั่งงาน →" : lang === "fr" ? "Contacter l'Atelier →" : "Initiate Salon Inquiry →"}
          </Link>
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
              ✕ {lang === "th" ? "ปิด" : lang === "fr" ? "Fermer" : "Close"}
            </button>
            <img
              src={`${R2_BASE}/${selected.img}`}
              alt={selected.title}
              className="w-full object-contain max-h-[70vh]"
            />
            <div className="p-8 space-y-3">
              <span className="font-sans text-[10px] font-bold tracking-widest text-[#B08A3E] uppercase block">
                {getMaterial(selected)}
              </span>
              <h2 className="font-serif-display text-2xl font-light text-[#F5F2EA]">
                {selected.title}
              </h2>
              <p className="font-sans text-xs text-[#AFAFA9] leading-relaxed">
                {lang === "th"
                  ? "งานสร้างสรรค์จากฝีมือช่างของ ArtcrewArmada — ผลิตด้วยใจ คุณค่าทุกชิ้นมาจากกระบวนการที่เคารพวัสดุและผู้คน"
                  : lang === "fr"
                  ? "Création artisanale originale d'ArtcrewArmada — Façonnée à la main avec respect des matières et des artisans."
                  : "Original artisanal creation from the ArtcrewArmada atelier — Handcrafted with reverence for material and artisan."}
              </p>
              <Link
                to={`/${lang}/contact`}
                className="inline-block mt-4 font-sans text-[10px] font-bold tracking-widest uppercase px-6 py-2.5 border border-[#B08A3E] text-[#B08A3E] hover:bg-[#B08A3E] hover:text-[#111111] transition-all duration-200"
              >
                {lang === "th" ? "สอบถามราคา / สั่งงาน →" : lang === "fr" ? "Demander un devis →" : "Inquire / Bespoke Order →"}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
