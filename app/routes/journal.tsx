import { useParams } from "react-router";
import { getTranslation } from "~/locales/dictionary";
import { PageHero } from "~/components/ui/page-hero";

export default function Journal() {
  const params = useParams();
  const lang = params.lang || "th";
  const t = getTranslation(lang);
  const s = (t.home as any).sections?.journal || {};

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
    <div className="pb-24">
      {/* Page Header */}
      <PageHero
        badge="JOURNAL"
        title={s.title || "Stories Behind the Craft"}
        desc={s.desc || "เรื่องราว กระบวนการ แรงบันดาลใจ และมุมมองจากโลกของ Art & Craft"}
      />

      <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">

      <div className="space-y-12">
        {posts.map((post) => (
          <article key={post.id} className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-b border-[#F5F2EA]/10 last:border-b-0 items-center">
            <div className="md:col-span-1 aspect-[4/3] bg-[#F5F2EA]/5 flex items-center justify-center p-4">
              <span className="font-serif-display text-sm italic text-[#F5F2EA]/30">Post Image</span>
            </div>
            <div className="md:col-span-2 space-y-3">
              <span className="font-sans text-[9px] font-bold tracking-widest text-[#B08A3E] uppercase">
                {post.category}
              </span>
              <h3 className="font-serif-display text-3xl text-[#F5F2EA] hover:text-[#B08A3E] transition-calm">
                <a href="#read">{post.title}</a>
              </h3>
              <p className="font-sans text-xs text-[#AFAFA9] leading-relaxed">
                {post.excerpt}
              </p>
              <div className="pt-2">
                <a href="#read" className="font-sans text-[9px] font-bold tracking-widest uppercase text-[#F5F2EA] border-b border-[#F5F2EA]/30 pb-0.5 hover:text-[#B08A3E] hover:border-[#B08A3E] transition-calm">
                  {t.common.readMore}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
    </div>
  );
}
