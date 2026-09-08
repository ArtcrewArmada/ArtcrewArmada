import React, { useState, useEffect } from 'react';
import { SectionId, Language, ProductItem, CartItem } from './types';
import { NavigationDrawer } from './components/NavigationDrawer';
import { TopAppBar } from './components/TopAppBar';
import { HeroSection } from './components/HeroSection';
import { ShopSection } from './components/ShopSection';
import { AboutSection } from './components/AboutSection';
import { CreationCraftSection } from './components/CreationCraftSection';
import { UpcyclingSection } from './components/UpcyclingSection';
import { PrimitiveArtSection } from './components/PrimitiveArtSection';
import { WorkshopsSection } from './components/WorkshopsSection';
import { JournalSection } from './components/JournalSection';
import { AwarenessSection } from './components/AwarenessSection';
import { ContactSection } from './components/ContactSection';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [currentLang, setCurrentLang] = useState<Language>('EN');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Calculate total cart items
  const cartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  // Smooth scroll to section
  const handleScrollToSection = (sectionId: SectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const topOffset = 70; // Header height offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Cart operations
  const handleAddToCart = (product: ProductItem) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections: SectionId[] = [
        'home',
        'about',
        'creation',
        'upcycling',
        'primitive',
        'shop',
        'learning',
        'journal',
        'awareness',
        'contact'
      ];
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#131313] text-[#F5F2EA] flex flex-col relative selection:bg-[#B08A3E]/30 selection:text-[#F5F2EA]">
      
      {/* NAVIGATION DRAWER */}
      <NavigationDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        activeSection={activeSection}
        onSelectSection={handleScrollToSection}
        currentLang={currentLang}
        onSelectLang={setCurrentLang}
      />

      {/* SHOPPING BAG DRAWER */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        currentLang={currentLang}
      />

      {/* PRODUCT DETAIL MODAL */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        currentLang={currentLang}
      />

      {/* TOP APP BAR */}
      <TopAppBar
        onOpenDrawer={() => setIsDrawerOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={cartCount}
        currentLang={currentLang}
        onSelectLang={setCurrentLang}
        onLogoClick={() => handleScrollToSection('home')}
      />

      {/* MAIN CONTENT SECTIONS */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <HeroSection
          currentLang={currentLang}
          onExplore={() => handleScrollToSection('shop')}
          onPhilosophy={() => handleScrollToSection('about')}
        />

        {/* Shop & Services Section */}
        <ShopSection
          currentLang={currentLang}
          onSelectCategory={(catKey) => {
            const el = document.getElementById('shop');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onSelectProduct={(product) => setSelectedProduct(product)}
          onViewWorkshops={() => handleScrollToSection('learning')}
        />

        {/* About Section */}
        <AboutSection
          currentLang={currentLang}
          onExploreWorkshops={() => handleScrollToSection('learning')}
          onContactClick={() => handleScrollToSection('contact')}
        />

        {/* Creation & Craft Section */}
        <CreationCraftSection
          currentLang={currentLang}
        />

        {/* Armada Upcycling Section */}
        <UpcyclingSection
          currentLang={currentLang}
          onExploreShop={() => handleScrollToSection('shop')}
        />

        {/* Art & Primitive Section */}
        <PrimitiveArtSection
          currentLang={currentLang}
          onExploreArtifacts={() => handleScrollToSection('shop')}
        />

        {/* Learning & Activities Section */}
        <WorkshopsSection
          currentLang={currentLang}
        />

        {/* Journal Section */}
        <JournalSection
          currentLang={currentLang}
        />

        {/* Awareness Center Section */}
        <AwarenessSection
          currentLang={currentLang}
        />

        {/* Contact Section */}
        <ContactSection
          currentLang={currentLang}
        />

      </main>

      {/* FOOTER */}
      <Footer
        currentLang={currentLang}
        onSelectLang={setCurrentLang}
        onSelectSection={handleScrollToSection}
      />

    </div>
  );
}
