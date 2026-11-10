import React, { useState } from 'react';
import { Star, CheckCircle, Quote, Sparkles, ThumbsUp, Camera, Plus, X } from 'lucide-react';
import { REVIEWS } from '../data/products';
import { CustomerReview } from '../types';
import { useShop } from '../context/ShopContext';

export const CustomerReviews: React.FC = () => {
  const { showToast } = useShop();
  const [reviewsList, setReviewsList] = useState<CustomerReview[]>(REVIEWS);
  const [activeFilter, setActiveFilter] = useState('all');
  const [helpfulLikes, setHelpfulLikes] = useState<{ [id: string]: number }>({
    'rev-01': 48,
    'rev-02': 62,
    'rev-03': 37,
    'rev-04': 29
  });
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);

  // Write review form state
  const [newAuthor, setNewAuthor] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newTitle, setNewTitle] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newProduct, setNewProduct] = useState('The Empress Bone Straight Raw Hair HD Lace Frontal Wig');
  const [newLength, setNewLength] = useState('28 inches / 200% Density');

  const handleHelpful = (id: string) => {
    setHelpfulLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
    showToast('Thank you for your feedback');
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor || !newComment || !newTitle) {
      showToast('Please fill out all required review fields');
      return;
    }

    const createdReview: CustomerReview = {
      id: `rev-${Date.now()}`,
      author: newAuthor,
      location: newLocation || 'Verified International Client',
      rating: newRating,
      date: 'Just now',
      title: newTitle,
      comment: newComment,
      productName: newProduct,
      hairLength: newLength,
      verified: true,
      avatarUrl: '/src/assets/images/customer_review_muse_1794225329278.jpg'
    };

    setReviewsList([createdReview, ...reviewsList]);
    setIsWriteModalOpen(false);
    showToast('Your verified review has been published to Sommie Luxe Hair!');
    // reset
    setNewAuthor('');
    setNewLocation('');
    setNewTitle('');
    setNewComment('');
  };

  const filteredReviews = reviewsList.filter((r) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'straight') return r.productName.toLowerCase().includes('straight');
    if (activeFilter === 'curly') return r.productName.toLowerCase().includes('wave') || r.productName.toLowerCase().includes('curl');
    if (activeFilter === 'us-ca') return r.location.toLowerCase().includes('usa') || r.location.toLowerCase().includes('canada') || r.location.toLowerCase().includes('los angeles') || r.location.toLowerCase().includes('toronto') || r.location.toLowerCase().includes('vancouver');
    if (activeFilter === 'asia') return r.location.toLowerCase().includes('manila') || r.location.toLowerCase().includes('philippines') || r.location.toLowerCase().includes('shanghai');
    if (activeFilter === 'uk-ng') return r.location.toLowerCase().includes('uk') || r.location.toLowerCase().includes('london') || r.location.toLowerCase().includes('lagos');
    return true;
  });

  return (
    <section className="py-20 sm:py-28 bg-[#FDFBF7] border-t border-[#E8DFC9]" id="reviews">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Cormorant Garamond */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] font-semibold text-[#C6A15B] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>AUTHENTIC CLIENT EXPERIENCES</span>
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          </div>
          <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold text-[#050505] tracking-tight mb-4">
            Words of Elegance
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 font-light">
            Real reviews from our global family of queens wearing raw single-donor hair across London, Lagos, New York, and beyond.
          </p>
        </div>

        {/* Top Summary Banner & Trust Breakdown */}
        <div className="bg-white p-6 sm:p-8 rounded-sm border border-[#E5DECD] mb-12 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Col 1: Big Rating Score */}
          <div className="text-center md:text-left md:border-r border-neutral-100 md:pr-6">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <span className="font-cormorant text-5xl sm:text-6xl font-bold text-[#050505] tabular-nums">4.9</span>
              <div>
                <div className="flex text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-[11px] text-neutral-500 font-medium mt-0.5">Overall Satisfaction</p>
              </div>
            </div>
            <p className="text-xs text-neutral-600 font-light">
              <span className="font-bold text-[#050505]">99.4%</span> of clients recommend Sommie Luxe Hair
            </p>
          </div>

          {/* Col 2: Star Breakdown Progress Bars */}
          <div className="space-y-2 text-xs text-neutral-600 md:border-r border-neutral-100 md:pr-6">
            <div className="flex items-center gap-2">
              <span className="w-12 text-[11px] font-semibold">5 Stars</span>
              <div className="flex-1 bg-neutral-100 h-2 rounded-full overflow-hidden">
                <div className="bg-[#D4AF37] h-full w-[96%]" />
              </div>
              <span className="w-8 text-right font-mono text-[10px] text-neutral-500">96%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-12 text-[11px] font-semibold">4 Stars</span>
              <div className="flex-1 bg-neutral-100 h-2 rounded-full overflow-hidden">
                <div className="bg-[#C6A15B] h-full w-[4%]" />
              </div>
              <span className="w-8 text-right font-mono text-[10px] text-neutral-500">4%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-12 text-[11px] text-neutral-400">3 Stars</span>
              <div className="flex-1 bg-neutral-100 h-2 rounded-full overflow-hidden">
                <div className="bg-neutral-300 h-full w-[0%]" />
              </div>
              <span className="w-8 text-right font-mono text-[10px] text-neutral-400">0%</span>
            </div>
          </div>

          {/* Col 3: Write Review CTA */}
          <div className="text-center md:text-right">
            <p className="text-xs text-neutral-500 mb-3">Own a Sommie Luxe crown? Share your experience.</p>
            <button
              onClick={() => setIsWriteModalOpen(true)}
              className="btn-luxury-gold px-6 py-3 font-semibold text-xs tracking-wider uppercase inline-flex items-center gap-2 rounded-sm"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>WRITE A ROYAL REVIEW</span>
            </button>
          </div>
        </div>

        {/* Review Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {[
            { id: 'all', label: 'All Reviews' },
            { id: 'straight', label: 'Bone Straight' },
            { id: 'curly', label: 'Deep Wave & Curls' },
            { id: 'us-ca', label: '🇺🇸 / 🇨🇦 US & Canada' },
            { id: 'asia', label: '🇵🇭 / 🇨🇳 Asia-Pacific' },
            { id: 'uk-ng', label: '🇬🇧 / 🇳🇬 UK & Nigeria' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-1.5 text-xs font-semibold rounded-sm tracking-wider uppercase border transition-all ${
                activeFilter === tab.id
                  ? 'bg-[#050505] text-[#D4AF37] border-[#050505] shadow'
                  : 'bg-white text-neutral-600 border-[#E5DECD] hover:border-[#C6A15B]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Customer Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 rounded-sm border border-[#E5DECD] flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#D4AF37]/60 transition-all duration-300"
            >
              <div>
                {/* Reviewer Header */}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={rev.avatarUrl || '/src/assets/images/customer_review_muse_1794225329278.jpg'}
                    alt={rev.author}
                    className="w-11 h-11 rounded-full object-cover border border-[#D4AF37]/50 shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="min-w-0">
                    <p className="font-semibold text-xs text-[#050505] truncate">{rev.author}</p>
                    <p className="text-[11px] text-[#C6A15B] font-medium truncate">{rev.location}</p>
                  </div>
                </div>

                {/* Star Rating & Verified Marker */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-[#D4AF37]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                    ))}
                  </div>
                  {rev.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                      <CheckCircle className="w-3 h-3 text-emerald-700" />
                      <span>Verified Client</span>
                    </span>
                  )}
                </div>

                {/* Review Title */}
                <h3 className="font-cormorant font-bold text-base text-[#050505] mb-2 leading-snug">
                  "{rev.title}"
                </h3>

                {/* Comment Body */}
                <p className="text-xs text-neutral-600 font-light leading-relaxed mb-6">
                  {rev.comment}
                </p>
              </div>

              {/* Product Spec & Helpful Button */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                <div className="min-w-0 pr-2">
                  <p className="text-[10px] text-neutral-400 truncate">
                    {rev.hairLength}
                  </p>
                  <p className="text-[10px] text-neutral-400">{rev.date}</p>
                </div>

                <button
                  onClick={() => handleHelpful(rev.id)}
                  className="flex items-center gap-1.5 text-[11px] text-neutral-500 hover:text-[#C6A15B] transition-colors p-1"
                  title="Mark as helpful"
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span className="tabular-nums font-semibold">{helpfulLikes[rev.id] || 0}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Write Review Modal */}
      {isWriteModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div
            className="bg-white max-w-lg w-full rounded-sm shadow-2xl border border-[#D4AF37]/40 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 bg-[#050505] text-white flex items-center justify-between border-b border-[#D4AF37]/30">
              <div>
                <p className="text-[10px] text-[#D4AF37] uppercase tracking-[0.2em] font-semibold">SOMMIE LUXE SOCIETY</p>
                <h3 className="font-cormorant text-2xl font-bold text-[#F5F0E6]">Write a Royal Review</h3>
              </div>
              <button
                onClick={() => setIsWriteModalOpen(false)}
                className="p-1 text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddReview} className="p-6 space-y-4 text-xs text-neutral-800">
              {/* Rating Picker */}
              <div>
                <label className="block font-semibold mb-1 text-[#050505]">Your Rating:</label>
                <div className="flex gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewRating(star)}
                      className="p-1 text-2xl focus:outline-none"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= newRating ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-neutral-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Author & City */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    placeholder="e.g. Sandra O."
                    className="w-full px-3 py-2 border border-neutral-300 rounded-sm focus:border-[#C6A15B] outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">City & Country</label>
                  <input
                    type="text"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    placeholder="e.g. Kensington, London (UK)"
                    className="w-full px-3 py-2 border border-neutral-300 rounded-sm focus:border-[#C6A15B] outline-none"
                  />
                </div>
              </div>

              {/* Title */}
              <div>
                <label className="block font-semibold mb-1">Headline Summary *</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Unbelievable HD lace melt and zero shedding!"
                  className="w-full px-3 py-2 border border-neutral-300 rounded-sm focus:border-[#C6A15B] outline-none"
                />
              </div>

              {/* Comment */}
              <div>
                <label className="block font-semibold mb-1">Your Detailed Experience *</label>
                <textarea
                  required
                  rows={4}
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Tell other queens about the hair quality, longevity, lace melt, and styling..."
                  className="w-full px-3 py-2 border border-neutral-300 rounded-sm focus:border-[#C6A15B] outline-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsWriteModalOpen(false)}
                  className="px-4 py-2 border border-neutral-300 text-neutral-600 rounded-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-luxury-gold px-6 py-2 font-semibold text-xs uppercase tracking-wider rounded-sm"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
