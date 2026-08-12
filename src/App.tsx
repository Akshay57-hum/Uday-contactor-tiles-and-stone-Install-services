import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { TileStoneShowcase } from './components/TileStoneShowcase';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CtaBanner } from './components/CtaBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ImageModal } from './components/ImageModal';
import { TileItem, GalleryItem } from './types';

export default function App() {
  const [modalItem, setModalItem] = useState<TileItem | GalleryItem | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0c10] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* Top Fixed Header Bar */}
      <Navbar />

      {/* Main Page Content */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Us */}
        <AboutUs />

        {/* 3. Core Services */}
        <Services />

        {/* 4. Tile & Stone Showcase */}
        <TileStoneShowcase onSelectItem={(item) => setModalItem(item)} />

        {/* 5. Why Choose Uday Contractor */}
        <WhyChooseUs />

        {/* 6. Call To Action Banner */}
        <CtaBanner />

        {/* 7. Contact Section */}
        <ContactSection />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* 9. Mobile Bottom Sticky WhatsApp Bar */}
      <MobileStickyBar />

      {/* 10. Lightbox Detail Modal for Showcase Items */}
      <ImageModal item={modalItem} onClose={() => setModalItem(null)} />

    </div>
  );
}
