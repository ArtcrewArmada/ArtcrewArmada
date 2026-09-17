import { useParams, Link } from "react-router";
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
    {
      id: 1,
      titleTh: "เวิร์กชอปย้อมสีธรรมชาติ (Natural Dye Workshop)",
      titleEn: "Botanical & Natural Dye Workshop",
      titleFr: "Atelier de Teinture Naturelle Botanique",
      typeTh: "เวิร์กชอป",
      typeEn: "Workshop",
      typeFr: "Atelier",
      dateTh: "12 ก.ย. 2026",
      dateEn: "12 Sep 2026",
      dateFr: "12 Sept 2026",
      priceTh: "1,500 บาท",
      priceEn: "฿1,500",
      priceFr: "฿1,500",
    },
    {
      id: 2,
      titleTh: "เสวนา Circular Economy ในงานหัตถกรรมร่วมสมัย",
      titleEn: "Circular Economy in Contemporary Craft Talk",
      titleFr: "Conférence Économie Circulaire & Artisanat",
      typeTh: "เสวนา / บรรยาย",
      typeEn: "Panel Talk",
      typeFr: "Conférence",
      dateTh: "24 ก.ย. 2026",
      dateEn: "24 Sep 2026",
      dateFr: "24 Sept 2026",
      priceTh: "ฟรีไม่มีค่าใช้จ่าย",
      priceEn: "Free Admission",
      priceFr: "Entrée Libre",
    },
    {
      id: 3,
      titleTh: "นิทรรศการเครื่องปั้นดินเผาพื้นถิ่นโบราณ (Primitive Clay Vessels)",
      titleEn: "Primitive Clay Vessels Exhibition",
      titleFr: "Exposition Récipients d'Argile Primitifs",
      typeTh: "นิทรรศการ",
      typeEn: "Exhibition",
      typeFr: "Exposition",
      dateTh: "01-15 ต.ค. 2026",
      dateEn: "01-15 Oct 2026",
      dateFr: "01-15 Oct 2026",
      priceTh: "ฟรีไม่มีค่าใช้จ่าย",
      priceEn: "Free Admission",
      priceFr: "Entrée Libre",
    },
  ];

  return (
    <div className="pb-24">
      {/* Page Header */}
      <PageHero
        badge={lang === "th" ? "การเรียนรู้และกิจกรรม" : lang === "fr" ? "APPRENTISSAGE & ACTIVITÉS" : "LEARNING & ACTIVITIES"}
        title={s.title || (lang === "th" ? "Learn. Create. Share." : "Learn. Create. Share.")}
        desc={
          s.desc ||
          (lang === "th"
            ? "เวิร์กชอป กิจกรรม และการถ่ายทอดองค์ความรู้ ที่เปิดโอกาสให้ทุกคนได้เรียนรู้และลงมือสร้างสรรค์"
            : lang === "fr"
            ? "Ateliers, masterclasses et transmission de savoir-faire ouvrant à tous l'opportunité d'apprendre et de créer."
            : "Workshops, masterclasses, and vocational knowledge sharing empowering everyone to learn, create, and innovate.")
        }
      />

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">
        
        {/* Community Impact Section */}
        <div className="space-y-16">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <span className="font-sans text-[10px] font-bold tracking-[0.3em] text-[#B08A3E] uppercase">
              {lang === "th"
                ? "ถ่ายทอดทักษะ • สร้างสัมมาชีพ • พัฒนาชุมชนยั่งยืน"
                : lang === "fr"
                ? "Partage de Compétences • Création de Revenus • Développement Durable"
                : "Skill Sharing • Livelihood Creation • Sustainable Community Development"}
            </span>
            <h2 className="font-serif-display text-5xl md:text-6xl text-[#F5F2EA]">Community Impact</h2>
            <div className="space-y-4">
              <h3 className="font-sans text-xl text-[#F5F2EA] font-bold">
                {lang === "th"
                  ? "ถ่ายทอดองค์ความรู้ด้านงานหัตถกรรมสู่ชุมชน"
                  : lang === "fr"
                  ? "Transmission du Savoir-Faire Artisanal aux Communautés"
                  : "Empowering Local Communities with Craft Knowledge"}
              </h3>
              <p className="font-sans text-sm md:text-base text-[#F5F2EA]/80 leading-relaxed text-justify md:text-center indent-8 md:indent-0">
                {lang === "th"
                  ? "การทำงานด้านงานหัตถกรรมของ Artcrew Armada และ Armada มุ่งเน้นการถ่ายทอดองค์ความรู้และทักษะด้านงานหัตถกรรมสู่ชุมชน ผ่านการจัดกิจกรรมฝึกอบรมและเวิร์กชอปในหลายพื้นที่ มุ่งเน้นให้ผู้เรียนสามารถลงมือปฏิบัติได้จริง เพื่อพัฒนาทักษะและต่อยอดเป็นรายได้อย่างยั่งยืน ให้แก่กลุ่มชุมชน กลุ่มสตรีแม่บ้าน เยาวชน และผู้สนใจงานหัตถกรรม"
                  : lang === "fr"
                  ? "Le travail artisanal d'Artcrew Armada se concentre sur la transmission du savoir-faire aux communautés locales grâce à des ateliers pratiques, permettant aux femmes, aux jeunes et aux passionnés de développer des compétences génératrices de revenus durables."
                  : "The artisanal mission of Artcrew Armada and Armada focuses on transferring craftsmanship knowledge and techniques to local communities through hands-on workshops and masterclasses, empowering women, youth, and craft enthusiasts to develop vocational careers and generate sustainable income."}
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
                {lang === "th" ? "กิจกรรมและตารางงาน" : lang === "fr" ? "ÉVÉNEMENTS À VENIR" : "UPCOMING SESSIONS"}
             </span>
             <h2 className="font-serif-display text-4xl mt-4 text-[#F5F2EA]">
               {lang === "th" ? "เข้าร่วมเวิร์กชอปกับเรา" : lang === "fr" ? "Rejoindre nos Ateliers" : "Join Our Workshops"}
             </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((act) => {
              const curTitle = lang === "th" ? act.titleTh : lang === "fr" ? act.titleFr : act.titleEn;
              const curType = lang === "th" ? act.typeTh : lang === "fr" ? act.typeFr : act.typeEn;
              const curDate = lang === "th" ? act.dateTh : lang === "fr" ? act.dateFr : act.dateEn;
              const curPrice = lang === "th" ? act.priceTh : lang === "fr" ? act.priceFr : act.priceEn;

              return (
                <div key={act.id} className="border border-[#F5F2EA]/10 p-6 bg-[#1A1A1A] space-y-6 flex flex-col justify-between transition-calm hover:-translate-y-1 hover:shadow-md">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-[10px] font-bold tracking-widest uppercase">
                      <span className="text-[#B08A3E]">{curType}</span>
                      <span className="text-[#AFAFA9]/50">{curDate}</span>
                    </div>
                    <h3 className="font-serif-display text-2xl text-[#F5F2EA]">{curTitle}</h3>
                  </div>
                  
                  <div className="space-y-4 pt-4 border-t border-[#F5F2EA]/5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-sans text-[#AFAFA9]/50 uppercase font-semibold">
                        {lang === "th" ? "ค่าลงทะเบียน" : lang === "fr" ? "Tarif" : "Fee"}
                      </span>
                      <span className="font-sans font-bold text-[#F5F2EA]">{curPrice}</span>
                    </div>
                    <Link to={`/${lang}/contact`} className="block w-full">
                      <Button variant="navy" size="sm" className="w-full">
                        {t.common.registerBtn}
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
