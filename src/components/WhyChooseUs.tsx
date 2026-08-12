import React from 'react';
import { motion } from 'motion/react';
import { Award, Users, ShieldCheck, Building, Disc, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      stat: '30 Years',
      title: 'Experience & Trust',
      desc: 'Three decades of proven site execution across residential and commercial sites.',
      icon: Award,
    },
    {
      stat: 'Skilled Masons',
      title: 'Experienced Workers',
      desc: 'Master craftspeople specialized in Tiles, Marble, Granite & Stone Ghusai.',
      icon: Users,
    },
    {
      stat: 'High Quality',
      title: 'Work & Finishing',
      desc: 'Precision laser leveling, paper-joint fitting & mirror polish crystallization.',
      icon: ShieldCheck,
    },
    {
      stat: 'Stone Ghusai',
      title: 'Level Grinding',
      desc: 'Rotary machine ghusai, lippage removal, and deep floor restoration.',
      icon: Disc,
    },
    {
      stat: 'Turnkey Contracts',
      title: 'Houses & Societies',
      desc: 'Bungalows, housing societies, schools, offices and commercial halls.',
      icon: Building,
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-[#0f1218] tile-grid-bg border-t border-b border-slate-800/80 text-white relative overflow-hidden">
      
      {/* Background Accent Lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-amber-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-16"
        >
          <div className="inline-block px-3.5 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full">
            30 Years of Craftsmanship
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight">
            Why Choose <span className="text-amber-500 font-light">Uday Contractor</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Dedicated team of experienced workers delivering seamless tile fitting, marble polishing, and stone grinding.
          </p>
        </motion.div>

        {/* 5 Pillar Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {points.map((pt, idx) => {
            const IconComp = pt.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-[#0a0c10] border border-slate-800 hover:border-amber-500/40 p-6 rounded-3xl text-center space-y-3 transition-all duration-300 hover:-translate-y-1.5 shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 mx-auto rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-3">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <p className="text-xl sm:text-2xl font-extrabold font-heading text-amber-400">
                    {pt.stat}
                  </p>
                  <h3 className="text-base font-bold text-white font-heading mt-1">
                    {pt.title}
                  </h3>
                </div>

                <p className="text-slate-400 text-xs leading-relaxed pt-3 border-t border-slate-800/80">
                  {pt.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Rate Notice Box (NO 30-YEAR QUOTE DUPLICATION PER MANDATE) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 max-w-3xl mx-auto bg-[#0a0c10] border border-amber-500/30 p-6 sm:p-8 rounded-3xl text-center shadow-2xl space-y-4"
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
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wide rounded-full shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950" />
              <span>Contact via WhatsApp (9891168505)</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
