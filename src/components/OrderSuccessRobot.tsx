import React from 'react';
import { motion } from 'motion/react';

export const OrderSuccessRobot: React.FC = () => {
  return (
    <div className="relative w-48 h-48 flex items-center justify-center mb-4">
      {/* Background glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute inset-0 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-2xl"
      />

      <motion.svg
        width="160"
        height="160"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 12, stiffness: 100 }}
      >
        {/* Floating animation for the whole robot */}
        <motion.g
          animate={{ y: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          {/* Antenna */}
          <line x1="100" y1="40" x2="100" y2="20" stroke="#64748B" strokeWidth="4" strokeLinecap="round" />
          <motion.circle
            cx="100"
            cy="16"
            r="6"
            fill="#3B82F6"
            animate={{ fill: ["#3B82F6", "#60A5FA", "#3B82F6"], scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />

          {/* Head */}
          <rect x="60" y="40" width="80" height="60" rx="16" fill="#E2E8F0" className="dark:fill-slate-800" stroke="#94A3B8" strokeWidth="4" />
          
          {/* Ears */}
          <rect x="50" y="55" width="10" height="30" rx="4" fill="#94A3B8" />
          <rect x="140" y="55" width="10" height="30" rx="4" fill="#94A3B8" />

          {/* Face Screen */}
          <rect x="70" y="50" width="60" height="40" rx="8" fill="#0F172A" />

          {/* Eyes (Animated to blink and be happy) */}
          <motion.g
            initial={{ scaleY: 1 }}
            animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
            transition={{ repeat: Infinity, duration: 4, times: [0, 0.45, 0.5, 0.55, 1] }}
          >
            {/* Happy Eyes paths */}
            <path d="M 80 70 Q 85 60 90 70" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M 110 70 Q 115 60 120 70" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" fill="none" />
          </motion.g>

          {/* Cheeks */}
          <circle cx="75" cy="80" r="4" fill="#EF4444" opacity="0.6" />
          <circle cx="125" cy="80" r="4" fill="#EF4444" opacity="0.6" />

          {/* Body */}
          <path d="M 70 110 L 130 110 L 140 170 L 60 170 Z" fill="#E2E8F0" className="dark:fill-slate-800" stroke="#94A3B8" strokeWidth="4" strokeLinejoin="round" />
          
          {/* Heart / Core */}
          <motion.path
            d="M 100 135 C 100 135 95 130 90 130 C 85 130 85 137 90 142 L 100 150 L 110 142 C 115 137 115 130 110 130 C 105 130 100 135 100 135 Z"
            fill="#EF4444"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
          />

          {/* Arms */}
          <motion.g
            animate={{ rotate: [-10, 20, -10] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            style={{ transformOrigin: '55px 120px' }}
          >
            <rect x="35" y="115" width="25" height="10" rx="5" fill="#94A3B8" />
            <circle cx="30" cy="120" r="8" fill="#3B82F6" />
          </motion.g>

          <motion.g
            animate={{ rotate: [10, -20, 10] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.5 }}
            style={{ transformOrigin: '145px 120px' }}
          >
            <rect x="140" y="115" width="25" height="10" rx="5" fill="#94A3B8" />
            <circle cx="170" cy="120" r="8" fill="#3B82F6" />
          </motion.g>

          {/* Wheels/Base */}
          <rect x="65" y="170" width="70" height="15" rx="7.5" fill="#64748B" />
          <motion.circle cx="80" cy="177.5" r="4" fill="#CBD5E1" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} style={{ transformOrigin: '80px 177.5px' }} />
          <motion.circle cx="100" cy="177.5" r="4" fill="#CBD5E1" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} style={{ transformOrigin: '100px 177.5px' }} />
          <motion.circle cx="120" cy="177.5" r="4" fill="#CBD5E1" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} style={{ transformOrigin: '120px 177.5px' }} />

        </motion.g>

        {/* Floating Sparks */}
        <motion.circle cx="40" cy="40" r="3" fill="#FBBF24" initial={{ opacity: 0, y: 10 }} animate={{ opacity: [0, 1, 0], y: -20 }} transition={{ repeat: Infinity, duration: 2, delay: 0.2 }} />
        <motion.circle cx="160" cy="60" r="4" fill="#3B82F6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: [0, 1, 0], y: -30 }} transition={{ repeat: Infinity, duration: 2.5, delay: 0.8 }} />
        <motion.circle cx="150" cy="140" r="2" fill="#10B981" initial={{ opacity: 0, y: 10 }} animate={{ opacity: [0, 1, 0], y: -15 }} transition={{ repeat: Infinity, duration: 1.8, delay: 1.5 }} />
      </motion.svg>
    </div>
  );
};
