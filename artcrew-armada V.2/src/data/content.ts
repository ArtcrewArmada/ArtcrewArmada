import { CategoryCard, ProductItem, WorkshopItem, JournalPost, Language } from '../types';

export const LOGO_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuBo-9WID2KZrTKEle_l8D8oCWMvFjAd-sspAMAbWZ0wiBit60wIU0sJm3aHXRz5YwCT1tjga7k_fMbR8hQz6fx5fZg0YnLEIo_xAaFeb4Z6yRDGjGE4gbaXZg2jSJIBn1kaf--vLFPB0KZdpcQWgAUHooH1BrF8kNu_hXdKS7f-6BkFv57ORdT95cSuo_2u1Yk0W5oORCaB7sKElGKJmPa78hJHaPMIvUTi33_c5h5Yu9eiMIfxUpOQsM5-3rTXFImQZeQ";

export const HERO_BG_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuBNYKii3r8FLbJy2uQLP4ISr-EwBsH8BQIFylQfNJrWLFBmdE-zmC6cCpa-VC2bLFhT8yqmDYFdDYoTXlJX0P-ZFRXqMKu4bqfdjeeUvKFe6FfPqelxyQDRFiy8Y5SJmifkTgsxo7uY8PLLgbOkdHeCAgUJdfjzstB7VbMaIXgFnVcmhWpDAzn9a6bd4v-9V1oD0tjuenomMnjO4h4BjT71bVnxIlxb49dEYpWP0Kz8tRaGt8xuFuqi-g";

