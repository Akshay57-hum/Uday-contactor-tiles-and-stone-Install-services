import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

export const ContactSection: React.FC = () => {
  const [workType, setWorkType] = useState('Stone Grinding (Ghusai Work) & Polishing');
  const [siteLocation, setSiteLocation] = useState('');
  const [areaSize, setAreaSize] = useState('');
  const [customNotes, setCustomNotes] = useState('');

  const generateDynamicWhatsappUrl = () => {
    let msg = `Hello Uday Contractor, I am interested in tiles, marble & stone work. Please share rate list and details.`;
    
    if (workType || siteLocation || areaSize || customNotes) {
      msg = `Hello Uday Contractor, I am interested in tiles, marble & stone work.\n\nWork Type: ${workType}\nLocation: ${siteLocation || 'Not specified'}\nArea Approx: ${areaSize || 'Not specified'}\nNote: ${customNotes || 'Please share rate list and details.'}`;
    }

    return `https://wa.me/919891168505?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="contact" className="py-20 bg-[#0a0c10] tile-grid-bg text-white relative">
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
            Direct Site Inquiry & Contact
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight">
            Contact <span className="text-amber-500 font-light">Uday Contractor</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            30 years of trusted tile, stone, and ghusai work experience. Contact us directly via WhatsApp or Phone Call.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            
            <div className="bg-[#0f1218] border border-amber-500/20 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

              <div className="border-b border-slate-800 pb-4">
                <h3 className="text-2xl font-extrabold font-heading text-white">
                  UDAY CONTRACTOR
                </h3>
                <p className="text-amber-400 text-xs font-semibold mt-1">
                  Tiles, Stone & Ghusai Work Experts • 30 Yrs Trust
                </p>
              </div>

              {/* Direct WhatsApp Primary Button Card */}
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#0a0c10] rounded-2xl border border-slate-800 hover:border-amber-500/60 transition-all group shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 font-bold shrink-0 group-hover:scale-105 transition-transform shadow-lg shadow-amber-500/20">
                  <MessageSquare className="w-6 h-6 fill-slate-950" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">WhatsApp Primary:</p>
                  <p className="text-xl font-bold font-heading text-white group-hover:text-amber-400 transition-colors">
                    9891168505
                  </p>
                  <p className="text-[11px] text-amber-400">Click to chat on WhatsApp</p>
                </div>
              </a>

              {/* Direct Phone Call Card */}
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-4 p-4 bg-[#0a0c10] rounded-2xl border border-slate-800 hover:border-amber-500/60 transition-all group shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-amber-400 font-bold shrink-0 group-hover:scale-105 transition-transform border border-amber-500/30">
                  <Phone className="w-6 h-6 fill-amber-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Direct Phone Call:</p>
                  <p className="text-xl font-bold font-heading text-slate-200 group-hover:text-amber-400 transition-colors">
                    9811968504
                  </p>
                  <p className="text-[11px] text-slate-400">Click to call directly</p>
                </div>
              </a>

              {/* Rate List Notice Box */}
              <div className="p-4 bg-[#0a0c10] border border-amber-500/30 rounded-2xl text-center space-y-2">
                <p className="text-sm font-bold font-hindi text-amber-400">
                  {CONTACT_INFO.rateListHindi}
                </p>
                <p className="text-xs font-semibold text-slate-300">
                  {CONTACT_INFO.rateListEnglish}
                </p>
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 px-5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold rounded-full transition-all shadow-md uppercase tracking-wide"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-slate-950" />
                  <span>WhatsApp 9891168505</span>
                </a>
              </div>

            </div>

            {/* Quality Commitment Box */}
            <div className="bg-[#0f1218] border border-slate-800 rounded-2xl p-6 space-y-3">
              <h4 className="text-sm font-bold text-white font-heading flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-500" />
                <span>Our Quality Commitment</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>30 Years Experienced Masons</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Tiles, Marble, Granite & Stone Ghusai</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Laser Leveling & Mirror Polish Finish</span>
                </li>
              </ul>
            </div>

          </motion.div>

          {/* Right Column: Interactive WhatsApp Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#0f1218] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl"
          >
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Instant WhatsApp Inquiry</span>
              <h3 className="text-2xl font-bold font-heading text-white mt-1">
                Request Rate List & Share Site Details
              </h3>
              <p className="text-slate-300 text-xs mt-1">
                Select your work requirements below to automatically send details to WhatsApp.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-200 mb-1.5">
                  Select Work Category:
                </label>
                <select
                  value={workType}
                  onChange={(e) => setWorkType(e.target.value)}
                  className="w-full bg-[#0a0c10] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 font-medium"
                >
                  <option value="Stone Grinding (Ghusai Work) & Polishing">Stone Grinding (Ghusai Work) & Polishing</option>
                  <option value="Tiles Installation (Floor & Wall)">Tiles Installation (Floor & Wall)</option>
                  <option value="Marble & Granite Fitting">Marble & Granite Fitting</option>
                  <option value="Kitchen Countertop & Backsplash">Kitchen Countertop & Backsplash</option>
                  <option value="Bathroom Tiles & Waterproofing">Bathroom Tiles & Waterproofing</option>
                  <option value="Wall Cladding & Elevation Stone">Wall Cladding & Elevation Stone</option>
                  <option value="Bungalow / Villa Full Stone Work">Bungalow / Villa Full Stone Work</option>
                  <option value="Residential Society Lobby / Staircase">Residential Society Lobby / Staircase</option>
                  <option value="School / Institutional Building Tiling">School / Institutional Building Tiling</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-200 mb-1.5">
                    Site Location:
                  </label>
                  <input
                    type="text"
                    value={siteLocation}
                    onChange={(e) => setSiteLocation(e.target.value)}
                    placeholder="e.g. Rohini, Noida, Gurgaon, etc."
                    className="w-full bg-[#0a0c10] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-200 mb-1.5">
                    Approx Area (Sq. Ft / Rooms):
                  </label>
                  <input
                    type="text"
                    value={areaSize}
                    onChange={(e) => setAreaSize(e.target.value)}
                    placeholder="e.g. 1000 sq.ft or 3 BHK"
                    className="w-full bg-[#0a0c10] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-200 mb-1.5">
                  Additional Note / Requirements:
                </label>
                <textarea
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  rows={3}
                  placeholder="e.g. Need marble ghusai grinding and mirror polish rate list."
                  className="w-full bg-[#0a0c10] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* Form Action Button */}
              <div className="pt-2">
                <a
                  href={generateDynamicWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm rounded-full shadow-xl transition-all uppercase tracking-wide hover:scale-[1.02]"
                >
                  <MessageSquare className="w-5 h-5 fill-slate-950" />
                  <span>Send WhatsApp Inquiry (9891168505)</span>
                </a>
              </div>

              <p className="text-xs text-center text-slate-400 pt-1">
                Direct phone calls accepted at <a href={`tel:${CONTACT_INFO.phone}`} className="text-amber-400 font-bold underline">9811968504</a>
              </p>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
