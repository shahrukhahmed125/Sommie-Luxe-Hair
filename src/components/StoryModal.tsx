import React from 'react';
import { X, Sparkles, Crown } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const StoryModal: React.FC = () => {
  const { isStoryModalOpen, setIsStoryModalOpen } = useShop();

  if (!isStoryModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        className="bg-white w-full max-w-2xl rounded-sm shadow-2xl border border-[#D4AF37]/40 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-[#050505] text-white p-8 sm:p-10 border-b border-[#D4AF37]/30 text-center">
          <button
            onClick={() => setIsStoryModalOpen(false)}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <img
            src="/assets/aistudio/image__11__86896f45.png"
            alt="Sommie Luxe Hair Logo"
            className="h-16 mx-auto mb-4 object-contain"
            referrerPolicy="no-referrer"
          />

          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-2">
            The Sommie Luxe Legacy
          </h2>
          <p className="text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.2em]">
            Luxury Hair. Confidence. Elegance.
          </p>
        </div>

        <div className="p-6 sm:p-8 space-y-4 text-xs sm:text-sm text-neutral-700 leading-relaxed max-h-[60vh] overflow-y-auto font-light">
          <p>
            Sommie Luxe Hair was born from a singular conviction: that Black women across London, Lagos, New York, and every corner of the world deserve nothing less than uncompromising hair royalty.
          </p>
          <p>
            For years, the international wig market was saturated with synthetic blends, acid-stripped hair fibers, and clumsy lace that required endless hours of tinting and customization. We set out to redefine this experience.
          </p>
          <p>
            Every Sommie Luxe piece begins at source. We partner exclusively with ethical temple collectors in Southeast Asia, selecting only raw bundles cut directly from single donors. The cuticle alignment is preserved flawlessly, ensuring hair that never mats, tangles, or sheds.
          </p>
          <p className="font-serif italic text-base text-[#050505] py-2 border-y border-[#D4AF37]/30 text-center">
            "When a woman wears hair that feels authentically sublime, her posture transforms. Her confidence becomes undeniable."
          </p>
          <p>
            From our signature bone-straight raw hair to our hydrated deep wave units, every piece is inspected, pre-plucked, and bleached by hand to meet our exacting standards.
          </p>
        </div>

        <div className="p-4 sm:p-6 bg-[#FAF8F5] border-t border-[#E8DFC9] flex justify-end">
          <button
            onClick={() => setIsStoryModalOpen(false)}
            className="px-6 py-2.5 bg-[#050505] text-[#D4AF37] text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-neutral-900 transition-colors"
          >
            Explore Collections
          </button>
        </div>
      </div>
    </div>
  );
};
