import React from 'react';
import { CREED_VOWS } from '../data/inkcreedData';

interface CreedViewProps {
  onNavigate: (path: string) => void;
}

export const CreedView: React.FC<CreedViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-[1040px] mx-auto px-6 lg:px-12 py-20 md:py-32">
      {/* Eyebrow */}
      <div className="ui-label mb-8">The Bound Canon</div>

      {/* Huge opening sentence */}
      <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-[#14181C] leading-[1.08] tracking-tight text-balance max-w-4xl">
        Ink is a decision. Paper is a witness. What has been pressed cannot be recalled.
      </h1>

      {/* Subtle hairline rule */}
      <div className="w-16 h-[2px] bg-[#1F4E79] my-16" />

      {/* Short numbered vows (I–VI) */}
      <div className="space-y-16 max-w-3xl">
        {CREED_VOWS.map((vow) => (
          <div key={vow.num} className="border-t border-[#D5DBE0] pt-8">
            <div className="flex items-baseline gap-4 mb-3">
              <span className="font-mono-tabular text-sm font-bold text-[#1F4E79]">
                {vow.num}
              </span>
              <span className="ui-label text-[10px] tracking-[0.2em] text-[#5C6770]">
                {vow.title}
              </span>
            </div>
            <p className="text-lg md:text-xl text-[#14181C] leading-relaxed font-normal">
              {vow.statement}
            </p>
          </div>
        ))}
      </div>

      {/* Signed line — the desk */}
      <div className="mt-24 pt-12 border-t border-[#D5DBE0] flex flex-col sm:flex-row items-baseline justify-between gap-6 max-w-3xl">
        <div>
          <div className="font-display text-2xl font-bold text-[#14181C] tracking-tight">
            — the desk.
          </div>
          <div className="text-xs text-[#5C6770] mt-1 font-mono-tabular">
            SOLANA REGISTER // VOLUME 01 // 444 PLATES
          </div>
        </div>

        <button
          onClick={() => onNavigate('/register')}
          className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1F4E79] hover:text-[#14181C] transition-colors"
        >
          Countersign the plate →
        </button>
      </div>
    </div>
  );
};
