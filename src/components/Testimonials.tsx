import React from 'react';
import { motion } from 'motion/react';
import { testimonials } from '../data';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">What Our Customers Say</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Trusted by thousands of makers and professionals.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl relative"
            >
              <Quote size={40} className="absolute top-6 right-6 text-slate-200 dark:text-slate-800" />
              
              <div className="flex text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className={i < testimonial.rating ? 'fill-current' : 'text-slate-300 dark:text-slate-700'} />
                ))}
              </div>
              
              <p className="text-slate-700 dark:text-slate-300 mb-8 italic relative z-10">
                "{testimonial.comment}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center font-bold text-blue-600 dark:text-cyan-400 text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