export const translations = {
  nav: {
    home: { EN: 'Home', TH: 'หน้าแรก', FR: 'Accueil' },
    about: { EN: 'About', TH: 'เกี่ยวกับเรา', FR: 'À Propos' },
    creation: { EN: 'Creation & Craft', TH: 'การสร้างสรรค์และงานช่าง', FR: 'Création & Artisanat' },
    upcycling: { EN: 'ARMADA Upcycling', TH: 'อัพไซเคิล อาร์มาดา', FR: 'Upcycling ARMADA' },
    primitive: { EN: 'Art & Primitive', TH: 'ศิลปะและโบราณกาล', FR: 'Art & Primitif' },
    shop: { EN: 'Shop', TH: 'ร้านค้า', FR: 'Boutique' },
    learning: { EN: 'Learning & Activities', TH: 'การเรียนรู้และกิจกรรม', FR: 'Ateliers & Formations' },
    journal: { EN: 'Journal', TH: 'บันทึกบทความ', FR: 'Journal' },
    awareness: { EN: 'Awareness Center', TH: 'ศูนย์สร้างความตระหนักรู้', FR: 'Centre de Sensibilisation' },
    contact: { EN: 'Contact', TH: 'ติดต่อเรา', FR: 'Contact' },
  },
  hero: {
    badge: { EN: 'Creation & Craft', TH: 'การสร้างสรรค์และงานหัตถศิลป์', FR: 'Création & Artisanat' },
    title: { 
      EN: 'REVERENCE FOR THE RAW MATERIAL', 
      TH: 'คารวะต่อคุณค่าแห่งวัตถุดิบดิบ', 
      FR: 'RÉVÉRENCE POUR LA MATIÈRE BRUTE' 
    },
    subtitle: { 
      EN: 'Where discarded fragments meet ancient techniques. We elevate upcycled elements into high-luxury artifacts, crafting meaning through meticulous design and community-driven artistry.',
      TH: 'ที่ซึ่งเศษเสี้ยวที่ถูกละเลยบรรจบกับศาสตร์ช่างโบราณ เรายกระดับวัตถุดิบอัพไซเคิลสู่งานศิลป์ชั้นสูง สร้างคุณค่าด้วยการออกแบบอันประณีตและจิตวิญญาณชุมชน',
      FR: 'Où les fragments délaissés rencontrent les techniques ancestrales. Nous sublimons les éléments recyclés en artefacts de haute joaillerie et d\'art intemporel.'
    },
    explore: { EN: 'Explore Collections', TH: 'สำรวจคอลเลกชัน', FR: 'Explorer les Collections' },
    philosophy: { EN: 'Our Philosophy', TH: 'ปรัชญาของเรา', FR: 'Notre Philosophie' },
  },
  shop: {
    heading: { EN: 'Shop & Services', TH: 'ร้านค้าและบริการ', FR: 'Boutique & Services' },
    subtitle: { EN: 'Handcrafted rarities and circular masterclasses', TH: 'ผลงานช่างฝีมือล้ำค่าและเวิร์กช็อปแห่งการออกแบบหมุนเวียน', FR: 'Pièces uniques et ateliers de haute facture' },
    filterAll: { EN: 'All Categories', TH: 'ทุกหมวดหมู่', FR: 'Toutes Catégories' },
    exploreBtn: { EN: 'Explore', TH: 'สำรวจ', FR: 'Explorer' },
    viewCollection: { EN: 'View Collection', TH: 'ดูคอลเลกชัน', FR: 'Voir Collection' },
    inquireBtn: { EN: 'Acquire Artifact', TH: 'สั่งซื้อ / ครอบครอง', FR: 'Acquérir' },
    addToCart: { EN: 'Add to Bag', TH: 'เพิ่มลงในกระเป๋า', FR: 'Ajouter au Panier' },
    soldOut: { EN: 'Bespoke Order Only', TH: 'สั่งทำเฉพาะบุคคล', FR: 'Sur Commande' },
  },
  about: {
    title: { EN: 'The Atelier of Circular Haute Art', TH: 'สตูดิโองานศิลป์ชั้นสูงแห่งความยั่งยืน', FR: 'L\'Atelier d\'Art Circulaire' },
    tag: { EN: 'Manifesto', TH: 'คำแถลงการณ์', FR: 'Manifeste' },
    lead: {
      EN: 'Founded on the belief that raw matter holds ancestral memory, ArtCrew ARMADA reimagines waste metals, decommissioned maritime chains, and ancient alloy relics into transcendent artistic expressions.',
      TH: 'ก่อตั้งขึ้นจากความเชื่อว่าสสารดิบกักเก็บความทรงจำแห่งอดีตกาล ArtCrew ARMADA แปลงโฉมเศษโลหะ โซ่เรือปลดประจำการ และโลหะผสมโบราณ ให้กลายเป็นงานศิลป์อันไร้กาลเวลา',
      FR: 'Fondé sur la conviction que la matière brute détient une mémoire ancestrale, ArtCrew ARMADA réinvente les métaux de récupération et chaînes maritimes en créations transcendantes.'
    },
    pillars: [
      {
        icon: 'diamond',
        title: { EN: 'Zero-Depletion Luxury', TH: 'ความหรูหราที่ไม่เบียดเบียนทรัพยากร', FR: 'Luxe Sans Épuisement' },
        desc: {
          EN: 'Every piece is composed of at least 85% verified post-industrial and upcycled precious materials, melted in small micro-crucibles.',
          TH: 'ทุกชิ้นงานประกอบด้วยวัสดุรีไซเคิลและอัพไซเคิลที่ผ่านการรับรองไม่ต่ำกว่า 85% หลอมในเตาหลอมจำลองขนาดเล็ก',
          FR: 'Chaque pièce est composée d\'au moins 85% de matériaux précieux post-industriels certifiés.'
        }
      },
      {
        icon: 'handyman',
        title: { EN: 'Ancestral Joinery & Cold Forging', TH: 'งานเข้าไม้โลหะโบราณและการตีเย็น', FR: 'Assemblage Ancestral & Forge à Froid' },
        desc: {
          EN: 'We revive ancient Roman maille, Byzantine chain weaves, and Japanese mokume-gane without industrial high-carbon machines.',
          TH: 'เราฟื้นฟูเทคนิคการถักโซ่แบบโรมัน ไบแซนไทน์ และการซ้อนชั้นโลหะโมคุเมะ-กาเนะของญี่ปุ่นโดยไม่ใช้เครื่องจักรอุตสาหกรรมที่ก่อมลพิษ',
          FR: 'Renaissance du maillage romain, des chaînes byzantines et du mokume-gane japonais sans machinerie lourde.'
        }
      },
      {
        icon: 'groups',
        title: { EN: 'Community Atelier Circles', TH: 'วงเสวนางานช่างและชุมชน', FR: 'Cercles d\'Atelier Communautaires' },
        desc: {
          EN: 'Our workshop operates as an open academy where master blacksmiths teach emerging artisans circular sculpture techniques.',
          TH: 'เวิร์กช็อปของเราดำเนินการในฐานะสถาบันเปิดที่ช่างตีเหล็กชั้นครูถ่ายทอดเทคนิคประติมากรรมหมุนเวียนแก่คนรุ่นใหม่',
          FR: 'Notre atelier forme la nouvelle génération d\'artisans aux techniques de sculpture circulaire.'
        }
      }
    ]
  },
  cart: {
    title: { EN: 'Your Selection', TH: 'รายการที่คุณเลือก', FR: 'Votre Sélection' },
    empty: { EN: 'Your collection bag is empty.', TH: 'กระเป๋าคอลเลกชันของคุณยังว่างเปล่า', FR: 'Votre panier est vide.' },
    total: { EN: 'Total Valuation', TH: 'มูลค่ารวม', FR: 'Valeur Totale' },
    checkout: { EN: 'Request Private Acquisition', TH: 'ส่งคำขอครอบครองชิ้นงาน', FR: 'Demande d\'Acquisition' },
    continue: { EN: 'Continue Exploring', TH: 'เลือกชมชิ้นงานต่อ', FR: 'Continuer l\'exploration' },
    successMsg: { EN: 'Acquisition request submitted. Our curator will contact you within 24 hours.', TH: 'ส่งคำขอสำเร็จแล้ว ภัณฑารักษ์ของเราจะติดต่อกลับภายใน 24 ชั่วโมง', FR: 'Demande transmise. Notre curateur vous contactera sous 24h.' }
  },
  footer: {
    brand: 'ARTCREW ARMADA',
    tagline: { 
      EN: '© 2024 ARTCREW ARMADA. TAILORED SUSTAINABILITY.', 
      TH: '© 2024 ARTCREW ARMADA. ความยั่งยืนที่รังสรรค์เฉพาะบุคคล', 
      FR: '© 2024 ARTCREW ARMADA. DURABILITÉ SUR MESURE.' 
    },
    terms: { EN: 'Terms', TH: 'ข้อกำหนด', FR: 'Conditions' },
    privacy: { EN: 'Privacy', TH: 'ความเป็นส่วนตัว', FR: 'Confidentialité' }
  }
};

