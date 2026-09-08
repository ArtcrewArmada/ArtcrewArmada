import { useParams, Link } from "react-router";
import { getTranslation } from "~/locales/dictionary";
import { PageHero } from "~/components/ui/page-hero";

export default function Home() {
  const params = useParams();
  const lang = params.lang || "th";
  const t = getTranslation(lang);
  const s = (t.home as any).sections?.home || {};

  return (
    <div className="pb-24">
      {/* 1. Hero Section */}
      <PageHero
        badge="ARTcrew ARMADA"
        title={s.title || t.home.manifestoTitle}
        desc={s.desc || t.home.manifestoDesc1}
        tagline={(t.home as any).manifestoSubtitle}
      />

      {/* 2. Manifesto Details Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-b border-[#F5F2EA]/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h3 className="font-serif-display text-3xl italic text-[#F5F2EA]">
              ARMADA Upcycling
            </h3>
            <p className="font-sans text-sm md:text-base text-[#AFAFA9] leading-relaxed">
              {t.home.manifestoDesc3}
            </p>
            <p className="font-sans text-sm md:text-base text-[#AFAFA9] leading-relaxed font-bold">
              {t.home.manifestoDesc4}
            </p>
            <p className="font-sans text-sm md:text-base text-[#AFAFA9] leading-relaxed">
              {t.home.manifestoDesc5}
            </p>
          </div>
          <div className="space-y-6 md:border-l md:border-[#F5F2EA]/10 md:pl-16">
            <h3 className="font-serif-display text-3xl italic text-[#F5F2EA]">
              {t.home.manifestoSubtitle}
            </h3>
            <p className="font-sans text-sm md:text-base text-[#AFAFA9] leading-relaxed whitespace-pre-line">
              {t.home.manifestoDesc6}
            </p>
            <p className="font-sans text-sm md:text-base text-[#AFAFA9] leading-relaxed">
              {t.home.manifestoDesc7}
            </p>
            <p className="font-sans text-sm md:text-base text-[#AFAFA9] leading-relaxed italic border-l-2 border-[#B08A3E] pl-4 mt-6">
              {t.home.manifestoDesc8}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Localized Welcome / Awareness Preview */}
      <section className="bg-[#111111] text-[#F5F2EA] py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#F5F2EA_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <span className="font-sans text-[10px] font-bold tracking-[0.4em] uppercase text-[#B08A3E]">
            The Vision
          </span>
          <h2 className="font-serif-display font-light text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
            "{t.home.manifestoTagline}"
          </h2>
          <div className="pt-8">
            <Link
              to={`/${lang}/about`}
              className="inline-block border-b border-[#B08A3E] pb-1 font-sans text-xs font-bold tracking-widest text-[#B08A3E] uppercase hover:text-[#F5F2EA] hover:border-[#F5F2EA]/30 transition-calm"
            >
              {t.common.learnMore}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
