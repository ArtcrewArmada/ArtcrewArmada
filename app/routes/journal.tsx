import { useState } from "react";
import { useParams, Link } from "react-router";
import { getTranslation } from "~/locales/dictionary";
import { PageHero } from "~/components/ui/page-hero";

export default function Journal() {
  const params = useParams();
  const lang = params.lang || "th";
  const t = getTranslation(lang);
  const s = (t.home as any).sections?.journal || {};

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  const upcomingEssays = [
    {
      id: "01",
      categoryTh: "หัตถศิลป์ & เรื่องราวผู้คน",
      categoryEn: "Craft & Artisan Stories",
      categoryFr: "Artisanat & Histoires Humaines",
      titleTh: "เส้นสายเบื้องหลังภูมิปัญญาจักสานไม้ไผ่โบราณ",
      titleEn: "The Hands Behind Ancient Bamboo Weaving Traditions",
      titleFr: "Les Mains Derrière le Tissage Ancestral du Bambou",
      excerptTh: "เจาะลึกเรื่องราวของช่างฝีมือพื้นถิ่น ผู้สืบทอดภูมิปัญญาการจักสานไม้ไผ่โบราณสู่ผลงานร่วมสมัยระดับสากล",
      excerptEn: "Exploring the life and dexterous techniques of master weavers translating ancient bamboo knowledge into modern design.",
      excerptFr: "Immersion dans la vie des maîtres vanniers transmettant un savoir-faire millénaire au design contemporain.",
    },
    {
      id: "02",
      categoryTh: "ความยั่งยืน & อัปไซคลิง",
      categoryEn: "Sustainability & Circularity",
      categoryFr: "Durabilité & Économie Circulaire",
      titleTh: "จากฝาดึงกระป๋องสู่เครื่องประดับ Eco-Luxury ระดับรางวัล",
      titleEn: "From Discarded Pull Tabs to Award-Winning Eco-Luxury Jewelry",
      titleFr: "Des Languettes Recyclées aux Bijoux Éco-Luxe Primés",
      excerptTh: "กระบวนการแปลงเศษอะลูมิเนียมเหลือใช้ในกระบวนการบริโภค ให้กลายเป็นผลงานหัตถศิลป์ล้ำค่าภายใต้แนวคิด Circular Economy",
      excerptEn: "The transformative alchemical journey converting industrial aluminum pull tabs into high-concept conscious luxury.",
      excerptFr: "Le voyage alchimique transformant des languettes d'aluminium en pièces de haute joaillerie éco-responsable.",
    },
    {
      id: "03",
      categoryTh: "เทคนิค & งานวิจัยศิลป์",
      categoryEn: "Techniques & Research",
      categoryFr: "Techniques & Recherche d'Art",
      titleTh: "สุนทรียศาสตร์แห่งมาร์ปูเช่: การเคาะดุนโลหะทองเหลืองไร้รอยต่อ",
      titleEn: "The Mapuche Aesthetic: Seamless Chasing and Volume in Brass",
      titleFr: "L'Esthétique Mapuche : Ciselure et Volume dans le Laiton",
      excerptTh: "การศึกษาวิจัยเชิงลึกถึงวิธีการสร้างเครื่องประดับขนาดโอเวอร์ไซส์ที่มีน้ำหนักเบาและสวมใส่สบายจริงตามหลักการยศาสตร์",
      excerptEn: "Deep-dive technical exploration into hollow-core repoussé and structural chasing for monumental wearable art.",
      excerptFr: "Exploration technique approfondie de la ciselure et du repoussage pour des bijoux monumentaux ultra-légers.",
    },
  ];

  return (
    <div className="bg-[#111111] text-[#F5F2EA] min-h-screen pb-28">
      {/* 1. Page Header */}
      <PageHero
        badge={lang === "th" ? "บันทึกเรื่องราวและงานวิจัย" : lang === "fr" ? "JOURNAL DE L'ATELIER" : "ATELIER JOURNAL"}
        title={s.title || (lang === "th" ? "Stories Behind the Craft" : "Stories Behind the Craft")}
        desc={
          lang === "th"
            ? "เรื่องราว กระบวนการ แรงบันดาลใจ และมุมมองจากโลกของ Art & Craft"
            : lang === "fr"
            ? "Histoires, processus, inspirations et perspectives du monde de l'Art & de l'Artisanat."
            : "Essays, research archives, artisan voices, and inspirations from the atelier."
        }
      />

      {/* 2. Coming Soon Showcase */}
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">
        <div className="border border-[#B08A3E]/30 bg-[#161616] p-10 md:p-16 text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#B08A3E]/5 rounded-full blur-3xl"></div>

          <div className="space-y-4 relative z-10">
            <span className="inline-block px-3.5 py-1 text-[9px] font-sans font-bold tracking-[0.35em] uppercase bg-[#B08A3E]/10 border border-[#B08A3E]/30 text-[#B08A3E]">
              {lang === "th" ? "กำลังจัดเตรียมคลังบทความ" : lang === "fr" ? "ÉDITION EN COURS" : "EDITORIAL IN PROGRESS"}
            </span>
            <h2 className="font-serif-display text-4xl md:text-6xl text-[#F5F2EA] font-light">
              Coming Soon
            </h2>
            <p className="font-sans text-xs md:text-sm text-[#AFAFA9] max-w-xl mx-auto leading-relaxed">
              {lang === "th"
                ? "เรากำลังเรียบเรียงบทความวิจัย บันทึกกระบวนการสร้างสรรค์ และบทสัมภาษณ์ช่างฝีมือเพื่อเผยแพร่องค์ความรู้หัตถศิลป์สู่สาธารณะ ติดตามอ่านฉบับเต็มได้เร็วๆ นี้"
                : lang === "fr"
                ? "Notre équipe éditoriale prépare actuellement une série d'essais approfondis, d'interviews de maîtres artisans et d'analyses techniques sur l'artisanat contemporain."
                : "Our editorial team is compiling in-depth essays, technical research papers, and master artisan interviews exploring the soul of contemporary craft."}
            </p>
          </div>

          {/* Email Subscription Form */}
          <div className="max-w-md mx-auto relative z-10 pt-4">
            {subscribed ? (
              <div className="p-4 bg-[#B08A3E]/10 border border-[#B08A3E]/40 text-center space-y-1">
                <p className="font-sans text-xs font-bold text-[#F5F2EA]">
                  {lang === "th" ? "ขอบคุณสำหรับการติดตาม!" : lang === "fr" ? "Merci pour votre inscription !" : "Thank you for subscribing!"}
                </p>
                <p className="font-sans text-[10px] text-[#AFAFA9]">
                  {lang === "th" ? "เราจะส่งบทความแรกให้คุณทันทีที่เปิดตัว" : lang === "fr" ? "Vous recevrez nos premières parutions." : "You'll receive our premiere essays upon publication."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={lang === "th" ? "ใส่อีเมลของคุณเพื่อรับบทความใหม่" : lang === "fr" ? "Votre adresse email" : "Enter email for editorial releases"}
                  required
                  className="flex-1 bg-[#111111] border border-[#F5F2EA]/20 px-4 py-2.5 text-xs text-[#F5F2EA] placeholder-[#AFAFA9]/40 focus:outline-none focus:border-[#B08A3E] transition-calm"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#B08A3E] hover:bg-[#c49c48] text-[#111111] font-sans text-xs font-bold uppercase tracking-wider transition-calm"
                >
                  {lang === "th" ? "ติดตามบทความ" : lang === "fr" ? "S'abonner" : "Subscribe"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 3. Upcoming Essays Preview */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="font-sans text-[9px] font-bold tracking-[0.3em] uppercase text-[#B08A3E]">
              {lang === "th" ? "บทความที่กำลังจะเผยแพร่" : lang === "fr" ? "PROCHAINES PARUTIONS" : "UPCOMING ESSAYS"}
            </span>
            <h3 className="font-serif-display text-2xl md:text-3xl text-[#F5F2EA] font-light">
              {lang === "th" ? "คลังความรู้เบื้องหลังงานหัตถศิลป์" : lang === "fr" ? "Au Cœur de la Création" : "Inside the Artisan Mind"}
            </h3>
          </div>

          <div className="space-y-6">
            {upcomingEssays.map((post) => {
              const curCat = lang === "th" ? post.categoryTh : lang === "fr" ? post.categoryFr : post.categoryEn;
              const curTitle = lang === "th" ? post.titleTh : lang === "fr" ? post.titleFr : post.titleEn;
              const curExcerpt = lang === "th" ? post.excerptTh : lang === "fr" ? post.excerptFr : post.excerptEn;
              return (
                <article
                  key={post.id}
                  className="border border-[#F5F2EA]/10 bg-[#161616] p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center hover:border-[#B08A3E]/40 transition-calm"
                >
                  <div className="md:col-span-3 aspect-[4/3] bg-[#111111] border border-[#F5F2EA]/5 flex items-center justify-center p-4">
                    <span className="font-serif-display text-xs italic text-[#B08A3E]/50 tracking-wider">
                      Issue {post.id} • Draft
                    </span>
                  </div>
                  <div className="md:col-span-9 space-y-3">
                    <span className="font-sans text-[9px] font-bold tracking-widest text-[#B08A3E] uppercase">
                      {curCat}
                    </span>
                    <h4 className="font-serif-display text-xl md:text-2xl text-[#F5F2EA] font-light leading-snug">
                      {curTitle}
                    </h4>
                    <p className="font-sans text-xs text-[#AFAFA9] leading-relaxed">
                      {curExcerpt}
                    </p>
                    <span className="inline-block text-[9px] font-sans font-bold uppercase tracking-widest text-[#F5F2EA]/40">
                      {lang === "th" ? "ฉบับเต็มเร็วๆ นี้" : lang === "fr" ? "À paraître bientôt" : "Full Story Publishing Soon"}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* 4. Bottom Link */}
        <div className="text-center pt-8 border-t border-[#F5F2EA]/10 space-y-4">
          <p className="font-sans text-xs text-[#AFAFA9]">
            {lang === "th"
              ? "ต้องการส่งบทความ หรือร่วมเขียนเนื้อหากับเรา ติดต่อกองบรรณาธิการได้ที่นี่"
              : lang === "fr"
              ? "Pour soumettre un article ou collaborer sur nos publications, contactez notre équipe."
              : "Interested in contributing or collaborating with our editorial archive? Contact us directly."}
          </p>
          <Link
            to={`/${lang}/contact`}
            className="inline-block px-6 py-2.5 border border-[#F5F2EA]/20 hover:border-[#B08A3E] hover:text-[#B08A3E] font-sans text-xs font-bold uppercase tracking-widest transition-calm text-[#F5F2EA]"
          >
            {lang === "th" ? "ติดต่อกองบรรณาธิการ" : lang === "fr" ? "Contacter l'Équipe" : "Contact Editorial"}
          </Link>
        </div>
      </div>
    </div>
  );
}