export const CATEGORIES_DATA: CategoryCard[] = [
  {
    id: 'jewelry',
    title: { EN: 'Jewelry', TH: 'เครื่องประดับอัญมณี', FR: 'Haute Joaillerie' },
    subtitle: { EN: 'Hand-forged rings, talismans & chain links', TH: 'แหวนหลอมมือ เครื่องราง และข้อต่อสร้อยโซ่ล้ำค่า', FR: 'Bagues forgées, talismans & mailles précieuses' },
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
    actionText: { EN: 'Explore', TH: 'สำรวจ', FR: 'Explorer' },
    categoryFilter: 'jewelry'
  },
  {
    id: 'accessories',
    title: { EN: 'Accessories', TH: 'เครื่องประดับและพกพา', FR: 'Accessoires' },
    subtitle: { EN: 'Upcycled brass cuffs, buckles & timepieces', TH: 'กำไลทองเหลือง หัวเข็มขัด และกลไกบอกเวลา', FR: 'Manchettes en laiton recyclé & garde-temps' },
    image: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&q=80&w=800',
    actionText: { EN: 'Explore', TH: 'สำรวจ', FR: 'Explorer' },
    categoryFilter: 'accessories'
  },
  {
    id: 'decorations',
    title: { EN: 'Decorations', TH: 'ของตกแต่งและประติมากรรม', FR: 'Décorations & Sculptures' },
    subtitle: { EN: 'Monolithic slate candleholders & sculptural vessels', TH: 'เชิงเทียนหินชนวนชิ้นเอกและภาชนะประติมากรรม', FR: 'Porte-bougies en ardoise & vases sculpturaux' },
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800',
    actionText: { EN: 'Explore', TH: 'สำรวจ', FR: 'Explorer' },
    categoryFilter: 'decorations'
  },
  {
    id: 'upcycling',
    title: { EN: 'Upcycling', TH: 'ผลงานอัพไซเคิล', FR: 'Upcycling Brut' },
    subtitle: { EN: 'Aerospace titanium gears reborn as wall reliquaries', TH: 'เฟืองไทเทเนียมอากาศยานที่คืนชีพสู่งานศิลป์ฝาผนัง', FR: 'Engrenages titane et reliquaires muraux' },
    image: 'https://images.unsplash.com/photo-1536633135910-36669256498e?auto=format&fit=crop&q=80&w=800',
    actionText: { EN: 'Explore', TH: 'สำรวจ', FR: 'Explorer' },
    categoryFilter: 'upcycling'
  },
  {
    id: 'textile',
    title: { EN: 'Textile', TH: 'สิ่งทอเส้นใยธรรมชาติ', FR: 'Textile & Fibres' },
    subtitle: { EN: 'Raw undyed linen, organic hemp & metal weave', TH: 'ผ้าลินินดิบไม่ฟอกสี กัญชงอินทรีย์ และเส้นใยโลหะถัก', FR: 'Lin brut non blanchi, chanvre & fil de métal' },
    image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=800',
    actionText: { EN: 'Explore', TH: 'สำรวจ', FR: 'Explorer' },
    categoryFilter: 'textile'
  },
  {
    id: 'art-culture',
    title: { EN: 'Art & Culture', TH: 'ศิลปะและวัฒนธรรม', FR: 'Art & Culture' },
    subtitle: { EN: 'Sacred geometric artifacts & rare heritage icons', TH: 'ศิลปวัตถุเรขาคณิตศักดิ์สิทธิ์และงานมรดกสะสมหายาก', FR: 'Artefacts géométriques sacrés & pièces de musée' },
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800',
    actionText: { EN: 'Explore', TH: 'สำรวจ', FR: 'Explorer' },
    categoryFilter: 'art-culture'
  },
  {
    id: 'course-learning',
    title: { EN: 'Course Learning', TH: 'คอร์สเรียนและเวิร์กช็อป', FR: 'Formations & Ateliers' },
    subtitle: { EN: 'Intensive atelier apprenticeships and circular design masterclasses', TH: 'หลักสูตรฝึกฝนช่างฝีมือในสตูดิโอและเวิร์กช็อปออกแบบหมุนเวียนเข้มข้น', FR: 'Apprentissages intensifs en atelier et masterclasses' },
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200',
    actionText: { EN: 'View Collection', TH: 'ดูคอลเลกชัน', FR: 'Voir Collection' },
    categoryFilter: 'course-learning',
    isWide: true
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'prod-1',
    title: { 
      EN: 'Armada Byzantine Signet Ring', 
      TH: 'แหวนตราสัญลักษณ์ ไบแซนไทน์ อาร์มาดา', 
      FR: 'Chevalière Byzantine Armada' 
    },
    category: 'jewelry',
    price: { USD: 680, THB: 23800, EUR: 630 },
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800',
    materials: { 
      EN: 'Upcycled 925 Silver, Reclaimed 18k Yellow Gold leaf, Raw Obsidian cabochon', 
      TH: 'เงินแท้ 925 รีไซเคิล, ทองคำแท้ 18k อัพไซเคิล, หินออบซิเดียนดิบ', 
      FR: 'Argent 925 recyclé, feuille d\'or 18k recyclée, obsidienne brute' 
    },
    description: { 
      EN: 'Hand-carved with ancient wax casting methods, displaying micro-relief engravings of the armada compass and raw obsidian core.',
      TH: 'แกะสลักมือด้วยกรรมวิธีขี้ผึ้งโบราณ สลักลวดลายเข็มทิศกองเรืออาร์มาดา ประดับแกนหินออบซิเดียนดิบ',
      FR: 'Sculpté à la main selon la technique de cire perdue ancestrale, orné d\'un cabochon en obsidienne brute.'
    },
    artisanNote: {
      EN: 'Individual piece number #04/20. Cast from maritime navigational bronze and scrap fine silver.',
      TH: 'ผลงานชิ้นที่ #04/20 หลอมขึ้นจากสำริดเดินเรือโบราณและเงินบริสุทธิ์รีไซเคิล',
      FR: 'Pièce numérotée #04/20. Fondue à partir de bronze de navigation maritime et argent fin.'
    },
    dimensions: 'Ring sizes 7-12 US available',
    year: '2024'
  },
  {
    id: 'prod-2',
    title: { 
      EN: 'Monolith Raw Brass Torc', 
      TH: 'สร้อยคอทอร์คทองเหลืองดิบ โมโนลิธ', 
      FR: 'Torque Monolithe en Laiton Brut' 
    },
    category: 'jewelry',
    price: { USD: 920, THB: 32200, EUR: 850 },
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800',
    materials: { 
      EN: 'Post-industrial marine brass rod, Cold-hammered texture, Mattified patina', 
      TH: 'แท่งทองเหลืองเรือเดินทะเลอุตสาหกรรม, ขึ้นรูปลวดลายด้วยค้อนเย็น, ผิวรมด้านธรรมชาติ', 
      FR: 'Barre de laiton marin post-industrielle, martelage à froid' 
    },
    description: { 
      EN: 'A heavy ceremonial torc sculpted by hand through 80 hours of rhythmic cold-hammering, designed to rest gracefully upon the collarbone.',
      TH: 'สร้อยคอพิธีกรรมน้ำหนักกำลังดี ขึ้นรูปด้วยมือผ่านการตีค้อนเย็นนานกว่า 80 ชั่วโมง ออกแบบให้แนบสนิทกับกระดูกไหปลาร้าอย่างสง่างาม',
      FR: 'Un torque cérémoniel forgé à froid pendant 80 heures pour épouser parfaitement la clavicule.'
    },
    dimensions: 'Circumference 42 cm, Weight 180g',
    year: '2024'
  },
  {
    id: 'prod-3',
    title: { 
      EN: 'Solar Chrono Gear Cuff', 
      TH: 'กำไลข้อมือเฟืองโซลาร์โครโนกราฟ', 
      FR: 'Manchette Solaire à Engrenages' 
    },
    category: 'accessories',
    price: { USD: 750, THB: 26250, EUR: 690 },
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800',
    materials: { 
      EN: 'Vintage Swiss horology escapement gears, Oxidized blackened steel', 
      TH: 'เฟืองจักรกลนาฬิกาสวิสโบราณ, เหล็กดำออกซิไดซ์ทนทานสูง', 
      FR: 'Rouages d\'horlogerie suisse vintage, acier noirci oxydé' 
    },
    description: { 
      EN: 'Intricate horological micro-mechanisms frozen in geometric harmony on a hand-beaten steel wrist cuff.',
      TH: 'กลไกจักรกลนาฬิกาขนาดจิ๋วที่จัดวางในสัดส่วนเรขาคณิตอันกลมกลืน บนแผ่นเหล็กตีมือ',
      FR: 'Micro-mécanismes d\'horlogerie figés en harmonie géométrique sur acier battu à la main.'
    },
    dimensions: 'Width 4.5 cm, Adjustable fit',
    year: '2024'
  },
  {
    id: 'prod-4',
    title: { 
      EN: 'Obsidian Vessel No. 07', 
      TH: 'ภาชนะประติมากรรมหินออบซิเดียน No. 07', 
      FR: 'Vase Obsidienne Sculpturale No. 07' 
    },
    category: 'decorations',
    price: { USD: 1450, THB: 50750, EUR: 1340 },
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=800',
    materials: { 
      EN: 'Hand-carved dark quarry slate, Molten brass kintsugi seam inlay', 
      TH: 'หินชนวนเหมืองสีเข้มแกะสลักมือ, อุดรอยต่อด้วยทองเหลืองหลอมเทคนิคคินสึงิ', 
      FR: 'Ardoise sombre sculptée, jointure en laiton fondu style Kintsugi' 
    },
    description: { 
      EN: 'A monolithic sculptural centerpiece celebrating geological fractures bound by recycled liquid brass.',
      TH: 'ประติมากรรมตกแต่งศูนย์กลางห้องที่เฉลิมฉลองรอยแยกทางธรณีวิทยา ผสานด้วยทองเหลืองเหลวรีไซเคิล',
      FR: 'Pièce maîtresse monolithique célébrant les fractures géologiques liées au laiton recyclé.'
    },
    dimensions: '34 cm x 18 cm x 12 cm',
    year: '2024'
  },
  {
    id: 'prod-5',
    title: { 
      EN: 'Aero-Titanium Reliquary Wall Art', 
      TH: 'งานศิลป์ติดผนัง เรลิควารี ไทเทเนียมอากาศยาน', 
      FR: 'Reliquaire Mural en Titane Aéronautique' 
    },
    category: 'upcycling',
    price: { USD: 2800, THB: 98000, EUR: 2590 },
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800',
    materials: { 
      EN: 'Decommissioned aircraft jet compressor blades, Smoked oak backdrop', 
      TH: 'ใบพัดคอมเพรสเซอร์เครื่องบินเจ็ตปลดประจำการ, ฐานไม้โอ๊กรมควัน', 
      FR: 'Aubes de compresseur d\'avion recyclées, fond en chêne fumé' 
    },
    description: { 
      EN: 'Supersonic aviation engineering converted into a meditative sonic-form wall sculpture.',
      TH: 'วิศวกรรมการบินความเร็วเหนือเสียง ถูกเปลี่ยนเป็นประติมากรรมฝาผนังอันเงียบสงบและเปี่ยมพลัง',
      FR: 'Chef-d\'œuvre d\'ingénierie aéronautique transformé en sculpture murale méditative.'
    },
    dimensions: '85 cm x 85 cm x 8 cm',
    year: '2024'
  },
  {
    id: 'prod-6',
    title: { 
      EN: 'Primitive Hemp & Brass Mesh Tapestry', 
      TH: 'ผ้าแขวนผนังใยกัญชงและตาข่ายทองเหลืองโบราณ', 
      FR: 'Tapisserie Primitive en Chanvre & Maille Laiton' 
    },
    category: 'textile',
    price: { USD: 1150, THB: 40250, EUR: 1060 },
    image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=800',
    materials: { 
      EN: 'Hand-spun organic wild hemp, Hand-knitted reclaimed copper & brass wire', 
      TH: 'ใยกัญชงป่าอินทรีย์ปั่นมือ, ลวดทองแดงและทองเหลืองรีไซเคิลถักมือ', 
      FR: 'Chanvre sauvage filé main, mailles de cuivre et laiton recyclés' 
    },
    description: { 
      EN: 'Organic earth tones intertwined with lustrous metallic threads reflecting candle glow.',
      TH: 'โทนสีเอิร์ธโทนจากธรรมชาติ ผสานกับเส้นสายโลหะแวววาวที่สะท้อนแสงเทียนอย่างนุ่มนวล',
      FR: 'Tons organiques et fils métalliques chatoyants captant la lumière tamisée.'
    },
    dimensions: '120 cm x 60 cm',
    year: '2024'
  },
  {
    id: 'prod-7',
    title: { 
      EN: 'Sacred Astrolabe Dial Plate', 
      TH: 'แผ่นจานดาราศาสตร์จำลอง แอสโทรแลบ ศักดิ์สิทธิ์', 
      FR: 'Astrolabe Sacré en Bronze Archéologique' 
    },
    category: 'art-culture',
    price: { USD: 3200, THB: 112000, EUR: 2950 },
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800',
    materials: { 
      EN: 'Ancient alloy bronze reconstitution, Acid-etched celestial constellations', 
      TH: 'บรอนซ์ผสมสูตรโบราณ, กัดกรดแผนที่หมู่ดาวบนท้องฟ้าอย่างละเอียด', 
      FR: 'Bronze reconstitué selon formule antique, gravure des constellations célestes' 
    },
    description: { 
      EN: 'A museum-grade celestial tracking instrument handcrafted according to 12th-century Arabian navigation treatises.',
      TH: 'เครื่องมือคำนวณดวงดาวระดับพิพิธภัณฑ์ สร้างขึ้นตามตำราการเดินเรืออาหรับในคริสต์ศตวรรษที่ 12',
      FR: 'Instrument astronomique de qualité muséale réalisé selon les traités de navigation du XIIe siècle.'
    },
    dimensions: 'Diameter 40 cm, Solid Bronze weight 4.2 kg',
    year: '2024'
  }
];

