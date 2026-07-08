import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, IndianRupee, ShoppingBag } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export const CategoryModal: React.FC = () => {
  const { selectedCategory, setSelectedCategory, addToCart, products } = useAppContext();

  const categoryProducts = selectedCategory 
    ? products.filter(p => p.category === selectedCategory)
    : [];

  return (
    <AnimatePresence>
      {selectedCategory && (
        <div className="fixed inset-0 z-[85] flex items-center justify-center px-4 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCategory(null)}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white dark:bg-slate-900 w-full max-w-5xl max-h-[85vh] rounded-3xl shadow-2xl overflow-hidden relative z-10 border border-slate-200 dark:border-slate-800 flex flex-col"
          >
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between sticky top-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-20">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <ShoppingBag className="text-blue-600 dark:text-cyan-400" />
                {selectedCategory} Components
              </h2>
              <button 
                onClick={() => setSelectedCategory(null)}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto no-scrollbar">
              {categoryProducts.length === 0 ? (
                <div className="text-center text-slate-500 dark:text-slate-400 py-12">
                  No components found for this category yet.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {categoryProducts.map((product, index) => (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      key={product.id}
                      className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all group flex flex-col"
                    >
                      <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white mb-4 relative">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=500&q=80';
                          }}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                        />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1 line-clamp-2 min-h-[3rem]">{product.name}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex-grow">{product.description || 'Premium quality electronic component.'}</p>
                      
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
                        <div className="flex items-center text-lg font-bold text-slate-900 dark:text-white">
                          <IndianRupee size={18} />{product.price}
                        </div>
                        <button 
                          onClick={() => addToCart(product)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
