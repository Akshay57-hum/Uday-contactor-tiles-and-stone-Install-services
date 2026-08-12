import React from 'react';
import { motion } from 'motion/react';
import { SERVICES, CONTACT_INFO } from '../data/content';
import { Grid, Gem, Utensils, Layers, SquareStack, Bath, School, Building2, Home, Check, MessageSquare, ArrowUpRight, Disc, Sparkles } from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Grid,
  Gem,
  Utensils,
  Layers,
  SquareStack,
  Bath,
  School,
  Building2,
  Home,
  Disc,
  Sparkles
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-[#0a0c10] marble-texture-bg text-white relative border-b border-slate-800/80">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-16"
        >
          <div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full">
            Complete Tiles, Stone & Ghusai Work Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight">
            Our Master <span className="text-amber-500 font-light">Services</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            30 years of specialized expertise in Tiles Installation, Marble Fitting, Stone Grinding (Ghusai Work), and Mirror Polishing.
          </p>
        </motion.div>

        {/* Service Cards Grid (NO PHOTO IMAGES PER USER MANDATE) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Grid;
            const customWhatsappMsg = `https://wa.me/919891168505?text=Hello%20Uday%20Contractor%2C%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}.%20Please%20share%20details%20and%20rate%20list.`;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="bg-[#0f1218] border border-slate-800 hover:border-amber-500/50 rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between space-y-6 group relative overflow-hidden"
              >
                {/* Gold Bevel Accent Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                    <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-amber-400 group-hover:scale-110 transition-transform shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
                      30 Yrs Craft
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold font-heading text-white group-hover:text-amber-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2 pt-3 border-t border-slate-800/80">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* WhatsApp Enquiry Button */}
                <div className="pt-2 border-t border-slate-800/80">
                  <a
                    href={customWhatsappMsg}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-slate-200 font-extrabold text-xs rounded-xl border border-slate-800 transition-all duration-200 group/btn uppercase tracking-wide"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-amber-400 group-hover/btn:text-slate-950 fill-amber-400 group-hover/btn:fill-slate-950" />
                    <span>Enquire on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover/btn:opacity-100" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Dual Language Rate List Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center p-6 sm:p-8 bg-slate-900/90 border border-amber-500/40 rounded-3xl max-w-2xl mx-auto shadow-2xl space-y-4"
        >
          <div className="space-y-1">
            <p className="text-base sm:text-lg font-bold font-hindi text-amber-400">
              {CONTACT_INFO.rateListHindi}
            </p>
            <p className="text-xs sm:text-sm font-semibold text-slate-300">
              {CONTACT_INFO.rateListEnglish}
            </p>
          </div>

          <div>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm rounded-full shadow-xl shadow-amber-500/20 uppercase tracking-wide transition-all hover:scale-105"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950" />
              <span>Get Rate List on WhatsApp (9891168505)</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
