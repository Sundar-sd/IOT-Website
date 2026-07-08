import React from 'react';
import { Cpu, Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent text-slate-600 dark:text-slate-300 pt-20 pb-10 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600 text-white">
                <Cpu size={24} />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">HariChandra</span>
            </div>
            <p className="text-sm text-slate-400">
              Your one-stop destination for premium IoT components, robotics parts, and maker electronics.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"><Youtube size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Shop', 'Offers', 'Blog', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm flex items-center before:content-[''] before:w-1 before:h-1 before:bg-cyan-400 before:rounded-full before:mr-2 before:opacity-0 hover:before:opacity-100">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Categories</h3>
            <ul className="space-y-3">
              {['Arduino & Dev Boards', 'Raspberry Pi', 'Sensors & Modules', 'Motors & Drivers', 'Power Supplies', 'Drone Components'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin size={18} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>123 Innovation Drive, Tech Park, Silicon Valley, CA 94043</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Phone size={18} className="text-cyan-400 shrink-0" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Mail size={18} className="text-cyan-400 shrink-0" />
                <span>support@harichandra.store</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} HariChandra. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Shipping Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
