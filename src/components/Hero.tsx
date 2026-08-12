import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Sparkles, CheckCircle2, ShieldCheck, Disc, Award, ArrowUpRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';
import { LogoIconOnly } from './Logo';
import heroTileBg from '../assets/images/hero_tile_background_1786528557898.jpg';

export const Hero: React.FC = () => {
  // Opening animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const tileMaskVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="hero" className="relative pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24 bg-[#0a0c10] overflow-hidden text-white border-b border-slate-800/80">
      
      {/* High Quality Luxury Tiles & Stone Background Surface */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img 
          src={heroTileBg} 
          alt="Luxury Tiles and Stone Surface Background" 
          className="w-full h-full object-cover object-center opacity-35 scale-105"
        />
        {/* Subtle dark gradient overlay for optimal high-contrast legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950" />
      </div>

      {/* Subtle Radial Warm Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center"
        >
          
          {/* Left Hero Main Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* 30 Years Experience Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold rounded-full shadow-lg shadow-amber-500/10">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>30 Years of Trust • Tiles, Stone & Ghusai Work Experts</span>
            </motion.div>

            {/* Natural Prominent Hero Headline - No Bounding Box or Outline */}
            <motion.div variants={itemVariants} className="space-y-4 pt-1">
              {/* Prominent Hindi Headline using Ama Vedant Devanagari Font */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-hindi-vedant text-amber-400 leading-tight sm:leading-snug tracking-normal drop-shadow-lg text-balance">
                “{CONTACT_INFO.heroHindiQuote}”
              </h1>

              {/* Complementary English Translation Smaller Underneath */}
              <p className="text-base sm:text-lg lg:text-xl font-medium text-slate-200 tracking-wide max-w-2xl drop-shadow pt-1 border-t border-slate-800/60 inline-block">
                “{CONTACT_INFO.heroEnglishQuote}”
              </p>
            </motion.div>

            {/* Specialized Services Chips */}
            <motion.div variants={itemVariants} className="space-y-2 pt-2">
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                Specialized Craftsmanship Services:
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                <span className="flex items-center gap-1.5 text-xs font-semibold text-white bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Tiles Installation</span>
                </span>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-white bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Marble & Granite Fitting</span>
                </span>
                <span className="flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/30 shadow-sm">
                  <Disc className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Stone Grinding (Ghusai Work)</span>
                </span>
                <span className="flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/30 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Mirror Polishing</span>
                </span>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-white bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Elevation Stone Cladding</span>
                </span>
              </div>
            </motion.div>

            {/* Primary Action - WhatsApp CTA */}
            <motion.div variants={itemVariants} className="pt-2 flex flex-col items-center lg:items-start gap-3">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 px-8 py-4 rounded-full font-extrabold flex items-center justify-center gap-3 transition-all shadow-xl shadow-amber-500/25 text-xs sm:text-sm uppercase tracking-wide hover:scale-105 active:scale-95"
              >
                <MessageSquare className="w-5 h-5 fill-slate-950" />
                <span>Contact on WhatsApp (9891168505)</span>
              </a>

              {/* Dual Language Rate List Box */}
              <div className="w-full sm:w-auto text-center lg:text-left bg-slate-900/90 border border-amber-500/30 px-5 py-3 rounded-2xl shadow-lg">
                <p className="text-xs font-bold font-hindi-vedant text-amber-400">{CONTACT_INFO.rateListHindi}</p>
                <p className="text-[11px] font-semibold text-slate-300 mt-0.5">{CONTACT_INFO.rateListEnglish}</p>
              </div>
            </motion.div>

          </div>

          {/* Right Hero Visual Craftsmanship Panel */}
          <motion.div 
            variants={tileMaskVariants}
            className="lg:col-span-5"
          >
            <div className="relative bg-gradient-to-b from-[#0d1017]/95 to-[#07090e]/95 border border-amber-500/30 rounded-3xl p-6 sm:p-7 shadow-2xl backdrop-blur-md space-y-6">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-3">
                  <LogoIconOnly size="md" />
                  <div>
                    <h3 className="text-white font-extrabold text-sm font-heading tracking-wide">UDAY CONTRACTOR</h3>
                    <p className="text-amber-400 text-[11px] font-bold">30 Years Experience</p>
                  </div>
                </div>
                <div className="p-2 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-400">
                  <Award className="w-5 h-5" />
                </div>
              </div>

              {/* Precision Tiles & Ghusai Work Features Card */}
              <div className="bg-[#05070a]/90 border border-slate-800 rounded-2xl p-5 space-y-4">
                <div className="flex items-center justify-between text-xs text-amber-400 font-bold border-b border-slate-800/60 pb-2">
                  <span>Craftsmanship Standards</span>
                  <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full">Laser Precision</span>
                </div>

                <div className="space-y-3">
                  <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 flex items-start gap-3">
                    <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400 shrink-0">
                      <Disc className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Stone Ghusai & Level Grinding</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">Rotary machine grinding for lippage removal & floor leveling.</p>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 flex items-start gap-3">
                    <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400 shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">7-Stage Diamond Mirror Polish</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">High-reflection crystallization finish for marble & granite.</p>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 flex items-start gap-3">
                    <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400 shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Vitrified & Paper-Joint Tiling</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">Laser level fitting with zero gap alignment & epoxy grouting.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stat Counters */}
              <div className="grid grid-cols-3 gap-2 text-center pt-1">
                <div className="bg-[#05070a] border border-slate-800/80 p-3 rounded-xl">
                  <p className="text-xl font-extrabold text-amber-400 font-heading">30 Yrs</p>
                  <p className="text-[9px] uppercase text-slate-400 font-bold mt-0.5">Trust</p>
                </div>
                <div className="bg-[#05070a] border border-slate-800/80 p-3 rounded-xl">
                  <p className="text-xl font-extrabold text-white font-heading">Expert</p>
                  <p className="text-[9px] uppercase text-slate-400 font-bold mt-0.5">Masons</p>
                </div>
                <div className="bg-[#05070a] border border-slate-800/80 p-3 rounded-xl">
                  <p className="text-xl font-extrabold text-amber-400 font-heading">100%</p>
                  <p className="text-[9px] uppercase text-slate-400 font-bold mt-0.5">Quality</p>
                </div>
              </div>

            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
