import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Search, ShoppingCart, User, Moon, Sun, Menu, X } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export const Navbar: React.FC = () => {
  const { cartCount, setIsCartOpen, setIsSearchOpen, setIsProfileOpen, setAuthModalType, isDarkMode, toggleDarkMode, user, isAuthenticated } = useAppContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Products', href: '#products' },
    { name: 'Categories', href: '#categories' },
    { name: 'Offers', href: '#offers' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 cursor-pointer shrink-0 group"
          >
            <img src="/images/logo.jpg" alt="HariChandra Logo" className="w-10 h-10 object-contain rounded-xl" />
            <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500 dark:from-blue-400 dark:to-purple-400">
              HariChandra
            </span>
          </motion.div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative px-4 py-2 rounded-full cursor-pointer"
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <a 
                  href={link.href}
                  className={`relative z-10 font-medium transition-colors duration-300 ${
                    hoveredLink === link.name 
                      ? 'text-blue-700 dark:text-blue-300' 
                      : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {link.name}
                </a>
                {hoveredLink === link.name && (
                  <motion.div
                    layoutId="nav-hover-pill"
                    className="absolute inset-0 bg-blue-50 dark:bg-slate-800 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3 shrink-0">
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode} 
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsSearchOpen(true)} 
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
            >
              <Search size={20} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsProfileOpen(true)} 
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
            >
              <User size={20} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsCartOpen(true)} 
              className="relative p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
            >
              <ShoppingCart size={20} />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="absolute top-0 right-0 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold flex items-center justify-center rounded-full shadow-md"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
            
            <div className="flex items-center gap-2 pl-3 ml-1 border-l border-slate-200 dark:border-slate-800">
              {isAuthenticated && user ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsProfileOpen(true)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-blue-500/20">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-[100px] truncate">
                    {user.name}
                  </span>
                </motion.button>
              ) : (
                <>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setAuthModalType('signin')}
                    className="px-4 py-2 text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900"
                  >
                    Sign In
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(37, 99, 235, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setAuthModalType('signup')}
                    className="px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 rounded-xl shadow-lg shadow-blue-500/25 transition-all whitespace-nowrap"
                  >
                    Sign Up
                  </motion.button>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
             <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsProfileOpen(true)} 
              className="relative p-2 text-slate-600 dark:text-slate-300"
            >
              <User size={24} />
            </motion.button>
             <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsCartOpen(true)} 
              className="relative p-2 text-slate-600 dark:text-slate-300"
            >
              <ShoppingCart size={24} />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute top-0 right-0 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold flex items-center justify-center rounded-full"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="p-2 text-slate-600 dark:text-slate-300"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white dark:bg-black border-t border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link, index) => (
                <motion.a 
                  key={link.name} 
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.4 }}
                className="pt-4 mt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2"
              >
                <button onClick={toggleDarkMode} className="flex items-center px-4 py-3 text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-xl transition-colors">
                  {isDarkMode ? <Sun size={20} className="mr-3 text-slate-400"/> : <Moon size={20} className="mr-3 text-slate-400"/>}
                  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
                <button onClick={() => { setIsSearchOpen(true); setIsMobileMenuOpen(false); }} className="flex items-center px-4 py-3 text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-xl transition-colors">
                  <Search size={20} className="mr-3 text-slate-400"/> Search Products
                </button>
                {isAuthenticated && user ? (
                  <button onClick={() => { setIsProfileOpen(true); setIsMobileMenuOpen(false); }} className="flex items-center px-4 py-3 text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-xl transition-colors">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center text-white text-sm font-bold mr-3">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    {user.name}
                  </button>
                ) : (
                  <button onClick={() => { setAuthModalType('signin'); setIsMobileMenuOpen(false); }} className="flex items-center px-4 py-3 text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-xl transition-colors">
                    <User size={20} className="mr-3 text-slate-400"/> Sign In
                  </button>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
