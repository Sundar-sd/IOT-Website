import React from 'react';
import { motion } from 'motion/react';
import { Star, ShoppingCart, IndianRupee } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const SkeletonCard = () => (
  <div className="glass-card rounded-2xl overflow-hidden flex flex-col animate-pulse">
    <div className="aspect-square bg-slate-200 dark:bg-slate-800" />
    <div className="p-5 space-y-3">
      <div className="h-3 w-24 bg-slate-200 dark:bg-slate-800 rounded" />
      <div className="h-4 w-40 bg-slate-200 dark:bg-slate-800 rounded" />
      <div className="h-3 w-32 bg-slate-200 dark:bg-slate-800 rounded" />
      <div className="h-6 w-16 bg-slate-200 dark:bg-slate-800 rounded pt-4 mt-auto" />
    </div>
  </div>
);

export const FeaturedProducts: React.FC = () => {
  const { addToCart, products, isLoadingProducts } = useAppContext();

  return (
    <section id="products" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Products</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Hand-picked components for your next big project.</p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {}
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {isLoadingProducts ? (
            Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
          ) : products.slice(0, 8).map((product, index) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
              }}
              className="glass-card rounded-2xl overflow-hidden flex flex-col group"
            >
              {/* Image Section */}
              <div className="relative aspect-square overflow-hidden bg-white">
                {product.badge && (
                  <div className="absolute top-3 left-3 z-10 px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full shadow-lg">
                    {product.badge}
                  </div>
                )}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=500&q=80';
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Quick Add Overlay */}
                <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    onClick={() => addToCart(product)}
                    className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-slate-900 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-full font-semibold shadow-lg flex items-center gap-2"
                  >
                    <ShoppingCart size={18} /> Add to Cart
                  </button>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-blue-600 dark:text-cyan-400 uppercase tracking-wider">{product.category}</span>
                  <div className="flex items-center text-amber-500 text-sm">
                    <Star size={14} className="fill-current" />
                    <span className="ml-1 font-medium text-slate-700 dark:text-slate-300">{product.rating}</span>
                  </div>
                </div>
                
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 line-clamp-1" title={product.name}>
                  {product.name}
                </h3>
                
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2 flex-grow">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex flex-col">
                    <div className="flex items-center text-lg font-bold text-slate-900 dark:text-white">
                      <IndianRupee size={16} />{product.price}
                    </div>
                    {product.oldPrice && (
                      <div className="flex items-center text-sm text-slate-400 line-through">
                        <IndianRupee size={12} />{product.oldPrice}
                      </div>
                    )}
                  </div>
                  
                  <button 
                    onClick={() => addToCart(product)}
                    className="p-2 rounded-lg bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
