import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Feather, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSliderProps {
  onShopNow: () => void;
  onExploreCampaign: () => void;
}

interface Slide {
  id: string;
  image: string;
  kicker: string;
  headlineMain: string;
  headlineAccent: string;
  headlineEnd: string;
  subheading: string;
  primaryCta: string;
  secondaryCta: string;
  badge: string;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onShopNow, onExploreCampaign }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTrustIndex, setActiveTrustIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides: Slide[] = [
    {
      id: 'slide-1',
      image: '/src/assets/images/hero_blonde_honey_silk_1794319804320.jpg',
      kicker: 'HONEY CARAMEL BLONDE · 2026 CAMPAIGN',
      headlineMain: 'WHERE LUXURY',
      headlineAccent: 'MEETS',
      headlineEnd: 'BEAUTY',
      subheading: 'Discover premium single-donor human hair crafted for confidence, elegance and timeless beauty. Hand-selected raw bundles, melted HD invisible Swiss lace, and glueless royalty.',
      primaryCta: 'SHOP BLONDE WAVES',
      secondaryCta: 'EXPLORE CAMPAIGN',
      badge: 'SPRING 2026 SIGNATURE COLLECTION'
    },
    {
      id: 'slide-2',
      image: '/src/assets/images/hero_platinum_ice_ethereal_1794319824644.jpg',
      kicker: 'HAUTE ICE BLONDE · SILK GLASS FINISH',
      headlineMain: 'PURE RAW',
      headlineAccent: 'PLATINUM ICE',
      headlineEnd: 'STRAIGHT',
      subheading: 'Ultra-luxurious 100% cuticle-aligned virgin raw hair with razor-sharp glass luster. Real 0.14mm invisible Swiss HD lace that disappears effortlessly on all skin complexions.',
      primaryCta: 'SHOP 30" ICE UNITS',
      secondaryCta: 'VIEW GLUELESS',
      badge: '100% CUTICLE ALIGNED RAW VIRGIN'
    },
    {
      id: 'slide-3',
      image: '/src/assets/images/model_luxury_brunette_glam_1794319785389.jpg',
      kicker: 'MILAN HAUTE ESPRESSO · 250% RED-CARPET DENSITY',
      headlineMain: 'RICH CHOCOLATE',
      headlineAccent: 'BRUNETTE',
      headlineEnd: 'GLAMOUR',
      subheading: 'Captivating dark mocha espresso luster with maximum Hollywood volume. Pure single-donor raw hair engineered for unforgettable presence.',
      primaryCta: 'SHOP BRUNETTE WIGS',
      secondaryCta: 'CUSTOMIZE DENSITY',
      badge: '250% RED-CARPET DENSITY'
    },
    {
      id: 'slide-4',
      image: '/src/assets/images/model_luxury_redhead_glam_1794319766874.jpg',
      kicker: 'COUTURE COPPER AUBURN · VIBRANT REDHEAD',
      headlineMain: 'VENETIAN',
      headlineAccent: 'COPPER AUBURN',
      headlineEnd: 'ROYALTY',
      subheading: 'Vibrant natural ginger copper tones saturated with warmth and effortless bounce. Undetectable Swiss lace that melts flush with porcelain skin.',
      primaryCta: 'SHOP REDHEAD COLLECTION',
      secondaryCta: 'VIEW S-WAVE UNITS',
      badge: 'EXCLUSIVE SALON COLORING'
    }
  ];

  const trustPoints = [
    {
      id: 'p1',
      icon: ShieldCheck,
      title: '100% Raw Virgin Hair',
      desc: 'Pure single donor temple bundles, unidirectional cuticles'
    },
    {
      id: 'p2',
      icon: Feather,
      title: 'HD Invisible Lace',
      desc: '0.14mm ultra-thin Swiss melt on all complexions'
    },
    {
      id: 'p3',
      icon: Sparkles,
      title: 'Pre-Bleached Knots',
      desc: 'Artisanal micro-knots for natural scalp illusion'
    },
    {
      id: 'p4',
      icon: Clock,
      title: 'Express Delivery',
      desc: 'Next-day priority shipping across UK & Lagos, Nigeria'
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Auto-advance hero slides every 6 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const slideTimer = setInterval(nextSlide, 6000);
    return () => clearInterval(slideTimer);
  }, [isPaused, nextSlide]);

  // Auto-cycle through trust points every 3.5 seconds
  useEffect(() => {
    const trustTimer = setInterval(() => {
      setActiveTrustIndex((prev) => (prev + 1) % trustPoints.length);
    }, 3500);
    return () => clearInterval(trustTimer);
  }, [trustPoints.length]);

  const activeSlideData = slides[currentSlide];

  return (
    <section
      className="relative bg-[#050505] text-white overflow-hidden"
      id="hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Full-Width Luxury Campaign Banner Container */}
      <div className="relative min-h-[660px] lg:min-h-[760px] xl:min-h-[820px] w-full flex items-center">
        {/* Dynamic Multi-Slide Backgrounds */}
        {slides.map((slide, idx) => {
          const isActive = currentSlide === idx;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.headlineMain}
                className={`w-full h-full object-cover object-center brightness-[0.88] contrast-[1.05] transition-transform duration-[7000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
                referrerPolicy="no-referrer"
              />

              {/* Sophisticated Black and Warm Golden Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/85 to-transparent z-10 max-w-[980px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/40 z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-[#D4AF37]/15 via-transparent to-transparent pointer-events-none z-10 animate-goldPulse" />
            </div>
          );
        })}

        {/* Content Container (Spacious & Refined) */}
        <div className="relative z-20 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 w-full py-20 lg:py-28">
          <div className="max-w-2xl">
            {/* Tagline Kicker */}
            <div className="inline-flex items-center gap-2 mb-4 text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase">
              <span className="w-8 h-[1px] bg-[#D4AF37]" />
              <span>{activeSlideData.kicker}</span>
            </div>

            {/* Headline with High-Fashion Cormorant Garamond */}
            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-[1.02] mb-6">
              {activeSlideData.headlineMain} <br />
              <span className="italic font-normal text-gold-shimmer">{activeSlideData.headlineAccent}</span>{' '}
              {activeSlideData.headlineEnd}
            </h1>

            {/* Subheading */}
            <p className="font-montserrat text-sm sm:text-base lg:text-lg text-[#F5F0E6]/90 font-light leading-relaxed mb-8 max-w-xl">
              {activeSlideData.subheading}
            </p>

            {/* CTAs with Luxury Light Sweep Button Animation */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              <button
                onClick={onShopNow}
                className="btn-luxury-gold px-8 sm:px-10 py-4 font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase flex items-center gap-3 group rounded-sm shadow-xl"
              >
                <span>{activeSlideData.primaryCta}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreCampaign}
                className="btn-luxury-black px-8 sm:px-9 py-4 font-medium text-xs sm:text-sm tracking-[0.18em] uppercase rounded-sm border border-white/20 hover:border-[#D4AF37]"
              >
                {activeSlideData.secondaryCta}
              </button>
            </div>

            {/* Origin & Royal Heritage Details */}
            <div className="mt-12 flex flex-wrap items-center gap-6 text-xs text-[#F5F0E6]/75">
              <div className="flex items-center gap-2">
                <span className="text-[#D4AF37] font-serif text-base">✦</span>
                <span>London Mayfair · Beverly Hills · Lagos · Worldwide</span>
              </div>
              <span className="hidden sm:inline text-white/20">|</span>
              <div className="flex items-center gap-2">
                <span className="text-[#D4AF37] font-serif text-base">✦</span>
                <span>Ethically Sourced Single Donor Raw Hair</span>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Controls (Prev / Next Chevrons) */}
        <div className="absolute right-6 sm:right-10 bottom-24 z-30 flex items-center gap-3">
          <button
            onClick={prevSlide}
            className="w-11 h-11 rounded-full bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all hover:scale-105"
            aria-label="Previous Campaign Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="text-xs text-white/70 font-mono tracking-widest px-2">
            0{currentSlide + 1} / 0{slides.length}
          </div>
          <button
            onClick={nextSlide}
            className="w-11 h-11 rounded-full bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all hover:scale-105"
            aria-label="Next Campaign Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Indicator Dots Bottom */}
        <div className="absolute left-6 sm:left-10 lg:left-16 bottom-24 z-30 flex items-center gap-2.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                currentSlide === i ? 'w-10 bg-[#D4AF37]' : 'w-2 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Auto-Cycling Trust Highlight Strip Below Banner */}
      <div className="border-t border-[#D4AF37]/30 bg-[#080808] text-[#F5F0E6] py-5 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {trustPoints.map((pt, idx) => {
              const Icon = pt.icon;
              const isActive = activeTrustIndex === idx;

              return (
                <div
                  key={pt.id}
                  onClick={() => setActiveTrustIndex(idx)}
                  className={`cursor-pointer p-3 sm:p-4 rounded-sm transition-all duration-500 relative flex items-center gap-3.5 border ${
                    isActive
                      ? 'bg-[#141414] border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.25)] translate-y-[-2px]'
                      : 'bg-transparent border-white/5 hover:border-white/20 opacity-70 hover:opacity-100'
                  }`}
                >
                  {/* Active Indicator Top Line */}
                  {isActive && (
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#FFF5D6]" />
                  )}

                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isActive
                        ? 'bg-[#D4AF37] text-black scale-110 shadow-lg'
                        : 'bg-white/10 text-[#D4AF37]'
                    }`}
                  >
                    <Icon className="w-4 h-4 stroke-[2.2]" />
                  </div>

                  <div className="min-w-0">
                    <p className={`font-semibold uppercase tracking-wider text-xs transition-colors ${
                      isActive ? 'text-[#D4AF37]' : 'text-white'
                    }`}>
                      {pt.title}
                    </p>
                    <p className="text-[11px] text-neutral-400 font-light truncate">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Progress dots indicating auto slide on mobile */}
          <div className="flex items-center justify-center gap-2 mt-4 lg:hidden">
            {trustPoints.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTrustIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeTrustIndex === i ? 'w-6 bg-[#D4AF37]' : 'w-2 bg-white/20'
                }`}
                aria-label={`Trust point ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
