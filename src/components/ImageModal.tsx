import React from 'react';
import { X, MessageSquare, Sparkles } from 'lucide-react';
import { TileItem, GalleryItem } from '../types';
import { CONTACT_INFO } from '../data/content';

interface ImageModalProps {
  item: TileItem | GalleryItem | null;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  const isTileItem = 'finish' in item;

  const whatsappText = isTileItem
    ? `Hello Uday Contractor, I am interested in ${item.title} (${item.category}). Please share details and rate list.`
    : `Hello Uday Contractor, I am interested in ${item.title} work. Please share details and rate list.`;

  const whatsappUrl = `https://wa.me/919891168505?text=${encodeURIComponent(whatsappText)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-amber-500/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-slate-950/80 text-white hover:text-amber-400 rounded-full border border-slate-700 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Preview */}
        <div className="md:w-3/5 bg-slate-950 relative min-h-[260px] md:min-h-full flex items-center justify-center overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover max-h-[500px]"
          />
          <div className="absolute top-4 left-4 bg-amber-500 text-slate-950 px-3 py-1 rounded-md text-xs font-bold shadow-lg">
            {item.category}
          </div>
        </div>

        {/* Details & Action */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-6 overflow-y-auto">
          
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                Material & Work Details
              </span>
              <h3 className="text-2xl font-extrabold font-heading text-white mt-1">
                {item.title}
              </h3>
            </div>

            {isTileItem ? (
              <div className="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-3">
                <p><strong className="text-slate-400">Surface Finish:</strong> {(item as TileItem).finish}</p>
                <p><strong className="text-slate-400">Details:</strong> {(item as TileItem).colorPattern}</p>
                <p><strong className="text-slate-400">Ideal For:</strong> {(item as TileItem).idealFor}</p>
              </div>
            ) : (
              <div className="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-3">
                <p><strong className="text-slate-400">Location:</strong> {(item as GalleryItem).location}</p>
                <p><strong className="text-slate-400">Execution Details:</strong> {(item as GalleryItem).description}</p>
              </div>
            )}

            <div className="p-3 bg-slate-950 border border-amber-500/30 rounded-xl space-y-1">
              <p className="text-xs font-extrabold text-amber-400">{CONTACT_INFO.rateListHindi}</p>
              <p className="text-[11px] font-semibold text-slate-300">{CONTACT_INFO.rateListEnglish}</p>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-800">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-wide rounded-xl shadow-xl transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-black" />
              <span>Contact on WhatsApp (9891168505)</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
