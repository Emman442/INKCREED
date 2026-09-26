import React from 'react';
import { NOTES_FAQ } from '../data/inkcreedData';

interface NotesViewProps {
  onNavigate: (path: string) => void;
}

export const NotesView: React.FC<NotesViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-[1180px] mx-auto px-6 lg:px-12 py-16 md:py-24">
      {/* Title & Dek */}
      <div className="mb-14 pb-8 border-b border-[#D5DBE0]">
        <div className="ui-label mb-2">Reference</div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#14181C] tracking-tight">
          Notes on the Press
        </h1>
        <p className="mt-3 text-base text-[#5C6770] max-w-2xl leading-relaxed">
          Questions regarding the 444 plates, the register protocol, and the physical pressroom.
        </p>
      </div>

      {/* Two columns grid of FAQ: Dry, short answers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        {NOTES_FAQ.map((item, index) => (
          <div key={index} className="border-t border-[#D5DBE0] pt-6 space-y-2.5">
            <h2 className="font-display text-lg font-bold text-[#14181C]">
              {item.question}
            </h2>
            <p className="text-sm text-[#5C6770] leading-relaxed">
              {item.answer}
            </p>
          </div>
        ))}
      </div>

      {/* Footer link to register */}
      <div className="mt-20 pt-8 border-t border-[#D5DBE0] flex items-center justify-between">
        <span className="text-xs font-mono-tabular text-[#5C6770]">
          INKCREED ARCHIVE MANUAL // SECTION 04
        </span>
        <button
          onClick={() => onNavigate('/register')}
          className="text-xs font-semibold uppercase tracking-wider text-[#1F4E79] hover:underline"
        >
          Proceed to register →
        </button>
      </div>
    </div>
  );
};
