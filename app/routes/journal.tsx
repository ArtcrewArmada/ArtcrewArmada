import { useParams } from "react-router";
import { getTranslation } from "~/locales/dictionary";

export default function Journal() {
  const params = useParams();
  const lang = params.lang || "th";
  const t = getTranslation(lang);

  const posts = [
    {
      id: 1,
      title: "The Hands Behind the Bamboo Weaving",
      category: "People Story",
      excerpt: "เจาะลึกเรื่องราวของป้าศรี ช่างจักสานผู้สืบทอดภูมิปัญญาการสานลายไม้ไผ่โบราณสู่ผลงานของดีไซเนอร์รุ่นใหม่",
    },
    {
      id: 2,
      title: "From Factory Waste to Eco-Luxury Leather",
      category: "Sustainability",
      excerpt: "กระบวนการสร้างมูลค่าใหม่ให้เศษหนังวัวทิ้งจากโรงงาน ผ่านการซ่อมแซมและตกแต่งให้ทนทานเทียบชั้นวัสดุราคาแพง",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">
      <div className="space-y-4 text-center">
        <span className="font-sans text-[10px] font-bold tracking-[0.45em] uppercase text-armada-sand">
          Journal & Stories
        </span>
        <h1 className="font-headline font-light text-5xl text-armada-navy">
          {t.nav.journal}
        </h1>
        <p className="font-serif text-sm text-armada-navy/60 max-w-xl mx-auto">
          เบื้องลึกกระบวนการคิด เบื้องหลังช่างฝีมือ วิถีชีวิตชุมชน และแนวคิดเรื่องความยั่งยืน
        </p>
      </div>

      <div className="space-y-12">
        {posts.map((post) => (
          <article key={post.id} className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-b border-armada-navy/10 last:border-b-0 items-center">
            <div className="md:col-span-1 aspect-[4/3] bg-armada-navy/5 flex items-center justify-center p-4">
              <span className="font-headline text-sm italic text-armada-navy/30">Post Image</span>
            </div>
            <div className="md:col-span-2 space-y-3">
              <span className="font-sans text-[9px] font-bold tracking-widest text-armada-sand uppercase">
                {post.category}
              </span>
              <h3 className="font-headline text-3xl text-armada-navy hover:text-armada-sand transition-calm">
                <a href="#read">{post.title}</a>
              </h3>
              <p className="font-sans text-xs text-armada-navy/70 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="pt-2">
                <a href="#read" className="font-sans text-[9px] font-bold tracking-widest uppercase text-armada-navy border-b border-armada-navy pb-0.5 hover:text-armada-sand hover:border-armada-sand transition-calm">
                  {t.common.readMore}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
