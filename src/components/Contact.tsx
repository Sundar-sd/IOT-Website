import React from 'react';
import { MapPin, Phone, Mail, HeadphonesIcon, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-transparent relative border-t border-slate-100 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Contact Us</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have questions about our products or need support for your IoT project? We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Location */}
          <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
              <MapPin size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Location</h3>
            <p className="text-slate-600 dark:text-slate-400">
              123 Innovation Drive<br />
              Tech Park, Silicon Valley<br />
              CA 94025
            </p>
          </div>

          {/* Contact Details */}
          <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
              <Phone size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Phone & Email</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-3 flex items-center justify-center gap-2">
              <Phone size={16} className="text-purple-500" />
              <a href="tel:+1234567890" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">+1 (234) 567-890</a>
            </p>
            <p className="text-slate-600 dark:text-slate-400 flex items-center justify-center gap-2">
              <Mail size={16} className="text-purple-500" />
              <a href="mailto:info@harichandra.store" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">info@harichandra.store</a>
            </p>
          </div>

          {/* Support */}
          <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-6">
              <HeadphonesIcon size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">24/7 Support</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Our technical team is available round the clock for your queries.
            </p>
            <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 flex items-center gap-2 justify-center">
              <Clock size={16} /> Always Open
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
