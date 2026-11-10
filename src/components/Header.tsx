import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X, ChevronDown, Sparkles, ArrowRight } from 'lucide-react';
import { useShop, AppPage } from '../context/ShopContext';

export const Header: React.FC = () => {
  const {
    cartCount,
    wishlist,
    setIsCartOpen,
    setIsSearchOpen,
    currentPage,
    navigateTo
  } = useShop();

  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accountModalOpen, setAccountModalOpen] = useState(false);

  const navLinks: { label: string; page: AppPage; category?: string; megaMenu?: string }[] = [
    { label: 'HOME', page: 'home' },
    { label: 'SHOP ALL', page: 'shop', category: 'all', megaMenu: 'shop' },
    { label: 'STRAIGHT HAIR', page: 'shop', category: 'straight', megaMenu: 'straight' },
    { label: 'DEEP WAVE', page: 'shop', category: 'deep-wave', megaMenu: 'deep-wave' },
    { label: 'BOUNCY CURLS', page: 'shop', category: 'bouncy-curls', megaMenu: 'bouncy-curls' },
    { label: 'OCEAN WAVE', page: 'shop', category: 'ocean-wave', megaMenu: 'ocean-wave' },
    { label: 'HD LACE GUIDE', page: 'guide' },
    { label: 'ABOUT US', page: 'about' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FFFFFF] border-b border-[#F5F0E6] shadow-sm">
      {/* Main Bar */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24 gap-4">
          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#050505] hover:text-[#C6A15B] transition-colors"
            aria-label="Open navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo Zone (Left) */}
          <button
            onClick={() => navigateTo('home')}
            className="flex items-center gap-3 shrink-0 focus:outline-none"
            aria-label="Sommie Luxe Hair - Home"
          >
            <div className="relative group flex items-center">
              <img
                src="/assets/aistudio/image__11__86896f45.png"
                alt="Sommie Luxe Hair Logo - Golden Crown and SL Monogram"
                className="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
            </div>
          </button>

          {/* Center Navigation Desktop */}
          <nav
            className="hidden lg:flex items-center gap-5 xl:gap-7 h-full"
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            {navLinks.map((item) => (
              <div
                key={item.label}
                className="relative h-full flex items-center"
                onMouseEnter={() => (item.megaMenu ? setActiveMegaMenu(item.megaMenu) : setActiveMegaMenu(null))}
              >
                <button
                  onClick={() => navigateTo(item.page, item.category ? { category: item.category } : undefined)}
                  className={`text-[11px] xl:text-[12px] font-semibold tracking-[0.14em] uppercase transition-colors py-2 whitespace-nowrap flex items-center gap-1 ${
                    activeMegaMenu === item.megaMenu
                      ? 'text-[#C6A15B]'
                      : 'text-[#050505] hover:text-[#C6A15B]'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.megaMenu && (
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-200 ${
                        activeMegaMenu === item.megaMenu ? 'rotate-180 text-[#C6A15B]' : 'text-neutral-400'
                      }`}
                    />
                  )}
                </button>
              </div>
            ))}
          </nav>

          {/* Right Action Icons (Zone 3) */}
          <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-[#050505] hover:text-[#C6A15B] transition-colors relative"
              aria-label="Search wigs and textures"
            >
              <Search className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
            </button>

            {/* VIP Concierge Account Dropdown */}
            <div className="relative">
              <button
                onClick={() => setAccountModalOpen(!accountModalOpen)}
                className="p-2 text-[#050505] hover:text-[#C6A15B] transition-colors"
                aria-label="Account and VIP rewards"
              >
                <User className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
              </button>

              {accountModalOpen && (
                <div className="absolute right-0 top-full mt-2 w-72 bg-[#FFFFFF] border border-[#F5F0E6] shadow-2xl rounded-sm p-5 z-50 animate-fadeIn">
                  <div className="text-center pb-3 border-b border-neutral-100">
                    <p className="font-cormorant text-xl font-bold text-[#050505]">SOMMIE LUXE VIP</p>
                    <p className="text-[11px] text-neutral-500 mt-0.5">Luxury Loyalty & Order Concierge</p>
                  </div>
                  <div className="py-3 space-y-2 text-xs">
                    <button
                      onClick={() => {
                        setAccountModalOpen(false);
                        navigateTo('about');
                      }}
                      className="w-full text-left px-3 py-2 text-neutral-700 hover:bg-[#F5F0E6]/50 rounded transition-colors flex items-center justify-between"
                    >
                      <span>Our Brand Story & Ethos</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C6A15B]" />
                    </button>
                    <button
                      onClick={() => {
                        setAccountModalOpen(false);
                        navigateTo('contact');
                      }}
                      className="w-full text-left px-3 py-2 text-neutral-700 hover:bg-[#F5F0E6]/50 rounded transition-colors flex items-center justify-between"
                    >
                      <span>Book Mayfair / Lekki Salon Fitting</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C6A15B]" />
                    </button>
                    <button
                      onClick={() => {
                        setAccountModalOpen(false);
                        navigateTo('wishlist');
                      }}
                      className="w-full text-left px-3 py-2 text-neutral-700 hover:bg-[#F5F0E6]/50 rounded transition-colors flex items-center justify-between"
                    >
                      <span>Your Saved Wishlist ({wishlist.length})</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C6A15B]" />
                    </button>
                  </div>
                  <div className="pt-2 border-t border-neutral-100">
                    <button
                      onClick={() => setAccountModalOpen(false)}
                      className="btn-luxury-black w-full py-2.5 text-xs font-semibold uppercase tracking-wider rounded-sm text-[#D4AF37]"
                    >
                      Sign In / Register
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Wishlist Link */}
            <button
              onClick={() => navigateTo('wishlist')}
              className="p-2 text-[#050505] hover:text-[#C6A15B] transition-colors relative"
              aria-label="Wishlist items"
            >
              <Heart className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#C6A15B] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Shopping Bag Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 text-[#050505] hover:text-[#C6A15B] transition-colors relative"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#050505] text-[#D4AF37] text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* UNice-Inspired Mega Menu */}
      {activeMegaMenu && (
        <div
          className="hidden lg:block absolute left-0 right-0 top-full bg-[#FFFFFF] border-b border-[#D4AF37]/30 shadow-2xl z-30 transition-all duration-300 animate-fadeIn"
          onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
          onMouseLeave={() => setActiveMegaMenu(null)}
        >
          <div className="max-w-[1440px] mx-auto px-8 py-8 grid grid-cols-5 gap-8">
            {/* Column 1: Featured Categories */}
            <div>
              <p className="text-xs uppercase tracking-[0.16em] font-semibold text-[#050505] mb-4 pb-1 border-b border-[#F5F0E6]">
                Shop By Texture
              </p>
              <ul className="space-y-2.5 text-xs text-neutral-600">
                <li>
                  <button
                    onClick={() => {
                      navigateTo('shop', { category: 'straight' });
                      setActiveMegaMenu(null);
                    }}
                    className="hover:text-[#C6A15B] transition-colors flex items-center justify-between w-full"
                  >
                    <span>Bone Straight Raw Hair</span>
                    <span className="text-[10px] text-[#C6A15B]">Popular</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigateTo('shop', { category: 'deep-wave' });
                      setActiveMegaMenu(null);
                    }}
                    className="hover:text-[#C6A15B] transition-colors"
                  >
                    Hydrated Deep Wave Curls
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigateTo('shop', { category: 'bouncy-curls' });
                      setActiveMegaMenu(null);
                    }}
                    className="hover:text-[#C6A15B] transition-colors"
                  >
                    Voluminous Bouncy Body Curls
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigateTo('shop', { category: 'ocean-wave' });
                      setActiveMegaMenu(null);
                    }}
                    className="hover:text-[#C6A15B] transition-colors"
                  >
                    Resort Ocean Wave
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigateTo('shop', { category: 'all' });
                      setActiveMegaMenu(null);
                    }}
                    className="text-[#C6A15B] font-semibold hover:underline"
                  >
                    View All 12 Royal Wigs →
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 2: Lace Architecture */}
            <div>
              <p className="text-xs uppercase tracking-[0.16em] font-semibold text-[#050505] mb-4 pb-1 border-b border-[#F5F0E6]">
                Lace & Construction
              </p>
              <ul className="space-y-2.5 text-xs text-neutral-600">
                <li>
                  <button
                    onClick={() => {
                      navigateTo('shop', { category: 'all' });
                      setActiveMegaMenu(null);
                    }}
                    className="hover:text-[#C6A15B] transition-colors text-left"
                  >
                    13x6 HD Swiss Frontal (Deep Part)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigateTo('shop', { category: 'all' });
                      setActiveMegaMenu(null);
                    }}
                    className="hover:text-[#C6A15B] transition-colors text-left"
                  >
                    5x5 HD Invisible Closure
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigateTo('shop', { category: 'all' });
                      setActiveMegaMenu(null);
                    }}
                    className="hover:text-[#C6A15B] transition-colors flex items-center justify-between w-full"
                  >
                    <span>Wear & Go™ Glueless Wigs</span>
                    <span className="text-[10px] bg-[#F5F0E6] px-1.5 py-0.5 rounded text-[#050505]">3 Min</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigateTo('guide');
                      setActiveMegaMenu(null);
                    }}
                    className="hover:text-[#C6A15B] transition-colors text-left text-[#C6A15B]"
                  >
                    HD Lace vs Transparent Guide →
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Length & Density */}
            <div>
              <p className="text-xs uppercase tracking-[0.16em] font-semibold text-[#050505] mb-4 pb-1 border-b border-[#F5F0E6]">
                Length & Density
              </p>
              <ul className="space-y-2.5 text-xs text-neutral-600">
                <li>
                  <button
                    onClick={() => {
                      navigateTo('shop', { category: 'straight' });
                      setActiveMegaMenu(null);
                    }}
                    className="hover:text-[#C6A15B] transition-colors"
                  >
                    14" Chic Executive Blunt Bob
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigateTo('shop', { category: 'all' });
                      setActiveMegaMenu(null);
                    }}
                    className="hover:text-[#C6A15B] transition-colors"
                  >
                    24" - 28" Everyday Glamour
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigateTo('shop', { category: 'all' });
                      setActiveMegaMenu(null);
                    }}
                    className="hover:text-[#C6A15B] transition-colors"
                  >
                    30" - 36" Floor Length Empress
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigateTo('shop', { category: 'bouncy-curls' });
                      setActiveMegaMenu(null);
                    }}
                    className="hover:text-[#C6A15B] transition-colors"
                  >
                    250% Red Carpet Heavy Density
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4 & 5: Visual Feature Cards with Looping Shimmer */}
            <div className="col-span-2 grid grid-cols-2 gap-4 bg-[#F5F0E6]/50 p-4 rounded-sm border border-[#D4AF37]/20">
              <div
                onClick={() => {
                  navigateTo('shop', { category: 'straight' });
                  setActiveMegaMenu(null);
                }}
                className="relative group overflow-hidden rounded-sm bg-black cursor-pointer aspect-[4/3]"
              >
                <img
                  src="/src/assets/images/wig_blonde_613_raw_1794228193817.jpg"
                  alt="Monaco Ice 613 Raw Wig"
                  className="w-full h-full object-cover object-top opacity-85 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-3 flex flex-col justify-end text-white">
                  <span className="text-[10px] text-[#D4AF37] font-semibold uppercase tracking-wider">Haute 613 Blonde</span>
                  <p className="font-cormorant text-base font-bold leading-tight">Monaco Ice 613 Frontal</p>
                  <span className="text-[11px] text-[#C6A15B] font-semibold mt-1 flex items-center gap-1">
                    Shop Look →
                  </span>
                </div>
              </div>

              <div
                onClick={() => {
                  navigateTo('shop', { category: 'deep-wave' });
                  setActiveMegaMenu(null);
                }}
                className="relative group overflow-hidden rounded-sm bg-black cursor-pointer aspect-[4/3]"
              >
                <img
                  src="/src/assets/images/wig_water_wave_wet_1794228194043.jpg"
                  alt="Bora Bora Wet Water Wave"
                  className="w-full h-full object-cover object-top opacity-85 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-3 flex flex-col justify-end text-white">
                  <span className="text-[10px] text-[#D4AF37] font-semibold uppercase tracking-wider">New Arrival</span>
                  <p className="font-cormorant text-base font-bold leading-tight">Bora Bora Water Wave</p>
                  <span className="text-[11px] text-[#C6A15B] font-semibold mt-1 flex items-center gap-1">
                    Shop Look →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFFFF] border-b border-[#F5F0E6] px-6 py-6 animate-fadeIn">
          <div className="space-y-4">
            {navLinks.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  navigateTo(item.page, item.category ? { category: item.category } : undefined);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left py-2 text-sm font-semibold tracking-wider uppercase text-[#050505] hover:text-[#C6A15B] border-b border-neutral-100"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-200 space-y-3">
            <button
              onClick={() => {
                navigateTo('contact');
                setMobileMenuOpen(false);
              }}
              className="btn-luxury-gold w-full py-2.5 font-semibold text-xs tracking-wider uppercase rounded-sm text-center block text-black"
            >
              Book Mayfair / Lekki Fitting
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
