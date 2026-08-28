export type SupportedLanguage = "th" | "en" | "fr";

export const defaultLanguage: SupportedLanguage = "th";
export const supportedLanguages: SupportedLanguage[] = ["th", "en", "fr"];

export const dictionary = {
  th: {
    nav: {
      about: "เกี่ยวกับเรา",
      craft: "งานฝีมือและการสร้างสรรค์",
      upcycling: "ARMADA อัปไซคลิง",
      primitive: "ศิลปะพื้นถิ่น",
      shop: "ร้านค้า",
      learning: "การเรียนรู้และกิจกรรม",
      journal: "บันทึกเรื่องราว",
      awareness: "ศูนย์สร้างความตระหนักรู้ด้านศิลปะ",
      contact: "ติดต่อและการร่วมงาน",
      dashboard: "แดชบอร์ด",
    },
    home: {
      heroTitle: "คุณค่าจากงานฝีมือ เชื่อมโยงผู้คน สู่นวัตกรรมที่ยั่งยืน",
      heroSubtitle: "การเดินทางจากความเข้าใจในวัสดุ สู่ศิลปะประยุกต์และงานออกแบบเพื่ออนาคต",
      exploreBtn: "สำรวจผลงาน",
      shopBtn: "สนับสนุนสินค้า",
      featuredTitle: "คอลเลกชันเด่น",
      activitiesTitle: "เวิร์กชอปและกิจกรรมล่าสุด",
    },
    about: {
      philosophyTitle: "ปรัชญาหัตถกรรม",
      philosophyQuote: "“คุณค่าที่แท้จริงของงานหัตถกรรมไม่ได้อยู่เพียงการสร้างชิ้นงาน แต่คือการสร้างคุณค่าให้กับผู้คน ชุมชน และสังคมอย่างยั่งยืน”",
      founderTitle: "ผู้ก่อตั้ง",
      founderName: "วิภาวดี โลเปซ",
      founderRole: "Craft Producer & Product Developer",
      founderStory: "นักพัฒนาผลิตภัณฑ์และผู้สร้างสรรค์งานหัตถกรรมร่วมสมัยที่มีประสบการณ์มากกว่า 20 ปี ครอบคลุมงานออกแบบ การผลิตเพื่อการส่งออก และการพัฒนางานหัตถกรรมร่วมกับชุมชน ตลอดเส้นทางการทำงาน เธอได้ผสมผสานงานฝีมือเข้ากับการออกแบบร่วมสมัย พร้อมสร้างโอกาสทางอาชีพและการเรียนรู้ผ่านเครือข่ายชุมชน จนนำไปสู่การก่อตั้ง ARTcrew ARMADA และแบรนด์ ARMADA",
      experience: "ประสบการณ์",
      experienceVal: "20+ ปี",
      expertise: "ความเชี่ยวชาญ",
      expertiseVal: "การพัฒนาหัตถกรรม / ออกแบบผลิตภัณฑ์ / วิสาหกิจชุมชน / หัตถกรรมที่ยั่งยืน",
      location: "ที่ตั้ง",
      locationVal: "นนทบุรี, ประเทศไทย",
      journeyTitle: "เส้นทางการเดินทาง",
      journeySubtitle: "จากงานฝีมือ สู่การสร้างคุณค่าอย่างยั่งยืน",
      journey: {
        y2543: {
          title: "เริ่มต้นธุรกิจค้าปลีก",
          desc: "บริหารธุรกิจร้านผ้าเช็ดหน้าและร้านเสื้อผ้า เรียนรู้การตลาดและการพัฒนาสินค้าพื้นฐาน"
        },
        y2547: {
          title: "จัดซื้อเพื่อการส่งออก",
          desc: "จัดซื้อเครื่องประดับสำหรับตลาดต่างประเทศ สั่งสมประสบการณ์ด้านมาตรฐานและคุณภาพระดับสากล"
        },
        y2550: {
          title: "เริ่มผลิตและสร้างสรรค์",
          desc: "พัฒนาทักษะการออกแบบและผลิตงานฝีมือ สร้างเครือข่ายผู้ผลิตและช่างฝีมือในหลายพื้นที่"
        },
        yPresent: {
          title: "พัฒนาชุมชนและก่อตั้งแบรนด์",
          desc: "ถ่ายทอดความรู้แก่กลุ่มแม่บ้าน สตรี ผู้สูงอายุ ก่อตั้ง ARTcrew ARMADA เป็นพื้นที่พัฒนาผลิตภัณฑ์ และริเริ่มแบรนด์ ARMADA สู่ผลิตภัณฑ์ Eco-Luxury อัปไซคลิงฝาดึงกระป๋องตามแนวคิด Circular Economy"
        }
      },
      techniquesTitle: "เทคนิคและความเชี่ยวชาญ",
      techniquesSubtitle: "งานฝีมือที่ผสมผสานความประณีตดั้งเดิมเข้ากับมุมมองร่วมสมัย",
      techMetalTitle: "การขึ้นรูปโลหะและเคาะลาย (Metal Forming & Texturing)",
      techMetalDesc: "ดุนและเคาะโลหะด้วยมือให้เกิดมิติ ลวดลายเป็นเอกลักษณ์สไตล์มาร์ปูเช่ (Mapuche) เพื่อสร้างเครื่องประดับทองเหลืองและเครื่องเงินที่มีมิติขนาดใหญ่แต่น้ำหนักเบา สวมใส่ได้จริง",
      techBeadTitle: "งานลูกปัด Peyote Stitch & Bead Loom",
      techBeadDesc: "การร้อยและทอลูกปัดบนกี่ทอที่อาศัยความละเอียดและแม่นยำสูง Peyote Stitch สร้างมิติสามมิติที่หลากหลาย ส่วน Bead Loom ทอลวดลายคมชัดประณีตสูง",
      techWireTitle: "งานดัดลวด (Wire Work)",
      techWireDesc: "การขึ้นรูป ขด พัน และถักทอลวดเงิน/ทองเหลือง ประกอบเข้ากับหินธรรมชาติและลูกปัด เพื่อสร้างเครื่องประดับหัตถศิลป์ที่มีความอ่อนช้อย",
      techThreadTitle: "เส้นด้ายหลากสี (Chromatic Thread)",
      techThreadDesc: "การพัน ถัก และจัดวางเส้นเชือกหลากสีให้เกิดรูปทรง มิติ และจังหวะลวดลาย ผสมผสานความงามของทฤษฎีสี (Color Harmony) สะท้อนความสมดุลและพลัง",
      techMacrameTitle: "งานมาคราเม่ (Macramé & Micro Macramé)",
      techMacrameDesc: "ศิลปะการผูกปมเชือกด้วยมือ ตั้งแต่งานจิวเวลรีขนาดจิ๋ว (Micro Macramé) ไปจนถึงฉากตกแต่งผนัง โคมไฟแขวน และงานตกแต่งพื้นที่จัดแสดงงานศิลปะ",
      awardsTitle: "รางวัลและการยอมรับ",
      awardsSubtitle: "ความภูมิใจและรางวัลที่การันตีคุณภาพและการขับเคลื่อนด้านสิ่งแวดล้อม",
      awardSacitTitle: "การรับรอง Craft Collection 2025 จาก SACIT",
      awardSacitDesc: "แบรนด์ ARMADA ได้รับการรับรองผลิตภัณฑ์ในหมวด Conscious Craft จากสถาบันส่งเสริมศิลปหัตถกรรมไทย (SACIT) สะท้อนสมดุลระหว่างความงามและสิ่งแวดล้อม",
      awardDipromTitle: "รางวัลชนะเลิศอันดับ 1 Diprom Show 2024",
      awardDipromDesc: "ได้รับรางวัลชนะเลิศสาขา Creative Product จากกรมส่งเสริมอุตสาหกรรม ซึ่งเป็นจุดเริ่มต้นสำคัญในการขับเคลื่อนและพัฒนาแบรนด์อย่างยั่งยืน",
      awardWccTitle: "สู่เวทีนานาชาติ World Crafts Council (WCC)",
      awardWccDesc: "จัดแสดงผลงานและแลกเปลี่ยนองค์ความรู้งานหัตถกรรมร่วมสมัยกับนักสร้างสรรค์จากนานาประเทศ เช่น เทศกาลหัตถกรรมระดับสากลที่เวียดนามและอินเดีย",
      communityTitle: "ผลกระทบต่อชุมชน (Community Impact)",
      communityDesc: "การทำงานของ ARTcrew ARMADA และแบรนด์ ARMADA มุ่งเน้นการถ่ายทอดองค์ความรู้และทักษะหัตถกรรมสู่ชุมชน ผ่านกิจกรรมเวิร์กชอปในหลายพื้นที่ เพื่อสร้างโอกาสทางอาชีพและรายได้ที่ยั่งยืนให้แก่กลุ่มสตรี แม่บ้าน เยาวชน และผู้สูงอายุในท้องถิ่น",
      visionTitle: "วิสัยทัศน์: Craft & Art Awareness Center",
      visionDesc: "ในอนาคต เรามุ่งหวังยกระดับสู่ศูนย์สร้างความตระหนักรู้ด้านศิลปหัตถกรรมและความคิดสร้างสรรค์ เพื่อเป็นพื้นที่วิจัย จัดนิทรรศการ และเปิดรับศิลปินในพำนัก (Artist Residency) ร่วมส่งเสริมศิลปะรักษ์โลก"
    },
    common: {
      readMore: "อ่านเพิ่มเติม",
      buyNow: "ซื้อเลย",
      price: "ราคา",
      stock: "สินค้าคงเหลือ",
      pcs: "ชิ้น",
      back: "ย้อนกลับ",
      learnMore: "เรียนรู้เพิ่มเติม",
      registered: "ลงทะเบียนแล้ว",
      registerBtn: "เข้าร่วมกิจกรรม",
      language: "ภาษา",
    }
  },
  en: {
    nav: {
      about: "About Us",
      craft: "Creation & Craft",
      upcycling: "ARMADA Upcycling",
      primitive: "Art & Primitive",
      shop: "Shop",
      learning: "Learning & Activities",
      journal: "Journal",
      awareness: "Craft & Art Awareness Center",
      contact: "Contact & Collaboration",
      dashboard: "Dashboard",
    },
    home: {
      heroTitle: "Values from Craft, Connecting People to Sustainable Innovation",
      heroSubtitle: "A journey from material comprehension to applied art and design for the future",
      exploreBtn: "Explore Creations",
      shopBtn: "Shop Collection",
      featuredTitle: "Featured Collections",
      activitiesTitle: "Upcoming Workshops & Activities",
    },
    about: {
      philosophyTitle: "Craft Philosophy",
      philosophyQuote: "“The true value of handcraft lies not only in creating pieces, but in creating value for people, community, and sustainable society.”",
      founderTitle: "Founder",
      founderName: "Wipawadee Lopez",
      founderRole: "Craft Producer & Product Developer",
      founderStory: "A product developer and contemporary craft creator with over 20 years of experience, covering product design, export production, and community-based craft development. Throughout her career, she has blended traditional craftsmanship with contemporary design, creating career opportunities and learning paths through community networks, which led to the founding of ARTcrew ARMADA and the brand ARMADA.",
      experience: "Experience",
      experienceVal: "20+ Years",
      expertise: "Expertise",
      expertiseVal: "Craft Development / Product Design / Community Enterprise / Sustainable Craft",
      location: "Location",
      locationVal: "Nonthaburi, Thailand",
      journeyTitle: "My Journey",
      journeySubtitle: "From craft to sustainable creation and value",
      journey: {
        y2543: {
          title: "Retail Beginnings",
          desc: "Managed retail business in handkerchiefs and garments, learning marketing fundamentals and product development."
        },
        y2547: {
          title: "Export Procurement",
          desc: "Worked in jewelry purchasing for international markets, gaining experience in global quality standards and demands."
        },
        y2550: {
          title: "Craft Production & Setup",
          desc: "Developed skills in design and craft production, establishing a network of makers and artisans."
        },
        yPresent: {
          title: "Community & Brand Launch",
          desc: "Shared craft skills with women, youth, and elderly. Founded ARTcrew ARMADA as a development workspace, and launched ARMADA Eco-Luxury brand upcycling aluminum pull tabs under Circular Economy concept."
        }
      },
      techniquesTitle: "Techniques & Expertise",
      techniquesSubtitle: "Blending traditional refinement with contemporary perspectives",
      techMetalTitle: "Metal Forming & Texturing",
      techMetalDesc: "Handcrafted metal forming and texturing. Utilizing repoussé and chasing to achieve Mapuche-style dimension and pattern, creating brass and silver jewelry that is bold yet lightweight and wearable.",
      techBeadTitle: "Peyote Stitch & Bead Loom",
      techBeadDesc: "Intricate bead weaving requiring precision. Peyote Stitch enables versatile 3D forms and textures, while Bead Loom weaving creates detailed, sharp, and highly refined geometric patterns.",
      techWireTitle: "Wire Work",
      techWireDesc: "Forming, wrapping, and weaving silver or brass wire, combined with natural stones and beads to create delicate, handcrafted jewelry.",
      techThreadTitle: "Chromatic Thread",
      techThreadDesc: "Wrapping, knotting, and arranging multi-colored threads to create shapes and dimensions. Blends fiber art with Color Harmony principles to reflect movement and balance.",
      techMacrameTitle: "Macramé & Micro Macramé",
      techMacrameDesc: "The art of hand-knotting cords. Ranging from Micro Macramé using fine threads for jewelry, to large-scale Macramé for home decor, wall hangings, lamp hangers, and art installations.",
      awardsTitle: "Awards & Recognition",
      awardsSubtitle: "Certifications and awards guaranteeing quality and environmental commitment",
      awardSacitTitle: "SACIT Craft Collection 2025 Certification",
      awardSacitDesc: "ARMADA received the Craft Collection Certification in the Conscious Craft category from the Sustainable Arts and Crafts Institute of Thailand (SACIT), balancing aesthetics and sustainability.",
      awardDipromTitle: "1st Place Winner - Diprom Show 2024",
      awardDipromDesc: "Won 1st place in the Creative Product category by Diprom (Department of Industrial Promotion), marking the beginning of confidence in building and developing the brand.",
      awardWccTitle: "World Crafts Council (WCC) International Stages",
      awardWccDesc: "Exhibited creations and exchanged contemporary craft concepts with international creators, including global craft festivals in Vietnam and India.",
      communityTitle: "Community Impact",
      communityDesc: "ARTcrew ARMADA and ARMADA's work focuses on transferring handcraft skills to local communities. Through workshops and training, we aim to develop vocational skills and generate sustainable income for women groups, housewives, youth, and the elderly.",
      visionTitle: "Vision: Craft & Art Awareness Center",
      visionDesc: "In the future, we aim to elevate to a center of awareness for craft and creativity, hosting research, exhibitions, and artist-in-residence programs to promote eco-art."
    },
    common: {
      readMore: "Read More",
      buyNow: "Buy Now",
      price: "Price",
      stock: "In Stock",
      pcs: "pcs",
      back: "Back",
      learnMore: "Learn More",
      registered: "Registered",
      registerBtn: "Register Now",
      language: "Language",
    }
  },
  fr: {
    nav: {
      about: "À Propos",
      craft: "Création & Artisanat",
      upcycling: "ARMADA Upcycling",
      primitive: "Art & Primitif",
      shop: "Boutique",
      learning: "Apprentissage & Activités",
      journal: "Journal",
      awareness: "Centre de Sensibilisation",
      contact: "Contact & Collaboration",
      dashboard: "Tableau de bord",
    },
    home: {
      heroTitle: "De l'artisanat à la création, des personnes aux possibilités",
      heroSubtitle: "Un voyage de la compréhension des matériaux à l'art appliqué et au design pour le futur",
      exploreBtn: "Explorer",
      shopBtn: "Acheter",
      featuredTitle: "Collections Vedettes",
      activitiesTitle: "Ateliers & Activités à venir",
    },
    about: {
      philosophyTitle: "Philosophie de l'Artisanat",
      philosophyQuote: "« La véritable valeur de l'artisanat ne réside pas seulement dans la création de pièces, mais dans la création de valeur pour les personnes, la communauté et une société durable. »",
      founderTitle: "Fondatrice",
      founderName: "Wipawadee Lopez",
      founderRole: "Productrice Artisanale & Développeuse de Produits",
      founderStory: "Développeuse de produits et créatrice d'artisanat contemporain avec plus de 20 ans d'expérience, couvrant le design de produits, la production d'exportation et le développement de l'artisanat communautaire. Tout au long de sa carrière, elle a allié savoir-faire traditionnel et design contemporain, créant des opportunités de carrière et des parcours d'apprentissage grâce aux réseaux communautaires, ce qui a conduit à la création d'ARTcrew ARMADA et de la marque ARMADA.",
      experience: "Expérience",
      experienceVal: "20+ ans",
      expertise: "Expertise",
      expertiseVal: "Développement artisanal / Design de produits / Entreprise communautaire / Artisanat durable",
      location: "Lieu",
      locationVal: "Nonthaburi, Thaïlande",
      journeyTitle: "Mon Voyage",
      journeySubtitle: "De l'artisanat à la création durable et à la valeur",
      journey: {
        y2543: {
          title: "Débuts dans le commerce",
          desc: "Gestion de commerce de mouchoirs et de vêtements, apprentissage des bases du marketing et développement de produits."
        },
        y2547: {
          title: "Approvisionnement d'exportation",
          desc: "Achat de bijoux pour les marchés internationaux, acquisition d'expérience dans les normes de qualité mondiales."
        },
        y2550: {
          title: "Production artisanale",
          desc: "Développement de compétences en design et production, création d'un réseau d'artisans."
        },
        yPresent: {
          title: "Communauté & Lancement de marque",
          desc: "Partage de compétences avec les femmes, jeunes et seniors. Fondation d'ARTcrew ARMADA comme espace de travail, et lancement de la marque ARMADA Eco-Luxury upcyclant des languettes de canettes selon l'Économie Circulaire."
        }
      },
      techniquesTitle: "Techniques & Expertise",
      techniquesSubtitle: "Allier le raffinement traditionnel aux perspectives contemporaines",
      techMetalTitle: "Formage de métaux & Texturation",
      techMetalDesc: "Formage et texturation de métal à la main. Utilisation du repoussage et de la ciselure pour des formes et motifs de style Mapuche, créant des bijoux légers et portables.",
      techBeadTitle: "Peyote Stitch & Bead Loom",
      techBeadDesc: "Tissage de perles complexe. Le Peyote Stitch permet des formes 3D variées, tandis que le tissage sur métier Bead Loom crée des motifs géométriques précis et raffinés.",
      techWireTitle: "Travail du fil (Wire Work)",
      techWireDesc: "Formage et tissage de fil d'argent ou de laiton, combinés avec des pierres naturelles et des perles pour des bijoux délicats faits main.",
      techThreadTitle: "Fil chromatique",
      techThreadDesc: "Enroulement et agencement de fils colorés pour créer des formes et dimensions. Associe l'art de la fibre aux principes d'Harmonie des Couleurs pour refléter équilibre et mouvement.",
      techMacrameTitle: "Macramé & Micro Macramé",
      techMacrameDesc: "L'art du nouage manuel de cordes. Du Micro Macramé avec fils fins pour bijoux, au Macramé à grande échelle pour la décoration d'intérieur, suspensions de lampes et installations.",
      awardsTitle: "Prix & Reconnaissance",
      awardsSubtitle: "Certifications et prix garantissant la qualité et l'engagement environnemental",
      awardSacitTitle: "Certification SACIT Craft Collection 2025",
      awardSacitDesc: "ARMADA a reçu la certification dans la catégorie Conscious Craft de l'Institut des arts et métiers durables de Thaïlande (SACIT), équilibrant esthétique et durabilité.",
      awardDipromTitle: "1er Prix - Diprom Show 2024",
      awardDipromDesc: "Remporté le premier prix dans la catégorie Produit Créatif par Diprom (Département de la promotion industrielle), marquant le début de la marque.",
      awardWccTitle: "Scènes internationales du World Crafts Council",
      awardWccDesc: "Exposition de créations et échange de concepts d'artisanat contemporain avec des créateurs internationaux, y compris des festivals au Vietnam et en Inde.",
      communityTitle: "Impact Communautaire",
      communityDesc: "ARTcrew ARMADA et ARMADA partagent leur savoir-faire avec les communautés. Par des ateliers, nous développons des compétences et générons des revenus durables pour les femmes, jeunes et seniors.",
      visionTitle: "Vision: Craft & Art Awareness Center",
      visionDesc: "À l'avenir, nous visons à devenir un centre de sensibilisation à l'artisanat et à la créativité, accueillant recherche, expositions et résidences d'artistes."
    },
    common: {
      readMore: "Lire la suite",
      buyNow: "Acheter",
      price: "Prix",
      stock: "En stock",
      pcs: "pièces",
      back: "Retour",
      learnMore: "En savoir plus",
      registered: "Inscrit",
      registerBtn: "S'inscrire",
      language: "Langue",
    }
  }
} as const;

/**
 * Helper to check if a string is a supported language
 */
export function isSupportedLanguage(lang: string): lang is SupportedLanguage {
  return supportedLanguages.includes(lang as SupportedLanguage);
}

/**
 * Get translations helper
 */
export function getTranslation(lang: string) {
  const activeLang = isSupportedLanguage(lang) ? lang : defaultLanguage;
  return dictionary[activeLang];
}
