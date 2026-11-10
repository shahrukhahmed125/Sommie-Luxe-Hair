import React from 'react';
import { Crown, Sparkles, Scissors, SlidersHorizontal, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Crown,
      title: 'Premium Raw & Virgin Hair',
      subtitle: '100% Single Donor Integrity',
      description: 'Cuticles are strictly intact and unidirectional. Will not mat, tangle, or dry out. Bleaches to 613 platinum blonde effortlessly.'
    },
    {
      icon: Sparkles,
      title: 'Natural-Looking HD Lace',
      subtitle: 'Ultra-Thin Invisible Melt',
      description: 'Engineered from ultra-fine Swiss HD lace that dissolves completely into any melanin complexion under studio lights or sunlight.'
    },
    {
      icon: Scissors,
      title: 'Beautifully Crafted Wigs',
      subtitle: 'Pre-Plucked & Pre-Bleached',
      description: 'Artisanal hand-tied micro knots, gradual density baby hairs, and ergonomic 3D dome caps for seamless glueless security.'
    },
    {
      icon: SlidersHorizontal,
      title: 'Customisable Lengths & Textures',
      subtitle: '14" to 36" & Up to 250% Density',
      description: 'Tailor your crown with bespoke lengths, customizable densities, and versatile textures designed to hold curls effortlessly.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAF7F2] border-y border-[#E8DFC9]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.24em] font-semibold text-[#C6A15B] mb-2">
            THE SOMMIE LUXE STANDARD
          </p>
          <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold text-[#050505] tracking-tight mb-4">
            Why Choose Sommie Luxe Hair
          </h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto" />
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative p-8 bg-[#FDFBF7] border border-[#EBE3D3] rounded-sm transition-all duration-300 hover:border-[#D4AF37] hover:shadow-xl hover:-translate-y-1"
              >
                {/* Refined Gold Icon */}
                <div className="w-14 h-14 rounded-full bg-[#050505] flex items-center justify-center mb-6 border border-[#D4AF37]/50 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-[#D4AF37]" />
                </div>

                {/* Subtitle kicker */}
                <p className="text-[10px] text-[#C6A15B] font-semibold uppercase tracking-[0.18em] mb-1">
                  {pillar.subtitle}
                </p>

                {/* Title */}
                <h3 className="font-playfair text-lg font-bold text-[#050505] mb-3 group-hover:text-[#C6A15B] transition-colors">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
