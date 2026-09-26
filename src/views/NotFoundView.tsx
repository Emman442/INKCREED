import React from 'react';

interface NotFoundViewProps {
  onNavigate: (path: string) => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-[1180px] mx-auto px-6 lg:px-12 py-36 text-center">
      <div className="ui-label mb-3">Void Registry Entry</div>
      <p className="font-display text-2xl sm:text-3xl font-bold text-[#14181C]">
        This plate does not exist in the register.
      </p>
      <div className="mt-8">
        <button
          onClick={() => onNavigate('/')}
          className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1F4E79] hover:text-[#14181C] transition-colors inline-flex items-center gap-2"
        >
          <span>Return to the press</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
};
