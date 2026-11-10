import React, { useState } from 'react';
import { Instagram, Heart, ArrowUpRight } from 'lucide-react';
import { INSTAGRAM_POSTS } from '../data/products';

export const InstagramGallery: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<typeof INSTAGRAM_POSTS[0] | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-[#FFFFFF]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] font-semibold text-[#C6A15B] mb-2">
            <Instagram className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>COMMUNITY OF QUEENS</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#050505] tracking-tight mb-3">
            FOLLOW THE LUXURY
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 font-light mb-4">
            Tag <span className="font-semibold text-[#050505]">@sommieluxehair</span> and use <span className="font-semibold text-[#C6A15B]">#SommieLuxeQueen</span> to be featured in our international showcase.
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#050505] hover:text-[#C6A15B] transition-colors border-b border-[#050505] pb-0.5 hover:border-[#C6A15B]"
          >
            <span>JOIN OUR INSTAGRAM</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
          </a>
        </div>

        {/* Gallery 5-Column Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group relative aspect-square overflow-hidden rounded-sm bg-neutral-900 cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center text-white">
                <Instagram className="w-6 h-6 text-[#D4AF37] mb-2" />
                <div className="flex items-center gap-1.5 text-xs font-semibold mb-1">
                  <Heart className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                  <span>{post.likes}</span>
                </div>
                <p className="text-[11px] text-[#F5F0E6] line-clamp-2 font-light">
                  {post.style}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Instagram Post View Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedPost(null)}>
          <div className="bg-white max-w-lg w-full rounded-sm overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-square bg-black">
              <img
                src={selectedPost.image}
                alt={selectedPost.caption}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-[#050505]">{selectedPost.user}</span>
                  <span className="text-[11px] text-[#C6A15B] font-semibold">· Verified Muse</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-neutral-500">
                  <Heart className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                  <span>{selectedPost.likes} likes</span>
                </div>
              </div>
              <p className="text-xs text-neutral-700 font-light leading-relaxed mb-4">
                {selectedPost.caption}
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
                <span className="text-xs font-semibold text-[#050505]">Featured Style: {selectedPost.style}</span>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="text-xs uppercase tracking-wider text-[#C6A15B] hover:text-[#050505] font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
