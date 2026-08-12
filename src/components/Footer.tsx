import React from 'react';
import { Phone, MessageSquare, ChevronRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#07080a] text-slate-400 border-t border-slate-800/80 pt-16 pb-28 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Logo size="lg" badgeStyle={true} />

            <p className="text-slate-300 text-sm leading-relaxed max-w-md font-normal">
              “Tiles, Stone & Ghusai Work Experts” offering precision tile fitting, marble ghusai grinding, mirror polishing, wall cladding, and flooring for bungalows, residential societies, schools, and commercial sites.
            </p>

            <div className="pt-2">
              <div className="p-3 bg-[#0a0c10] border border-amber-500/30 rounded-2xl space-y-1">
                <p className="text-xs font-bold font-hindi text-amber-400">{CONTACT_INFO.rateListHindi}</p>
                <p className="text-[11px] font-semibold text-slate-300">{CONTACT_INFO.rateListEnglish}</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider font-heading">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-amber-500" /> Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-amber-500" /> About Us (30 Yrs)
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-amber-500" /> Services & Ghusai Work
                </a>
              </li>
              <li>
                <a href="#showcase" onClick={(e) => handleNavClick(e, '#showcase')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-amber-500" /> Tile & Stone Showcase
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-amber-500" /> Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider font-heading">
              Contact Details
            </h4>

            <div className="space-y-2 text-xs">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3.5 bg-[#0f1218] border border-amber-500/40 rounded-2xl hover:border-amber-400 text-slate-200 transition-colors shadow-md group"
              >
                <MessageSquare className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>WhatsApp: <strong className="text-amber-400 text-sm group-hover:underline">9891168505</strong></span>
              </a>

              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-2.5 p-3.5 bg-[#0f1218] border border-slate-800 rounded-2xl hover:border-amber-400 text-slate-200 transition-colors group"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Phone: <strong className="text-white text-sm group-hover:text-amber-400">9811968504</strong></span>
              </a>
            </div>

          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Uday Contractor. All Rights Reserved.</p>
          <p className="text-[11px] text-slate-400">
            30 Years • Tiles, Marble, Granite & Stone Ghusai Work Experts
          </p>
        </div>

      </div>
    </footer>
  );
};