export const WORKSHOPS_DATA: WorkshopItem[] = [
  {
    id: 'ws-1',
    title: { 
      EN: 'Masterclass: Ancient Maille Weaving & Cold Forging', 
      TH: 'มาสเตอร์คลาส: การถักโซ่เกราะโบราณและการตีโลหะเย็น', 
      FR: 'Masterclass: Cotte de Mailles & Forge à Froid' 
    },
    instructor: { EN: 'Master Jean-Luc & K. Viroj', TH: 'อาจารย์ฌอง-ลุค และ ช่างวิโรจน์', FR: 'Maître Jean-Luc & K. Viroj' },
    date: 'OCT 14 - 15, 2024',
    time: '10:00 AM - 5:00 PM',
    duration: '2 Days (14 Hours)',
    level: { EN: 'All Levels / Beginner Friendly', TH: 'ทุกระดับ / เหมาะสำหรับผู้เริ่มต้น', FR: 'Tous Niveaux' },
    price: { USD: 480, THB: 16800, EUR: 440 },
    spotsLeft: 4,
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
    description: {
      EN: 'Learn the ancient art of micro-link wire fabrication, mandrel winding, and 4-in-1 European maille armor pattern weaving using 100% recycled brass and copper.',
      TH: 'เรียนรู้ศาสตร์การสร้างข้อต่อลวดขนาดเล็ก การม้วนแกน และการถักลวดลายเกราะยุโรป 4-in-1 จากทองเหลืองและทองแดงรีไซเคิล 100%',
      FR: 'Apprenez la fabrication de maillons, l\'enroulement sur mandrin et le tissage d\'armure européenne 4-en-1 en laiton et cuivre recyclés.'
    },
    includes: {
      EN: ['Personal bench jeweler kit to take home', 'All raw upcycled metals included', 'Artisan certificate & tailored apron', 'Lunch & organic tea service'],
      TH: ['ชุดเครื่องมือช่างทองพกพากลับบ้านได้', 'วัสดุโลหะอัพไซเคิลทั้งหมดตลอดการเรียน', 'ใบประกาศนียบัตรช่างฝีมือ & ผ้ากันเปื้อนตัดเย็บพิเศษ', 'บริการอาหารกลางวันและชาออร์แกนิก'],
      FR: ['Kit d\'outils d\'établi à emporter', 'Tous les métaux recyclés fournis', 'Certificat d\'artisan & tablier', 'Déjeuner & thé biologique']
    }
  },
  {
    id: 'ws-2',
    title: { 
      EN: 'Circular Jewelry: Sand-Casting with Upcycled Silver', 
      TH: 'จิวเวลรี่หมุนเวียน: การหล่อทรายด้วยเงินรีไซเคิล', 
      FR: 'Joaillerie Circulaire: Fonte au Sable d\'Argent' 
    },
    instructor: { EN: 'Nathalie Dupont (Paris Atelier)', TH: 'นาตาลี ดูปองต์ (ช่างฝีมือสตูดิโอปารีส)', FR: 'Nathalie Dupont (Atelier Paris)' },
    date: 'NOV 02, 2024',
    time: '1:00 PM - 6:30 PM',
    duration: '1 Day (5.5 Hours)',
    level: { EN: 'Intermediate', TH: 'ระดับกลาง', FR: 'Intermédiaire' },
    price: { USD: 320, THB: 11200, EUR: 295 },
    spotsLeft: 2,
    image: 'https://images.unsplash.com/photo-1531959870249-9f9b729fe85d?auto=format&fit=crop&q=80&w=800',
    description: {
      EN: 'Carve your personalized talisman in organic cuttlebone or Delft sand and melt recycled silver scrap in our studio torch crucible.',
      TH: 'แกะสลักเครื่องรางเฉพาะตัวในลิ้นทะเลธรรมชาติหรือทรายเดลฟต์ พร้อมหลอมเศษเงินรีไซเคิลด้วยหัวพ่นไฟสตูดิโอ',
      FR: 'Sculptez votre talisman dans l\'os de seiche ou le sable de Delft et fondez vos chutes d\'argent au chalumeau.'
    },
    includes: {
      EN: ['30g of fine recycled 925 silver ingot', 'Raw mineral setting stones', 'Finishing & patina workshop guide'],
      TH: ['แท่งเงินบริสุทธิ์ 925 รีไซเคิล 30 กรัม', 'หินแร่ธรรมชาติตกแต่ง', 'คู่มือเทคนิคการขัดแต่งและลงพาทิน่า'],
      FR: ['30g d\'argent 925 recyclé', 'Pierres minérales brutes', 'Guide de finition et patine']
    }
  }
];

