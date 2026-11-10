import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { PRODUCTS } from '../data/products';
import { Sparkles } from 'lucide-react';

interface BestSellersProps {
  initialFilter?: string;
}

export const BestSellers: React.FC<BestSellersProps> = ({ initialFilter = 'all' }) => {
  const [filter, setFilter] = useState<string>(initialFilter);

  const tabs = [
    { id: 'all', label: 'All Best Sellers' },
    { id: 'straight', label: 'Bone Straight' },
    { id: 'deep-wave', label: 'Deep Wave' },
    { id: 'bouncy-curls', label: 'Bouncy Curls' },
    { id: 'ocean-wave', label: 'Ocean Wave' }
  ];

  const filteredProducts = filter === 'all'
    ? PRODUCTS.slice(0, 8)
    : PRODUCTS.filter((p) => p.category === filter);

  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2]" id="best-sellers">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] font-semibold text-[#C6A15B] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>MOST COVETED STYLES</span>
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          </div>
          <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold text-[#050505] tracking-tight mb-3">
            Best Sellers
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 font-light">
            Loved by thousands of women across London, Lagos, and worldwide. Hand-crafted with pure virgin and raw cuticles.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 sm:px-6 py-2 text-xs font-semibold tracking-[0.14em] uppercase transition-all duration-300 rounded-sm border ${
                filter === tab.id
                  ? 'bg-[#050505] text-[#D4AF37] border-[#050505] shadow-md'
                  : 'bg-[#F5F0E6]/50 text-neutral-600 border-[#E5DECD] hover:border-[#C6A15B] hover:text-[#050505]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 4 Products Per Row Desktop Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
