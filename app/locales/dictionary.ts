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
