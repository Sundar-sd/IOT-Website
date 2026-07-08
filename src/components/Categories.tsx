import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const SkeletonCategory = () => (
  <div className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md animate-pulse">
    <div className="aspect-[4/3] bg-slate-200 dark:bg-slate-800" />
    <div className="absolute bottom-0 left-0 right-0 p-5">
      <div className="h-5 w-28 bg-slate-300 dark:bg-slate-700 rounded" />
    </div>
  </div>
);

export const Categories: React.FC = () => {
  const { setSelectedCategory, categories, isLoadingCategories } = useAppContext();
  return (
    <section id="categories" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Shop by Category</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl">Find exactly what you need from our extensive collection of specialized electronic components.</p>
          </div>
          <button className="text-blue-600 dark:text-blue-400 font-semibold flex items-center hover:underline group">
            View All Categories <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {isLoadingCategories ? (
            Array.from({ length: 4 }).map((_, i) => <SkeletonCategory key={i} />)
          ) : categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedCategory(category.name)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all"
            >
              <div className="aspect-[4/3] w-full">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://placehold.co/500x500/1e293b/ffffff?text=${encodeURIComponent(category.name)}`;
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-bold text-lg mb-1">{category.name}</h3>
                <span className="text-cyan-300 text-sm font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 inline-block">
                  Explore Components →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
