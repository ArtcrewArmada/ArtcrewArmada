import { useParams } from "react-router";
import { getTranslation } from "~/locales/dictionary";
import { Button } from "~/components/ui/button";
import { PageHero } from "~/components/ui/page-hero";

const R2_BASE = "https://pub-fbe4c0b88b1c4967a575e56eb5f39ecf.r2.dev";

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

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">
        
        {/* Community Impact Section */}
        <div className="space-y-16">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <span className="font-sans text-[10px] font-bold tracking-[0.3em] text-[#B08A3E] uppercase">
              Skill Sharing • Livelihood Creation • Sustainable Community Development
            </span>
            <h2 className="font-serif-display text-5xl md:text-6xl text-[#F5F2EA]">Community Impact</h2>
            <div className="space-y-4">
              <h3 className="font-sans text-xl text-[#F5F2EA] font-bold">ถ่ายทอดองค์ความรู้ด้านงานหัตถกรรมสู่ชุมชน</h3>
              <p className="font-sans text-sm md:text-base text-[#F5F2EA]/80 leading-relaxed text-justify md:text-center indent-8 md:indent-0">
                การทำงานด้านงานหัตถกรรมของ Artcrew Armada และ Armada มุ่งเน้นการถ่ายทอดองค์ความรู้และทักษะด้านงานหัตถกรรมสู่ชุมชน ผ่านการจัดกิจกรรมฝึกอบรมและเวิร์กชอปในหลายพื้นที่ มุ่งเน้นให้ผู้เรียนสามารถลงมือปฏิบัติได้จริง เพื่อพัฒนาทักษะและต่อยอดเป็นรายได้อย่างยั่งยืน ให้แก่กลุ่มชุมชน กลุ่มสตรีแม่บ้าน เยาวชน และผู้สนใจงานหัตถกรรม
              </p>
            </div>
          </div>

          {/* Learning & Activity Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "LEARNING1.jpg", "LEARNING2.jpg", "LEARNING3.jpg",
              "LEARNING4.jpg", "LEARNING5.png", "LEARNING6.png",
              "LEARNING7.png", "LEARNING8.png", "LEARNING9.png"
            ].map((img, idx) => (
              <div key={idx} className="aspect-square overflow-hidden bg-[#131313] border border-[#F5F2EA]/5 group">
                <img 
                  src={`${R2_BASE}/Learning %26 Activity/${img}`} 
                  alt={`Learning Activity ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Activities List */}
        <div className="border-t border-[#F5F2EA]/10 pt-20 space-y-12">
          <div className="text-center">
             <span className="font-sans text-[10px] font-bold tracking-[0.3em] text-[#B08A3E] uppercase">
                Upcoming Events
             </span>
             <h2 className="font-serif-display text-4xl mt-4 text-[#F5F2EA]">Join Our Workshops</h2>
          </div>
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
    </div>
  );
}
