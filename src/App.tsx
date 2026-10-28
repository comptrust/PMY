/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';

// Presentation de Marie Yoff Components & Pages
import { Header, PageId } from './components/Header';
import { Footer } from './components/Footer';
import { AdmissionModal } from './components/AdmissionModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AcademicsPage } from './pages/AcademicsPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { ContactPage } from './pages/ContactPage';
import { Language } from './data/translations';

export default function App() {
  // Bilingual state: default 'fr' (French), toggleable to 'en' (English)
  const [lang, setLang] = useState<Language>('fr');

  // Navigation state
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [admissionDefaultCycle, setAdmissionDefaultCycle] = useState('primaire');

  // Sync hash routing
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      const validPages: PageId[] = [
        'home',
        'about',
        'programmes',
        'admissions',
        'contact',
      ];
      
      // Handle legacy or aliases
      if (hash === 'cycles' || hash === 'academics') {
        setCurrentPage('programmes');
      } else if (validPages.includes(hash as PageId)) {
        setCurrentPage(hash as PageId);
      }
    };

    parseHash();
    window.addEventListener('popstate', parseHash);
    return () => window.removeEventListener('popstate', parseHash);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLang = () => {
    setLang((prev) => (prev === 'fr' ? 'en' : 'fr'));
  };

  const handleOpenAdmission = (defaultCycle = 'primaire') => {
    setAdmissionDefaultCycle(defaultCycle);
    setIsAdmissionModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F172A] flex flex-col font-sans selection:bg-[#0284C7] selection:text-white">
      {/* Official Header */}
      <Header
        currentPage={currentPage}
        onNavigateTo={navigateTo}
        onOpenAdmission={handleOpenAdmission}
        lang={lang}
        onToggleLang={toggleLang}
      />

      {/* Main Content View based on PageId */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onOpenAdmission={handleOpenAdmission}
            onNavigateTo={navigateTo}
            lang={lang}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigateHome={() => navigateTo('home')}
            onOpenAdmission={() => handleOpenAdmission('primaire')}
            onNavigateTo={navigateTo}
            lang={lang}
          />
        )}

        {currentPage === 'programmes' && (
          <AcademicsPage
            onNavigateHome={() => navigateTo('home')}
            onOpenAdmission={handleOpenAdmission}
            onNavigateTo={navigateTo}
            lang={lang}
          />
        )}

        {currentPage === 'admissions' && (
          <AdmissionsPage
            onNavigateHome={() => navigateTo('home')}
            onOpenAdmission={handleOpenAdmission}
            lang={lang}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigateHome={() => navigateTo('home')}
            onOpenAdmission={() => handleOpenAdmission('primaire')}
            lang={lang}
          />
        )}
      </main>

      {/* Official Footer with COMPTRUST.TECH link & Archidiocèse info */}
      <Footer onNavigateTo={navigateTo} lang={lang} />

      {/* Pre-Registration Modal */}
      <AdmissionModal
        isOpen={isAdmissionModalOpen}
        onClose={() => setIsAdmissionModalOpen(false)}
        defaultCycle={admissionDefaultCycle}
      />
    </div>
  );
}
