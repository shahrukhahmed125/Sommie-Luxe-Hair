import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, Currency } from '../types';
import { PRODUCTS } from '../data/products';

export type AppPage = 'home' | 'shop' | 'pdp' | 'about' | 'guide' | 'contact' | 'wishlist';

interface ShopContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (product: { priceGBP: number; priceUSD: number; priceNGN: number }, original?: boolean) => string;
  cart: CartItem[];
  addToCart: (product: Product, length?: number, density?: string, lace?: string, qty?: number) => void;
  updateQuantity: (itemId: string, newQty: number) => void;
  removeFromCart: (itemId: string) => void;
  cartCount: number;
  cartSubtotal: number;
  freeShippingThreshold: number;
  freeShippingProgress: number;
  discountCode: string;
  setDiscountCode: (code: string) => void;
  discountPercent: number;
  applyDiscountCode: (code: string) => boolean;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isGuideOpen: boolean;
  setIsGuideOpen: (open: boolean) => void;
  isStoryModalOpen: boolean;
  setIsStoryModalOpen: (open: boolean) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  activeCategoryFilter: string;
  setActiveCategoryFilter: (cat: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  // Page Routing
  currentPage: AppPage;
  selectedProduct: Product | null;
  navigateTo: (page: AppPage, params?: { category?: string; product?: Product }) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<AppPage>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(PRODUCTS[0]);
  const [currency, setCurrency] = useState<Currency>('GBP');
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: `${PRODUCTS[0].id}-30-200% (Glamour Full)-13x6 HD Invisible Swiss Lace`,
      product: PRODUCTS[0],
      selectedLength: 30,
      selectedDensity: '200% (Glamour Full)',
      selectedLace: '13x6 HD Invisible Swiss Lace',
      quantity: 1
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>([PRODUCTS[1].id]);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [discountCode, setDiscountCode] = useState('LUXE15');
  const [discountPercent, setDiscountPercent] = useState(15);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const navigateTo = (page: AppPage, params?: { category?: string; product?: Product }) => {
    if (params?.category) {
      setActiveCategoryFilter(params.category);
    }
    if (params?.product) {
      setSelectedProduct(params.product);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const formatPrice = (
    item: {
      priceGBP: number;
      priceUSD: number;
      priceNGN: number;
      originalPriceGBP?: number;
      originalPriceUSD?: number;
      originalPriceNGN?: number;
    },
    original = false
  ): string => {
    if (currency === 'GBP') {
      const val = original && item.originalPriceGBP ? item.originalPriceGBP : item.priceGBP;
      return `£${val.toLocaleString()}`;
    } else if (currency === 'USD') {
      const val = original && item.originalPriceUSD ? item.originalPriceUSD : item.priceUSD;
      return `$${val.toLocaleString()}`;
    } else {
      const val = original && item.originalPriceNGN ? item.originalPriceNGN : item.priceNGN;
      return `₦${val.toLocaleString()}`;
    }
  };

  const addToCart = (
    product: Product,
    length?: number,
    density?: string,
    lace?: string,
    qty: number = 1
  ) => {
    const selLength = length || product.lengths[0];
    const selDensity = density || product.densities[0];
    const selLace = lace || product.laceTypes[0];
    const itemId = `${product.id}-${selLength}-${selDensity}-${selLace}`;

    setCart((prev) => {
      const existing = prev.find((item) => item.id === itemId);
      if (existing) {
        return prev.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + qty } : item
        );
      }
      return [
        ...prev,
        {
          id: itemId,
          product,
          selectedLength: selLength,
          selectedDensity: selDensity,
          selectedLace: selLace,
          quantity: qty
        }
      ];
    });

    showToast(`Added "${product.name.slice(0, 32)}..." to your luxury bag`);
    setIsCartOpen(true);
  };

  const updateQuantity = (itemId: string, newQty: number) => {
    if (newQty <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity: newQty } : item))
    );
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
    showToast('Item removed from your bag');
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removed from your wishlist');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Saved to your luxury wishlist');
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const cartSubtotal = cart.reduce((acc, item) => {
    const price =
      currency === 'GBP'
        ? item.product.priceGBP
        : currency === 'USD'
        ? item.product.priceUSD
        : item.product.priceNGN;
    return acc + price * item.quantity;
  }, 0);

  const freeShippingThreshold =
    currency === 'GBP' ? 150 : currency === 'USD' ? 200 : 250000;

  const freeShippingProgress = Math.min(
    100,
    Math.round((cartSubtotal / freeShippingThreshold) * 100)
  );

  const applyDiscountCode = (code: string): boolean => {
    const clean = code.trim().toUpperCase();
    if (clean === 'LUXE15' || clean === 'SOMMIE15') {
      setDiscountCode(clean);
      setDiscountPercent(15);
      showToast('Code applied: 15% VIP Luxury Discount activated!');
      return true;
    } else if (clean === 'VIP20') {
      setDiscountCode(clean);
      setDiscountPercent(20);
      showToast('VIP Gold Club Code: 20% Privilege Discount activated!');
      return true;
    } else {
      showToast('Invalid promotional code. Try LUXE15 for 15% off.');
      return false;
    }
  };

  return (
    <ShopContext.Provider
      value={{
        currency,
        setCurrency,
        formatPrice,
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        cartCount,
        cartSubtotal,
        freeShippingThreshold,
        freeShippingProgress,
        discountCode,
        setDiscountCode,
        discountPercent,
        applyDiscountCode,
        isCartOpen,
        setIsCartOpen,
        wishlist,
        toggleWishlist,
        isInWishlist,
        quickViewProduct,
        setQuickViewProduct,
        isSearchOpen,
        setIsSearchOpen,
        isGuideOpen,
        setIsGuideOpen,
        isStoryModalOpen,
        setIsStoryModalOpen,
        toastMessage,
        showToast,
        activeCategoryFilter,
        setActiveCategoryFilter,
        searchQuery,
        setSearchQuery,
        currentPage,
        selectedProduct,
        navigateTo
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
