import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Logo } from "~/components/branding/logo";
import { getTranslation, type SupportedLanguage } from "~/locales/dictionary";
import { getLanguageFromPath, stripLanguage } from "~/locales/helpers";

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const currentLang = getLanguageFromPath(location.pathname);
  const t = getTranslation(currentLang);

  // Close mobile menu on path changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: `/${currentLang}/about`, label: t.nav.about },
    { to: `/${currentLang}/craft`, label: t.nav.craft },
    { to: `/${currentLang}/upcycling`, label: t.nav.upcycling },
    { to: `/${currentLang}/primitive`, label: t.nav.primitive },
    { to: `/${currentLang}/shop`, label: t.nav.shop },
    { to: `/${currentLang}/learning`, label: t.nav.learning },
    { to: `/${currentLang}/journal`, label: t.nav.journal },
    { to: `/${currentLang}/awareness`, label: t.nav.awareness },
    { to: `/${currentLang}/contact`, label: t.nav.contact },
  ];

  const handleLanguageChange = (newLang: SupportedLanguage) => {
    const cleanPath = stripLanguage(location.pathname);
    const destination = cleanPath === "/" ? `/${newLang}` : `/${newLang}${cleanPath}`;
    navigate(destination);
  };

  return (
    <header className="sticky top-0 z-50 bg-armada-ivory/95 backdrop-blur-md border-b border-armada-navy/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to={`/${currentLang}`} className="flex-shrink-0">
          <Logo variant="full" theme="dark" />
        </Link>

        {/* Navigation Menu (Desktop - Hidden on screens smaller than xl) */}
        <nav className="hidden xl:flex items-center space-x-5">
          {navLinks.map((link) => {
            const isActive = location.pathname.startsWith(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`font-sans text-[9px] xl:text-[10px] font-bold tracking-widest uppercase transition-all duration-300 hover:text-armada-sand ${
                  isActive ? "text-armada-sand border-b border-armada-sand pb-1" : "text-armada-navy/80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side controls (Desktop) */}
        <div className="hidden xl:flex items-center space-x-6">
          {/* Language Switcher */}
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

        {/* Hamburger Menu Toggle (Mobile & Tablet) */}
        <div className="flex xl:hidden items-center space-x-4">
          {/* Simple Language switcher for mobile quick access */}
          <div className="flex items-center space-x-2 border-r border-armada-navy/10 pr-3">
            <button 
              onClick={() => handleLanguageChange(currentLang === "th" ? "en" : currentLang === "en" ? "fr" : "th")}
              className="font-sans text-[10px] font-bold tracking-wider uppercase text-armada-sand"
            >
              {currentLang}
            </button>
          </div>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-armada-navy hover:text-armada-sand focus:outline-none transition-calm"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              // Close Icon
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* 5. Mobile Drawer Menu Overlay (Slide-Down) */}
      {isMobileMenuOpen && (
        <div className="xl:hidden fixed top-20 inset-0 z-40 flex flex-col bg-armada-navy text-armada-ivory animate-fade-in shadow-2xl">
          <div className="flex-grow overflow-y-auto px-6 py-8 space-y-8 flex flex-col justify-between">
            
            {/* Mobile Nav Links */}
            <nav className="space-y-4 flex flex-col">
              {navLinks.map((link) => {
                const isActive = location.pathname.startsWith(link.to);
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`font-sans text-xs font-bold tracking-widest uppercase py-3 border-b border-armada-ivory/5 transition-calm ${
                      isActive ? "text-armada-sand pl-2 border-l-2 border-armada-sand border-b-transparent" : "text-armada-ivory/70"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Footer (Lang switcher + portal access button) */}
            <div className="space-y-6 pt-6 border-t border-armada-ivory/10">
              {/* Full Mobile Lang switcher */}
              <div className="flex items-center justify-between">
                <span className="font-sans text-[9px] font-bold tracking-widest text-armada-ivory/40 uppercase">Select Language</span>
                <div className="flex space-x-4">
                  {(["th", "en", "fr"] as SupportedLanguage[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => handleLanguageChange(lang)}
                      className={`font-sans text-xs font-bold uppercase transition-calm ${
                        currentLang === lang ? "text-armada-sand scale-110 font-black" : "text-armada-ivory/40"
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>

              {/* Portal Access Button */}
              <Link
                to="/app/dashboard"
                className="block text-center bg-armada-sand text-armada-navy py-3.5 font-sans text-xs font-bold tracking-widest uppercase hover:bg-armada-ivory hover:text-armada-navy transition-calm"
              >
                {t.nav.dashboard}
              </Link>
            </div>
            
          </div>
        </div>
      )}
    </header>
  );
}
