import { useParams } from "react-router";
import { getTranslation } from "~/locales/dictionary";
import { Button } from "~/components/ui/button";

export default function Learning() {
  const params = useParams();
  const lang = params.lang || "th";
  const t = getTranslation(lang);

  const activities = [
    { id: 1, title: "Natural Dye Workshop", type: "Workshop", date: "12 Sep 2026", price: "1,500" },
    { id: 2, title: "Circular Economy in Craft Talk", type: "Talk / Panel", date: "24 Sep 2026", price: "Free" },
    { id: 3, title: "Primitive Clay Vessels Exhibition", type: "Exhibition", date: "01-15 Oct 2026", price: "Free" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-16">
      <div className="space-y-4">
        <span className="font-sans text-[10px] font-bold tracking-[0.45em] uppercase text-armada-sand">
          Learning & Activity Platform
        </span>
        <h1 className="font-headline font-light text-5xl text-armada-navy">
          {t.nav.learning}
        </h1>
        <p className="font-serif text-sm text-armada-navy/60 max-w-xl">
          เปิดโอกาสการเรียนรู้ ร่วมกิจกรรมเวิร์กชอปงานฝีมือ รับฟังเสวนา และเข้าชมนิทรรศการเพื่อต่อยอดจิตสำนึกแห่งความคิดสร้างสรรค์
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {activities.map((act) => (
          <div key={act.id} className="border border-armada-navy/10 p-6 bg-white space-y-6 flex flex-col justify-between transition-calm hover:-translate-y-1 hover:shadow-md">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-[10px] font-bold tracking-widest uppercase">
                <span className="text-armada-sand">{act.type}</span>
                <span className="text-armada-navy/40">{act.date}</span>
              </div>
              <h3 className="font-headline text-2xl text-armada-navy">{act.title}</h3>
            </div>
            
            <div className="space-y-4 pt-4 border-t border-armada-navy/5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-sans text-armada-navy/40 uppercase font-semibold">Price</span>
                <span className="font-sans font-bold text-armada-navy">{act.price === "Free" ? "Free" : `฿${act.price}`}</span>
              </div>
              <Button variant="navy" size="sm" className="w-full">
                {t.common.registerBtn}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
