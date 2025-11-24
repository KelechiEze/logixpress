import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-10 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-0 h-0 border-l-[12px] border-l-transparent border-b-[20px] border-b-brand-orange border-r-[4px] border-r-transparent transform -skew-x-12"></div>
              <span className="font-bold text-2xl tracking-tight">
                Logi<span className="font-light">Xpress</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Global logistics partner delivering excellence across borders. Fast, reliable, and secure shipping solutions for modern businesses.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-orange transition-colors">Air Freight</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Truck Freight</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Warehousing</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Rail Freight</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Ship Freight</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-orange transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact - Highlights */}
          <div>
             <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-medium">Get in Touch</h3>
                <ArrowUpRight className="w-10 h-10 text-gray-600" />
             </div>
             
             <div className="space-y-6">
                <div>
                    <p className="text-xs text-gray-500 uppercase font-bold mb-1">Email</p>
                    <a href="mailto:contact@logixpress.com" className="text-lg hover:text-brand-orange transition-colors">contact@logixpress.com</a>
                </div>
                <div>
                    <p className="text-xs text-gray-500 uppercase font-bold mb-1">Phone</p>
                    <a href="tel:+9293339296" className="text-lg hover:text-brand-orange transition-colors">+929 333 9296</a>
                </div>
                <div>
                    <p className="text-xs text-gray-500 uppercase font-bold mb-1">Office Location</p>
                    <p className="text-lg text-gray-300">100 S Main St, New York, NY</p>
                </div>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">Copyright 2025 LogiXpress by Reacthemes</p>
            <button 
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                className="bg-brand-orange p-3 rounded-full text-white hover:bg-orange-600 transition-colors"
            >
                <ArrowUpRight className="w-5 h-5 rotate-[-45deg]" />
            </button>
        </div>
      </div>
    </footer>
  );
};
