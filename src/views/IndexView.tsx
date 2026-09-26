import React, { useState } from 'react';
import { PortraitMat } from '../components/PortraitMat';
import { SIGNATORIES, Signatory } from '../data/inkcreedData';

interface IndexViewProps {
  selectedId?: string;
  initialPracticeFilter?: string;
  onNavigate: (path: string) => void;
}

export const IndexView: React.FC<IndexViewProps> = ({
  selectedId,
  initialPracticeFilter,
  onNavigate,
}) => {
  const [practiceFilter, setPracticeFilter] = useState<string>(
    initialPracticeFilter || 'All'
  );
  const [statusFilter, setStatusFilter] = useState<'All' | 'Signed' | 'Open'>('All');

  // If a specific ID is selected, show Profile/Dossier split view
  if (selectedId) {
    const signatory = SIGNATORIES.find((s) => s.id === selectedId || s.slug === selectedId);

    if (!signatory) {
      return (
        <div className="max-w-[1180px] mx-auto px-6 lg:px-12 py-32 text-center">
          <p className="text-base text-[#5C6770]">Plate {selectedId} has not been filed in this volume.</p>
          <button
            onClick={() => onNavigate('/index')}
            className="mt-6 text-sm font-semibold text-[#1F4E79] hover:text-[#14181C] transition-colors"
          >
            Return to the index →
          </button>
        </div>
      );
    }

    return (
      <div className="max-w-[1180px] mx-auto px-6 lg:px-12 py-16 md:py-24">
        {/* Back Link */}
        <div className="mb-10">
          <button
            onClick={() => onNavigate('/index')}
            className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5C6770] hover:text-[#14181C] transition-colors inline-flex items-center gap-2"
          >
            <span>←</span>
            <span>Return to the index</span>
          </button>
        </div>

        {/* Split: portrait on warm mat | dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Portrait on warm mat */}
          <div className="lg:col-span-5">
            <PortraitMat
              src={signatory.portrait}
              alt={signatory.name}
              plateNo={signatory.plateNumber}
            />
            {/* Stamp below portrait */}
            <div className="mt-4 p-3 bg-[#E7EBEE] border border-[#D5DBE0] flex items-center justify-between text-xs font-mono-tabular">
              <span className="text-[#5C6770]">{signatory.registerId}</span>
              <span className="text-[#14181C] font-semibold">{signatory.status}</span>
            </div>
          </div>

          {/* Right: Dossier */}
          <div className="lg:col-span-7">
            <div className="border-b border-[#D5DBE0] pb-6">
              <div className="ui-label mb-2">Register Dossier // {signatory.registerId}</div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#14181C] tracking-tight">
                {signatory.name}
              </h1>
              <p className="mt-3 text-lg text-[#14181C] italic font-normal leading-relaxed">
                "{signatory.quote}"
              </p>
            </div>

            {/* Dossier labels grid: Plate, Practice, Press, Status */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 border-b border-[#D5DBE0]">
              <div>
                <div className="ui-label text-[10px]">Plate</div>
                <div className="mt-1 font-mono-tabular text-sm font-semibold text-[#14181C]">
                  {signatory.plateNumber.replace('Plate ', 'No. ')}
                </div>
              </div>
              <div>
                <div className="ui-label text-[10px]">Practice</div>
                <div className="mt-1 text-sm font-semibold text-[#14181C]">
                  {signatory.practice}
                </div>
              </div>
              <div>
                <div className="ui-label text-[10px]">Press</div>
                <div className="mt-1 text-sm font-semibold text-[#14181C]">
                  Solana
                </div>
              </div>
              <div>
                <div className="ui-label text-[10px]">Status</div>
                <div className="mt-1 text-sm font-semibold text-[#1F4E79]">
                  {signatory.status}
                </div>
              </div>
            </div>

            {/* Bio & Specifications */}
            <div className="py-8 space-y-6">
              <div>
                <div className="ui-label mb-2">Account of the Bench</div>
                <p className="text-base text-[#14181C] leading-relaxed">
                  {signatory.dossier.fullBio}
                </p>
              </div>

              <div className="p-5 bg-[#E7EBEE] border border-[#D5DBE0]">
                <div className="ui-label mb-2">Physical Matrix Tolerances</div>
                <div className="text-xs text-[#14181C] font-mono-tabular space-y-1">
                  <div>Medium: {signatory.dossier.medium}</div>
                  <div>Calibration: {signatory.dossier.pressTolerances}</div>
                  <div>Provenance: {signatory.dossier.provenance}</div>
                </div>
              </div>

              {signatory.status === 'Open' ? (
                <div className="pt-4">
                  <button
                    onClick={() => onNavigate('/register')}
                    className="px-6 py-3.5 bg-[#1F4E79] text-white text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#183e60] transition-colors rounded-[1px]"
                  >
                    Countersign this plate →
                  </button>
                </div>
              ) : (
                <div className="pt-2 text-xs font-mono-tabular text-[#5C6770]">
                  Record verified by master roll. No duplicate impression.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Collection list view (/index)
  const practicesList = ['All', 'Binders', 'Plate', 'Script', 'Seal', 'Ground', 'Signal'];

  const filteredSignatories = SIGNATORIES.filter((s) => {
    const matchPractice =
      practiceFilter === 'All' || s.practice.toLowerCase() === practiceFilter.toLowerCase();
    const matchStatus = statusFilter === 'All' || s.status === statusFilter;
    return matchPractice && matchStatus;
  });

  return (
    <div className="max-w-[1180px] mx-auto px-6 lg:px-12 py-16 md:py-24">
      {/* Title & Dek */}
      <div className="mb-10 pb-8 border-b border-[#D5DBE0]">
        <div className="ui-label mb-2">Master Index</div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#14181C] tracking-tight">
          The Register Index
        </h1>
        <p className="mt-3 text-base text-[#5C6770] max-w-2xl leading-relaxed">
          The complete inventory of 444 plates. Every mark is allocated to one maker and recorded permanently.
        </p>
      </div>

      {/* Filter Row 1 (Rectangles, NOT pills): All — 444, Binders, Plate, Script, Seal, Ground, Signal */}
      <div className="space-y-4 mb-12">
        <div className="flex flex-wrap items-center gap-2">
          <span className="ui-label mr-2 hidden sm:inline-block">Practice:</span>
          {practicesList.map((p) => {
            const isAll = p === 'All';
            const label = isAll ? 'All — 444' : p;
            const isSelected = practiceFilter === p;
            return (
              <button
                key={p}
                onClick={() => setPracticeFilter(p)}
                className={`px-3 py-1.5 text-xs font-medium uppercase tracking-[0.12em] transition-all rounded-[1px] border ${
                  isSelected
                    ? 'border-[#14181C] bg-[#14181C] text-[#F3F5F7]'
                    : 'border-[#D5DBE0] bg-[#F3F5F7] text-[#5C6770] hover:text-[#14181C] hover:border-[#14181C]'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Filter Row 2 (Rectangles): Signed, Open */}
        <div className="flex items-center gap-2 pt-2 border-t border-[#D5DBE0]">
          <span className="ui-label mr-2 hidden sm:inline-block">Status:</span>
          {(['All', 'Signed', 'Open'] as const).map((st) => {
            const isSelected = statusFilter === st;
            return (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] transition-all rounded-[1px] border ${
                  isSelected
                    ? 'border-[#1F4E79] bg-[#1F4E79] text-white'
                    : 'border-[#D5DBE0] bg-[#F3F5F7] text-[#5C6770] hover:text-[#14181C]'
                }`}
              >
                {st}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of portraits, 4 across */}
      {filteredSignatories.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredSignatories.map((sig) => (
            <div
              key={sig.id}
              onClick={() => onNavigate(`/index/${sig.id}`)}
              className="group cursor-pointer flex flex-col"
            >
              {/* Portrait on warm mat */}
              <PortraitMat
                src={sig.portrait}
                alt={sig.name}
                plateNo={sig.plateNumber}
                aspect="aspect-[3/4]"
                className="transition-transform duration-200 group-hover:-translate-y-1"
              />

              {/* Metadata under each: number 0007, name, tiny practice chip (rectangular) */}
              <div className="mt-3 flex items-baseline justify-between">
                <span className="font-mono-tabular text-xs font-semibold text-[#14181C]">
                  {sig.id}
                </span>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#14181C] group-hover:text-[#1F4E79] transition-colors truncate max-w-[130px]">
                  {sig.name}
                </span>
              </div>

              <div className="mt-1 flex items-center justify-between">
                {/* Tiny practice chip: rectangle, not pill */}
                <span className="px-1.5 py-0.5 border border-[#D5DBE0] bg-[#E7EBEE] text-[9px] uppercase tracking-wider text-[#5C6770] font-medium rounded-[1px]">
                  {sig.practice}
                </span>
                <span
                  className={`text-[10px] font-mono-tabular ${
                    sig.status === 'Signed' ? 'text-[#5C6770]' : 'text-[#1F4E79] font-medium'
                  }`}
                >
                  {sig.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center border border-[#D5DBE0] bg-[#E7EBEE]/20 p-8">
          <p className="text-sm text-[#5C6770]">No plates match the selected discipline filter.</p>
          <button
            onClick={() => {
              setPracticeFilter('All');
              setStatusFilter('All');
            }}
            className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#1F4E79] hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};
