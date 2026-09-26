import React from 'react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const navLinks = [
    { label: 'Index', path: '/index' },
    { label: 'Signatories', path: '/signatories' },
    { label: 'The Creed', path: '/creed' },
    { label: 'Ledger', path: '/ledger' },
    { label: 'Impressions', path: '/impressions' },
    { label: 'Notes', path: '/notes' },
  ];

  return (
    <header className="sticky top-0 z-40 h-16 w-full bg-[#F3F5F7] border-b border-[#D5DBE0]">
      <div className="max-w-[1240px] mx-auto h-full px-6 lg:px-12 flex items-center justify-between">
        {/* Zone 1: Wordmark */}
        <button
          onClick={() => onNavigate('/')}
          className="text-left font-display text-xl font-bold tracking-tight text-[#14181C] hover:opacity-85 transition-opacity"
        >
          INKCREED
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8">
          {navLinks.map((link) => {
            const isActive =
              currentPath === link.path ||
              (link.path !== '/' && currentPath.startsWith(link.path));
            return (
              <button
                key={link.path}
                onClick={() => onNavigate(link.path)}
                className={`text-[13px] font-medium tracking-wide transition-colors relative py-1 ${
                  isActive
                    ? 'text-[#14181C] font-semibold'
                    : 'text-[#5C6770] hover:text-[#14181C]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#1F4E79]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Far right boxed button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('/register')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-all rounded-[1px] ${
              currentPath === '/register'
                ? 'bg-[#1F4E79] text-white shadow-sm'
                : 'border border-[#14181C] text-[#14181C] hover:bg-[#14181C] hover:text-[#F3F5F7]'
            }`}
          >
            Sign
          </button>
        </div>
      </div>
    </header>
  );
};
