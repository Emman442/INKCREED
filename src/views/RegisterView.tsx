import React, { useState } from 'react';
import { PortraitMat } from '../components/PortraitMat';
import { SIGNATORIES } from '../data/inkcreedData';

interface RegisterViewProps {
  onNavigate: (path: string) => void;
}

export const RegisterView: React.FC<RegisterViewProps> = ({ onNavigate }) => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isKissing, setIsKissing] = useState(false);

  // Default plate for registration is the open plate 313
  const activePlate = SIGNATORIES.find((s) => s.id === '0313') || SIGNATORIES[0];

  const handleOpenRegister = () => {
    // Press kiss animation for 250ms
    setIsKissing(true);
    setTimeout(() => {
      setIsKissing(false);
      // Show required toast
      setToastMessage('LaunchMyNFT hook comes later.');
      setTimeout(() => {
        setToastMessage(null);
      }, 3500);
    }, 250);
  };

  return (
    <div className="max-w-[1180px] mx-auto px-6 lg:px-12 py-16 md:py-24">
      {/* Toast Notification Container */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 bg-[#14181C] text-[#F3F5F7] border border-[#D5DBE0] p-4 shadow-xl flex items-center gap-3 transition-all duration-300">
          <div className="w-2.5 h-2.5 bg-[#1F4E79]" />
          <span className="text-xs font-mono-tabular tracking-wide font-medium">
            {toastMessage}
          </span>
        </div>
      )}

      {/* Back button */}
      <div className="mb-10">
        <button
          onClick={() => onNavigate('/')}
          className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5C6770] hover:text-[#14181C] transition-colors inline-flex items-center gap-2"
        >
          <span>←</span>
          <span>Return to the press</span>
        </button>
      </div>

      {/* Split layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: Large portrait on warm mat */}
        <div className="lg:col-span-5">
          <PortraitMat
            src={activePlate.portrait}
            alt={activePlate.name}
            plateNo="No. 313 / 444"
          />
          {/* Subtle ledger run bar below portrait */}
          <div className="mt-4 p-3 bg-[#E7EBEE] border border-[#D5DBE0] flex items-center justify-between text-xs font-mono-tabular">
            <span className="text-[#5C6770]">STATE: RUN SHEET ACTIVE</span>
            <span className="text-[#1F4E79] font-semibold">1:1 ALLOCATION</span>
          </div>
        </div>

        {/* Right: Register specification */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Eyebrow: Opening night — by plate */}
          <div className="ui-label mb-3">Opening night — by plate</div>

          {/* Headline: COUNTERSIGN THE PLATE. */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[#14181C] tracking-tight leading-[1.06]">
            COUNTERSIGN<br />THE PLATE.
          </h1>

          {/* Progress: 312 signed · 132 of 444 plates remain. */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="text-sm font-semibold text-[#14181C]">
              312 signed · 132 of 444 plates remain.
            </div>
            {/* Minimal hairline progress indicator */}
            <div className="grow max-w-[200px] h-[3px] bg-[#D5DBE0] overflow-hidden">
              <div
                className="h-full bg-[#1F4E79]"
                style={{ width: `${(312 / 444) * 100}%` }}
              />
            </div>
          </div>

          {/* Body */}
          <p className="mt-6 text-base md:text-lg text-[#5C6770] leading-relaxed max-w-xl">
            A plate is not bought at a counter. It is read, verified, and signed. When you are ready, open the register.
          </p>

          {/* Meta grid */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-[#E7EBEE] border border-[#D5DBE0]">
            <div>
              <div className="ui-label text-[10px]">Register ID</div>
              <div className="mt-1 font-mono-tabular text-sm font-semibold text-[#14181C]">
                IC-0007
              </div>
            </div>
            <div>
              <div className="ui-label text-[10px]">Plate</div>
              <div className="mt-1 font-mono-tabular text-sm font-semibold text-[#14181C]">
                No. 313 / 444
              </div>
            </div>
            <div>
              <div className="ui-label text-[10px]">Format</div>
              <div className="mt-1 text-sm font-semibold text-[#14181C]">
                Opening Night
              </div>
            </div>
            <div>
              <div className="ui-label text-[10px]">Contribution</div>
              <div className="mt-1 font-mono-tabular text-sm font-semibold text-[#1F4E79]">
                1.20 SOL
              </div>
            </div>
          </div>

          {/* Primary button: Open the register → */}
          <div className="mt-8">
            <button
              onClick={handleOpenRegister}
              className={`px-8 py-4 bg-[#1F4E79] text-white text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#183e60] transition-all rounded-[1px] relative select-none ${
                isKissing ? 'scale-[0.98] shadow-inner bg-[#14181C]' : ''
              }`}
            >
              <span className="flex items-center gap-2">
                <span>Open the register</span>
                <span>→</span>
              </span>
            </button>
          </div>

          {/* Caption: — the press will ink your name */}
          <div className="mt-4 text-xs italic text-[#5C6770] font-normal">
            — the press will ink your name
          </div>
        </div>
      </div>
    </div>
  );
};
