import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle2, Sparkles } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { navigateTo, showToast } = useShop();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: 'London (UK)',
    subject: 'Bespoke Wig Fitting & Custom Lace Consultation',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    showToast('Your VIP Concierge appointment request has been received!');
  };

  return (
    <div className="py-12 sm:py-20 bg-[#FFFFFF]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="text-xs text-neutral-400 mb-8 flex items-center gap-2">
          <button onClick={() => navigateTo('home')} className="hover:text-[#050505]">
            Home
          </button>
          <span>/</span>
          <span className="text-[#050505] font-semibold">VIP Concierge & Contact</span>
        </div>

        {/* Hero */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#C6A15B] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>GLOBAL LUXURY ATELIERS</span>
          </div>
          <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold text-[#050505] tracking-tight mb-4">
            Connect With Our Concierge
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
            Whether you desire a private wig fitting in Mayfair, doorstep delivery in Lekki, or custom density advice, our team is at your command.
          </p>
        </div>

        {/* 2-Column: Showrooms Left, Contact Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Showroom Details */}
          <div className="space-y-8">
            {/* London Atelier */}
            <div className="p-8 bg-[#FAF8F5] border border-[#E8DFC9] rounded-sm shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[#C6A15B] font-semibold uppercase tracking-[0.2em]">
                  UNITED KINGDOM FLAGSHIP
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 bg-emerald-50 text-emerald-800 rounded">
                  Private Appointments
                </span>
              </div>
              <h3 className="font-cormorant text-2xl font-bold text-[#050505]">
                Mayfair Private Atelier
              </h3>
              <div className="space-y-2 text-xs text-neutral-600">
                <p className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C6A15B] shrink-0" />
                  <span>14 Berkeley Street, Mayfair, London W1J 8DX</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#C6A15B] shrink-0" />
                  <span>+44 20 7946 0912</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#C6A15B] shrink-0" />
                  <span>Monday – Saturday: 10:00 AM – 7:00 PM GMT</span>
                </p>
              </div>
            </div>

            {/* Lagos Atelier */}
            <div className="p-8 bg-[#FAF8F5] border border-[#E8DFC9] rounded-sm shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[#C6A15B] font-semibold uppercase tracking-[0.2em]">
                  NIGERIA SUITE & SHOWROOM
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 bg-emerald-50 text-emerald-800 rounded">
                  Same-Day Pickup Available
                </span>
              </div>
              <h3 className="font-cormorant text-2xl font-bold text-[#050505]">
                Lekki Luxury Suite
              </h3>
              <div className="space-y-2 text-xs text-neutral-600">
                <p className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C6A15B] shrink-0" />
                  <span>22 Admiralty Way, Lekki Phase 1, Lagos, Nigeria</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#C6A15B] shrink-0" />
                  <span>+234 809 589 3300</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#C6A15B] shrink-0" />
                  <span>Monday – Sunday: 9:00 AM – 8:00 PM WAT</span>
                </p>
              </div>
            </div>

            {/* Direct WhatsApp Concierge Simulator */}
            <div className="p-6 bg-[#050505] text-white rounded-sm border border-[#D4AF37]/30 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-white">Instant WhatsApp Concierge</h4>
                  <p className="text-[11px] text-neutral-400">Chat directly with our senior wig colorist</p>
                </div>
              </div>
              <a
                href="https://wa.me/4479460912"
                target="_blank"
                rel="noreferrer"
                className="btn-luxury-gold px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-sm text-black"
              >
                Chat Now
              </a>
            </div>
          </div>

          {/* Contact & Consultation Booking Form */}
          <div className="p-8 sm:p-10 bg-white border border-[#E8DFC9] rounded-sm shadow-xl">
            <h3 className="font-cormorant text-3xl font-bold text-[#050505] mb-2">
              Book a Private Consultation
            </h3>
            <p className="text-xs text-neutral-600 mb-6 font-light">
              Fill in your details below and a dedicated Sommie Luxe concierge representative will confirm your appointment within 2 hours.
            </p>

            {formSubmitted ? (
              <div className="p-8 bg-[#F5F0E6]/50 border border-[#C6A15B] rounded-sm text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-[#050505] text-[#D4AF37] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-cormorant text-2xl font-bold text-[#050505]">Request Confirmed</h4>
                <p className="text-xs text-neutral-600 font-light">
                  Thank you, <strong>{formData.name}</strong>. Our concierge in {formData.location} will contact you shortly via email and WhatsApp.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 text-xs font-semibold text-[#C6A15B] hover:text-[#050505] underline uppercase tracking-wider"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs text-neutral-700">
                <div>
                  <label className="block font-semibold mb-1 text-[#050505]">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Lady Sommie"
                    className="w-full px-3.5 py-3 border border-neutral-300 rounded-sm focus:border-[#C6A15B] outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold mb-1 text-[#050505]">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. client@domain.com"
                      className="w-full px-3.5 py-3 border border-neutral-300 rounded-sm focus:border-[#C6A15B] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1 text-[#050505]">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +44 7911 123456"
                      className="w-full px-3.5 py-3 border border-neutral-300 rounded-sm focus:border-[#C6A15B] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold mb-1 text-[#050505]">Preferred Showroom</label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3.5 py-3 border border-neutral-300 rounded-sm focus:border-[#C6A15B] outline-none bg-white"
                    >
                      <option value="London (UK)">London Mayfair Atelier</option>
                      <option value="Lagos (NG)">Lagos Lekki Suite</option>
                      <option value="Virtual VIP">Virtual Video Consultation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-semibold mb-1 text-[#050505]">Inquiry Purpose</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-3 border border-neutral-300 rounded-sm focus:border-[#C6A15B] outline-none bg-white"
                    >
                      <option value="Bespoke Wig Fitting & Custom Lace Consultation">Custom Wig Fitting</option>
                      <option value="Raw Temple Hair Bundles Inquiries">Raw Hair Bundles Inquiries</option>
                      <option value="Wedding / Bridal Hair Order">Bridal / Wedding Hair</option>
                      <option value="Wholesale Salon Order">Wholesale / Salon Partner</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold mb-1 text-[#050505]">Your Specific Preferences</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about desired lengths (20-36 inches), desired texture (Bone Straight, Deep Wave, Bouncy Curls), or event date..."
                    className="w-full px-3.5 py-3 border border-neutral-300 rounded-sm focus:border-[#C6A15B] outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-luxury-gold w-full py-4 font-semibold text-xs uppercase tracking-[0.18em] rounded-sm flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>REQUEST VIP APPOINTMENT</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
