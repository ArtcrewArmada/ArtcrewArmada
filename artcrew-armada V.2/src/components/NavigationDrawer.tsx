import React, { useEffect } from 'react';
import { SectionId, Language } from '../types';
import { translations } from '../data/content';
import { 
  Home, 
  Info, 
  Wand2, 
  Recycle, 
  Sparkles, 
  Store, 
  GraduationCap, 
  BookOpen, 
  Eye, 
  Mail, 
  X 
} from 'lucide-react';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: SectionId;
  onSelectSection: (section: SectionId) => void;
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
  activeSection,
  onSelectSection,
  currentLang,
  onSelectLang,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const navItems: Array<{ id: SectionId; label: string; icon: React.ReactNode; materialIcon?: string }> = [
    { id: 'home', label: translations.nav.home[currentLang], icon: <Home className="w-5 h-5" />, materialIcon: 'home' },
    { id: 'about', label: translations.nav.about[currentLang], icon: <Info className="w-5 h-5" />, materialIcon: 'info' },
    { id: 'creation', label: translations.nav.creation[currentLang], icon: <Wand2 className="w-5 h-5" />, materialIcon: 'auto_fix_high' },
    { id: 'upcycling', label: translations.nav.upcycling[currentLang], icon: <Recycle className="w-5 h-5" />, materialIcon: 'recycling' },
    { id: 'primitive', label: translations.nav.primitive[currentLang], icon: <Sparkles className="w-5 h-5" />, materialIcon: 'auto_awesome' },
    { id: 'shop', label: translations.nav.shop[currentLang], icon: <Store className="w-5 h-5" />, materialIcon: 'storefront' },
    { id: 'learning', label: translations.nav.learning[currentLang], icon: <GraduationCap className="w-5 h-5" />, materialIcon: 'school' },
    { id: 'journal', label: translations.nav.journal[currentLang], icon: <BookOpen className="w-5 h-5" />, materialIcon: 'menu_book' },
    { id: 'awareness', label: translations.nav.awareness[currentLang], icon: <Eye className="w-5 h-5" />, materialIcon: 'visibility' },
    { id: 'contact', label: translations.nav.contact[currentLang], icon: <Mail className="w-5 h-5" />, materialIcon: 'mail' },
  ];

  return (
    <>
      {/* OVERLAY FOR DRAWER */}
      <div 
        id="overlay"
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-[#111111]/80 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* NAVIGATION DRAWER */}
      <aside 
        id="nav-drawer"
        className={`bg-[#111111] border-r border-[#F5F2EA]/10 flex flex-col p-6 gap-2 fixed left-0 top-0 h-full w-80 z-50 overflow-y-auto transition-transform duration-300 ease-out shadow-2xl ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between mb-8 pb-2">
          <h2 className="font-serif-display text-2xl tracking-wide text-[#B08A3E]">
            ArtCrew ARMADA
          </h2>
          <button 
            id="close-drawer-btn"
            onClick={onClose}
            aria-label="Close navigation"
            className="text-[#F5F2EA] hover:text-[#B08A3E] transition-colors duration-300 p-1 cursor-pointer"
          >
            <X className="w-7 h-7" />
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => {
                  onSelectSection(item.id);
                  onClose();
                }}
                className={`text-left text-sm tracking-wider uppercase font-medium flex items-center gap-4 py-3 px-4 transition-all duration-200 cursor-pointer ${
                  isActive 
                    ? 'text-[#B08A3E] bg-[#353534]/40 border-l-2 border-[#B08A3E]' 
                    : 'text-[#AFAFA9] hover:bg-[#201f1f] hover:text-[#F5F2EA] border-l-2 border-transparent'
                }`}
              >
                <span className={`shrink-0 ${isActive ? 'text-[#B08A3E]' : 'text-[#AFAFA9]'}`}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="mt-auto pt-10 border-t border-[#F5F2EA]/10">
          <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-[#AFAFA9]">
            <button 
              id="lang-btn-th"
              onClick={() => onSelectLang('TH')}
              className={`transition-colors cursor-pointer py-1 ${
                currentLang === 'TH' ? 'text-[#B08A3E] font-bold border-b border-[#B08A3E]' : 'hover:text-[#B08A3E]'
              }`}
            >
              TH
            </button>
            <span className="text-[#F5F2EA]/20">|</span>
            <button 
              id="lang-btn-en"
              onClick={() => onSelectLang('EN')}
              className={`transition-colors cursor-pointer py-1 ${
                currentLang === 'EN' ? 'text-[#B08A3E] font-bold border-b border-[#B08A3E]' : 'hover:text-[#B08A3E]'
              }`}
            >
              EN
            </button>
            <span className="text-[#F5F2EA]/20">|</span>
            <button 
              id="lang-btn-fr"
              onClick={() => onSelectLang('FR')}
              className={`transition-colors cursor-pointer py-1 ${
                currentLang === 'FR' ? 'text-[#B08A3E] font-bold border-b border-[#B08A3E]' : 'hover:text-[#B08A3E]'
              }`}
            >
              FR
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
