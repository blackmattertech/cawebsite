import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import caLogo from '../../imports/New_CA_India_Logo.png';
import { BRAND_GREEN } from '../constants/brand';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-3">
              <img src={caLogo} alt="CA India Logo" className="h-12 sm:h-14 w-auto" />
              <div className="hidden sm:block">
                <div className="font-bold text-lg" style={{ color: '#0B6EB0' }}>Shivanichchi & Co.</div>
                <div className="text-xs tracking-wider" style={{ color: BRAND_GREEN }}>CHARTERED ACCOUNTANTS</div>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#home" className="text-[#1A1A1A] hover:text-[#4A90E2] transition-colors relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2BB673] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#about" className="text-[#1A1A1A] hover:text-[#4A90E2] transition-colors relative group">
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2BB673] group-hover:w-full transition-all duration-300"></span>
            </a>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="text-[#1A1A1A] hover:text-[#4A90E2] transition-colors flex items-center gap-1 relative group">
                Services
                <ChevronDown className="w-4 h-4" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2BB673] group-hover:w-full transition-all duration-300"></span>
              </button>

              {servicesOpen && (
                <div className="absolute top-full mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                  <a href="#services" className="block px-4 py-2 text-[#1A1A1A] hover:bg-[#F7F9FC] hover:text-[#4A90E2] transition-colors">Taxation</a>
                  <a href="#services" className="block px-4 py-2 text-[#1A1A1A] hover:bg-[#F7F9FC] hover:text-[#4A90E2] transition-colors">Audit & Assurance</a>
                  <a href="#services" className="block px-4 py-2 text-[#1A1A1A] hover:bg-[#F7F9FC] hover:text-[#4A90E2] transition-colors">GST Consulting</a>
                  <a href="#services" className="block px-4 py-2 text-[#1A1A1A] hover:bg-[#F7F9FC] hover:text-[#4A90E2] transition-colors">Compliance</a>
                  <a href="#services" className="block px-4 py-2 text-[#1A1A1A] hover:bg-[#F7F9FC] hover:text-[#4A90E2] transition-colors">Business Advisory</a>
                </div>
              )}
            </div>

            <a href="#industries" className="text-[#1A1A1A] hover:text-[#4A90E2] transition-colors relative group">
              Industries
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2BB673] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#resources" className="text-[#1A1A1A] hover:text-[#4A90E2] transition-colors relative group">
              Resources
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2BB673] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#careers" className="text-[#1A1A1A] hover:text-[#4A90E2] transition-colors relative group">
              Careers
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2BB673] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="text-[#1A1A1A] hover:text-[#4A90E2] transition-colors relative group">
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2BB673] group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className="bg-[#0B1F3A] text-white px-6 py-3 rounded-lg hover:bg-[#4A90E2] transition-colors shadow-md">
              Get in Touch
            </button>
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
              <a href="#home" className="text-[#1A1A1A] hover:text-[#4A90E2] transition-colors">Home</a>
              <a href="#about" className="text-[#1A1A1A] hover:text-[#4A90E2] transition-colors">About Us</a>
              <a href="#services" className="text-[#1A1A1A] hover:text-[#4A90E2] transition-colors">Services</a>
              <a href="#industries" className="text-[#1A1A1A] hover:text-[#4A90E2] transition-colors">Industries</a>
              <a href="#resources" className="text-[#1A1A1A] hover:text-[#4A90E2] transition-colors">Resources</a>
              <a href="#careers" className="text-[#1A1A1A] hover:text-[#4A90E2] transition-colors">Careers</a>
              <a href="#contact" className="text-[#1A1A1A] hover:text-[#4A90E2] transition-colors">Contact Us</a>
              <button className="bg-[#0B1F3A] text-white px-6 py-3 rounded-lg hover:bg-[#4A90E2] transition-colors w-full">
                Get in Touch
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
