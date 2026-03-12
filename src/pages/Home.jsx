import React from 'react';
import Hero from '../components/Hero';
import HomeCarousel from '../components/HomeCarousel'; 
import Process from '../components/Process';
import Testimonials from '../components/Testimonials'; // <--- 1. IMPORT THIS
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white dark:bg-brand-dark transition-colors duration-300">
      
      {/* 1. HERO SLIDESHOW */}
      <Hero />
      
      {/* 2. INTRO PHILOSOPHY */}
      <section className="py-20 px-4 text-center bg-white dark:bg-brand-dark">
        <div className="max-w-3xl mx-auto">
          <span className="text-brand-gold font-bold tracking-widest uppercase text-xs mb-3 block">Since 2015</span>
          <h2 className="text-2xl md:text-4xl font-light text-brand-900 dark:text-white mb-6 leading-relaxed">
            "We believe that every wall is a canvas and every floor sets a stage. <strong className="font-bold">Vistara Living</strong> transforms empty spaces into living experiences."
          </h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto rounded-full"></div>
        </div>
      </section>

      {/* 3. PRODUCT SLIDER */}
      <HomeCarousel />

      {/* 4. PROCESS SECTION */}
      <Process />

      {/* 5. TESTIMONIALS (Social Proof) */}
      <Testimonials />  {/* <--- 2. ADD THIS HERE */}

      {/* 6. FINAL CTA BANNER */}
      <section className="py-20 bg-brand-900 text-white text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Renovate?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
          Whether it's a single room wallpaper or a full villa flooring, we are ready to help.
        </p>
        <Link 
          to="/contact" 
          className="inline-block bg-brand-gold text-black px-10 py-4 rounded-full font-bold hover:bg-white transition-colors duration-300 shadow-lg hover:shadow-brand-gold/50"
        >
          Get a Free Quote
        </Link>
      </section>

    </div>
  );
};

export default Home;