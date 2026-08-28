import { useParams } from "react-router";
import { getTranslation } from "~/locales/dictionary";
import { Logo } from "~/components/branding/logo";

export default function About() {
  const params = useParams();
  const lang = params.lang || "th";
  const t = getTranslation(lang);
  
  // fallback if t.about is undefined
  const about = (t as any).about || {};
  const journey = about.journey || {};

  return (
    <div className="bg-[#F7F4EF] min-h-screen text-armada-navy">
      {/* 1. Hero & Philosophy */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 space-y-12">
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <span className="font-sans text-[10px] font-bold tracking-[0.45em] uppercase text-armada-sand block">
            {about.philosophyTitle || "About Us"}
          </span>
          <h1 className="font-headline font-light text-4xl md:text-6xl text-armada-navy leading-tight">
            ARTcrew ARMADA
          </h1>
          <p className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-armada-navy/40">
            Creation & Craft House
          </p>
        </div>

        <div className="border-y border-armada-navy/10 py-12 max-w-4xl mx-auto text-center">
          <p className="font-headline font-light text-xl md:text-3xl italic text-armada-navy leading-relaxed px-4">
            {about.philosophyQuote}
          </p>
        </div>
      </div>

      {/* 2. Founder Profile & Story */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-b border-armada-navy/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Profile Emblem Box */}
          <div className="lg:col-span-5 space-y-8">
            <div className="border border-armada-navy/10 p-12 bg-white aspect-[4/5] flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 border-b border-l border-armada-navy/5 flex items-center justify-center font-headline text-[10px] text-armada-navy/20 tracking-wider">
                EST. 2000
              </div>
              <div className="pt-8">
                <span className="font-sans text-[10px] font-bold tracking-widest text-armada-sand uppercase block mb-2">
                  {about.founderTitle || "Founder"}
                </span>
                <h2 className="font-headline text-4xl font-light text-armada-navy">
                  {about.founderName}
                </h2>
                <p className="font-sans text-[11px] text-armada-navy/50 tracking-wider mt-1">
                  {about.founderRole}
                </p>
              </div>
              
              <div className="flex justify-center py-6">
                <Logo variant="emblem" theme="dark" className="w-36 h-36 opacity-90 transition-transform duration-500 group-hover:scale-105" />
              </div>

              <div className="border-t border-armada-navy/5 pt-4 space-y-2 text-[10px] font-sans text-armada-navy/60">
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
            <div className="border border-armada-navy/5 p-6 bg-white/50 text-[10px] font-sans text-armada-navy/70 space-y-2">
              <span className="font-bold uppercase tracking-widest text-armada-sand block mb-1">Contact Details</span>
              <p>Email: armada.th2025@gmail.com</p>
              <p>Tel: +66 84 878 6297</p>
              <p>Facebook: ArtcrewArmada</p>
              <p>Instagram: armada.th</p>
            </div>
          </div>

          {/* Column 2: Founder Narrative & Expertise */}
          <div className="lg:col-span-7 space-y-12 lg:pl-6">
            <div className="space-y-6">
              <h3 className="font-headline text-2xl md:text-3xl font-light italic text-armada-navy">
                "From Handcraft to Sustainable Value Creation"
              </h3>
              <p className="font-sans text-xs text-armada-navy/80 leading-relaxed text-justify">
                {about.founderStory}
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-armada-navy/10">
              <h4 className="font-sans text-[11px] font-bold tracking-widest uppercase text-armada-sand">
                {about.expertise}
              </h4>
              <p className="font-serif text-sm text-armada-navy/80 leading-relaxed italic">
                {about.expertiseVal}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* 3. My Journey (Timeline) */}
      <div className="max-w-7xl mx-auto px-6 py-20 border-b border-armada-navy/5 bg-white/40">
        <div className="space-y-4 mb-16 text-center lg:text-left max-w-3xl">
          <span className="font-sans text-[10px] font-bold tracking-[0.45em] uppercase text-armada-sand block">
            Timeline
          </span>
          <h2 className="font-headline font-light text-4xl text-armada-navy">
            {about.journeyTitle}
          </h2>
          <p className="font-serif text-xs text-armada-navy/60 italic">
            {about.journeySubtitle}
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Timeline connecting line */}
          <div className="hidden md:block absolute top-[40px] left-4 right-4 h-[1px] bg-armada-navy/10 z-0"></div>

          {/* 2543 */}
          <div className="space-y-4 relative z-10">
            <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-0">
              <div className="font-headline text-4xl md:text-5xl text-armada-sand font-light leading-none">2543</div>
              <div className="md:mt-4 w-2 h-2 rounded-full bg-armada-sand border border-white"></div>
            </div>
            <div className="pt-2 md:pt-4 space-y-2">
              <h4 className="font-sans text-xs font-bold text-armada-navy tracking-wider uppercase">
                {journey.y2543?.title}
              </h4>
              <p className="font-sans text-[11px] text-armada-navy/70 leading-relaxed">
                {journey.y2543?.desc}
              </p>
            </div>
          </div>

          {/* 2547 */}
          <div className="space-y-4 relative z-10">
            <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-0">
              <div className="font-headline text-4xl md:text-5xl text-armada-sand font-light leading-none">2547</div>
              <div className="md:mt-4 w-2 h-2 rounded-full bg-armada-sand border border-white"></div>
            </div>
            <div className="pt-2 md:pt-4 space-y-2">
              <h4 className="font-sans text-xs font-bold text-armada-navy tracking-wider uppercase">
                {journey.y2547?.title}
              </h4>
              <p className="font-sans text-[11px] text-armada-navy/70 leading-relaxed">
                {journey.y2547?.desc}
              </p>
            </div>
          </div>

          {/* 2550 */}
          <div className="space-y-4 relative z-10">
            <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-0">
              <div className="font-headline text-4xl md:text-5xl text-armada-sand font-light leading-none">2550</div>
              <div className="md:mt-4 w-2 h-2 rounded-full bg-armada-sand border border-white"></div>
            </div>
            <div className="pt-2 md:pt-4 space-y-2">
              <h4 className="font-sans text-xs font-bold text-armada-navy tracking-wider uppercase">
                {journey.y2550?.title}
              </h4>
              <p className="font-sans text-[11px] text-armada-navy/70 leading-relaxed">
                {journey.y2550?.desc}
              </p>
            </div>
          </div>

          {/* Present */}
          <div className="space-y-4 relative z-10">
            <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-0">
              <div className="font-headline text-4xl md:text-5xl text-armada-sand font-light leading-none">
                {lang === "th" ? "ปัจจุบัน" : lang === "fr" ? "Présent" : "Present"}
              </div>
              <div className="md:mt-4 w-2 h-2 rounded-full bg-armada-sand border border-white"></div>
            </div>
            <div className="pt-2 md:pt-4 space-y-2">
              <h4 className="font-sans text-xs font-bold text-armada-navy tracking-wider uppercase">
                {journey.yPresent?.title}
              </h4>
              <p className="font-sans text-[11px] text-armada-navy/70 leading-relaxed">
                {journey.yPresent?.desc}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* 4. Craft Expertise & Techniques */}
      <div className="max-w-7xl mx-auto px-6 py-20 border-b border-armada-navy/5">
        <div className="space-y-4 mb-16 text-center max-w-3xl mx-auto">
          <span className="font-sans text-[10px] font-bold tracking-[0.45em] uppercase text-armada-sand block">
            Expertise & Techniques
          </span>
          <h2 className="font-headline font-light text-4xl text-armada-navy">
            {about.techniquesTitle}
          </h2>
          <p className="font-serif text-xs text-armada-navy/60 italic">
            {about.techniquesSubtitle}
          </p>
        </div>

        {/* Techniques Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Tech 1 */}
          <div className="border border-armada-navy/10 p-8 bg-white hover:border-armada-sand transition-colors duration-300 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="font-sans text-[9px] font-bold text-armada-sand uppercase tracking-widest block">01 / METALWORK</span>
              <h3 className="font-headline text-lg font-light text-armada-navy leading-snug">
                {about.techMetalTitle}
              </h3>
              <p className="font-sans text-[11px] text-armada-navy/70 leading-relaxed text-justify">
                {about.techMetalDesc}
              </p>
            </div>
          </div>

          {/* Tech 2 */}
          <div className="border border-armada-navy/10 p-8 bg-white hover:border-armada-sand transition-colors duration-300 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="font-sans text-[9px] font-bold text-armada-sand uppercase tracking-widest block">02 / BEAD WEAVING</span>
              <h3 className="font-headline text-lg font-light text-armada-navy leading-snug">
                {about.techBeadTitle}
              </h3>
              <p className="font-sans text-[11px] text-armada-navy/70 leading-relaxed text-justify">
                {about.techBeadDesc}
              </p>
            </div>
          </div>

          {/* Tech 3 */}
          <div className="border border-armada-navy/10 p-8 bg-white hover:border-armada-sand transition-colors duration-300 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="font-sans text-[9px] font-bold text-armada-sand uppercase tracking-widest block">03 / WIREWORK</span>
              <h3 className="font-headline text-lg font-light text-armada-navy leading-snug">
                {about.techWireTitle}
              </h3>
              <p className="font-sans text-[11px] text-armada-navy/70 leading-relaxed text-justify">
                {about.techWireDesc}
              </p>
            </div>
          </div>

          {/* Tech 4 */}
          <div className="border border-armada-navy/10 p-8 bg-white hover:border-armada-sand transition-colors duration-300 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="font-sans text-[9px] font-bold text-armada-sand uppercase tracking-widest block">04 / FIBER ART</span>
              <h3 className="font-headline text-lg font-light text-armada-navy leading-snug">
                {about.techThreadTitle}
              </h3>
              <p className="font-sans text-[11px] text-armada-navy/70 leading-relaxed text-justify">
                {about.techThreadDesc}
              </p>
            </div>
          </div>

          {/* Tech 5 */}
          <div className="border border-armada-navy/10 p-8 bg-white hover:border-armada-sand transition-colors duration-300 flex flex-col justify-between md:col-span-2 lg:col-span-1">
            <div className="space-y-3">
              <span className="font-sans text-[9px] font-bold text-armada-sand uppercase tracking-widest block">05 / KNOTTING</span>
              <h3 className="font-headline text-lg font-light text-armada-navy leading-snug">
                {about.techMacrameTitle}
              </h3>
              <p className="font-sans text-[11px] text-armada-navy/70 leading-relaxed text-justify">
                {about.techMacrameDesc}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* 5. Awards & Recognition */}
      <div className="max-w-7xl mx-auto px-6 py-20 border-b border-armada-navy/5 bg-white/20">
        <div className="space-y-4 mb-16 text-center max-w-3xl mx-auto">
          <span className="font-sans text-[10px] font-bold tracking-[0.45em] uppercase text-armada-sand block">
            Recognition
          </span>
          <h2 className="font-headline font-light text-4xl text-armada-navy">
            {about.awardsTitle}
          </h2>
          <p className="font-serif text-xs text-armada-navy/60 italic">
            {about.awardsSubtitle}
          </p>
        </div>

        {/* Awards list with clean minimal layout */}
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Award 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-10 border-b border-armada-navy/10">
            <div className="md:col-span-3">
              <span className="font-headline text-lg text-armada-sand block">2025</span>
              <span className="font-sans text-[10px] font-bold text-armada-navy/40 tracking-wider uppercase block">SACIT</span>
            </div>
            <div className="md:col-span-9 space-y-2">
              <h3 className="font-headline text-xl font-light text-armada-navy">{about.awardSacitTitle}</h3>
              <p className="font-sans text-xs text-armada-navy/70 leading-relaxed">{about.awardSacitDesc}</p>
            </div>
          </div>

          {/* Award 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-10 border-b border-armada-navy/10">
            <div className="md:col-span-3">
              <span className="font-headline text-lg text-armada-sand block">2024</span>
              <span className="font-sans text-[10px] font-bold text-armada-navy/40 tracking-wider uppercase block">DIPROM</span>
            </div>
            <div className="md:col-span-9 space-y-2">
              <h3 className="font-headline text-xl font-light text-armada-navy">{about.awardDipromTitle}</h3>
              <p className="font-sans text-xs text-armada-navy/70 leading-relaxed">{about.awardDipromDesc}</p>
            </div>
          </div>

          {/* Award 3 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-3">
              <span className="font-headline text-lg text-armada-sand block">Present</span>
              <span className="font-sans text-[10px] font-bold text-armada-navy/40 tracking-wider uppercase block">World Stage</span>
            </div>
            <div className="md:col-span-9 space-y-2">
              <h3 className="font-headline text-xl font-light text-armada-navy">{about.awardWccTitle}</h3>
              <p className="font-sans text-xs text-armada-navy/70 leading-relaxed">{about.awardWccDesc}</p>
            </div>
          </div>

        </div>
      </div>

      {/* 6. Community Impact */}
      <div className="max-w-7xl mx-auto px-6 py-20 border-b border-armada-navy/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="font-sans text-[10px] font-bold tracking-[0.45em] uppercase text-armada-sand block">
              Social Impact
            </span>
            <h2 className="font-headline font-light text-4xl text-armada-navy">
              {about.communityTitle}
            </h2>
            <p className="font-sans text-xs text-armada-navy/80 leading-relaxed text-justify">
              {about.communityDesc}
            </p>
          </div>
          
          <div className="lg:col-span-6 bg-white border border-armada-navy/10 p-8 flex flex-col justify-center items-center aspect-[16/9] relative overflow-hidden">
            <div className="text-center space-y-2 relative z-10">
              <span className="font-sans text-[9px] font-bold text-armada-sand uppercase tracking-[0.3em] block">ARTcrew ARMADA</span>
              <h3 className="font-headline text-2xl font-light text-armada-navy italic">"Craft. Community. Sustainability."</h3>
              <div className="w-12 h-[1px] bg-armada-sand mx-auto mt-4"></div>
            </div>
            <div className="absolute inset-0 bg-[#F7F4EF]/20 pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* 7. Vision: Craft & Art Awareness Center */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="border border-armada-navy/10 p-12 bg-white text-center space-y-6 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#F7F4EF] px-4">
            <Logo variant="emblem" theme="dark" className="w-8 h-8 opacity-60" />
          </div>
          <h3 className="font-sans text-[10px] font-bold tracking-[0.45em] uppercase text-armada-sand">
            {about.visionTitle}
          </h3>
          <p className="font-serif text-sm text-armada-navy/80 leading-relaxed max-w-2xl mx-auto">
            {about.visionDesc}
          </p>
        </div>
      </div>
      
    </div>
  );
}
