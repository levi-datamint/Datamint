import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Page } from '../App';
import { Logo } from './Brand';

interface NavbarProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = (page: Page) => 
    `font-medium transition-colors ${currentPage === page ? 'text-mint-700' : 'text-gray-600 hover:text-mint-700'}`;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || currentPage !== 'home' ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="cursor-pointer" onClick={() => onNavigate('home')}>
             <Logo />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => onNavigate('product')} className={navClass('product')}>
              Product
            </button>
            <button onClick={() => onNavigate('features')} className={navClass('features')}>
              Features
            </button>
            {/* <button onClick={() => onNavigate('casestudies')} className={navClass('casestudies')}>
              Case Studies
            </button> */}
            {/* <button onClick={() => onNavigate('pricing')} className={navClass('pricing')}>
              Pricing
            </button> */}
            <button onClick={() => onNavigate('blog')} className={navClass('blog')}>
              Blog
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-mint-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-mint-800 transition-all transform hover:scale-105 shadow-lg shadow-mint-900/20"
            >
              Book a Demo
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600">
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-4 flex flex-col space-y-4 shadow-lg h-screen">
          <button onClick={() => { onNavigate('product'); setIsMobileMenuOpen(false); }} className="text-left text-lg font-medium text-gray-800 py-2 border-b border-gray-50">
            Product
          </button>
          <button onClick={() => { onNavigate('features'); setIsMobileMenuOpen(false); }} className="text-left text-lg font-medium text-gray-800 py-2 border-b border-gray-50">
            Features
          </button>
          <button onClick={() => { onNavigate('casestudies'); setIsMobileMenuOpen(false); }} className="text-left text-lg font-medium text-gray-800 py-2 border-b border-gray-50">
            Case Studies
          </button>
          {/* <button onClick={() => { onNavigate('pricing'); setIsMobileMenuOpen(false); }} className="text-left text-lg font-medium text-gray-800 py-2 border-b border-gray-50">
            Pricing
          </button> */}
          <button onClick={() => { onNavigate('blog'); setIsMobileMenuOpen(false); }} className="text-left text-lg font-medium text-gray-800 py-2 border-b border-gray-50">
            Blog
          </button>
           <button onClick={() => { onNavigate('about'); setIsMobileMenuOpen(false); }} className="text-left text-lg font-medium text-gray-800 py-2 border-b border-gray-50">
            About Us
          </button>
          <button 
            onClick={() => { onNavigate('contact'); setIsMobileMenuOpen(false); }}
            className="bg-mint-900 text-white px-6 py-3 rounded-xl font-medium w-full mt-4"
          >
            Book a Demo
          </button>
        </div>
      )}
    </nav>
  );
};