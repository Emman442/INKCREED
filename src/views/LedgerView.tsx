import React from 'react';
import { LEDGER_ENTRIES, LedgerEntry } from '../data/inkcreedData';

interface LedgerViewProps {
  selectedSlug?: string;
  onNavigate: (path: string) => void;
}

export const LedgerView: React.FC<LedgerViewProps> = ({
  selectedSlug,
  onNavigate,
}) => {
  // If slug is given, show single quiet editorial article
  if (selectedSlug) {
    const entry = LEDGER_ENTRIES.find((e) => e.slug === selectedSlug);

    if (!entry) {
      return (
        <div className="max-w-[1180px] mx-auto px-6 lg:px-12 py-32 text-center">
          <p className="text-base text-[#5C6770]">Ledger entry does not exist in this press log.</p>
          <button
            onClick={() => onNavigate('/ledger')}
            className="mt-6 text-sm font-semibold text-[#1F4E79] hover:text-[#14181C] transition-colors"
          >
            Return to the ledger →
          </button>
        </div>
      );
    }

    return (
      <article className="max-w-[1040px] mx-auto px-6 lg:px-12 py-16 md:py-24">
        {/* Back Link */}
        <div className="mb-12">
          <button
            onClick={() => onNavigate('/ledger')}
            className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5C6770] hover:text-[#14181C] transition-colors inline-flex items-center gap-2"
          >
            <span>←</span>
            <span>Return to Ledger Entries</span>
          </button>
        </div>

        {/* Article Header */}
        <header className="border-b border-[#D5DBE0] pb-10 mb-12">
          <div className="flex items-center gap-3 ui-label mb-4">
            <span className="font-mono-tabular">{entry.date}</span>
            <span aria-hidden="true">·</span>
            <span>{entry.plateRef}</span>
            <span aria-hidden="true">·</span>
            <span>{entry.readTime}</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[#14181C] tracking-tight leading-[1.08] max-w-3xl">
            {entry.title}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#5C6770] leading-relaxed max-w-2xl">
            {entry.dek}
          </p>
        </header>

        {/* Lead paragraph */}
        <div className="max-w-[700px] mb-12">
          <p className="text-lg md:text-xl text-[#14181C] leading-relaxed font-normal">
            {entry.leadParagraph}
          </p>
        </div>

        {/* Pull Quote: centered wide pull quote in serif/italic with subtle top/bottom divider lines */}
        <div className="my-16 py-8 border-t border-b border-[#D5DBE0] max-w-[820px]">
          <blockquote className="text-2xl sm:text-3xl font-display font-medium text-[#14181C] italic leading-snug">
            "{entry.pullQuote}"
          </blockquote>
          <div className="mt-4 ui-label text-[10px] text-[#5C6770]">
            — Recorded by {entry.signatory}
          </div>
        </div>

        {/* Body Sections with optional marginalia */}
        <div className="max-w-[700px] space-y-12">
          {entry.bodySections.map((sec, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#14181C]">
                {sec.heading}
              </h2>
              <p className="text-base text-[#14181C] leading-relaxed">
                {sec.text}
              </p>
              {sec.marginalia && (
                <div className="mt-3 p-3 bg-[#E7EBEE] border-l-2 border-[#1F4E79] text-xs font-mono-tabular text-[#5C6770]">
                  {sec.marginalia}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Signatory Colophon */}
        <div className="mt-20 pt-8 border-t border-[#D5DBE0] flex items-center justify-between text-xs text-[#5C6770] font-mono-tabular">
          <span>ATTESTED BY THE PRESS: SOLANA</span>
          <span>ENTERED: {entry.date}</span>
        </div>
      </article>
    );
  }

  // Ledger Archive List
  return (
    <div className="max-w-[1180px] mx-auto px-6 lg:px-12 py-16 md:py-24">
      {/* Title & Dek */}
      <div className="mb-14 pb-8 border-b border-[#D5DBE0]">
        <div className="ui-label mb-2">Chronicle</div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#14181C] tracking-tight">
          The Ledger
        </h1>
        <p className="mt-3 text-base text-[#5C6770] max-w-2xl leading-relaxed">
          Notices, technical observations, and witness accounts from the press room floor.
        </p>
      </div>

      {/* Entries List */}
      <div className="divide-y divide-[#D5DBE0] border-t border-b border-[#D5DBE0]">
        {LEDGER_ENTRIES.map((entry) => (
          <div
            key={entry.slug}
            onClick={() => onNavigate(`/ledger/${entry.slug}`)}
            className="py-10 group cursor-pointer flex flex-col md:flex-row md:items-baseline justify-between gap-6 hover:bg-[#E7EBEE]/30 px-3 -mx-3 transition-colors"
          >
            <div className="md:w-56 shrink-0">
              <div className="text-xs font-mono-tabular text-[#5C6770] uppercase tracking-wider">
                {entry.date}
              </div>
              <div className="text-[11px] text-[#5C6770] font-mono-tabular mt-1">
                {entry.plateRef}
              </div>
            </div>

            <div className="grow max-w-2xl">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#14181C] group-hover:text-[#1F4E79] transition-colors tracking-tight">
                {entry.title}
              </h2>
              <p className="mt-2 text-base text-[#5C6770] leading-relaxed">
                {entry.dek}
              </p>
              <div className="mt-3 text-xs text-[#5C6770] font-mono-tabular">
                Signatory: {entry.signatory} · {entry.readTime}
              </div>
            </div>

            <div className="md:w-36 text-left md:text-right shrink-0">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#14181C] group-hover:text-[#1F4E79] inline-flex items-center gap-1">
                <span>Read</span>
                <span>→</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
