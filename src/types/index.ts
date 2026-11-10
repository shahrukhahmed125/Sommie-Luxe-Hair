export type Currency = 'GBP' | 'USD' | 'NGN';

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'straight' | 'deep-wave' | 'bouncy-curls' | 'ocean-wave';
  collection: string;
  priceGBP: number;
  priceUSD: number;
  priceNGN: number;
  originalPriceGBP: number;
  originalPriceUSD: number;
  originalPriceNGN: number;
  rating: number;
  reviewsCount: number;
  badge?: 'BEST SELLER' | 'NEW' | 'HD INVISIBLE LACE' | 'GLUELESS' | 'RAW VIRGIN';
  image: string;
  hoverImage?: string;
  lengths: number[];
  densities: string[];
  laceTypes: string[];
  description: string;
  hairOrigin: string;
  hairTexture: string;
  features: string[];
}

export interface CartItem {
  id: string; // unique item hash: `${product.id}-${length}-${density}-${lace}`
  product: Product;
  selectedLength: number;
  selectedDensity: string;
  selectedLace: string;
  quantity: number;
}

export interface CustomerReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  productName: string;
  hairLength: string;
  verified: boolean;
  avatarUrl?: string;
}

export interface CollectionCategory {
  id: string;
  name: string;
  categoryKey: 'straight' | 'deep-wave' | 'bouncy-curls' | 'ocean-wave';
  headline: string;
  description: string;
  image: string;
  itemCount: string;
}
