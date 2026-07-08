import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, CheckCircle2 } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export const RobotConfirmation: React.FC = () => {
  const { isRobotVisible, robotMessage } = useAppContext();

  return (
    <AnimatePresence>
      {isRobotVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, y: 50, scale: 0.5, rotate: 10 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="fixed bottom-8 right-8 z-[100] bg-white dark:bg-slate-900 shadow-2xl rounded-2xl p-4 border-2 border-blue-500/50 flex items-center gap-4 max-w-sm"
        >
          <div className="relative">
             <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-xl text-blue-600 dark:text-blue-400">
               <motion.div
                 animate={{ y: [0, -5, 0] }}
                 transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
               >
                 <Bot size={32} />
               </motion.div>
             </div>
             <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="absolute -top-2 -right-2 bg-green-500 rounded-full text-white"
             >
                <CheckCircle2 size={16} />
             </motion.div>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">Beep Boop!</h4>
            <p className="text-slate-600 dark:text-slate-300 text-xs font-medium">{robotMessage}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
