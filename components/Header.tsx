import React, { useState, useEffect } from 'react';
import { Shield, Phone, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-slate-200' : 'bg-transparent border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2.5 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${isScrolled ? 'bg-primary-600 text-white' : 'bg-white text-primary-600'}`}>
              <Shield size={20} strokeWidth={2.5} />
            </div>
            <span className={`font-display text-xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-brand-900' : 'text-white'}`}>
              QuickCover<span className={isScrolled ? 'text-primary-600' : 'text-primary-300'}>USA</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-6">
                <a href="#how-it-works" className={`text-sm font-medium transition-colors hover:text-primary-500 ${isScrolled ? 'text-slate-600' : 'text-slate-300'}`}>How it Works</a>
                <a href="#testimonials" className={`text-sm font-medium transition-colors hover:text-primary-500 ${isScrolled ? 'text-slate-600' : 'text-slate-300'}`}>Reviews</a>
            </nav>
            <div className="flex items-center gap-4">
                <a href="tel:18005550199" className={`flex items-center gap-2 font-medium text-sm transition-colors ${isScrolled ? 'text-brand-900 hover:text-primary-600' : 'text-white hover:text-primary-200'}`}>
                <Phone size={18} />
                1-800-555-0199
                </a>
                <a href="#get-quote" className="bg-action-600 hover:bg-action-700 text-white text-sm font-semibold py-2.5 px-6 rounded-lg shadow-lg shadow-action-600/20 transition-all transform hover:-translate-y-0.5 active:scale-95">
                Get My Quote
                </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} className={isScrolled ? 'text-slate-800' : 'text-white'} /> : <Menu size={24} className={isScrolled ? 'text-slate-800' : 'text-white'} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 absolute top-full left-0 w-full p-4 shadow-xl flex flex-col gap-4">
              <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 font-medium py-2">How it Works</a>
              <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 font-medium py-2">Reviews</a>
              <hr className="border-slate-100" />
              <a href="tel:18005550199" className="flex items-center gap-2 text-brand-900 font-medium py-2">
                  <Phone size={18} /> 1-800-555-0199
              </a>
              <a href="#get-quote" onClick={() => setMobileMenuOpen(false)} className="bg-action-600 text-white text-center font-medium py-3 rounded-lg">
                  Get My Quote
              </a>
          </div>
      )}
    </header>
  );
};

export default Header;