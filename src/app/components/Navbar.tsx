import { useState } from 'react';
import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';
import caLogo from '../../imports/New_CA_India_Logo.png';
import { BRAND_GREEN } from '../constants/brand';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm" aria-label="Primary">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-[#0B1F3A] focus:px-4 focus:py-2 focus:text-white focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#0B6EB0]"
      >
        Skip to main content
      </a>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B6EB0]">
              <img src={caLogo} alt="CA India Logo" className="h-12 sm:h-14 w-auto" />
              <div className="hidden sm:block">
                <div className="font-bold text-lg" style={{ color: '#0B6EB0' }}>Shivanichchi & Co.</div>
                <div className="text-xs tracking-wider" style={{ color: BRAND_GREEN }}>CHARTERED ACCOUNTANTS</div>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/#home" className="text-[#1A1A1A] hover:text-[#4A90E2] transition-colors relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2BB673] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/#about" className="text-[#1A1A1A] hover:text-[#4A90E2] transition-colors relative group">
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2BB673] group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link to="/services" className="text-[#1A1A1A] hover:text-[#4A90E2] transition-colors relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2BB673] group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link to="/#industries" className="text-[#1A1A1A] hover:text-[#4A90E2] transition-colors relative group">
              Industries
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2BB673] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/#resources" className="text-[#1A1A1A] hover:text-[#4A90E2] transition-colors relative group">
              Resources
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2BB673] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/contact" className="text-[#1A1A1A] hover:text-[#4A90E2] transition-colors relative group">
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2BB673] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex bg-[#0B1F3A] text-white px-6 py-3 rounded-lg hover:bg-[#4A90E2] transition-colors shadow-md"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#0B1F3A]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <Link to="/#home" className="text-[#1A1A1A] hover:text-[#4A90E2] transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to="/#about" className="text-[#1A1A1A] hover:text-[#4A90E2] transition-colors" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
              <Link to="/services" className="text-[#1A1A1A] hover:text-[#4A90E2] transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</Link>
              <Link to="/#industries" className="text-[#1A1A1A] hover:text-[#4A90E2] transition-colors" onClick={() => setMobileMenuOpen(false)}>Industries</Link>
              <Link to="/#resources" className="text-[#1A1A1A] hover:text-[#4A90E2] transition-colors" onClick={() => setMobileMenuOpen(false)}>Resources</Link>
              <Link to="/contact" className="text-[#1A1A1A] hover:text-[#4A90E2] transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
              <Link
                to="/contact"
                className="bg-[#0B1F3A] text-white px-6 py-3 rounded-lg hover:bg-[#4A90E2] transition-colors w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