export const JOURNAL_DATA: JournalPost[] = [
  {
    id: 'j-1',
    title: { 
      EN: 'The Memory of Metal: Why Upcycled Alloys Outshine Virgin Ore', 
      TH: 'ความทรงจำของโลหะ: เหตุใดโลหะผสมอัพไซเคิลจึงมีเสน่ห์ล้ำลึกกว่าแร่ดิบเปิดใหม่', 
      FR: 'La Mémoire du Métal: Pourquoi l\'Alliage Recyclé Surpasse le Minerai Vierge' 
    },
    category: { EN: 'Material Philosophy', TH: 'ปรัชญาแห่งวัตถุดิบ', FR: 'Philosophie de la Matière' },
    date: 'AUG 28, 2024',
    readTime: { EN: '6 min read', TH: 'อ่าน 6 นาที', FR: '6 min de lecture' },
    excerpt: { 
      EN: 'When an industrial gear from 1952 is melted, the crystalline structure retains trace patinas that give jewelry unmatched warmth and depth.',
      TH: 'เมื่อเฟืองจักรกลจากปี 1952 ถูกหลอมใหม่ โครงสร้างผลึกภายในยังคงเก็บรักษาพาทิน่าและร่องรอยแห่งกาลเวลา มอบความอบอุ่นและมิติที่ไม่เหมือนใคร',
      FR: 'Lorsqu\'un engrenage de 1952 est fondu, sa structure cristalline conserve des traces de patine uniques.'
    },
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=800',
    content: {
      EN: [
        'In the standard luxury landscape, purity is often synonymous with sterile extraction: vast open-pit mines that tear through landscapes to extract virgin gold or silver with high chemical effluents.',
        'At ArtCrew Armada, we view raw matter through the lens of ancient alchemy. Every decommissioned aircraft strut, ship anchor link, or broken brass instrument has weathered stress, ocean salt, and human handling.',
        'When we re-forge these metals in micro-batches, trace carbon and varied copper percentages yield unpredictable, rich tonal gradients that cannot be synthesized in industrial laboratories.'
      ],
      TH: [
        'ในวงการสินค้าหรูหราทั่วไป ความบริสุทธิ์มักถูกผูกไว้กับการทำเหมืองเปิดขนาดใหญ่ที่ทำลายสิ่งแวดล้อมเพื่อขุดทองหรือเงินใหม่',
        'ที่ ArtCrew Armada เรามองสสารดิบผ่านมุมมองแห่งการเล่นแร่แปรธาตุโบราณ ชิ้นส่วนเครื่องบิน โซ่สมอเรือ หรือเครื่องทองเหลืองที่แตกหัก ล้วนผ่านการกรำศึก เกลือทะเล และรอยสัมผัสของมนุษย์',
        'เมื่อเรานำโลหะเหล่านี้มาหลอมใหม่ในปริมาณจำลองทีละชิ้น สัดส่วนคาร์บอนและทองแดงธรรมชาติจะสร้างเฉดสีและประกายที่ลุ่มลึกอย่างน่าอัศจรรย์'
      ],
      FR: [
        'Dans le luxe traditionnel, la pureté est souvent synonyme d\'extraction intensive destructrice pour les écosystèmes.',
        'Chez ArtCrew Armada, nous considérons la matière brute sous l\'angle de l\'alchimie ancestrale. Chaque pièce porte une histoire.',
        'La refonte artisanale en micro-fournées révèle des nuances chromatiques et une texture qu\'aucun laboratoire ne saurait reproduire.'
      ]
    }
  },
  {
    id: 'j-2',
    title: { 
      EN: 'Reviving the Roman Maille: An Atelier Conversation with Master Smith Viroj', 
      TH: 'ฟื้นฟูศาสตร์ถักโซ่เกราะโรมัน: สนทนาในสตูดิโอกับช่างใหญ่ วิโรจน์', 
      FR: 'Renaissance de la Maille Romaine: Entretien avec le Maître Forgeron Viroj' 
    },
    category: { EN: 'Artisan Dialogues', TH: 'บทสนทนาช่างฝีมือ', FR: 'Dialogues d\'Artisans' },
    date: 'AUG 15, 2024',
    readTime: { EN: '8 min read', TH: 'อ่าน 8 นาที', FR: '8 min de lecture' },
    excerpt: { 
      EN: 'Discover how 12,000 individual closed rings of repurposed copper wire are linked by hand to create tactile luxury accessories.',
      TH: 'เจาะลึกขั้นตอนการเชื่อมต่อห่วงทองแดงรีไซเคิลกว่า 12,000 ชิ้นด้วยมือ เพื่อสร้างสรรค์เครื่องประดับที่ให้สัมผัสนุ่มนวลเหนือกาลเวลา',
      FR: 'Découvrez comment 12 000 anneaux de cuivre recyclé sont assemblés à la main pour créer un accessoire d\'exception.'
    },
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
    content: {
      EN: [
        'Maille weaving is an exercise in rhythmic meditation. Holding pliers in both hands, you open a ring with a subtle twist, lace it into four adjacent rings, and close it with a crisp audible snap.',
        'We calculate the exact tension so that the metal fabric moves like liquid silk across the body while maintaining high tensile armor strength.',
        'Our circular atelier has trained over 120 local apprentices in this rare heritage craft over the past three years.'
      ],
      TH: [
        'การถักโซ่คือการทำสมาธิผ่านจังหวะของมือ การใช้คีมสองข้างบิดเปิดห่วง สอดร้อยเข้ากับ 4 ห่วงข้างเคียง และบิดปิดให้ลงล็อกด้วยเสียงกริ๊กที่แม่นยำ',
        'เราคำนวณแรงตึงอย่างละเอียดเพื่อให้ผืนผ้าโลหะทิ้งตัวพลิ้วไหวราวผ้าไหมชั้นดี แต่ยังคงความแข็งแกร่งดุจชุดเกราะ',
        'สตูดิโอของเราได้บ่มเพาะช่างฝีมือรุ่นใหม่ในชุมชนกว่า 120 คนตลอดระยะเวลา 3 ปีที่ผ่านมา'
      ],
      FR: [
        'Le tissage de mailles est une méditation rythmique. Les pinces ouvrent et ferment chaque anneau avec une précision chirurgicale.',
        'La tension est calculée pour que l\'étoffe métallique ondule comme de la soie sur la peau.',
        'Notre atelier a déjà formé plus de 120 apprentis à ce savoir-faire d\'exception.'
      ]
    }
  }
];

export const AWARENESS_METRICS = {
  upcycledMetalsKg: 1480,
  co2AvoidedTons: 18.6,
  artisansSupported: 34,
  zeroWastePercent: 96.4
};
