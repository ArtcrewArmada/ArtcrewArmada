import { useParams } from "react-router";
import { getTranslation } from "~/locales/dictionary";
import { PageHero } from "~/components/ui/page-hero";

export default function Primitive() {
  const params = useParams();
  const lang = params.lang || "th";
  const t = getTranslation(lang);
  const s = (t.home as any).sections?.primitive || {};

  return (
    <div className="pb-24">
      {/* Page Header */}
      <PageHero
        badge="ART & PRIMITIVE"
        title={s.title || "Art, Culture & Contemporary Expression"}
        desc={s.desc || "นำแรงบันดาลใจจากศิลปะ ภูมิปัญญา และวัฒนธรรม มาตีความใหม่ผ่านงานสร้างสรรค์ร่วมสมัย"}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-16">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4 border border-[#F5F2EA]/10 p-6 bg-[#1A1A1A]">
          <div className="w-full aspect-[3/4] bg-[#F5F2EA]/5 flex items-center justify-center p-4">
            <span className="font-serif-display text-sm italic text-[#F5F2EA]/30">Object 01 Image</span>
          </div>
          <h3 className="font-serif-display text-xl text-[#F5F2EA]">Wooden Carved Masks</h3>
          <p className="font-sans text-xs text-[#AFAFA9]">งานแกะสลักไม้ดั้งเดิมสะท้อนเรื่องราวและความเชื่อพื้นถิ่น</p>
        </div>
        <div className="space-y-4 border border-[#F5F2EA]/10 p-6 bg-[#1A1A1A]">
          <div className="w-full aspect-[3/4] bg-[#F5F2EA]/5 flex items-center justify-center p-4">
            <span className="font-serif-display text-sm italic text-[#F5F2EA]/30">Object 02 Image</span>
          </div>
          <h3 className="font-serif-display text-xl text-[#F5F2EA]">Primitive Clay Pots</h3>
          <p className="font-sans text-xs text-[#AFAFA9]">งานปั้นดินเผาไม่เคลือบโดยใช้เตาดินโบราณ</p>
        </div>
        <div className="space-y-4 border border-[#F5F2EA]/10 p-6 bg-[#1A1A1A]">
          <div className="w-full aspect-[3/4] bg-[#F5F2EA]/5 flex items-center justify-center p-4">
            <span className="font-serif-display text-sm italic text-[#F5F2EA]/30">Object 03 Image</span>
          </div>
          <h3 className="font-serif-display text-xl text-[#F5F2EA]">Handwoven Tribal Fabric</h3>
          <p className="font-sans text-xs text-[#AFAFA9]">ผ้าทอมือย้อมสีธรรมชาติลายมรดกชุมชน</p>
        </div>
      </div>
    </div>
    </div>
  );
}
