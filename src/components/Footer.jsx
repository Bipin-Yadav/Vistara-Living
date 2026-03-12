import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer" className="bg-brand-900 text-white pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand Section */}
        <div>
          <Link to="/" className="text-2xl font-bold tracking-tighter text-white">
            VISTARA <span className="text-brand-gold font-light">LIVING</span>
          </Link>
          <p className="mt-6 text-gray-400 leading-relaxed">
            Bringing you a high-end range of interior products. We design spaces that look rich, elegant, and feel like home.
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-brand-gold">Contact Us</h3>
          <div className="space-y-4">
            
            {/* Address (Clickable to Maps) */}
            <a 
              href="https://maps.google.com/?q=Ambience+Decor+Andheri+West" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-start gap-4 group"
            >
              <MapPin className="text-brand-gold mt-1 flex-shrink-0 group-hover:text-white transition" />
              <p className="text-gray-300 group-hover:text-white transition">
                Shop No 1, Divya Ratna Apt, Bhardawadi Rd, near Azad Metro station, Andheri West, Mumbai, 400053.
              </p>
            </a>

            {/* Phone (Clickable) */}
            <a href="tel:+917021827090" className="flex items-center gap-4 group">
              <Phone className="text-brand-gold flex-shrink-0 group-hover:text-white transition" />
              <p className="text-gray-300 group-hover:text-white transition">+91 70218 27090</p>
            </a>

            <div className="flex items-center gap-4">
              <Mail className="text-brand-gold flex-shrink-0" />
              <p className="text-gray-300">contact@ambiencedecor.in</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-brand-gold">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            <li><Link to="/" className="hover:text-brand-gold hover:translate-x-1 inline-block transition-all">Home</Link></li>
            <li><Link to="/products" className="hover:text-brand-gold hover:translate-x-1 inline-block transition-all">Products & Services</Link></li>
            <li><Link to="/about" className="hover:text-brand-gold hover:translate-x-1 inline-block transition-all">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-brand-gold hover:translate-x-1 inline-block transition-all">Get a Quote</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center px-4">
        <span>© {new Date().getFullYear()} Vistara Living. All rights reserved.</span>
        <span className="mt-2 md:mt-0 opacity-50 text-xs">Developed by Bipin DevOps</span>
      </div>
    </footer>
  );
};

export default Footer;