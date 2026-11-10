import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../data/products';
import { useShop } from '../context/ShopContext';

interface ShopByCollectionProps {
  onSelectCategory?: (categoryKey: string) => void;
}

export const ShopByCollection: React.FC<ShopByCollectionProps> = () => {
  const { navigateTo } = useShop();

  return (
    <section className="py-16 sm:py-24 bg-[#F5F0E6]/40" id="collections">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#D4AF37]/20 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#C6A15B] block mb-2">
              DISCOVER SIGNATURE TEXTURES
            </span>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#050505]">
              Shop By Collection
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-md font-light">
            Engineered from pure raw and virgin single-donor human hair. Each texture is crafted for realistic movement, longevity, and royal presence.
          </p>
        </div>

        {/* 4 Large Category Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => navigateTo('shop', { category: cat.categoryKey })}
              className="group cursor-pointer bg-white border border-[#E8DFC9] rounded-sm overflow-hidden flex flex-col transition-all duration-500 hover:shadow-2xl hover:border-[#D4AF37]/70"
            >
              {/* Image Container with Consistent Dimensions */}
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900">
                <img
                  src={cat.image}
                  alt={`${cat.name} - Sommie Luxe Hair Collection`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-75 transition-opacity" />

                {/* Top Corner Badge */}
                <div className="absolute top-3.5 right-3.5 bg-white/90 backdrop-blur-md text-[#050505] text-[10px] uppercase font-semibold px-2.5 py-1 rounded-sm tracking-wider">
                  {cat.itemCount}
                </div>

                {/* Floating Bottom Card Label on Image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-[10px] text-[#D4AF37] tracking-[0.2em] uppercase font-medium">
                    HAIR TEXTURE
                  </p>
                  <h3 className="font-cormorant text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-[#F5F0E6] flex items-center justify-between">
                    <span>{cat.name}</span>
                    <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:bg-[#D4AF37] group-hover:text-black">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </h3>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h4 className="font-cormorant text-base font-semibold text-[#050505] mb-1">
                    {cat.headline}
                  </h4>
                  <p className="text-xs text-neutral-500 font-light leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-[#050505] group-hover:text-[#C6A15B] transition-colors">
                  <span className="tracking-[0.14em] uppercase text-[11px]">EXPLORE TEXTURE</span>
                  <span className="text-[#D4AF37]">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
