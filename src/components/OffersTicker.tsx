import React from 'react';
import { motion } from 'motion/react';
import { offers } from '../data';

export const OffersTicker: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white overflow-hidden py-3 border-y border-white/10">
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div 
          className="flex space-x-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {/* Duplicate offers to create seamless loop */}
          {[...offers, ...offers].map((offer, index) => (
            <div key={index} className="flex items-center text-sm md:text-base font-semibold tracking-wide">
              {offer}
              <span className="mx-8 text-white/50">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
