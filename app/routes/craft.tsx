import { useState, useMemo } from "react";
import { useParams } from "react-router";
import { getTranslation } from "~/locales/dictionary";
import { PageHero } from "~/components/ui/page-hero";

interface Project {
  id: number;
  title: string;
  titleTh: string;
  category: "jewelry" | "accessories" | "decorations" | "upcycling" | "textile" | "art-culture";
  year: string;
  material: string;
}

export default function Craft() {
  const params = useParams();
  const lang = params.lang || "th";
  const t = getTranslation(lang);
  const s = (t.home as any).sections?.craft || {};
  
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", labelTh: "ทั้งหมด", labelEn: "All" },
    { id: "jewelry", labelTh: "เครื่องประดับ (Jewelry)", labelEn: "Jewelry" },
    { id: "accessories", labelTh: "เครื่องเคียง (Accessories)", labelEn: "Accessories" },
    { id: "decorations", labelTh: "ของตกแต่ง (Decorations)", labelEn: "Decorations" },
    { id: "upcycling", labelTh: "อัปไซคลิง (Upcycling)", labelEn: "Upcycling" },
    { id: "textile", labelTh: "งานผ้า/สิ่งทอ (Textile)", labelEn: "Textile" },
    { id: "art-culture", labelTh: "ศิลปะและวัฒนธรรม (Art & Culture)", labelEn: "Art & Culture" }
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "Brass Mapuche Collar",
      titleTh: "ปลอกคอทองเหลืองสไตล์มาปูเช่",
      category: "jewelry",
      year: "2025",
      material: "Brass & Metal Chasing"
    },
    {
      id: 2,
      title: "Peyote Stitch Cuff",
      titleTh: "กำไลข้อมือร้อยลูกปัดเปโยเต้",
      category: "accessories",
      year: "2026",
      material: "Bead Loom & Peyote Stitch"
    },
    {
      id: 3,
      title: "Macramé Wall Hanging",
      titleTh: "โมบายถักแขวนผนังมาคราเม่",
      category: "decorations",
      year: "2025",
      material: "Cotton Fiber Knotting"
    },
    {
      id: 4,
      title: "Eco-Luxury Pull-Tab Clutch",
      titleTh: "กระเป๋าคลัตช์ฝาดึงกระป๋องหรู",
      category: "upcycling",
      year: "2026",
      material: "Aluminum Pull-Tabs & Reclaimed Leather"
    },
    {
      id: 5,
      title: "Natural Indigo Dyed Scarf",
      titleTh: "ผ้าพันคอย้อมครามธรรมชาติ",
      category: "textile",
      year: "2026",
      material: "Handwoven Cotton Yarn"
    },
    {
      id: 6,
      title: "Clay Vessels of Chao Phraya",
      titleTh: "หม้อดินเผาลุ่มน้ำเจ้าพระยา",
      category: "art-culture",
      year: "2025",
      material: "Local Terracotta Clay"
    },
    {
      id: 7,
      title: "Wire Wrapped Agate Pendant",
      titleTh: "จี้หินอัญมณีดัดลวดเงิน",
      category: "jewelry",
      year: "2025",
      material: "Sterling Silver Wire & Agate Stone"
    },
    {
      id: 8,
      title: "Upcycled Leather Backpack",
      titleTh: "กระเป๋าเป้หนังอัปไซคลิง",
      category: "upcycling",
      year: "2026",
      material: "Factory Leather Scraps & Canvas"
    },
    {
      id: 9,
      title: "Chromatic Fiber Installation",
      titleTh: "ศิลปะจัดวางเส้นด้ายหลากสี",
      category: "art-culture",
      year: "2026",
      material: "Colored threads & Reclaimed Wood structure"
    }
  ];

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") return projects;
    return projects.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="pb-24">
      {/* Page Header */}
      <PageHero
        badge="CREATION & CRAFT"
        title={s.title || "Craftsmanship meets Contemporary Design"}
        desc={s.desc || "สำรวจงานฝีมือ เทคนิค และการออกแบบที่เราพัฒนาผ่านประสบการณ์กว่า 20 ปี"}
      />
      
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-16">
      {/* Category Pills Selector */}
      <div className="flex flex-wrap gap-2 border-b border-[#F5F2EA]/10 pb-8">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          const label = lang === "th" ? cat.labelTh : cat.labelEn;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 font-sans text-[9px] font-bold tracking-widest uppercase border transition-calm ${
                isSelected
                  ? "bg-[#111111] border-[#F5F2EA]/30 text-[#F5F2EA]"
                  : "bg-[#1A1A1A] border-[#F5F2EA]/10 text-[#AFAFA9] hover:text-[#F5F2EA] hover:border-[#F5F2EA]/30/30"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="border border-[#F5F2EA]/10 p-6 space-y-6 bg-[#1A1A1A] transition-calm hover:-translate-y-1 hover:shadow-md flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Image Placeholder with category representation */}
                <div className="w-full aspect-[4/3] bg-[#F5F2EA]/5 flex items-center justify-center p-4 relative overflow-hidden">
                  <span className="font-serif-display text-lg italic text-[#F5F2EA]/20 z-10">
                    {project.title}
                  </span>
                  
                  {/* Subtle background lines */}
                  <svg className="w-full h-full opacity-5 absolute inset-0" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="0" x2="100%" y2="100%" stroke="#1E2A44" strokeWidth="1" />
                    <line x1="100%" y1="0" x2="0" y2="100%" stroke="#1E2A44" strokeWidth="1" />
                  </svg>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[10px] tracking-wider uppercase font-bold">
                    <span className="text-[#B08A3E]">
                      {categories.find(c => c.id === project.category)?.labelEn}
                    </span>
                    <span className="text-[#AFAFA9]/50">{project.year}</span>
                  </div>
                  <h3 className="font-serif-display text-2xl text-[#F5F2EA] leading-snug">
                    {lang === "th" ? project.titleTh : project.title}
                  </h3>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F5F2EA]/5">
                <span className="font-sans text-[8px] text-[#AFAFA9]/50 uppercase block">Material</span>
                <span className="font-sans text-xs text-[#AFAFA9]">{project.material}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="border border-dashed border-[#F5F2EA]/20 p-16 text-center bg-[#1A1A1A]">
          <p className="font-serif text-sm text-[#AFAFA9]">
            ไม่พบงานแสดงที่ตรงตามหมวดหมู่นี้
          </p>
        </div>
      )}
    </div>
    </div>
  );
}
