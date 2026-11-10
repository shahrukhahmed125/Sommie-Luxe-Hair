import React, { useState, useEffect } from 'react';
import { ChevronDown, Globe, Sparkles, HelpCircle } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { Currency } from '../types';

export const AnnouncementBar: React.FC = () => {
  const { currency, setCurrency, setIsGuideOpen } = useShop();
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  const messages = [
    'DISCOVER LUXURY HAIR | ELEVATE YOUR BEAUTY',
    'COMPLIMENTARY WORLDWIDE EXPRESS SHIPPING ON ORDERS OVER £150 / ₦250K / $200',
    'SPRING/SUMMER 2026 CAMPAIGN: USE CODE LUXE15 FOR 15% OFF'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [messages.length]);

  const currencyOptions: { code: Currency; label: string; flag: string }[] = [
    { code: 'GBP', label: 'GBP (£) - United Kingdom', flag: '🇬🇧' },
    { code: 'NGN', label: 'NGN (₦) - Nigeria', flag: '🇳🇬' },
    { code: 'USD', label: 'USD ($) - International / USA', flag: '🇺🇸' }
  ];

  return (
    <div className="bg-[#050505] text-[#F5F0E6] border-b border-[#D4AF37]/20 text-[11px] sm:text-xs tracking-wider uppercase font-medium">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 h-9 flex items-center justify-between">
        {/* Left: Quick Guide & Concierge */}
        <div className="hidden lg:flex items-center gap-4 text-[#C6A15B]">
          <button
            onClick={() => setIsGuideOpen(true)}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>HD Lace & Sizing Guide</span>
          </button>
          <span className="text-[#D4AF37]/40">·</span>
          <span className="text-white/70">London · Lagos · New York</span>
        </div>

        {/* Center: Rotating Luxury Announcement */}
        <div className="flex-1 text-center flex items-center justify-center gap-2 overflow-hidden px-2">
          <Sparkles className="w-3 h-3 text-[#D4AF37] shrink-0" />
          <span className="transition-opacity duration-500 font-medium truncate">
            {messages[currentMessageIndex]}
          </span>
          <Sparkles className="w-3 h-3 text-[#D4AF37] shrink-0" />
        </div>

        {/* Right: Currency & Destination Selector */}
        <div className="relative">
          <button
            onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
            className="flex items-center gap-1.5 py-1 px-2.5 rounded bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10"
            aria-label="Change currency"
          >
            <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>
              {currency === 'GBP' ? '🇬🇧 GBP (£)' : currency === 'NGN' ? '🇳🇬 NGN (₦)' : '🇺🇸 USD ($)'}
            </span>
            <ChevronDown className="w-3 h-3 text-[#D4AF37]" />
          </button>

          {currencyDropdownOpen && (
            <div className="absolute right-0 top-full mt-1.5 w-60 bg-[#0A0A0A] border border-[#D4AF37]/30 shadow-2xl rounded py-1 z-50">
              <div className="px-3 py-1.5 text-[10px] text-[#C6A15B] tracking-widest border-b border-white/10">
                Select Currency & Region
              </div>
              {currencyOptions.map((opt) => (
                <button
                  key={opt.code}
                  onClick={() => {
                    setCurrency(opt.code);
                    setCurrencyDropdownOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors ${
                    currency === opt.code
                      ? 'bg-[#D4AF37]/20 text-[#D4AF37] font-semibold'
                      : 'text-neutral-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{opt.flag}</span>
                    <span>{opt.label}</span>
                  </span>
                  {currency === opt.code && <span className="text-[#D4AF37]">✓</span>}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
