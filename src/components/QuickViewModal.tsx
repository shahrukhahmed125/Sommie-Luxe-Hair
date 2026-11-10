import React, { useState, useEffect } from 'react';
import { X, Star, Heart, Check, ShoppingBag, ShieldCheck, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const QuickViewModal: React.FC = () => {
  const { quickViewProduct, setQuickViewProduct, formatPrice, addToCart, isInWishlist, toggleWishlist } = useShop();

  const [selectedLength, setSelectedLength] = useState<number>(24);
  const [selectedDensity, setSelectedDensity] = useState<string>('200% (Glamour Full)');
  const [selectedLace, setSelectedLace] = useState<string>('13x6 HD Invisible Swiss Lace');
  const [activeImage, setActiveImage] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    if (quickViewProduct) {
      setSelectedLength(quickViewProduct.lengths[0]);
      setSelectedDensity(quickViewProduct.densities[0]);
      setSelectedLace(quickViewProduct.laceTypes[0]);
      setActiveImage(quickViewProduct.image);
      setQuantity(1);
    }
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  const inWishlist = isInWishlist(quickViewProduct.id);

  const handleAddToCart = () => {
    addToCart(quickViewProduct, selectedLength, selectedDensity, selectedLace, quantity);
    setQuickViewProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        className="relative bg-white w-full max-w-4xl rounded-sm overflow-hidden shadow-2xl border border-[#D4AF37]/30 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 text-neutral-800 hover:bg-[#050505] hover:text-[#D4AF37] flex items-center justify-center transition-colors shadow-md"
          aria-label="Close product view"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Gallery View */}
          <div className="bg-[#050505] p-6 flex flex-col justify-between">
            <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden border border-white/10">
              <img
                src={activeImage || quickViewProduct.image}
                alt={quickViewProduct.name}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              {quickViewProduct.badge && (
                <span className="absolute top-3 left-3 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-[#D4AF37] text-black rounded-sm">
                  {quickViewProduct.badge}
                </span>
              )}
            </div>

            {/* Thumbnail switcher */}
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => setActiveImage(quickViewProduct.image)}
                className={`w-14 h-16 rounded overflow-hidden border-2 transition-all ${
                  activeImage === quickViewProduct.image ? 'border-[#D4AF37]' : 'border-white/20 opacity-60'
                }`}
              >
                <img src={quickViewProduct.image} alt="Angle 1" className="w-full h-full object-cover" />
              </button>
              {quickViewProduct.hoverImage && (
                <button
                  onClick={() => setActiveImage(quickViewProduct.hoverImage!)}
                  className={`w-14 h-16 rounded overflow-hidden border-2 transition-all ${
                    activeImage === quickViewProduct.hoverImage ? 'border-[#D4AF37]' : 'border-white/20 opacity-60'
                  }`}
                >
                  <img src={quickViewProduct.hoverImage} alt="Angle 2" className="w-full h-full object-cover" />
                </button>
              )}
            </div>
          </div>

          {/* Configuration Module */}
          <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
            <div>
              {/* Collection & Rating */}
              <div className="flex items-center justify-between text-xs text-neutral-500 mb-2">
                <span className="text-[#C6A15B] font-semibold uppercase tracking-wider">
                  {quickViewProduct.collection}
                </span>
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
                  <span className="font-bold text-neutral-800">{quickViewProduct.rating}</span>
                  <span className="text-neutral-400">({quickViewProduct.reviewsCount} reviews)</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="font-playfair text-xl sm:text-2xl font-bold text-[#050505] leading-tight mb-2">
                {quickViewProduct.name}
              </h2>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-montserrat text-2xl font-bold text-[#050505] tabular-nums">
                  {formatPrice(quickViewProduct)}
                </span>
                <span className="text-sm text-neutral-400 line-through tabular-nums">
                  {formatPrice(quickViewProduct, true)}
                </span>
                <span className="text-xs font-semibold text-[#C6A15B] bg-[#F5F0E6] px-2 py-0.5 rounded">
                  VIP Privilege Applied
                </span>
              </div>

              {/* Hair Origin & Texture Details */}
              <div className="bg-[#FAF8F5] p-3 rounded-sm border border-[#EBE3D3] mb-5 text-xs space-y-1">
                <p><span className="text-neutral-500">Origin:</span> <span className="font-medium text-[#050505]">{quickViewProduct.hairOrigin}</span></p>
                <p><span className="text-neutral-500">Texture:</span> <span className="font-medium text-[#050505]">{quickViewProduct.hairTexture}</span></p>
              </div>

              {/* Length Selector */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-[#050505] uppercase tracking-wider mb-2">
                  Select Length: <span className="text-[#C6A15B]">{selectedLength}" inches</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {quickViewProduct.lengths.map((len) => (
                    <button
                      key={len}
                      onClick={() => setSelectedLength(len)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-sm border transition-all ${
                        selectedLength === len
                          ? 'bg-[#050505] text-[#D4AF37] border-[#050505]'
                          : 'bg-white text-neutral-700 border-neutral-300 hover:border-neutral-500'
                      }`}
                    >
                      {len}"
                    </button>
                  ))}
                </div>
              </div>

              {/* Density Selector */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-[#050505] uppercase tracking-wider mb-2">
                  Cap Density: <span className="text-[#C6A15B]">{selectedDensity}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {quickViewProduct.densities.map((den) => (
                    <button
                      key={den}
                      onClick={() => setSelectedDensity(den)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-sm border transition-all ${
                        selectedDensity === den
                          ? 'bg-[#050505] text-[#D4AF37] border-[#050505]'
                          : 'bg-white text-neutral-700 border-neutral-300 hover:border-neutral-500'
                      }`}
                    >
                      {den}
                    </button>
                  ))}
                </div>
              </div>

              {/* Lace Construction Selector */}
              <div className="mb-5">
                <label className="block text-xs font-semibold text-[#050505] uppercase tracking-wider mb-2">
                  Lace Construction:
                </label>
                <div className="space-y-1.5">
                  {quickViewProduct.laceTypes.map((lace) => (
                    <button
                      key={lace}
                      onClick={() => setSelectedLace(lace)}
                      className={`w-full text-left px-3 py-2 text-xs rounded-sm border flex items-center justify-between transition-all ${
                        selectedLace === lace
                          ? 'bg-[#F5F0E6] border-[#C6A15B] text-[#050505] font-semibold'
                          : 'bg-white border-neutral-200 text-neutral-600 hover:border-neutral-400'
                      }`}
                    >
                      <span>{lace}</span>
                      {selectedLace === lace && <Check className="w-3.5 h-3.5 text-[#C6A15B]" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-1.5 text-xs text-neutral-600 mb-6">
                {quickViewProduct.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-[#D4AF37] font-bold">✓</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions: Add to Bag + Wishlist */}
            <div className="pt-4 border-t border-neutral-200 space-y-3">
              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3.5 bg-[#050505] hover:bg-[#C6A15B] text-white hover:text-[#050505] text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
                  <span>ADD TO LUXURY BAG</span>
                </button>

                <button
                  onClick={() => toggleWishlist(quickViewProduct.id)}
                  className={`px-4 border rounded-sm transition-colors flex items-center justify-center ${
                    inWishlist
                      ? 'border-[#050505] bg-[#050505] text-[#D4AF37]'
                      : 'border-neutral-300 text-neutral-700 hover:bg-neutral-100'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${inWishlist ? 'fill-[#D4AF37]' : ''}`} />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-500">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Next-Day DHL Delivery Available to UK & Lagos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
