import React, { useState } from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { PromoCollectionBanners } from './components/PromoCollectionBanners';
import { ShopByCollection } from './components/ShopByCollection';
import { BestSellers } from './components/BestSellers';
import { BrandCampaignBanner } from './components/BrandCampaignBanner';
import { NewArrivals } from './components/NewArrivals';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutBrand } from './components/AboutBrand';
import { CustomerReviews } from './components/CustomerReviews';
import { InstagramGallery } from './components/InstagramGallery';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { SearchModal } from './components/SearchModal';
import { HairGuideModal } from './components/HairGuideModal';
import { StoryModal } from './components/StoryModal';
import { Toast } from './components/Toast';
import { Preloader } from './components/Preloader';

// Inner Pages
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AboutPage } from './pages/AboutPage';
import { GuidePage } from './pages/GuidePage';
import { ContactPage } from './pages/ContactPage';
import { WishlistPage } from './pages/WishlistPage';

const MainContent: React.FC = () => {
  const { currentPage, navigateTo } = useShop();
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col font-montserrat text-[#050505] selection:bg-[#D4AF37]/30 selection:text-black">
      {/* Royal Preloader */}
      {!loadingComplete && <Preloader onComplete={() => setLoadingComplete(true)} />}

      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Main Header & Navigation with Mega-Menu */}
      <Header />

      {/* Dynamic View Switcher */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <div className="animate-fadeIn">
            {/* 3. Main Hero Slider with Ken Burns ambient motion */}
            <HeroSlider
              onShopNow={() => navigateTo('shop', { category: 'all' })}
              onExploreCampaign={() => navigateTo('shop', { category: 'all' })}
            />

            {/* 4. Promotional Collection Banners */}
            <PromoCollectionBanners />

            {/* 5. Shop By Collection */}
            <ShopByCollection />

            {/* 6. Best Sellers */}
            <BestSellers initialFilter="all" />

            {/* 7. Luxury Brand Campaign Banner */}
            <div id="campaign-banner">
              <BrandCampaignBanner onExplore={() => navigateTo('shop', { category: 'all' })} />
            </div>

            {/* 8. New Arrivals */}
            <NewArrivals />

            {/* 9. Why Choose Sommie Luxe Hair */}
            <WhyChooseUs />

            {/* 10. About the Brand */}
            <AboutBrand />

            {/* 11. Customer Reviews with Write a Review modal */}
            <CustomerReviews />

            {/* 12. Instagram Gallery */}
            <InstagramGallery />

            {/* 13. Newsletter Subscription */}
            <Newsletter />
          </div>
        )}

        {currentPage === 'shop' && (
          <div className="animate-fadeIn">
            <ShopPage />
          </div>
        )}

        {currentPage === 'pdp' && (
          <div className="animate-fadeIn">
            <ProductDetailPage />
          </div>
        )}

        {currentPage === 'about' && (
          <div className="animate-fadeIn">
            <AboutPage />
          </div>
        )}

        {currentPage === 'guide' && (
          <div className="animate-fadeIn">
            <GuidePage />
          </div>
        )}

        {currentPage === 'contact' && (
          <div className="animate-fadeIn">
            <ContactPage />
          </div>
        )}

        {currentPage === 'wishlist' && (
          <div className="animate-fadeIn">
            <WishlistPage />
          </div>
        )}
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* Interactive Global Drawers & Modals */}
      <CartDrawer />
      <QuickViewModal />
      <SearchModal />
      <HairGuideModal />
      <StoryModal />
      <Toast />
    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <MainContent />
    </ShopProvider>
  );
}
