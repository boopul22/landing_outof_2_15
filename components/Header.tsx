import React, { useState, useEffect } from 'react';
import { Shield, Phone, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b ${isScrolled ? 'shadow-md border-slate-200' : 'border-slate-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 cursor-pointer group" onClick={handleLogoClick}>
            <div className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors bg-primary-600 text-white">
              <Shield size={20} strokeWidth={2.5} />
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-brand-900">
              Allstate <span className="text-primary-600">insurance</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-6">
              <Link to="/#how-it-works" className="text-sm font-medium transition-colors hover:text-primary-500 text-slate-600">How it Works</Link>
              <Link to="/#testimonials" className="text-sm font-medium transition-colors hover:text-primary-500 text-slate-600">Reviews</Link>
            </nav>
            <div className="flex items-center gap-4">
              <a href="tel:18005550199" className="flex items-center gap-2 font-medium text-sm transition-colors text-brand-900 hover:text-primary-600">
                <Phone size={18} />
                1-800-555-0199
              </a>
              <Link to="/" onClick={() => isHome && window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-action-600 hover:bg-action-700 text-white text-sm font-semibold py-2.5 px-6 rounded-lg shadow-lg shadow-action-600/20 transition-all transform hover:-translate-y-0.5 active:scale-95">
                Get My Quote
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-brand-900 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 absolute top-full left-0 w-full p-4 shadow-xl flex flex-col gap-4">
          <Link to="/#how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 font-medium py-2">How it Works</Link>
          <Link to="/#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 font-medium py-2">Reviews</Link>
          <hr className="border-slate-100" />
          <a href="tel:18005550199" className="flex items-center gap-2 text-brand-900 font-medium py-2">
            <Phone size={18} /> 1-800-555-0199
          </a>
          <Link to="/" onClick={() => { setMobileMenuOpen(false); if (isHome) window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="bg-action-600 text-white text-center font-medium py-3 rounded-lg">
            Get My Quote
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;