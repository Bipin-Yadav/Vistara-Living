import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Users, Smile, CheckCircle, ArrowRight, PenTool, TrendingUp } from 'lucide-react';

// 1. STATS DATA
const stats = [
  { label: "Years Experience", value: "10+", icon: <Clock /> },
  { label: "Projects Completed", value: "500+", icon: <CheckCircle /> },
  { label: "Happy Clients", value: "100%", icon: <Smile /> },
  { label: "Design Awards", value: "15", icon: <Award /> },
];

const About = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-brand-dark transition-colors duration-300">
      
      {/* 1. HERO SECTION (Minimalist & Bold) */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/10 -skew-x-12 transform translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-bold text-brand-900 dark:text-white mb-6 leading-tight">
              We Don't Just Design. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-600">
                We Curate Emotion.
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Since 2015, Ambience Decor has been redefining spaces in Mumbai. 
              We bridge the gap between <strong>Design Vision</strong> and <strong>Technical Perfection</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE FOUNDERS (Glassmorphism Cards) */}
      <section className="py-16 bg-white dark:bg-brand-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-900 dark:text-white">Meet The Visionaries</h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            
            {/* Founder 1: Ashish */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="relative group bg-gray-50 dark:bg-brand-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <PenTool size={100} className="text-brand-gold" />
              </div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center text-3xl font-bold text-white mb-6 shadow-lg shadow-brand-gold/30">
                  AJ
                </div>
                <h3 className="text-2xl font-bold text-brand-900 dark:text-white">Ms. Ashish Jaiswar</h3>
                <p className="text-brand-gold font-medium uppercase tracking-wider text-sm mb-4">Principal Interior Designer</p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  "Design is not just about how it looks, but how it feels. My focus is on creating spaces that reflect the client's personality while maximizing utility."
                </p>
              </div>
            </motion.div>

            {/* Founder 2: Vivek */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="relative group bg-gray-50 dark:bg-brand-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <TrendingUp size={100} className="text-brand-gold" />
              </div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-brand-900 dark:bg-white rounded-full flex items-center justify-center text-3xl font-bold text-white dark:text-brand-900 mb-6 shadow-lg">
                  VJ
                </div>
                <h3 className="text-2xl font-bold text-brand-900 dark:text-white">Mr. Vivek Jaiswar</h3>
                <p className="text-brand-gold font-medium uppercase tracking-wider text-sm mb-4">Expert Technical Head</p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  "A great design fails without perfect execution. I ensure that every wallpaper, flooring panel, and fabric is installed with 100% technical precision."
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. ANIMATED STATS BAR */}
      <section className="py-20 bg-brand-900 text-white relative overflow-hidden">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={index}
                className="p-4"
              >
                <div className="text-brand-gold flex justify-center mb-4 transform scale-125">{stat.icon}</div>
                <h4 className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</h4>
                <p className="text-gray-400 uppercase tracking-wider text-xs font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US (Values) */}
      <section className="py-24 px-4 bg-gray-50 dark:bg-brand-dark transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-gold font-bold uppercase tracking-wider text-sm">Our Promise</span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-900 dark:text-white mt-2 mb-6">
                Why Ambience Decor?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                We understand that renovating your home is a big decision. That's why we focus on transparency, budget, and timing.
              </p>
              
              <ul className="space-y-6">
                {[
                  { title: "Budget Friendly", desc: "Luxury looks that fit your financial plan." },
                  { title: "On-Time Delivery", desc: "We respect deadlines. No endless delays." },
                  { title: "End-to-End Service", desc: "From material selection to final installation." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1 bg-white dark:bg-brand-800 p-2 rounded-full shadow-sm h-fit text-green-500">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-900 dark:text-white">{item.title}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Visual Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-brand-gold rounded-2xl transform translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80" 
                alt="Our Work" 
                className="relative rounded-2xl shadow-2xl z-10 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-20 bg-white dark:bg-brand-900 border-t border-gray-100 dark:border-gray-800 text-center">
        <h2 className="text-3xl font-bold text-brand-900 dark:text-white mb-6">Ready to start your journey?</h2>
        <a href="/contact" className="inline-flex items-center gap-2 bg-brand-gold text-white px-8 py-4 rounded-full font-bold hover:bg-brand-900 transition-colors duration-300 shadow-lg hover:shadow-xl">
          Get a Free Consultation <ArrowRight size={20} />
        </a>
      </section>

    </div>
  );
};

export default About;