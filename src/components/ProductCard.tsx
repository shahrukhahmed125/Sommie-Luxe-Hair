import React, { useState } from 'react';
import { Star, Heart, Eye, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { useShop } from '../context/ShopContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { formatPrice, isInWishlist, toggleWishlist, setQuickViewProduct, navigateTo } = useShop();
  const [selectedLength, setSelectedLength] = useState<number>(product.lengths[0]);
  const [isHovered, setIsHovered] = useState(false);
  const inWishlist = isInWishlist(product.id);

  const handleOpenPDP = () => {
    navigateTo('pdp', { product });
  };

  const getBadgeStyle = (badge?: string) => {
    switch (badge) {
      case 'BEST SELLER':
        return 'bg-[#050505] text-[#D4AF37] border border-[#D4AF37]/40';
      case 'NEW':
        return 'bg-[#D4AF37] text-[#050505] font-bold';
      case 'HD INVISIBLE LACE':
        return 'bg-neutral-900 text-white';
      case 'GLUELESS':
        return 'bg-[#C6A15B] text-white';
      case 'RAW VIRGIN':
        return 'bg-[#F5F0E6] text-[#050505] border border-[#C6A15B]/50';
      default:
        return 'bg-[#050505] text-white';
    }
  };

  return (
    <div
      className="group relative bg-white border border-[#EBE5D8] rounded-sm overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:border-[#D4AF37]/60"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Image Box */}
      <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 cursor-pointer" onClick={handleOpenPDP}>
        <img
          src={isHovered && product.hoverImage ? product.hoverImage : product.image}
          alt={product.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.badge && (
            <span
              className={`text-[9px] sm:text-[10px] uppercase font-semibold px-2 py-0.5 tracking-wider rounded-sm shadow-sm ${getBadgeStyle(
                product.badge
              )}`}
            >
              {product.badge}
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all z-10 ${
            inWishlist
              ? 'bg-[#050505] text-[#D4AF37]'
              : 'bg-white/85 backdrop-blur-md text-neutral-700 hover:bg-[#050505] hover:text-[#D4AF37]'
          }`}
          aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className={`w-4 h-4 ${inWishlist ? 'fill-[#D4AF37]' : ''}`} />
        </button>

        {/* Quick View Button on Hover */}
        <div className="absolute inset-x-3 bottom-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setQuickViewProduct(product);
            }}
            className="w-full py-2.5 bg-white/95 backdrop-blur-md text-[#050505] text-xs font-semibold uppercase tracking-[0.14em] hover:bg-[#050505] hover:text-[#D4AF37] transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>QUICK GLANCE</span>
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Collection & Rating */}
          <div className="flex items-center justify-between text-[11px] mb-1.5">
            <span className="text-neutral-500 uppercase tracking-widest text-[10px]">
              {product.collection}
            </span>
            <div className="flex items-center gap-1 text-[#D4AF37]">
              <Star className="w-3 h-3 fill-[#D4AF37]" />
              <span className="font-semibold text-neutral-800">{product.rating}</span>
              <span className="text-neutral-400 text-[10px]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3
            onClick={handleOpenPDP}
            className="font-cormorant text-base sm:text-lg font-bold text-[#050505] line-clamp-2 leading-snug cursor-pointer hover:text-[#C6A15B] transition-colors mb-1.5"
          >
            {product.name}
          </h3>

          {/* Hair Origin / Subtitle */}
          <p className="text-xs text-neutral-500 font-light line-clamp-1 mb-3">
            {product.subtitle}
          </p>

          {/* Length Selector Pills (UNice Style) */}
          <div className="mb-4">
            <div className="flex items-center justify-between text-[10px] text-neutral-500 mb-1.5">
              <span>Lengths:</span>
              <span className="font-semibold text-[#050505]">{selectedLength}" inch</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {product.lengths.map((len) => (
                <button
                  key={len}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedLength(len);
                  }}
                  className={`text-[11px] font-medium px-2 py-0.5 rounded-sm border transition-colors ${
                    selectedLength === len
                      ? 'border-[#050505] bg-[#050505] text-[#D4AF37] font-semibold'
                      : 'border-neutral-200 bg-neutral-50 text-neutral-600 hover:border-neutral-400'
                  }`}
                >
                  {len}"
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Price & View Detail Page Action */}
        <div className="pt-3 border-t border-neutral-100">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="font-montserrat text-lg font-bold text-[#050505] tabular-nums">
              {formatPrice(product)}
            </span>
            <span className="text-xs text-neutral-400 line-through tabular-nums">
              {formatPrice(product, true)}
            </span>
            <span className="text-[10px] font-semibold text-[#C6A15B] uppercase tracking-wider">
              SAVE 18%
            </span>
          </div>

          {/* Opens Dedicated Product Detail Page */}
          <button
            onClick={handleOpenPDP}
            className="btn-luxury-black w-full py-2.5 text-xs font-semibold tracking-[0.14em] uppercase flex items-center justify-center gap-2 rounded-sm shadow-sm group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-all"
          >
            <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>SELECT OPTIONS / DETAILS</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
