import { Link, useLocation, useNavigate } from "react-router";
import { Logo } from "~/components/branding/logo";
import { getTranslation, type SupportedLanguage } from "~/locales/dictionary";
import { getLanguageFromPath, stripLanguage } from "~/locales/helpers";

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const currentLang = getLanguageFromPath(location.pathname);
  const t = getTranslation(currentLang);

  const navLinks = [
    { to: `/${currentLang}/about`, label: t.nav.about },
    { to: `/${currentLang}/craft`, label: t.nav.craft },
    { to: `/${currentLang}/upcycling`, label: t.nav.upcycling },
    { to: `/${currentLang}/primitive`, label: t.nav.primitive },
    { to: `/${currentLang}/shop`, label: t.nav.shop },
    { to: `/${currentLang}/learning`, label: t.nav.learning },
    { to: `/${currentLang}/journal`, label: t.nav.journal },
  ];

  const handleLanguageChange = (newLang: SupportedLanguage) => {
    const cleanPath = stripLanguage(location.pathname);
    const destination = cleanPath === "/" ? `/${newLang}` : `/${newLang}${cleanPath}`;
    navigate(destination);
  };

  return (
    <header className="sticky top-0 z-50 bg-armada-ivory/90 backdrop-blur-md border-b border-armada-navy/5 transition-calm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to={`/${currentLang}`} className="flex-shrink-0">
          <Logo variant="full" theme="dark" />
        </Link>

        {/* Navigation Menu (Desktop) */}
        <nav className="hidden xl:flex items-center space-x-6">
          {navLinks.map((link) => {
            const isActive = location.pathname.startsWith(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`font-sans text-[11px] font-bold tracking-widest uppercase transition-calm hover:text-armada-sand ${
                  isActive ? "text-armada-sand" : "text-armada-navy/80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Language Switcher & Controls */}
        <div className="flex items-center space-x-4">
          {/* Language Switcher buttons */}
          <div className="flex items-center space-x-2 border-r border-armada-navy/10 pr-4">
            {(["th", "en", "fr"] as SupportedLanguage[]).map((lang) => (
              <button
                key={lang}
                onClick={() => handleLanguageChange(lang)}
                className={`font-sans text-[10px] font-bold tracking-wider uppercase transition-calm ${
                  currentLang === lang
                    ? "text-armada-sand font-extrabold"
                    : "text-armada-navy/40 hover:text-armada-navy"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* SaaS Portal Access Button */}
          <Link
            to="/app/dashboard"
            className="border border-armada-navy/20 px-4 py-2 font-sans text-[9px] font-bold tracking-widest uppercase hover:bg-armada-navy hover:text-armada-ivory hover:border-armada-navy transition-calm"
          >
            {t.nav.dashboard}
          </Link>
        </div>
      </div>
    </header>
  );
}
