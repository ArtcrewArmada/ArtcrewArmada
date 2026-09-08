import React, { useState } from 'react';
import { CATEGORIES_DATA, PRODUCTS_DATA, translations } from '../data/content';
import { CategoryCard, ProductItem, Language } from '../types';
import { Sparkles, ArrowRight } from 'lucide-react';

interface ShopSectionProps {
  currentLang: Language;
  onSelectCategory: (category: string) => void;
  onSelectProduct: (product: ProductItem) => void;
  onViewWorkshops: () => void;
}

export const ShopSection: React.FC<ShopSectionProps> = ({
  currentLang,
  onSelectCategory,
  onSelectProduct,
  onViewWorkshops,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterKeys = [
    { key: 'all', label: translations.shop.filterAll[currentLang] },
    { key: 'jewelry', label: CATEGORIES_DATA[0].title[currentLang] },
    { key: 'accessories', label: CATEGORIES_DATA[1].title[currentLang] },
    { key: 'decorations', label: CATEGORIES_DATA[2].title[currentLang] },
    { key: 'upcycling', label: CATEGORIES_DATA[3].title[currentLang] },
    { key: 'textile', label: CATEGORIES_DATA[4].title[currentLang] },
    { key: 'art-culture', label: CATEGORIES_DATA[5].title[currentLang] },
  ];

  const displayedCategories = selectedFilter === 'all' 
    ? CATEGORIES_DATA 
    : CATEGORIES_DATA.filter(c => c.categoryFilter === selectedFilter || (selectedFilter === 'all'));

  const filteredProducts = selectedFilter === 'all'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter(p => p.category === selectedFilter);

  const formatPrice = (price: ProductItem['price']) => {
    if (currentLang === 'TH') return `฿${price.THB.toLocaleString()}`;
    if (currentLang === 'FR') return `${price.EUR.toLocaleString()} €`;
    return `$${price.USD.toLocaleString()}`;
  };

  return (
    <section id="shop" className="bg-[#131313] py-20 px-6 md:px-16 border-t border-[#F5F2EA]/10">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-xs text-[#B08A3E] uppercase tracking-[0.2em] font-semibold mb-3">
            {translations.shop.subtitle[currentLang]}
          </span>
          <h2 className="font-serif-display text-3xl md:text-4xl lg:text-5xl text-[#F5F2EA] mb-4 uppercase tracking-widest">
            {translations.shop.heading[currentLang]}
          </h2>
          <div className="w-24 h-px bg-[#B08A3E] opacity-60"></div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {filterKeys.map((item) => (
            <button
              key={item.key}
              onClick={() => setSelectedFilter(item.key)}
              className={`text-xs uppercase tracking-widest px-4 py-2 transition-all duration-200 cursor-pointer border ${
                selectedFilter === item.key
                  ? 'bg-[#B08A3E] text-[#111111] border-[#B08A3E] font-bold shadow-md'
                  : 'bg-transparent text-[#AFAFA9] border-[#F5F2EA]/15 hover:border-[#B08A3E] hover:text-[#F5F2EA]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Primary Categories Grid (From the HTML design) */}
        {selectedFilter === 'all' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {displayedCategories.map((category: CategoryCard) => {
              const isCourse = category.categoryFilter === 'course-learning';
              return (
                <div
                  key={category.id}
                  id={`cat-card-${category.id}`}
                  onClick={() => {
                    if (isCourse) {
                      onViewWorkshops();
                    } else {
                      onSelectCategory(category.categoryFilter);
                      setSelectedFilter(category.categoryFilter);
                    }
                  }}
                  className={`group cursor-pointer ${
                    isCourse ? 'lg:col-span-3 lg:max-w-xl lg:mx-auto w-full' : ''
                  }`}
                >
                  <div className={`relative overflow-hidden ${isCourse ? 'aspect-[16/9]' : 'aspect-[4/5]'} mb-4 border border-[#F5F2EA]/10 bg-[#1c1b1b]`}>
                    <img
                      src={category.image}
                      alt={category.title[currentLang]}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/30 to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-xs text-[#AFAFA9] font-light line-clamp-1 mb-1">
                        {category.subtitle[currentLang]}
                      </p>
                    </div>
                  </div>

                  <h3 className="font-serif-display text-2xl text-[#F5F2EA] mb-2 group-hover:text-[#B08A3E] transition-colors">
                    {category.title[currentLang]}
                  </h3>
                  
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B08A3E] uppercase tracking-widest border-b border-transparent group-hover:border-[#B08A3E] pb-0.5 transition-all">
                    {category.actionText[currentLang]}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {/* Curated Artifacts Showcase */}
        <div className="mt-8 pt-12 border-t border-[#F5F2EA]/10">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif-display text-2xl md:text-3xl text-[#F5F2EA]">
              {selectedFilter === 'all' 
                ? (currentLang === 'TH' ? 'ชิ้นงานศิลป์เด่นประจำซีซั่น' : currentLang === 'FR' ? 'Pièces d\'Art & Talismans' : 'Featured Atelier Artifacts')
                : `${displayedCategories[0]?.title[currentLang] || ''} Collection`}
            </h3>
            <span className="text-xs text-[#AFAFA9] tracking-widest uppercase">
              {filteredProducts.length} {currentLang === 'TH' ? 'รายการ' : currentLang === 'FR' ? 'œuvres' : 'artifacts'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                onClick={() => onSelectProduct(product)}
                className="group bg-[#1a1919] border border-[#F5F2EA]/10 hover:border-[#B08A3E]/60 transition-all duration-300 flex flex-col cursor-pointer p-4"
              >
                <div className="relative aspect-square overflow-hidden mb-4 bg-[#111111]">
                  <img
                    src={product.image}
                    alt={product.title[currentLang]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <span className="absolute top-3 right-3 bg-[#111111]/90 text-[#B08A3E] text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 border border-[#B08A3E]/30">
                    {product.year}
                  </span>
                </div>

                <div className="flex-1 flex flex-col">
                  <h4 className="font-serif-display text-xl text-[#F5F2EA] mb-1.5 group-hover:text-[#B08A3E] transition-colors line-clamp-1">
                    {product.title[currentLang]}
                  </h4>

                  <p className="text-xs text-[#AFAFA9] mb-3 line-clamp-2 leading-relaxed">
                    {product.materials[currentLang]}
                  </p>

                  <div className="mt-auto pt-3 border-t border-[#F5F2EA]/10 flex items-center justify-between">
                    <span className="font-serif-display text-lg text-[#B08A3E] font-medium">
                      {formatPrice(product.price)}
                    </span>
                    <button 
                      className="text-xs font-semibold uppercase tracking-wider text-[#F5F2EA] group-hover:text-[#B08A3E] flex items-center gap-1"
                    >
                      <span>{translations.shop.exploreBtn[currentLang]}</span>
                      <Sparkles className="w-3.5 h-3.5 text-[#B08A3E]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
