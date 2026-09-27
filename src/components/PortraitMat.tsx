import React, { useState } from 'react';

interface PortraitMatProps {
  src: string;
  alt: string;
  className?: string;
  aspect?: string; // e.g. "aspect-[3/4]"
  plateNo?: string;
  showTicks?: boolean;
  eager?: boolean;
}

export const PortraitMat: React.FC<PortraitMatProps> = ({
  src,
  alt,
  className = '',
  aspect = 'aspect-[3/4]',
  plateNo,
  showTicks = true,
  eager = false,
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative bg-[#F4EFE6] border border-[#D5DBE0] p-3 md:p-4 select-none ${className}`}
    >
      {/* Optional registration crop ticks on the mat corners */}
      {showTicks && (
        <>
          <span className="absolute top-1 left-1 text-[8px] text-[#5C6770] font-mono leading-none select-none">
            +
          </span>
          <span className="absolute top-1 right-1 text-[8px] text-[#5C6770] font-mono leading-none select-none">
            +
          </span>
          <span className="absolute bottom-1 left-1 text-[8px] text-[#5C6770] font-mono leading-none select-none">
            +
          </span>
          <span className="absolute bottom-1 right-1 text-[8px] text-[#5C6770] font-mono leading-none select-none">
            +
          </span>
        </>
      )}

      {/* Inner Image Container with crisp border */}
      <div className={`relative w-full ${aspect} overflow-hidden border border-[#D5DBE0] bg-[#EBE5DA]`}>
        {!hasError ? (
          <img
            src={src}
            alt={alt}   
            loading={eager ? 'eager' : 'lazy'}
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            className="w-full h-full object-cover object-center grayscale contrast-115 transition-transform duration-500 hover:scale-[1.01]"
          />
        ) : (
          /* Graceful stylized fallback if image path ever fails */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#EAE4D9]">
            <svg
              className="w-12 h-12 text-[#14181C] opacity-40 mb-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <rect x="3" y="3" width="18" height="18" />
              <line x1="12" y1="3" x2="12" y2="21" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <circle cx="12" cy="12" r="5" />
            </svg>
            <span className="text-[11px] uppercase tracking-widest text-[#5C6770] font-medium">
              Plate Impression
            </span>
            <span className="text-xs text-[#14181C] mt-1 font-semibold">{alt}</span>
          </div>
        )}
      </div>

      {/* Mat Footer caption / Plate ID if provided */}
      {plateNo && (
        <div className="mt-2.5 flex items-center justify-between text-[10px] text-[#5C6770] font-mono-tabular">
          <span>{plateNo}</span>
          <span className="tracking-widest uppercase">Proof Impression</span>
        </div>
      )}
    </div>
  );
};
