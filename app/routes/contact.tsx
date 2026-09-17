import { useState } from "react";
import { useParams } from "react-router";
import { getTranslation } from "~/locales/dictionary";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { PageHero } from "~/components/ui/page-hero";

export default function Contact() {
  const params = useParams();
  const lang = params.lang || "th";
  const t = getTranslation(lang);
  const s = (t.home as any).sections?.contact || {};

  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="bg-[#111111] text-[#F5F2EA] min-h-screen pb-28">
      {/* 1. Page Header */}
      <PageHero
        badge={lang === "th" ? "ติดต่อและร่วมงาน" : lang === "fr" ? "CONTACT & COLLABORATION" : "CONTACT & COLLABORATION"}
        title={s.title || (lang === "th" ? "Let’s Create & Connect" : "Let’s Create & Connect")}
        desc={
          lang === "th"
            ? "พูดคุยกับเราเกี่ยวกับงานสร้างสรรค์ ผลิตภัณฑ์ ความร่วมมือ เวิร์กชอป หรือสั่งทำชิ้นงานพิเศษ (Bespoke Salon)"
            : lang === "fr"
            ? "Échangeons sur vos projets créatifs, commandes privées, collaborations ou ateliers d'artisanat."
            : "Connect with us regarding custom creations, bespoke jewelry commissions, community masterclasses, or business partnerships."
        }
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-12 md:space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
          
          {/* Column 1: Info Card + LINE QR Code (5 cols) */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8">
            
            {/* Atelier Contact Card */}
            <div className="bg-[#161616] border border-[#F5F2EA]/10 p-6 sm:p-8 space-y-6">
              <div className="space-y-1">
                <h3 className="font-serif-display text-xl sm:text-2xl text-[#F5F2EA] tracking-wide">
                  ARTCREW ARMADA
                </h3>
                <p className="font-sans text-xs font-bold tracking-[0.2em] text-[#B08A3E] uppercase">
                  Art & Craft / Bespoke Atelier / Circular Economy
                </p>
              </div>

              <div className="space-y-4 font-sans text-xs sm:text-sm text-[#F5F2EA]/85 leading-relaxed pt-3 border-t border-[#F5F2EA]/10">
                <div>
                  <span className="text-[#F5F2EA] font-bold block text-xs uppercase tracking-wider text-[#B08A3E]">
                    {lang === "th" ? "ผู้ก่อตั้ง & ผู้ประสานงาน" : lang === "fr" ? "Fondatrice & Contact" : "Founder & Contact"}:
                  </span>
                  <span>วิภาวดี โลเปซ (Wipawadee Lopez)</span>
                </div>

                <div>
                  <span className="text-[#F5F2EA] font-bold block text-xs uppercase tracking-wider text-[#B08A3E]">Email:</span>
                  <a href="mailto:armada.th2025@gmail.com" className="hover:text-[#B08A3E] transition-calm">
                    armada.th2025@gmail.com
                  </a>
                </div>

                <div>
                  <span className="text-[#F5F2EA] font-bold block text-xs uppercase tracking-wider text-[#B08A3E]">
                    {lang === "th" ? "เบอร์โทรศัพท์" : lang === "fr" ? "Téléphone" : "Phone"}:
                  </span>
                  <a href="tel:+66848786297" className="hover:text-[#B08A3E] transition-calm">
                    +66 84 878 6297
                  </a>
                </div>

                <div>
                  <span className="text-[#F5F2EA] font-bold block text-xs uppercase tracking-wider text-[#B08A3E]">
                    {lang === "th" ? "ช่องทางโซเชียลมีเดีย" : lang === "fr" ? "Réseaux Sociaux" : "Social Channels"}:
                  </span>
                  <div className="flex flex-col gap-1 pt-1 text-[#F5F2EA]/80">
                    <span><strong>Facebook:</strong> ArtcrewArmada</span>
                    <span><strong>Instagram:</strong> armada.th</span>
                  </div>
                </div>

                <div>
                  <span className="text-[#F5F2EA] font-bold block text-xs uppercase tracking-wider text-[#B08A3E]">
                    {lang === "th" ? "ที่ตั้งสตูดิโอ" : lang === "fr" ? "Atelier" : "Studio Location"}:
                  </span>
                  <span>Nonthaburi, Thailand</span>
                </div>
              </div>
            </div>

            {/* LINE Official QR Code Card */}
            <div className="bg-[#161616] border border-[#06C755]/40 p-6 space-y-4 text-center relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#06C755]/10 rounded-full blur-xl"></div>
              
              <div className="flex items-center justify-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#06C755] animate-pulse"></span>
                <span className="font-sans text-xs font-bold tracking-[0.2em] text-[#06C755] uppercase">
                  LINE Official Account
                </span>
              </div>

              <div className="p-3 bg-white max-w-[220px] mx-auto rounded shadow-lg border border-gray-200">
                <img
                  src="/images/contact/line-qr.png"
                  alt="LINE Official QR Code - ArtcrewArmada"
                  className="w-full h-auto object-contain mx-auto"
                />
              </div>

              <div className="space-y-1.5">
                <p className="font-sans text-xs sm:text-sm text-[#F5F2EA] font-semibold">
                  {lang === "th" ? "สแกน QR Code เพื่อแอดไลน์สอบถามโดยตรง" : lang === "fr" ? "Scannez le QR Code pour nous contacter sur LINE" : "Scan QR Code to chat with us on LINE"}
                </p>
                <p className="font-sans text-xs text-[#AFAFA9]">
                  {lang === "th" ? "ปรึกษางานสั่งทำพิเศษ, จองเวิร์กชอป และสอบถามสินค้า" : lang === "fr" ? "Commandes sur mesure, ateliers et informations produits" : "Direct salon inquiries, masterclass reservations & products"}
                </p>
              </div>
            </div>

          </div>

          {/* Column 2: Interactive Contact / Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#161616] border border-[#F5F2EA]/10 p-6 sm:p-8 md:p-10 space-y-6 md:space-y-8">
            <div className="space-y-2">
              <span className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-[#B08A3E]">
                {lang === "th" ? "ส่งข้อความถึงทีมงาน" : lang === "fr" ? "FORMULAIRE DE CONTACT" : "SEND AN INQUIRY"}
              </span>
              <h3 className="font-serif-display text-2xl md:text-3xl text-[#F5F2EA] font-light">
                {lang === "th" ? "ร่วมพูดคุยและสร้างสรรค์ผลงาน" : lang === "fr" ? "Échangeons sur votre projet" : "Initiate a Creative Dialogue"}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#AFAFA9]">
                {lang === "th"
                  ? "กรอกข้อมูลด้านล่าง ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง"
                  : lang === "fr"
                  ? "Remplissez le formulaire ci-dessous, nous vous répondrons sous 24 heures."
                  : "Please provide your project details and our team will respond within 24 hours."}
              </p>
            </div>

            {formSent ? (
              <div className="p-8 bg-[#B08A3E]/10 border border-[#B08A3E]/30 text-center space-y-3">
                <span className="text-3xl">✦</span>
                <h4 className="font-serif-display text-xl text-[#F5F2EA]">
                  {lang === "th" ? "ส่งข้อความเรียบร้อยแล้ว" : lang === "fr" ? "Message envoyé avec succès" : "Inquiry Received"}
                </h4>
                <p className="font-sans text-sm text-[#F5F2EA]/85 max-w-md mx-auto leading-relaxed">
                  {lang === "th"
                    ? "ขอบคุณสำหรับความสนใจใน Artcrew Armada ทีมงานได้รับข้อมูลแล้วและจะติดต่อกลับโดยเร็วที่สุดครับ"
                    : lang === "fr"
                    ? "Merci pour votre intérêt pour Artcrew Armada. Notre équipe vous contactera dans les plus brefs délais."
                    : "Thank you for reaching out to Artcrew Armada. We look forward to collaborating with you."}
                </p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input
                    label={lang === "th" ? "ชื่อของคุณ (Name)" : lang === "fr" ? "Nom complet" : "Your Name"}
                    placeholder={lang === "th" ? "ระบุชื่อ-นามสกุล" : lang === "fr" ? "Votre nom" : "Full Name"}
                    required
                  />
                  <Input
                    label="Email"
                    type="email"
                    placeholder="name@domain.com"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input
                    label={lang === "th" ? "เบอร์โทรศัพท์ (Phone)" : lang === "fr" ? "Téléphone" : "Phone Number"}
                    type="tel"
                    placeholder="+66..."
                  />
                  <Input
                    label={lang === "th" ? "ประเภทงาน (Topic)" : lang === "fr" ? "Objet de la demande" : "Inquiry Subject"}
                    placeholder={lang === "th" ? "เช่น สั่งทำเครื่องประดับ / เวิร์กชอป" : lang === "fr" ? "ex. Commande sur mesure" : "e.g. Bespoke / Masterclass"}
                    required
                  />
                </div>

                <div className="flex flex-col space-y-1.5 w-full">
                  <label className="font-sans text-xs font-bold tracking-wider uppercase text-[#AFAFA9]">
                    {lang === "th" ? "รายละเอียดข้อความ (Message)" : lang === "fr" ? "Votre Message" : "Message"}
                  </label>
                  <textarea
                    rows={5}
                    className="bg-transparent border-b border-[#F5F2EA]/20 py-2.5 px-1 text-sm md:text-base text-[#F5F2EA] placeholder-[#AFAFA9]/40 focus:outline-none focus:border-[#B08A3E] transition-calm resize-none"
                    placeholder={
                      lang === "th"
                        ? "บอกเล่าไอเดีย จำนวน หรือรูปแบบความร่วมมือที่คุณสนใจ..."
                        : lang === "fr"
                        ? "Décrivez votre projet, vos inspirations ou vos souhaits de collaboration..."
                        : "Tell us about your project vision, timeline, or collaboration ideas..."
                    }
                    required
                  />
                </div>

                <Button variant="navy" className="w-full py-3.5 bg-[#B08A3E] hover:bg-[#c49c48] text-[#111111] font-bold uppercase tracking-widest text-xs cursor-pointer">
                  {lang === "th" ? "ส่งข้อความ (Send Inquiry)" : lang === "fr" ? "Envoyer le Message" : "Send Inquiry"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
