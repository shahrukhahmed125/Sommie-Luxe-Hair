import React from 'react';
import { ArrowRight, Sparkles, Check } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const AboutBrand: React.FC = () => {
  const { setIsStoryModalOpen } = useShop();

  return (
    <section className="py-20 sm:py-28 bg-[#FAF7F2]" id="about">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Layout Editorial Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Dedicated Founder Portrait in Mayfair Atelier */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-sm aspect-[4/5] bg-neutral-900 shadow-2xl group">
              <img
                src="/src/assets/images/editorial_founder_about_1794225327995.jpg"
                alt="Sommie Luxe Hair Founder & Atelier - Inspecting pristine raw human hair bundles"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

              {/* Gold Framing Detailing */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#D4AF37]/50 pointer-events-none hidden sm:block -z-10" />

              {/* Floating Atelier Quote */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 bg-black/85 backdrop-blur-md border border-[#D4AF37]/40 text-white rounded-sm shadow-xl">
                <p className="font-cormorant italic text-sm sm:text-base text-[#F5F0E6] leading-snug">
                  "Every raw bundle is personally inspected for cuticle alignment and healthy luster before reaching your crown."
                </p>
                <p className="text-[10px] text-[#D4AF37] tracking-widest uppercase font-semibold mt-2">
                  — Sommie, Founder & Creative Director
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy with Cormorant Garamond */}
          <div className="lg:pl-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] font-semibold text-[#C6A15B] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>THE SOMMIE LUXE PHILOSOPHY</span>
            </div>

            <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold text-[#050505] tracking-tight mb-6 leading-[1.08]">
              THE ART OF <br />
              <span className="italic font-normal text-[#C6A15B]">LUXURY</span> HAIR
            </h2>

            <p className="font-montserrat text-sm sm:text-base text-neutral-700 leading-relaxed font-light mb-6">
              At Sommie Luxe Hair, we believe beautiful hair is more than a style. It is an expression of confidence, individuality and elegance.
            </p>

            <p className="font-montserrat text-xs sm:text-sm text-neutral-600 leading-relaxed font-light mb-8">
              Founded to serve discerning women across London, Lagos, New York, and internationally, we source strictly ethical, single-donor raw human hair. Every wig is treated as a bespoke haute-couture piece—pre-plucked by master wig artisans, bleached with precision micro-knots, and constructed on featherlight HD Swiss lace.
            </p>

            {/* Editorial Features Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10 text-xs text-neutral-800">
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>100% Unprocessed Raw Human Hair</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Zero Synthetic Fillers Guaranteed</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Undetectable Melt on All Melanin Shades</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Discreet Luxury Packaging & Silk Bags</span>
              </div>
            </div>

            {/* CTA with Button Luxury Class */}
            <div>
              <button
                onClick={() => setIsStoryModalOpen(true)}
                className="btn-luxury-black px-8 sm:px-10 py-4 font-semibold text-xs tracking-[0.18em] uppercase flex items-center gap-3 group rounded-sm"
              >
                <span>OUR STORY</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#D4AF37]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
