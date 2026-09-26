import React, { useEffect, useState, useMemo } from 'react';
import { Header } from './components/Header';
import { LeftFolioSpine } from './components/LeftFolioSpine';
import { Footer } from './components/Footer';
import { RegistrationCursor } from './components/RegistrationCursor';
import { HomeView } from './views/HomeView';
import { IndexView } from './views/IndexView';
import { SignatoriesView } from './views/SignatoriesView';
import { CreedView } from './views/CreedView';
import { LedgerView } from './views/LedgerView';
import { ImpressionsView } from './views/ImpressionsView';
import { NotesView } from './views/NotesView';
import { RegisterView } from './views/RegisterView';
import { NotFoundView } from './views/NotFoundView';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [activeSectionId, setActiveSectionId] = useState<string>('press');
  const [practiceQuery, setPracticeQuery] = useState<string>('');

  // Handle URL changes & browser history
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname || '/';
      setCurrentPath(path);

      // Extract search params if present
      const params = new URLSearchParams(window.location.search);
      const practice = params.get('practice');
      if (practice) {
        setPracticeQuery(practice);
      } else {
        setPracticeQuery('');
      }

      // Check hash for smooth scroll on load
      if (window.location.hash) {
        const id = window.location.hash.replace('#', '');
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    handleLocationChange();

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const navigate = (path: string, options?: { practice?: string; hash?: string }) => {
    let fullUrl = path;
    if (options?.practice) {
      fullUrl += `?practice=${encodeURIComponent(options.practice)}`;
      setPracticeQuery(options.practice);
    } else {
      setPracticeQuery('');
    }
    if (options?.hash) {
      fullUrl += `#${options.hash}`;
    }

    window.history.pushState({}, '', fullUrl);
    setCurrentPath(path);

    if (options?.hash) {
      setTimeout(() => {
        const el = document.getElementById(options.hash!);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Section observer for homepage folio spine
  useEffect(() => {
    if (currentPath !== '/') return;

    const sectionIds = ['press', 'census', 'plate', 'practices', 'creed', 'ledger', 'register'];
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const middleY = scrollY + windowHeight * 0.35;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (middleY >= top) {
            setActiveSectionId(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentPath]);

  // Handle section click from folio spine
  const handleSpineSectionClick = (sectionId: string) => {
    if (currentPath === '/') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setActiveSectionId(sectionId);
      }
    } else {
      navigate('/', { hash: sectionId });
    }
  };

  // Filter practice and route to /index?practice=...
  const handleFilterPractice = (practiceName: string) => {
    navigate('/index', { practice: practiceName });
  };

  // Route matching logic
  const renderedView = useMemo(() => {
    // 1. Homepage
    if (currentPath === '/') {
      return (
        <HomeView
          onNavigate={navigate}
          onFilterPractice={handleFilterPractice}
        />
      );
    }

    // 2. Collection Index: /index or /index/:id
    if (currentPath === '/index' || currentPath.startsWith('/index/')) {
      const parts = currentPath.split('/');
      const selectedId = parts.length > 2 && parts[2] ? parts[2] : undefined;
      return (
        <IndexView
          selectedId={selectedId}
          initialPracticeFilter={practiceQuery}
          onNavigate={navigate}
        />
      );
    }

    // 3. Signatories: /signatories or /signatories/:slug
    if (currentPath === '/signatories' || currentPath.startsWith('/signatories/')) {
      const parts = currentPath.split('/');
      const selectedSlug = parts.length > 2 && parts[2] ? parts[2] : undefined;
      return (
        <SignatoriesView
          selectedSlug={selectedSlug}
          onNavigate={navigate}
        />
      );
    }

    // 4. Creed: /creed
    if (currentPath === '/creed') {
      return <CreedView onNavigate={navigate} />;
    }

    // 5. Ledger: /ledger or /ledger/:slug
    if (currentPath === '/ledger' || currentPath.startsWith('/ledger/')) {
      const parts = currentPath.split('/');
      const selectedSlug = parts.length > 2 && parts[2] ? parts[2] : undefined;
      return (
        <LedgerView
          selectedSlug={selectedSlug}
          onNavigate={navigate}
        />
      );
    }

    // 6. Impressions: /impressions
    if (currentPath === '/impressions') {
      return <ImpressionsView onNavigate={navigate} />;
    }

    // 7. Notes: /notes
    if (currentPath === '/notes') {
      return <NotesView onNavigate={navigate} />;
    }

    // 8. Register: /register
    if (currentPath === '/register') {
      return <RegisterView onNavigate={navigate} />;
    }

    // Fallback: 404
    return <NotFoundView onNavigate={navigate} />;
  }, [currentPath, practiceQuery]);

  return (
    <div className="min-h-screen bg-[#F3F5F7] text-[#14181C] flex flex-col selection:bg-[#1F4E79] selection:text-white relative">
      {/* Site-wide custom print registration cursor */}
      <RegistrationCursor />

      {/* Persistent Left Folio Spine (Desktop fixed at 12px) */}
      <LeftFolioSpine
        currentPath={currentPath}
        activeSectionId={activeSectionId}
        onNavigateSection={handleSpineSectionClick}
      />

      {/* Persistent Header */}
      <Header currentPath={currentPath} onNavigate={navigate} />

      {/* Main Content Area */}
      <main className="grow flex flex-col">{renderedView}</main>

      {/* Persistent Footer */}
      <Footer onNavigate={navigate} />
    </div>
  );
}
