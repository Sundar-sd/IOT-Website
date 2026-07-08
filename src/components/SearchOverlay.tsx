import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search as SearchIcon, IndianRupee } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export const SearchOverlay: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, addToCart, products } = useAppContext();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = searchQuery.trim() === '' 
    ? [] 
    : products.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-[80] bg-slate-900/95 backdrop-blur-lg flex flex-col"
        >
          <div className="w-full max-w-4xl mx-auto px-4 pt-8 pb-4 relative">
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-8 right-4 text-white/50 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>
            
            <div className="relative mt-12 mb-8">
              <SearchIcon size={28} className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white/40" />
              <input
                autoFocus
                type="text"
                placeholder="Search products, categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-2xl py-6 pl-16 pr-8 text-2xl text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white/20 transition-all"
              />
            </div>

            <div className="overflow-y-auto max-h-[60vh] no-scrollbar">
              {searchQuery.trim() !== '' && filteredProducts.length === 0 && (
                <div className="text-center text-white/50 py-12">
                  No products found for "{searchQuery}"
                </div>
              )}

              {filteredProducts.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredProducts.map(product => (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      key={product.id}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group cursor-pointer"
                      onClick={() => {
                        addToCart(product);
                        setIsSearchOpen(false);
                      }}
                    >
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=500&q=80';
                        }}
                        className="w-16 h-16 rounded-lg object-cover bg-white" 
                      />
                      <div className="flex-1">
                        <h4 className="text-white font-medium">{product.name}</h4>
                        <span className="text-cyan-400 text-sm">{product.category}</span>
                      </div>
                      <div className="flex items-center text-white font-bold mr-4">
                        <IndianRupee size={16} />{product.price}
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium">
                        Add
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
