import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Highlight active link
  const isActive = (path) => location.pathname === path 
    ? "text-brand-gold font-bold" 
    : "text-gray-600 dark:text-gray-300 hover:text-brand-gold dark:hover:text-brand-gold";

  // Close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 w-full z-50 bg-white/95 dark:bg-brand-900/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
      {/* Logo */}
      <Link to="/" onClick={closeMenu} className="flex-shrink-0 flex items-center cursor-pointer">
        <span className="text-2xl font-bold tracking-tighter text-brand-900 dark:text-white">
          VISTARA <span className="text-brand-gold font-serif italic">LIVING</span>
        </span>
      </Link>
          
          {/* Desktop Menu (Hidden on Mobile) */}
          <div className="hidden md:flex space-x-8 items-center font-medium text-sm">
            <Link to="/" className={`${isActive('/')} transition`}>Home</Link>
            <Link to="/products" className={`${isActive('/products')} transition`}>Products</Link>
            <Link to="/about" className={`${isActive('/about')} transition`}>About</Link>
            <Link to="/contact" className={`${isActive('/contact')} transition`}>Contact</Link>
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {theme === 'dark' ? (
                  <Moon className="w-5 h-5 text-brand-gold" fill="currentColor" />
                ) : (
                  <Sun className="w-5 h-5 text-orange-500" fill="currentColor" />
                )}
              </motion.div>
            </button>
          </div>

          {/* Mobile Buttons (Visible on Mobile) */}
          <div className="md:hidden flex items-center gap-4">
             {/* Mobile Theme Toggle */}
             <button onClick={toggleTheme} className="p-1">
                {theme === 'dark' ? <Moon size={24} className="text-brand-gold" /> : <Sun size={24} className="text-orange-500" />}
             </button>

             {/* Hamburger Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-900 dark:text-white p-1">
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN (The Fix) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-brand-900 border-b border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4 text-center">
              <Link to="/" onClick={closeMenu} className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-brand-gold">Home</Link>
              <Link to="/products" onClick={closeMenu} className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-brand-gold">Products & Services</Link>
              <Link to="/about" onClick={closeMenu} className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-brand-gold">About Us</Link>
              <Link to="/contact" onClick={closeMenu} className="text-lg font-bold text-brand-gold">Contact Us</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;