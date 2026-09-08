import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Logo } from "~/components/branding/logo";
import { getTranslation, type SupportedLanguage } from "~/locales/dictionary";
import { getLanguageFromPath, stripLanguage } from "~/locales/helpers";

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const currentLang = getLanguageFromPath(location.pathname);
  const t = getTranslation(currentLang);

  // Close mobile menu on path changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Track scroll for header shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <>
      {/* TOP APP BAR */}
      <header
        className={`fixed top-0 w-full z-30 transition-all duration-300 ${
          isScrolled
            ? "bg-[#111111]/90 backdrop-blur-md border-b border-[#F5F2EA]/10 shadow-xl"
            : "bg-[#111111]/70 backdrop-blur-sm border-b border-[#F5F2EA]/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-[62px] flex items-center justify-between">
          {/* Hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#F5F2EA] hover:text-[#B08A3E] transition-colors duration-300 cursor-pointer p-2 -ml-2"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* Logo */}
            <Link to={`/${currentLang}`} className="flex items-center gap-3 group">
              <Logo variant="symbol" theme="light" className="w-9 h-9 rounded-full" />
              <span className="font-serif-display text-xl tracking-wider text-[#F5F2EA] group-hover:text-[#B08A3E] transition-colors duration-300 hidden sm:block">
                ARTCREW ARMADA
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center space-x-5">
            {navLinks.map((link) => {
              const isActive = location.pathname.startsWith(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-sans text-[9px] xl:text-[10px] font-bold tracking-widest uppercase transition-all duration-300 ${
                    isActive
                      ? "text-[#B08A3E] border-b border-[#B08A3E] pb-0.5"
                      : "text-[#AFAFA9] hover:text-[#F5F2EA]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold tracking-widest text-[#AFAFA9]">
              {(["th", "en", "fr"] as SupportedLanguage[]).map((lang, i, arr) => (
                <span key={lang} className="flex items-center gap-2">
                  <button
                    onClick={() => handleLanguageChange(lang)}
                    className={`transition-colors cursor-pointer px-1 py-0.5 uppercase ${
                      currentLang === lang ? "text-[#B08A3E] font-black" : "hover:text-[#F5F2EA]"
                    }`}
                  >
                    {lang}
                  </button>
                  {i < arr.length - 1 && <span className="text-[#F5F2EA]/20">/</span>}
                </span>
              ))}
            </div>

            {/* Dashboard Portal Button */}
            <Link
              to="/app/dashboard"
              className="border border-[#F5F2EA]/20 px-4 py-2 font-sans text-[9px] font-bold tracking-widest uppercase text-[#AFAFA9] hover:bg-[#B08A3E] hover:text-[#F5F2EA] hover:border-[#B08A3E] transition-calm"
            >
              {t.nav.dashboard}
            </Link>
          </div>
        </div>
      </header>

      {/* MOBILE NAVIGATION DRAWER (Side Slide) */}
      {/* Overlay */}
      <div
        onClick={() => setIsMobileMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-[#111111]/80 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed left-0 top-0 h-full w-80 z-50 bg-[#111111] border-r border-[#F5F2EA]/10 flex flex-col p-6 gap-2 overflow-y-auto transition-transform duration-300 ease-out shadow-2xl xl:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#F5F2EA]/10">
          <h2 className="font-serif-display text-xl tracking-wide text-[#B08A3E]">
            ArtCrew ARMADA
          </h2>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-[#F5F2EA] hover:text-[#B08A3E] transition-colors duration-300 p-1 cursor-pointer"
            aria-label="Close navigation"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname.startsWith(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-left text-xs tracking-widest uppercase font-semibold flex items-center py-3 px-4 transition-all duration-200 border-l-2 ${
                  isActive
                    ? "text-[#B08A3E] bg-[#353534]/40 border-[#B08A3E]"
                    : "text-[#AFAFA9] hover:bg-[#1A1A1A] hover:text-[#F5F2EA] border-transparent"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto pt-8 border-t border-[#F5F2EA]/10 space-y-4">
          {/* Language switcher */}
          <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-[#AFAFA9]">
            {(["th", "en", "fr"] as SupportedLanguage[]).map((lang, i, arr) => (
              <span key={lang} className="flex items-center gap-4">
                <button
                  onClick={() => handleLanguageChange(lang)}
                  className={`transition-colors cursor-pointer uppercase ${
                    currentLang === lang ? "text-[#B08A3E] font-black border-b border-[#B08A3E]" : "hover:text-[#B08A3E]"
                  }`}
                >
                  {lang}
                </button>
                {i < arr.length - 1 && <span className="text-[#F5F2EA]/20">|</span>}
              </span>
            ))}
          </div>

          {/* Portal access */}
          <Link
            to="/app/dashboard"
            className="block text-center bg-[#B08A3E] text-[#111111] py-3 font-sans text-xs font-bold tracking-widest uppercase hover:bg-[#F5F2EA] hover:text-[#111111] transition-calm"
          >
            {t.nav.dashboard}
          </Link>
        </div>
      </aside>
    </>
  );
}
