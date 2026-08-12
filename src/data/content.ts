import { Service, TileItem } from '../types';
import stoneGrindingImg from '../assets/images/stone_grinding_ghusai_1786524996353.jpg';
import stonePolishingImg from '../assets/images/stone_polishing_mirror_1786525045271.jpg';

export const CONTACT_INFO = {
  phone: '9811968504',
  whatsapp: '9891168505',
  whatsappUrl: 'https://wa.me/919891168505?text=Hello%20Uday%20Contractor%2C%20I%20am%20interested%20in%20tiles%2C%20marble%2C%20stone%20work%20and%20stone%20grinding%2Fghusai.%20Please%20share%20details%20and%20rate%20list.',
  experienceYears: '30',
  tagline: '30 Years of Experience in Tiles, Stone & Ghusai Work',
  heroHindiQuote: 'आपका और हमारा साथ 30 साल का है, ऐसे ही हम आपके घरों में टाइल्स और पत्थर लगाते रहेंगे।',
  heroEnglishQuote: '30 years of trust, bringing quality tiles & stone to your homes.',
  rateListHindi: 'रेट लिस्ट के लिए WhatsApp पर संपर्क करें。',
  rateListEnglish: 'For the rate list, please contact us on WhatsApp.',
  rateListNotice: 'रेट लिस्ट के लिए WhatsApp पर संपर्क करें। / For the rate list, please contact us on WhatsApp.',
};

export const SERVICES: Service[] = [
  {
    id: 'stone-grinding-ghusai',
    title: 'Stone Grinding (Ghusai Work)',
    description: 'Heavy-duty floor ghusai, stone level grinding, lippage removal, and surface leveling for marble, Kota stone, granite, and terrazzo floors.',
    image: stoneGrindingImg,
    iconName: 'Disc',
    features: ['Rotary floor ghusai machine work', 'Level grinding & lippage removal', 'Marble, Kota & Terrazzo grinding', 'Pre-polishing floor smoothing']
  },
  {
    id: 'stone-polishing',
    title: 'Grinding & Polishing',
    description: 'Multi-stage diamond pad mirror polishing, crystallization, and protective sealing for high-gloss glass finish on marble and granite floors.',
    image: stonePolishingImg,
    iconName: 'Sparkles',
    features: ['7-Stage diamond pad polishing', 'Mirror shine crystallization', 'Stain & water proof sealing', 'Deep shine surface renewal']
  },
  {
    id: 'tiles-installation',
    title: 'Tiles Installation',
    description: 'Precision floor and wall tile laying for vitrified, ceramic, porcelain, and anti-skid tiles with accurate alignment and grout jointing.',
    image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1000&auto=format&fit=crop',
    iconName: 'Grid',
    features: ['Laser level alignment', 'Vitrified & ceramic floor tiles', 'Precision epoxy grouting', 'Non-slip & seamless fitting']
  },
  {
    id: 'marble-stone-work',
    title: 'Marble & Granite Fitting',
    description: 'Expert cutting and installation of Indian & Italian marble slabs, granite countertops, stair treads, and doorway stone portals.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop',
    iconName: 'Gem',
    features: ['Italian & Indian Marble fitting', 'Granite counter slabs & door frames', 'Natural vein matching', 'Stair treads & risers']
  },
  {
    id: 'kitchen-tiles-stone',
    title: 'Kitchen Tiles & Countertops',
    description: 'Granite platform slab installation, under-mount sink cutouts, double bullnose edges, and ceramic/mosaic wall backsplash tiles.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000&auto=format&fit=crop',
    iconName: 'Utensils',
    features: ['Stain-resistant granite counters', 'Backsplash wall tiles', 'Sink cut-outs & bullnozing', 'Heat-proof stone surfaces']
  },
  {
    id: 'bathroom-tiles',
    title: 'Bathroom Tiles',
    description: 'Anti-skid floor tile laying, full-height wall ceramic tiling, slope drain alignment, and waterproof tile joint sealing.',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1000&auto=format&fit=crop',
    iconName: 'Bath',
    features: ['Anti-skid floor tiles', 'Full height wall tiles', 'Slope drainage alignment', 'Waterproof grout sealing']
  },
  {
    id: 'wall-cladding',
    title: 'Wall Cladding & Exterior Stone',
    description: 'Exterior stone elevation cladding, 3D textured stone tiles, and interior feature wall natural stone installation.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000&auto=format&fit=crop',
    iconName: 'SquareStack',
    features: ['Elevation stone cladding', '3D texture wall tiles', 'Exterior stone veneer', 'Moisture-proof anchoring']
  },
  {
    id: 'turnkey-projects',
    title: 'Bungalows, Societies & Schools',
    description: 'Comprehensive tile, stone, and ghusai contracts for individual bungalows, residential societies, schools, and commercial halls.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop',
    iconName: 'Building2',
    features: ['Lobby marble & tile flooring', 'Corridor & staircase work', 'Society entrance stone portal', 'Bulk area execution']
  }
];

