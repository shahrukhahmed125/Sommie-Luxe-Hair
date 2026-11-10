import React, { useState } from 'react';
import { X, Search, ArrowRight, Star } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, formatPrice, setQuickViewProduct } = useShop();
  const [query, setQuery] = useState('');

  if (!isSearchOpen) return null;

  const popularKeywords = [
    'Bone Straight 30"',
    'Glueless Wear & Go',
    'Deep Wave Curls',
    'HD Invisible Lace',
    'Bouncy Body Curls',
    '250% Density'
  ];

  const searchResults = query.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.collection.toLowerCase().includes(query.toLowerCase()) ||
          p.hairTexture.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 p-4 animate-fadeIn">
      <div
        className="bg-white w-full max-w-2xl rounded-sm shadow-2xl border border-[#D4AF37]/30 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-neutral-100 flex items-center gap-3 bg-[#FAF8F5]">
          <Search className="w-5 h-5 text-[#C6A15B] shrink-0" />
          <input
            type="text"
            placeholder="Search wigs, textures, lace types (e.g. Bone Straight, Glueless)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm sm:text-base text-[#050505] placeholder-neutral-400 focus:outline-none"
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1.5 text-neutral-400 hover:text-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Popular Searches */}
        {!query && (
          <div className="p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#C6A15B] mb-3">
              Trending Searches
            </p>
            <div className="flex flex-wrap gap-2">
              {popularKeywords.map((kw) => (
                <button
                  key={kw}
                  onClick={() => setQuery(kw)}
                  className="px-3 py-1.5 bg-[#F5F0E6] text-[#050505] hover:bg-[#050505] hover:text-[#D4AF37] text-xs rounded-sm transition-colors"
                >
                  {kw}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Live Search Results */}
        {query && (
          <div className="max-h-[60vh] overflow-y-auto divide-y divide-neutral-100 p-4">
            {searchResults.length === 0 ? (
              <div className="py-12 text-center text-neutral-500">
                <p className="font-playfair text-base font-bold text-neutral-800">No results found for "{query}"</p>
                <p className="text-xs mt-1">Try searching for "Straight", "Deep Wave", or "HD Lace".</p>
              </div>
            ) : (
              searchResults.map((p) => (
                <div
                  key={p.id}
                  onClick={() => {
                    setQuickViewProduct(p);
                    setIsSearchOpen(false);
                  }}
                  className="py-3 px-2 flex items-center gap-4 hover:bg-[#F5F0E6]/50 rounded cursor-pointer transition-colors"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-14 h-16 object-cover object-top rounded-sm bg-neutral-900 shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-[#C6A15B] uppercase font-semibold">{p.collection}</p>
                    <h4 className="font-playfair font-bold text-sm text-[#050505] truncate">{p.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-bold text-[#050505] tabular-nums">{formatPrice(p)}</span>
                      <div className="flex items-center text-[#D4AF37] text-[10px]">
                        <Star className="w-3 h-3 fill-[#D4AF37]" />
                        <span>{p.rating}</span>
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-neutral-400 shrink-0" />
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
