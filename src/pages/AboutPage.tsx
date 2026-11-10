import React from 'react';
import { useShop } from '../context/ShopContext';
import { Sparkles, Crown, Check, ArrowRight, ShieldCheck, MapPin, Award } from 'lucide-react';

export const AboutPage: React.FC = () => {
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
          <span className="text-[#050505] font-semibold">About The Brand</span>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeIn">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#C6A15B] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>HERITAGE, PASSION & ROYALTY</span>
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          </div>
          <h1 className="font-cormorant text-4xl sm:text-6xl lg:text-7xl font-bold text-[#050505] tracking-tight leading-[1.05] mb-6">
            The Sommie Luxe Legacy
          </h1>
          <p className="font-montserrat text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
            Crafted for Black women across London, Lagos, New York, and internationally who demand nothing less than raw human hair perfection.
          </p>
        </div>

        {/* Big Editorial Image with Ken Burns breathing animation */}
        <div className="relative aspect-[16/7] w-full rounded-sm overflow-hidden mb-20 shadow-2xl bg-neutral-900 group">
          <img
            src="/src/assets/images/editorial_founder_about_1794225327995.jpg"
            alt="Sommie Luxe Hair Atelier - Inspecting Raw Human Hair"
            className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white max-w-2xl">
            <p className="text-[10px] text-[#D4AF37] font-semibold uppercase tracking-[0.2em] mb-1">
              THE ARTISAN PROCESS
            </p>
            <p className="font-cormorant text-2xl sm:text-3xl font-bold">
              "We believe hair is sacred. It is an aura of authority and timeless beauty."
            </p>
          </div>
        </div>

        {/* 3 Pillar Sourcing Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="p-8 bg-[#FAF8F5] border border-[#E8DFC9] rounded-sm">
            <div className="w-12 h-12 rounded-full bg-[#050505] flex items-center justify-center text-[#D4AF37] mb-6">
              <Crown className="w-6 h-6" />
            </div>
            <h3 className="font-cormorant text-2xl font-bold text-[#050505] mb-2">
              Single-Donor Purity
            </h3>
            <p className="text-xs text-neutral-600 font-light leading-relaxed">
              We reject commercial multi-donor blends and synthetic mixing. Every bundle is harvested directly from individual donors in Southeast Asia, ensuring uniform cuticle orientation that never tangles or sheds.
            </p>
          </div>

          <div className="p-8 bg-[#FAF8F5] border border-[#E8DFC9] rounded-sm">
            <div className="w-12 h-12 rounded-full bg-[#050505] flex items-center justify-center text-[#D4AF37] mb-6">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-cormorant text-2xl font-bold text-[#050505] mb-2">
              Undetectable HD Lace
            </h3>
            <p className="text-xs text-neutral-600 font-light leading-relaxed">
              Our 0.14mm ultra-fine Swiss HD lace is meticulously knotted by hand with single micro-knots. The lace physically melts into caramel, dark, olive, and fair skin tones without tint powders.
            </p>
          </div>

          <div className="p-8 bg-[#FAF8F5] border border-[#E8DFC9] rounded-sm">
            <div className="w-12 h-12 rounded-full bg-[#050505] flex items-center justify-center text-[#D4AF37] mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-cormorant text-2xl font-bold text-[#050505] mb-2">
              Longevity Guarantee
            </h3>
            <p className="text-xs text-neutral-600 font-light leading-relaxed">
              Because cuticles remain unstripped by harsh acid baths, our raw hair retains natural elasticity and bounce for 3 to 5 years with standard maintenance, bleaching up to 613 platinum blonde effortlessly.
            </p>
          </div>
        </div>

        {/* Global Showrooms & Appointment Strip */}
        <div className="bg-[#050505] text-white p-8 sm:p-14 rounded-sm border border-[#D4AF37]/30 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4AF37] block mb-2">
              PRIVATE SALON CONSULTATIONS
            </span>
            <h2 className="font-cormorant text-3xl sm:text-4xl font-bold mb-4">
              Visit Our Private VIP Ateliers
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6">
              Experience the touch of raw human hair in person. Book a bespoke wig fitting, hairline customization, or private color consultation with our master stylists.
            </p>

            <div className="space-y-3 text-xs text-neutral-300">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span><strong>London Flagship:</strong> 14 Berkeley Street, Mayfair, London W1J 8DX</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span><strong>Lagos Suite:</strong> 22 Admiralty Way, Lekki Phase 1, Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <button
              onClick={() => navigateTo('contact')}
              className="btn-luxury-gold px-8 py-4 font-semibold text-xs tracking-wider uppercase rounded-sm whitespace-nowrap"
            >
              Book VIP Consultation
            </button>
            <button
              onClick={() => navigateTo('shop', { category: 'all' })}
              className="btn-luxury-black px-8 py-4 font-medium text-xs tracking-wider uppercase rounded-sm whitespace-nowrap"
            >
              Explore Royal Pieces
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
