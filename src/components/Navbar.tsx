import React, { useState, useEffect } from 'react';
import { MessageSquare, Menu, X, ChevronRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for nav highlight
      const sections = ['hero', 'about', 'services', 'showcase', 'why-us', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Tile Showcase', href: '#showcase', id: 'showcase' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0a0c10]/95 backdrop-blur-md shadow-2xl py-3 border-b border-amber-500/20' 
        : 'bg-[#0a0c10]/80 backdrop-blur-sm py-4 border-b border-slate-800/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Branding */}
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="group flex items-center gap-2">
            <Logo size="md" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs uppercase tracking-widest font-semibold text-slate-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`py-1 transition-all relative ${
                    isActive 
                      ? 'text-amber-400 font-bold' 
                      : 'hover:text-amber-400 text-slate-300'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full animate-in fade-in zoom-in duration-200" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Primary Action CTA - WhatsApp */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-5 py-2.5 rounded-full font-extrabold flex items-center gap-2 text-xs transition-all shadow-lg shadow-amber-500/20 uppercase tracking-wide hover:scale-105 active:scale-95"
              title="Chat on WhatsApp 9891168505"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950" />
              <span>WhatsApp 9891168505</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-950 bg-amber-500 rounded-lg shadow-md shrink-0"
              title="WhatsApp"
            >
              <MessageSquare className="w-5 h-5 fill-slate-950" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-800/80 rounded-lg border border-slate-700"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0a0c10]/98 border-b border-amber-500/30 px-4 pt-4 pb-6 space-y-4 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-4 duration-300">
          <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 flex items-center justify-between">
            <Logo size="sm" />
            <span className="text-[10px] bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-full font-bold">
              WhatsApp Available
            </span>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 text-sm rounded-xl font-bold transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                      : 'text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-800 space-y-2">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-amber-500 text-slate-950 font-extrabold rounded-xl text-xs uppercase tracking-wide shadow-lg shadow-amber-500/20"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950" />
              <span>WhatsApp Us (9891168505)</span>
            </a>
            
            <p className="text-[11px] font-hindi text-amber-400/90 text-center font-semibold pt-1">
              {CONTACT_INFO.rateListHindi}
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
