import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Users, Sparkles, Building, ChevronRight, Disc, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

export const AboutUs: React.FC = () => {
  const highlights = [
    {
      title: '30 Years Trust & Heritage',
      desc: 'Three decades of site mastery laying marble, granite, vitrified tiles, and executing stone ghusai.',
      icon: Award,
    },
    {
      title: 'Experienced Workers',
      desc: 'Skilled masons specialized in laser level fitting, paper-joint marble cutting, and rotary machine ghusai.',
      icon: Users,
    },
    {
      title: 'Stone Grinding & Ghusai',
      desc: 'Rotary machine level grinding, lippage removal, and deep floor smoothing.',
      icon: Disc,
    },
    {
      title: 'High Quality Polishing',
      desc: '7-stage diamond pad mirror polish crystallization and stain protection sealers.',
      icon: Sparkles,
    },
    {
      title: 'Residential & Commercial Work',
      desc: 'Serving houses, bungalows, apartments, schools, institutions, and residential societies.',
      icon: Building,
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#0f1218] tile-grid-bg border-t border-b border-slate-800/80 text-slate-100 relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column - Craftsmanship Pillar Graphic (NO PHOTO IMAGE) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="bg-[#0a0c10] border border-amber-500/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-4 border-b border-slate-800/80 pb-5">
                <div className="w-16 h-16 rounded-2xl bg-amber-500 flex items-center justify-center text-slate-950 font-black text-2xl shrink-0 shadow-lg shadow-amber-500/20">
                  30
                </div>
                <div>
                  <h3 className="text-xl font-extrabold font-heading text-white">30 Years Heritage</h3>
                  <p className="text-amber-400 text-xs font-semibold">Tiles, Marble & Stone Ghusai Work</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-3 bg-[#0f1218] rounded-xl border border-slate-800/80 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>30 Years Proven Track Record on Residential & Commercial Sites</span>
                </div>
                <div className="p-3 bg-[#0f1218] rounded-xl border border-slate-800/80 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Skilled Masons for Precision Laser Leveling & Zero Gap Tiling</span>
                </div>
                <div className="p-3 bg-[#0f1218] rounded-xl border border-slate-800/80 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Heavy Rotary Machine Floor Ghusai & Lippage Removal</span>
                </div>
                <div className="p-3 bg-[#0f1218] rounded-xl border border-slate-800/80 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>7-Stage Diamond Pad Marble Mirror Polishing</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800/80 text-center">
                <p className="text-xs font-hindi font-bold text-amber-400">{CONTACT_INFO.rateListHindi}</p>
                <p className="text-[11px] font-semibold text-slate-400 mt-0.5">{CONTACT_INFO.rateListEnglish}</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Text & Highlights */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            
            <div>
              <div className="inline-block px-3.5 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full">
                About Uday Contractor
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white mt-3 tracking-tight leading-snug">
                30 Years of Dedicated <span className="text-amber-500 font-light">Craftsmanship & Trust</span>
              </h2>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              Uday Contractor brings 30 years of hands-on experience in Tiles, Marble, Granite, and Stone Work, including professional Stone Grinding (Ghusai) and Mirror Polishing. Our experienced workers deliver accurate level alignment, paper-joint fitting, and durable finishing across bungalows, residential societies, schools, and commercial properties.
            </p>

            {/* Visual Highlight Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 bg-[#0a0c10] border border-slate-800 hover:border-amber-500/40 rounded-xl transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 shadow-md shrink-0 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-xs sm:text-sm font-heading group-hover:text-amber-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-slate-400 text-[11px] mt-0.5 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Direct Contact CTA inside About */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-800">
              <div>
                <p className="text-xs font-hindi font-bold text-amber-400">{CONTACT_INFO.rateListHindi}</p>
                <p className="text-[11px] font-semibold text-slate-300">{CONTACT_INFO.rateListEnglish}</p>
              </div>

              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-6 py-3 rounded-full font-extrabold flex items-center gap-2 text-xs transition-all shadow-lg shadow-amber-500/20 shrink-0 uppercase tracking-wide hover:scale-105"
              >
                <span>WhatsApp 9891168505</span>
                <ChevronRight className="w-4 h-4 text-slate-950" />
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
