import React, { useState } from 'react';
import { Mail, Check, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Newsletter: React.FC = () => {
  const { showToast } = useShop();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address');
      return;
    }
    setSubscribed(true);
    showToast('Welcome to the Sommie Luxe Society! VIP code LUXE15 is ready.');
  };

  return (
    <section className="py-20 sm:py-24 bg-[#050505] text-white relative overflow-hidden border-t border-[#D4AF37]/25">
      {/* Background Decorative Gold Radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-radial from-[#D4AF37]/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Subtle Brand Tag */}
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#D4AF37] mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>JOIN THE SOMMIE LUXE SOCIETY</span>
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
        </div>

        {/* Heading */}
        <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
          BE THE FIRST TO <br />
          <span className="italic font-normal text-gold-shimmer">DISCOVER LUXURY</span>
        </h2>

        {/* Supporting Text */}
        <p className="font-montserrat text-xs sm:text-sm text-[#F5F0E6]/80 font-light max-w-lg mx-auto mb-8 leading-relaxed">
          Subscribe for exclusive collections, new arrivals and special offers. Receive an instant 15% VIP code directly to your inbox.
        </p>

        {/* Form */}
        {subscribed ? (
          <div className="p-6 bg-white/10 backdrop-blur-md border border-[#D4AF37]/50 rounded-sm max-w-md mx-auto animate-fadeIn">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-black mx-auto flex items-center justify-center mb-3">
              <Check className="w-5 h-5 stroke-[3]" />
            </div>
            <p className="font-cormorant text-2xl font-bold text-[#F5F0E6]">You are on the VIP Guest List</p>
            <p className="text-xs text-neutral-300 mt-1">Use voucher code <span className="font-mono font-bold text-[#D4AF37]">LUXE15</span> at checkout for 15% off.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
            <div className="relative w-full flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                required
                className="w-full pl-11 pr-4 py-3.5 bg-neutral-900/90 border border-[#D4AF37]/30 text-white placeholder-neutral-400 text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] transition-colors rounded-sm"
              />
            </div>
            <button
              type="submit"
              className="btn-luxury-gold w-full sm:w-auto px-8 py-3.5 font-semibold text-xs uppercase tracking-[0.18em] rounded-sm shrink-0 whitespace-nowrap"
            >
              SUBSCRIBE
            </button>
          </form>
        )}

        {/* Privacy Note */}
        <p className="text-[11px] text-neutral-400 font-light mt-4">
          Strictly private. We respect your confidentiality. Unsubscribe anytime with one click.
        </p>
      </div>
    </section>
  );
};
