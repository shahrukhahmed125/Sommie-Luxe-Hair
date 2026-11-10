import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        const increment = Math.floor(Math.random() * 18) + 12;
        return Math.min(100, prev + increment);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center p-6 transition-all duration-700 ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Soft Glow */}
      <div className="absolute w-96 h-96 rounded-full bg-radial from-[#D4AF37]/15 via-transparent to-transparent pointer-events-none animate-goldPulse" />

      {/* Official Brand Logo */}
      <div className="relative mb-8 text-center animate-fadeIn">
        <div className="relative inline-block">
          <img
            src="/assets/aistudio/image__11__86896f45.png"
            alt="Sommie Luxe Hair Logo"
            className="h-28 sm:h-32 w-auto object-contain drop-shadow-[0_0_25px_rgba(212,175,55,0.35)]"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Elegant Progress Line */}
      <div className="w-64 sm:w-80 max-w-full space-y-3 relative z-10">
        <div className="w-full bg-neutral-900 h-[2px] rounded-full overflow-hidden border border-white/5">
          <div
            className="h-full bg-gradient-to-r from-[#C6A15B] via-[#D4AF37] to-[#FFF5D6] transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-[#C6A15B]">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#D4AF37] animate-spin" />
            <span>Curating Royalty</span>
          </span>
          <span className="font-mono font-bold tabular-nums text-white">{progress}%</span>
        </div>
      </div>

      {/* Tagline */}
      <div className="mt-8 text-center">
        <p className="font-cormorant italic text-sm sm:text-base text-[#F5F0E6]/90 tracking-wide">
          Luxury Hair · Confidence · Elegance
        </p>
        <p className="text-[10px] text-neutral-400 uppercase tracking-[0.3em] mt-1 font-montserrat">
          London · Lagos · Worldwide
        </p>
      </div>

      {/* Skip Button */}
      <button
        onClick={() => {
          setIsFadingOut(true);
          setTimeout(onComplete, 400);
        }}
        className="absolute bottom-8 text-[11px] uppercase tracking-widest text-neutral-400 hover:text-[#D4AF37] transition-colors"
      >
        Skip Intro →
      </button>
    </div>
  );
};
