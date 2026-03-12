import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Star, ArrowRight, X, MapPin, Clock, CheckCircle } from 'lucide-react';

// 1. DATA WITH "STORIES"
// I added 'location', 'duration', and 'description' to make it real.
const allProjects = [
  { 
    id: 1, 
    category: "Wallpapers", 
    src: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80", 
    title: "Royal Damask", 
    tag: "Best Seller",
    location: "Lokhandwala, Mumbai",
    duration: "1 Day Installation",
    description: "The client wanted a royal look for their master bedroom without the mess of paint. We used our premium textured Damask wallpaper to create this feature wall in just 6 hours."
  },
  { 
    id: 2, 
    category: "Floorings", 
    src: "https://images.unsplash.com/photo-1581858726768-75e0524d91c2?auto=format&fit=crop&q=80", 
    title: "Oak Finish Vinyl", 
    tag: "Durable",
    location: "Commercial Office, Bandra",
    duration: "3 Days",
    description: "High-traffic area requiring durability. We installed 1.5mm heavy-duty vinyl flooring that looks exactly like wood but is completely waterproof and scratch-resistant."
  },
  { 
    id: 3, 
    category: "Fabrics", 
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80", 
    title: "Velvet Curtains", 
    tag: "Premium",
    location: "Private Villa, Juhu",
    duration: "Custom Stitching (1 Week)",
    description: "To match the high ceilings, we customized these blackout velvet curtains. They block 100% of sunlight while adding a soft, luxurious touch to the living space."
  },
  { 
    id: 4, 
    category: "Wallpapers", 
    src: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80", 
    title: "Modern Geometric", 
    tag: "Trending",
    location: "Apartment, Powai",
    duration: "5 Hours",
    description: "A modern couple wanted a funky vibe for their gaming room. This geometric print added the perfect energy to the space."
  },
  { 
    id: 5, 
    category: "Artificial Grass", 
    src: "https://images.unsplash.com/photo-1558905545-04de8ce00ce8?auto=format&fit=crop&q=80", 
    title: "Terrace Turf", 
    tag: "Outdoor",
    location: "Penthouse, Dadar",
    duration: "1 Day",
    description: "Transformed a concrete balcony into a lush green retreat using 35mm high-density artificial grass. Soft to walk on and drains water easily."
  },
  { 
    id: 8, 
    category: "PVC Panels", 
    src: "https://images.unsplash.com/photo-1620626012053-1c169996df87?auto=format&fit=crop&q=80", 
    title: "3D Wall Panel", 
    tag: "Waterproof",
    location: "Seepage Wall, Versova",
    duration: "2 Days",
    description: "The wall had recurring dampness issues. We covered it with our waterproof PVC fluted panels, solving the seepage look forever while adding style."
  },
];

const categoryContent = {
  "All": { title: "Curated Luxury", desc: "A collection of our finest transformations across Mumbai.", bg: "bg-brand-900" },
  "Wallpapers": { title: "Walls That Speak", desc: "Add texture, depth, and personality to your room.", bg: "bg-rose-900" },
  "Floorings": { title: "The Foundation of Style", desc: "Step onto luxury with our premium flooring.", bg: "bg-amber-900" },
  "Fabrics": { title: "Softness & Sophistication", desc: "The finishing touch for luxury homes.", bg: "bg-purple-900" },
  "PVC Panels": { title: "Seamless Elegance", desc: "Durable, waterproof, and stunningly aesthetic.", bg: "bg-slate-800" },
  "Artificial Grass": { title: "Nature, Anywhere", desc: "Lush green balconies with zero maintenance.", bg: "bg-green-900" },
};

const categories = Object.keys(categoryContent);

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null); // <--- NEW STATE FOR MODAL

  const filteredProjects = activeCategory === "All" 
    ? allProjects 
    : allProjects.filter(item => item.category === activeCategory);

  const activeContent = categoryContent[activeCategory] || categoryContent["All"];

  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-brand-dark transition-colors duration-300">
      
      {/* HEADER */}
      <motion.div 
        key={activeCategory}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
        className={`${activeContent.bg} text-white py-16 md:py-20 relative overflow-hidden transition-colors duration-500`}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.h1 className="text-4xl md:text-5xl font-bold mb-4">{activeContent.title}</motion.h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">{activeContent.desc}</p>
        </div>
      </motion.div>

      {/* FILTER BAR */}
      <div className="sticky top-20 z-30 bg-white/95 dark:bg-brand-dark/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-3 overflow-x-auto pb-2 hide-scrollbar">
          <span className="text-gray-400 flex items-center gap-1 text-sm font-medium mr-2 flex-shrink-0">
            <Filter size={14} /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat ? "bg-brand-900 dark:bg-brand-gold text-white dark:text-brand-900 shadow-md" : "bg-gray-100 dark:bg-brand-800 text-gray-600 dark:text-gray-300"}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={project.id}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg"
                onClick={() => setSelectedProject(project)} // <--- CLICK TRIGGERS MODAL
              >
                <img src={project.src} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-brand-900/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full shadow-sm z-10 flex items-center gap-1">
                  <Star size={10} className="text-brand-gold fill-brand-gold" />
                  <span className="text-brand-900 dark:text-white">{project.tag}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold mb-2 transform translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                  <button className="text-sm text-brand-gold flex items-center gap-2 font-bold mt-1">
                    View Details <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* 5. THE SPOTLIGHT MODAL (POPUP) */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Dark Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white dark:bg-brand-900 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black rounded-full text-white transition-colors"
              >
                <X size={20} />
              </button>

              {/* Left: Image */}
              <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-200">
                <img 
                  src={selectedProject.src} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right: Details */}
              <div className="w-full md:w-1/2 p-8 overflow-y-auto">
                <span className="text-brand-gold font-bold uppercase tracking-wider text-xs">
                  {selectedProject.category}
                </span>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
                  {selectedProject.title}
                </h2>

                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-brand-gold" />
                    {selectedProject.location || "Mumbai, India"}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-brand-gold" />
                    {selectedProject.duration || "2 Days"}
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-brand-800 p-6 rounded-xl mb-8">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-500" /> Project Highlight
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                    {selectedProject.description || "A premium installation completed by Vistara Living experts."}
                  </p>
                </div>

                {/* Call to Action */}
                <div className="flex flex-col gap-3">
                  <a 
                    href={`https://wa.me/917021827090?text=Hi, I saw the ${selectedProject.title} (${selectedProject.category}) on your website and I am interested in something similar.`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-brand-900 dark:bg-brand-gold text-white dark:text-brand-900 py-3 rounded-lg font-bold text-center hover:scale-[1.02] transition-transform"
                  >
                    Get Quote for this Style
                  </a>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-brand-900 dark:hover:text-white text-sm font-medium transition-colors"
                  >
                    Close Preview
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;