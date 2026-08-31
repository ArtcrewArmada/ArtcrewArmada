import { useParams } from "react-router";
import { getTranslation } from "~/locales/dictionary";

export default function AwarenessCenter() {
  const params = useParams();
  const lang = params.lang || "th";
  const t = getTranslation(lang);

  const localizedContent = {
    th: {
      subtitle: "วิสัยทัศน์และการตระหนักรู้งานศิลปหัตถกรรม",
      description: "พื้นที่สร้างแรงบันดาลใจและจิตสำนึกร่วมเพื่อรักษามรดกทางวัฒนธรรม ต่อยอดด้วยนวัตกรรม และสร้างสะพานเชื่อมช่างฝีมือชุมชนสู่งานออกแบบระดับสากล",
      section1Title: "เป้าหมายและวิสัยทัศน์ (Our Vision)",
      section1Desc: "เรามุ่งหวังที่จะเปลี่ยนมุมมองต่อหัตถกรรม จากเพียงผลิตภัณฑ์ของที่ระลึก สู่คุณค่าของ 'กระบวนการคิด' และ 'ฝีมือมนุษย์' ที่ไม่สามารถทดแทนด้วยเครื่องจักร สร้างความยั่งยืนที่แท้จริงให้ชุมชน",
      pillarsTitle: "แกนหลักของศูนย์การตระหนักรู้",
      pillars: [
        {
          title: "Exhibition & Gallery",
          desc: "นิทรรศการหมุนเวียนจัดแสดงผลงานฝีมือดั้งเดิม เทียบเคียงกับชิ้นงานออกแบบร่วมสมัยเพื่อจุดประกายความคิดสร้างสรรค์ใหม่ๆ"
        },
        {
          title: "Workshops & Dialogue",
          desc: "เปิดพื้นที่เรียนรู้ แลกเปลี่ยนความรู้โดยช่างฝีมือตัวจริง ผ่านงานเวิร์กชอป สัมมนา ทอล์ก และการมีส่วนร่วมเชิงปฏิบัติการ"
        },
        {
          title: "Craft Preservation",
          desc: "การรวบรวม จดบันทึก และบันทึกประวัติศาสตร์เทคนิคงานฝีมือโบราณที่กำลังสูญหายให้ยังคงอยู่เพื่อการเรียนรู้ในอนาคต"
        },
        {
          title: "Artistic Collaboration",
          desc: "เปิดพื้นที่ร่วมมือระหว่างศิลปิน ดีไซเนอร์ยุคใหม่ และช่างฝีมือดั้งเดิม เพื่อสร้างสรรค์ผลงานข้ามสายอาชีพและนวัตกรรมใหม่"
        }
      ],
      ctaTitle: "มาร่วมเป็นส่วนหนึ่งกับเราในการสร้างสรรค์และสืบสานคุณค่างานฝีมือดั้งเดิม",
      ctaBtn: "สมัครเข้าร่วมเครือข่ายความร่วมมือ"
    },
    en: {
      subtitle: "Vision and Awareness of Artistic Craftsmanship",
      description: "An inspiring hub dedicated to preserving cultural heritage, advancing sustainable innovation, and building bridges between community artisans and global design networks.",
      section1Title: "Our Core Vision",
      section1Desc: "We aim to shift the perception of handcraft from mere souvenirs to the deep appreciation of the 'thought process' and 'human skill' that machinery can never replicate.",
      pillarsTitle: "Our Core Pillars",
      pillars: [
        {
          title: "Exhibition & Gallery",
          desc: "Rotating curation displaying traditional masterpieces alongside contemporary designs to ignite fresh creative dialogs."
        },
        {
          title: "Workshops & Dialogue",
          desc: "Active learning spaces exchanging knowledge from genuine master artisans through interactive workshops, seminars, and talks."
        },
        {
          title: "Craft Preservation",
          desc: "Documenting, archiving, and cataloging endangered traditional craft techniques to keep them alive for future generations."
        },
        {
          title: "Artistic Collaboration",
          desc: "A cooperative playground inviting modern artists, designers, and native craftspeople to co-create multidisciplinary innovations."
        }
      ],
      ctaTitle: "Join us in co-creating and sustaining the invaluable legacy of handcrafts.",
      ctaBtn: "Collaborate With Us"
    },
    fr: {
      subtitle: "Vision et Sensibilisation à l'Artisanat Artistique",
      description: "Un espace inspirant dédié à la préservation du patrimoine culturel, à l'innovation durable, et à la création de liens entre les artisans locaux et le design mondial.",
      section1Title: "Notre Vision",
      section1Desc: "Nous visons à changer la perception de l'artisanat, passant d'un simple souvenir à l'appréciation du 'processus créatif' et du 'savoir-faire humain' irremplaçables.",
      pillarsTitle: "Nos Piliers Fondateurs",
      pillars: [
        {
          title: "Exposition & Galerie",
          desc: "Des expositions temporaires présentant des chefs-d'œuvre traditionnels à côté de designs modernes pour susciter un dialogue créatif."
        },
        {
          title: "Ateliers & Dialogue",
          desc: "Des espaces d'apprentissage interactifs avec des maîtres artisans locaux à travers des ateliers, séminaires et discussions."
        },
        {
          title: "Préservation de l'Artisanat",
          desc: "Documenter et archiver les techniques artisanales en voie de disparition pour assurer leur transmission aux générations futures."
        },
        {
          title: "Collaboration Artistique",
          desc: "Un espace de co-création invitant les artistes contemporains et les artisans traditionnels à fusionner leurs univers."
        }
      ],
      ctaTitle: "Rejoignez-nous pour co-créer et perpétuer l'héritage inestimable de l'artisanat.",
      ctaBtn: "Collaborer avec nous"
    }
  };

  const content = localizedContent[lang as SupportedLanguage] || localizedContent.en;

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">
      {/* Hero Header */}
      <div className="space-y-6 max-w-3xl">
        <span className="font-sans text-[10px] font-bold tracking-[0.45em] uppercase text-armada-sand">
          {content.subtitle}
        </span>
        <h1 className="font-headline font-light text-5xl text-armada-navy leading-tight">
          {t.nav.awareness}
        </h1>
        <p className="font-serif text-sm text-armada-navy/60 leading-relaxed">
          {content.description}
        </p>
      </div>

      {/* Narrative Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-armada-sand/5 p-8 lg:p-12 border border-armada-sand/10">
        <div className="space-y-6">
          <h2 className="font-headline text-3xl text-armada-navy">{content.section1Title}</h2>
          <p className="font-sans text-xs text-armada-navy/75 leading-relaxed">
            {content.section1Desc}
          </p>
          <div className="pt-2">
            <div className="flex items-center space-x-4">
              <span className="h-[1px] w-12 bg-armada-sand" />
              <span className="font-sans text-[9px] font-bold tracking-widest text-armada-sand uppercase">Awareness Center Vision</span>
            </div>
          </div>
        </div>
        <div className="aspect-[16/10] bg-armada-navy/5 flex items-center justify-center p-6 border border-armada-navy/10 relative overflow-hidden">
          {/* SVG Abstract Line Decoration */}
          <svg className="absolute inset-0 w-full h-full text-armada-sand/20 stroke-current" viewBox="0 0 100 100" fill="none" preserveAspectRatio="none">
            <path d="M10,90 Q50,10 90,90" strokeWidth="0.5" />
            <path d="M20,90 Q50,20 80,90" strokeWidth="0.5" />
          </svg>
          <span className="font-headline text-sm italic text-armada-navy/30 relative z-10">Art & Craft Awareness Facility</span>
        </div>
      </div>

      {/* Pillars Grid */}
      <div className="space-y-12">
        <div className="text-center space-y-3">
          <span className="font-sans text-[9px] font-bold tracking-widest uppercase text-armada-sand">Core Strategy</span>
          <h2 className="font-headline text-3xl text-armada-navy">{content.pillarsTitle}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.pillars.map((pillar, idx) => (
            <div key={idx} className="border border-armada-navy/10 p-6 bg-white space-y-4 hover:border-armada-sand/30 hover:-translate-y-1 transition-all duration-300">
              <div className="w-8 h-8 rounded-full bg-armada-sand/10 border border-armada-sand/20 flex items-center justify-center text-armada-sand font-headline text-xs font-bold">
                0{idx + 1}
              </div>
              <h3 className="font-headline text-xl text-armada-navy">{pillar.title}</h3>
              <p className="font-sans text-xs text-armada-navy/60 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call To Action */}
      <div className="bg-armada-navy text-armada-ivory p-8 lg:p-12 text-center space-y-6">
        <h3 className="font-headline text-2xl lg:text-3xl text-armada-sand max-w-xl mx-auto leading-relaxed">
          {content.ctaTitle}
        </h3>
        <button className="border border-armada-sand px-8 py-3 font-sans text-xs font-bold tracking-widest uppercase hover:bg-armada-sand hover:text-armada-navy transition-calm">
          {content.ctaBtn}
        </button>
      </div>

    </div>
  );
}

type SupportedLanguage = "th" | "en" | "fr";
