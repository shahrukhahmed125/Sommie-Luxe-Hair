import React from 'react';
import { X, Sparkles, Feather, Shield, Heart } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const HairGuideModal: React.FC = () => {
  const { isGuideOpen, setIsGuideOpen } = useShop();

  if (!isGuideOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        className="bg-white w-full max-w-3xl rounded-sm shadow-2xl border border-[#D4AF37]/40 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#050505] text-white p-6 sm:p-8 flex items-center justify-between border-b border-[#D4AF37]/30">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#D4AF37] mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE SOMMIE LUXE CONCIERGE</span>
            </div>
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#F5F0E6]">
              HD Lace & Luxury Hair Guide
            </h2>
          </div>
          <button
            onClick={() => setIsGuideOpen(false)}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto text-xs sm:text-sm text-neutral-700">
          {/* Guide Section 1: HD Lace vs Transparent Lace */}
          <div>
            <h3 className="font-playfair text-lg font-bold text-[#050505] mb-3 flex items-center gap-2">
              <Feather className="w-4 h-4 text-[#C6A15B]" />
              <span>1. Ultra-Thin Swiss HD Lace vs. Standard Transparent Lace</span>
            </h3>
            <p className="text-neutral-600 font-light leading-relaxed mb-4">
              At Sommie Luxe Hair, we use authentic 0.14mm ultra-thin Swiss HD lace. Unlike standard transparent lace which can appear ashy or reflective under bright lights, HD lace is woven with delicate microscopic filaments that physically soften against the epidermis, dissolving into deep rich, caramel, olive, and fair skin tones alike.
            </p>
            <div className="grid grid-cols-2 gap-4 bg-[#F5F0E6]/50 p-4 rounded border border-[#E8DFC9] text-xs">
              <div>
                <p className="font-bold text-[#050505] uppercase tracking-wider mb-1 text-[11px]">Swiss HD Invisible Lace</p>
                <ul className="space-y-1 text-neutral-600">
                  <li>✓ Undetectable melt on all melanin tones</li>
                  <li>✓ Pre-bleached micro single knots</li>
                  <li>✓ Pre-plucked transition hairline</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-neutral-500 uppercase tracking-wider mb-1 text-[11px]">Standard Transparent Lace</p>
                <ul className="space-y-1 text-neutral-500">
                  <li>— Thicker grid borders</li>
                  <li>— Often requires heavy lace tint/powder</li>
                  <li>— Visible demarcation lines</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Guide Section 2: Raw Hair vs Virgin Hair */}
          <div>
            <h3 className="font-playfair text-lg font-bold text-[#050505] mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#C6A15B]" />
              <span>2. Raw Hair vs. Virgin Hair: Understanding Longevity</span>
            </h3>
            <p className="text-neutral-600 font-light leading-relaxed mb-3">
              <strong>Raw Hair:</strong> Sourced directly from single temple donors in Vietnam and Cambodia. It has never undergone chemical, steam, or acid bath processing. It behaves identically to healthy bio hair, holding heat styling and lifting effortlessly to 613 platinum blonde. Longevity: 3–5 years.
            </p>
            <p className="text-neutral-600 font-light leading-relaxed">
              <strong>Virgin Hair:</strong> 100% human hair collected from single or paired donors, steam-textured to achieve uniform deep wave, ocean wave, or spiral curls. Cuticles remain fully intact. Longevity: 2–3 years.
            </p>
          </div>

          {/* Guide Section 3: Cap Sizing */}
          <div>
            <h3 className="font-playfair text-lg font-bold text-[#050505] mb-3 flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#C6A15B]" />
              <span>3. How to Measure Your Wig Cap Size</span>
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-[#E8DFC9] text-xs">
                <thead>
                  <tr className="bg-[#FAF8F5] text-[#050505]">
                    <th className="p-3 border border-[#E8DFC9] font-bold">Size</th>
                    <th className="p-3 border border-[#E8DFC9] font-bold">Circumference</th>
                    <th className="p-3 border border-[#E8DFC9] font-bold">Front to Nape</th>
                    <th className="p-3 border border-[#E8DFC9] font-bold">Recommended For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-[#E8DFC9] font-semibold">Small</td>
                    <td className="p-3 border border-[#E8DFC9]">21" – 21.5"</td>
                    <td className="p-3 border border-[#E8DFC9]">13.5"</td>
                    <td className="p-3 border border-[#E8DFC9]">Petite head size</td>
                  </tr>
                  <tr className="bg-[#F5F0E6]/30">
                    <td className="p-3 border border-[#E8DFC9] font-semibold text-[#C6A15B]">Medium (Standard)</td>
                    <td className="p-3 border border-[#E8DFC9]">22" – 22.5"</td>
                    <td className="p-3 border border-[#E8DFC9]">14.5"</td>
                    <td className="p-3 border border-[#E8DFC9]">Fits 95% of clients (Adjustable Band)</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-[#E8DFC9] font-semibold">Large</td>
                    <td className="p-3 border border-[#E8DFC9]">23" – 23.5"</td>
                    <td className="p-3 border border-[#E8DFC9]">15.5"</td>
                    <td className="p-3 border border-[#E8DFC9]">Extra thick braided foundation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-[#FAF8F5] border-t border-[#E8DFC9] flex justify-end">
          <button
            onClick={() => setIsGuideOpen(false)}
            className="px-6 py-2.5 bg-[#050505] text-[#D4AF37] text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-neutral-900 transition-colors"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
