import React from 'react';
import { PortraitMat } from '../components/PortraitMat';
import { SIGNATORIES, Signatory } from '../data/inkcreedData';

interface SignatoriesViewProps {
  selectedSlug?: string;
  onNavigate: (path: string) => void;
}

export const SignatoriesView: React.FC<SignatoriesViewProps> = ({
  selectedSlug,
  onNavigate,
}) => {
  // If slug is given, show single signatory file
  if (selectedSlug) {
    const signatory = SIGNATORIES.find(
      (s) => s.slug === selectedSlug || s.id === selectedSlug
    );

    if (!signatory) {
      return (
        <div className="max-w-[1180px] mx-auto px-6 lg:px-12 py-32 text-center">
          <p className="text-base text-[#5C6770]">Signatory file not found in current volume.</p>
          <button
            onClick={() => onNavigate('/signatories')}
            className="mt-6 text-sm font-semibold text-[#1F4E79] hover:text-[#14181C] transition-colors"
          >
            Return to the desk →
          </button>
        </div>
      );
    }

    return (
      <div className="max-w-[1180px] mx-auto px-6 lg:px-12 py-16 md:py-24">
        {/* Back link */}
        <div className="mb-10">
          <button
            onClick={() => onNavigate('/signatories')}
            className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5C6770] hover:text-[#14181C] transition-colors inline-flex items-center gap-2"
          >
            <span>←</span>
            <span>Return to The Desk</span>
          </button>
        </div>

        {/* Dossier split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <PortraitMat
              src={signatory.portrait}
              alt={signatory.name}
              plateNo={signatory.plateNumber}
            />
            {/* Tipped field note card */}
            <div className="mt-6 bg-[#E7EBEE] border border-[#D5DBE0] p-5 shadow-[0_1px_3px_rgba(20,24,28,0.03)] transform -rotate-[1deg]">
              <div className="ui-label text-[10px] text-[#5C6770] tracking-[0.18em] mb-2">
                Field Note — {signatory.fieldNote.role} — {signatory.fieldNote.desk}
              </div>
              <ul className="space-y-1.5 text-xs text-[#14181C]">
                {signatory.fieldNote.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#5C6770] select-none">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="border-b border-[#D5DBE0] pb-6">
              <div className="ui-label mb-2">File No. {signatory.id} · {signatory.practice}</div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#14181C] tracking-tight">
                {signatory.name}
              </h1>
              <p className="mt-4 text-xl text-[#14181C] italic leading-relaxed">
                "{signatory.quote}"
              </p>
            </div>

            <div className="py-8 space-y-6">
              <div>
                <div className="ui-label mb-2">The Practice Vow</div>
                <p className="text-base text-[#14181C] bg-[#F4EFE6] border-l-2 border-[#1F4E79] p-4 italic">
                  "{signatory.dossier.vowExcerpt}"
                </p>
              </div>

              <div>
                <div className="ui-label mb-2">Biographical Ledger</div>
                <p className="text-base text-[#5C6770] leading-relaxed">
                  {signatory.dossier.fullBio}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#D5DBE0]">
                <div>
                  <div className="ui-label text-[10px]">Medium & Implements</div>
                  <div className="text-xs text-[#14181C] mt-1 font-mono-tabular">
                    {signatory.dossier.medium}
                  </div>
                </div>
                <div>
                  <div className="ui-label text-[10px]">Press Tolerances</div>
                  <div className="text-xs text-[#14181C] mt-1 font-mono-tabular">
                    {signatory.dossier.pressTolerances}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // The Studio Energy Layout (/signatories)
  // Alternating rows: portrait left / text right, then text left / portrait right.
  const studioSignatories = SIGNATORIES.slice(0, 6);

  return (
    <div className="max-w-[1180px] mx-auto px-6 lg:px-12 py-16 md:py-24">
      {/* Title & Dek */}
      <div className="mb-20 pb-8 border-b border-[#D5DBE0]">
        <div className="ui-label mb-2">The Studio</div>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[#14181C] tracking-tight">
          The Desk
        </h1>
        <p className="mt-4 text-lg text-[#5C6770] max-w-2xl leading-relaxed">
          Not a team page. Six practices, six files. The register is larger than any one of them.
        </p>
      </div>

      {/* Alternating rows */}
      <div className="space-y-24 md:space-y-32">
        {studioSignatories.map((sig, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={sig.id}
              className={`grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center ${
                !isEven ? 'md:grid-flow-dense' : ''
              }`}
            >
              {/* Portrait: left on even, right on odd */}
              <div
                className={`md:col-span-5 ${
                  !isEven ? 'md:col-start-8' : ''
                }`}
              >
                <div
                  onClick={() => onNavigate(`/signatories/${sig.slug}`)}
                  className="cursor-pointer group"
                >
                  <PortraitMat
                    src={sig.portrait}
                    alt={sig.name}
                    plateNo={sig.plateNumber}
                    className="transition-transform duration-300 group-hover:-translate-y-1"
                  />
                </div>
              </div>

              {/* Text: right on even, left on odd */}
              <div
                className={`md:col-span-7 flex flex-col justify-center ${
                  !isEven ? 'md:col-start-1 md:row-start-1' : ''
                }`}
              >
                <div className="ui-label text-[10px] text-[#5C6770] tracking-[0.18em]">
                  File 000{index + 1} // {sig.practice}
                </div>

                <h2
                  onClick={() => onNavigate(`/signatories/${sig.slug}`)}
                  className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#14181C] mt-2 mb-4 tracking-tight cursor-pointer hover:text-[#1F4E79] transition-colors"
                >
                  {sig.name}
                </h2>

                <p className="text-lg md:text-xl text-[#14181C] leading-relaxed max-w-xl font-normal">
                  "{sig.quote}"
                </p>

                <p className="mt-4 text-sm text-[#5C6770] leading-relaxed max-w-lg">
                  {sig.dossier.fullBio}
                </p>

                <div className="mt-6 pt-4 border-t border-[#D5DBE0] flex items-center justify-between">
                  <button
                    onClick={() => onNavigate(`/signatories/${sig.slug}`)}
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1F4E79] hover:text-[#14181C] transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span>Inspect signatory file</span>
                    <span className="transform transition-transform group-hover:translate-x-1">→</span>
                  </button>

                  <span className="text-[11px] font-mono-tabular text-[#5C6770]">
                    {sig.registerId}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
