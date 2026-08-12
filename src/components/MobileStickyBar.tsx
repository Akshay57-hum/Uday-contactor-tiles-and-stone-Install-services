import React from 'react';
import { MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#0a0c10]/95 backdrop-blur-md border-t border-amber-500/40 p-2.5 shadow-2xl">
      <div className="max-w-md mx-auto space-y-1 text-center">
        <a
          href={CONTACT_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wide rounded-xl active:scale-95 transition-all shadow-lg shadow-amber-500/20"
        >
          <MessageSquare className="w-4 h-4 fill-slate-950 shrink-0" />
          <span>WhatsApp Us (9891168505)</span>
        </a>
        <p className="text-[10px] font-hindi text-amber-400 font-bold leading-tight">
          {CONTACT_INFO.rateListHindi} • {CONTACT_INFO.rateListEnglish}
        </p>
      </div>
    </div>
  );
};
