/**
 * PageHero — Shared hero banner used at the top of every public page.
 * Displays the section badge, large headline title, and a tagline/description.
 */

interface PageHeroProps {
  badge: string;
  title: string;
  desc: string;
  tagline?: string;
}

export function PageHero({ badge, title, desc, tagline }: PageHeroProps) {
  return (
    <section className="relative pt-[62px] overflow-hidden">
      {/* Subtle dot grid background */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(#F5F2EA_1px,transparent_1px)] [background-size:28px_28px]" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#131313] to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28 z-10">
        {/* Badge */}
        <span className="inline-block font-sans text-[10px] font-bold tracking-[0.45em] uppercase text-[#B08A3E] border border-[#B08A3E]/30 px-4 py-1.5 mb-8">
          {badge}
        </span>

        {/* Headline */}
        <h1 className="font-serif-display font-normal text-4xl md:text-5xl lg:text-6xl text-[#F5F2EA] leading-[1.1] tracking-tight max-w-4xl mb-6">
          {title}
        </h1>

        {/* Description */}
        <p className="font-sans text-base md:text-lg text-[#AFAFA9] max-w-2xl leading-relaxed">
          {desc}
        </p>

        {/* Optional tagline */}
        {tagline && (
          <p className="mt-6 font-serif-display text-lg italic text-[#B08A3E]/80">
            {tagline}
          </p>
        )}

        {/* Decorative bottom line */}
        <div className="mt-12 h-px bg-gradient-to-r from-[#B08A3E]/40 via-[#F5F2EA]/10 to-transparent" />
      </div>
    </section>
  );
}
