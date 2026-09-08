import React from 'react';
import { Menu, ShoppingBag } from 'lucide-react';
import { LOGO_URL } from '../data/content';
import { Language } from '../types';

interface TopAppBarProps {
  onOpenDrawer: () => void;
  onOpenCart: () => void;
  cartCount: number;
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  onLogoClick: () => void;
}

export const TopAppBar: React.FC<TopAppBarProps> = ({
  onOpenDrawer,
  onOpenCart,
  cartCount,
  currentLang,
  onSelectLang,
  onLogoClick
}) => {
  return (
    <header className="bg-[#111111]/85 backdrop-blur-md fixed top-0 w-full z-30 border-b border-[#F5F2EA]/15 flex justify-between items-center px-6 md:px-16 py-3.5 transition-all duration-300">
      <div className="flex items-center gap-4">
        <button
          id="menu-drawer-toggle"
          onClick={onOpenDrawer}
          aria-label="Open navigation menu"
          className="text-[#F5F2EA] hover:text-[#B08A3E] transition-colors duration-300 cursor-pointer active:opacity-70 p-2 -ml-2 rounded-none"
        >
          <Menu className="w-7 h-7" />
        </button>

        <button 
          id="brand-logo-btn"
          onClick={onLogoClick} 
          className="flex items-center gap-3 cursor-pointer group text-left"
        >
          <img 
            alt="ArtCrew Armada Logo" 
            className="h-9 w-9 object-contain group-hover:scale-105 transition-transform duration-300" 
            src={LOGO_URL} 
          />
          <span className="font-serif-display text-xl md:text-2xl tracking-wider text-[#F5F2EA] group-hover:text-[#B08A3E] transition-colors">
            ARTCREW ARMADA
          </span>
        </button>
      </div>

      <div className="flex items-center gap-4">
        {/* Quick Language Toggle */}
        <div className="hidden sm:flex items-center gap-2 text-xs font-semibold tracking-widest text-[#AFAFA9] mr-2">
          <button 
            id="top-lang-th"
            onClick={() => onSelectLang('TH')}
            className={`transition-colors cursor-pointer px-1 py-0.5 ${
              currentLang === 'TH' ? 'text-[#B08A3E] font-bold' : 'hover:text-[#F5F2EA]'
            }`}
          >
            TH
          </button>
          <span className="text-[#F5F2EA]/20">/</span>
          <button 
            id="top-lang-en"
            onClick={() => onSelectLang('EN')}
            className={`transition-colors cursor-pointer px-1 py-0.5 ${
              currentLang === 'EN' ? 'text-[#B08A3E] font-bold' : 'hover:text-[#F5F2EA]'
            }`}
          >
            EN
          </button>
          <span className="text-[#F5F2EA]/20">/</span>
          <button 
            id="top-lang-fr"
            onClick={() => onSelectLang('FR')}
            className={`transition-colors cursor-pointer px-1 py-0.5 ${
              currentLang === 'FR' ? 'text-[#B08A3E] font-bold' : 'hover:text-[#F5F2EA]'
            }`}
          >
            FR
          </button>
        </div>

        {/* Shopping Cart Button */}
        <button
          id="shopping-cart-btn"
          onClick={onOpenCart}
          aria-label="Open shopping bag"
          className="text-[#F5F2EA] hover:text-[#B08A3E] transition-colors duration-300 cursor-pointer active:opacity-70 p-2 -mr-2 relative"
        >
          <ShoppingBag className="w-6 h-6" />
          {cartCount > 0 && (
            <span 
              id="cart-count-badge"
              className="absolute top-1 right-1 flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[10px] font-bold text-[#111111] bg-[#B08A3E] rounded-full"
            >
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};
