import React, { useState } from 'react';
import { ProductItem, Language } from '../types';
import { X, Sparkles, Check, ShoppingBag, ShieldCheck, Ruler, Calendar } from 'lucide-react';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onAddToCart: (product: ProductItem) => void;
  currentLang: Language;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  currentLang,
}) => {
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const formatPrice = (price: ProductItem['price']) => {
    if (currentLang === 'TH') return `฿${price.THB.toLocaleString()}`;
    if (currentLang === 'FR') return `${price.EUR.toLocaleString()} €`;
    return `$${price.USD.toLocaleString()}`;
  };

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#111111]/85 backdrop-blur-md flex items-center justify-center p-4 md:p-6 overflow-y-auto">
      <div className="bg-[#181818] border border-[#B08A3E]/40 max-w-4xl w-full grid grid-cols-1 md:grid-cols-12 overflow-hidden shadow-2xl relative my-auto">
        
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 text-[#AFAFA9] hover:text-[#F5F2EA] bg-[#111111]/70 p-2 border border-[#F5F2EA]/10 cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Product Image */}
        <div className="md:col-span-6 relative aspect-square md:aspect-auto min-h-[300px] md:min-h-[460px] bg-[#111111]">
          <img
            src={product.image}
            alt={product.title[currentLang]}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-[#111111]/90 px-3 py-1 text-[11px] uppercase tracking-widest text-[#B08A3E] font-bold border border-[#B08A3E]/30">
            {product.year ? `Anno ${product.year}` : 'Atelier Masterpiece'}
          </div>
        </div>

        {/* Product Details */}
        <div className="md:col-span-6 p-6 md:p-10 flex flex-col justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B08A3E] font-semibold mb-2 block">
              ArtCrew Armada Atelier Collection
            </span>

            <h2 className="font-serif-display text-2xl md:text-3xl text-[#F5F2EA] mb-4 leading-snug">
              {product.title[currentLang]}
            </h2>

            <div className="font-serif-display text-2xl text-[#B08A3E] font-medium mb-6">
              {formatPrice(product.price)}
            </div>

            <div className="space-y-4 mb-8">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#AFAFA9] font-bold block mb-1">
                  {currentLang === 'TH' ? 'องค์ประกอบและวัสดุ' : currentLang === 'FR' ? 'Composition & Métaux' : 'Materials & Provenance'}
                </span>
                <p className="text-xs text-[#F5F2EA] leading-relaxed">
                  {product.materials[currentLang]}
                </p>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#AFAFA9] font-bold block mb-1">
                  {currentLang === 'TH' ? 'เรื่องราวการสร้างสรรค์' : currentLang === 'FR' ? 'Description' : 'Craft Story'}
                </span>
                <p className="text-xs text-[#AFAFA9] font-light leading-relaxed">
                  {product.description[currentLang]}
                </p>
              </div>

              {product.dimensions && (
                <div className="flex items-center gap-2 text-xs text-[#AFAFA9] pt-2 border-t border-[#F5F2EA]/10">
                  <Ruler className="w-3.5 h-3.5 text-[#B08A3E]" />
                  <span>{product.dimensions}</span>
                </div>
              )}

              {product.artisanNote && (
                <div className="bg-[#121212] p-3 border-l border-[#B08A3E] text-xs text-[#AFAFA9] italic">
                  &ldquo;{product.artisanNote[currentLang]}&rdquo;
                </div>
              )}
            </div>
          </div>

          <div className="pt-4 border-t border-[#F5F2EA]/10 flex gap-3">
            <button
              onClick={handleAdd}
              className={`flex-1 flex items-center justify-center gap-2 py-3.5 text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                added 
                  ? 'bg-emerald-700 text-[#F5F2EA]' 
                  : 'bg-[#B08A3E] text-[#111111] hover:bg-[#ebc06e]'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>{currentLang === 'TH' ? 'เพิ่มลงกระเป๋าแล้ว' : 'Added to Bag'}</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>{currentLang === 'TH' ? 'เพิ่มลงในกระเป๋า' : currentLang === 'FR' ? 'Ajouter au Panier' : 'Add to Collection Bag'}</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="border border-[#F5F2EA]/20 text-[#AFAFA9] px-4 text-xs uppercase tracking-wider hover:text-[#F5F2EA] cursor-pointer"
            >
              {currentLang === 'TH' ? 'ปิด' : 'Close'}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
