/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { AppProvider, useAppContext } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OffersTicker } from './components/OffersTicker';
import { OfferSection } from './components/OfferSection';
import { Categories } from './components/Categories';
import { FeaturedProducts } from './components/FeaturedProducts';
import { TechSpecs } from './components/TechSpecs';
import { ProjectIdeas } from './components/ProjectIdeas';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { AuthModals } from './components/AuthModals';
import { SearchOverlay } from './components/SearchOverlay';
import { CheckoutModal } from './components/CheckoutModal';
import { UserProfileModal } from './components/UserProfileModal';
import { CategoryModal } from './components/CategoryModal';
import { FloatingShapes } from './components/FloatingShapes';
import { RobotConfirmation } from './components/RobotConfirmation';
import { ArrowUp, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ApiErrorBanner = () => {
  const { apiError } = useAppContext();
  const [dismissed, setDismissed] = React.useState(false);
  if (!apiError || dismissed) return null;
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-full max-w-md px-4">
      <div className="bg-amber-50 dark:bg-amber-900/80 border border-amber-200 dark:border-amber-700 text-amber-800 dark:text-amber-200 px-4 py-3 rounded-xl shadow-lg flex items-start gap-3">
        <span className="text-sm flex-1">{apiError}</span>
        <button onClick={() => setDismissed(true)} className="p-0.5 hover:bg-amber-200 dark:hover:bg-amber-800 rounded transition-colors">
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/40 hover:bg-blue-700 transition-colors z-40 focus:outline-none"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const AppContent = () => {
  const { authModalType } = useAppContext();

  if (authModalType) {
    return (
      <div className="min-h-screen relative font-sans selection:bg-blue-500/30">
        <FloatingShapes />
        <ApiErrorBanner />
        <AuthModals />
      </div>
    );
  }

  return (
    <div className="min-h-screen relative font-sans selection:bg-blue-500/30">
      <FloatingShapes />
      <ApiErrorBanner />
      <Navbar />
      <main>
        <Hero />
        <OffersTicker />
        <OfferSection />
        <Categories />
        <FeaturedProducts />
        <TechSpecs />
        <ProjectIdeas />
        <Features />
        <Testimonials />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
      
      {/* Overlays */}
      <CartDrawer />
      <SearchOverlay />
      <CategoryModal />
      <CheckoutModal />
      <UserProfileModal />
      <RobotConfirmation />
      <ScrollToTop />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
