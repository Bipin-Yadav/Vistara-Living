import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

// High-quality images representing your different services
const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80",
    title: "Redefining Interior Spaces",
    subtitle: "Premium wallpapers and bespoke furnishings curated for your dream home."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    title: "Flooring That Lasts",
    subtitle: "From vinyl to wooden textures, step onto luxury every day."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80",
    title: "Elegant Fabrications",
    subtitle: "Custom curtains and upholstery that add softness to your sanctuary."
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide logic (changes every 5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      
      {/* 1. BACKGROUND SLIDESHOW */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }} // Smooth slow crossfade
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/50 z-10" /> {/* Dark Overlay */}
          <img 
            src={heroSlides[currentSlide].image} 
            alt="Hero Slide" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* 2. TEXT CONTENT */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6">
        <div className="max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-brand-gold font-bold tracking-[0.2em] uppercase mb-4 block text-sm md:text-base"
          >
            Since 2015 • Mumbai
          </motion.span>

          <motion.h1 
            key={currentSlide + "-title"} // Re-animates text when slide changes
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            {heroSlides[currentSlide].title}
          </motion.h1>

          <motion.p 
            key={currentSlide + "-sub"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-200 mb-10 font-light max-w-2xl mx-auto"
          >
            {heroSlides[currentSlide].subtitle}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/products" 
              className="bg-brand-gold text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition duration-300 flex items-center justify-center gap-2"
            >
              Explore Collections <ArrowRight size={20} />
            </Link>
            <Link 
              to="/contact" 
              className="border border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition duration-300"
            >
              Book Consultation
            </Link>
          </motion.div>
        </div>
      </div>

      {/* 3. SCROLL INDICATOR (The "Hint" to scroll down) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-white flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-xs uppercase tracking-widest text-brand-gold">Scroll</span>
        <ChevronDown size={24} />
      </motion.div>

    </section>
  );
};

export default Hero;