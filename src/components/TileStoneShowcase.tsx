import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TILE_SHOWCASE } from '../data/content';
import { TileItem } from '../types';
import { Eye, Sparkles, Filter } from 'lucide-react';

interface TileStoneShowcaseProps {
  onSelectItem: (item: TileItem) => void;
}

export const TileStoneShowcase: React.FC<TileStoneShowcaseProps> = ({ onSelectItem }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Marble',
    'Granite',
    'Stone Grinding / Ghusai',
    'Stone Polishing',
    'Floor Tiles',
    'Wall Tiles',
    'Kitchen Tiles',
    'Bathroom Tiles',
    'Stone Cladding'
  ];

  const filteredItems = selectedCategory === 'All'
    ? TILE_SHOWCASE
    : TILE_SHOWCASE.filter(item => item.category === selectedCategory);

  return (
    <section id="showcase" className="py-20 bg-[#0f1218] tile-grid-bg border-t border-b border-slate-800/80 text-white relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-10"
        >
          <div className="inline-block px-3.5 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full">
            Exclusive Material & Work Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight">
            Tiles & Stone <span className="text-amber-500 font-light">Showcase</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Authentic material textures, marble finishes, stone grinding/ghusai work, and floor tile patterns.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 max-w-full no-scrollbar"
        >
          <Filter className="w-4 h-4 text-amber-500 shrink-0 ml-1 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-slate-950 font-extrabold scale-105 shadow-lg shadow-amber-500/25'
                  : 'bg-[#0a0c10] text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Showcase Grid (THE EXCLUSIVE PANEL FOR PHOTO IMAGES) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => onSelectItem(item)}
              className="group bg-[#0a0c10] border border-slate-800 hover:border-amber-500/50 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-[#0f1218]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-[#0a0c10]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Category Badge Top Left */}
                <div className="absolute top-3 left-3 bg-[#0a0c10]/90 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/40 text-[10px] font-bold text-amber-400 shadow-md">
                  {item.category}
                </div>

                {/* Hover Eye Badge */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                  <span className="p-3 bg-amber-500 text-slate-950 rounded-full shadow-xl flex items-center gap-1.5 font-extrabold text-xs">
                    <Eye className="w-4 h-4" /> View Details
                  </span>
                </div>

                {/* Title inside image bottom */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-lg font-bold font-heading text-white group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Card Meta Details */}
              <div className="p-5 bg-[#0a0c10] flex-1 flex flex-col justify-between space-y-3 border-t border-slate-900">
                <div className="space-y-1.5 text-xs">
                  <p className="text-slate-400">
                    <strong className="text-slate-200">Finish:</strong> {item.finish}
                  </p>
                  <p className="text-slate-400">
                    <strong className="text-slate-200">Details:</strong> {item.colorPattern}
                  </p>
                  <p className="text-slate-400">
                    <strong className="text-slate-200">Ideal For:</strong> {item.idealFor}
                  </p>
                </div>

                <div className="pt-2 text-[11px] font-semibold text-amber-400 flex items-center justify-between border-t border-slate-900">
                  <span>Click to view material details</span>
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
