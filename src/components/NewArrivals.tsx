import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { PRODUCTS } from '../data/products';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

export const NewArrivals: React.FC = () => {
  const [scrollIndex, setScrollIndex] = useState(0);

  // New arrivals items
  const newArrivals = PRODUCTS.slice(4, 8);

  return (
    <section className="py-16 sm:py-24 bg-[#F5F0E6]/30" id="new-arrivals">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] font-semibold text-[#C6A15B] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>JUST UNVEILED · SPRING 2026</span>
            </div>
            <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold text-[#050505] tracking-tight">
              New Arrivals
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-neutral-600 font-light max-w-md">
            The latest innovations in undetectable Swiss HD lace, pre-plucked luxury hairlines, and featherlight glueless caps.
          </p>
        </div>

        {/* 4 Products Desktop Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
