import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import caLogo from '../../imports/New_CA_India_Logo.png';
import { BRAND_GREEN } from '../constants/brand';

export default function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={caLogo} alt="CA India Logo" className="h-12 w-auto" />
              <div>
                <div className="font-bold text-lg" style={{ color: '#0B6EB0' }}>Shivanichchi & Co.</div>
                <div className="text-xs tracking-wider" style={{ color: BRAND_GREEN }}>CHARTERED ACCOUNTANTS</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Building trust through excellence in financial services. Your success is our commitment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#home" className="text-sm sm:text-base text-white/70 hover:text-[#2BB673] transition-colors">Home</a></li>
              <li><a href="#about" className="text-sm sm:text-base text-white/70 hover:text-[#2BB673] transition-colors">About Us</a></li>
              <li><a href="#services" className="text-sm sm:text-base text-white/70 hover:text-[#2BB673] transition-colors">Services</a></li>
              <li><a href="#industries" className="text-sm sm:text-base text-white/70 hover:text-[#2BB673] transition-colors">Industries</a></li>
              <li><a href="#careers" className="text-sm sm:text-base text-white/70 hover:text-[#2BB673] transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Our Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#services" className="text-sm sm:text-base text-white/70 hover:text-[#2BB673] transition-colors">Taxation</a></li>
              <li><a href="#services" className="text-sm sm:text-base text-white/70 hover:text-[#2BB673] transition-colors">Audit & Assurance</a></li>
              <li><a href="#services" className="text-sm sm:text-base text-white/70 hover:text-[#2BB673] transition-colors">GST Consulting</a></li>
              <li><a href="#services" className="text-sm sm:text-base text-white/70 hover:text-[#2BB673] transition-colors">Compliance</a></li>
              <li><a href="#services" className="text-sm sm:text-base text-white/70 hover:text-[#2BB673] transition-colors">Business Advisory</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Contact Us</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#2BB673] flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-xs sm:text-sm"># 824, 13th Cross, Mahalakshmi Layout, Bengaluru - 560 086.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#2BB673] flex-shrink-0" />
                <span className="text-white/70 text-xs sm:text-sm">+91 9901103901</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#2BB673] flex-shrink-0" />
                <span className="text-white/70 text-xs sm:text-sm">shivanichchiashok@gmail.com</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-6">
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-[#2BB673] flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-[#2BB673] flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-[#2BB673] flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-[#2BB673] flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-white/60 text-xs sm:text-sm text-center md:text-left">
            © 2026 Shivanichchi & Co. All rights reserved.
          </p>
          <a
            href="https://blackmattertech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-[#2BB673] transition-colors text-xs sm:text-sm text-center"
          >
            Powered by BlackMatter Technologies Pvt. Ltd.
          </a>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <a href="#" className="text-white/60 hover:text-[#2BB673] transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-[#2BB673] transition-colors">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-[#2BB673] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
