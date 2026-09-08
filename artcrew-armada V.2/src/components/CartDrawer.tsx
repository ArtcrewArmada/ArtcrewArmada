import React, { useState } from 'react';
import { CartItem, Language } from '../types';
import { translations } from '../data/content';
import { X, Trash2, ShoppingBag, CheckCircle, ArrowRight } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, qty: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  currentLang: Language;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  currentLang,
}) => {
  const [submitted, setSubmitted] = useState(false);

  const calculateTotal = () => {
    let usd = 0;
    let thb = 0;
    let eur = 0;
    items.forEach(item => {
      usd += item.product.price.USD * item.quantity;
      thb += item.product.price.THB * item.quantity;
      eur += item.product.price.EUR * item.quantity;
    });
    return { usd, thb, eur };
  };

  const totals = calculateTotal();

  const formatPrice = (usd: number, thb: number, eur: number) => {
    if (currentLang === 'TH') return `฿${thb.toLocaleString()}`;
    if (currentLang === 'FR') return `${eur.toLocaleString()} €`;
    return `$${usd.toLocaleString()}`;
  };

  const handleCheckout = () => {
    setSubmitted(true);
    setTimeout(() => {
      onClearCart();
      setSubmitted(false);
      onClose();
    }, 3500);
  };

  return (
    <>
      <div 
        id="cart-overlay"
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-[#111111]/80 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      <aside 
        id="cart-drawer"
        className={`bg-[#141414] border-l border-[#F5F2EA]/10 flex flex-col p-6 fixed right-0 top-0 h-full w-full max-w-md z-50 overflow-y-auto transition-transform duration-300 ease-out shadow-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#F5F2EA]/10 mb-6">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#B08A3E]" />
            <h2 className="font-serif-display text-xl text-[#F5F2EA]">
              {translations.cart.title[currentLang]}
            </h2>
          </div>
          <button 
            onClick={onClose}
            aria-label="Close cart"
            className="text-[#AFAFA9] hover:text-[#F5F2EA] p-1 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {submitted ? (
          <div className="my-auto text-center py-12 px-4">
            <CheckCircle className="w-14 h-14 text-[#B08A3E] mx-auto mb-4" />
            <h3 className="font-serif-display text-2xl text-[#F5F2EA] mb-2">
              {currentLang === 'TH' ? 'ส่งคำขอครอบครองแล้ว' : 'Acquisition Requested'}
            </h3>
            <p className="text-xs text-[#AFAFA9] leading-relaxed">
              {translations.cart.successMsg[currentLang]}
            </p>
          </div>
        ) : items.length === 0 ? (
          <div className="my-auto text-center py-12 text-[#AFAFA9]">
            <ShoppingBag className="w-12 h-12 text-[#AFAFA9]/40 mx-auto mb-3" />
            <p className="text-sm font-light mb-4">{translations.cart.empty[currentLang]}</p>
            <button
              onClick={onClose}
              className="border border-[#F5F2EA]/20 text-[#F5F2EA] text-xs uppercase px-5 py-2.5 hover:border-[#B08A3E] hover:text-[#B08A3E] transition-colors cursor-pointer"
            >
              {translations.cart.continue[currentLang]}
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto pr-1">
              {items.map((item) => (
                <div 
                  key={item.product.id}
                  className="bg-[#1a1919] border border-[#F5F2EA]/10 p-3 flex gap-3"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.title[currentLang]}
                    className="w-16 h-16 object-cover bg-[#111111] shrink-0"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-serif-display text-sm text-[#F5F2EA] line-clamp-1">
                        {item.product.title[currentLang]}
                      </h4>
                      <span className="font-serif-display text-xs text-[#B08A3E]">
                        {formatPrice(item.product.price.USD, item.product.price.THB, item.product.price.EUR)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#F5F2EA]/5">
                      <div className="flex items-center gap-2 border border-[#F5F2EA]/20 px-2 py-0.5 text-xs">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="text-[#AFAFA9] hover:text-[#F5F2EA] px-1 cursor-pointer"
                        >
                          -
                        </button>
                        <span className="font-medium text-[#F5F2EA]">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="text-[#AFAFA9] hover:text-[#F5F2EA] px-1 cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-[#AFAFA9] hover:text-rose-400 p-1 cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-[#F5F2EA]/10 mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#AFAFA9]">
                  {translations.cart.total[currentLang]}
                </span>
                <span className="font-serif-display text-2xl text-[#B08A3E] font-bold">
                  {formatPrice(totals.usd, totals.thb, totals.eur)}
                </span>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-[#B08A3E] text-[#111111] py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#ebc06e] transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{translations.cart.checkout[currentLang]}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
};
