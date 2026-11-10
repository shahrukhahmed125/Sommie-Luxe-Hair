import React from 'react';
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Footer: React.FC = () => {
  const { navigateTo } = useShop();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-[#F5F0E6] pt-16 sm:pt-20 pb-12 border-t border-[#D4AF37]/30">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          {/* Column 1 & 2: Brand Lockup & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <button onClick={() => navigateTo('home')} className="flex items-center gap-3 text-left">
              <img
                src="/assets/aistudio/image__11__86896f45.png"
                alt="Sommie Luxe Hair - Official Logo"
                className="h-16 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </button>

            <p className="font-cormorant text-xl text-[#D4AF37] italic font-normal tracking-wide">
              Luxury Hair. Confidence. Elegance.
            </p>

            <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-sm">
              Sommie Luxe Hair is the international pinnacle for 100% raw and virgin human hair wigs, HD invisible melted lace frontals, and tailored temple extensions. Serving discerning queens across London, Lagos, and worldwide.
            </p>

            {/* Global Concierge Contact */}
            <div className="pt-2 space-y-2 text-xs text-neutral-300">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>Showrooms: Mayfair London · Lekki Phase 1 Lagos</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>concierge@sommieluxehair.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>UK: +44 20 7946 0912 · NG: +234 809 589 3300</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-3 text-neutral-400">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 3: Shop Categories */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4AF37] mb-5">
              Shop Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              <li>
                <button
                  onClick={() => navigateTo('shop', { category: 'straight' })}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  Bone Straight Raw Wigs
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('shop', { category: 'deep-wave' })}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  Deep Wave & Wet Curls
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('shop', { category: 'bouncy-curls' })}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  Voluminous Bouncy Curls
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('shop', { category: 'ocean-wave' })}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  Ocean Wave Resort Units
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('shop', { category: 'all' })}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  Glueless Wear & Go™
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('shop', { category: 'all' })}
                  className="hover:text-[#D4AF37] transition-colors text-left text-[#C6A15B]"
                >
                  View All 12 Royal Wigs →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Customer Care & Guides */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4AF37] mb-5">
              Client Concierge
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              <li>
                <button
                  onClick={() => navigateTo('guide')}
                  className="hover:text-[#D4AF37] transition-colors text-left flex items-center gap-1.5"
                >
                  <span>HD Lace & Sizing Guide</span>
                  <span className="text-[10px] text-[#D4AF37]">✦</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('contact')}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  Book Mayfair / Lekki Fitting
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('guide')}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  Hair Longevity & Maintenance
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('wishlist')}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  Your Saved Wishlist
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('contact')}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  Global Concierge Support
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Brand Ethos & VIP */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4AF37] mb-5">
              The Brand
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  Our Heritage & Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  Single-Donor Raw Sourcing
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('contact')}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  Wholesale & Salon Inquiries
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('contact')}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  VIP Membership Club
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Payment Placeholders & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-400">
          <div>
            <p>© 2026 Sommie Luxe Hair Ltd. All Rights Reserved. Luxury Hair. Confidence. Elegance.</p>
          </div>

          <div className="flex items-center flex-wrap gap-2 text-[10px] text-neutral-300">
            <span className="px-2 py-1 bg-white/5 border border-white/10 rounded">VISA</span>
            <span className="px-2 py-1 bg-white/5 border border-white/10 rounded">MASTERCARD</span>
            <span className="px-2 py-1 bg-white/5 border border-white/10 rounded">APPLE PAY</span>
            <span className="px-2 py-1 bg-white/5 border border-white/10 rounded">KLARNA</span>
            <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[#D4AF37]">PAYSTACK (NG)</span>
            <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[#D4AF37]">FLUTTERWAVE</span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#C6A15B] hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
