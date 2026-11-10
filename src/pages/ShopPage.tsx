import React, { useState, useMemo } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { SlidersHorizontal, ArrowUpDown, Sparkles, X, Check } from 'lucide-react';
import { Product } from '../types';

export const ShopPage: React.FC = () => {
  const { activeCategoryFilter, setActiveCategoryFilter, navigateTo } = useShop();

  const [selectedTexture, setSelectedTexture] = useState<string>(activeCategoryFilter || 'all');
  const [selectedLace, setSelectedLace] = useState<string>('all');
  const [selectedDensity, setSelectedDensity] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync if activeCategoryFilter changed from menu
  React.useEffect(() => {
    if (activeCategoryFilter) {
      setSelectedTexture(activeCategoryFilter);
    }
  }, [activeCategoryFilter]);

  const textures = [
    { id: 'all', label: 'All Textures' },
    { id: 'straight', label: 'Bone Straight Raw' },
    { id: 'deep-wave', label: 'Deep Wave Curls' },
    { id: 'bouncy-curls', label: 'Bouncy Hollywood Curls' },
    { id: 'ocean-wave', label: 'Ocean Beach Wave' }
  ];

  const laceOptions = [
    { id: 'all', label: 'All Lace Types' },
    { id: '13x6', label: '13x6 HD Swiss Frontal' },
    { id: '5x5', label: '5x5 HD Invisible Closure' },
    { id: 'glueless', label: 'Wear & Go™ Glueless' }
  ];

  const densityOptions = [
    { id: 'all', label: 'All Densities' },
    { id: '180%', label: '180% Natural Luxe' },
    { id: '200%', label: '200% Glamour Full' },
    { id: '250%', label: '250% Red Carpet Heavy' }
  ];

  // Filtering logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Texture match
      if (selectedTexture !== 'all' && p.category !== selectedTexture) {
        return false;
      }
      // Lace match
      if (selectedLace !== 'all') {
        const matchesLace = p.laceTypes.some((l) => l.toLowerCase().includes(selectedLace.toLowerCase()));
        if (!matchesLace) return false;
      }
      // Density match
      if (selectedDensity !== 'all') {
        const matchesDensity = p.densities.some((d) => d.includes(selectedDensity));
        if (!matchesDensity) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceGBP - b.priceGBP;
      if (sortBy === 'price-desc') return b.priceGBP - a.priceGBP;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default
    });
  }, [selectedTexture, selectedLace, selectedDensity, sortBy]);

  const resetFilters = () => {
    setSelectedTexture('all');
    setSelectedLace('all');
    setSelectedDensity('all');
    setSortBy('featured');
    setActiveCategoryFilter('all');
  };

  return (
    <div className="py-10 sm:py-16 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="text-xs text-neutral-400 mb-6 flex items-center gap-2">
          <button onClick={() => navigateTo('home')} className="hover:text-[#050505]">
            Home
          </button>
          <span>/</span>
          <span className="text-[#050505] font-semibold">Collections</span>
          {selectedTexture !== 'all' && (
            <>
              <span>/</span>
              <span className="text-[#C6A15B] uppercase font-semibold">{selectedTexture}</span>
            </>
          )}
        </div>

        {/* Page Hero Title */}
        <div className="pb-8 mb-10 border-b border-[#F5F0E6] flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] font-semibold text-[#C6A15B] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>THE ROYAL COLLECTION</span>
            </div>
            <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold text-[#050505]">
              {selectedTexture === 'all'
                ? 'All Luxury Wigs & Bundles'
                : selectedTexture === 'straight'
                ? 'Silky Bone Straight Collection'
                : selectedTexture === 'deep-wave'
                ? 'Hydrated Deep Wave Collection'
                : selectedTexture === 'bouncy-curls'
                ? 'Voluminous Bouncy Curls Collection'
                : 'Ocean Wave Resort Collection'}
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-neutral-500 font-light max-w-md">
            Showing {filteredProducts.length} handcrafted pieces created from 100% cuticle-aligned single donor hair.
          </p>
        </div>

        {/* Main Content: Sidebar Filters + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block space-y-8 pr-6 border-r border-[#F5F0E6]">
            {/* Header / Reset */}
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
              <span className="text-xs uppercase font-semibold tracking-wider text-[#050505] flex items-center gap-2">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#D4AF37]" />
                Filters
              </span>
              <button
                onClick={resetFilters}
                className="text-[11px] text-[#C6A15B] hover:text-[#050505] transition-colors"
              >
                Reset All
              </button>
            </div>

            {/* Hair Texture Filter */}
            <div>
              <h3 className="text-xs uppercase tracking-wider font-semibold text-[#050505] mb-3">
                Hair Texture
              </h3>
              <div className="space-y-2">
                {textures.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTexture(t.id)}
                    className={`w-full text-left px-3 py-2 text-xs rounded transition-colors flex items-center justify-between ${
                      selectedTexture === t.id
                        ? 'bg-[#050505] text-[#D4AF37] font-semibold'
                        : 'text-neutral-600 hover:bg-[#F5F0E6]/50'
                    }`}
                  >
                    <span>{t.label}</span>
                    {selectedTexture === t.id && <Check className="w-3.5 h-3.5 text-[#D4AF37]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Lace Construction Filter */}
            <div>
              <h3 className="text-xs uppercase tracking-wider font-semibold text-[#050505] mb-3">
                Lace Construction
              </h3>
              <div className="space-y-2">
                {laceOptions.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => setSelectedLace(l.id)}
                    className={`w-full text-left px-3 py-2 text-xs rounded transition-colors flex items-center justify-between ${
                      selectedLace === l.id
                        ? 'bg-[#050505] text-[#D4AF37] font-semibold'
                        : 'text-neutral-600 hover:bg-[#F5F0E6]/50'
                    }`}
                  >
                    <span>{l.label}</span>
                    {selectedLace === l.id && <Check className="w-3.5 h-3.5 text-[#D4AF37]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Density Filter */}
            <div>
              <h3 className="text-xs uppercase tracking-wider font-semibold text-[#050505] mb-3">
                Fullness Density
              </h3>
              <div className="space-y-2">
                {densityOptions.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setSelectedDensity(d.id)}
                    className={`w-full text-left px-3 py-2 text-xs rounded transition-colors flex items-center justify-between ${
                      selectedDensity === d.id
                        ? 'bg-[#050505] text-[#D4AF37] font-semibold'
                        : 'text-neutral-600 hover:bg-[#F5F0E6]/50'
                    }`}
                  >
                    <span>{d.label}</span>
                    {selectedDensity === d.id && <Check className="w-3.5 h-3.5 text-[#D4AF37]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Quality Guarantee Box */}
            <div className="p-4 bg-[#F5F0E6]/50 border border-[#E8DFC9] rounded-sm text-xs space-y-2">
              <p className="font-semibold text-[#050505] uppercase tracking-wider text-[11px]">
                The Sommie Luxe Promise
              </p>
              <p className="text-neutral-600 text-[11px] leading-relaxed">
                Every unit is 100% unprocessed raw human hair with zero synthetic fillers. Lifetime knot guarantee with proper care.
              </p>
            </div>
          </aside>

          {/* Product Grid Area */}
          <div className="lg:col-span-3">
            {/* Top Filter & Sort Bar */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-100 text-xs">
              <button
                onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                className="lg:hidden flex items-center gap-2 px-3 py-2 border border-neutral-300 rounded text-neutral-700"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>Filters ({[selectedTexture !== 'all', selectedLace !== 'all', selectedDensity !== 'all'].filter(Boolean).length})</span>
              </button>

              <span className="hidden sm:inline text-neutral-500">
                {filteredProducts.length} Premium Pieces Available
              </span>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-2">
                <span className="text-neutral-500 hidden sm:inline">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3 py-1.5 bg-[#FAF8F5] border border-neutral-300 rounded text-xs text-[#050505] focus:outline-none focus:border-[#C6A15B]"
                >
                  <option value="featured">Featured Royalty</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Products Grid: 3 per row */}
            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-cormorant text-2xl font-bold text-neutral-800">No wigs match your selected criteria</p>
                <p className="text-xs text-neutral-500 mt-2">Try resetting your filters to explore our full royal collection.</p>
                <button
                  onClick={resetFilters}
                  className="btn-luxury-gold mt-6 px-6 py-2.5 font-semibold text-xs tracking-wider uppercase rounded-sm"
                >
                  View All Pieces
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
