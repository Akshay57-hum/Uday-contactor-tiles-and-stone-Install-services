import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-16 bg-[#0a0c10] marble-texture-bg border-t border-b border-amber-500/30 text-white relative overflow-hidden shadow-2xl">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-2"
        >
          <div className="inline-block px-3.5 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full">
            30 Years Quality Finishing & Craftsmanship
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading tracking-tight text-white max-w-3xl mx-auto">
            Get Instant Rate List & Site Quote
          </h2>
        </motion.div>

        {/* Dual Language Rate List Box with WhatsApp CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="pt-2 max-w-xl mx-auto bg-slate-900/90 border border-amber-500/30 p-6 rounded-3xl space-y-4 shadow-xl"
        >
          <div className="space-y-1">
            <p className="text-base sm:text-lg font-bold font-hindi text-amber-400">
              {CONTACT_INFO.rateListHindi}
            </p>
            <p className="text-xs sm:text-sm font-semibold text-slate-300">
              {CONTACT_INFO.rateListEnglish}
            </p>
          </div>

          <div className="pt-2 flex justify-center">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 px-8 py-4 rounded-full font-extrabold flex items-center justify-center gap-2.5 text-xs uppercase tracking-wide transition-all shadow-xl shadow-amber-500/25 hover:scale-105 active:scale-95"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950" />
              <span>Contact on WhatsApp (9891168505)</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
