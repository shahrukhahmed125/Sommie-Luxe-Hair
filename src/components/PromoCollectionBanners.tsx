import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

interface PromoCollectionBannersProps {
  onSelectCategory?: (categoryKey: string) => void;
}

export const PromoCollectionBanners: React.FC<PromoCollectionBannersProps> = () => {
  const { navigateTo } = useShop();

  return (
    <section className="py-14 sm:py-20 bg-[#FAF7F2]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle section header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C6A15B] mb-2">
            CURATED SIGNATURE COLLECTIONS
          </p>
          <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-[#050505]">
            Crafted for Unmatched Perfection
          </h2>
        </div>

        {/* 3 Split Editorial Banners (UNice style layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Banner 1: Glueless Wear & Go */}
          <div className="group relative overflow-hidden bg-[#050505] min-h-[420px] rounded-sm flex flex-col justify-end p-8 text-white transition-all duration-500 hover:shadow-2xl hover:shadow-black/20">
            <img
              src="/src/assets/images/wig_blunt_bob_straight_1794225326720.jpg"
              alt="Glueless Wear & Go Wigs"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-75 group-hover:scale-105 group-hover:opacity-85 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent" />

            <div className="relative z-10">
              <span className="text-[10px] text-[#D4AF37] font-semibold tracking-[0.2em] uppercase mb-1.5 block">
                INNOVATION IN HAIR
              </span>
              <h3 className="font-cormorant text-2xl font-bold mb-2 text-white group-hover:text-[#F5F0E6] transition-colors">
                Wear & Go™ Glueless Wigs
              </h3>
              <p className="text-xs text-neutral-300 font-light mb-6 line-clamp-2">
                Pre-cut HD lace, breathable 3D dome cap, and zero glue. Ready in under 3 minutes.
              </p>
              <button
                onClick={() => navigateTo('shop', { category: 'deep-wave' })}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37] group-hover:text-white transition-colors"
              >
                <span>SHOP GLUELESS</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Banner 2: Raw Virgin Temple Hair */}
          <div className="group relative overflow-hidden bg-[#050505] min-h-[420px] rounded-sm flex flex-col justify-end p-8 text-white transition-all duration-500 hover:shadow-2xl hover:shadow-black/20">
            <img
              src="/src/assets/images/raw_bundles_showcase_1794228193955.jpg"
              alt="Raw Virgin Temple Hair"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-80 group-hover:scale-105 group-hover:opacity-90 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />

            <div className="relative z-10">
              <span className="text-[10px] text-[#D4AF37] font-semibold tracking-[0.2em] uppercase mb-1.5 block">
                PURE SINGLE DONOR
              </span>
              <h3 className="font-cormorant text-2xl font-bold mb-2 text-white group-hover:text-[#F5F0E6] transition-colors">
                Raw Temple Hair Bundles
              </h3>
              <p className="text-xs text-neutral-300 font-light mb-6 line-clamp-2">
                100% cuticle-aligned virgin hair. Bleaches effortlessly to 613 platinum blonde with lasting shine.
              </p>
              <button
                onClick={() => navigateTo('shop', { category: 'straight' })}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37] group-hover:text-white transition-colors"
              >
                <span>EXPLORE BUNDLES</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Banner 3: Ultra-Thin HD Invisible Lace */}
          <div className="group relative overflow-hidden bg-[#050505] min-h-[420px] rounded-sm flex flex-col justify-end p-8 text-white transition-all duration-500 hover:shadow-2xl hover:shadow-black/20">
            <img
              src="/src/assets/images/wig_honey_blonde_straight_1794225327944.jpg"
              alt="Ultra-Thin HD Invisible Lace"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-75 group-hover:scale-105 group-hover:opacity-85 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent" />

            <div className="relative z-10">
              <span className="text-[10px] text-[#D4AF37] font-semibold tracking-[0.2em] uppercase mb-1.5 block">
                UNDETECTABLE MELT
              </span>
              <h3 className="font-cormorant text-2xl font-bold mb-2 text-white group-hover:text-[#F5F0E6] transition-colors">
                Ultra-Thin HD Frontals
              </h3>
              <p className="text-xs text-neutral-300 font-light mb-6 line-clamp-2">
                Feather-light Swiss HD lace crafted to disappear into all skin complexions without tinting sprays.
              </p>
              <button
                onClick={() => navigateTo('shop', { category: 'bouncy-curls' })}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37] group-hover:text-white transition-colors"
              >
                <span>DISCOVER HD LACE</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
