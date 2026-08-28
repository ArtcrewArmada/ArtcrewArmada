import { useParams, Link } from "react-router";
import { getTranslation } from "~/locales/dictionary";
import { getLanguageFromPath } from "~/locales/helpers";
import { Button } from "~/components/ui/button";

export default function Home() {
  const params = useParams();
  const lang = params.lang || "th";
  const t = getTranslation(lang);

  return (
    <div className="pb-24">
      {/* 1. Hero Section - Elegant Editorial Style */}
      <section className="relative min-h-[85vh] flex items-center bg-armada-ivory px-6 md:px-12 border-b border-armada-navy/5">
        {/* Subtle geometric pattern in background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1E2A44_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16">
          <div className="lg:col-span-7 space-y-8 z-10">
            <span className="font-sans text-[10px] font-bold tracking-[0.4em] uppercase text-armada-sand">
              Creation & Craft House
            </span>
            <h1 className="font-headline font-light text-5xl md:text-6xl lg:text-7xl text-armada-navy leading-[1.1] tracking-tight">
              {t.home.heroTitle}
            </h1>
            <p className="font-serif text-base md:text-lg text-armada-navy/70 leading-relaxed max-w-xl">
              {t.home.heroSubtitle}
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link to={`/${lang}/craft`} className="inline-block">
                <Button variant="navy" type="button">
                  {t.home.exploreBtn}
                </Button>
              </Link>
              <Link to={`/${lang}/shop`} className="inline-block">
                <Button variant="secondary" type="button">
                  {t.home.shopBtn}
                </Button>
              </Link>
            </div>
          </div>

          {/* Featured Hero Media representation */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="w-full aspect-[4/5] max-w-[380px] bg-gradient-to-tr from-armada-navy/5 to-armada-sand/20 border border-armada-navy/10 p-6 flex flex-col justify-between transition-calm hover:-translate-y-1 hover:shadow-lg">
              <div className="flex justify-between items-start">
                <span className="font-sans text-[9px] font-bold tracking-widest text-armada-navy/60 uppercase">
                  Featured Object
                </span>
                <span className="font-headline text-lg italic text-armada-sand">01</span>
              </div>
              <div className="my-8">
                {/* Visual placeholder representing craft object */}
                <div className="w-full aspect-square border border-dashed border-armada-navy/10 flex items-center justify-center p-4">
                  <span className="font-headline text-2xl font-light italic text-armada-navy/30">
                    Artisanal Craft
                  </span>
                </div>
              </div>
              <div className="space-y-1 text-left">
                <h4 className="font-headline text-xl text-armada-navy">ARMADA Vessel</h4>
                <p className="font-sans text-[9px] tracking-wider text-armada-navy/50 uppercase">
                  Upcycled Materials × Traditional Weaving
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Brand Pillars Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-b border-armada-navy/5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <span className="font-headline text-3xl italic text-armada-sand">01.</span>
            <h3 className="font-sans text-xs font-bold tracking-widest uppercase text-armada-navy">
              Craft & Development
            </h3>
            <p className="font-sans text-xs text-armada-navy/60 leading-relaxed">
              สืบสานทักษะช่างฝีมือด้วยดีไซน์ร่วมสมัย ใส่ใจในความประณีตและการคัดสรรวัสดุอย่างมีที่มา
            </p>
          </div>
          <div className="space-y-4">
            <span className="font-headline text-3xl italic text-armada-sand">02.</span>
            <h3 className="font-sans text-xs font-bold tracking-widest uppercase text-armada-navy">
              Community & Collaboration
            </h3>
            <p className="font-sans text-xs text-armada-navy/60 leading-relaxed">
              สร้างพื้นที่เชื่อมโยงคนรุ่นใหม่และช่างฝีมือพื้นถิ่นเพื่อแลกเปลี่ยนความรู้และเติบโตร่วมกัน
            </p>
          </div>
          <div className="space-y-4">
            <span className="font-headline text-3xl italic text-armada-sand">03.</span>
            <h3 className="font-sans text-xs font-bold tracking-widest uppercase text-armada-navy">
              Circular Sustainability
            </h3>
            <p className="font-sans text-xs text-armada-navy/60 leading-relaxed">
              หมุนเวียนวัสดุเหลือใช้อย่างมีความหมาย เปลี่ยนของไร้ค่าให้เป็นงานออกแบบระดับ Eco-Luxury
            </p>
          </div>
          <div className="space-y-4">
            <span className="font-headline text-3xl italic text-armada-sand">04.</span>
            <h3 className="font-sans text-xs font-bold tracking-widest uppercase text-armada-navy">
              Creation & Philosophy
            </h3>
            <p className="font-sans text-xs text-armada-navy/60 leading-relaxed">
              มองหาความเป็นไปได้ใหม่ ๆ ในการสร้างสรรค์ศิลปะและวิถีชีวิตที่เป็นมิตรต่อสิ่งแวดล้อม
            </p>
          </div>
        </div>
      </section>

      {/* 3. Localized Welcome / Awareness Preview */}
      <section className="bg-armada-navy text-armada-ivory py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="font-sans text-[10px] font-bold tracking-[0.4em] uppercase text-armada-sand">
            Craft & Art Awareness Center
          </span>
          <h2 className="font-headline font-light text-4xl md:text-5xl tracking-tight leading-tight">
            "ตระหนักรู้คุณค่าศิลปะ ร่วมสร้างสรรค์อนาคตที่ยั่งยืน"
          </h2>
          <p className="font-serif text-sm md:text-base text-armada-ivory/70 leading-relaxed max-w-2xl mx-auto">
            เรามุ่งมั่นที่จะพัฒนาพื้นที่นี้สู่ศูนย์กลางการเรียนรู้และขับเคลื่อนความตระหนักรู้ด้านงานฝีมือ ศิลปวัฒนธรรม และการรักษาสิ่งแวดล้อมในมิติทางสังคมและการออกแบบเชิงนวัตกรรม
          </p>
          <div className="pt-4">
            <Link
              to={`/${lang}/about`}
              className="inline-block border-b border-armada-sand pb-1 font-sans text-xs font-bold tracking-widest text-armada-sand uppercase hover:text-armada-ivory hover:border-armada-ivory transition-calm"
            >
              {t.common.learnMore}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
