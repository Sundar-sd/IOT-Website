import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { api } from '../services/api';
import { Product } from '../types';

export const OfferSection: React.FC = () => {
  const { addToCart, products } = useAppContext();
  const [offerProducts, setOfferProducts] = useState<Product[]>([]);

  useEffect(() => {
    api.getOfferProducts()
      .then(fetched => {
        if (fetched && fetched.length > 0) {
          setOfferProducts(fetched);
        } else {
          setOfferProducts(products);
        }
      })
      .catch(err => {
        console.warn('Failed to fetch offer products, using products fallback:', err);
        setOfferProducts(products);
      });
  }, [products]);

  const topDeals = [...offerProducts, ...offerProducts];
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      setScrollProgress(progress);
    }
  };

  // Initial scroll calculation in case content is loaded
  useEffect(() => {
    handleScroll();
  }, []);

  // Auto-scrolling logic (loop state)
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    if (!isPaused && scrollContainerRef.current) {
      intervalId = setInterval(() => {
        if (scrollContainerRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
          
          // If we reached the end, snap back to the start smoothly, otherwise scroll right
          if (scrollLeft >= scrollWidth - clientWidth - 10) {
             scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
             scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
          }
        }
      }, 3000);
    }

    return () => clearInterval(intervalId);
  }, [isPaused]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-[16px] shadow-lg border border-slate-100 dark:border-slate-800 px-6 py-8 md:px-10 md:py-10 relative">
          {/* Header */}
          <div className="flex justify-between items-end mb-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-[32px] font-bold text-slate-900 dark:text-white flex items-center gap-2"
            >
              🔥 Min. 30% OFF | Top Deals on IoT & Robotics
            </motion.h2>
            <motion.a 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              href="#" 
              className="text-blue-600 dark:text-blue-400 font-semibold relative group hidden sm:block whitespace-nowrap mb-1"
            >
              See More
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all group-hover:w-full"></span>
            </motion.a>
          </div>

          <div 
            className="relative group/carousel"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Left Button */}
            <button 
              onClick={() => scroll('left')}
              className="absolute -left-5 md:-left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center text-slate-700 dark:text-slate-300 z-10 opacity-0 group-hover/carousel:opacity-100 transition-all hover:scale-110 hover:text-blue-600 border border-slate-100 dark:border-slate-700"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Right Button */}
            <button 
              onClick={() => scroll('right')}
              className="absolute -right-5 md:-right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center text-slate-700 dark:text-slate-300 z-10 opacity-0 group-hover/carousel:opacity-100 transition-all hover:scale-110 hover:text-blue-600 border border-slate-100 dark:border-slate-700"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>

            {/* Product Scroll Container */}
            <motion.div 
              ref={scrollContainerRef}
              onScroll={handleScroll}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
                hidden: {}
              }}
              className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pb-6 pt-2"
            >
              {topDeals.map((product, index) => (
                <motion.div 
                  key={`${product.id}-${index}`}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                  }}
                  className="w-[160px] md:w-[180px] lg:w-[calc((100%-120px)/7)] flex-shrink-0 snap-start bg-white dark:bg-slate-900 rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer group border border-slate-100 dark:border-slate-800 flex flex-col justify-between"
                  onClick={() => addToCart(product)}
                >
                  <div>
                    <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 relative bg-slate-50 dark:bg-slate-800/50">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=500&q=80';
                        }}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {product.badge && (
                        <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-md z-10">
                          {product.badge}
                        </div>
                      )}
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white text-sm line-clamp-2 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {product.name}
                    </h3>
                  </div>
                  
                  <div className="mt-3 flex flex-col">
                    <span className="font-bold text-slate-900 dark:text-white">₹{product.price}</span>
                    {product.oldPrice && (
                      <span className="text-xs text-slate-400 line-through">₹{product.oldPrice}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom Scroll Indicator */}
            <div className="max-w-xs mx-auto h-1 bg-slate-200 dark:bg-slate-800 rounded-full mt-4 overflow-hidden relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-blue-600 rounded-full min-w-[20px]"
                style={{ width: `${Math.max(15, scrollProgress * 100)}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
