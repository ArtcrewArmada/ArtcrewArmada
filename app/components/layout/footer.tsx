import { Link, useLocation } from "react-router";
import { Logo } from "~/components/branding/logo";
import { getTranslation } from "~/locales/dictionary";
import { getLanguageFromPath } from "~/locales/helpers";

export function Footer() {
  const location = useLocation();
  const currentLang = getLanguageFromPath(location.pathname);
  const t = getTranslation(currentLang);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-armada-navy text-armada-ivory border-t border-armada-sand/10 pt-20 pb-12 transition-calm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand identity area */}
        <div className="md:col-span-2 space-y-6">
          <Logo variant="full" theme="light" />
          <p className="font-serif text-sm text-armada-ivory/60 max-w-sm leading-relaxed italic">
            "From Craft to Creation, From People to Possibility."
          </p>
          <div className="flex items-center space-x-6 pt-2">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo-artcrew.jpg" 
                alt="ARTcrew ARMADA" 
                className="w-12 h-12 rounded-full object-cover border border-armada-sand/20 hover:scale-105 transition-transform duration-300" 
              />
              <div className="flex flex-col">
                <span className="font-sans text-[9px] font-bold text-armada-sand uppercase tracking-wider">ARTcrew ARMADA</span>
                <span className="font-sans text-[7px] text-armada-ivory/40 uppercase">Parent Brand</span>
              </div>
            </div>
            <div className="h-8 w-px bg-armada-sand/20" />
            <div className="flex items-center space-x-2">
              <img 
                src="/logo-atelier.jpg" 
                alt="ARMADA L'ATELIER" 
                className="w-12 h-12 rounded-full object-cover border border-armada-sand/20 hover:scale-105 transition-transform duration-300" 
              />
              <div className="flex flex-col">
                <span className="font-sans text-[9px] font-bold text-armada-sand uppercase tracking-wider">ARMADA L'ATELIER</span>
                <span className="font-sans text-[7px] text-armada-ivory/40 uppercase">Upcycling Studio</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic menu list */}
        <div className="space-y-4">
          <h4 className="font-sans text-[10px] font-bold tracking-widest uppercase text-armada-sand">
            Ecosystem
          </h4>
          <div className="flex flex-col space-y-2">
            <Link to={`/${currentLang}/about`} className="font-sans text-xs text-armada-ivory/60 hover:text-armada-sand transition-calm">
              {t.nav.about}
            </Link>
            <Link to={`/${currentLang}/craft`} className="font-sans text-xs text-armada-ivory/60 hover:text-armada-sand transition-calm">
              {t.nav.craft}
            </Link>
            <Link to={`/${currentLang}/upcycling`} className="font-sans text-xs text-armada-ivory/60 hover:text-armada-sand transition-calm">
              {t.nav.upcycling}
            </Link>
            <Link to={`/${currentLang}/primitive`} className="font-sans text-xs text-armada-ivory/60 hover:text-armada-sand transition-calm">
              {t.nav.primitive}
            </Link>
          </div>
        </div>

        {/* Contact and Awareness Info */}
        <div className="space-y-4">
          <h4 className="font-sans text-[10px] font-bold tracking-widest uppercase text-armada-sand">
            Awareness Center
          </h4>
          <div className="flex flex-col space-y-2 font-sans text-xs text-armada-ivory/60 leading-relaxed">
            <p>ARTcrew ARMADA House</p>
            <p>Bangkok, Thailand</p>
            <p className="hover:text-armada-sand transition-calm">
              <a href="mailto:info@artcrewarmada.com">info@artcrewarmada.com</a>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-armada-ivory/5 flex flex-col md:flex-row items-center justify-between font-sans text-[10px] text-armada-ivory/40 tracking-wider uppercase">
        <p>© {currentYear} ARTcrew ARMADA. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Craft. Community. Sustainability.</p>
      </div>
    </footer>
  );
}
