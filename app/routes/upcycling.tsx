import { useParams } from "react-router";
import { getTranslation } from "~/locales/dictionary";
import { PageHero } from "~/components/ui/page-hero";

export default function Upcycling() {
  const params = useParams();
  const lang = params.lang || "th";
  const t = getTranslation(lang);
  const s = (t.home as any).sections?.upcycling || {};

  return (
    <div className="pb-24">
      {/* Page Header */}
      <PageHero
        badge="ARMADA UPCYCLING"
        title={s.title || "A Story of Upcycling, Art & Community"}
        desc={s.desc || "เปลี่ยนวัสดุที่ถูกมองข้ามให้กลับมามีคุณค่า ผ่านการออกแบบ งานฝีมือ และแนวคิด Circular Economy"}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-16">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="border border-[#F5F2EA]/10 p-12 bg-[#1A1A1A] flex flex-col justify-center space-y-6">
          <span className="font-sans text-[10px] font-bold tracking-widest text-[#B08A3E] uppercase">
            Upcycling Philosophy
          </span>
          <h2 className="font-serif-display text-3xl font-light text-[#F5F2EA]">
            "Reuse. Return. Recreate. Revive."
          </h2>
          <p className="font-sans text-xs text-[#AFAFA9] leading-relaxed">
            เราเปลี่ยนวัสดุอย่างพลาสติกใช้แล้ว เศษหนังโรงงาน เศษด้ายเหลือทิ้ง และโลหะเก่า ให้เป็นวัสดุหลักในการดีไซน์คอลเลกชันกระเป๋า เฟอร์นิเจอร์ และงานศิลปะประดับบ้าน โดยรักษาอัตลักษณ์ของเนื้อวัสดุเดิมและผสมผสานการออกแบบสไตล์ Editorial
          </p>
        </div>
        <div className="border border-[#F5F2EA]/10 bg-[#1A1A1A] flex items-center justify-center p-8 min-h-[300px]">
          <img
            src="https://pub-fbe4c0b88b1c4967a575e56eb5f39ecf.r2.dev/armada-atelier.jpg"
            alt="ARMADA L'ATELIER Trademark Logo"
            className="w-64 h-64 object-contain"
          />
        </div>
      </div>
    </div>
    </div>
  );
}
