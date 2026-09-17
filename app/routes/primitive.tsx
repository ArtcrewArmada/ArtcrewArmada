import { useState } from "react";
import { useParams, Link } from "react-router";
import { getTranslation } from "~/locales/dictionary";
import { PageHero } from "~/components/ui/page-hero";

export default function Primitive() {
  const params = useParams();
  const lang = params.lang || "th";
  const t = getTranslation(lang);
  const s = (t.home as any).sections?.primitive || {};

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  const upcomingCollections = [
    {
      id: "01",
      titleTh: "ภาชนะดินเผาโบราณ (Megalithic Clay Vessels)",
      titleEn: "Megalithic Clay Vessels",
      titleFr: "Vases d'Argile Mégalithiques",
      descTh: "งานปั้นดินเผาแบบไร้เคลือบผ่านเตาดินโบราณ ผสานแร่ธาตุธรรมชาติสะท้อนความบริสุทธิ์ของปฐพี",
      descEn: "Unglazed primitive terracotta fired in ancestral earth kilns, capturing raw earthen minerals.",
      descFr: "Terre cuite primitive non émaillée cuite dans des fours ancestraux.",
    },
    {
      id: "02",
      titleTh: "ประติมากรรมไม้ชนเผ่า (Tribal Heritage Woodcraft)",
      titleEn: "Tribal Heritage Woodcraft",
      titleFr: "Sculptures sur Bois Tribales",
      descTh: "งานแกะสลักไม้โบราณที่สืบทอดสัญลักษณ์ ความเชื่อ และจิตวิญญาณของบรรพชนร่วมสมัย",
      descEn: "Heirloom timber sculptures carved with ancient totemic motifs and spiritual geometry.",
      descFr: "Sculptures sur bois précieux ornées de motifs totémiques et géométries sacrées.",
    },
    {
      id: "03",
      titleTh: "สำริดและโลหะดึกดำบรรพ์ (Archaic Bronze Artifacts)",
      titleEn: "Archaic Bronze Artifacts",
      titleFr: "Artefacts en Bronze Archaïque",
      descTh: "งานหล่อสำริดขี้ผึ้งหาย (Lost-Wax Casting) ด้วยสูตรโลหะโบราณ ผิวสัมผัสคราบสนิมเขียวธรรมชาติ",
      descEn: "Lost-wax ancient bronze castings with natural verdigris patinas and raw monolithic weight.",
      descFr: "Bronze à la cire perdue aux patines vert-de-gris naturelles.",
    },
  ];

  return (
    <div className="bg-[#111111] text-[#F5F2EA] min-h-screen pb-28">
      {/* 1. Page Header */}
      <PageHero
        badge={lang === "th" ? "ศิลปะพื้นถิ่นและวัฒนธรรม" : lang === "fr" ? "ART & PRIMITIF" : "ART & PRIMITIVE"}
        title={s.title || (lang === "th" ? "Art, Culture & Contemporary Expression" : "Art, Culture & Contemporary Expression")}
        desc={
          lang === "th"
            ? "นำแรงบันดาลใจจากศิลปะ ภูมิปัญญา และวัฒนธรรม มาตีความใหม่ผ่านงานสร้างสรรค์ร่วมสมัย"
            : lang === "fr"
            ? "Réinterpréter les inspirations de l'art, de la sagesse et de la culture à travers des créations contemporaines."
            : "Reinterpreting inspirations from ancient wisdom, ancestral cultures, and primitive monolithic forms."
        }
      />

      {/* 2. Coming Soon Centerpiece */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20 space-y-12 md:space-y-16">
        <div className="border border-[#B08A3E]/30 bg-[#161616] p-6 sm:p-10 md:p-16 text-center space-y-6 md:space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#B08A3E]/5 rounded-full blur-3xl"></div>
          
          <div className="space-y-4 relative z-10">
            <span className="inline-block px-3.5 py-1 text-xs font-sans font-bold tracking-[0.25em] uppercase bg-[#B08A3E]/10 border border-[#B08A3E]/30 text-[#B08A3E]">
              {lang === "th" ? "กำลังเตรียมเปิดตัวเร็วๆ นี้" : lang === "fr" ? "BIENTÔT DISPONIBLE" : "CURATION IN PROGRESS"}
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-6xl text-[#F5F2EA] font-light">
              Coming Soon
            </h2>
            <p className="font-sans text-sm md:text-base text-[#F5F2EA]/85 max-w-xl mx-auto leading-relaxed">
              {lang === "th"
                ? "เรากำลังคัดสรรและรวบรวมชิ้นงานศิลปะพื้นถิ่น วัตถุโบราณ และประติมากรรมหัตถศิลป์ที่เชื่อมโยงภูมิปัญญาบรรพชนเข้ากับความร่วมสมัย กรุณาติดตามการเปิดตัวคอลเลกชันเร็วๆ นี้"
                : lang === "fr"
                ? "Nous préparons actuellement une collection exclusive d'objets primitifs, de sculptures cérémonielles et de reliques artisanales reliant la mémoire ancestrale au design moderne."
                : "We are actively curating a bespoke collection of primitive artifacts, ceremonial sculptures, and ancestral creations connecting ancient wisdom to contemporary living."}
            </p>
          </div>

          {/* Email Notification Form */}
          <div className="max-w-md mx-auto relative z-10 pt-2">
            {subscribed ? (
              <div className="p-4 bg-[#B08A3E]/10 border border-[#B08A3E]/40 text-center space-y-1">
                <p className="font-sans text-xs sm:text-sm font-bold text-[#F5F2EA]">
                  {lang === "th" ? "ขอบคุณสำหรับการติดตาม!" : lang === "fr" ? "Merci pour votre inscription !" : "Thank you for subscribing!"}
                </p>
                <p className="font-sans text-xs text-[#AFAFA9]">
                  {lang === "th" ? "เราจะแจ้งเตือนคุณทันทีที่คอลเลกชันเปิดตัว" : lang === "fr" ? "Nous vous informerons dès le lancement." : "We will notify you the moment this collection launches."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={lang === "th" ? "ใส่อีเมลของคุณเพื่อรับการแจ้งเตือน" : lang === "fr" ? "Votre adresse email" : "Enter email for launch updates"}
                  required
                  className="flex-1 bg-[#111111] border border-[#F5F2EA]/20 px-4 py-3 text-sm text-[#F5F2EA] placeholder-[#AFAFA9]/50 focus:outline-none focus:border-[#B08A3E] transition-calm"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#B08A3E] hover:bg-[#c49c48] text-[#111111] font-sans text-xs font-bold uppercase tracking-wider transition-calm cursor-pointer"
                >
                  {lang === "th" ? "แจ้งเตือนฉัน" : lang === "fr" ? "M'avertir" : "Notify Me"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 3. Upcoming Preview Previews */}
        <div className="space-y-6 md:space-y-8">
          <div className="text-center space-y-2">
            <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-[#B08A3E]">
              {lang === "th" ? "ตัวอย่างคอลเลกชันที่กำลังจะเปิดตัว" : lang === "fr" ? "APERÇU DE LA COLLECTION" : "UPCOMING CURATIONS"}
            </span>
            <h3 className="font-serif-display text-2xl md:text-3xl text-[#F5F2EA] font-light">
              {lang === "th" ? "สิ่งที่จะได้สัมผัสใน Art & Primitive" : lang === "fr" ? "À découvrir prochainement" : "Sneak Peek of the Upcoming Archive"}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {upcomingCollections.map((col) => {
              const curTitle = lang === "th" ? col.titleTh : lang === "fr" ? col.titleFr : col.titleEn;
              const curDesc = lang === "th" ? col.descTh : lang === "fr" ? col.descFr : col.descEn;
              return (
                <div
                  key={col.id}
                  className="border border-[#F5F2EA]/10 bg-[#161616] p-5 sm:p-6 space-y-3.5 hover:border-[#B08A3E]/40 transition-calm"
                >
                  <div className="w-full aspect-[4/3] bg-[#111111] border border-[#F5F2EA]/5 flex items-center justify-center p-4 relative overflow-hidden group">
                    <span className="font-serif-display text-xs sm:text-sm italic text-[#B08A3E]/70 tracking-wider font-medium">
                      Artifact {col.id} • Archive
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <span className="font-sans text-xs font-bold tracking-widest text-[#B08A3E] uppercase block">
                    Collection {col.id}
                  </span>
                  <h4 className="font-serif-display text-lg sm:text-xl text-[#F5F2EA] font-light leading-snug">
                    {curTitle}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[#F5F2EA]/80 leading-relaxed">
                    {curDesc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. Bottom Contact Link */}
        <div className="text-center pt-8 border-t border-[#F5F2EA]/10 space-y-4">
          <p className="font-sans text-xs text-[#AFAFA9]">
            {lang === "th"
              ? "สนใจสั่งทำชิ้นงานศิลปะหรือร่วมจัดแสดงนิทรรศการ ติดต่อทีมงานได้โดยตรง"
              : lang === "fr"
              ? "Pour les commandes privées d'œuvres d'art ou propositions d'exposition, contactez-nous."
              : "For private commissions of primitive artifacts or exhibition collaborations, contact us directly."}
          </p>
          <Link
            to={`/${lang}/contact`}
            className="inline-block px-6 py-2.5 border border-[#F5F2EA]/20 hover:border-[#B08A3E] hover:text-[#B08A3E] font-sans text-xs font-bold uppercase tracking-widest transition-calm text-[#F5F2EA]"
          >
            {lang === "th" ? "ติดต่อเรา (Contact Us)" : lang === "fr" ? "Nous Contacter" : "Contact Atelier"}
          </Link>
        </div>
      </div>
    </div>
  );
}
