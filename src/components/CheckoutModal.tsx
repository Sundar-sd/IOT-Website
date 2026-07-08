import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Phone, User, ShieldCheck } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { OrderSuccessRobot } from './OrderSuccessRobot';

export const CheckoutModal: React.FC = () => {
  const { isCheckoutOpen, setIsCheckoutOpen, cartTotal, clearCart, user, placeOrder } = useAppContext();
  const [isSuccess, setIsSuccess] = useState(false);

  // Dynamic form states
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [otp, setOtp] = useState('1234');

  // Pre-fill states from current user context when modal is opened
  useEffect(() => {
    if (isCheckoutOpen) {
      setFullName(user?.name || 'Harish Raghav');
      setPhoneNumber(user?.phone || '+91 98765 43210');
      
      const defaultAddr = user?.addresses?.find(a => a.isDefault) || user?.addresses?.[0];
      const addressString = defaultAddr
        ? `${defaultAddr.label}: ${defaultAddr.street}, ${defaultAddr.city}, ${defaultAddr.state} - ${defaultAddr.zip}`
        : '123, Tech Park, Innovation City\nPhase 1, Electronic Sector\nChennai - 600001, Tamil Nadu';
      
      setAddress(addressString);
    }
  }, [isCheckoutOpen, user]);

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);

    // Save order through backend/local state
    await placeOrder({
      name: fullName,
      phone: phoneNumber,
      address: address,
      otp: otp
    });

    setTimeout(() => {
      setIsSuccess(false);
      setIsCheckoutOpen(false);
      clearCart();
    }, 5000);
  };

  const close = () => {
    if (!isSuccess) setIsCheckoutOpen(false);
  };

  return (
    <AnimatePresence>
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden relative z-10 border border-slate-200 dark:border-slate-800 flex flex-col max-h-[90vh]"
          >
            {!isSuccess && (
              <div className="absolute top-4 right-4 z-20">
                <button onClick={close} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors">
                  <X size={20} />
                </button>
              </div>
            )}

            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 flex flex-col items-center justify-center text-center h-full min-h-[400px]"
              >
                <OrderSuccessRobot />
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Order Confirmed!</h2>
                <p className="text-slate-500 dark:text-slate-400">Your IoT & Robotics gear is being packed and will be shipped soon.</p>
              </motion.div>
            ) : (
              <>
                <div className="p-6 md:p-8 overflow-y-auto no-scrollbar">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Checkout Details</h2>
                  <p className="text-slate-500 dark:text-slate-400 mb-8 text-sm">Please verify your pre-filled shipping information.</p>

                  <form id="checkout-form" onSubmit={handleCheckout} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">Full Name</label>
                        <div className="relative">
                          <User size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                          <input 
                            type="text" 
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 pl-12 pr-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">Phone Number</label>
                        <div className="relative">
                          <Phone size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                          <input 
                            type="tel" 
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 pl-12 pr-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">Delivery Address</label>
                      <div className="relative">
                        <MapPin size={18} className="absolute left-4 top-4 text-slate-400" />
                        <textarea 
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          rows={3}
                          className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 pl-12 pr-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none leading-relaxed" 
                          required
                        />
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30">
                      <div className="flex items-center gap-2 mb-4">
                        <ShieldCheck className="text-blue-600 dark:text-blue-400" size={20} />
                        <h3 className="font-bold text-slate-900 dark:text-white">Verification OTP</h3>
                      </div>
                      <div className="flex gap-4">
                        <input 
                          type="text" 
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          className="w-full max-w-[150px] bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl py-3 px-4 text-center text-xl font-bold tracking-widest text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                        <div className="flex items-center text-sm text-green-600 dark:text-green-400 font-medium bg-green-100 dark:bg-green-900/30 px-4 rounded-xl">
                          OTP Verified Automatically
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="p-6 md:p-8 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-slate-600 dark:text-slate-400 font-medium">Total Amount to Pay</span>
                    <span className="text-2xl font-bold text-slate-900 dark:text-white">
                      ₹{cartTotal}
                    </span>
                  </div>
                  <button 
                    form="checkout-form"
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-lg shadow-xl shadow-blue-500/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    Confirm Order & Pay ₹{cartTotal}
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
