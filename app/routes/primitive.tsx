import { useParams } from "react-router";
import { getTranslation } from "~/locales/dictionary";

export default function Primitive() {
  const params = useParams();
  const lang = params.lang || "th";
  const t = getTranslation(lang);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-16">
      <div className="space-y-4">
        <span className="font-sans text-[10px] font-bold tracking-[0.45em] uppercase text-armada-sand">
          Culture & Heritage
        </span>
        <h1 className="font-headline font-light text-5xl text-armada-navy">
          {t.nav.primitive}
        </h1>
        <p className="font-serif text-sm text-armada-navy/60 max-w-xl">
          การสืบสานงานศิลป์รากเหง้าดั้งเดิม และวัตถุเชิงชาติพันธุ์ (Primitive Artifacts) เพื่อปลูกฝังจิตสำนึกรักในศิลปะและคุณค่าจากอดีต
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4 border border-armada-navy/10 p-6 bg-white">
          <div className="w-full aspect-[3/4] bg-armada-navy/5 flex items-center justify-center p-4">
            <span className="font-headline text-sm italic text-armada-navy/30">Object 01 Image</span>
          </div>
          <h3 className="font-headline text-xl text-armada-navy">Wooden Carved Masks</h3>
          <p className="font-sans text-xs text-armada-navy/60">งานแกะสลักไม้ดั้งเดิมสะท้อนเรื่องราวและความเชื่อพื้นถิ่น</p>
        </div>
        <div className="space-y-4 border border-armada-navy/10 p-6 bg-white">
          <div className="w-full aspect-[3/4] bg-armada-navy/5 flex items-center justify-center p-4">
            <span className="font-headline text-sm italic text-armada-navy/30">Object 02 Image</span>
          </div>
          <h3 className="font-headline text-xl text-armada-navy">Primitive Clay Pots</h3>
          <p className="font-sans text-xs text-armada-navy/60">งานปั้นดินเผาไม่เคลือบโดยใช้เตาดินโบราณ</p>
        </div>
        <div className="space-y-4 border border-armada-navy/10 p-6 bg-white">
          <div className="w-full aspect-[3/4] bg-armada-navy/5 flex items-center justify-center p-4">
            <span className="font-headline text-sm italic text-armada-navy/30">Object 03 Image</span>
          </div>
          <h3 className="font-headline text-xl text-armada-navy">Handwoven Tribal Fabric</h3>
          <p className="font-sans text-xs text-armada-navy/60">ผ้าทอมือย้อมสีธรรมชาติลายมรดกชุมชน</p>
        </div>
      </div>
    </div>
  );
}
