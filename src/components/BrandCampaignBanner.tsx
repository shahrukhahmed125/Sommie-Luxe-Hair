import React from 'react';
import { ArrowRight, Sparkles, Crown } from 'lucide-react';

interface BrandCampaignBannerProps {
  onExplore: () => void;
}

export const BrandCampaignBanner: React.FC<BrandCampaignBannerProps> = ({ onExplore }) => {
  return (
    <section className="relative bg-[#050505] text-white overflow-hidden py-24 sm:py-32">
      {/* Background Editorial Photography Matching Ethereal Ice Blonde Campaign */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_platinum_ice_ethereal_1794319824644.jpg"
          alt="Sommie Luxe Hair Editorial Campaign - Platinum Ice Blonde Royal Collection"
          className="w-full h-full object-cover object-center brightness-[0.88] contrast-[1.08]"
          referrerPolicy="no-referrer"
        />

        {/* Cinematic Scrims for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent max-w-[850px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            <Crown className="w-4 h-4 text-[#D4AF37]" />
            <span>THE 2026 EDITORIAL CAMPAIGN</span>
          </div>

          <h2 className="font-cormorant text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-6">
            CONFIDENCE <br />
            LOOKS GOOD <br />
            <span className="italic font-normal text-gold-shimmer">ON YOU</span>
          </h2>

          <p className="font-montserrat text-sm sm:text-base text-[#F5F0E6]/90 font-light leading-relaxed mb-8">
            Experience the exquisite beauty of 100% single-donor human hair designed to make every entrance unforgettable. From honey caramel waves and dark espresso curls to champagne ice bone-straight royalty.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onExplore}
              className="btn-luxury-gold px-8 sm:px-10 py-4 font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase rounded-sm flex items-center gap-3 group shadow-xl"
            >
              <span>EXPLORE OUR COLLECTION</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
