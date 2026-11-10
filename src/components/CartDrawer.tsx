import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    updateQuantity,
    removeFromCart,
    cartSubtotal,
    freeShippingThreshold,
    freeShippingProgress,
    currency,
    discountCode,
    setDiscountCode,
    discountPercent,
    applyDiscountCode,
    formatPrice
  } = useShop();

  const [promoInput, setPromoInput] = useState('');
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  if (!isCartOpen) return null;

  const discountAmount = (cartSubtotal * discountPercent) / 100;
  const finalTotal = Math.max(0, cartSubtotal - discountAmount);

  const formatCurrencyValue = (val: number) => {
    if (currency === 'GBP') return `£${val.toLocaleString()}`;
    if (currency === 'USD') return `$${val.toLocaleString()}`;
    return `₦${val.toLocaleString()}`;
  };

  const handleCheckout = () => {
    setCheckoutSuccess(true);
    setTimeout(() => {
      setCheckoutSuccess(false);
      setIsCartOpen(false);
    }, 3800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-[#D4AF37]/30">
          {/* Header */}
          <div className="px-6 py-5 bg-[#050505] text-white flex items-center justify-between border-b border-[#D4AF37]/30">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
              <h2 className="font-playfair text-lg font-bold tracking-wide text-[#F5F0E6]">
                Your Luxury Bag
              </h2>
              <span className="text-xs bg-[#D4AF37] text-black font-bold px-2 py-0.5 rounded-full">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-neutral-400 hover:text-white transition-colors"
              aria-label="Close bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Worldwide Shipping Meter */}
          <div className="px-6 py-3.5 bg-[#F5F0E6] border-b border-[#E8DFC9] text-xs">
            <div className="flex items-center justify-between font-medium text-[#050505] mb-1.5">
              <span>
                {freeShippingProgress >= 100 ? (
                  <span className="text-emerald-800 font-semibold flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                    Complimentary Worldwide Express Unlocked!
                  </span>
                ) : (
                  <span>
                    Add {formatCurrencyValue(Math.max(0, freeShippingThreshold - cartSubtotal))} more for Free Express Delivery!
                  </span>
                )}
              </span>
              <span className="font-bold text-[#C6A15B]">{freeShippingProgress}%</span>
            </div>
            <div className="w-full bg-[#E3DAC8] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-[#D4AF37] h-full transition-all duration-500"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-neutral-100">
            {cart.length === 0 ? (
              <div className="py-20 text-center text-neutral-500">
                <ShoppingBag className="w-12 h-12 text-[#C6A15B]/50 mx-auto mb-3" />
                <p className="font-playfair text-lg text-[#050505] font-bold">Your bag is empty</p>
                <p className="text-xs mt-1">Discover our collection of raw human hair wigs and frontals.</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-6 px-6 py-2.5 bg-[#050505] text-[#D4AF37] text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-neutral-900"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="py-4 flex gap-4">
                  {/* Thumbnail */}
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-24 object-cover object-top rounded-sm bg-neutral-900 shrink-0 border border-neutral-200"
                    referrerPolicy="no-referrer"
                  />

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between text-xs">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-playfair font-bold text-sm text-[#050505] leading-snug line-clamp-2">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-neutral-400 hover:text-red-600 transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-[11px] text-neutral-500 mt-1 space-y-0.5">
                        <p>Length: <span className="font-semibold text-neutral-800">{item.selectedLength}" inches</span></p>
                        <p>Density: <span className="font-semibold text-neutral-800">{item.selectedDensity}</span></p>
                        <p className="truncate">Lace: <span className="font-semibold text-neutral-800">{item.selectedLace}</span></p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-neutral-300 rounded-sm">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 text-neutral-600 hover:bg-neutral-100"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 py-0.5 font-bold text-neutral-900 text-xs">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-neutral-600 hover:bg-neutral-100"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Line Price */}
                      <span className="font-montserrat font-bold text-sm text-[#050505] tabular-nums">
                        {formatPrice({
                          priceGBP: item.product.priceGBP * item.quantity,
                          priceUSD: item.product.priceUSD * item.quantity,
                          priceNGN: item.product.priceNGN * item.quantity
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {cart.length > 0 && (
            <div className="p-6 bg-[#FAFAF8] border-t border-[#E8DFC9] space-y-4">
              {/* Promo Code Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo code (try LUXE15)"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  className="flex-1 px-3 py-2 bg-white border border-neutral-300 rounded-sm text-xs uppercase placeholder-neutral-400 focus:outline-none focus:border-[#C6A15B]"
                />
                <button
                  onClick={() => {
                    if (applyDiscountCode(promoInput)) {
                      setPromoInput('');
                    }
                  }}
                  className="px-4 py-2 bg-[#050505] text-[#D4AF37] hover:bg-neutral-900 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors"
                >
                  Apply
                </button>
              </div>

              {/* Subtotal Calculation */}
              <div className="space-y-1.5 text-xs text-neutral-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-neutral-900 tabular-nums">
                    {formatCurrencyValue(cartSubtotal)}
                  </span>
                </div>
                {discountPercent > 0 && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>VIP Luxury Privilege ({discountPercent}%)</span>
                    <span>-{formatCurrencyValue(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-emerald-700 font-medium">
                    {freeShippingProgress >= 100 ? 'Complimentary Express' : 'Calculated next'}
                  </span>
                </div>
                <div className="pt-2 border-t border-neutral-200 flex justify-between text-base font-bold text-[#050505]">
                  <span>Total</span>
                  <span className="text-[#C6A15B] font-montserrat tabular-nums">
                    {formatCurrencyValue(finalTotal)}
                  </span>
                </div>
              </div>

              {/* Success Simulation Toast */}
              {checkoutSuccess && (
                <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-sm text-xs text-center font-medium animate-fadeIn">
                  🎉 Order Initiated! Redirecting to Sommie Luxe Secure Gateway...
                </div>
              )}

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="w-full py-4 bg-[#050505] hover:bg-[#C6A15B] text-white hover:text-[#050505] text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                <span>PROCEED TO SECURE CHECKOUT</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-500">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>256-Bit Bank Encryption · UK & Lagos Concierge Support</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
