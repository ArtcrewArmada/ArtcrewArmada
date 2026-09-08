import { Link, useLocation, useNavigate } from "react-router";
import { Logo } from "~/components/branding/logo";
import { getTranslation, type SupportedLanguage } from "~/locales/dictionary";
import { getLanguageFromPath, stripLanguage } from "~/locales/helpers";

export function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentLang = getLanguageFromPath(location.pathname);
  const t = getTranslation(currentLang);

  const currentYear = new Date().getFullYear();

  const handleLanguageChange = (newLang: SupportedLanguage) => {
    const cleanPath = stripLanguage(location.pathname);
    const destination = cleanPath === "/" ? `/${newLang}` : `/${newLang}${cleanPath}`;
    navigate(destination);
  };

  return (
    <footer className="bg-[#111111] border-t border-[#F5F2EA]/10 pt-20 pb-12 transition-calm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand identity area */}
        <div className="md:col-span-2 space-y-6">
          <Logo variant="full" theme="light" />
          <p className="font-serif-display text-sm text-[#AFAFA9] max-w-sm leading-relaxed italic">
            "From Material to Meaning. Creating with Purpose, Crafting a Better Future."
          </p>
          <div className="flex items-center space-x-6 pt-2">
            <div className="flex items-center space-x-2">
              <img
                src="/logo-artcrew.jpg"
                alt="ARTcrew ARMADA"
                className="w-12 h-12 rounded-full object-cover border border-[#B08A3E]/20 hover:scale-105 transition-transform duration-300"
              />
              <div className="flex flex-col">
                <span className="font-sans text-[9px] font-bold text-[#B08A3E] uppercase tracking-wider">ARTcrew ARMADA</span>
                <span className="font-sans text-[7px] text-[#AFAFA9]/60 uppercase">Parent Brand</span>
              </div>
            </div>
            <div className="h-8 w-px bg-[#F5F2EA]/10" />
            <div className="flex items-center space-x-2">
              <img
                src="/logo-atelier.jpg"
                alt="ARMADA L'ATELIER"
                className="w-12 h-12 rounded-full object-cover border border-[#B08A3E]/20 hover:scale-105 transition-transform duration-300"
              />
              <div className="flex flex-col">
                <span className="font-sans text-[9px] font-bold text-[#B08A3E] uppercase tracking-wider">ARMADA L'ATELIER</span>
                <span className="font-sans text-[7px] text-[#AFAFA9]/60 uppercase">Upcycling Studio</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic menu list */}
        <div className="space-y-4">
          <h4 className="font-sans text-[10px] font-bold tracking-widest uppercase text-[#B08A3E]">
            Ecosystem
          </h4>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {[
              { to: `/${currentLang}/about`, label: t.nav.about },
              { to: `/${currentLang}/craft`, label: t.nav.craft },
              { to: `/${currentLang}/upcycling`, label: t.nav.upcycling },
              { to: `/${currentLang}/primitive`, label: t.nav.primitive },
              { to: `/${currentLang}/shop`, label: t.nav.shop },
              { to: `/${currentLang}/learning`, label: t.nav.learning },
              { to: `/${currentLang}/journal`, label: t.nav.journal },
              { to: `/${currentLang}/awareness`, label: t.nav.awareness },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-sans text-[11px] text-[#AFAFA9] hover:text-[#B08A3E] transition-calm"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to={`/${currentLang}/contact`}
              className="font-sans text-[11px] text-[#AFAFA9] hover:text-[#B08A3E] transition-calm col-span-2"
            >
              {t.nav.contact}
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="font-sans text-[10px] font-bold tracking-widest uppercase text-[#B08A3E]">
            Awareness Center
          </h4>
          <div className="flex flex-col space-y-2 font-sans text-xs text-[#AFAFA9] leading-relaxed">
            <p>ARTcrew ARMADA House</p>
            <p>Bangkok, Thailand</p>
            <a
              href="mailto:info@artcrewarmada.com"
              className="hover:text-[#B08A3E] transition-calm"
            >
              info@artcrewarmada.com
            </a>
          </div>

          {/* Language Switcher in footer */}
          <div className="pt-4 flex items-center gap-3 text-[10px] font-bold tracking-widest text-[#AFAFA9]">
            {(["th", "en", "fr"] as SupportedLanguage[]).map((lang, i, arr) => (
              <span key={lang} className="flex items-center gap-3">
                <button
                  onClick={() => handleLanguageChange(lang)}
                  className={`uppercase transition-colors cursor-pointer ${
                    currentLang === lang
                      ? "text-[#F5F2EA] border-b border-[#B08A3E] pb-0.5"
                      : "hover:text-[#B08A3E]"
                  }`}
                >
                  {lang === "th" ? "Thai" : lang === "en" ? "English" : "Français"}
                </button>
                {i < arr.length - 1 && <span className="text-[#F5F2EA]/20">|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-[#F5F2EA]/5 flex flex-col md:flex-row items-center justify-between font-sans text-[10px] text-[#AFAFA9]/50 tracking-wider uppercase">
        <p>© {currentYear} ARTcrew ARMADA. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Craft. Community. Sustainability.</p>
      </div>
    </footer>
  );
}
