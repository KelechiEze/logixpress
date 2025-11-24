import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'Service', href: 'service' },
    { name: 'Company', href: 'company' },
    { name: 'Blog', href: 'blog' },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer gap-2"
            onClick={() => onNavigate('home')}
          >
            <div className="w-0 h-0 border-l-[15px] border-l-transparent border-b-[25px] border-b-brand-orange border-r-[5px] border-r-transparent transform -skew-x-12"></div>
            <span className="font-bold text-2xl tracking-tight text-white">
              Logi<span className="font-light">Xpress</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <button 
                  onClick={() => onNavigate(link.href)}
                  className={`text-sm font-semibold uppercase tracking-wider flex items-center hover:text-brand-orange transition-colors ${currentPage === link.href ? 'text-brand-orange' : 'text-gray-300'}`}
                >
                  {link.name}
                </button>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-6">
             <button 
                onClick={() => onNavigate('track')}
                className="text-white hover:text-brand-orange transition-colors"
                title="Track Shipment"
             >
                <Search className="w-5 h-5" />
             </button>
            <button className="border border-white/30 text-white px-6 py-3 rounded-full hover:bg-brand-orange hover:border-brand-orange transition-all duration-300 text-sm font-bold uppercase tracking-wide">
              Book Shipment
            </button>
            <div className="cursor-pointer">
                <div className="w-8 h-0.5 bg-white mb-1.5"></div>
                <div className="w-6 h-0.5 bg-white ml-auto"></div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-brand-dark/95 backdrop-blur-md absolute w-full border-b border-white/10">
          <div className="px-4 pt-2 pb-8 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                    onNavigate(link.href);
                    setIsMobileOpen(false);
                }}
                className="block w-full text-left px-3 py-4 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md"
              >
                {link.name}
              </button>
            ))}
             <button
                onClick={() => {
                    onNavigate('track');
                    setIsMobileOpen(false);
                }}
                className="block w-full text-left px-3 py-4 text-base font-medium text-brand-orange hover:bg-white/5 rounded-md"
              >
                Track Shipment
              </button>
          </div>
        </div>
      )}
    </nav>
  );
};