import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Toast: React.FC = () => {
  const { toastMessage } = useShop();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slideUp">
      <div className="bg-[#050505] text-[#F5F0E6] px-5 py-3.5 rounded-sm shadow-2xl border border-[#D4AF37]/50 flex items-center gap-3 max-w-md">
        <div className="w-7 h-7 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
        </div>
        <p className="text-xs sm:text-sm font-medium tracking-wide">
          {toastMessage}
        </p>
      </div>
    </div>
  );
};
