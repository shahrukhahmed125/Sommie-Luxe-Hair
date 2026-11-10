import React from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Heart, Sparkles, ArrowRight, ShoppingBag } from 'lucide-react';

export const WishlistPage: React.FC = () => {
  const { wishlist, navigateTo } = useShop();

  const wishlistProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="py-12 sm:py-20 bg-[#FFFFFF]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="text-xs text-neutral-400 mb-8 flex items-center gap-2">
          <button onClick={() => navigateTo('home')} className="hover:text-[#050505]">
            Home
          </button>
          <span>/</span>
          <span className="text-[#050505] font-semibold">Your Royal Wishlist</span>
        </div>

        {/* Hero */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#C6A15B] mb-2">
            <Heart className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
            <span>SAVED ROYAL PIECES</span>
          </div>
          <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold text-[#050505] tracking-tight mb-2">
            Your Wishlist ({wishlist.length})
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 font-light">
            Keep track of your dream raw human hair wigs, HD frontals, and temple bundles.
          </p>
        </div>

        {/* Content */}
        {wishlistProducts.length === 0 ? (
          <div className="py-20 text-center max-w-md mx-auto space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#FAF8F5] border border-[#E8DFC9] flex items-center justify-center mx-auto text-[#C6A15B]">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="font-cormorant text-2xl font-bold text-[#050505]">Your wishlist is empty</h3>
            <p className="text-xs text-neutral-500 font-light leading-relaxed">
              Explore our signature collections of bone straight raw hair, deep wave units, and glueless wigs to save your favorites.
            </p>
            <button
              onClick={() => navigateTo('shop', { category: 'all' })}
              className="btn-luxury-gold px-8 py-3.5 font-semibold text-xs tracking-wider uppercase rounded-sm inline-flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Explore Collection</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlistProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
