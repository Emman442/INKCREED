import React from 'react';
import { PortraitMat } from '../components/PortraitMat';
import { PRACTICES, SIGNATORIES, LEDGER_ENTRIES } from '../data/inkcreedData';

interface HomeViewProps {
  onNavigate: (path: string) => void;
  onFilterPractice: (practice: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onFilterPractice }) => {
  const featuredSignatory = SIGNATORIES.find((s) => s.id === '0007') || SIGNATORIES[0];
  const ledgerHighlights = LEDGER_ENTRIES.slice(0, 2);

  return (
    <div className="w-full">
      {/* 1. PRESS (Hero Section) */}
      <section
        id="press"
        className="pt-16 pb-24 md:pt-24 md:pb-32 border-b border-[#D5DBE0] scroll-mt-20"
      >
        <div className="max-w-[1180px] mx-auto px-6 lg:px-12">
          {/* Eyebrow */}
          <div className="ui-label mb-8 flex items-center gap-3">
            <span>Press</span>
            <span aria-hidden="true" className="text-[#D5DBE0]">/</span>
            <span>Plate 00</span>
          </div>

          {/* Headline (very large, sharp grotesque) */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-bold text-[#14181C] leading-[1.04] tracking-tight max-w-4xl text-balance">
            A vow is only real<br />
            once it is signed.
          </h1>

          {/* Dek */}
          <p className="mt-8 text-lg md:text-xl text-[#5C6770] max-w-2xl leading-relaxed font-normal">
            InkCreed is a closed register of makers. One plate, one signatory, no second impression.
          </p>

          {/* Text link (No hero wallet button. No big 3D NFT.) */}
          <div className="mt-10">
            <button
              onClick={() => onNavigate('/register')}
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#14181C] hover:text-[#1F4E79] transition-colors group"
            >
              <span>Open the register</span>
              <span className="transform transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. CENSUS (Stats Section - 2x2 plate grid) */}
      <section
        id="census"
        className="py-20 md:py-28 border-b border-[#D5DBE0] scroll-mt-20"
      >
        <div className="max-w-[1180px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* 2x2 plate grid: each cell a hairline box */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-0 border border-[#D5DBE0]">
              {/* Cell 1: 444 Signatories */}
              <div className="p-8 sm:p-10 border-b sm:border-r border-[#D5DBE0] bg-[#F3F5F7] hover:bg-[#E7EBEE]/40 transition-colors">
                <div className="font-display text-4xl sm:text-5xl font-bold text-[#14181C] tracking-tight">
                  444
                </div>
                <div className="ui-label mt-3">Signatories</div>
                <div className="mt-2 text-sm text-[#5C6770]">
                  Fixed register. No reserve plates.
                </div>
              </div>

              {/* Cell 2: 06 Practices */}
              <div className="p-8 sm:p-10 border-b border-[#D5DBE0] bg-[#F3F5F7] hover:bg-[#E7EBEE]/40 transition-colors">
                <div className="font-display text-4xl sm:text-5xl font-bold text-[#14181C] tracking-tight">
                  06
                </div>
                <div className="ui-label mt-3">Practices</div>
                <div className="mt-2 text-sm text-[#5C6770]">
                  One practice assigned. Never blended.
                </div>
              </div>

              {/* Cell 3: Solana Press */}
              <div className="p-8 sm:p-10 sm:border-r border-b sm:border-b-0 border-[#D5DBE0] bg-[#F3F5F7] hover:bg-[#E7EBEE]/40 transition-colors">
                <div className="font-display text-3xl sm:text-4xl font-bold text-[#14181C] tracking-tight">
                  Solana
                </div>
                <div className="ui-label mt-3">Press</div>
                <div className="mt-2 text-sm text-[#5C6770]">
                  On-chain provenance.
                </div>
              </div>

              {/* Cell 4: 1:1 Impression */}
              <div className="p-8 sm:p-10 bg-[#F3F5F7] hover:bg-[#E7EBEE]/40 transition-colors">
                <div className="font-display text-4xl sm:text-5xl font-bold text-[#14181C] tracking-tight">
                  1:1
                </div>
                <div className="ui-label mt-3">Impression</div>
                <div className="mt-2 text-sm text-[#5C6770]">
                  One mark, one name.
                </div>
              </div>
            </div>

            {/* Right of the grid: short caption */}
            <div className="lg:col-span-4 lg:pt-4">
              <div className="ui-label mb-3">Run Sheet Census</div>
              <p className="text-base text-[#5C6770] leading-relaxed">
                Figures are kept the way a press keeps them — as a run sheet, not a storefront.
              </p>
              <div className="mt-8 pt-6 border-t border-[#D5DBE0] text-xs font-mono-tabular text-[#5C6770]">
                PRESS PROTOCOL // SOLANA MAINNET
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PLATE (Featured Signatory) */}
      <section
        id="plate"
        className="py-20 md:py-28 border-b border-[#D5DBE0] scroll-mt-20"
      >
        <div className="max-w-[1180px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            {/* Left: Large portrait on warm mat */}
            <div className="md:col-span-5">
              <PortraitMat
                src={featuredSignatory.portrait}
                alt={featuredSignatory.name}
                plateNo={featuredSignatory.plateNumber}
              />
            </div>

            {/* Right: Metadata + tipped note card */}
            <div className="md:col-span-7 flex flex-col justify-center">
              <div className="ui-label">Practice · Binding — 0007</div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#14181C] mt-2 mb-4 tracking-tight">
                {featuredSignatory.name}
              </h2>
              <p className="text-lg md:text-xl text-[#14181C] font-normal leading-relaxed max-w-xl">
                {featuredSignatory.quote}
              </p>

              <div className="mt-6">
                <button
                  onClick={() => onNavigate(`/signatories/${featuredSignatory.slug}`)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1F4E79] hover:text-[#14181C] transition-colors group"
                >
                  <span>View the file</span>
                  <span className="transform transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>

              {/* Tipped note card (slight rotate -1.5deg, paper 2 #E7EBEE, drop shadow almost none) */}
              <div className="mt-10 max-w-md transform -rotate-[1.5deg] bg-[#E7EBEE] border border-[#D5DBE0] p-5 shadow-[0_1px_3px_rgba(20,24,28,0.04)]">
                <div className="ui-label text-[10px] text-[#5C6770] tracking-[0.18em] mb-2">
                  Field note — Binder — Night desk
                </div>
                <ul className="space-y-1.5 text-xs text-[#14181C]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#5C6770] select-none">•</span>
                    <span>Ties every signature before it is filed.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#5C6770] select-none">•</span>
                    <span>Uses one knot. Repeats it until it disappears.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRACTICES */}
      <section
        id="practices"
        className="py-20 md:py-28 border-b border-[#D5DBE0] scroll-mt-20"
      >
        <div className="max-w-[1180px] mx-auto px-6 lg:px-12">
          {/* Eyebrow + line */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-[#D5DBE0] gap-4">
            <div>
              <div className="ui-label mb-1">Workshop Division</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#14181C]">
                Six practices. One plate. No hybrids.
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/signatories')}
              className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5C6770] hover:text-[#14181C] transition-colors self-start sm:self-auto"
            >
              The Studio Desk →
            </button>
          </div>

          {/* Grid of 6 large portraits, 3 across */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {PRACTICES.map((practice) => (
              <div
                key={practice.id}
                onClick={() => onFilterPractice(practice.name)}
                className="group cursor-pointer flex flex-col"
              >
                <PortraitMat
                  src={practice.portrait}
                  alt={practice.name}
                  plateNo={`Lead: ${practice.leadPlate}`}
                  className="transition-transform duration-200 group-hover:-translate-y-1"
                />
                <div className="mt-4 flex items-baseline justify-between">
                  <h3 className="font-display text-xl font-bold text-[#14181C] group-hover:text-[#1F4E79] transition-colors">
                    {practice.name}
                  </h3>
                  <span className="text-xs font-mono-tabular text-[#5C6770]">
                    {practice.leadPlate}
                  </span>
                </div>
                <div className="text-xs text-[#5C6770] mt-1 font-normal tracking-wide">
                  {practice.elements}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CREED (Full-width dark interrupt) */}
      <section
        id="creed"
        className="w-full bg-[#14181C] text-[#F3F5F7] py-28 md:py-36 scroll-mt-20"
      >
        <div className="max-w-[1180px] mx-auto px-6 lg:px-12">
          {/* Small cobalt rule */}
          <div className="w-12 h-[2px] bg-[#1F4E79] mb-12" />

          {/* Huge type */}
          <div className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold leading-[1.08] tracking-tight max-w-4xl text-balance">
            Ink is a decision.<br />
            Paper is a witness.
          </div>

          {/* Link in wet teal */}
          <div className="mt-12">
            <button
              onClick={() => onNavigate('/creed')}
              className="text-[#2F6F63] hover:text-[#3e8a7d] text-base font-semibold tracking-wide inline-flex items-center gap-2 transition-colors"
            >
              <span>Read the creed</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* 6. LEDGER (Paper again) */}
      <section
        id="ledger"
        className="py-20 md:py-28 border-b border-[#D5DBE0] scroll-mt-20"
      >
        <div className="max-w-[1180px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-12 border-b border-[#D5DBE0] pb-6 gap-4">
            <div>
              <div className="ui-label mb-1">Journal & Notices</div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#14181C]">
                The register is still wet.
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/ledger')}
              className="text-xs font-semibold uppercase tracking-[0.14em] text-[#14181C] hover:text-[#1F4E79] transition-colors"
            >
              All entries →
            </button>
          </div>

          {/* Two entry rows with date + title + one-line dek */}
          <div className="divide-y divide-[#D5DBE0] border-t border-b border-[#D5DBE0]">
            {ledgerHighlights.map((entry) => (
              <div
                key={entry.slug}
                onClick={() => onNavigate(`/ledger/${entry.slug}`)}
                className="py-8 group cursor-pointer flex flex-col md:flex-row md:items-baseline justify-between gap-4 hover:bg-[#E7EBEE]/30 px-3 -mx-3 transition-colors"
              >
                <div className="md:w-48 shrink-0">
                  <span className="text-xs font-mono-tabular text-[#5C6770] uppercase tracking-wider">
                    {entry.date}
                  </span>
                </div>
                <div className="grow max-w-2xl">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#14181C] group-hover:text-[#1F4E79] transition-colors">
                    {entry.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#5C6770] leading-relaxed">
                    {entry.dek}
                  </p>
                </div>
                <div className="md:w-32 text-left md:text-right shrink-0">
                  <span className="text-xs font-medium text-[#14181C] group-hover:text-[#1F4E79]">
                    Read entry →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. REGISTER CLOSE */}
      <section
        id="register"
        className="py-24 md:py-32 scroll-mt-20"
      >
        <div className="max-w-[1180px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: huge COUNTERSIGN THE PLATE */}
            <div className="lg:col-span-7">
              <div className="ui-label mb-3">Roll Call</div>
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-[#14181C] leading-[1.04] tracking-tight">
                COUNTERSIGN<br />THE PLATE.
              </h2>
              <div className="mt-6 text-sm text-[#5C6770] tracking-wide">
                444 plates · fixed run · the press opens once
              </div>

              {/* Buttons: solid Enter the register and ghost See the impressions */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('/register')}
                  className="px-6 py-3.5 bg-[#1F4E79] text-white text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#183e60] transition-colors rounded-[1px]"
                >
                  Enter the register
                </button>
                <button
                  onClick={() => onNavigate('/impressions')}
                  className="px-6 py-3.5 border border-[#14181C] text-[#14181C] text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#14181C] hover:text-[#F3F5F7] transition-colors rounded-[1px]"
                >
                  See the impressions
                </button>
              </div>
            </div>

            {/* Right: small portrait + circular stamp Plate No. 00 — Open */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row items-center justify-center gap-8">
              <div className="w-52">
                <PortraitMat
                  src={featuredSignatory.portrait}
                  alt="Register Plate"
                  plateNo="Plate 0000"
                  aspect="aspect-[3/4]"
                />
              </div>

              {/* Circular stamp: Plate No. 00 — Open */}
              <div className="w-28 h-28 border-2 border-dashed border-[#1F4E79] rounded-full p-2 flex flex-col items-center justify-center text-center select-none rotate-6">
                <div className="text-[9px] font-mono-tabular uppercase tracking-widest text-[#1F4E79] font-bold">
                  PLATE NO. 00
                </div>
                <div className="w-8 h-[1px] bg-[#1F4E79] my-1" />
                <div className="text-xs uppercase font-display font-extrabold tracking-widest text-[#1F4E79]">
                  OPEN
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
