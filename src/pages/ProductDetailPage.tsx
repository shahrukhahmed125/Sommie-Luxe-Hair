import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import {
  Star,
  Heart,
  ShoppingBag,
  ShieldCheck,
  Truck,
  Sparkles,
  ChevronDown,
  Check,
  ArrowRight,
  HelpCircle,
  Clock,
  RotateCcw
} from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const {
    selectedProduct,
    formatPrice,
    addToCart,
    isInWishlist,
    toggleWishlist,
    navigateTo,
    setIsGuideOpen
  } = useShop();

  const product = selectedProduct || PRODUCTS[0];

  const [selectedLength, setSelectedLength] = useState<number>(product.lengths[0]);
  const [selectedDensity, setSelectedDensity] = useState<string>(product.densities[0]);
  const [selectedLace, setSelectedLace] = useState<string>(product.laceTypes[0]);
  const [selectedCapSize, setSelectedCapSize] = useState<'Small (21.5")' | 'Medium (22.5")' | 'Large (23.5")'>('Medium (22.5")');
  const [activeImage, setActiveImage] = useState<string>(product.image);
  const [quantity, setQuantity] = useState<number>(1);
  const [activeAccordion, setActiveAccordion] = useState<string | null>('specs');
  const [destinationCity, setDestinationCity] = useState('London (UK)');

  // Sync state whenever selected product changes
  useEffect(() => {
    if (product) {
      setSelectedLength(product.lengths[0]);
      setSelectedDensity(product.densities[0]);
      setSelectedLace(product.laceTypes[0]);
      setActiveImage(product.image);
      setQuantity(1);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product.id]);

  const inWishlist = isInWishlist(product.id);

  // Dynamic gallery items
  const gallery = [
    product.image,
    product.hoverImage,
    '/src/assets/images/hero_luxe_glam_model_1794318811247.jpg',
    '/src/assets/images/raw_bundles_showcase_1794228193955.jpg'
  ].filter(Boolean) as string[];

  const handleBuyNow = () => {
    addToCart(product, selectedLength, selectedDensity, selectedLace, quantity);
  };

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);

  return (
    <div className="py-8 sm:py-14 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="text-xs text-neutral-400 mb-8 flex items-center gap-2">
          <button onClick={() => navigateTo('home')} className="hover:text-[#050505] transition-colors">
            Home
          </button>
          <span>/</span>
          <button onClick={() => navigateTo('shop', { category: 'all' })} className="hover:text-[#050505] transition-colors">
            Shop All
          </button>
          <span>/</span>
          <button
            onClick={() => navigateTo('shop', { category: product.category })}
            className="hover:text-[#050505] capitalize transition-colors"
          >
            {product.category.replace('-', ' ')}
          </button>
          <span>/</span>
          <span className="text-[#050505] font-semibold truncate max-w-xs">{product.name}</span>
        </div>

        {/* Top Split View: Gallery Left, Purchase Module Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-start mb-20 bg-white p-6 sm:p-10 rounded-sm border border-[#E8DFC9] shadow-sm">
          {/* Gallery View Left */}
          <div className="space-y-4">
            {/* Main Stage Image with Zoom hover */}
            <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden bg-neutral-900 border border-[#E8DFC9] shadow-md group">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {product.badge && (
                <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-[#D4AF37] text-black rounded-sm shadow-md">
                  {product.badge}
                </span>
              )}

              <button
                onClick={() => toggleWishlist(product.id)}
                className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  inWishlist
                    ? 'bg-[#050505] text-[#D4AF37]'
                    : 'bg-white/90 text-neutral-800 hover:bg-[#050505] hover:text-[#D4AF37]'
                }`}
                aria-label="Save to Wishlist"
              >
                <Heart className={`w-5 h-5 ${inWishlist ? 'fill-[#D4AF37]' : ''}`} />
              </button>
            </div>

            {/* Thumbnail Switcher */}
            <div className="grid grid-cols-4 gap-3">
              {gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`aspect-square rounded-sm overflow-hidden border-2 transition-all ${
                    activeImage === img
                      ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/30 scale-[1.02]'
                      : 'border-neutral-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Purchase Module Right */}
          <div className="space-y-6">
            <div>
              {/* Collection & Rating */}
              <div className="flex items-center justify-between text-xs text-neutral-500 mb-2">
                <span className="text-[#C6A15B] font-semibold uppercase tracking-wider">
                  {product.collection}
                </span>
                <div className="flex items-center gap-1.5 text-[#D4AF37]">
                  <Star className="w-4 h-4 fill-[#D4AF37]" />
                  <span className="font-bold text-neutral-800">{product.rating}</span>
                  <span className="text-neutral-400">({product.reviewsCount} verified reviews)</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold text-[#050505] leading-tight mb-3">
                {product.name}
              </h1>

              {/* Subtitle / Hair Spec */}
              <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                {product.subtitle}
              </p>
            </div>

            {/* Pricing */}
            <div className="flex items-baseline gap-3 pb-6 border-b border-[#F5F0E6]">
              <span className="font-montserrat text-3xl font-bold text-[#050505] tabular-nums">
                {formatPrice(product)}
              </span>
              <span className="text-base text-neutral-400 line-through tabular-nums">
                {formatPrice(product, true)}
              </span>
              <span className="text-xs font-semibold text-[#C6A15B] bg-[#FAF7F2] border border-[#C6A15B]/30 px-2.5 py-1 rounded">
                Save 18% with VIP Code: LUXE15
              </span>
            </div>

            {/* Length Selector */}
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-[#050505] uppercase tracking-wider mb-2">
                <span>Select Length: <span className="text-[#C6A15B]">{selectedLength}" inches ({Math.round(selectedLength * 2.54)} cm)</span></span>
                <button
                  onClick={() => setIsGuideOpen(true)}
                  className="text-[11px] text-[#C6A15B] hover:text-[#050505] flex items-center gap-1 normal-case font-normal"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Length Chart</span>
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.lengths.map((len) => (
                  <button
                    key={len}
                    onClick={() => setSelectedLength(len)}
                    className={`px-4 py-2 text-xs font-semibold rounded-sm border transition-all ${
                      selectedLength === len
                        ? 'bg-[#050505] text-[#D4AF37] border-[#050505] shadow'
                        : 'bg-white text-neutral-700 border-neutral-300 hover:border-neutral-500'
                    }`}
                  >
                    {len}"
                  </button>
                ))}
              </div>
            </div>

            {/* Density Selector */}
            <div>
              <div className="text-xs font-semibold text-[#050505] uppercase tracking-wider mb-2">
                Hair Density: <span className="text-[#C6A15B]">{selectedDensity}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.densities.map((den) => (
                  <button
                    key={den}
                    onClick={() => setSelectedDensity(den)}
                    className={`px-3 py-2 text-xs font-medium rounded-sm border transition-all ${
                      selectedDensity === den
                        ? 'bg-[#050505] text-[#D4AF37] border-[#050505]'
                        : 'bg-white text-neutral-700 border-neutral-300 hover:border-neutral-500'
                    }`}
                  >
                    {den}
                  </button>
                ))}
              </div>
            </div>

            {/* Lace Construction Selector */}
            <div>
              <div className="text-xs font-semibold text-[#050505] uppercase tracking-wider mb-2">
                Lace Construction:
              </div>
              <div className="space-y-2">
                {product.laceTypes.map((lace) => (
                  <button
                    key={lace}
                    onClick={() => setSelectedLace(lace)}
                    className={`w-full text-left px-3.5 py-2.5 text-xs rounded-sm border flex items-center justify-between transition-all ${
                      selectedLace === lace
                        ? 'bg-[#FAF7F2] border-[#C6A15B] text-[#050505] font-semibold'
                        : 'bg-white border-neutral-200 text-neutral-600 hover:border-neutral-400'
                    }`}
                  >
                    <span>{lace}</span>
                    {selectedLace === lace && <Check className="w-3.5 h-3.5 text-[#C6A15B]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Cap Sizing */}
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-[#050505] uppercase tracking-wider mb-2">
                <span>Cap Circumference:</span>
                <span className="text-[#C6A15B]">{selectedCapSize}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {(['Small (21.5")', 'Medium (22.5")', 'Large (23.5")'] as const).map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedCapSize(size)}
                    className={`py-2 text-xs font-medium rounded-sm border transition-all ${
                      selectedCapSize === size
                        ? 'bg-[#050505] text-[#D4AF37] border-[#050505]'
                        : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="pt-4 border-t border-neutral-100 space-y-3">
              <div className="flex gap-3">
                {/* Quantity Stepper */}
                <div className="flex items-center border border-neutral-300 rounded-sm">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-neutral-600 hover:bg-neutral-100"
                  >
                    -
                  </button>
                  <span className="px-3 py-2 font-bold text-xs">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-neutral-600 hover:bg-neutral-100"
                  >
                    +
                  </button>
                </div>

                {/* Primary Add to Bag */}
                <button
                  onClick={handleBuyNow}
                  className="btn-luxury-gold flex-1 py-4 font-semibold text-xs tracking-[0.16em] uppercase rounded-sm flex items-center justify-center gap-2 shadow-lg"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>ADD TO LUXURY BAG</span>
                </button>
              </div>

              {/* Buy With 1-Click Fast Checkout */}
              <button
                onClick={handleBuyNow}
                className="btn-luxury-black w-full py-3.5 font-semibold text-xs tracking-[0.16em] uppercase rounded-sm flex items-center justify-center gap-2"
              >
                <span>INSTANT 1-CLICK CHECKOUT</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>
            </div>

            {/* Express Delivery Estimation Box */}
            <div className="p-4 bg-[#FAF7F2] border border-[#E8DFC9] rounded-sm text-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#050505] flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-[#C6A15B]" />
                  <span>Estimated Delivery Time:</span>
                </span>
                <select
                  value={destinationCity}
                  onChange={(e) => setDestinationCity(e.target.value)}
                  className="bg-transparent border-b border-neutral-400 text-[11px] font-semibold text-[#050505] focus:outline-none"
                >
                  <option value="London (UK)">London (UK)</option>
                  <option value="Lagos (NG)">Lagos (NG)</option>
                  <option value="Abuja (NG)">Abuja (NG)</option>
                  <option value="New York (US)">New York (US)</option>
                </select>
              </div>
              <p className="text-neutral-600 text-[11px]">
                {destinationCity.includes('UK')
                  ? '🇬🇧 Order today for Next-Day Express DHL delivery across the United Kingdom.'
                  : destinationCity.includes('Lagos')
                  ? '🇳🇬 48-Hour Priority Doorstep Delivery to Lagos & Lekki with cash or transfer.'
                  : '✈️ 3-Day Worldwide DHL Express with real-time tracking and signature.'}
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Accordion Section */}
        <div className="max-w-4xl mx-auto border-t border-[#E8DFC9] pt-12 mb-20 space-y-4">
          {/* Hair Specifications Table */}
          <div className="border border-[#E8DFC9] rounded-sm overflow-hidden bg-white">
            <button
              onClick={() => setActiveAccordion(activeAccordion === 'specs' ? null : 'specs')}
              className="w-full px-6 py-4 bg-[#FAF7F2] text-left flex items-center justify-between font-cormorant text-xl font-bold text-[#050505]"
            >
              <span>Hair Craftsmanship & Specifications</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeAccordion === 'specs' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {activeAccordion === 'specs' && (
              <div className="p-6 bg-white space-y-4 text-xs text-neutral-700 animate-fadeIn">
                <p className="leading-relaxed font-light">{product.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-neutral-100">
                  <p><span className="text-neutral-400 font-semibold">Hair Origin:</span> {product.hairOrigin}</p>
                  <p><span className="text-neutral-400 font-semibold">Texture Pattern:</span> {product.hairTexture}</p>
                  <p><span className="text-neutral-400 font-semibold">Cuticle Direction:</span> 100% Unidirectional intact cuticles</p>
                  <p><span className="text-neutral-400 font-semibold">Bleach Capability:</span> Safely lifts to 613 platinum blonde</p>
                  <p><span className="text-neutral-400 font-semibold">Lifespan:</span> 3 to 5 years with proper care</p>
                  <p><span className="text-neutral-400 font-semibold">Knot Processing:</span> Micro single-knots pre-bleached</p>
                </div>
              </div>
            )}
          </div>

          {/* Care & Washing Accordion */}
          <div className="border border-[#E8DFC9] rounded-sm overflow-hidden bg-white">
            <button
              onClick={() => setActiveAccordion(activeAccordion === 'care' ? null : 'care')}
              className="w-full px-6 py-4 bg-[#FAF7F2] text-left flex items-center justify-between font-cormorant text-xl font-bold text-[#050505]"
            >
              <span>Maintenance & Washing Ritual</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeAccordion === 'care' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {activeAccordion === 'care' && (
              <div className="p-6 bg-white space-y-2 text-xs text-neutral-600 animate-fadeIn font-light leading-relaxed">
                <p>1. <strong>Cleansing:</strong> Wash every 2-3 weeks using sulfate-free, moisturizing salon shampoo.</p>
                <p>2. <strong>Hydration:</strong> Apply argan or jojoba oil lightly to mid-lengths and ends before air-drying.</p>
                <p>3. <strong>Heat Styling:</strong> Always spray a thermal protectant before curling or flat ironing up to 450°F.</p>
                <p>4. <strong>Night Routine:</strong> Store on your Sommie Luxe wig stand or sleep with our included silk bonnet.</p>
              </div>
            )}
          </div>

          {/* Returns & Authenticity Accordion */}
          <div className="border border-[#E8DFC9] rounded-sm overflow-hidden bg-white">
            <button
              onClick={() => setActiveAccordion(activeAccordion === 'returns' ? null : 'returns')}
              className="w-full px-6 py-4 bg-[#FAF7F2] text-left flex items-center justify-between font-cormorant text-xl font-bold text-[#050505]"
            >
              <span>Worldwide Shipping & Royal Guarantee</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeAccordion === 'returns' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {activeAccordion === 'returns' && (
              <div className="p-6 bg-white space-y-2 text-xs text-neutral-600 animate-fadeIn font-light leading-relaxed">
                <p>• <strong>Complimentary Shipping:</strong> Orders over £150 / ₦250,000 / $200 qualify for free express delivery.</p>
                <p>• <strong>14-Day Returns:</strong> Unworn, uncut lace units in original gold luxury packaging can be returned or exchanged effortlessly.</p>
                <p>• <strong>Authenticity Certificate:</strong> Each piece includes an official Sommie Luxe Hair seal of single-donor authenticity.</p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products Recommendation */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-[#E8DFC9] pt-14">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C6A15B] block mb-1">
                COMPLETE YOUR ROYALTY
              </span>
              <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-[#050505]">
                You May Also Admire
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
