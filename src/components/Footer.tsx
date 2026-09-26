import React from 'react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#F3F5F7] border-t border-[#D5DBE0] mt-24 py-8">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5C6770]">
        {/* Left provenance line */}
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="font-semibold text-[#14181C]">InkCreed Press</span>
          <span aria-hidden="true">·</span>
          <span>Solana</span>
          <span aria-hidden="true">·</span>
          <span>Register open by plate</span>
        </div>

        {/* Right quick links */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => onNavigate('/impressions')}
            className="hover:text-[#14181C] transition-colors"
          >
            Impressions
          </button>
          <button
            onClick={() => onNavigate('/notes')}
            className="hover:text-[#14181C] transition-colors"
          >
            Notes
          </button>
          <button
            onClick={() => onNavigate('/register')}
            className="hover:text-[#14181C] transition-colors font-medium text-[#1F4E79]"
          >
            Sign →
          </button>
        </div>
      </div>
    </footer>
  );
};
