import { useParams } from "react-router";
import { getTranslation } from "~/locales/dictionary";
import { Logo } from "~/components/branding/logo";

export default function About() {
  const params = useParams();
  const lang = params.lang || "th";
  const t = getTranslation(lang);

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">
      <div className="space-y-4 text-center">
        <span className="font-sans text-[10px] font-bold tracking-[0.45em] uppercase text-armada-sand">
          About Us
        </span>
        <h1 className="font-headline font-light text-5xl text-armada-navy">
          {t.nav.about}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="font-headline text-3xl font-light italic text-armada-navy">
            "From Craft to Creation, From People to Possibility."
          </h2>
          <p className="font-sans text-xs text-armada-navy/70 leading-relaxed">
            ARTcrew ARMADA ก่อตั้งขึ้นจากแนวคิดในการเชื่อมโยงภูมิปัญญาดั้งเดิมของช่างฝีมือพื้นถิ่น เข้ากับมุมมองการออกแบบที่ร่วมสมัยและความต้องการปกป้องสิ่งแวดล้อมอย่างยั่งยืน
          </p>
          <p className="font-sans text-xs text-armada-navy/70 leading-relaxed">
            เราเชื่อว่า 'งานฝีมือ' ไม่ใช่เพียงสินค้าหรือวัตถุสิ่งของ แต่เป็นบันทึกทางวัฒนธรรม กระบวนการคิดสร้างสรรค์ และจุดเชื่อมโยงระหว่างผู้สร้างสรรค์กับผู้ใช้งานเพื่ออนาคตที่ดีกว่า
          </p>
        </div>
        <div className="border border-armada-navy/10 p-8 flex items-center justify-center bg-white aspect-square">
          <Logo variant="emblem" theme="dark" className="w-48 h-48" />
        </div>
      </div>

      <div className="border-t border-armada-navy/5 pt-12">
        <h3 className="font-sans text-xs font-bold tracking-widest uppercase text-armada-sand mb-6">
          Our Vision: Craft & Art Awareness Center
        </h3>
        <p className="font-serif text-sm text-armada-navy/80 leading-relaxed">
          ในอนาคต เรามุ่งหวังที่จะยกระดับแพลตฟอร์มนี้สู่ศูนย์ตระหนักรู้ด้านศิลปหัตถกรรมและความคิดสร้างสรรค์ เพื่อเป็นพื้นที่รวบรวมงานวิจัย เผยแพร่องค์ความรู้ จัดแสดงนิทรรศการ และเปิดรับศิลปินในพำนัก (Artist Residency) เพื่อสร้างแรงบันดาลใจและปลูกจิตสำนึกรักษ์โลกผ่านงานศิลปะและกระบวนการคราฟต์
        </p>
      </div>
    </div>
  );
}
