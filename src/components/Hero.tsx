import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { RobotAnimation } from './RobotAnimation';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold text-sm mb-6 border border-blue-200 dark:border-blue-800/50">
              Welcome to HariChandra Store
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
              Next Generation <br className="hidden lg:block"/>
              <span className="text-gradient">IoT & Robotics</span> Store
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0">
              Everything you need to build Smart Projects. From microcontrollers to advanced drone parts, discover premium electronics components with lightning-fast delivery.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg flex items-center justify-center gap-2 shadow-xl shadow-blue-600/30 transition-all hover:-translate-y-1 group">
                <ShoppingBag size={20} className="group-hover:animate-bounce" />
                Shop Now
              </button>
              <button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold text-lg flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:-translate-y-1">
                Explore Products
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative block h-[400px] lg:h-[500px] mt-12 lg:mt-0 w-full max-w-[500px] mx-auto lg:max-w-none"
          >
            {/* 3D Robot / IoT Animation */}
            <div className="absolute inset-0">
              <RobotAnimation />
            </div>
            
            {/* Center decorative element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500 rounded-full blur-[80px] opacity-50"></div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
