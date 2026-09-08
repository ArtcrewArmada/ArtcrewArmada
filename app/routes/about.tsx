import { useParams } from "react-router";
import { getTranslation } from "~/locales/dictionary";
import { Logo } from "~/components/branding/logo";
import { PageHero } from "~/components/ui/page-hero";

export default function About() {
  const params = useParams();
  const lang = params.lang || "th";
  const t = getTranslation(lang);
  
  // fallback if t.about is undefined
  const about = (t as any).about || {};
  const journey = about.journey || {};
  const s = (t.home as any).sections?.about || {};

  return (
    <div className="bg-[#111111] min-h-screen text-[#F5F2EA]">
      {/* 1. Hero & Philosophy */}
      <div className="pb-16">
        <PageHero
          badge={about.philosophyTitle || "About Us"}
          title={s.title || "20+ Years of Craft & Creation"}
          desc={s.desc || "เราผสานงานฝีมือ การออกแบบร่วมสมัย และการทำงานกับชุมชน เพื่อสร้างผลงานที่มีคุณค่าและความหมาย"}
        />
        
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="border-y border-[#F5F2EA]/10 py-12 max-w-4xl mx-auto text-center">
            <p className="font-serif-display font-light text-xl md:text-3xl italic text-[#F5F2EA] leading-relaxed px-4">
              {about.philosophyQuote}
            </p>
          </div>
        </div>
      </div>

      {/* Brand Story (Art, Craft & Conscious Creation) */}
      {about.story && (
        <div className="bg-[#151515] border-b border-[#F5F2EA]/5">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 space-y-20">
            <div className="space-y-8">
              <span className="font-sans text-[10px] font-bold tracking-[0.45em] uppercase text-[#B08A3E] block text-center">
                Our Story
              </span>
              <h2 className="font-serif-display font-light text-3xl md:text-5xl text-[#F5F2EA] text-center">
                {about.story.title}
              </h2>
              <p className="font-sans text-sm text-[#F5F2EA]/80 text-center leading-relaxed">{about.story.intro}</p>
              <div className="w-12 h-[1px] bg-[#B08A3E] mx-auto" />
              <div className="space-y-5 text-[#AFAFA9] font-sans text-xs md:text-sm leading-relaxed md:text-justify text-left">
                <p>{about.story.p1}</p>
                <p>{about.story.p2}</p>
                <p className="italic text-center py-4 text-[#F5F2EA]/70 text-base">{about.story.p3}</p>
                <p>{about.story.p4}</p>
              </div>
            </div>

            <div className="space-y-8 border-t border-[#F5F2EA]/10 pt-16">
              <h3 className="font-serif-display font-light text-2xl md:text-4xl text-[#B08A3E] text-center italic">
                {about.story.subtitle}
              </h3>
              <div className="space-y-5 text-[#AFAFA9] font-sans text-xs md:text-sm leading-relaxed md:text-justify text-left">
                <p>{about.story.p5}</p>
                <p>{about.story.p6}</p>
                <p>{about.story.p7}</p>
              </div>
              <div className="pt-8 border border-[#B08A3E]/20 p-8 bg-[#1A1A1A]">
                <p className="font-serif-display text-lg md:text-2xl text-[#F5F2EA] text-center italic tracking-wide">
                  &ldquo;{about.story.tagline}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Founder Profile & Story */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-b border-[#F5F2EA]/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Profile Emblem Box */}
          <div className="lg:col-span-5 space-y-8">
            <div className="border border-[#F5F2EA]/10 p-12 bg-[#1A1A1A] aspect-[4/5] flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 border-b border-l border-[#F5F2EA]/5 flex items-center justify-center font-serif-display text-[10px] text-[#F5F2EA]/20 tracking-wider">
                EST. 2000
              </div>
              <div className="pt-8">
                <span className="font-sans text-[10px] font-bold tracking-widest text-[#B08A3E] uppercase block mb-2">
                  {about.founderTitle || "Founder"}
                </span>
                <h2 className="font-serif-display text-4xl font-light text-[#F5F2EA]">
                  {about.founderName}
                </h2>
                <p className="font-sans text-[11px] text-[#AFAFA9]/60 tracking-wider mt-1">
                  {about.founderRole}
                </p>
              </div>
              
              <div className="flex justify-center py-6">
                <Logo variant="emblem" theme="dark" className="w-36 h-36 opacity-90 transition-transform duration-500 group-hover:scale-105" />
              </div>

              <div className="border-t border-[#F5F2EA]/5 pt-4 space-y-2 text-[10px] font-sans text-[#AFAFA9]">
                <p className="flex justify-between">
                  <span className="font-bold uppercase tracking-wider">{about.experience}:</span>
                  <span>{about.experienceVal}</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-bold uppercase tracking-wider">{about.location}:</span>
                  <span>{about.locationVal}</span>
                </p>
              </div>
            </div>
            
            {/* Quick Contact Box */}
            <div className="border border-[#F5F2EA]/5 p-6 bg-[#1A1A1A]/50 text-[10px] font-sans text-[#AFAFA9] space-y-2">
              <span className="font-bold uppercase tracking-widest text-[#B08A3E] block mb-1">Contact Details</span>
              <p>วิภาวดี โลเปซ (Wipawadee Lopez)</p>
              <p>Email: armada.th2025@gmail.com</p>
              <p>Tel: +66 84 878 6297</p>
              <p>Facebook: ArtcrewArmada</p>
              <p>Instagram: armada.th</p>
            </div>
          </div>

          {/* Column 2: Founder Narrative & Expertise */}
          <div className="lg:col-span-7 space-y-12 lg:pl-6">
            <div className="space-y-6">
              <h3 className="font-serif-display text-2xl md:text-3xl font-light italic text-[#F5F2EA]">
                "From Handcraft to Sustainable Value Creation"
              </h3>
              <p className="font-sans text-xs text-[#AFAFA9] leading-relaxed text-justify">
                {about.founderStory}
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-[#F5F2EA]/10">
              <h4 className="font-sans text-[11px] font-bold tracking-widest uppercase text-[#B08A3E]">
                {about.expertise}
              </h4>
              <p className="font-serif text-sm text-[#AFAFA9] leading-relaxed italic">
                {about.expertiseVal}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* 3. My Journey (Timeline) */}
      <div className="max-w-7xl mx-auto px-6 py-20 border-b border-[#F5F2EA]/5 bg-[#1A1A1A]/40">
        <div className="space-y-4 mb-16 text-center lg:text-left max-w-3xl">
          <span className="font-sans text-[10px] font-bold tracking-[0.45em] uppercase text-[#B08A3E] block">
            Timeline
          </span>
          <h2 className="font-serif-display font-light text-4xl text-[#F5F2EA]">
            {about.journeyTitle}
          </h2>
          <p className="font-serif text-xs text-[#AFAFA9] italic">
            {about.journeySubtitle}
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Timeline connecting line */}
          <div className="hidden md:block absolute top-[40px] left-4 right-4 h-[1px] bg-[#1A1A1A] z-0"></div>

          {/* 2543 */}
          <div className="space-y-4 relative z-10">
            <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-0">
              <div className="font-serif-display text-4xl md:text-5xl text-[#B08A3E] font-light leading-none">2543</div>
              <div className="md:mt-4 w-2 h-2 rounded-full bg-[#B08A3E] border border-white"></div>
            </div>
            <div className="pt-2 md:pt-4 space-y-2">
              <h4 className="font-sans text-xs font-bold text-[#F5F2EA] tracking-wider uppercase">
                {journey.y2543?.title}
              </h4>
              <p className="font-sans text-[11px] text-[#AFAFA9] leading-relaxed">
                {journey.y2543?.desc}
              </p>
            </div>
          </div>

          {/* 2547 */}
          <div className="space-y-4 relative z-10">
            <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-0">
              <div className="font-serif-display text-4xl md:text-5xl text-[#B08A3E] font-light leading-none">2547</div>
              <div className="md:mt-4 w-2 h-2 rounded-full bg-[#B08A3E] border border-white"></div>
            </div>
            <div className="pt-2 md:pt-4 space-y-2">
              <h4 className="font-sans text-xs font-bold text-[#F5F2EA] tracking-wider uppercase">
                {journey.y2547?.title}
              </h4>
              <p className="font-sans text-[11px] text-[#AFAFA9] leading-relaxed">
                {journey.y2547?.desc}
              </p>
            </div>
          </div>

          {/* 2550 */}
          <div className="space-y-4 relative z-10">
            <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-0">
              <div className="font-serif-display text-4xl md:text-5xl text-[#B08A3E] font-light leading-none">2550</div>
              <div className="md:mt-4 w-2 h-2 rounded-full bg-[#B08A3E] border border-white"></div>
            </div>
            <div className="pt-2 md:pt-4 space-y-2">
              <h4 className="font-sans text-xs font-bold text-[#F5F2EA] tracking-wider uppercase">
                {journey.y2550?.title}
              </h4>
              <p className="font-sans text-[11px] text-[#AFAFA9] leading-relaxed">
                {journey.y2550?.desc}
              </p>
            </div>
          </div>

          {/* Present */}
          <div className="space-y-4 relative z-10">
            <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-0">
              <div className="font-serif-display text-4xl md:text-5xl text-[#B08A3E] font-light leading-none">
                {lang === "th" ? "ปัจจุบัน" : lang === "fr" ? "Présent" : "Present"}
              </div>
              <div className="md:mt-4 w-2 h-2 rounded-full bg-[#B08A3E] border border-white"></div>
            </div>
            <div className="pt-2 md:pt-4 space-y-2">
              <h4 className="font-sans text-xs font-bold text-[#F5F2EA] tracking-wider uppercase">
                {journey.yPresent?.title}
              </h4>
              <p className="font-sans text-[11px] text-[#AFAFA9] leading-relaxed">
                {journey.yPresent?.desc}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* 4. Craft Expertise & Techniques */}
      <div className="max-w-7xl mx-auto px-6 py-20 border-b border-[#F5F2EA]/5">
        <div className="space-y-4 mb-16 text-center max-w-3xl mx-auto">
          <span className="font-sans text-[10px] font-bold tracking-[0.45em] uppercase text-[#B08A3E] block">
            Expertise & Techniques
          </span>
          <h2 className="font-serif-display font-light text-4xl text-[#F5F2EA]">
            {about.techniquesTitle}
          </h2>
          <p className="font-serif text-xs text-[#AFAFA9] italic">
            {about.techniquesSubtitle}
          </p>
        </div>

        {/* Techniques Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Tech 1 */}
          <div className="border border-[#F5F2EA]/10 p-8 bg-[#1A1A1A] hover:border-[#B08A3E] transition-colors duration-300 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="font-sans text-[9px] font-bold text-[#B08A3E] uppercase tracking-widest block">01 / METALWORK</span>
              <h3 className="font-serif-display text-lg font-light text-[#F5F2EA] leading-snug">
                {about.techMetalTitle}
              </h3>
              <p className="font-sans text-[11px] text-[#AFAFA9] leading-relaxed text-justify">
                {about.techMetalDesc}
              </p>
            </div>
          </div>

          {/* Tech 2 */}
          <div className="border border-[#F5F2EA]/10 p-8 bg-[#1A1A1A] hover:border-[#B08A3E] transition-colors duration-300 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="font-sans text-[9px] font-bold text-[#B08A3E] uppercase tracking-widest block">02 / BEAD WEAVING</span>
              <h3 className="font-serif-display text-lg font-light text-[#F5F2EA] leading-snug">
                {about.techBeadTitle}
              </h3>
              <p className="font-sans text-[11px] text-[#AFAFA9] leading-relaxed text-justify">
                {about.techBeadDesc}
              </p>
            </div>
          </div>

          {/* Tech 3 */}
          <div className="border border-[#F5F2EA]/10 p-8 bg-[#1A1A1A] hover:border-[#B08A3E] transition-colors duration-300 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="font-sans text-[9px] font-bold text-[#B08A3E] uppercase tracking-widest block">03 / WIREWORK</span>
              <h3 className="font-serif-display text-lg font-light text-[#F5F2EA] leading-snug">
                {about.techWireTitle}
              </h3>
              <p className="font-sans text-[11px] text-[#AFAFA9] leading-relaxed text-justify">
                {about.techWireDesc}
              </p>
            </div>
          </div>

          {/* Tech 4 */}
          <div className="border border-[#F5F2EA]/10 p-8 bg-[#1A1A1A] hover:border-[#B08A3E] transition-colors duration-300 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="font-sans text-[9px] font-bold text-[#B08A3E] uppercase tracking-widest block">04 / FIBER ART</span>
              <h3 className="font-serif-display text-lg font-light text-[#F5F2EA] leading-snug">
                {about.techThreadTitle}
              </h3>
              <p className="font-sans text-[11px] text-[#AFAFA9] leading-relaxed text-justify">
                {about.techThreadDesc}
              </p>
            </div>
          </div>

          {/* Tech 5 */}
          <div className="border border-[#F5F2EA]/10 p-8 bg-[#1A1A1A] hover:border-[#B08A3E] transition-colors duration-300 flex flex-col justify-between md:col-span-2 lg:col-span-1">
            <div className="space-y-3">
              <span className="font-sans text-[9px] font-bold text-[#B08A3E] uppercase tracking-widest block">05 / KNOTTING</span>
              <h3 className="font-serif-display text-lg font-light text-[#F5F2EA] leading-snug">
                {about.techMacrameTitle}
              </h3>
              <p className="font-sans text-[11px] text-[#AFAFA9] leading-relaxed text-justify">
                {about.techMacrameDesc}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* 5. Awards & Recognition */}
      <div className="max-w-7xl mx-auto px-6 py-20 border-b border-[#F5F2EA]/5 bg-[#1A1A1A]/20">
        <div className="space-y-4 mb-16 text-center max-w-3xl mx-auto">
          <span className="font-sans text-[10px] font-bold tracking-[0.45em] uppercase text-[#B08A3E] block">
            Recognition
          </span>
          <h2 className="font-serif-display font-light text-4xl text-[#F5F2EA]">
            {about.awardsTitle}
          </h2>
          <p className="font-serif text-xs text-[#AFAFA9] italic">
            {about.awardsSubtitle}
          </p>
        </div>

        {/* Awards list with clean minimal layout */}
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Award 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-10 border-b border-[#F5F2EA]/10">
            <div className="md:col-span-3">
              <span className="font-serif-display text-lg text-[#B08A3E] block">2025</span>
              <span className="font-sans text-[10px] font-bold text-[#AFAFA9]/50 tracking-wider uppercase block">SACIT</span>
            </div>
            <div className="md:col-span-9 space-y-2">
              <h3 className="font-serif-display text-xl font-light text-[#F5F2EA]">{about.awardSacitTitle}</h3>
              <p className="font-sans text-xs text-[#AFAFA9] leading-relaxed">{about.awardSacitDesc}</p>
            </div>
          </div>

          {/* Award 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-10 border-b border-[#F5F2EA]/10">
            <div className="md:col-span-3">
              <span className="font-serif-display text-lg text-[#B08A3E] block">2024</span>
              <span className="font-sans text-[10px] font-bold text-[#AFAFA9]/50 tracking-wider uppercase block">DIPROM</span>
            </div>
            <div className="md:col-span-9 space-y-2">
              <h3 className="font-serif-display text-xl font-light text-[#F5F2EA]">{about.awardDipromTitle}</h3>
              <p className="font-sans text-xs text-[#AFAFA9] leading-relaxed">{about.awardDipromDesc}</p>
            </div>
          </div>

          {/* Award 3 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-3">
              <span className="font-serif-display text-lg text-[#B08A3E] block">Present</span>
              <span className="font-sans text-[10px] font-bold text-[#AFAFA9]/50 tracking-wider uppercase block">World Stage</span>
            </div>
            <div className="md:col-span-9 space-y-2">
              <h3 className="font-serif-display text-xl font-light text-[#F5F2EA]">{about.awardWccTitle}</h3>
              <p className="font-sans text-xs text-[#AFAFA9] leading-relaxed">{about.awardWccDesc}</p>
            </div>
          </div>

        </div>
      </div>

      {/* 6. Community Impact */}
      <div className="max-w-7xl mx-auto px-6 py-20 border-b border-[#F5F2EA]/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="font-sans text-[10px] font-bold tracking-[0.45em] uppercase text-[#B08A3E] block">
              Social Impact
            </span>
            <h2 className="font-serif-display font-light text-4xl text-[#F5F2EA]">
              {about.communityTitle}
            </h2>
            <p className="font-sans text-xs text-[#AFAFA9] leading-relaxed text-justify">
              {about.communityDesc}
            </p>
          </div>
          
          <div className="lg:col-span-6 bg-[#1A1A1A] border border-[#F5F2EA]/10 p-8 flex flex-col justify-center items-center aspect-[16/9] relative overflow-hidden">
            <div className="text-center space-y-2 relative z-10">
              <span className="font-sans text-[9px] font-bold text-[#B08A3E] uppercase tracking-[0.3em] block">ARTcrew ARMADA</span>
              <h3 className="font-serif-display text-2xl font-light text-[#F5F2EA] italic">"Craft. Community. Sustainability."</h3>
              <div className="w-12 h-[1px] bg-[#B08A3E] mx-auto mt-4"></div>
            </div>
            <div className="absolute inset-0 bg-[#B08A3E]/5 pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* 7. Vision: Craft & Art Awareness Center */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="space-y-4 mb-10 text-center">
          <span className="font-sans text-[10px] font-bold tracking-[0.45em] uppercase text-[#B08A3E] block">
            Vision
          </span>
          <h2 className="font-serif-display font-light text-3xl md:text-4xl text-[#F5F2EA]">
            {about.visionTitle}
          </h2>
          <p className="font-serif text-sm text-[#AFAFA9] leading-relaxed max-w-2xl mx-auto italic">
            {about.visionDesc}
          </p>
        </div>

        <div className="relative overflow-hidden border border-[#B08A3E]/30 group">
          <img
            src="https://pub-fbe4c0b88b1c4967a575e56eb5f39ecf.r2.dev/craft-awareness-center.jpg"
            alt="Craft & Art Awareness Center — ArtcrewArmada Vision"
            className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="font-sans text-[9px] font-bold text-[#B08A3E] uppercase tracking-widest block mb-1">
              ArtcrewArmada — Creation & Craft House
            </span>
            <p className="font-serif-display text-lg md:text-2xl text-[#F5F2EA] italic">
              "Craft. Community. Sustainability."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