export const TILE_SHOWCASE: TileItem[] = [
  {
    id: 't1',
    title: 'Italian Carrara White Marble',
    category: 'Marble',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop',
    finish: 'Mirror Polished',
    idealFor: 'Living Room Halls, Main Lobbies, Feature Walls',
    colorPattern: 'Pure White with Natural Grey Veins'
  },
  {
    id: 't2',
    title: 'Black Galaxy Granite Slab',
    category: 'Granite',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000&auto=format&fit=crop',
    finish: 'Gloss Polished Edge',
    idealFor: 'Kitchen Countertops, Door Frames, Stair Treads',
    colorPattern: 'Deep Black with Copper Flecks'
  },
  {
    id: 't3',
    title: 'Floor Stone Grinding & Ghusai Work',
    category: 'Stone Grinding / Ghusai',
    image: stoneGrindingImg,
    finish: 'Heavy Duty Rotary Ghusai',
    idealFor: 'Marble Floors, Kota Stone, Terrazzo, Renovation Sites',
    colorPattern: 'Leveling, Lippage Removal & Surface Smoothness'
  },
  {
    id: 't4',
    title: 'Mirror Finish Stone & Marble Polishing',
    category: 'Stone Polishing',
    image: stonePolishingImg,
    finish: '7-Stage Diamond Pad Gloss',
    idealFor: 'Living Room Halls, Bungalow Foyers, Hotel Lobbies',
    colorPattern: 'High Reflection Glass-Like Diamond Shine'
  },
  {
    id: 't5',
    title: 'Large Format Vitrified Floor Tiles',
    category: 'Floor Tiles',
    image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1000&auto=format&fit=crop',
    finish: 'Matt & Satin Glazed',
    idealFor: 'Modern Living Rooms, Bedrooms, Commercial Halls',
    colorPattern: 'Subtle Slate Grey / Warm Beige'
  },
  {
    id: 't6',
    title: 'Subway Gloss Ceramic Wall Tiles',
    category: 'Wall Tiles',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop',
    finish: 'Beveled Gloss Finish',
    idealFor: 'Bathroom Walls, Kitchen Backsplash',
    colorPattern: 'Classic Bright White & Neutral Tones'
  },
  {
    id: 't7',
    title: 'Modern Kitchen Backsplash Tiles',
    category: 'Kitchen Tiles',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000&auto=format&fit=crop',
    finish: 'Easy-Clean Glazed Satin',
    idealFor: 'Kitchen Walls & Countertop Accent',
    colorPattern: 'Contemporary Geometric & Motif Patterns'
  },
  {
    id: 't8',
    title: 'Anti-Skid Hexagon Bathroom Tiles',
    category: 'Bathroom Tiles',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1000&auto=format&fit=crop',
    finish: 'R10 Anti-Slip Textured',
    idealFor: 'Bathroom Floor, Shower Area',
    colorPattern: 'Matte Charcoal & Soft Ash Grey'
  },
  {
    id: 't9',
    title: '3D Geometric Stone Cladding',
    category: 'Stone Cladding',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000&auto=format&fit=crop',
    finish: 'Textured Chiseled Natural Stone',
    idealFor: 'Exterior Elevations, TV Feature Walls, Gate Portals',
    colorPattern: 'Multi-tone Natural Earthy Ochre & Grey'
  }
];
