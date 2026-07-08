import React from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export const Newsletter: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-br from-blue-600 to-purple-700 p-8 md:p-16 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Background circles */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-cyan-400/20 blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">Subscribe to our newsletter for the latest product announcements, tutorials, and exclusive offers.</p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-md"
                required
              />
              <button 
                type="submit"
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 group"
              >
                Subscribe
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
