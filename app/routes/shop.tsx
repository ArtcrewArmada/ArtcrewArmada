import { useParams } from "react-router";
import { getTranslation } from "~/locales/dictionary";
import { Button } from "~/components/ui/button";
import { PageHero } from "~/components/ui/page-hero";

export default function Shop() {
  const params = useParams();
  const lang = params.lang || "th";
  const t = getTranslation(lang);
  const s = (t.home as any).sections?.shop || {};

  const products = [
    { id: 1, title: "ARMADA Tote Bag", price: "2,450", material: "Upcycled Canvas" },
    { id: 2, title: "Terracotta Vase", price: "1,200", material: "Natural Clay" },
    { id: 3, title: "Craft Artisan Box", price: "3,800", material: "Reclaimed Wood" },
  ];

  return (
    <div className="pb-24">
      {/* Page Header */}
      <PageHero
        badge="SHOP"
        title={s.title || "Objects with Meaning"}
        desc={s.desc || "เลือกชมผลงานที่สร้างขึ้นจากฝีมือ ความคิดสร้างสรรค์ และเรื่องราวเบื้องหลังของแต่ละชิ้นงาน"}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-16">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border border-[#F5F2EA]/10 p-6 space-y-6 bg-[#1A1A1A] transition-calm hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-full aspect-square bg-[#F5F2EA]/5 flex items-center justify-center p-4">
                <span className="font-serif-display text-lg italic text-[#F5F2EA]/30">
                  {projectTitle(product.title)} Image
                </span>
              </div>
              <div className="space-y-1">
                <span className="font-sans text-[9px] font-bold tracking-wider text-[#B08A3E] uppercase">
                  {product.material}
                </span>
                <h3 className="font-serif-display text-2xl text-[#F5F2EA]">{product.title}</h3>
              </div>
            </div>
            
            <div className="space-y-4 pt-4 border-t border-[#F5F2EA]/5">
              <div className="flex justify-between items-center">
                <span className="font-sans text-[10px] font-bold uppercase text-[#AFAFA9]/50">
                  {t.common.price}
                </span>
                <span className="font-sans text-sm font-bold text-[#F5F2EA]">
                  ฿{product.price}
                </span>
              </div>
              <Button variant="secondary" size="sm" className="w-full">
                {t.common.buyNow}
              </Button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

function projectTitle(title: string) {
  return title;
}
