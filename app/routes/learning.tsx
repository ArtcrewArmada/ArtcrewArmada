import { useParams } from "react-router";
import { getTranslation } from "~/locales/dictionary";
import { Button } from "~/components/ui/button";
import { PageHero } from "~/components/ui/page-hero";

export default function Learning() {
  const params = useParams();
  const lang = params.lang || "th";
  const t = getTranslation(lang);
  const s = (t.home as any).sections?.learning || {};

  const activities = [
    { id: 1, title: "Natural Dye Workshop", type: "Workshop", date: "12 Sep 2026", price: "1,500" },
    { id: 2, title: "Circular Economy in Craft Talk", type: "Talk / Panel", date: "24 Sep 2026", price: "Free" },
    { id: 3, title: "Primitive Clay Vessels Exhibition", type: "Exhibition", date: "01-15 Oct 2026", price: "Free" },
  ];

  return (
    <div className="pb-24">
      {/* Page Header */}
      <PageHero
        badge="LEARNING & ACTIVITIES"
        title={s.title || "Learn. Create. Share."}
        desc={s.desc || "เวิร์กชอป กิจกรรม และการถ่ายทอดองค์ความรู้ ที่เปิดโอกาสให้ทุกคนได้เรียนรู้และลงมือสร้างสรรค์"}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-16">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {activities.map((act) => (
          <div key={act.id} className="border border-[#F5F2EA]/10 p-6 bg-[#1A1A1A] space-y-6 flex flex-col justify-between transition-calm hover:-translate-y-1 hover:shadow-md">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-[10px] font-bold tracking-widest uppercase">
                <span className="text-[#B08A3E]">{act.type}</span>
                <span className="text-[#AFAFA9]/50">{act.date}</span>
              </div>
              <h3 className="font-serif-display text-2xl text-[#F5F2EA]">{act.title}</h3>
            </div>
            
            <div className="space-y-4 pt-4 border-t border-[#F5F2EA]/5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-sans text-[#AFAFA9]/50 uppercase font-semibold">Price</span>
                <span className="font-sans font-bold text-[#F5F2EA]">{act.price === "Free" ? "Free" : `฿${act.price}`}</span>
              </div>
              <Button variant="navy" size="sm" className="w-full">
                {t.common.registerBtn}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
