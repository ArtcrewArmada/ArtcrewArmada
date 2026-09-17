import { useState, useMemo } from "react";
import { useParams, Link } from "react-router";
import { getTranslation } from "~/locales/dictionary";
import { PageHero } from "~/components/ui/page-hero";

interface CraftImage {
  src: string;
  alt: string;
  captionTh?: string;
  captionEn?: string;
  captionFr?: string;
}

interface CraftPillar {
  id: string;
  number: string;
  titleTh: string;
  titleEn: string;
  titleFr: string;
  tagTh: string;
  tagEn: string;
  tagFr: string;
  descTh: string;
  descEn: string;
  descFr: string;
  materialsTh: string[];
  materialsEn: string[];
  materialsFr: string[];
  featuresTh: string[];
  featuresEn: string[];
  featuresFr: string[];
  images: CraftImage[];
}

export default function Craft() {
  const params = useParams();
  const lang = params.lang || "th";
  const t = getTranslation(lang);
  const s = (t.home as any).sections?.craft || {};

  const [selectedPillar, setSelectedPillar] = useState<string>("all");
  const [activeLightbox, setActiveLightbox] = useState<{
    pillarTitle: string;
    images: CraftImage[];
    currentIndex: number;
  } | null>(null);

  const pillars: CraftPillar[] = [
    {
      id: "texturing",
      number: "01",
      titleTh: "ความเชี่ยวชาญด้านงานเครื่องประดับและงานโลหะ (Metal Forming & Texturing)",
      titleEn: "Metal Forming & Texturing Expertise",
      titleFr: "Expertise en Formage & Texturation des Métaux",
      tagTh: "งานขึ้นรูปโลหะ & เคาะลาย",
      tagEn: "Chasing & Repoussé",
      tagFr: "Ciselure & Repoussage",
      descTh:
        "ข้าพเจ้ามีประสบการณ์ในการสร้างสรรค์งานเครื่องประดับและงานหัตถกรรมโลหะ การขึ้นรูปโลหะด้วยมือ การเคาะลาย (Texturing) เพื่อสร้างพื้นผิวและเอกลักษณ์เฉพาะของชิ้นงาน ซึ่งเป็นเทคนิคการดุนและเคาะโลหะให้เกิดมิติ ลวดลาย ผลงานเครื่องประดับทองเหลืองและเครื่องเงินในสไตล์ มาร์ปูเช่ สร้างมิติและปริมาตรขนาดใหญ่ ขณะเดียวกันยังคงน้ำหนักเบาและสวมใส่ได้จริง",
      descEn:
        "Specializing in bespoke handcrafted metal jewelry and artifacts through manual metal forming, repoussé, and chiseled texturing. Drawing inspiration from Mapuche tribal silversmithing, these brass and sterling silver creations boast dramatic volumetric silhouettes while remaining remarkably featherweight and comfortable for daily wear.",
      descFr:
        "Spécialisation dans les bijoux et objets d'art métalliques façonnés à la main, le repoussage et la texturation par ciselure. Inspirées par l'orfèvrerie Mapuche, ces créations en laiton et argent massif affichent des silhouettes volumétriques saisissantes tout en restant d'une légèreté et d'un confort remarquables.",
      materialsTh: ["ทองเหลืองบริสุทธิ์ (Brass)", "เครื่องเงินแท้ (Sterling Silver)", "การเคาะลายดุนโลหะ (Chasing & Texturing)"],
      materialsEn: ["Raw Brass", "Sterling Silver", "Manual Metal Chasing & Repoussé"],
      materialsFr: ["Laiton brut", "Argent massif 925", "Ciselure & Repoussage manuel"],
      featuresTh: [
        "ขึ้นรูปโลหะด้วยมือทีละชิ้น (Hand-formed Metal)",
        "เคาะลายสร้าง Texture มีมิติเฉพาะตัว",
        "ดีไซน์สไตล์มาร์ปูเช่ (Mapuche Style) ทรงพลังแต่น้ำหนักเบา",
      ],
      featuresEn: [
        "100% Hand-formed sculptural metals",
        "Unique chased surface textures with optical depth",
        "Mapuche-inspired monumental silhouette with ergonomic lightness",
      ],
      featuresFr: [
        "Métaux sculpturaux 100% formés à la main",
        "Textures ciselées uniques avec profondeur optique",
        "Silhouette monumentale d'inspiration Mapuche et légèreté ergonomique",
      ],
      images: [
        {
          src: "/images/craft-expertise/texturing/img_1.jpg",
          alt: "Brass Mapuche Collar & Metal Chasing",
          captionTh: "ปลอกคอทองเหลืองสไตล์มาร์ปูเช่ (Brass Mapuche Collar) งานเคาะดุนลายมิติสูง",
          captionEn: "Brass Mapuche Collar with chiseled repoussé dimensional textures",
          captionFr: "Collier Mapuche en laiton avec textures ciselées en relief",
        },
        {
          src: "/images/craft-expertise/texturing/img_2.jpg",
          alt: "Textured Silver & Brass Statement Jewelry",
          captionTh: "เครื่องประดับเคาะลายขึ้นรูปด้วยมือ ผิวสัมผัสโลหะดิบร่วมสมัย",
          captionEn: "Hand-formed textured metal statement jewelry with organic raw finish",
          captionFr: "Bijoux de caractère en métal texturé façonné à la main avec finition brute",
        },
        {
          src: "/images/craft-expertise/texturing/img_3.jpg",
          alt: "Artisan Metal Surface Texturing Process",
          captionTh: "กระบวนการเคาะลายโลหะและขึ้นรูปทรงเรขาคณิตสามมิติ",
          captionEn: "Artisanal metal texturing and sculptural geometry process",
          captionFr: "Processus artisanal de texturation du métal et géométrie sculpturale",
        },
      ],
    },
    {
      id: "peyote-stitch-bead-loom",
      number: "02",
      titleTh: "เชี่ยวชาญในการสร้างสรรค์งานลูกปัดด้วยเทคนิค Peyote Stitch และ Bead Loom",
      titleEn: "Peyote Stitch & Bead Loom Weaving Mastery",
      titleFr: "Maîtrise du Tissage de Perles Peyote Stitch & Métier à Tisser",
      tagTh: "การร้อยและทอลูกปัดชั้นสูง",
      tagEn: "Precision Beadweaving",
      tagFr: "Tissage de Perles de Haute Précision",
      descTh:
        "ซึ่งเป็นเทคนิคการร้อยและทอลูกปัดที่ต้องอาศัยความละเอียด ความแม่นยำ และการวางแผนลวดลายอย่างเป็นระบบ เทคนิค Peyote Stitch ช่วยสร้างพื้นผิวและรูปทรงที่มีความหลากหลาย และเทคนิค Bead Loom เป็นการทอลูกปัดบนกี่ทอ ช่วยให้สามารถสร้างลวดลายที่ละเอียด คมชัด และมีความประณีตสูง",
      descEn:
        "Masterful beadweaving requiring mathematical precision, meticulous rhythm, and systematic chromatic mapping. Peyote Stitch allows freeform sculptural textures and organic dimensional curves, while the Bead Loom framework facilitates razor-sharp, tapestry-grade geometric motifs with museum-level finishing.",
      descFr:
        "Tissage de perles magistral exigeant une précision mathématique et une cartographie chromatique rigoureuse. Le Peyote Stitch permet des textures sculpturales libres et des courbes organiques, tandis que le métier Bead Loom produit des motifs géométriques d'une netteté parfaite.",
      materialsTh: ["ลูกปัดแก้วญี่ปุ่นมิยูกิ (Miyuki Glass Beads)", "กี่ทอลูกปัด (Bead Loom)", "เส้นด้ายทอความเหนียวพิเศษ"],
      materialsEn: ["Japanese Miyuki Delica Beads", "Traditional Bead Loom", "High-tensile Braided Fiber"],
      materialsFr: ["Perles de verre japonaises Miyuki", "Métier à tisser traditionnel", "Fils tressés haute résistance"],
      featuresTh: [
        "Peyote Stitch สร้างรูปทรงอิสระและมิติโค้งเว้า",
        "Bead Loom ทอบนกี่ทอ ลวดลายคมชัดละเอียดระดับพิกเซล",
        "วางผังคู่สีและลวดลายเรขาคณิตโบราณร่วมสมัย",
      ],
      featuresEn: [
        "Peyote Stitch for organic structural contours",
        "Bead Loom for razor-sharp geometric precision",
        "Curated ancient-meets-contemporary color harmonies",
      ],
      featuresFr: [
        "Peyote Stitch pour les contours structurels organiques",
        "Bead Loom pour une précision géométrique au pixel près",
        "Harmonies de couleurs mariant traditions anciennes et contemporaines",
      ],
      images: [
        {
          src: "/images/craft-expertise/peyote-stitch-bead-loom/img_1.jpg",
          alt: "Peyote Stitch Ergonomic Beaded Cuff",
          captionTh: "กำไลข้อมือลูกปัดขึ้นรูปเทคนิค Peyote Stitch สวมใส่รับกับสรีระข้อมือ",
          captionEn: "Ergonomic curved cuff woven with precision Peyote stitch technique",
          captionFr: "Manchette incurvée tissée au point Peyote épousant parfaitement le poignet",
        },
        {
          src: "/images/craft-expertise/peyote-stitch-bead-loom/img_2.jpg",
          alt: "Traditional Bead Loom Weaving in Action",
          captionTh: "กระบวนการทอลูกปัดบนกี่ไม้ Bead Loom สร้างลายเรขาคณิตความละเอียดสูง",
          captionEn: "Precision bead loom weaving process on artisanal timber frame",
          captionFr: "Processus de tissage de perles sur métier en bois de précision",
        },
        {
          src: "/images/craft-expertise/peyote-stitch-bead-loom/img_3.jpg",
          alt: "Geometric Tribal Loom Beaded Bracelets",
          captionTh: "ชุดกำไลทอลูกปัดลวดลายชนเผ่าเรขาคณิต (Tribal Geometric) หลากสีสัน",
          captionEn: "Suite of high-density geometric tribal motif loom-woven bracelets",
          captionFr: "Ensemble de bracelets tissés aux motifs géométriques tribaux haute densité",
        },
        {
          src: "/images/craft-expertise/peyote-stitch-bead-loom/img_4.jpg",
          alt: "Thai Royal Elephant Heritage Beaded Brooches",
          captionTh: "เข็มกลัดและงานทอลูกปัดลายช้างไทยมงคลบนหมอนกำมะหยี่",
          captionEn: "Auspicious Thai royal elephant motif beaded brooches and badges",
          captionFr: "Broches et insignes perlés aux motifs d'éléphants royaux thaïlandais",
        },
        {
          src: "/images/craft-expertise/peyote-stitch-bead-loom/img_5.jpg",
          alt: "Vibrant Fringe Beaded Tassel Earrings",
          captionTh: "ต่างหูพู่ลูกปัดมิยูกิไล่เฉดสี พลิ้วไหวและสะท้อนประกายแสง",
          captionEn: "Cascading Miyuki bead fringe tassel earrings in curated color vibrations",
          captionFr: "Boucles d'oreilles à franges en perles Miyuki aux reflets chatoyants",
        },
        {
          src: "/images/craft-expertise/peyote-stitch-bead-loom/img_6.jpg",
          alt: "Iconic Thai Tuk-Tuk Cultural Beaded Art",
          captionTh: "งานปักและทอลูกปัดลวดลายรถตุ๊กตุ๊ก (Tuk-Tuk) อัตลักษณ์วัฒนธรรมไทยร่วมสมัย",
          captionEn: "Contemporary pop-culture Thai Tuk-Tuk beaded emblems and textile art",
          captionFr: "Emblèmes perlés Tuk-Tuk célébrant la culture urbaine thaïlandaise contemporaine",
        },
        {
          src: "/images/craft-expertise/peyote-stitch-bead-loom/img_7.jpg",
          alt: "Masterpiece Peyote Stitch Necklace & Jewelry Suite",
          captionTh: "ชุดเครื่องประดับสร้อยคอทอลูกปัดมิยูกิระดับมาสเตอร์พีซ ลวดลายโบราณร่วมสมัย",
          captionEn: "Masterpiece Miyuki beadwoven statement necklace and haute jewelry suite",
          captionFr: "Parure de haute joaillerie et collier plastron tissé en perles Miyuki",
        },
        {
          src: "/images/craft-expertise/peyote-stitch-bead-loom/img_8.jpg",
          alt: "Artisan Miniature Beadwork Talisman",
          captionTh: "งานลูกปัดแฮนด์เมดขนาดกะทัดรัด ความประณีตเชิงช่างระดับพรีเมียม",
          captionEn: "Intricate miniature beadwoven amulet reflecting mastercraft precision",
          captionFr: "Amulette miniature en perles tissées reflétant la haute précision artisanale",
        },
      ],
    },
    {
      id: "wire-work",
      number: "03",
      titleTh: "ความเชี่ยวชาญในการงานเครื่องประดับด้วยเทคนิค Wire Work",
      titleEn: "Wire Work & Sculptural Gem Wrapping",
      titleFr: "Expertise en Travail du Fil Métallique (Wire Work)",
      tagTh: "งานขึ้นรูปและถักทอลวด",
      tagEn: "Wire Sculpting & Gem Setting",
      tagFr: "Sculpture de Fil & Sertissage",
      descTh:
        "หรือการขึ้นรูปและถักทอด้วยลวด ซึ่งเป็นกระบวนการเพื่อสร้างรูปทรง ลวดลาย และโครงสร้างที่มีเอกลักษณ์เฉพาะตัว เทคนิคดังกล่าวครอบคลุมการดัด ขด พัน และถักทอลวดเพื่อประกอบเป็นชิ้นงานเครื่องประดับ รวมถึงการประยุกต์ใช้ร่วมกับหินธรรมชาติ ลูกปัด และวัสดุอื่น ๆ เพื่อสร้างสรรค์ผลงาน",
      descEn:
        "Sculptural metal wire weaving and forming engineered to construct distinctive organic cages, flowing silhouettes, and structural architectural jewelry. Encompasses manual bending, spiral coiling, tension wrapping, and filigree weaving interlocking raw gemstones, crystals, and heritage minerals without chemical soldering.",
      descFr:
        "Tissage et mise en forme de fils métalliques pour créer des cages organiques et des bijoux architecturaux uniques. Englobe le cintrage manuel, l'enroulement en spirale, le tressage en tension et la filigrane entourant pierres fines, cristaux et minéraux bruts sans soudure chimique.",
      materialsTh: ["ลวดเงินแท้ (Sterling Silver Wire)", "ลวดทองเหลือง/ทองแดง", "หินอัญมณีธรรมชาติ (Natural Gemstones)"],
      materialsEn: ["Sterling Silver Wire", "Artisan Brass & Copper Wires", "Raw Natural Gemstones & Minerals"],
      materialsFr: ["Fil d'argent massif", "Fils artisanaux en laiton et cuivre", "Pierres fines et minéraux bruts"],
      featuresTh: [
        "ดัด ขด พัน และถักทอลวดด้วยมือโดยไม่ใช้การบัดกรี",
        "ออกแบบโอบรับหินธรรมชาติและผลึกแร่อย่างกลมกลืน",
        "โครงสร้างแข็งแรง ทนทาน และมีเส้นสายศิลปะอ่อนช้อย",
      ],
      featuresEn: [
        "Solderless wire weaving, tension-wrapping & spiral coiling",
        "Custom organic cages harmonizing raw mineral geometries",
        "Durable architecture with flowing artistic fluidity",
      ],
      featuresFr: [
        "Tissage et torsion sans soudure avec tension précise",
        "Cages organiques sur mesure épousant la géométrie des minéraux",
        "Architecture robuste avec fluidité artistique",
      ],
      images: [
        {
          src: "/images/craft-expertise/wire-work/img_1.jpg",
          alt: "Wire Wrapped Agate Gemstone Pendant",
          captionTh: "จี้หินธรรมชาติถักลวดเงินโอบรับผลึกแร่ (Wire Wrapped Gemstone Pendant)",
          captionEn: "Natural gemstone wrapped in sculptural silver wire filigree",
          captionFr: "Pendentif en pierre fine naturelle sertie de filigrane d'argent",
        },
        {
          src: "/images/craft-expertise/wire-work/img_2.jpg",
          alt: "Sculptural Wire Wrapped Ring",
          captionTh: "แหวนดัดลวดพันเกลียวโครงสร้างสามมิติ",
          captionEn: "Dimensional wire coiled ring with organic gemstone centerpiece",
          captionFr: "Bague sculpturale en fil torsadé avec gemme centrale organique",
        },
        {
          src: "/images/craft-expertise/wire-work/img_3.jpg",
          alt: "Intricate Wire Weaving Pattern",
          captionTh: "กำไลข้อมือถักทอลวดทองเหลืองและเส้นเงินโบราณ",
          captionEn: "Woven brass and silver wire cuff with layered texture",
          captionFr: "Manchette tissée en fils de laiton et d'argent texturés",
        },
        {
          src: "/images/craft-expertise/wire-work/img_4.jpg",
          alt: "Wire Work Ear Adornments",
          captionTh: "ต่างหูดัดลวดทรงเรขาคณิตผสานลูกปัดแร่ธรรมชาติ",
          captionEn: "Geometric wire formed earrings with suspended mineral droplets",
          captionFr: "Boucles d'oreilles géométriques en fil avec gouttes minérales",
        },
        {
          src: "/images/craft-expertise/wire-work/img_5.jpg",
          alt: "Complex Gemstone Wire Setting",
          captionTh: "จี้หินอัญมณีลายถักลวดซับซ้อนระดับไฮจิวเวลรี",
          captionEn: "Complex woven wire bezel holding rough-cut mineral crystal",
          captionFr: "Sertissage complexe en fil tissé maintenant un cristal brut",
        },
        {
          src: "/images/craft-expertise/wire-work/img_6.jpg",
          alt: "Artisan Wirework Collection",
          captionTh: "ชุดเครื่องประดับงานดัดลวดผสานหินนำโชคธรรมชาติ",
          captionEn: "Complete wire work artisan suite celebrating earth minerals",
          captionFr: "Ensemble complet en filigrane célébrant les minéraux de la terre",
        },
      ],
    },
    {
      id: "chromatic-thread",
      number: "04",
      titleTh: "พัฒนาและประยุกต์ใช้เทคนิค Chromatic Thread",
      titleEn: "Chromatic Thread & Color Harmony Innovation",
      titleFr: "Développement & Application de la Technique Chromatic Thread",
      tagTh: "ศิลปะเส้นด้ายเรขาคณิตหลากสี",
      tagEn: "Geometric Fiber Art",
      tagFr: "Art Textile Géométrique",
      descTh:
        "ซึ่งเป็นกระบวนการสร้างสรรค์งานด้วยการพัน ถัก และจัดวางเส้นเชือกหลากสีให้เกิดรูปทรง มิติ และจังหวะของลวดลายที่มีเอกลักษณ์เฉพาะตัว เทคนิคดังกล่าวผสมผสานความรู้ด้านงานเส้นใย งานหัตถกรรม และหลักการด้านสีสัน (Color Harmony) เพื่อสร้างชิ้นงานที่สะท้อนความเคลื่อนไหว ความสมดุล และพลังของรูปทรงเรขาคณิต",
      descEn:
        "An innovative proprietary technique of precision wrapping, tension braiding, and geometric thread architecture using multi-hued fiber cords. Fusing fiber craft mastery with advanced Color Harmony theory, these kinetic pieces evoke movement, dynamic equilibrium, and the sacred resonance of sacred geometry.",
      descFr:
        "Une technique innovante d'enroulement précis, de tressage en tension et d'agencement géométrique de fils multicolores. Fusionnant la maîtrise des fibres avec la théorie de l'Harmonie des Couleurs, ces œuvres évoquent le mouvement, l'équilibre et la résonance des formes sacrées.",
      materialsTh: ["เส้นด้ายและเชือกคอตตอนหลากสี", "โครงสร้างโลหะ/ไม้รีไซเคิล", "เทคนิคทฤษฎีสี (Color Harmony)"],
      materialsEn: ["Curated Chromatic Cotton Threads", "Recycled Metal / Wood Frameworks", "Color Harmony Optical Calibration"],
      materialsFr: ["Fils de coton chromatiques", "Structures en métal et bois recyclé", "Harmonie des couleurs et étalonnage optique"],
      featuresTh: [
        "จัดวางการไล่เฉดสี (Color Gradient) และคอนทราสต์ที่ลงตัว",
        "ขึงและพันเส้นด้ายสร้างมิติแสงและเงาเชิงเรขาคณิต",
        "สะท้อนพลังงาน ความเคลื่อนไหว และความสมดุลทางสายตา",
      ],
      featuresEn: [
        "Calculated color gradient transitions and optical vibrations",
        "Tensioned thread mapping casting intricate geometric shadowplay",
        "Evokes cosmic motion, spiritual balance, and visual dynamism",
      ],
      featuresFr: [
        "Dégradés de couleurs calculés et vibrations optiques",
        "Tensionnement précis créant des jeux d'ombres géométriques",
        "Évoque l'énergie cosmique, l'équilibre et le dynamisme visuel",
      ],
      images: [
        {
          src: "/images/craft-expertise/chromatic-thread/img_1.jpg",
          alt: "Chromatic Thread Geometric Mandalas",
          captionTh: "ศิลปะจัดวางเส้นด้าย Chromatic Thread ทรงกลมมันดาลา",
          captionEn: "Chromatic Thread mandala disc with radial color gradients",
          captionFr: "Disque mandala Chromatic Thread aux dégradés radiaux",
        },
        {
          src: "/images/craft-expertise/chromatic-thread/img_2.jpg",
          alt: "Threaded Color Rhythm Earrings",
          captionTh: "ต่างหูพันเส้นด้ายหลากสี จังหวะคู่สีโมเดิร์นร่วมสมัย",
          captionEn: "Contemporary thread-wrapped earrings in dynamic color palette",
          captionFr: "Boucles d'oreilles enroulées de fils à palette dynamique",
        },
        {
          src: "/images/craft-expertise/chromatic-thread/img_3.jpg",
          alt: "Geometric Fiber Art Disc",
          captionTh: "จี้และของตกแต่งพันเส้นด้ายเรขาคณิตมิติซ้อน",
          captionEn: "Layered geometric fiber disc capturing kinetic light play",
          captionFr: "Disque textile géométrique captant les reflets de lumière",
        },
        {
          src: "/images/craft-expertise/chromatic-thread/img_4.jpg",
          alt: "Multi-layered Chromatic Thread Sculpture",
          captionTh: "ประติมากรรมเส้นใยขนาดกะทัดรัด โครงสร้างเรขาคณิตซับซ้อน",
          captionEn: "Intricate multi-axis thread sculpture with vibrant tensioning",
          captionFr: "Sculpture textile multi-axes aux tensions vibrantes",
        },
        {
          src: "/images/craft-expertise/chromatic-thread/img_5.jpg",
          alt: "Chromatic Gradient Fiber Tapestry",
          captionTh: "งานจัดวางเส้นด้ายผสานโทนสีธรรมชาติและสีสันสดใส",
          captionEn: "Chromatic wall installation blending earthen and vivid fiber cords",
          captionFr: "Installation murale chromatique mêlant teintes naturelles et vives",
        },
        {
          src: "/images/craft-expertise/chromatic-thread/img_6.jpg",
          alt: "Chromatic Thread Artisan Suite",
          captionTh: "ชุดงานคราฟต์ Chromatic Thread งานฝีมือเอกลักษณ์ของแบรนด์",
          captionEn: "Signature Chromatic Thread collection demonstrating fiber mastery",
          captionFr: "Collection emblématique Chromatic Thread illustrant la maîtrise textile",
        },
      ],
    },
    {
      id: "micro-macrame",
      number: "05",
      titleTh: "ความเชี่ยวชาญในการสร้างสรรค์งานเครื่องประดับด้วยเทคนิค Micro Macramé",
      titleEn: "Micro Macramé Haute Jewelry Art",
      titleFr: "Expertise en Bijouterie d'Art Micro Macramé",
      tagTh: "ศิลปะผูกปมเส้นด้ายขนาดจิ๋ว",
      tagEn: "Micro Cord Knotting",
      tagFr: "Nouage de Micro-Cordons",
      descTh:
        "ซึ่งเป็นศิลปะการผูกปมด้วยเส้นเชือกขนาดเล็กที่อาศัยความละเอียด ประณีต เทคนิคดังกล่าวสามารถสร้างลวดลายที่ซับซ้อนและมีเอกลักษณ์เฉพาะตัว โดยนำมาประยุกต์ใช้ร่วมกับหินธรรมชาติ ลูกปัด และวัสดุตกแต่งต่าง ๆ",
      descEn:
        "Haute artisan micro-knotting utilizing ultra-fine waxed polyester and linen cords. Operating at millimeter scale, this intricate knotwork constructs labyrinthine filigrees, organic bezel settings, and heirloom jewelry pieces seamlessly integrated with gemstones, raw minerals, and brass hardware.",
      descFr:
        "Micro-nouage d'art utilisant des cordons cirés ultra-fins. À l'échelle millimétrique, ce travail de nouage crée des filigranes labyrinthiques, des sertissages organiques et des bijoux précieux intégrés avec des pierres fines et du laiton.",
      materialsTh: ["เส้นเชือกไมโครแว็กซ์ (Waxed Micro Cords)", "หินหลังเบี้ยธรรมชาติ (Cabochons)", "ลูกปัดทองเหลืองและเงินแท้"],
      materialsEn: ["Ultra-fine Waxed Micro Cords", "Natural Gemstone Cabochons", "Brass & Silver Micro Beads"],
      materialsFr: ["Micro-cordons cirés ultra-fins", "Cabochons de pierres fines naturelles", "Perles de laiton et argent"],
      featuresTh: [
        "ผูกปมด้วยมือขนาดมิลลิเมตร ละเอียดและแน่นหนา",
        "โอบอุ้มหินธรรมชาติด้วยการถักโดยไม่ต้องพึ่งพากาว",
        "ทนทาน กันน้ำ น้ำหนักเบา และสวมใส่สบายผิว",
      ],
      featuresEn: [
        "Millimeter-level manual knotting with durable tension",
        "Adhesive-free mechanical gem bezel knotting",
        "Water-resistant, lightweight, and skin-friendly luxury comfort",
      ],
      featuresFr: [
        "Nouage manuel millimétrique avec tension durable",
        "Sertissage mécanique des gemmes sans aucune colle",
        "Résistant à l'eau, léger et agréable sur la peau",
      ],
      images: [
        {
          src: "/images/craft-expertise/micro-macrame/img_1.jpg",
          alt: "Micro Macramé Gemstone Choker",
          captionTh: "โชคเกอร์ Micro Macramé โอบรับหินหลังเบี้ยธรรมชาติอย่างประณีต",
          captionEn: "Micro Macramé choker framing polished natural gemstone cabochon",
          captionFr: "Ras-de-cou Micro Macramé sertissant un cabochon naturel poli",
        },
        {
          src: "/images/craft-expertise/micro-macrame/img_2.jpg",
          alt: "Intricate Micro Knotting Bracelet",
          captionTh: "กำไลข้อมือผูกปมไมโครมาคราเม่ ลวดลายลูกไม้เรขาคณิต",
          captionEn: "Geometric lace-patterned micro macramé cuff bracelet",
          captionFr: "Bracelet manchette en micro-macramé façon dentelle géométrique",
        },
        {
          src: "/images/craft-expertise/micro-macrame/img_3.jpg",
          alt: "Micro Macramé Earring Adornments",
          captionTh: "ต่างหูไมโครมาคราเม่น้ำหนักเบา ผสานลูกปัดทองเหลืองโบราณ",
          captionEn: "Featherweight micro macramé drop earrings with brass accents",
          captionFr: "Boucles d'oreilles pendantes légères avec accents de laiton",
        },
        {
          src: "/images/craft-expertise/micro-macrame/img_4.jpg",
          alt: "Stone Wrapped Micro Macramé Pendant",
          captionTh: "จี้หินอัญมณีถักปมเส้นเชือกจิ๋ว ดีไซน์ทรงเสน่ห์มนต์ขลัง",
          captionEn: "Mystic talisman pendant woven with ultra-fine cord knots",
          captionFr: "Pendentif talisman mystique tissé de micro-nœuds précieux",
        },
        {
          src: "/images/craft-expertise/micro-macrame/img_5.jpg",
          alt: "Layered Micro Macramé Necklace",
          captionTh: "สร้อยคอไมโครมาคราเม่หลายชั้น ประดับหินผลึกธรรมชาติ",
          captionEn: "Layered statement micro macramé necklace with raw mineral stones",
          captionFr: "Collier multi-rangs en micro-macramé orné de minéraux bruts",
        },
        {
          src: "/images/craft-expertise/micro-macrame/img_6.jpg",
          alt: "Micro Macramé Masterpiece Collection",
          captionTh: "ชุดเครื่องประดับ Micro Macramé ความประณีตระดับงานพิพิธภัณฑ์",
          captionEn: "Museum-grade micro macramé jewelry collection showcasing supreme dexterity",
          captionFr: "Collection de bijoux en micro-macramé de qualité musée",
        },
      ],
    },
    {
      id: "macrame",
      number: "06",
      titleTh: "ความเชี่ยวชาญด้านงานของใช้และของตกแต่งบ้านด้วยเทคนิค Macramé",
      titleEn: "Macramé Home Décor & Spatial Living Art",
      titleFr: "Expertise en Décoration & Art Spatial Macramé",
      tagTh: "งานของใช้ & ของตกแต่งบ้านมาคราเม่",
      tagEn: "Architectural Knotting",
      tagFr: "Nouage Architectural & Décoration",
      descTh:
        "ข้าพเจ้ามีความเชี่ยวชาญในการสร้างสรรค์ของใช้และของตกแต่งบ้านด้วยเทคนิค Macramé ซึ่งเป็นศิลปะการผูกปมเชือกด้วยมือที่ผสมผสานความประณีตของงานหัตถกรรมเข้ากับการออกแบบร่วมสมัย ผลงานครอบคลุมทั้งของตกแต่งผนัง ฉากตกแต่ง กระถางแขวน โคมไฟ ของใช้ภายในบ้าน และงานตกแต่งพื้นที่สำหรับกิจกรรมหรืออีเวนต์",
      descEn:
        "Large-scale architectural and lifestyle cord knotting merging ancient bohemian heritage with sophisticated contemporary interior aesthetics. Spanning monumental wall tapestries, room dividers, ambient hanging lampshades, botanical plant hangers, and bespoke spatial art installations for luxury hospitality and exhibitions.",
      descFr:
        "Nouage de cordes à grande échelle alliant héritage bohème ancien et design d'intérieur contemporain. Comprend de grandes tapisseries murales, des paravents, des suspensions de lampes, des porte-plantes et des installations spatiales sur mesure pour l'hôtellerie et les événements.",
      materialsTh: ["เชือกฝ้ายธรรมชาติ 100% (Natural Cotton Cords)", "ท่อนไม้ดริฟต์วู้ดและกิ่งไม้ธรรมชาติ", "โครงสร้างทองเหลืองและเหล็กดัด"],
      materialsEn: ["100% Natural Cotton Fiber Cords", "Reclaimed Driftwood & Organic Timber", "Brass Hoops & Architectural Steel"],
      materialsFr: ["Cordes 100% coton naturel", "Bois flotté et branches naturelles", "Armatures en laiton et acier"],
      featuresTh: [
        "งานตกแต่งผนัง (Wall Hanging) และฉากกั้นห้องขนาดใหญ่",
        "โคมไฟแขวน กระถางต้นไม้ และของใช้ภายในบ้านแบบมีเอกลักษณ์",
        "งานออกแบบพื้นที่เฉพาะ (Site-specific Installation) สำหรับอีเวนต์และโรงแรม",
      ],
      featuresEn: [
        "Monumental wall tapestries & architectural partition screens",
        "Bespoke ambient lighting chandeliers & botanical hangers",
        "Site-specific spatial installations for luxury events and venues",
      ],
      featuresFr: [
        "Tapisseries murales monumentales et paravents décoratifs",
        "Luminaires d'ambiance et suspensions botaniques sur mesure",
        "Installations in situ pour événements de prestige et hôtels",
      ],
      images: [
        {
          src: "/images/craft-expertise/macrame/img_1.jpg",
          alt: "Macramé Artisanal Showcase & Workshop Display",
          captionTh: "นิทรรศการจัดแสดงผลงานและผลิตภัณฑ์ของใช้กระเป๋าถักมาคราเม่แฮนด์เมด",
          captionEn: "Artisanal exhibition showcase featuring handcrafted macramé lifestyle bags and accessories",
          captionFr: "Exposition artisanale présentant des sacs et accessoires lifestyle en macramé faits main",
        },
        {
          src: "/images/craft-expertise/macrame/img_2.jpg",
          alt: "Monumental Mineral & Fiber Wall Installation",
          captionTh: "งานจัดวางเส้นใยแขวนผนังผสานหินธรรมชาติและมิติเชือกทิ้งตัวทรงพลัง",
          captionEn: "Monumental wall hanging integrating natural stones into cascading linear fiber cords",
          captionFr: "Installation murale monumentale intégrant des pierres naturelles dans des cordons fluides",
        },
        {
          src: "/images/craft-expertise/macrame/img_3.jpg",
          alt: "Master Craftsman Large-Scale Installation Process",
          captionTh: "เบื้องหลังการผูกปมถักร้อยงานสถาปัตยกรรมขนาดใหญ่บนบันไดสูงโดยช่างฝีมือชั้นครู",
          captionEn: "Master craftsman crafting monumental architectural macramé tapestry on high scaffolding",
          captionFr: "Maître artisan créant une tapisserie monumentale en macramé sur échafaudage",
        },
        {
          src: "/images/craft-expertise/macrame/img_4.jpg",
          alt: "Chevron Geometric Macramé Wall Tapestry",
          captionTh: "โมบายแขวนผนังลายเชฟรอนเรขาคณิตสามมิติบนกิ่งไม้ธรรมชาติ",
          captionEn: "Geometric chevron layered macramé tapestry suspended on organic reclaimed wood",
          captionFr: "Tapisserie murale géométrique à motifs chevrons sur bois flotté naturel",
        },
        {
          src: "/images/craft-expertise/macrame/img_5.jpg",
          alt: "Architectural Wave Macramé Partition Screen",
          captionTh: "ฉากกั้นและซุ้มตกแต่งคลื่นมิติมาคราเม่ขนาดใหญ่สำหรับงานตกแต่งพื้นที่เฉพาะ",
          captionEn: "Architectural wave canopy and room partition for spatial hospitality curation",
          captionFr: "Paravent et verrière architecturale en macramé pour agencement d'espace sur mesure",
        },
        {
          src: "/images/craft-expertise/macrame/img_6.jpg",
          alt: "Curated Bohemian Macramé Lifestyle Bag Series",
          captionTh: "ชุดกระเป๋าถือแฟชั่นเส้นใยถักมาคราเม่หลากเฉดสี ทนทานและรักษ์โลก",
          captionEn: "Hand-knotted bohemian lifestyle tote bags in earthy and contemporary color palettes",
          captionFr: "Sacs cabas bohèmes faits main en macramé aux teintes terreuses et contemporaines",
        },
        {
          src: "/images/craft-expertise/macrame/img_7.jpg",
          alt: "Intricate Macramé Home Décor Feature",
          captionTh: "งานตกแต่งบ้านและเครื่องใช้สไตล์ Eco-Luxury ด้วยเทคนิคการผูกปมเชือกประณีต",
          captionEn: "Eco-luxury interior décor and functional home accent woven with artisanal knots",
          captionFr: "Décoration intérieure éco-luxe et objet fonctionnel noué avec précision",
        },
        {
          src: "/images/craft-expertise/macrame/img_8.jpg",
          alt: "Organic Fiber Living Installation",
          captionTh: "งานศิลปะแขวนประดับพื้นที่อยู่อาศัย สร้างบรรยากาศอบอุ่นและใกล้ชิดธรรมชาติ",
          captionEn: "Organic fiber wall art infusing living spaces with warmth and natural serenity",
          captionFr: "Art mural en fibres naturelles apportant chaleur et sérénité aux intérieurs",
        },
        {
          src: "/images/craft-expertise/macrame/img_9.jpg",
          alt: "Artisan Macramé Pattern Detail",
          captionTh: "รายละเอียดลวดลายการถักทอเส้นเชือกฝ้ายบริสุทธิ์แบบซ้อนชั้นมิติสูง",
          captionEn: "Macro detail of multi-layered knot architecture and natural cotton cord textures",
          captionFr: "Détail macro de l'architecture des nœuds et des textures de cordes de coton pur",
        },
        {
          src: "/images/craft-expertise/macrame/img_10.jpg",
          alt: "Contemporary Macramé Hanging Art",
          captionTh: "ผลงานโมบายแขวนผนังดีไซน์ร่วมสมัย ผสมผสานเสน่ห์โบฮีเมียนเข้ากับโมเดิร์นลักชัวรี",
          captionEn: "Contemporary hanging mobile merging bohemian spirit with modern minimalist luxury",
          captionFr: "Mobile suspendu contemporain alliant esprit bohème et luxe minimaliste",
        },
        {
          src: "/images/craft-expertise/macrame/img_11.jpg",
          alt: "Spatial Macramé Backdrop Installation",
          captionTh: "ฉากหลังและงานจัดวางพื้นที่ขนาดใหญ่สำหรับงานนิทรรศการและอีเวนต์ระดับพรีเมียม",
          captionEn: "Large-scale macramé backdrop installation for luxury galas and design expositions",
          captionFr: "Toile de fond monumentale en macramé pour expositions et réceptions de prestige",
        },
        {
          src: "/images/craft-expertise/macrame/img_12.jpg",
          alt: "Handcrafted Macramé Dining & Living Accent",
          captionTh: "ของใช้บนโต๊ะอาหารและของตกแต่งห้องนั่งเล่น เพิ่มสัมผัสงานคราฟต์ระดับพรีเมียม",
          captionEn: "Artisanal tabletop and living space décor accentuating tactile craftsmanship",
          captionFr: "Accessoire de table et de salon artisanal rehaussant l'expérience tactile",
        },
        {
          src: "/images/craft-expertise/macrame/img_13.jpg",
          alt: "Botanical Fiber Art Structure",
          captionTh: "โครงสร้างงานผูกปมประดับพืชพรรณธรรมชาติและการจัดแสงเงาในพื้นที่สถาปัตยกรรม",
          captionEn: "Botanical cord structure casting intricate geometric shadows in architectural settings",
          captionFr: "Structure végétale nouée créant des jeux d'ombres géométriques architecturales",
        },
        {
          src: "/images/craft-expertise/macrame/img_14.jpg",
          alt: "Monumental Pavilion Macramé Canopy",
          captionTh: "โครงงานหลังคาและม่านประดับมาคราเม่ขนาดใหญ่ สร้างสรรค์เพื่อพื้นที่จัดแสดงงานศิลปะ",
          captionEn: "Monumental pavilion canopy and macramé draping curated for fine art venues",
          captionFr: "Voilure monumentale et drapé en macramé conçus pour des espaces d'art d'exception",
        },
        {
          src: "/images/craft-expertise/macrame/img_15.jpg",
          alt: "Masterpiece Macramé Decorative Living Suite",
          captionTh: "คอลเลกชันผลงานของตกแต่งบ้านมาคราเม่ระดับมาสเตอร์พีซ ศิลปะแห่งการถักร้อยเชือกดั้งเดิม",
          captionEn: "Masterpiece collection of macramé home living art celebrating heritage cord knotting",
          captionFr: "Collection chef-d'œuvre d'art d'intérieur en macramé célébrant le nouage ancestral",
        },
      ],
    },
  ];

  const filteredPillars = useMemo(() => {
    if (selectedPillar === "all") return pillars;
    return pillars.filter((p) => p.id === selectedPillar);
  }, [selectedPillar]);

  const openLightbox = (pillarTitle: string, images: CraftImage[], index: number) => {
    setActiveLightbox({
      pillarTitle,
      images,
      currentIndex: index,
    });
  };

  const nextLightboxImage = () => {
    if (!activeLightbox) return;
    setActiveLightbox({
      ...activeLightbox,
      currentIndex: (activeLightbox.currentIndex + 1) % activeLightbox.images.length,
    });
  };

  const prevLightboxImage = () => {
    if (!activeLightbox) return;
    setActiveLightbox({
      ...activeLightbox,
      currentIndex:
        (activeLightbox.currentIndex - 1 + activeLightbox.images.length) %
        activeLightbox.images.length,
    });
  };

  return (
    <div className="bg-[#111111] text-[#F5F2EA] min-h-screen pb-28">
      {/* 1. Page Header */}
      <PageHero
        badge={lang === "th" ? "งานฝีมือและการสร้างสรรค์" : lang === "fr" ? "CRÉATION & ARTISANAT" : "CREATION & CRAFT"}
        title={s.title || (lang === "th" ? "ความเชี่ยวชาญด้านงานหัตถศิลป์และการออกแบบร่วมสมัย" : "Craftsmanship Meets Contemporary Design")}
        desc={
          lang === "th"
            ? "ArtcrewArmada เป็นผู้สร้างสรรค์และรับผลิตงานหัตถกรรมร่วมสมัย ครอบคลุมงานเครื่องประดับ ของใช้ และของตกแต่งบ้าน โดยผสานงานฝีมือเข้ากับการออกแบบที่ตอบโจทย์ความต้องการเฉพาะของลูกค้า ทั้งในและต่างประเทศ"
            : lang === "fr"
            ? "ArtcrewArmada est un créateur et producteur d'artisanat contemporain, couvrant les bijoux, les objets du quotidien et la décoration intérieure sur mesure, alliant savoir-faire traditionnel et design haut de gamme."
            : "ArtcrewArmada creates and manufactures bespoke contemporary crafts, spanning high jewelry, lifestyle objects, and home décor, seamlessly fusing ancient heritage techniques with bespoke client visions."
        }
      />

      {/* 2. Intro Manifesto Banner */}
      <div className="border-b border-[#F5F2EA]/10 bg-[#151515]">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center space-y-6">
          <span className="font-sans text-[10px] font-bold tracking-[0.35em] uppercase text-[#B08A3E]">
            {lang === "th" ? "ทักษะและเทคนิคที่เชี่ยวชาญ" : lang === "fr" ? "TECHNIQUES & COMPÉTENCES" : "CORE EXPERTISE & TECHNIQUES"}
          </span>
          <p className="font-serif-display font-light text-lg md:text-2xl text-[#F5F2EA] leading-relaxed italic px-2">
            {lang === "th"
              ? "“เราสร้างสรรค์ชิ้นงานด้วยความประณีต 6 แขนงหลัก เพื่อส่งมอบคุณค่าที่ลึกซึ้งจากวัสดุสู่เรื่องราว และจากงานฝีมือสู่การใช้ชีวิตร่วมสมัย”"
              : lang === "fr"
              ? "« Nous façonnons chaque pièce à travers 6 disciplines majeures, transmettant une valeur profonde du matériau au sens. »"
              : "“We shape every creation through 6 foundational craft disciplines, elevating materials into meaning and ancient craft into contemporary life.”"}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-[#F5F2EA]/10">
            <div className="border-r border-[#F5F2EA]/10 last:border-r-0">
              <span className="font-serif-display text-3xl md:text-4xl text-[#B08A3E] font-light">20+</span>
              <p className="font-sans text-[9px] text-[#AFAFA9] uppercase tracking-wider mt-1">
                {lang === "th" ? "ปีประสบการณ์" : lang === "fr" ? "Ans d'expérience" : "Years Mastery"}
              </p>
            </div>
            <div className="border-r border-[#F5F2EA]/10 last:border-r-0">
              <span className="font-serif-display text-3xl md:text-4xl text-[#B08A3E] font-light">6</span>
              <p className="font-sans text-[9px] text-[#AFAFA9] uppercase tracking-wider mt-1">
                {lang === "th" ? "เทคนิคเชี่ยวชาญหลัก" : lang === "fr" ? "Disciplines clés" : "Core Disciplines"}
              </p>
            </div>
            <div className="border-r border-[#F5F2EA]/10 last:border-r-0">
              <span className="font-serif-display text-3xl md:text-4xl text-[#B08A3E] font-light">100%</span>
              <p className="font-sans text-[9px] text-[#AFAFA9] uppercase tracking-wider mt-1">
                {lang === "th" ? "งานฝีมือประณีต" : lang === "fr" ? "Fait main d'art" : "Handcrafted"}
              </p>
            </div>
            <div>
              <span className="font-serif-display text-3xl md:text-4xl text-[#B08A3E] font-light">WCC</span>
              <p className="font-sans text-[9px] text-[#AFAFA9] uppercase tracking-wider mt-1">
                {lang === "th" ? "มาตรฐานระดับสากล" : lang === "fr" ? "Reconnaissance WCC" : "Global Standards"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Sticky Quick-Filter Navigation */}
      <div className="sticky top-16 z-30 bg-[#111111]/95 backdrop-blur-md border-b border-[#F5F2EA]/10 py-4 px-6 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <span className="font-sans text-[9px] font-bold tracking-[0.25em] text-[#B08A3E] uppercase shrink-0 hidden md:inline-block">
            {lang === "th" ? "หมวดความเชี่ยวชาญ" : lang === "fr" ? "DISCIPLINES" : "DISCIPLINES"} :
          </span>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 w-full md:w-auto">
            <button
              onClick={() => setSelectedPillar("all")}
              className={`px-3.5 py-1.5 font-sans text-[10px] font-bold tracking-wider uppercase border transition-all shrink-0 ${
                selectedPillar === "all"
                  ? "bg-[#B08A3E] text-[#111111] border-[#B08A3E] shadow-sm"
                  : "bg-[#1A1A1A] text-[#AFAFA9] border-[#F5F2EA]/10 hover:text-[#F5F2EA] hover:border-[#F5F2EA]/30"
              }`}
            >
              {lang === "th" ? "ทั้งหมด (All)" : lang === "fr" ? "Toutes" : "All Disciplines"}
            </button>

            {pillars.map((p) => {
              const isSelected = selectedPillar === p.id;
              const tagLabel = lang === "th" ? p.tagTh : lang === "fr" ? p.tagFr : p.tagEn;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedPillar(p.id)}
                  className={`px-3 py-1.5 font-sans text-[10px] font-bold tracking-wider uppercase border transition-all shrink-0 ${
                    isSelected
                      ? "bg-[#B08A3E] text-[#111111] border-[#B08A3E]"
                      : "bg-[#1A1A1A] text-[#AFAFA9] border-[#F5F2EA]/10 hover:text-[#F5F2EA] hover:border-[#F5F2EA]/30"
                  }`}
                >
                  {p.number}. {tagLabel}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. Craft Expertise Pillars Showcase */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
        {filteredPillars.map((pillar) => {
          const currentTitle = lang === "th" ? pillar.titleTh : lang === "fr" ? pillar.titleFr : pillar.titleEn;
          const currentTag = lang === "th" ? pillar.tagTh : lang === "fr" ? pillar.tagFr : pillar.tagEn;
          const currentDesc = lang === "th" ? pillar.descTh : lang === "fr" ? pillar.descFr : pillar.descEn;
          const currentMaterials = lang === "th" ? pillar.materialsTh : lang === "fr" ? pillar.materialsFr : pillar.materialsEn;
          const currentFeatures = lang === "th" ? pillar.featuresTh : lang === "fr" ? pillar.featuresFr : pillar.featuresEn;

          return (
            <section
              key={pillar.id}
              id={pillar.id}
              className="border border-[#F5F2EA]/10 bg-[#161616] transition-all hover:border-[#F5F2EA]/20 relative overflow-hidden"
            >
              {/* Top Accent Stripe with Number */}
              <div className="flex items-center justify-between px-6 md:px-10 py-4 border-b border-[#F5F2EA]/10 bg-[#1A1A1A]">
                <div className="flex items-center gap-3">
                  <span className="font-serif-display text-xl text-[#B08A3E] font-semibold">{pillar.number}</span>
                  <span className="h-3 w-[1px] bg-[#F5F2EA]/20"></span>
                  <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-[#F5F2EA]/70">
                    {currentTag}
                  </span>
                </div>
                <span className="font-sans text-[9px] uppercase tracking-widest text-[#AFAFA9]/50">
                  {pillar.images.length} {lang === "th" ? "ชิ้นงานในอัลบั้ม" : lang === "fr" ? "œuvres" : "Gallery Works"}
                </span>
              </div>

              <div className="p-6 md:p-10 space-y-10">
                {/* Header & Description Block */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7 space-y-4">
                    <h2 className="font-serif-display text-2xl md:text-4xl text-[#F5F2EA] font-light leading-snug">
                      {currentTitle}
                    </h2>
                    <p className="font-sans text-xs md:text-sm text-[#AFAFA9] leading-relaxed text-justify">
                      {currentDesc}
                    </p>
                  </div>

                  <div className="lg:col-span-5 bg-[#121212] border border-[#F5F2EA]/10 p-6 space-y-5">
                    <div className="space-y-2">
                      <span className="font-sans text-[9px] font-bold tracking-widest text-[#B08A3E] uppercase block">
                        {lang === "th" ? "วัสดุและเครื่องมือหลัก" : lang === "fr" ? "Matériaux Principaux" : "Key Materials & Mediums"}
                      </span>
                      <ul className="space-y-1 text-xs text-[#F5F2EA]/80 font-sans">
                        {currentMaterials.map((m, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B08A3E]/60"></span>
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-[#F5F2EA]/10 space-y-2">
                      <span className="font-sans text-[9px] font-bold tracking-widest text-[#B08A3E] uppercase block">
                        {lang === "th" ? "จุดเด่นและเอกลักษณ์" : lang === "fr" ? "Signatures & Spécificités" : "Craft Signatures"}
                      </span>
                      <ul className="space-y-1 text-xs text-[#AFAFA9] font-sans">
                        {currentFeatures.map((f, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#B08A3E] text-[10px] mt-0.5">✦</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Gallery Grid for this Pillar */}
                <div className="space-y-4 pt-4 border-t border-[#F5F2EA]/5">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-[9px] font-bold tracking-[0.25em] text-[#AFAFA9] uppercase">
                      {lang === "th" ? "ผลงานตัวอย่างในพอร์ตโฟลิโอ" : lang === "fr" ? "Œuvres du Portfolio" : "Portfolio Masterpieces"}
                    </span>
                    <span className="font-sans text-[9px] text-[#B08A3E]/70 italic">
                      {lang === "th" ? "คลิกที่ภาพเพื่อดูรายละเอียดขนาดใหญ่" : lang === "fr" ? "Cliquer pour agrandir" : "Click image to expand"}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    {pillar.images.map((img, imgIdx) => {
                      const currentCaption = lang === "th" ? img.captionTh : lang === "fr" ? img.captionFr : img.captionEn;
                      return (
                        <div
                          key={imgIdx}
                          onClick={() => openLightbox(currentTitle, pillar.images, imgIdx)}
                          className="group cursor-pointer relative aspect-square bg-[#101010] border border-[#F5F2EA]/10 overflow-hidden transition-all hover:border-[#B08A3E] hover:shadow-lg"
                        >
                          <img
                            src={img.src}
                            alt={img.alt}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-2 flex flex-col justify-end">
                            <span className="font-sans text-[8px] text-[#F5F2EA] font-semibold line-clamp-2">
                              {currentCaption}
                            </span>
                            <span className="text-[#B08A3E] text-[8px] uppercase tracking-wider mt-1">
                              Zoom 🔍
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 5. Call To Action & Masterclass Banner */}
      <div className="max-w-7xl mx-auto px-6 pt-12">
        <div className="border border-[#B08A3E]/30 bg-[#161616] p-8 md:p-14 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#B08A3E]/5 rounded-full blur-2xl"></div>
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <span className="font-sans text-[10px] font-bold tracking-[0.4em] uppercase text-[#B08A3E]">
              Masterclasses & Bespoke Commissions
            </span>
            <h2 className="font-serif-display text-3xl md:text-5xl text-[#F5F2EA] font-light">
              {lang === "th"
                ? "ต่อยอดองค์ความรู้ และร่วมสร้างสรรค์ชิ้นงานเฉพาะบุคคล"
                : lang === "fr"
                ? "Apprendre l'Artisanat d'Art ou Commander une Œuvre Sur Mesure"
                : "Learn the Ancient Crafts or Commission a Bespoke Creation"}
            </h2>
            <p className="font-sans text-xs md:text-sm text-[#AFAFA9] leading-relaxed">
              {lang === "th"
                ? "เราเปิดสอนเวิร์กชอปถ่ายทอดทักษะงานหัตถกรรม 6 แขนงสู่ชุมชน และรับผลิตชิ้นงานเครื่องประดับ งานตกแต่ง และประติมากรรมสั่งทำพิเศษ (Bespoke Salon)"
                : lang === "fr"
                ? "Nous organisons des ateliers transmettant les 6 disciplines artisanales et réalisons des pièces sur mesure : bijoux d'art, décoration et installations spatiales."
                : "We organize masterclasses transferring 6 artisan crafts to communities, and offer custom bespoke jewelry, home adornments, and spatial architectural commissions."}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                to={`/${lang}/learning`}
                className="px-6 py-3 bg-[#B08A3E] text-[#111111] font-sans text-xs font-bold uppercase tracking-widest hover:bg-[#c49c48] transition-calm"
              >
                {lang === "th" ? "ดูตารางเวิร์กชอป & กิจกรรม" : lang === "fr" ? "Voir les Ateliers" : "View Masterclasses"}
              </Link>
              <Link
                to={`/${lang}/contact`}
                className="px-6 py-3 border border-[#F5F2EA]/20 text-[#F5F2EA] font-sans text-xs font-bold uppercase tracking-widest hover:border-[#F5F2EA]/60 hover:bg-[#1A1A1A] transition-calm"
              >
                {lang === "th" ? "ปรึกษางานสั่งทำพิเศษ (Bespoke)" : lang === "fr" ? "Projet Sur Mesure" : "Inquire Bespoke Project"}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Lightbox Modal */}
      {activeLightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fadeIn"
          onClick={() => setActiveLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-[#161616] border border-[#F5F2EA]/20 p-4 md:p-6 flex flex-col justify-between space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#F5F2EA]/10 pb-3">
              <div>
                <span className="font-sans text-[9px] uppercase tracking-widest text-[#B08A3E]">
                  {activeLightbox.pillarTitle}
                </span>
                <p className="font-serif-display text-sm md:text-base text-[#F5F2EA]">
                  {lang === "th"
                    ? activeLightbox.images[activeLightbox.currentIndex]?.captionTh
                    : lang === "fr"
                    ? activeLightbox.images[activeLightbox.currentIndex]?.captionFr
                    : activeLightbox.images[activeLightbox.currentIndex]?.captionEn}
                </p>
              </div>
              <button
                onClick={() => setActiveLightbox(null)}
                className="text-[#AFAFA9] hover:text-[#F5F2EA] text-2xl font-light px-2"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Main Image in Lightbox */}
            <div className="relative aspect-[4/3] md:aspect-[16/10] w-full bg-black/50 overflow-hidden flex items-center justify-center">
              <img
                src={activeLightbox.images[activeLightbox.currentIndex]?.src}
                alt={activeLightbox.images[activeLightbox.currentIndex]?.alt}
                className="w-full h-full object-contain"
              />

              {/* Prev / Next Controls */}
              {activeLightbox.images.length > 1 && (
                <>
                  <button
                    onClick={prevLightboxImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#B08A3E] text-white hover:text-black w-10 h-10 rounded-full flex items-center justify-center transition-calm"
                    aria-label="Previous image"
                  >
                    ‹
                  </button>
                  <button
                    onClick={nextLightboxImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#B08A3E] text-white hover:text-black w-10 h-10 rounded-full flex items-center justify-center transition-calm"
                    aria-label="Next image"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            {/* Modal Footer / Thumbnails */}
            <div className="flex items-center justify-between pt-2 border-t border-[#F5F2EA]/10">
              <span className="font-sans text-[10px] text-[#AFAFA9]">
                {activeLightbox.currentIndex + 1} / {activeLightbox.images.length}
              </span>

              <div className="flex gap-2 overflow-x-auto max-w-[60%]">
                {activeLightbox.images.map((thumb, idx) => (
                  <button
                    key={idx}
                    onClick={() =>
                      setActiveLightbox({ ...activeLightbox, currentIndex: idx })
                    }
                    className={`w-10 h-10 shrink-0 border overflow-hidden transition-all ${
                      idx === activeLightbox.currentIndex
                        ? "border-[#B08A3E] opacity-100 scale-105"
                        : "border-[#F5F2EA]/20 opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={thumb.src}
                      alt={thumb.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              <button
                onClick={() => setActiveLightbox(null)}
                className="px-4 py-1.5 font-sans text-[10px] uppercase tracking-wider bg-[#1A1A1A] hover:bg-[#222222] border border-[#F5F2EA]/20 text-[#F5F2EA]"
              >
                {lang === "th" ? "ปิด" : lang === "fr" ? "Fermer" : "Close"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
