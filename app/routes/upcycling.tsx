import { useParams } from "react-router";
import { getTranslation } from "~/locales/dictionary";

export default function Upcycling() {
  const params = useParams();
  const lang = params.lang || "th";
  const t = getTranslation(lang);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-16">
      <div className="space-y-4">
        <span className="font-sans text-[10px] font-bold tracking-[0.45em] uppercase text-armada-sand">
          Eco-Luxury Collection
        </span>
        <h1 className="font-headline font-light text-5xl text-armada-navy">
          {t.nav.upcycling}
        </h1>
        <p className="font-serif text-sm text-armada-navy/60 max-w-xl">
          การยกระดับเศษวัสดุเหลือใช้จากกระบวนการผลิตอุตสาหกรรมและชุมชน สู่งานดีไซน์ระดับลักชัวรีที่เปี่ยมด้วยความหมายและมีคุณค่าเชิงนวัตกรรมสิ่งแวดล้อม
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="border border-armada-navy/10 p-12 bg-white flex flex-col justify-center space-y-6">
          <span className="font-sans text-[10px] font-bold tracking-widest text-armada-sand uppercase">
            Upcycling Philosophy
          </span>
          <h2 className="font-headline text-3xl font-light text-armada-navy">
            "From Waste to Worth"
          </h2>
          <p className="font-sans text-xs text-armada-navy/70 leading-relaxed">
            เราเปลี่ยนวัสดุอย่างพลาสติกใช้แล้ว เศษหนังโรงงาน เศษด้ายเหลือทิ้ง และโลหะเก่า ให้เป็นวัสดุหลักในการดีไซน์คอลเลกชันกระเป๋า เฟอร์นิเจอร์ และงานศิลปะประดับบ้าน โดยรักษาอัตลักษณ์ของเนื้อวัสดุเดิมและผสมผสานการออกแบบสไตล์ Editorial
          </p>
        </div>
        <div className="border border-armada-navy/10 bg-armada-navy/5 flex items-center justify-center p-8 min-h-[300px]">
          <span className="font-headline text-2xl font-light italic text-armada-navy/30">
            ARMADA Material Lab Image
          </span>
        </div>
      </div>
    </div>
  );
}
