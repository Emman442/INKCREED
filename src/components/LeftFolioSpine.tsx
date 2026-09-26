import React, { useEffect, useState } from 'react';

interface FolioSpineProps {
  currentPath: string;
  activeSectionId?: string;
  onNavigateSection: (sectionId: string) => void;
}

export const LeftFolioSpine: React.FC<FolioSpineProps> = ({
  currentPath,
  activeSectionId = 'press',
  onNavigateSection,
}) => {
  const tabs = [
    { id: 'press', label: 'Press' },
    { id: 'census', label: 'Census' },
    { id: 'plate', label: 'Plate' },
    { id: 'practices', label: 'Practices' },
    { id: 'creed', label: 'Creed' },
    { id: 'ledger', label: 'Ledger' },
    { id: 'register', label: 'Register' },
  ];

  // Determine current active tab
  let currentActive = activeSectionId;
  if (currentPath === '/creed') currentActive = 'creed';
  else if (currentPath === '/ledger' || currentPath.startsWith('/ledger/')) currentActive = 'ledger';
  else if (currentPath === '/register') currentActive = 'register';
  else if (currentPath === '/index' || currentPath.startsWith('/index/')) currentActive = 'plate';
  else if (currentPath === '/signatories' || currentPath.startsWith('/signatories/')) currentActive = 'practices';

  const activeIndex = tabs.findIndex((t) => t.id === currentActive);
  const displayIndex = activeIndex >= 0 ? activeIndex + 1 : 1;
  const totalTabs = tabs.length;

  return (
    <aside
      className="hidden xl:flex fixed left-3 top-1/2 -translate-y-1/2 z-30 flex-col items-start select-none"
      aria-label="Folio Spine"
    >
      {/* Paper Spine Container */}
      <div className="bg-[#E7EBEE]/90 backdrop-blur-[2px] border border-[#D5DBE0] p-2.5 shadow-[0_2px_8px_rgba(20,24,28,0.03)] w-[124px]">
        {/* Folio Header */}
        <div className="px-1.5 pb-2 border-b border-[#D5DBE0] mb-2 flex items-center justify-between">
          <span className="ui-label text-[9px] text-[#5C6770] tracking-[0.2em]">Folio</span>
          <span className="text-[10px] font-mono-tabular text-[#5C6770]">RUN 01</span>
        </div>

        {/* Vertical Tabs */}
        <nav className="flex flex-col space-y-1" aria-label="Spine navigation">
          {tabs.map((tab, idx) => {
            const isActive = tab.id === currentActive;
            return (
              <button
                key={tab.id}
                onClick={() => onNavigateSection(tab.id)}
                className={`group relative flex items-center w-full text-left py-1 px-2 text-[11px] uppercase tracking-[0.14em] transition-all duration-200 ${
                  isActive
                    ? 'text-[#14181C] font-semibold bg-[#F3F5F7]'
                    : 'text-[#5C6770] hover:text-[#14181C] hover:bg-[#F3F5F7]/50'
                }`}
              >
                {/* 2px cobalt notch on active tab */}
                {isActive && (
                  <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#1F4E79]" />
                )}
                <span className="truncate">{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Under tabs: Circular impression gauge */}
        <div className="mt-3 pt-2.5 border-t border-[#D5DBE0] flex flex-col items-center">
          <div className="relative w-12 h-12 flex items-center justify-center">
            {/* Gauge dial circle */}
            <svg className="w-12 h-12 -rotate-90" viewBox="0 0 48 48">
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="#D5DBE0"
                strokeWidth="1.5"
                fill="none"
              />
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="#1F4E79"
                strokeWidth="2"
                strokeDasharray={125.6}
                strokeDashoffset={125.6 - (125.6 * displayIndex) / totalTabs}
                strokeLinecap="square"
                fill="none"
                className="transition-all duration-300 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center leading-none">
              <span className="text-[10px] font-mono-tabular font-semibold text-[#14181C]">
                0{displayIndex}
              </span>
              <span className="text-[8px] text-[#5C6770] mt-0.5">
                /0{totalTabs}
              </span>
            </div>
          </div>
          <span className="text-[9px] uppercase tracking-[0.16em] text-[#5C6770] mt-1.5 font-medium">
            Impression
          </span>
        </div>
      </div>
    </aside>
  );
};
