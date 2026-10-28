import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, Calendar, ShieldCheck, Globe } from 'lucide-react';
import { SchoolLogo } from './SchoolLogo';
import { Language, TRANSLATIONS } from '../data/translations';

export type PageId =
  | 'home'
  | 'about'
  | 'programmes'
  | 'admissions'
  | 'contact';

interface HeaderProps {
  currentPage: PageId;
  onNavigateTo: (page: PageId) => void;
  onOpenAdmission: (defaultCycle?: string) => void;
  lang: Language;
  onToggleLang: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigateTo,
  onOpenAdmission,
  lang,
  onToggleLang,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'programmes', label: t.nav.programmes },
    { id: 'admissions', label: t.nav.admissions },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (pageId: PageId) => {
    onNavigateTo(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Operational Ribbon */}
      <div className="bg-[#0A1626] text-stone-300 text-xs py-2 px-4 border-b border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-amber-300 font-medium">
              <Calendar className="w-3.5 h-3.5" />
              <span>{t.year}</span>
            </span>
            <span className="hidden sm:inline text-stone-500" aria-hidden="true">·</span>
            <a
              href="https://www.google.com/maps/search/?api=1&query=PGX5%2BX35+Yoff+Dakar"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-stone-300 hover:text-amber-300 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-stone-400" />
              <span>PGX5+X35 · Route Aéroport (face cité ASECNA)</span>
            </a>
            <span className="hidden md:inline text-stone-500" aria-hidden="true">·</span>
            <span className="hidden md:flex items-center gap-1 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t.onecsAccreditation}</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs ml-auto">
            {/* Language Toggle Button */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors cursor-pointer border border-white/15"
              title="Changer de langue / Switch language"
            >
              <Globe className="w-3.5 h-3.5 text-amber-300" />
              <span>{lang === 'fr' ? '🇬🇧 English' : '🇫🇷 Français'}</span>
            </button>

            <a
              href="tel:+221338202113"
              className="flex items-center gap-1.5 text-stone-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span className="font-mono tabular-nums">+221 33 820 21 13</span>
            </a>
            <span className="text-stone-600 hidden sm:inline" aria-hidden="true">|</span>
            <span className="text-stone-400 hidden lg:inline">{t.openingHours}</span>
          </div>
        </div>
      </div>

      {/* Primary Top Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
          
          {/* Logo & School Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left whitespace-nowrap shrink-0 group focus-visible:outline-2 focus-visible:outline-blue-900 rounded-sm cursor-pointer"
          >
            <SchoolLogo variant="full" size="sm" showText={true} />
          </button>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-medium text-stone-700">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`whitespace-nowrap shrink-0 py-1 transition-colors relative hover:text-[#0F294A] text-xs font-semibold cursor-pointer ${
                    isActive
                      ? 'text-[#0F294A] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0F294A]'
                      : 'text-stone-600'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* CTA and Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenAdmission()}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#0F294A] hover:bg-[#1E3A8A] active:bg-[#0A1D36] rounded-md transition-all whitespace-nowrap shrink-0 shadow-xs cursor-pointer"
            >
              {t.ctaAdmission}
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-md transition-colors"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
            <div className="flex justify-between items-center pb-2 border-b border-stone-100">
              <span className="text-xs font-bold text-stone-500 uppercase">Menu</span>
              <button
                onClick={onToggleLang}
                className="flex items-center gap-1.5 px-3 py-1 rounded bg-stone-100 hover:bg-stone-200 text-xs font-bold text-stone-800"
              >
                <Globe className="w-3.5 h-3.5 text-amber-600" />
                <span>{lang === 'fr' ? '🇬🇧 Switch to English' : '🇫🇷 Passer en Français'}</span>
              </button>
            </div>

            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-[#0F294A] text-white'
                        : 'text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
                  </button>
                );
              })}
            </nav>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmission();
                }}
                className="w-full py-3 text-center text-xs font-bold text-white bg-amber-500 hover:bg-amber-600 rounded-lg shadow-sm"
              >
                {t.ctaAdmission}
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
