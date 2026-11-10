import React from 'react';
import { useShop } from '../context/ShopContext';
import { Sparkles, Feather, Shield, Ruler, Droplets, CheckCircle, ArrowRight } from 'lucide-react';

export const GuidePage: React.FC = () => {
  const { navigateTo } = useShop();

  return (
    <div className="py-12 sm:py-20 bg-[#FFFFFF]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="text-xs text-neutral-400 mb-8 flex items-center gap-2">
          <button onClick={() => navigateTo('home')} className="hover:text-[#050505]">
            Home
          </button>
          <span>/</span>
          <span className="text-[#050505] font-semibold">HD Lace & Care Guide</span>
        </div>

        {/* Hero */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#C6A15B] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>THE MASTER CONCIERGE EDUCATION</span>
          </div>
          <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold text-[#050505] tracking-tight mb-4">
            The Ultimate Wig & Lace Guide
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
            Everything you need to know about undetectable Swiss HD lace, raw hair longevity, and measuring your custom cap.
          </p>
        </div>

        {/* Section 1: HD Lace vs Transparent Lace Comparison */}
        <div className="mb-20">
          <div className="max-w-xl mx-auto text-center mb-8">
            <h2 className="font-cormorant text-3xl font-bold text-[#050505] mb-2">
              1. Swiss HD Lace vs. Transparent Lace
            </h2>
            <p className="text-xs text-neutral-500 font-light">
              Why our 0.14mm ultra-fine HD lace creates an undetectable melt without heavy foundation powders.
            </p>
          </div>

          <div className="overflow-x-auto border border-[#E8DFC9] rounded-sm shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#FAF8F5] text-[#050505] border-b border-[#E8DFC9]">
                  <th className="p-4 font-bold uppercase tracking-wider">Features</th>
                  <th className="p-4 font-bold text-[#C6A15B] uppercase tracking-wider bg-[#F5F0E6]/50">
                    Sommie Luxe Swiss HD Lace
                  </th>
                  <th className="p-4 font-bold text-neutral-500 uppercase tracking-wider">
                    Standard Market Transparent Lace
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                <tr>
                  <td className="p-4 font-semibold text-neutral-900">Lace Thickness</td>
                  <td className="p-4 bg-[#F5F0E6]/20 font-bold text-[#050505]">0.14mm (Ultra-Thin Featherweight)</td>
                  <td className="p-4 text-neutral-500">0.28mm – 0.35mm (Thick & Stiff)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-neutral-900">Melt Visibility</td>
                  <td className="p-4 bg-[#F5F0E6]/20 font-bold text-emerald-800">
                    100% Invisible on all Melanin Tones
                  </td>
                  <td className="p-4 text-neutral-500">Often appears ashy or gray on dark skin</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-neutral-900">Knot Bleaching</td>
                  <td className="p-4 bg-[#F5F0E6]/20 font-bold text-[#050505]">
                    Micro Single-Knots Pre-Bleached
                  </td>
                  <td className="p-4 text-neutral-500">Large double knots requiring heavy DIY bleach</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-neutral-900">Breathability</td>
                  <td className="p-4 bg-[#F5F0E6]/20 font-bold text-[#050505]">
                    Maximum airflow, ideal for warm climates
                  </td>
                  <td className="p-4 text-neutral-500">Traps heat, prone to scalp sweating</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 2: How to Measure Cap Size */}
        <div className="mb-20 bg-[#FAF8F5] p-8 sm:p-12 rounded-sm border border-[#E8DFC9]">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h2 className="font-cormorant text-3xl font-bold text-[#050505] mb-2">
              2. How to Measure Your Head Circumference
            </h2>
            <p className="text-xs text-neutral-600 font-light">
              Use a flexible cloth measuring tape. Flatten your natural hair with flat cornrows or a wig cap for precise accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-sm border border-neutral-200">
              <span className="text-xs uppercase font-bold text-[#C6A15B] tracking-wider block mb-1">
                STEP 01: CIRCUMFERENCE
              </span>
              <h3 className="font-cormorant text-xl font-bold text-[#050505] mb-2">Around the Head</h3>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Place the tape flat against the front hairline, pass it behind both ears, down across the nape of the neck, and back to the starting point.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm border border-neutral-200">
              <span className="text-xs uppercase font-bold text-[#C6A15B] tracking-wider block mb-1">
                STEP 02: FRONT TO NAPE
              </span>
              <h3 className="font-cormorant text-xl font-bold text-[#050505] mb-2">Forehead to Back</h3>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Measure from the center of the front hairline directly over the crown of the head to the nape of the neck where hair growth stops.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm border border-neutral-200">
              <span className="text-xs uppercase font-bold text-[#C6A15B] tracking-wider block mb-1">
                STEP 03: EAR TO EAR
              </span>
              <h3 className="font-cormorant text-xl font-bold text-[#050505] mb-2">Across Crown</h3>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Place tape at the top of one ear, run it directly across the top point of the head, down to the top of the opposite ear.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Care Routine */}
        <div className="max-w-3xl mx-auto space-y-6 text-xs sm:text-sm text-neutral-700 font-light leading-relaxed mb-16">
          <h2 className="font-cormorant text-3xl font-bold text-[#050505] text-center mb-6">
            3. The 3-Step Raw Hair Longevity Routine
          </h2>

          <div className="p-6 bg-white border border-[#E8DFC9] rounded-sm space-y-2">
            <h4 className="font-cormorant text-xl font-bold text-[#050505]">Step 1: Hydrating Shampoo & Conditioning</h4>
            <p className="text-neutral-600">
              Always use lukewarm water. Wash with sulfate-free shampoo in a downward motion from roots to tips. Never bunch or scrub the hair vigorously. Follow with a rich hydrating conditioner, leaving it for 15 minutes before rinsing.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#E8DFC9] rounded-sm space-y-2">
            <h4 className="font-cormorant text-xl font-bold text-[#050505]">Step 2: Air Drying & Serum Sealing</h4>
            <p className="text-neutral-600">
              Gently squeeze excess water with a microfiber towel. Apply 2-3 drops of lightweight Moroccan argan serum to lock in moisture, then allow the wig to air dry on a ventilated mannequin stand.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#E8DFC9] rounded-sm space-y-2">
            <h4 className="font-cormorant text-xl font-bold text-[#050505]">Step 3: Bedtime Protection</h4>
            <p className="text-neutral-600">
              If sleeping in your glueless unit, braid into two soft plaits and wrap your hairline with our complimentary Sommie Luxe silk melting band. Wear our 100% mulberry satin bonnet to prevent friction.
            </p>
          </div>
        </div>

        {/* CTA to Shop */}
        <div className="text-center">
          <button
            onClick={() => navigateTo('shop', { category: 'all' })}
            className="btn-luxury-gold px-10 py-4 font-semibold text-xs tracking-widest uppercase rounded-sm inline-flex items-center gap-3"
          >
            <span>Explore Custom Fitted Wigs</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
