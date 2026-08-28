import { useParams } from "react-router";
import { getTranslation } from "~/locales/dictionary";

export default function Craft() {
  const params = useParams();
  const lang = params.lang || "th";
  const t = getTranslation(lang);

  const projects = [
    { id: 1, title: "Terracotta Vessels", category: "Traditional Craft", year: "2025" },
    { id: 2, title: "Woven Bamboo Lamps", category: "Basketry Design", year: "2026" },
    { id: 3, title: "Eco-Luxury Lounge Chair", category: "Upcycled Furniture", year: "2026" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-16">
      <div className="space-y-4">
        <span className="font-sans text-[10px] font-bold tracking-[0.45em] uppercase text-armada-sand">
          Creation & Craft
        </span>
        <h1 className="font-headline font-light text-5xl text-armada-navy">
          งานสร้างสรรค์และงานฝีมือ
        </h1>
        <p className="font-serif text-sm text-armada-navy/60 max-w-xl">
          การทดลองเชิงสร้างสรรค์และการร่วมมือระหว่างช่างฝีมือดั้งเดิมกับดีไซเนอร์ร่วมสมัย เพื่อสะท้อนความเป็นไปได้ของความยั่งยืน
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="border border-armada-navy/10 p-6 space-y-6 bg-white transition-calm hover:-translate-y-1 hover:shadow-md">
            <div className="w-full aspect-[4/3] bg-armada-navy/5 flex items-center justify-center p-4">
              <span className="font-headline text-lg italic text-armada-navy/30">
                {project.title} Image
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-[10px] tracking-wider uppercase font-bold text-armada-navy/40">
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>
              <h3 className="font-headline text-2xl text-armada-navy">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
